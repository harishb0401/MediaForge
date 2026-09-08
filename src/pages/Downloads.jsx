import React, { useState } from 'react';
import { MOCK_DOWNLOADS_HISTORY } from '../config/platforms';

export default function Downloads() {
  const [items, setItems] = useState(MOCK_DOWNLOADS_HISTORY);
  const [filter, setFilter] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [actionNotice, setActionNotice] = useState(null);

  const filteredItems = items.filter(item => {
    const matchesFilter = filter === 'ALL' || item.status.toUpperCase() === filter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.platform.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
    showNotice(`Record ${id} removed from session queue.`);
  };

  const handleDownload = (item) => {
    showNotice(`Simulated download triggered for: ${item.title}`);
  };

  const handleClearCompleted = () => {
    setItems(items.filter(item => item.status !== 'Completed'));
    showNotice('Completed records cleared from session.');
  };

  const showNotice = (msg) => {
    setActionNotice(msg);
    setTimeout(() => setActionNotice(null), 3000);
  };

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 'var(--space-2xl)' }}>
      {/* Header Banner */}
      <section 
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: 'var(--space-xl)',
          paddingBottom: 'var(--space-xl)',
          backgroundColor: 'rgba(36, 25, 24, 0.7)',
          borderBottom: '1px solid rgba(212, 139, 109, 0.15)'
        }}
        className="px-responsive"
      >
        <div className="app-container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '24px' }}>download</span>
            <span className="font-technical-badge text-primary uppercase tracking-widest">
              TELEMETRY LOG // DOWNLOAD HISTORY & QUEUE MONITOR
            </span>
          </div>
          <h1 className="font-headline-lg text-on-surface uppercase tracking-tight">
            Transcode Queue & Egress History
          </h1>
          <p className="font-body-md text-on-surface-variant" style={{ maxWidth: '640px' }}>
            Inspect active background transcode jobs, monitor multi-gigabyte egress streams, and access previously forged media archives.
          </p>
        </div>
      </section>

      {/* Main Queue Console */}
      <section className="px-responsive" style={{ paddingBottom: 'var(--space-4xl)' }}>
        <div className="app-container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
          
          {/* Action Notification Toast */}
          {actionNotice && (
            <div 
              style={{
                backgroundColor: 'var(--color-surface-container-high)',
                border: '1px solid var(--color-primary)',
                padding: '10px 16px',
                borderRadius: 'var(--radius-default)',
                color: 'var(--color-on-surface)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: 'var(--shadow-thermal-sm)'
              }}
              className="font-technical-data"
            >
              <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>info</span>
              <span>{actionNotice}</span>
            </div>
          )}

          {/* Quick Metrics Bar */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 'var(--space-md)' }}>
            <div className="forge-card" style={{ padding: 'var(--space-md)', display: 'flex', flexDirection: 'column' }}>
              <span className="font-technical-badge text-on-surface-variant uppercase">ACTIVE SESSION ITEMS</span>
              <span className="font-headline-md text-on-surface" style={{ marginTop: '4px' }}>{items.length}</span>
              <span className="font-technical-data text-secondary" style={{ fontSize: '11px', marginTop: '2px' }}>Current Buffer</span>
            </div>

            <div className="forge-card" style={{ padding: 'var(--space-md)', display: 'flex', flexDirection: 'column' }}>
              <span className="font-technical-badge text-on-surface-variant uppercase">COMPLETED EXPORTS</span>
              <span className="font-headline-md text-primary" style={{ marginTop: '4px' }}>
                {items.filter(i => i.status === 'Completed').length}
              </span>
              <span className="font-technical-data text-primary" style={{ fontSize: '11px', marginTop: '2px' }}>100% Validated</span>
            </div>

            <div className="forge-card" style={{ padding: 'var(--space-md)', display: 'flex', flexDirection: 'column' }}>
              <span className="font-technical-badge text-on-surface-variant uppercase">IN PIPELINE</span>
              <span className="font-headline-md text-secondary" style={{ marginTop: '4px' }}>
                {items.filter(i => i.status === 'Processing' || i.status === 'Queued').length}
              </span>
              <span className="font-technical-data text-outline" style={{ fontSize: '11px', marginTop: '2px' }}>Transcode Blades</span>
            </div>

            <div className="forge-card" style={{ padding: 'var(--space-md)', display: 'flex', flexDirection: 'column' }}>
              <span className="font-technical-badge text-on-surface-variant uppercase">BUFFER VOLUME</span>
              <span className="font-headline-md text-tertiary" style={{ marginTop: '4px' }}>4.52 GB</span>
              <span className="font-technical-data text-outline" style={{ fontSize: '11px', marginTop: '2px' }}>Volatile RAM Cache</span>
            </div>
          </div>

          {/* Filter & Search Bar */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 'var(--space-md)',
              padding: 'var(--space-sm)',
              backgroundColor: 'var(--color-surface-container-low)',
              borderRadius: 'var(--radius-default)',
              border: '1px solid rgba(212, 139, 109, 0.15)'
            }}
          >
            {/* Filter Tabs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
              {['ALL', 'COMPLETED', 'PROCESSING', 'QUEUED'].map((st) => (
                <button
                  key={st}
                  type="button"
                  onClick={() => setFilter(st)}
                  className={`font-technical-badge ${filter === st ? 'bg-primary-container text-on-primary-container' : 'bg-surface-container text-on-surface-variant hover:text-on-surface'}`}
                  style={{
                    padding: '8px 14px',
                    borderRadius: 'var(--radius-sm)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {st}
                </button>
              ))}
            </div>

            {/* Search Input & Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', flex: 1, justifyContent: 'flex-end', minWidth: '240px' }}>
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'var(--color-surface-container-lowest)',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-default)',
                  border: '1px solid rgba(212, 139, 109, 0.2)',
                  flex: 1,
                  maxWidth: '320px'
                }}
              >
                <span className="material-symbols-outlined text-outline" style={{ fontSize: '16px' }}>search</span>
                <input
                  type="text"
                  placeholder="Filter by title, platform, or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    background: 'none',
                    border: 'none',
                    outline: 'none',
                    color: 'var(--color-on-surface)',
                    fontFamily: 'var(--font-technical)',
                    fontSize: '12px',
                    width: '100%'
                  }}
                />
              </div>

              <button
                type="button"
                onClick={handleClearCompleted}
                className="btn-hardware-secondary"
                style={{ fontSize: '11px', padding: '6px 12px' }}
              >
                Clear Completed
              </button>
            </div>
          </div>

          {/* Download Records List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
            {filteredItems.length === 0 ? (
              <div 
                className="forge-card"
                style={{
                  padding: 'var(--space-3xl)',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 'var(--space-sm)'
                }}
              >
                <span className="material-symbols-outlined text-outline" style={{ fontSize: '40px' }}>inbox</span>
                <span className="font-headline-sm text-on-surface">No records matching active query</span>
                <span className="font-body-sm text-on-surface-variant">Adjust your filter parameters or start forging a new media link.</span>
              </div>
            ) : (
              filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="forge-card"
                  style={{
                    padding: 'var(--space-md) var(--space-lg)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-sm)',
                    transition: 'border-color 0.2s',
                    backgroundColor: 'var(--color-surface-container-low)'
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-md)' }}>
                    {/* Left Details */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', minWidth: 0 }}>
                      <div 
                        style={{
                          width: '40px',
                          height: '40px',
                          backgroundColor: 'var(--color-surface-container-high)',
                          borderRadius: 'var(--radius-default)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: item.status === 'Completed' ? 'var(--color-primary)' : 'var(--color-secondary)',
                          flexShrink: 0
                        }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>
                          {item.status === 'Completed' ? 'file_download_done' : item.status === 'Processing' ? 'sync' : 'hourglass_empty'}
                        </span>
                      </div>

                      <div style={{ minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span className="font-technical-badge text-outline">{item.id}</span>
                          <span className="font-technical-badge text-secondary uppercase">• {item.platform}</span>
                          <span 
                            className="font-technical-badge"
                            style={{
                              padding: '1px 6px',
                              borderRadius: '2px',
                              backgroundColor: item.status === 'Completed' 
                                ? 'rgba(180, 42, 26, 0.2)' 
                                : item.status === 'Processing' 
                                ? 'rgba(212, 139, 109, 0.2)' 
                                : 'rgba(90, 65, 60, 0.2)',
                              color: item.status === 'Completed' ? 'var(--color-primary)' : 'var(--color-secondary)'
                            }}
                          >
                            {item.status}
                          </span>
                        </div>

                        <h3 
                          className="font-headline-sm text-on-surface"
                          style={{
                            fontSize: '15px',
                            marginTop: '2px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            maxWidth: '600px'
                          }}
                        >
                          {item.title}
                        </h3>

                        <div className="font-technical-data text-on-surface-variant" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '11px', marginTop: '2px' }}>
                          <span>FORMAT: <strong className="text-on-surface">{item.format}</strong></span>
                          <span>•</span>
                          <span>QUALITY: {item.quality}</span>
                          <span>•</span>
                          <span>DURATION: {item.duration}</span>
                          <span>•</span>
                          <span>SIZE: <strong className="text-secondary">{item.size}</strong></span>
                          <span>•</span>
                          <span>DATE: {item.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Actions */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                      <button
                        type="button"
                        onClick={() => handleDownload(item)}
                        className="btn-forge-primary"
                        style={{ padding: '8px 16px', fontSize: '12px' }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>download</span>
                        <span>Download</span>
                      </button>

                      <button
                        type="button"
                        aria-label="Remove item"
                        onClick={() => handleDelete(item.id)}
                        className="btn-ghost-icon"
                        style={{ width: '32px', height: '32px' }}
                      >
                        <span className="material-symbols-outlined text-outline hover:text-primary" style={{ fontSize: '18px' }}>delete</span>
                      </button>
                    </div>
                  </div>

                  {/* Progress bar if processing */}
                  {item.status === 'Processing' && (
                    <div style={{ marginTop: '8px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }} className="font-technical-badge text-secondary">
                        <span>TRANSCAPACITY PROGRESS</span>
                        <span>{item.progress}%</span>
                      </div>
                      <div style={{ width: '100%', height: '4px', backgroundColor: 'var(--color-surface-container-lowest)', borderRadius: '2px', overflow: 'hidden' }}>
                        <div style={{ width: `${item.progress}%`, height: '100%', backgroundColor: 'var(--color-primary)', transition: 'width 0.3s' }} />
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
