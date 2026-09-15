import React from 'react';

export default function DownloadSearch({ search, onSearchChange }) {
  return (
    <div 
      style={{
        position: 'relative',
        minWidth: '240px',
        flex: 1
      }}
    >
      <span 
        className="material-symbols-outlined text-outline"
        style={{
          position: 'absolute',
          left: '12px',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: '18px',
          pointerEvents: 'none'
        }}
      >
        search
      </span>
      <input
        type="text"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="SEARCH FORGED MEDIA..."
        className="font-technical-data text-on-surface"
        style={{
          width: '100%',
          padding: 'var(--space-xs) var(--space-md) var(--space-xs) 38px',
          backgroundColor: 'var(--surface-container-lowest)',
          border: '1px solid rgba(212, 139, 109, 0.2)',
          borderRadius: 'var(--radius-sm)',
          outline: 'none',
          fontSize: '13px',
          letterSpacing: '0.02em',
          transition: 'border-color 150ms ease'
        }}
      />
      {search && (
        <button
          type="button"
          onClick={() => onSearchChange('')}
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            color: 'var(--outline)',
            cursor: 'pointer',
            padding: 0,
            display: 'flex',
            alignItems: 'center'
          }}
          aria-label="Clear search"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>close</span>
        </button>
      )}
    </div>
  );
}
