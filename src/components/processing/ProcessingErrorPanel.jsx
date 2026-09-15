import React from 'react';

export default function ProcessingErrorPanel({ invalidUrl, onReset }) {
  return (
    <div 
      className="forge-card-elevated"
      style={{
        padding: 'var(--space-xl)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-lg)',
        backgroundColor: 'var(--surface-container-high)',
        border: '1px solid var(--error)',
        boxShadow: '0 0 24px rgba(147, 0, 10, 0.4)'
      }}
    >
      {/* Error Badge */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-sm)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
          <span className="material-symbols-outlined" style={{ fontSize: '24px', color: 'var(--error)' }}>warning</span>
          <span className="font-headline-sm" style={{ fontSize: '20px', color: 'var(--error)' }}>
            SOURCE REJECTED
          </span>
        </div>
        <span 
          className="font-technical-badge"
          style={{
            padding: '4px 8px',
            backgroundColor: 'var(--error-container)',
            color: 'var(--on-error-container)',
            borderRadius: 'var(--radius-sm)'
          }}
        >
          HTTP 422 INGEST ERROR
        </span>
      </div>

      {/* Error Description Box */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-sm)',
          backgroundColor: 'var(--surface-container-lowest)',
          padding: 'var(--space-md)',
          borderRadius: 'var(--radius-default)',
          border: '1px solid rgba(147, 0, 10, 0.3)'
        }}
      >
        <span className="font-technical-badge text-on-surface-variant uppercase">INVALID MEDIA SOURCE</span>
        <p className="font-body-md text-on-surface" style={{ marginTop: '2px' }}>
          The target URL <code style={{ color: 'var(--error)', backgroundColor: 'rgba(147,0,10,0.2)', padding: '2px 6px', borderRadius: '2px' }}>{invalidUrl || 'provided'}</code> is not recognized by MediaForge transcode adapters.
        </p>

        <div style={{ marginTop: 'var(--space-xs)', paddingTop: 'var(--space-xs)', borderTop: '1px solid rgba(212, 139, 109, 0.1)' }}>
          <span className="font-technical-badge text-secondary uppercase block mb-1">SUPPORTED SOURCES</span>
          <div style={{ display: 'flex', gap: '8px' }}>
            <span className="font-technical-badge" style={{ padding: '2px 8px', backgroundColor: 'var(--surface-container)', color: 'var(--primary)', borderRadius: '2px' }}>
              YOUTUBE (VIDEOS & PLAYLISTS)
            </span>
            <span className="font-technical-badge" style={{ padding: '2px 8px', backgroundColor: 'var(--surface-container)', color: 'var(--secondary)', borderRadius: '2px' }}>
              SPOTIFY (TRACKS & PLAYLISTS)
            </span>
          </div>
        </div>
      </div>

      {/* Reset Action */}
      <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
        <button
          type="button"
          onClick={onReset}
          className="btn-forge-primary"
          style={{
            padding: '12px 24px',
            fontSize: '13px',
            backgroundColor: 'var(--error-container)',
            color: 'var(--on-error-container)',
            borderColor: 'var(--error)'
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>refresh</span>
          <span>[ RESET INTAKE ]</span>
        </button>
      </div>
    </div>
  );
}
