import React from 'react';

export default function DownloadSort({ sortBy, onSortChange }) {
  const options = [
    { value: 'NEWEST', label: 'SORT: NEWEST' },
    { value: 'OLDEST', label: 'SORT: OLDEST' },
    { value: 'LARGEST', label: 'SORT: LARGEST' },
    { value: 'SMALLEST', label: 'SORT: SMALLEST' }
  ];

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="font-technical-badge uppercase text-on-surface"
        style={{
          padding: 'var(--space-xs) var(--space-md)',
          backgroundColor: 'var(--surface-container-low)',
          border: '1px solid rgba(212, 139, 109, 0.2)',
          borderRadius: 'var(--radius-sm)',
          outline: 'none',
          cursor: 'pointer',
          fontSize: '12px',
          letterSpacing: '0.05em'
        }}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} style={{ backgroundColor: '#1b1110', color: '#f3dedc' }}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
