import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer 
      style={{
        width: '100%',
        backgroundColor: 'var(--color-surface-container-lowest)',
        color: 'var(--color-on-surface-variant)',
        borderTop: '1px solid rgba(212, 139, 109, 0.15)'
      }}
    >
      <div 
        className="app-container px-responsive"
        style={{
          paddingTop: 'var(--space-3xl)',
          paddingBottom: 'var(--space-2xl)'
        }}
      >
        <style>{`
          .footer-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: var(--gutter-desktop);
          }
          @media (min-width: 640px) {
            .footer-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (min-width: 1024px) {
            .footer-grid {
              grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
            }
          }
        `}</style>
        <div className="footer-grid">
          {/* Brand Col */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
              <img src="/src/assets/mediaforge-emblem.svg" alt="MediaForge" style={{ width: '24px', height: '24px' }} />
              <span className="font-headline-sm text-on-surface uppercase tracking-wider">MEDIAFORGE</span>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-primary-container)' }} />
            </div>
            <p className="font-body-md text-on-surface-variant" style={{ maxWidth: '360px', marginTop: '4px' }}>
              Built for the way media moves. Engineered for ultra-low latency, high-bitrate conversion, and industrial multi-channel workflows.
            </p>
            <div 
              className="font-technical-badge text-secondary"
              style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)', marginTop: 'var(--space-sm)' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>speed</span>
              <span>CLUSTER LATENCY: 14.2MS</span>
            </div>
          </div>

          {/* Col 1: Product */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="font-label-caps uppercase text-on-surface" style={{ marginBottom: '4px' }}>PRODUCT</span>
            <Link to="/how-it-works" className="font-body-sm text-on-surface-variant hover:text-on-surface" style={{ textDecoration: 'none' }}>Overview</Link>
            <Link to="/how-it-works" className="font-body-sm text-on-surface-variant hover:text-on-surface" style={{ textDecoration: 'none' }}>Hardware Engine</Link>
            <Link to="/downloads" className="font-body-sm text-on-surface-variant hover:text-on-surface" style={{ textDecoration: 'none' }}>Live Queue</Link>
            <Link to="/youtube" className="font-body-sm text-on-surface-variant hover:text-on-surface" style={{ textDecoration: 'none' }}>YouTube Extractor</Link>
            <Link to="/spotify" className="font-body-sm text-on-surface-variant hover:text-on-surface" style={{ textDecoration: 'none' }}>Spotify FLAC Studio</Link>
          </div>

          {/* Col 2: Processing */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="font-label-caps uppercase text-on-surface" style={{ marginBottom: '4px' }}>PROCESSING</span>
            <Link to="/" className="font-body-sm text-on-surface-variant hover:text-on-surface" style={{ textDecoration: 'none' }}>Batch Extraction</Link>
            <Link to="/" className="font-body-sm text-on-surface-variant hover:text-on-surface" style={{ textDecoration: 'none' }}>Stem Splitter</Link>
            <Link to="/" className="font-body-sm text-on-surface-variant hover:text-on-surface" style={{ textDecoration: 'none' }}>Thermal Forge</Link>
            <Link to="/how-it-works" className="font-body-sm text-on-surface-variant hover:text-on-surface" style={{ textDecoration: 'none' }}>Demuxing Engine</Link>
          </div>

          {/* Col 3: Formats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="font-label-caps uppercase text-on-surface" style={{ marginBottom: '4px' }}>FORMATS</span>
            <span className="font-body-sm text-on-surface-variant">ProRes 422 HQ</span>
            <span className="font-body-sm text-on-surface-variant">AV1 Master</span>
            <span className="font-body-sm text-on-surface-variant">Lossless FLAC</span>
            <span className="font-body-sm text-on-surface-variant">DCI 4K RAW</span>
            <span className="font-body-sm text-on-surface-variant">Apple Spatial M4A</span>
          </div>

          {/* Col 4: Legal / Specs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="font-label-caps uppercase text-on-surface" style={{ marginBottom: '4px' }}>LEGAL</span>
            <Link to="/about" className="font-body-sm text-on-surface-variant hover:text-on-surface" style={{ textDecoration: 'none' }}>Acceptable Use</Link>
            <Link to="/about" className="font-body-sm text-on-surface-variant hover:text-on-surface" style={{ textDecoration: 'none' }}>Privacy Protocol</Link>
            <Link to="/about" className="font-body-sm text-on-surface-variant hover:text-on-surface" style={{ textDecoration: 'none' }}>Hardware Specs</Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          style={{
            marginTop: 'var(--space-2xl)',
            paddingTop: 'var(--space-lg)',
            borderTop: '1px solid rgba(212, 139, 109, 0.1)',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-md)'
          }}
        >
          <span className="font-technical-data text-on-surface-variant">
            © 2026 MEDIAFORGE SYSTEMS INC. ALL RIGHTS RESERVED.
          </span>
          <div className="font-technical-badge text-secondary" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
            <span>NODES: ONLINE</span>
            <span>•</span>
            <span>TLS 1.3 SECURE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
