import React from 'react';

export default function DashboardMetrics({ metrics }) {
  const items = [
    { label: "TOTAL PROCESSED", value: metrics.totalProcessed, icon: "subtitles", color: "var(--on-surface)" },
    { label: "DATA PROCESSED", value: metrics.dataProcessed, icon: "dataset", color: "var(--secondary)" },
    { label: "AVG PROCESS TIME", value: metrics.avgProcessTime, icon: "timer", color: "var(--tertiary)" },
    { label: "SUCCESS RATE", value: metrics.successRate, icon: "verified", color: "var(--primary)" },
    { label: "ACTIVE JOBS", value: metrics.activeJobs, icon: "pending_actions", color: "var(--primary-container)" }
  ];

  return (
    <div 
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 'var(--space-md)'
      }}
    >
      {items.map((item, idx) => (
        <div 
          key={idx}
          style={{
            backgroundColor: 'var(--surface-container-lowest)',
            padding: 'var(--space-md)',
            borderRadius: 'var(--radius-default)',
            border: '1px solid rgba(212, 139, 109, 0.15)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-xs)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span className="font-technical-badge uppercase text-outline" style={{ fontSize: '11px', letterSpacing: '0.08em' }}>
              {item.label}
            </span>
            <span className="material-symbols-outlined" style={{ color: item.color, fontSize: '20px' }}>
              {item.icon}
            </span>
          </div>
          <div className="font-headline-lg" style={{ color: item.color, fontSize: '26px', fontWeight: 700 }}>
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
}
