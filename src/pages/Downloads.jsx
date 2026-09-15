import React, { useState, useEffect } from 'react';
import { downloadStats, mockDownloads } from '../data/mockDownloads';
import DownloadStats from '../components/downloads/DownloadStats';
import DownloadFilters from '../components/downloads/DownloadFilters';
import DownloadSearch from '../components/downloads/DownloadSearch';
import DownloadSort from '../components/downloads/DownloadSort';
import DownloadTable from '../components/downloads/DownloadTable';
import DownloadCard from '../components/downloads/DownloadCard';
import Toast from '../components/Toast';

export default function Downloads() {
  const [records, setRecords] = useState(mockDownloads);
  const [filter, setFilter] = useState('ALL');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('NEWEST');
  const [toastMessage, setToastMessage] = useState(null);

  // Retry handler simulating processing progress: 0% -> 25% -> 48% -> 72% -> 100% -> COMPLETED
  const handleRetry = (id) => {
    // Set to processing 0%
    setRecords((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: 'PROCESSING', progress: 0 } : item
      )
    );

    const steps = [25, 48, 72, 100];
    let stepIdx = 0;

    const interval = setInterval(() => {
      if (stepIdx < steps.length) {
        const nextProgress = steps[stepIdx];
        setRecords((prev) =>
          prev.map((item) =>
            item.id === id
              ? {
                  ...item,
                  progress: nextProgress,
                  status: nextProgress === 100 ? 'COMPLETED' : 'PROCESSING'
                }
              : item
          )
        );
        stepIdx++;
      } else {
        clearInterval(interval);
      }
    }, 400);
  };

  const handleDownload = (item) => {
    setToastMessage(`DOWNLOAD SIMULATION — BACKEND CONNECTION REQUIRED FOR ${item.id}`);
  };

  const clearFilters = () => {
    setFilter('ALL');
    setSearch('');
    setSortBy('NEWEST');
  };

  // Filter & Search Logic
  const filteredRecords = records.filter((item) => {
    // Filter matching
    if (filter === 'YOUTUBE' && item.platform !== 'YouTube') return false;
    if (filter === 'SPOTIFY' && item.platform !== 'Spotify') return false;
    if (filter === 'COMPLETED' && item.status !== 'COMPLETED') return false;
    if (filter === 'PROCESSING' && item.status !== 'PROCESSING') return false;
    if (filter === 'FAILED' && item.status !== 'FAILED') return false;

    // Search matching (title, platform, format)
    if (search.trim()) {
      const q = search.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchPlatform = item.platform.toLowerCase().includes(q);
      const matchFormat = item.format.toLowerCase().includes(q);
      if (!matchTitle && !matchPlatform && !matchFormat) return false;
    }

    return true;
  });

  // Sorting Logic
  const sortedRecords = [...filteredRecords].sort((a, b) => {
    if (sortBy === 'NEWEST') return b.timestamp - a.timestamp;
    if (sortBy === 'OLDEST') return a.timestamp - b.timestamp;

    // Helper function to parse size string to MB float
    const parseSize = (sz) => {
      const parts = sz.split(' ');
      const val = parseFloat(parts[0]) || 0;
      const unit = parts[1] ? parts[1].toUpperCase() : 'MB';
      if (unit === 'GB') return val * 1024;
      return val;
    };

    if (sortBy === 'LARGEST') return parseSize(b.size) - parseSize(a.size);
    if (sortBy === 'SMALLEST') return parseSize(a.size) - parseSize(b.size);
    return 0;
  });

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '80px', minHeight: '100vh' }}>
      <div className="px-grid-margin max-w-container">
        {/* Page Header */}
        <div style={{ marginBottom: 'var(--space-lg)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-xs)' }}>
            <span className="font-technical-badge uppercase text-secondary" style={{ letterSpacing: '0.1em' }}>
              05 // ARCHIVE SYSTEM
            </span>
            <span style={{ color: 'var(--outline-variant)' }}>|</span>
            <span className="font-technical-badge uppercase text-outline">TLS 1.3 ENCRYPTED</span>
          </div>
          <h1 className="font-headline-xl text-on-surface" style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>
            DOWNLOADS
          </h1>
          <p className="font-body-md text-on-surface-variant" style={{ margin: '8px 0 0 0', fontSize: '15px' }}>
            FORGED MEDIA ARCHIVE // HISTORICAL TRANSCODE RECORDS
          </p>
        </div>

        {/* Download Statistics Cards */}
        <DownloadStats stats={downloadStats} />

        {/* Filter, Search & Sort Control Bar */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-md)',
            backgroundColor: 'var(--surface-container-low)',
            padding: 'var(--space-md)',
            borderRadius: 'var(--radius-default)',
            border: '1px solid rgba(212, 139, 109, 0.15)',
            marginBottom: 'var(--space-lg)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
            <DownloadFilters activeFilter={filter} onFilterChange={setFilter} />
            <DownloadSort sortBy={sortBy} onSortChange={setSortBy} />
          </div>
          <div style={{ width: '100%' }}>
            <DownloadSearch search={search} onSearchChange={setSearch} />
          </div>
        </div>

        {/* Records Display Section */}
        {sortedRecords.length > 0 ? (
          <>
            {/* Desktop Table View */}
            <div className="hidden md:block">
              <DownloadTable 
                records={sortedRecords} 
                onDownload={handleDownload} 
                onRetry={handleRetry} 
              />
            </div>

            {/* Mobile Card View */}
            <div className="block md:hidden" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              {sortedRecords.map((item) => (
                <DownloadCard 
                  key={item.id} 
                  item={item} 
                  onDownload={handleDownload} 
                  onRetry={handleRetry} 
                />
              ))}
            </div>
          </>
        ) : (
          /* Empty State */
          <div 
            style={{
              backgroundColor: 'var(--surface-container-lowest)',
              borderRadius: 'var(--radius-default)',
              border: '1px dashed rgba(212, 139, 109, 0.25)',
              padding: 'var(--space-2xl) var(--space-md)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'var(--space-sm)'
            }}
          >
            <span className="material-symbols-outlined text-outline" style={{ fontSize: '48px', opacity: 0.6 }}>
              inventory_2
            </span>
            <div className="font-headline-sm text-on-surface" style={{ fontSize: '18px', fontWeight: 700 }}>
              NO FORGED MEDIA FOUND
            </div>
            <p className="font-body-sm text-on-surface-variant" style={{ maxWidth: '400px', margin: 0, fontSize: '14px' }}>
              Try adjusting your search query or switching active filter parameters.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="font-technical-badge uppercase text-on-primary-container"
              style={{
                marginTop: 'var(--space-xs)',
                padding: 'var(--space-xs) var(--space-md)',
                backgroundColor: 'var(--primary-container)',
                border: 'none',
                borderRadius: 'var(--radius-sm)',
                cursor: 'pointer',
                fontSize: '12px',
                letterSpacing: '0.05em'
              }}
            >
              [ CLEAR FILTERS ]
            </button>
          </div>
        )}
      </div>

      {/* Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
