import React from 'react';
import Reactor3D from '../components/Reactor3D';
import IntakeTerminal from '../components/IntakeTerminal';
import PipelineSection from '../components/PipelineSection';
import CapabilitiesMatrix from '../components/CapabilitiesMatrix';
import BatchForgeDeck from '../components/BatchForgeDeck';
import MediaAnalysisSection from '../components/MediaAnalysisSection';
import SpeedShowcase from '../components/SpeedShowcase';
import TechSpecsGrid from '../components/TechSpecsGrid';
import TelemetryStats from '../components/TelemetryStats';
import FinalCta from '../components/FinalCta';

export default function Home() {
  const scrollToTerminal = () => {
    const el = document.getElementById('intake-terminal');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPipeline = () => {
    const el = document.getElementById('pipeline-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      
      {/* SECTION 1: HERO */}
      <section 
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: 'var(--space-xl)',
          paddingBottom: 'var(--space-4xl)',
          overflow: 'hidden'
        }}
        className="px-responsive"
      >
        <div className="app-container">
          <style>{`
            .hero-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: var(--gutter-desktop);
              align-items: center;
            }
            @media (min-width: 1024px) {
              .hero-grid {
                grid-template-columns: 1.1fr 0.9fr;
              }
            }
          `}</style>
          <div className="hero-grid">
            {/* Left Column: Editorial Statement */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', zIndex: 10 }}>
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-xs)',
                  padding: '6px 12px',
                  backgroundColor: 'var(--color-surface-container-lowest)',
                  color: 'var(--color-secondary)',
                  borderRadius: 'var(--radius-default)',
                  border: '1px solid rgba(212, 139, 109, 0.2)',
                  marginBottom: 'var(--space-lg)'
                }}
              >
                <span className="animate-ping-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-primary-container)' }} />
                <span className="font-technical-badge uppercase tracking-widest">
                  MEDIAFORGE // HYPER-SPEED ENGINE // V2.4
                </span>
              </div>

              <h1 
                className="font-display-hero text-on-surface uppercase tracking-tight"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 0,
                  lineHeight: 0.98
                }}
              >
                <span className="text-on-surface">DOWNLOAD.</span>
                <span className="text-gradient-convert">CONVERT.</span>
                <span className="text-on-surface">FORGE.</span>
              </h1>

              <p 
                className="font-body-lg text-on-surface-variant"
                style={{
                  marginTop: 'var(--space-lg)',
                  maxWidth: '560px'
                }}
              >
                One high-fidelity workspace engineered for extracting, transcoding, and organizing streamable media at lossless bitrates with industrial precision.
              </p>

              {/* CTAs */}
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--space-md)', marginTop: 'var(--space-2xl)' }}>
                <button
                  type="button"
                  onClick={scrollToTerminal}
                  className="btn-forge-primary"
                  style={{
                    padding: '14px 28px',
                    fontSize: '14px',
                    boxShadow: '0 0 24px rgba(180, 42, 26, 0.5)'
                  }}
                >
                  [ Start Forging ]
                </button>

                <button
                  type="button"
                  onClick={scrollToPipeline}
                  className="btn-hardware-secondary"
                  style={{
                    padding: '14px 24px',
                    fontSize: '13px'
                  }}
                >
                  <span>Explore Platform</span>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_downward</span>
                </button>
              </div>

              {/* Telemetry Metadata Strip */}
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: 'var(--space-md)',
                  marginTop: 'var(--space-3xl)',
                  padding: 'var(--space-md)',
                  width: '100%',
                  backgroundColor: 'rgba(22, 12, 11, 0.65)',
                  borderRadius: 'var(--radius-default)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(212, 139, 109, 0.15)'
                }}
              >
                <div>
                  <div className="font-technical-badge text-on-surface-variant uppercase">ENGINE CLUSTER</div>
                  <div className="font-technical-data text-on-surface" style={{ marginTop: '4px' }}>EU-CENTRAL-09</div>
                </div>
                <div>
                  <div className="font-technical-badge text-on-surface-variant uppercase">THROUGHPUT</div>
                  <div className="font-technical-data text-secondary" style={{ marginTop: '4px' }}>12.4 GB/S PEAK</div>
                </div>
                <div>
                  <div className="font-technical-badge text-on-surface-variant uppercase">TRANSCODE LATENCY</div>
                  <div className="font-technical-data text-primary" style={{ marginTop: '4px' }}>0.08 SEC / MIN</div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive 3D Reactor & Overlays */}
            <div 
              style={{
                position: 'relative',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '540px'
              }}
            >
              <div 
                className="forge-card"
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '520px',
                  borderRadius: 'var(--radius-default)',
                  overflow: 'hidden',
                  backgroundColor: 'rgba(22, 12, 11, 0.5)',
                  boxShadow: '0 25px 60px rgba(0,0,0,0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Reactor3D />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 'var(--space-3xl)' }}>
            <button
              type="button"
              onClick={scrollToTerminal}
              style={{
                background: 'none',
                border: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'var(--space-xs)',
                cursor: 'pointer',
                color: 'var(--color-on-surface-variant)',
                transition: 'color 0.2s'
              }}
            >
              <span className="font-technical-badge uppercase tracking-widest">SCROLL TO FORGE ↓</span>
              <span 
                style={{
                  width: '2px',
                  height: '24px',
                  background: 'linear-gradient(180deg, var(--color-primary) 0%, transparent 100%)'
                }}
                className="animate-pulse-glow"
              />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: PRIMARY INTAKE & FORGING STATION */}
      <IntakeTerminal initialPlatform="youtube" />

      {/* SECTION 3: MEDIA PROCESSING PIPELINE */}
      <PipelineSection />

      {/* SECTION 4: FEATURE MATRIX (MASONRY/BENTO) */}
      <CapabilitiesMatrix />

      {/* SECTION 5: PLAYLIST & BATCH FORGE DECK */}
      <BatchForgeDeck />

      {/* SECTION 6: DEEP MEDIA ANALYSIS SECTION */}
      <MediaAnalysisSection />

      {/* SECTION 7: CINEMATIC SPEED SHOWCASE */}
      <SpeedShowcase />

      {/* SECTION 8: TECHNICAL SPECIFICATIONS GRID */}
      <TechSpecsGrid />

      {/* SECTION 9: METRIC TELEMETRY & ACTIVITY STATS */}
      <TelemetryStats />

      {/* SECTION 10: MONUMENTAL FINAL CTA */}
      <FinalCta />

    </div>
  );
}
