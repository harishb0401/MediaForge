import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { label: '01/ HOME', path: '/' },
    { label: '02/ YOUTUBE', path: '/youtube' },
    { label: '03/ SPOTIFY', path: '/spotify' },
    { label: '04/ PIPELINE', path: '/how-it-works' },
    { label: '05/ DOWNLOADS', path: '/downloads' },
    { label: '06/ ABOUT', path: '/about' },
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
          backgroundColor: 'rgba(27, 17, 16, 0.88)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(212, 139, 109, 0.12)',
          boxShadow: '0 1px 12px rgba(0,0,0,0.5)'
        }}
      >
        <div 
          className="app-container px-responsive"
          style={{
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-md)'
          }}
        >
          {/* Brand Logo & Name */}
          <Link 
            to="/" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 'var(--space-sm)', 
              textDecoration: 'none' 
            }}
          >
            <img 
              src="/src/assets/mediaforge-emblem.svg" 
              alt="MediaForge Emblem" 
              style={{ height: '32px', width: 'auto', objectFit: 'contain' }} 
            />
            <span 
              className="font-headline-sm text-on-surface uppercase" 
              style={{ letterSpacing: '0.1em', fontWeight: 700 }}
            >
              MEDIAFORGE
            </span>
            <span 
              style={{
                height: '6px',
                width: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-primary-container)',
                boxShadow: '0 0 8px #b42a1a'
              }}
              className="animate-pulse-glow"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav 
            style={{
              display: 'none',
              alignItems: 'center',
              gap: 'var(--space-xs)'
            }}
            className="desktop-nav"
          >
            <style>{`
              @media (min-width: 1024px) {
                .desktop-nav { display: flex !important; }
                .mobile-toggle-btn { display: none !important; }
              }
            `}</style>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `px-space-sm py-space-xs font-technical-data transition-colors rounded-sm ${
                    isActive 
                      ? 'bg-surface-container-high text-on-surface' 
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`
                }
                style={{
                  padding: '6px 12px',
                  textDecoration: 'none',
                  fontSize: '12px',
                  letterSpacing: '0.04em',
                  transition: 'all 0.15s ease'
                }}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
            {/* Cluster Engine Badge */}
            <div 
              style={{
                display: 'none',
                alignItems: 'center',
                gap: 'var(--space-xs)',
                padding: '4px 10px',
                backgroundColor: 'var(--color-surface-container-lowest)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(212, 139, 109, 0.15)'
              }}
              className="engine-badge-cluster"
            >
              <style>{`
                @media (min-width: 768px) {
                  .engine-badge-cluster { display: flex !important; }
                }
              `}</style>
              <span 
                className="animate-ping-dot"
                style={{
                  height: '6px',
                  width: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-primary)'
                }}
              />
              <span className="font-technical-badge uppercase text-secondary">
                ENGINE V2.4 ONLINE
              </span>
            </div>

            {/* Notifications Button & Dropdown */}
            <div style={{ position: 'relative' }}>
              <button 
                type="button"
                aria-label="System Notifications" 
                className="btn-ghost-icon"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>notifications</span>
              </button>

              {showNotifications && (
                <div 
                  className="forge-card"
                  style={{
                    position: 'absolute',
                    top: '120%',
                    right: 0,
                    width: '320px',
                    padding: 'var(--space-md)',
                    zIndex: 60,
                    boxShadow: '0 8px 30px rgba(0,0,0,0.8)',
                    border: '1px solid rgba(212, 139, 109, 0.3)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-xs)' }}>
                    <span className="font-technical-badge text-secondary uppercase">TELEMETRY NOTICES</span>
                    <span className="font-technical-badge text-outline">NODE EU-09</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ padding: '6px 8px', background: 'var(--color-surface-container)', borderRadius: '2px' }}>
                      <span className="font-technical-badge text-primary block">NVENC BLADE UPDATED</span>
                      <span className="font-body-sm text-on-surface-variant block">Hardware transcoding cluster operating at 0.08s latency.</span>
                    </div>
                    <div style={{ padding: '6px 8px', background: 'var(--color-surface-container)', borderRadius: '2px' }}>
                      <span className="font-technical-badge text-secondary block">SPOTIFY FLAC EXTRACTOR</span>
                      <span className="font-body-sm text-on-surface-variant block">24-bit 96kHz lossless stem parsing online.</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Primary Action Button */}
            <button 
              type="button"
              className="btn-forge-primary"
              onClick={() => {
                navigate('/');
                const terminal = document.getElementById('intake-terminal');
                if (terminal) {
                  terminal.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              style={{
                fontSize: '12px',
                padding: '8px 16px',
                display: 'none'
              }}
              id="header-start-forging-btn"
            >
              <style>{`
                @media (min-width: 640px) {
                  #header-start-forging-btn { display: inline-flex !important; }
                }
              `}</style>
              [ START FORGING ]
            </button>

            {/* Profile Avatar / Queue indicator */}
            <Link 
              to="/downloads" 
              title="Download Queue & History"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                color: 'var(--color-on-primary)'
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>person</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button 
              type="button"
              className="btn-ghost-icon mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              <span className="material-symbols-outlined">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
        links={navLinks} 
      />
    </>
  );
}
