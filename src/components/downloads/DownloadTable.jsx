import React from 'react';

export default function DownloadTable({ records, onDownload, onRetry }) {
  return (
    <div 
      style={{
        backgroundColor: 'var(--surface-container-lowest)',
        borderRadius: 'var(--radius-default)',
        border: '1px solid rgba(212, 139, 109, 0.15)',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
      }}
    >
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr 
            style={{
              backgroundColor: 'var(--surface-container-low)',
              borderBottom: '1px solid rgba(212, 139, 109, 0.15)'
            }}
          >
            <th className="font-technical-badge uppercase text-outline" style={{ padding: '16px', fontSize: '11px', letterSpacing: '0.08em' }}>SOURCE</th>
            <th className="font-technical-badge uppercase text-outline" style={{ padding: '16px', fontSize: '11px', letterSpacing: '0.08em' }}>TITLE</th>
            <th className="font-technical-badge uppercase text-outline" style={{ padding: '16px', fontSize: '11px', letterSpacing: '0.08em' }}>FORMAT</th>
            <th className="font-technical-badge uppercase text-outline" style={{ padding: '16px', fontSize: '11px', letterSpacing: '0.08em' }}>QUALITY</th>
            <th className="font-technical-badge uppercase text-outline" style={{ padding: '16px', fontSize: '11px', letterSpacing: '0.08em' }}>DURATION</th>
            <th className="font-technical-badge uppercase text-outline" style={{ padding: '16px', fontSize: '11px', letterSpacing: '0.08em' }}>SIZE</th>
            <th className="font-technical-badge uppercase text-outline" style={{ padding: '16px', fontSize: '11px', letterSpacing: '0.08em' }}>STATUS</th>
            <th className="font-technical-badge uppercase text-outline" style={{ padding: '16px', fontSize: '11px', letterSpacing: '0.08em' }}>DATE</th>
            <th className="font-technical-badge uppercase text-outline" style={{ padding: '16px', fontSize: '11px', letterSpacing: '0.08em', textAlign: 'right' }}>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {records.map((item, idx) => (
            <tr 
              key={item.id}
              style={{
                borderBottom: idx !== records.length - 1 ? '1px solid rgba(212, 139, 109, 0.08)' : 'none',
                transition: 'background-color 150ms ease'
              }}
              className="hover:bg-surface-container-low"
            >
              {/* Platform */}
              <td style={{ padding: '16px' }}>
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
              </td>

              {/* Title */}
              <td style={{ padding: '16px', maxWidth: '280px' }}>
                <div 
                  className="font-headline-sm text-on-surface" 
                  style={{ 
                    fontSize: '14px', 
                    fontWeight: 600, 
                    whiteSpace: 'nowrap', 
                    overflow: 'hidden', 
                    textOverflow: 'ellipsis' 
                  }}
                  title={item.title}
                >
                  {item.title}
                </div>
                <div className="font-technical-badge text-outline" style={{ fontSize: '10px' }}>
                  ID: {item.id}
                </div>
              </td>

              {/* Format */}
              <td style={{ padding: '16px' }}>
                <span className="font-technical-data text-secondary" style={{ fontSize: '13px' }}>
                  {item.format}
                </span>
              </td>

              {/* Quality */}
              <td style={{ padding: '16px' }}>
                <span className="font-technical-data text-on-surface-variant" style={{ fontSize: '13px' }}>
                  {item.quality}
                </span>
              </td>

              {/* Duration */}
              <td style={{ padding: '16px' }}>
                <span className="font-technical-data text-outline" style={{ fontSize: '13px' }}>
                  {item.duration}
                </span>
              </td>

              {/* Size */}
              <td style={{ padding: '16px' }}>
                <span className="font-technical-data text-on-surface-variant" style={{ fontSize: '13px' }}>
                  {item.size}
                </span>
              </td>

              {/* Status */}
              <td style={{ padding: '16px' }}>
                {item.status === 'COMPLETED' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span className="material-symbols-outlined text-secondary" style={{ fontSize: '16px' }}>check_circle</span>
                    <span className="font-technical-badge uppercase text-secondary" style={{ fontSize: '12px' }}>COMPLETED</span>
                  </div>
                )}
                {item.status === 'PROCESSING' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '110px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="font-technical-badge uppercase text-primary" style={{ fontSize: '11px' }}>PROCESSING</span>
                      <span className="font-technical-data text-primary" style={{ fontSize: '11px' }}>{item.progress}%</span>
                    </div>
                    <div style={{ height: '4px', width: '100%', backgroundColor: 'rgba(212, 139, 109, 0.2)', borderRadius: '2px', overflow: 'hidden' }}>
                      <div 
                        style={{ 
                          height: '100%', 
                          width: `${item.progress}%`, 
                          backgroundColor: 'var(--primary)',
                          transition: 'width 300ms ease'
                        }} 
                      />
                    </div>
                  </div>
                )}
                {item.status === 'FAILED' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span className="material-symbols-outlined text-primary-container" style={{ fontSize: '16px' }}>error</span>
                    <span className="font-technical-badge uppercase text-primary-container" style={{ fontSize: '12px' }}>FAILED</span>
                  </div>
                )}
              </td>

              {/* Date */}
              <td style={{ padding: '16px' }}>
                <span className="font-technical-data text-outline" style={{ fontSize: '12px' }}>
                  {item.date}
                </span>
              </td>

              {/* Action */}
              <td style={{ padding: '16px', textAlign: 'right' }}>
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
                      fontSize: '11px',
                      letterSpacing: '0.05em',
                      transition: 'all 150ms ease'
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
                      fontSize: '11px',
                      letterSpacing: '0.05em',
                      transition: 'all 150ms ease'
                    }}
                  >
                    [ RETRY ]
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
