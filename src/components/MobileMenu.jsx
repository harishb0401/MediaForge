import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function MobileMenu({ isOpen, onClose, links }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        top: '80px',
        backgroundColor: 'rgba(7, 2, 2, 0.95)',
        backdropFilter: 'blur(20px)',
        zIndex: 49,
        display: 'flex',
        flexDirection: 'column',
        padding: 'var(--space-xl) var(--space-lg)',
        borderTop: '1px solid rgba(212, 139, 109, 0.2)',
        overflowY: 'auto'
      }}
    >
      <div style={{ marginBottom: 'var(--space-md)' }}>
        <span className="font-technical-badge text-secondary uppercase tracking-widest block mb-2">
          NAVIGATION PROTOCOLS
        </span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={onClose}
              className={({ isActive }) =>
                `p-space-md rounded-DEFAULT font-headline-sm transition-all flex items-center justify-between ${
                  isActive 
                    ? 'bg-surface-container-high text-primary border border-primary/40' 
                    : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                }`
              }
              style={{
                textDecoration: 'none',
                padding: '12px 16px',
                border: '1px solid rgba(212, 139, 109, 0.15)'
              }}
            >
              <span>{link.label}</span>
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Direct Ingest Shortcuts */}
      <div style={{ marginTop: 'var(--space-md)', paddingTop: 'var(--space-md)', borderTop: '1px solid rgba(212, 139, 109, 0.15)' }}>
        <span className="font-technical-badge text-outline uppercase tracking-widest block mb-2">
          DEDICATED CONSOLES
        </span>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-sm)' }}>
          <Link
            to="/youtube"
            onClick={onClose}
            style={{
              padding: '12px',
              backgroundColor: 'var(--color-surface-container-low)',
              borderRadius: 'var(--radius-default)',
              border: '1px solid rgba(180, 42, 26, 0.3)',
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}
          >
            <span className="material-symbols-outlined text-primary">smart_display</span>
            <span className="font-headline-sm text-on-surface" style={{ fontSize: '15px' }}>YouTube</span>
            <span className="font-technical-badge text-on-surface-variant">4K HDR / AUDIO</span>
          </Link>

          <Link
            to="/spotify"
            onClick={onClose}
            style={{
              padding: '12px',
              backgroundColor: 'var(--color-surface-container-low)',
              borderRadius: 'var(--radius-default)',
              border: '1px solid rgba(212, 139, 109, 0.3)',
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}
          >
            <span className="material-symbols-outlined text-secondary">music_note</span>
            <span className="font-headline-sm text-on-surface" style={{ fontSize: '15px' }}>Spotify</span>
            <span className="font-technical-badge text-on-surface-variant">FLAC 24-BIT</span>
          </Link>
        </div>
      </div>

      {/* Telemetry Status Footer */}
      <div 
        style={{ 
          marginTop: 'auto', 
          paddingTop: 'var(--space-xl)',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span className="font-technical-badge text-secondary">ENGINE V2.4 ONLINE</span>
          <span className="font-technical-badge text-outline">TLS 1.3 STRICT</span>
        </div>
        <span className="font-technical-data text-on-surface-variant" style={{ fontSize: '11px' }}>
          MEDIAFORGE CLUSTER EU-09 // LATENCY 0.08S
        </span>
      </div>
    </div>
  );
}
