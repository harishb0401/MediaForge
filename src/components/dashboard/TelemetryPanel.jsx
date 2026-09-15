import React from 'react';

export default function TelemetryPanel({ telemetry }) {
  const metrics = [
    { label: "CPU LOAD", value: telemetry.cpuLoad, icon: "developer_board", color: "var(--primary)" },
    { label: "MEMORY", value: telemetry.memory, icon: "memory", color: "var(--secondary)" },
    { label: "QUEUE", value: telemetry.queueCount, icon: "queue", color: "var(--tertiary)" },
    { label: "THROUGHPUT", value: telemetry.throughput, icon: "speed", color: "var(--on-surface)" },
    { label: "LATENCY", value: telemetry.latency, icon: "bolt", color: "var(--primary-container)" }
  ];

  return (
    <div 
      style={{
        backgroundColor: 'var(--surface-container-low)',
        borderRadius: 'var(--radius-default)',
        border: '1px solid rgba(212, 139, 109, 0.2)',
        padding: 'var(--space-md) var(--space-lg)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-md)', borderBottom: '1px solid rgba(212, 139, 109, 0.15)', paddingBottom: 'var(--space-xs)' }}>
        <span className="font-technical-badge uppercase text-secondary" style={{ letterSpacing: '0.08em' }}>
          // SYSTEM TELEMETRY
        </span>
        <span 
          className="font-technical-badge uppercase text-primary-container"
          style={{
            backgroundColor: 'rgba(180, 42, 26, 0.15)',
            padding: '2px 8px',
            borderRadius: 'var(--radius-xs)',
            border: '1px solid rgba(180, 42, 26, 0.3)',
            fontSize: '10px'
          }}
        >
          SIMULATED ENGINE TELEMETRY
        </span>
      </div>

      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: 'var(--space-md)'
        }}
      >
        {metrics.map((m, idx) => (
          <div 
            key={idx}
            style={{
              backgroundColor: 'var(--surface-container-lowest)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid rgba(212, 139, 109, 0.1)',
              padding: 'var(--space-sm) var(--space-md)',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="font-technical-badge uppercase text-outline" style={{ fontSize: '10px' }}>
                {m.label}
              </span>
              <span className="material-symbols-outlined" style={{ color: m.color, fontSize: '16px' }}>
                {m.icon}
              </span>
            </div>
            <div className="font-technical-data" style={{ color: m.color, fontSize: '18px', fontWeight: 700 }}>
              {m.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
