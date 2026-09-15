import React from 'react';

export default function PlatformDistribution({ distribution }) {
  return (
    <div 
      style={{
        backgroundColor: 'var(--surface-container-low)',
        borderRadius: 'var(--radius-default)',
        border: '1px solid rgba(212, 139, 109, 0.15)',
        padding: 'var(--space-md) var(--space-lg)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-md)', borderBottom: '1px solid rgba(212, 139, 109, 0.15)', paddingBottom: 'var(--space-xs)' }}>
        <span className="font-technical-badge uppercase text-secondary" style={{ letterSpacing: '0.08em' }}>
          // PLATFORM DISTRIBUTION
        </span>
        <span className="font-technical-data text-outline" style={{ fontSize: '11px' }}>
          INGEST SHARE
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        {/* YouTube */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <span className="font-technical-badge uppercase text-primary" style={{ fontSize: '12px' }}>
              YOUTUBE
            </span>
            <span className="font-technical-data text-primary" style={{ fontSize: '14px', fontWeight: 700 }}>
              {distribution.youtube}%
            </span>
          </div>
          <div style={{ height: '8px', width: '100%', backgroundColor: 'rgba(212, 139, 109, 0.15)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${distribution.youtube}%`, backgroundColor: 'var(--primary)', boxShadow: '0 0 8px #ffb4a7' }} />
          </div>
        </div>

        {/* Spotify */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <span className="font-technical-badge uppercase text-tertiary" style={{ fontSize: '12px' }}>
              SPOTIFY
            </span>
            <span className="font-technical-data text-tertiary" style={{ fontSize: '14px', fontWeight: 700 }}>
              {distribution.spotify}%
            </span>
          </div>
          <div style={{ height: '8px', width: '100%', backgroundColor: 'rgba(212, 139, 109, 0.15)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${distribution.spotify}%`, backgroundColor: 'var(--tertiary)', boxShadow: '0 0 8px #dfb0c2' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
