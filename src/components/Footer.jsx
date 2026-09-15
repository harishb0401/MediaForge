import React from 'react';

export default function Footer() {
  return (
    <footer 
      style={{
        width: '100%',
        backgroundColor: 'var(--surface-container-lowest)',
        color: 'var(--on-surface-variant)',
        borderTop: '1px solid rgba(212, 139, 109, 0.15)'
      }}
    >
      <div 
        className="px-grid-margin max-w-container"
        style={{
          paddingTop: 'var(--space-2xl)',
          paddingBottom: 'var(--space-2xl)'
        }}
      >
        <style>{`
          .footer-grid-container {
            display: grid;
            grid-template-columns: 1fr;
            gap: var(--gutter-desktop);
          }
          @media (min-width: 768px) {
            .footer-grid-container {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (min-width: 1024px) {
            .footer-grid-container {
              grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
            }
          }
        `}</style>
        <div className="footer-grid-container">
          {/* Col 1 & 2: Branding */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
              <span className="font-headline-sm uppercase tracking-wider text-on-surface">MEDIAFORGE</span>
              <span style={{ width: '6px', height: '6px', borderRadius: '9999px', backgroundColor: 'var(--primary-container)' }} />
            </div>
            <p className="font-body-md text-on-surface-variant" style={{ maxWidth: '360px' }}>
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

          {/* Col 3: PRODUCT */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
            <span className="font-label-caps uppercase text-on-surface" style={{ marginBottom: 'var(--space-xs)' }}>
              PRODUCT
            </span>
            <a className="font-body-sm text-on-surface-variant hover:text-on-surface" data-path="product" href="#pipeline-section">Overview</a>
            <a className="font-body-sm text-on-surface-variant hover:text-on-surface" data-path="features" href="#features">Hardware Engine</a>
            <a className="font-body-sm text-on-surface-variant hover:text-on-surface" data-path="dashboard" href="#tracklist-deck">Live Queue</a>
          </div>

          {/* Col 4: PROCESSING */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
            <span className="font-label-caps uppercase text-on-surface" style={{ marginBottom: 'var(--space-xs)' }}>
              PROCESSING
            </span>
            <a className="font-body-sm text-on-surface-variant hover:text-on-surface" data-path="processing" href="#intake-terminal">Batch Extraction</a>
            <a className="font-body-sm text-on-surface-variant hover:text-on-surface" data-path="processing" href="#intake-terminal">Stem Splitter</a>
            <a className="font-body-sm text-on-surface-variant hover:text-on-surface" data-path="processing" href="#intake-terminal">Thermal Forge</a>
          </div>

          {/* Col 5: FORMATS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
            <span className="font-label-caps uppercase text-on-surface" style={{ marginBottom: 'var(--space-xs)' }}>
              FORMATS
            </span>
            <span className="font-body-sm text-on-surface-variant">ProRes 422 HQ</span>
            <span className="font-body-sm text-on-surface-variant">AV1 Master</span>
            <span className="font-body-sm text-on-surface-variant">Lossless FLAC</span>
            <span className="font-body-sm text-on-surface-variant">DCI 4K RAW</span>
          </div>

          {/* Col 6: LEGAL */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
            <span className="font-label-caps uppercase text-on-surface" style={{ marginBottom: 'var(--space-xs)' }}>
              LEGAL
            </span>
            <span className="font-body-sm text-on-surface-variant">Acceptable Use</span>
            <span className="font-body-sm text-on-surface-variant">Privacy Protocol</span>
            <span className="font-body-sm text-on-surface-variant">Hardware Specs</span>
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
            <span>TLS 1.3 SECURE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
