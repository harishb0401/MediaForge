import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: '01/ HOME', path: '/' },
    { label: '02/ PRODUCT', path: '/#pipeline-section' },
    { label: '03/ FEATURES', path: '/#features' },
    { label: '04/ PROCESSING', path: '/processing' },
    { label: '05/ DOWNLOADS', path: '/downloads' },
    { label: '06/ DASHBOARD', path: '/dashboard' },
    { label: '07/ ABOUT', path: '/#tech-specs' }
  ];

  return (
    <>
      <header 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 50,
          backgroundColor: 'rgba(27, 17, 16, 0.85)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          boxShadow: '0 1px 8px rgba(0, 0, 0, 0.4)',
          borderBottom: '1px solid rgba(212, 139, 109, 0.12)'
        }}
      >
        <div 
          className="px-grid-margin max-w-container"
          style={{
            height: '80px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-md)'
          }}
        >
          {/* Logo & Brand */}
          <Link 
            to="/" 
            style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', textDecoration: 'none' }}
          >
            <img 
              alt="MediaForge Emblem" 
              className="h-8 w-auto object-contain" 
              src="/src/assets/mediaforge-emblem.svg"
              style={{ height: '32px', width: 'auto', objectFit: 'contain' }}
            />
            <span 
              className="font-headline-sm uppercase text-on-surface"
              style={{ letterSpacing: '0.05em' }}
            >
              MEDIAFORGE
            </span>
            <span 
              className="animate-pulse"
              style={{
                height: '6px',
                width: '6px',
                borderRadius: '9999px',
                backgroundColor: 'var(--primary-container)',
                boxShadow: '0 0 8px #b42a1a'
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav 
            style={{
              display: 'none',
              alignItems: 'center',
              gap: 'var(--space-xs)'
            }}
            className="header-desktop-nav"
          >
            <style>{`
              @media (min-width: 1280px) {
                .header-desktop-nav { display: flex !important; }
                .header-mobile-toggle { display: none !important; }
              }
              @media (max-width: 1279px) {
                .header-mobile-toggle { display: flex !important; }
              }
            `}</style>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-technical-data ${
                    isActive 
                      ? 'bg-surface-container-high text-on-surface' 
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                  style={{
                    padding: 'var(--space-xs) var(--space-sm)',
                    borderRadius: 'var(--radius-sm)',
                    transition: 'color 150ms ease, background-color 150ms ease',
                    textDecoration: 'none',
                    fontSize: '13px'
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Right Cluster */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
            {/* Online Engine Badge */}
            <div 
              style={{
                display: 'none',
                alignItems: 'center',
                gap: 'var(--space-xs)',
                padding: 'var(--space-2xs) var(--space-sm)',
                backgroundColor: 'var(--surface-container-lowest)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(212, 139, 109, 0.15)'
              }}
              className="engine-online-badge"
            >
              <style>{`
                @media (min-width: 768px) {
                  .engine-online-badge { display: flex !important; }
                }
              `}</style>
              <span 
                className="animate-ping"
                style={{
                  height: '8px',
                  width: '8px',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--primary)'
                }}
              />
              <span className="font-technical-badge uppercase text-secondary">
                ENGINE V2.4 ONLINE
              </span>
            </div>

            {/* Notification Button */}
            <button 
              type="button"
              aria-label="Notifications" 
              style={{
                height: '32px',
                width: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--on-surface-variant)',
                backgroundColor: 'var(--surface-container-low)',
                borderRadius: 'var(--radius-sm)',
                transition: 'color 150ms ease',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>notifications</span>
            </button>

            {/* CTA: [ START FORGING ] */}
            <Link 
              to="/processing"
              className="font-technical-data uppercase"
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'var(--space-xs) var(--space-md)',
                backgroundColor: 'var(--primary-container)',
                color: 'var(--on-primary-container)',
                letterSpacing: '0.05em',
                borderRadius: 'var(--radius-default)',
                boxShadow: '0 0 16px rgba(180, 42, 26, 0.4)',
                textDecoration: 'none',
                transition: 'opacity 150ms ease'
              }}
              id="header-forge-cta"
            >
              <style>{`
                @media (min-width: 640px) {
                  #header-forge-cta { display: inline-flex !important; }
                }
              `}</style>
              [ START FORGING ]
            </Link>

            {/* User Avatar */}
            <div 
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '9999px',
                backgroundColor: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <span className="material-symbols-outlined" style={{ color: 'var(--on-primary)', fontSize: '18px' }}>
                person
              </span>
            </div>

            {/* Mobile / Tablet Menu Toggle */}
            <button
              type="button"
              className="header-mobile-toggle"
              aria-label="Toggle Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                height: '32px',
                width: '32px',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--on-surface)',
                backgroundColor: 'var(--surface-container-high)',
                borderRadius: 'var(--radius-sm)',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Responsive Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            top: '80px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(27, 17, 16, 0.98)',
            backdropFilter: 'blur(20px)',
            zIndex: 49,
            padding: 'var(--space-lg)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-sm)',
            borderTop: '1px solid rgba(212, 139, 109, 0.2)',
            overflowY: 'auto'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-technical-data ${location.pathname === item.path ? 'bg-surface-container-high text-on-surface' : 'text-on-surface-variant'}`}
                style={{
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-default)',
                  textDecoration: 'none',
                  fontSize: '15px',
                  border: '1px solid rgba(212, 139, 109, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>{item.label}</span>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_right</span>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: 'auto', paddingTop: 'var(--space-lg)', borderTop: '1px solid rgba(212, 139, 109, 0.15)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="font-technical-badge text-secondary">ENGINE V2.4 ONLINE</span>
              <span className="font-technical-badge text-outline">TLS 1.3 SECURE</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
