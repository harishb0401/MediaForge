import React from 'react';

export default function PlatformSelector({ selectedPlatform, onSelect, isProcessing }) {
  const platforms = [
    {
      id: 'youtube',
      name: 'YouTube',
      tagline: '4K VIDEO & AUDIO',
      icon: 'smart_display',
      badge: '4K UHD / MP3'
    },
    {
      id: 'spotify',
      name: 'Spotify',
      tagline: '320K & LOSSLESS',
      icon: 'music_note',
      badge: 'FLAC / MP3'
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)', width: '100%' }}>
      <span className="font-technical-badge text-on-surface uppercase tracking-wider">
        MANUAL INGEST ADAPTER
      </span>

      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'var(--space-sm)'
        }}
      >
        {platforms.map((p) => {
          const isActive = selectedPlatform === p.id;
          return (
            <button
              key={p.id}
              type="button"
              disabled={isProcessing}
              onClick={() => onSelect(p.id)}
              className={`platform-chip ${isActive ? 'active' : ''}`}
              style={{
                height: '84px',
                cursor: isProcessing ? 'not-allowed' : 'pointer',
                opacity: isProcessing && !isActive ? 0.5 : 1
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span 
                    className="material-symbols-outlined" 
                    style={{ 
                      fontSize: '20px',
                      color: isActive ? 'var(--primary)' : 'var(--on-surface-variant)' 
                    }}
                  >
                    {p.icon}
                  </span>
                  <span className="font-headline-sm text-on-surface" style={{ fontSize: '16px' }}>
                    {p.name}
                  </span>
                </div>
                <span 
                  className="font-technical-badge"
                  style={{
                    padding: '2px 6px',
                    backgroundColor: isActive ? 'var(--primary-container)' : 'var(--surface-container-lowest)',
                    color: isActive ? 'var(--on-primary-container)' : 'var(--secondary)',
                    borderRadius: 'var(--radius-sm)'
                  }}
                >
                  {p.badge}
                </span>
              </div>

              <span className="font-technical-badge text-on-surface-variant block" style={{ marginTop: '4px' }}>
                {p.tagline}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
