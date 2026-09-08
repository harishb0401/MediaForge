import React from 'react';
import PipelineSection from '../components/PipelineSection';
import TechSpecsGrid from '../components/TechSpecsGrid';
import MediaAnalysisSection from '../components/MediaAnalysisSection';
import FinalCta from '../components/FinalCta';

export default function HowItWorks() {
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
            <span className="material-symbols-outlined text-secondary" style={{ fontSize: '24px' }}>account_tree</span>
            <span className="font-technical-badge text-secondary uppercase tracking-widest">
              SYSTEM ARCHITECTURE SPECIFICATION // DISTRIBUTED PIPELINE
            </span>
          </div>
          <h1 className="font-headline-lg text-on-surface uppercase tracking-tight">
            How MediaForge Works
          </h1>
          <p className="font-body-md text-on-surface-variant" style={{ maxWidth: '680px' }}>
            A granular breakdown of our thermal-stabilized transcode blades, memory-buffered demuxing engines, and edge-anycast download clusters.
          </p>
        </div>
      </section>

      {/* Pipeline Breakdown */}
      <PipelineSection />

      {/* Latency & Ingestion Benchmarks */}
      <section className="px-responsive">
        <div className="app-container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span className="font-label-caps uppercase text-secondary tracking-widest block">
                BENCHMARK TELEMETRY
              </span>
              <h2 className="font-headline-lg text-on-surface uppercase tracking-tight" style={{ marginTop: 'var(--space-2xs)' }}>
                Machine limits, unthrottled.
              </h2>
            </div>
            <span className="font-technical-badge text-outline">HARDWARE TESTBED: AMD EPYC + A100 TENSORS</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-md)' }}>
            <div className="forge-card" style={{ padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span className="font-technical-badge text-primary uppercase">INGESTION LATENCY</span>
              <span className="font-headline-md text-on-surface">14.2 MS</span>
              <p className="font-body-sm text-on-surface-variant">
                Direct-pipe TCP/QUIC handshake negotiates source stream blocks without waiting for full container assembly.
              </p>
            </div>

            <div className="forge-card" style={{ padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span className="font-technical-badge text-secondary uppercase">AV1 ENCODING SPEED</span>
              <span className="font-headline-md text-secondary">8.4× REALTIME</span>
              <p className="font-body-sm text-on-surface-variant">
                Distributed multi-GPU chunking slices long-form 4K streams into 10-second segments transcode-rendered in parallel.
              </p>
            </div>

            <div className="forge-card" style={{ padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span className="font-technical-badge text-tertiary uppercase">VOLATILE RAM RESIDENCY</span>
              <span className="font-headline-md text-tertiary">0 DISK I/O</span>
              <p className="font-body-sm text-on-surface-variant">
                Stream data stays purely inside ECC DDR5 RAM buffers throughout conversion and wipes completely after client egress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Spectral & Media Analysis */}
      <MediaAnalysisSection />

      {/* Infrastructure Specifications */}
      <TechSpecsGrid />

      {/* Final Call to Action */}
      <FinalCta />
    </div>
  );
}
