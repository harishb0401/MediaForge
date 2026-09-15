import React from 'react';

export default function EngineStatusPanel({ engine }) {
  return (
    <div 
      style={{
        backgroundColor: 'var(--surface-container-low)',
        borderRadius: 'var(--radius-default)',
        border: '1px solid rgba(212, 139, 109, 0.2)',
        padding: 'var(--space-md) var(--space-lg)',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 'var(--space-md)'
      }}
    >
      {/* Left: Engine Identifier + Pulse */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
        <div 
          style={{
            height: '48px',
            width: '48px',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: 'var(--surface-container-highest)',
            border: '1px solid var(--primary-container)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 16px rgba(180, 42, 26, 0.3)'
          }}
        >
          <span className="material-symbols-outlined text-primary" style={{ fontSize: '28px' }}>
            memory
          </span>
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
            <span className="font-headline-sm text-on-surface" style={{ fontSize: '20px', fontWeight: 700 }}>
              MEDIAFORGE ENGINE
            </span>
            <span 
              className="font-technical-badge uppercase text-primary-container"
              style={{
                backgroundColor: 'rgba(180, 42, 26, 0.2)',
                padding: '2px 6px',
                borderRadius: 'var(--radius-xs)',
                fontSize: '11px',
                border: '1px solid rgba(180, 42, 26, 0.4)'
              }}
            >
              {engine.version}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)', marginTop: '4px' }}>
            <span className="animate-ping" style={{ height: '8px', width: '8px', borderRadius: '50%', backgroundColor: 'var(--primary)' }} />
            <span className="font-technical-badge uppercase text-secondary" style={{ fontSize: '12px' }}>
              STATUS: {engine.status}
            </span>
          </div>
        </div>
      </div>

      {/* Right: Technical Badges Grid */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-lg)', flexWrap: 'wrap' }}>
        <div>
          <div className="font-technical-badge uppercase text-outline" style={{ fontSize: '10px' }}>ACTIVE NODE</div>
          <div className="font-technical-data text-on-surface" style={{ fontSize: '14px', fontWeight: 600 }}>{engine.node}</div>
        </div>
        <div>
          <div className="font-technical-badge uppercase text-outline" style={{ fontSize: '10px' }}>SYSTEM UPTIME</div>
          <div className="font-technical-data text-secondary" style={{ fontSize: '14px', fontWeight: 600 }}>{engine.uptime}</div>
        </div>
        <div>
          <div className="font-technical-badge uppercase text-outline" style={{ fontSize: '10px' }}>STATE</div>
          <div className="font-technical-badge uppercase text-secondary" style={{ fontSize: '12px' }}>{engine.operationalState}</div>
        </div>
      </div>
    </div>
  );
}
