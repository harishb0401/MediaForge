import React from 'react';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 100,
        backgroundColor: 'var(--surface-container-high)',
        color: 'var(--on-surface)',
        padding: 'var(--space-sm) var(--space-md)',
        borderRadius: 'var(--radius-default)',
        border: '1px solid var(--primary-container)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6), 0 0 16px rgba(180, 42, 26, 0.3)',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-sm)',
        maxWidth: '400px',
        animation: 'fadeIn 200ms ease-out'
      }}
    >
      <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px' }}>
        info
      </span>
      <div style={{ flex: 1 }}>
        <p className="font-technical-badge uppercase text-primary" style={{ letterSpacing: '0.08em', marginBottom: '2px' }}>
          SYSTEM NOTICE
        </p>
        <p className="font-body-sm text-on-surface-variant" style={{ fontSize: '13px', margin: 0 }}>
          {message}
        </p>
      </div>
      <button
        type="button"
        onClick={onClose}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--outline)',
          cursor: 'pointer',
          padding: '2px',
          display: 'flex',
          alignItems: 'center'
        }}
        aria-label="Close notification"
      >
        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>close</span>
      </button>
    </div>
  );
}
