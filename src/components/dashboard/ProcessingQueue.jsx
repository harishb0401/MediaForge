import React from 'react';

export default function ProcessingQueue({ queue }) {
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
          // ACTIVE QUEUE TELEMETRY
        </span>
        <span className="font-technical-badge uppercase text-outline" style={{ fontSize: '11px' }}>
          JOBS IN FLIGHT: 03
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        {queue.map((job) => (
          <div 
            key={job.id}
            style={{
              backgroundColor: 'var(--surface-container-lowest)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid rgba(212, 139, 109, 0.1)',
              padding: 'var(--space-md)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-xs)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                <span className="font-technical-badge text-primary" style={{ fontSize: '14px', fontWeight: 700 }}>
                  {job.index}
                </span>
                <span className="font-headline-sm text-on-surface" style={{ fontSize: '14px', fontWeight: 600 }}>
                  {job.platform} / {job.title}
                </span>
              </div>
              <span className="font-technical-badge uppercase text-secondary" style={{ fontSize: '11px' }}>
                {job.status === 'PROCESSING' ? `PROCESSING ${job.progress}%` : job.status}
              </span>
            </div>

            {/* Progress Bar */}
            <div style={{ height: '6px', width: '100%', backgroundColor: 'rgba(212, 139, 109, 0.15)', borderRadius: '3px', overflow: 'hidden', marginTop: '4px' }}>
              <div 
                style={{ 
                  height: '100%', 
                  width: `${job.progress}%`, 
                  backgroundColor: job.status === 'PROCESSING' ? 'var(--primary)' : 'var(--outline)',
                  transition: 'width 300ms ease' 
                }} 
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2px' }}>
              <span className="font-technical-data text-outline" style={{ fontSize: '11px' }}>
                FORMAT: {job.format}
              </span>
              <span className="font-technical-data text-outline" style={{ fontSize: '11px' }}>
                ETA: {job.eta}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
