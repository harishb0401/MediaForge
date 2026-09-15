import React from 'react';

export default function FormatSelector({ platform, selectedFormat, onSelect, isProcessing }) {
  const formatsByPlatform = {
    youtube: [
      { id: 'mp4', label: 'MP4', badge: 'VIDEO', desc: 'HEVC / H.264 Video Stream' },
      { id: 'mp3', label: 'MP3', badge: 'AUDIO', desc: 'Constant Bitrate Audio' }
    ],
    spotify: [
      { id: 'mp3', label: 'MP3', badge: 'AUDIO', desc: 'ID3v2 Tagged Audio Stream' }
    ]
  };

  const formats = formatsByPlatform[platform] || formatsByPlatform.youtube;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)', width: '100%' }}>
      <span className="font-technical-badge text-on-surface uppercase tracking-wider">
        EXPORT CONTAINER FORMAT
      </span>

      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 'var(--space-sm)'
        }}
      >
        {formats.map((fmt) => {
          const isActive = selectedFormat === fmt.id;
          return (
            <button
              key={fmt.id}
              type="button"
              disabled={isProcessing}
              onClick={() => onSelect(fmt.id)}
              className={`format-badge ${isActive ? 'active' : ''}`}
              style={{
                cursor: isProcessing ? 'not-allowed' : 'pointer',
                opacity: isProcessing && !isActive ? 0.5 : 1
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="font-headline-sm text-on-surface" style={{ fontSize: '16px' }}>
                  {fmt.label}
                </span>
                <span 
                  className="font-technical-badge"
                  style={{
                    padding: '2px 6px',
                    backgroundColor: isActive ? 'var(--primary-container)' : 'var(--surface-container-lowest)',
                    color: isActive ? 'var(--on-primary-container)' : 'var(--secondary)',
                    borderRadius: 'var(--radius-sm)'
                  }}
                >
                  {fmt.badge}
                </span>
              </div>
              <span className="font-body-sm text-on-surface-variant block" style={{ marginTop: '6px' }}>
                {fmt.desc}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
