import React from 'react';
import FinalCta from '../components/FinalCta';
import TechSpecsGrid from '../components/TechSpecsGrid';

export default function About() {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 'var(--space-2xl)' }}>
      {/* Header Banner */}
      <section 
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: 'var(--space-xl)',
          paddingBottom: 'var(--space-xl)',
          backgroundColor: 'rgba(36, 25, 24, 0.7)',
          borderBottom: '1px solid rgba(212, 139, 109, 0.15)'
        }}
        className="px-responsive"
      >
        <div className="app-container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '24px' }}>terminal</span>
            <span className="font-technical-badge text-primary uppercase tracking-widest">
              SYSTEM MANIFESTO // ENGINEERING PHILOSOPHY
            </span>
          </div>
          <h1 className="font-headline-lg text-on-surface uppercase tracking-tight">
            About MediaForge
          </h1>
          <p className="font-body-md text-on-surface-variant" style={{ maxWidth: '680px' }}>
            Engineered for audio archivists, sound designers, and visual editors who require raw, unthrottled media extraction without consumer software compromises.
          </p>
        </div>
      </section>

      {/* Philosophy Statement Section */}
      <section className="px-responsive">
        <div className="app-container">
          <style>{`
            .about-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: var(--gutter-desktop);
              align-items: center;
            }
            @media (min-width: 1024px) {
              .about-grid {
                grid-template-columns: 1.2fr 0.8fr;
              }
            }
          `}</style>
          <div className="about-grid">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              <span className="font-label-caps uppercase text-secondary tracking-widest">
                THE INDUSTRIAL STANDARD
              </span>
              <h2 className="font-display-hero text-on-surface uppercase tracking-tight" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
                Reclaiming fidelity in a lossy world.
              </h2>
              <p className="font-body-lg text-on-surface-variant">
                Most web downloaders inject intrusive telemetry, re-encode audio into muffled low-bitrate MP3s, compress colorspaces, or cap client bandwidth.
              </p>
              <p className="font-body-md text-on-surface-variant">
                MediaForge was built with a different mandate: absolute control, thermal power, and digital mastery. Every conversion operates on dedicated hardware transcode blades inside volatile memory buffers. We do not store your downloads, we do not log your target URLs, and we never compress audio below studio-master tolerances.
              </p>

              <div style={{ display: 'flex', gap: 'var(--space-md)', marginTop: 'var(--space-md)' }}>
                <div style={{ padding: '12px 16px', backgroundColor: 'var(--color-surface-container)', borderRadius: 'var(--radius-default)', border: '1px solid rgba(212, 139, 109, 0.15)' }}>
                  <span className="font-technical-badge text-primary uppercase block">ENCRYPTION PROTOCOL</span>
                  <span className="font-technical-data text-on-surface">TLS 1.3 / Strict PFS</span>
                </div>
                <div style={{ padding: '12px 16px', backgroundColor: 'var(--color-surface-container)', borderRadius: 'var(--radius-default)', border: '1px solid rgba(212, 139, 109, 0.15)' }}>
                  <span className="font-technical-badge text-secondary uppercase block">PERSISTENCE POLICY</span>
                  <span className="font-technical-data text-on-surface">0-Disk RAM Buffering</span>
                </div>
              </div>
            </div>

            {/* Visual Forge Card Graphic */}
            <div 
              className="forge-card-elevated"
              style={{
                padding: 'var(--space-xl)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-lg)',
                backgroundColor: 'var(--color-surface-container-high)',
                border: '1px solid rgba(180, 42, 26, 0.3)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <img src="/src/assets/mediaforge-emblem.svg" alt="Emblem" style={{ width: '28px', height: '28px' }} />
                  <span className="font-technical-badge text-on-surface uppercase">CORE SYSTEM STATUS</span>
                </div>
                <span className="font-technical-badge text-secondary">ACTIVE V2.4</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }} className="font-technical-data text-technical-data">
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px', backgroundColor: 'var(--color-surface-container-lowest)', borderRadius: '2px' }}>
                  <span className="text-on-surface-variant">Cluster Deployment:</span>
                  <span className="text-on-surface">Frankfurt & Silicon Valley</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px', backgroundColor: 'var(--color-surface-container-lowest)', borderRadius: '2px' }}>
                  <span className="text-on-surface-variant">Primary Codec Core:</span>
                  <span className="text-primary">FFmpeg 7.0 + NVENC SDK</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px', backgroundColor: 'var(--color-surface-container-lowest)', borderRadius: '2px' }}>
                  <span className="text-on-surface-variant">Max Single Item Buffer:</span>
                  <span className="text-secondary">25.0 GB</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px', backgroundColor: 'var(--color-surface-container-lowest)', borderRadius: '2px' }}>
                  <span className="text-on-surface-variant">Edge Ingestion Protocol:</span>
                  <span className="text-on-surface">Anycast HTTP/3 QUIC</span>
                </div>
              </div>

              <div 
                style={{
                  padding: '10px',
                  backgroundColor: 'rgba(180, 42, 26, 0.15)',
                  borderRadius: 'var(--radius-default)',
                  border: '1px solid rgba(180, 42, 26, 0.4)',
                  textAlign: 'center'
                }}
              >
                <span className="font-technical-badge text-primary uppercase">
                  UNCOMPROMISED ARCHIVE INTEGRITY GUARANTEED
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Specs Grid */}
      <TechSpecsGrid />

      {/* Final Call to Action */}
      <FinalCta />
    </div>
  );
}
