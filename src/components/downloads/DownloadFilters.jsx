import React from 'react';

export default function DownloadFilters({ activeFilter, onFilterChange }) {
  const filters = [
    { id: 'ALL', label: 'ALL' },
    { id: 'YOUTUBE', label: 'YOUTUBE' },
    { id: 'SPOTIFY', label: 'SPOTIFY' },
    { id: 'COMPLETED', label: 'COMPLETED' },
    { id: 'PROCESSING', label: 'PROCESSING' },
    { id: 'FAILED', label: 'FAILED' }
  ];

  return (
    <div 
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-xs)',
        flexWrap: 'wrap'
      }}
    >
      {filters.map((filter) => {
        const isActive = activeFilter === filter.id;
        return (
          <button
            key={filter.id}
            type="button"
            onClick={() => onFilterChange(filter.id)}
            className="font-technical-badge uppercase"
            style={{
              padding: 'var(--space-xs) var(--space-md)',
              borderRadius: 'var(--radius-sm)',
              border: isActive ? '1px solid var(--primary-container)' : '1px solid rgba(212, 139, 109, 0.15)',
              backgroundColor: isActive ? 'var(--primary-container)' : 'var(--surface-container-low)',
              color: isActive ? 'var(--on-primary-container)' : 'var(--on-surface-variant)',
              cursor: 'pointer',
              transition: 'all 150ms ease',
              fontSize: '12px',
              letterSpacing: '0.05em'
            }}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
