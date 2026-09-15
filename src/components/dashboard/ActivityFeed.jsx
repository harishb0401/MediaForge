import React from 'react';

export default function ActivityFeed({ activities }) {
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
          // SYSTEM ACTIVITY LOG
        </span>
        <span className="font-technical-data text-outline" style={{ fontSize: '11px' }}>
          REALTIME FEED
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
        {activities.map((act) => (
          <div 
            key={act.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px var(--space-sm)',
              backgroundColor: 'var(--surface-container-lowest)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid rgba(212, 139, 109, 0.08)',
              gap: 'var(--space-sm)',
              flexWrap: 'wrap'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
              <span className="font-technical-data text-outline" style={{ fontSize: '12px', minWidth: '45px' }}>
                {act.time}
              </span>
              <div>
                <div className="font-headline-sm text-on-surface" style={{ fontSize: '14px', fontWeight: 600 }}>
                  {act.title}
                </div>
                <div className="font-technical-data text-outline" style={{ fontSize: '11px' }}>
                  {act.details}
                </div>
              </div>
            </div>

            <div>
              {act.status === 'COMPLETED' && (
                <span className="font-technical-badge uppercase text-secondary" style={{ fontSize: '11px', backgroundColor: 'rgba(255, 181, 152, 0.1)', padding: '2px 8px', borderRadius: 'var(--radius-xs)', border: '1px solid rgba(255, 181, 152, 0.2)' }}>
                  COMPLETED
                </span>
              )}
              {act.status === 'PROCESSING' && (
                <span className="font-technical-badge uppercase text-primary" style={{ fontSize: '11px', backgroundColor: 'rgba(255, 180, 167, 0.1)', padding: '2px 8px', borderRadius: 'var(--radius-xs)', border: '1px solid rgba(255, 180, 167, 0.2)' }}>
                  PROCESSING
                </span>
              )}
              {act.status === 'FAILED' && (
                <span className="font-technical-badge uppercase text-primary-container" style={{ fontSize: '11px', backgroundColor: 'rgba(180, 42, 26, 0.15)', padding: '2px 8px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--primary-container)' }}>
                  FAILED
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
