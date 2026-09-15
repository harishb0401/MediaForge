import React from 'react';

export default function TrackList({ tracks }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%', maxHeight: '280px', overflowY: 'auto' }}>
      {tracks.map((t) => (
        <div 
          key={t.num}
          className="track-row"
          style={{ padding: '8px 12px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', minWidth: 0 }}>
            <span className="font-technical-data text-outline" style={{ width: '24px', flexShrink: 0 }}>
              {t.num}
            </span>
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px', flexShrink: 0 }}>
              music_note
            </span>
            <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column' }}>
              <span className="font-body-md text-on-surface truncate" style={{ fontSize: '13px', lineHeight: '18px' }}>
                {t.title}
              </span>
              <span className="font-technical-badge text-on-surface-variant" style={{ fontSize: '10px' }}>
                {t.artist} • {t.duration}
              </span>
            </div>
          </div>

          <span 
            className="font-technical-badge"
            style={{
              padding: '2px 6px',
              backgroundColor: 'var(--surface-container-lowest)',
              color: 'var(--secondary)',
              borderRadius: 'var(--radius-sm)',
              flexShrink: 0
            }}
          >
            {t.bitrate || '320K MP3'}
          </span>
        </div>
      ))}
    </div>
  );
}
