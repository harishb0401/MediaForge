import React from 'react';

export default function TechnicalStatusPanel() {
  return (
    <div 
      className="forge-card"
      style={{
        padding: 'var(--space-md) var(--space-lg)',
        backgroundColor: 'var(--surface-container-low)',
        border: '1px solid rgba(212, 139, 109, 0.15)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: 'var(--space-md)',
        alignItems: 'center'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span className="font-technical-badge text-on-surface-variant uppercase">ENGINE</span>
        <span className="font-technical-data text-on-surface" style={{ marginTop: '2px', fontWeight: 600 }}>
          MEDIAFORGE V2.4
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span className="font-technical-badge text-on-surface-variant uppercase">INGEST NODE</span>
        <span className="font-technical-data text-secondary" style={{ marginTop: '2px', fontWeight: 600 }}>
          EU-CENTRAL-09
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span className="font-technical-badge text-on-surface-variant uppercase">THROUGHPUT</span>
        <span className="font-technical-data text-on-surface" style={{ marginTop: '2px', fontWeight: 600 }}>
          12.4 GB/S PEAK
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span className="font-technical-badge text-on-surface-variant uppercase">TRANSCODE RATE</span>
        <span className="font-technical-data text-primary" style={{ marginTop: '2px', fontWeight: 600 }}>
          0.08 SEC / MIN
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span className="font-technical-badge text-on-surface-variant uppercase">CLUSTER STATUS</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
          <span className="animate-ping" style={{ width: '6px', height: '6px', borderRadius: '9999px', backgroundColor: 'var(--primary)' }} />
          <span className="font-technical-data text-primary" style={{ fontWeight: 700 }}>
            ONLINE
          </span>
        </div>
      </div>
    </div>
  );
}
