import React from 'react';

export default function DownloadStats({ stats }) {
  const cards = [
    { label: "TOTAL DOWNLOADS", value: stats.total, icon: "cloud_download", color: "var(--on-surface)" },
    { label: "COMPLETED", value: stats.completed, icon: "check_circle", color: "var(--secondary)" },
    { label: "PROCESSING", value: stats.processing, icon: "sync", color: "var(--primary)" },
    { label: "FAILED", value: stats.failed, icon: "error", color: "var(--primary-container)" },
    { label: "TOTAL DATA", value: stats.totalData, icon: "hard_drive", color: "var(--tertiary)" }
  ];

  return (
    <div 
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 'var(--space-md)',
        marginBottom: 'var(--space-lg)'
      }}
    >
      {cards.map((card, idx) => (
        <div 
          key={idx}
          style={{
            backgroundColor: 'var(--surface-container-low)',
            padding: 'var(--space-md)',
            borderRadius: 'var(--radius-default)',
            border: '1px solid rgba(212, 139, 109, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-xs)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span className="font-technical-badge uppercase text-outline" style={{ letterSpacing: '0.08em', fontSize: '11px' }}>
              {card.label}
            </span>
            <span className="material-symbols-outlined" style={{ color: card.color, fontSize: '20px' }}>
              {card.icon}
            </span>
          </div>
          <div className="font-headline-lg" style={{ color: card.color, fontSize: '28px', fontWeight: 700 }}>
            {card.value}
          </div>
        </div>
      ))}
    </div>
  );
}
