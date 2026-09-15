import React from 'react';

export default function QualitySelector({ format, selectedQuality, onSelect, isProcessing }) {
  const videoQualities = [
    { id: '1080p', label: '1080P', badge: 'FULL HD', desc: 'High Definition Master Stream' },
    { id: '720p', label: '720P', badge: 'HD', desc: 'Standard HD Efficient Bitrate' },
    { id: '480p', label: '480P', badge: 'SD', desc: 'Compact Mobile Stream' }
  ];

  const audioQualities = [
    { id: '320k', label: '320 KBPS', badge: 'MAX HQ', desc: 'Constant Maximum Bitrate Audio' },
    { id: '256k', label: '256 KBPS', badge: 'HIGH', desc: 'Balanced High Quality CBR' },
    { id: '128k', label: '128 KBPS', badge: 'STANDARD', desc: 'Compressed Low Bandwidth' }
  ];

  const qualities = format === 'mp4' ? videoQualities : audioQualities;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)', width: '100%' }}>
      <span className="font-technical-badge text-on-surface uppercase tracking-wider">
        {format === 'mp4' ? 'TARGET RESOLUTION QUALITY' : 'TARGET AUDIO BITRATE'}
      </span>

      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 'var(--space-sm)'
        }}
      >
        {qualities.map((q) => {
          const isActive = selectedQuality === q.id;
          return (
            <button
              key={q.id}
              type="button"
              disabled={isProcessing}
              onClick={() => onSelect(q.id)}
              className={`format-badge ${isActive ? 'active' : ''}`}
              style={{
                cursor: isProcessing ? 'not-allowed' : 'pointer',
                opacity: isProcessing && !isActive ? 0.5 : 1
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="font-headline-sm text-on-surface" style={{ fontSize: '16px' }}>
                  {q.label}
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
                  {q.badge}
                </span>
              </div>
              <span className="font-body-sm text-on-surface-variant block" style={{ marginTop: '6px' }}>
                {q.desc}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
