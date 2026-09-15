import React from 'react';

export default function ProgressIndicator({ stateText, percent }) {
  return (
    <div 
      className="forge-card-elevated"
      style={{
        padding: 'var(--space-xl)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-lg)',
        backgroundColor: 'var(--surface-container-high)',
        border: '1px solid rgba(180, 42, 26, 0.4)',
        boxShadow: '0 0 24px rgba(180, 42, 26, 0.2)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
          <svg 
            style={{ 
              width: '32px', 
              height: '32px', 
              animation: 'spin 1s linear infinite', 
              color: 'var(--primary)' 
            }} 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle opacity="0.25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
            <path opacity="0.75" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" fill="currentColor" />
          </svg>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span className="font-technical-badge text-secondary uppercase tracking-widest">
              HARDWARE BLADE TRANSCODING IN PROGRESS
            </span>
            <span className="font-headline-sm text-on-surface" style={{ marginTop: '2px', fontSize: '18px' }}>
              {stateText}
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="font-technical-badge text-on-surface-variant">PROGRESS:</span>
          <span className="font-display-hero text-primary" style={{ fontSize: '36px', lineHeight: 1 }}>
            {percent}%
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <div 
          style={{
            width: '100%',
            height: '8px',
            backgroundColor: 'var(--surface-container-lowest)',
            borderRadius: 'var(--radius-sm)',
            overflow: 'hidden',
            border: '1px solid rgba(212, 139, 109, 0.2)'
          }}
        >
          <div 
            style={{
              width: `${percent}%`,
              height: '100%',
              background: 'linear-gradient(90deg, var(--primary-container), var(--primary), var(--secondary))',
              transition: 'width 200ms ease-out',
              boxShadow: '0 0 12px var(--primary)'
            }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className="font-technical-badge text-outline">
          <span>0% INGEST</span>
          <span>50% TRANSCODE</span>
          <span>100% COMPLETED</span>
        </div>
      </div>
    </div>
  );
}
