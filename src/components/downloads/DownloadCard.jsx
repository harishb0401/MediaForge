import React from 'react';

export default function DownloadCard({ item, onDownload, onRetry }) {
  return (
    <div 
      style={{
        backgroundColor: 'var(--surface-container-lowest)',
        borderRadius: 'var(--radius-default)',
        border: '1px solid rgba(212, 139, 109, 0.15)',
        padding: 'var(--space-md)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-xs)',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)'
      }}
    >
      {/* Top Header: Platform Badge + Date */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span 
          className="font-technical-badge uppercase"
          style={{
            padding: '4px 8px',
            borderRadius: 'var(--radius-sm)',
            fontSize: '11px',
            backgroundColor: item.platform === 'YouTube' ? 'rgba(255, 180, 167, 0.1)' : 'rgba(223, 176, 194, 0.1)',
            color: item.platform === 'YouTube' ? 'var(--primary)' : 'var(--tertiary)',
            border: item.platform === 'YouTube' ? '1px solid rgba(255, 180, 167, 0.2)' : '1px solid rgba(223, 176, 194, 0.2)'
          }}
        >
          {item.platform}
        </span>
        <span className="font-technical-data text-outline" style={{ fontSize: '11px' }}>
          {item.date}
        </span>
      </div>

      {/* Title */}
      <div className="font-headline-sm text-on-surface" style={{ fontSize: '15px', fontWeight: 600, lineHeight: 1.3 }}>
        {item.title}
      </div>

      {/* Details Row: Format, Quality, Duration, Size */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '8px',
          padding: '8px 12px',
          backgroundColor: 'var(--surface-container-low)',
          borderRadius: 'var(--radius-sm)',
          marginTop: '4px'
        }}
      >
        <div>
          <div className="font-technical-badge text-outline" style={{ fontSize: '9px' }}>FMT</div>
          <div className="font-technical-data text-secondary" style={{ fontSize: '12px' }}>{item.format}</div>
        </div>
        <div>
          <div className="font-technical-badge text-outline" style={{ fontSize: '9px' }}>QUAL</div>
          <div className="font-technical-data text-on-surface" style={{ fontSize: '12px' }}>{item.quality}</div>
        </div>
        <div>
          <div className="font-technical-badge text-outline" style={{ fontSize: '9px' }}>DUR</div>
          <div className="font-technical-data text-outline" style={{ fontSize: '12px' }}>{item.duration}</div>
        </div>
        <div>
          <div className="font-technical-badge text-outline" style={{ fontSize: '9px' }}>SIZE</div>
          <div className="font-technical-data text-on-surface-variant" style={{ fontSize: '12px' }}>{item.size}</div>
        </div>
      </div>

      {/* Status + Action Row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '6px' }}>
        {/* Status */}
        <div>
          {item.status === 'COMPLETED' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span className="material-symbols-outlined text-secondary" style={{ fontSize: '16px' }}>check_circle</span>
              <span className="font-technical-badge uppercase text-secondary" style={{ fontSize: '11px' }}>COMPLETED</span>
            </div>
          )}
          {item.status === 'PROCESSING' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', width: '100px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span className="font-technical-badge uppercase text-primary" style={{ fontSize: '10px' }}>PROCESSING</span>
                <span className="font-technical-data text-primary" style={{ fontSize: '10px' }}>{item.progress}%</span>
              </div>
              <div style={{ height: '4px', width: '100%', backgroundColor: 'rgba(212, 139, 109, 0.2)', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${item.progress}%`, backgroundColor: 'var(--primary)' }} />
              </div>
            </div>
          )}
          {item.status === 'FAILED' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span className="material-symbols-outlined text-primary-container" style={{ fontSize: '16px' }}>error</span>
              <span className="font-technical-badge uppercase text-primary-container" style={{ fontSize: '11px' }}>FAILED</span>
            </div>
          )}
        </div>

        {/* Action Button */}
        <div>
          {item.status === 'COMPLETED' && (
            <button
              type="button"
              onClick={() => onDownload(item)}
              className="font-technical-badge uppercase text-secondary"
              style={{
                padding: '6px 12px',
                backgroundColor: 'rgba(255, 181, 152, 0.1)',
                border: '1px solid rgba(255, 181, 152, 0.3)',
                borderRadius: 'var(--radius-sm)',
                cursor: 'pointer',
                fontSize: '11px'
              }}
            >
              [ DOWNLOAD ]
            </button>
          )}
          {item.status === 'PROCESSING' && (
            <button
              type="button"
              disabled
              className="font-technical-badge uppercase text-outline"
              style={{
                padding: '6px 12px',
                backgroundColor: 'transparent',
                border: '1px solid rgba(212, 139, 109, 0.1)',
                borderRadius: 'var(--radius-sm)',
                cursor: 'not-allowed',
                fontSize: '11px',
                opacity: 0.6
              }}
            >
              FORGING...
            </button>
          )}
          {item.status === 'FAILED' && (
            <button
              type="button"
              onClick={() => onRetry(item.id)}
              className="font-technical-badge uppercase text-primary-container"
              style={{
                padding: '6px 12px',
                backgroundColor: 'rgba(180, 42, 26, 0.15)',
                border: '1px solid var(--primary-container)',
                borderRadius: 'var(--radius-sm)',
                cursor: 'pointer',
                fontSize: '11px'
              }}
            >
              [ RETRY ]
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
