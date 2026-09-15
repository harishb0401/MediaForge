import React, { useState } from 'react';

export default function ResultCard({ resultData, onReset }) {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownloadClick = () => {
    setDownloaded(true);
    setTimeout(() => {
      setDownloaded(false);
    }, 3000);
  };

  return (
    <div 
      className="forge-card-elevated"
      style={{
        padding: 'var(--space-xl)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-lg)',
        backgroundColor: 'var(--surface-container-high)',
        border: '1px solid var(--primary)',
        boxShadow: '0 0 32px rgba(180, 42, 26, 0.35)'
      }}
    >
      {/* Header Badge */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-sm)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
          <span className="material-symbols-outlined text-primary" style={{ fontSize: '24px' }}>check_circle</span>
          <span className="font-headline-sm text-on-surface" style={{ fontSize: '20px' }}>
            FORGING COMPLETE
          </span>
        </div>
        <span className="font-technical-badge text-secondary bg-surface-container-lowest" style={{ padding: '4px 8px', borderRadius: 'var(--radius-sm)' }}>
          CONTAINER VALIDATED • ZERO-LOSS
        </span>
      </div>

      {/* File Details Grid */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 'var(--space-sm)',
          backgroundColor: 'var(--surface-container-lowest)',
          padding: 'var(--space-md)',
          borderRadius: 'var(--radius-default)',
          border: '1px solid rgba(212, 139, 109, 0.15)'
        }}
        className="font-technical-data"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gridColumn: '1 / -1' }}>
          <span className="font-technical-badge text-on-surface-variant uppercase">FILE NAME</span>
          <span className="font-headline-sm text-on-surface" style={{ marginTop: '2px', fontSize: '15px', wordBreak: 'break-all' }}>
            {resultData.fileName}
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span className="font-technical-badge text-on-surface-variant uppercase">FORMAT</span>
          <span className="text-secondary" style={{ marginTop: '2px', fontWeight: 600 }}>
            {resultData.format.toUpperCase()}
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span className="font-technical-badge text-on-surface-variant uppercase">QUALITY</span>
          <span className="text-primary" style={{ marginTop: '2px', fontWeight: 600 }}>
            {resultData.quality.toUpperCase()}
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span className="font-technical-badge text-on-surface-variant uppercase">ESTIMATED SIZE</span>
          <span className="text-secondary" style={{ marginTop: '2px', fontWeight: 600 }}>
            {resultData.size}
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span className="font-technical-badge text-on-surface-variant uppercase">DURATION</span>
          <span className="text-on-surface" style={{ marginTop: '2px', fontWeight: 600 }}>
            {resultData.duration}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--space-md)', marginTop: 'var(--space-xs)' }}>
        <button
          type="button"
          onClick={handleDownloadClick}
          className="btn-forge-primary"
          style={{
            padding: '12px 28px',
            fontSize: '14px',
            backgroundColor: downloaded ? 'var(--secondary)' : 'var(--primary-container)',
            color: downloaded ? 'var(--on-secondary)' : 'var(--on-primary-container)',
            boxShadow: '0 0 20px rgba(180, 42, 26, 0.4)'
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
            {downloaded ? 'done' : 'download'}
          </span>
          <span>{downloaded ? 'DOWNLOAD READY' : '[ DOWNLOAD FILE ]'}</span>
        </button>

        <button
          type="button"
          onClick={onReset}
          className="btn-hardware-secondary"
          style={{ padding: '12px 20px', fontSize: '13px' }}
        >
          <span>[ FORGE ANOTHER FILE ]</span>
        </button>
      </div>
    </div>
  );
}
