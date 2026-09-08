import React, { useState, useEffect } from 'react';

export default function MediaAnalysisSection() {
  // Add interactive dynamic animation to waveform heights
  const [pulseOffset, setPulseOffset] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseOffset(p => (p + 1) % 10);
    }, 400);
    return () => clearInterval(timer);
  }, []);

  const barHeights = [
    10, 30, 60, 80, 100, 70, 40, 90, 50, 104, 76, 24, 84, 110, 64, 44, 96, 116, 80,
    36, 88, 68, 20, 92, 56, 108, 72, 32, 82, 48, 98, 62, 16, 86, 38, 74, 26, 4
  ];

  return (
    <section 
      style={{
        position: 'relative',
        width: '100%',
        paddingTop: 'var(--space-4xl)',
        paddingBottom: 'var(--space-4xl)',
        backgroundColor: 'rgba(22, 12, 11, 0.9)',
        borderTop: '1px solid rgba(212, 139, 109, 0.12)',
        borderBottom: '1px solid rgba(212, 139, 109, 0.12)'
      }}
      className="px-responsive"
    >
      <div className="app-container">
        <style>{`
          .analysis-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: var(--gutter-desktop);
            align-items: center;
          }
          @media (min-width: 1024px) {
            .analysis-grid {
              grid-template-columns: 1fr 1fr;
            }
          }
        `}</style>
        <div className="analysis-grid">
          {/* Left Column: Readout Specs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            <div>
              <span className="font-label-caps uppercase text-secondary tracking-widest block">
                INSPECTION INSTRUMENTATION
              </span>
              <h2 className="font-headline-lg text-on-surface uppercase tracking-tight" style={{ marginTop: 'var(--space-2xs)' }}>
                Know your media before you download it.
              </h2>
              <p className="font-body-md text-on-surface-variant" style={{ marginTop: 'var(--space-sm)' }}>
                Real-time deep spectral analysis reads stream bit allocations, dynamic frequency limits, and frame quantization before triggering transcode.
              </p>
            </div>

            <div 
              className="forge-card"
              style={{
                padding: 'var(--space-lg)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-sm)',
                backgroundColor: 'var(--color-surface-container-low)',
                border: '1px solid rgba(212, 139, 109, 0.15)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 'var(--space-xs)' }}>
                <span className="font-technical-badge text-primary uppercase">
                  STREAM SIGNATURE READOUT
                </span>
                <span className="font-technical-badge text-outline">
                  HASH: #8F0A2B99C
                </span>
              </div>

              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: 'var(--space-sm)'
                }}
                className="font-technical-data text-technical-data"
              >
                <div style={{ backgroundColor: 'var(--color-surface-container)', padding: '10px 12px', borderRadius: 'var(--radius-default)', display: 'flex', flexDirection: 'column' }}>
                  <span className="font-technical-badge text-on-surface-variant">RESOLUTION</span>
                  <span className="text-on-surface" style={{ fontWeight: 600, marginTop: '4px' }}>3840 × 2160 (16:9 DCI)</span>
                </div>

                <div style={{ backgroundColor: 'var(--color-surface-container)', padding: '10px 12px', borderRadius: 'var(--radius-default)', display: 'flex', flexDirection: 'column' }}>
                  <span className="font-technical-badge text-on-surface-variant">VIDEO CODEC</span>
                  <span className="text-on-surface" style={{ fontWeight: 600, marginTop: '4px' }}>HEVC / H.265 MAIN 10</span>
                </div>

                <div style={{ backgroundColor: 'var(--color-surface-container)', padding: '10px 12px', borderRadius: 'var(--radius-default)', display: 'flex', flexDirection: 'column' }}>
                  <span className="font-technical-badge text-on-surface-variant">AUDIO ENCODING</span>
                  <span className="text-on-surface" style={{ fontWeight: 600, marginTop: '4px' }}>AAC LC / DUAL STEREO</span>
                </div>

                <div style={{ backgroundColor: 'var(--color-surface-container)', padding: '10px 12px', borderRadius: 'var(--radius-default)', display: 'flex', flexDirection: 'column' }}>
                  <span className="font-technical-badge text-on-surface-variant">BITRATE ARCHITECTURE</span>
                  <span className="text-secondary" style={{ fontWeight: 600, marginTop: '4px' }}>18.4 MBPS CONSTANT</span>
                </div>

                <div style={{ backgroundColor: 'var(--color-surface-container)', padding: '10px 12px', borderRadius: 'var(--radius-default)', display: 'flex', flexDirection: 'column' }}>
                  <span className="font-technical-badge text-on-surface-variant">COLOR GAMUT</span>
                  <span className="text-on-surface" style={{ fontWeight: 600, marginTop: '4px' }}>DCI-P3 HDR10 PROFILE</span>
                </div>

                <div style={{ backgroundColor: 'var(--color-surface-container)', padding: '10px 12px', borderRadius: 'var(--radius-default)', display: 'flex', flexDirection: 'column' }}>
                  <span className="font-technical-badge text-on-surface-variant">COMPATIBLE EXPORTS</span>
                  <span className="text-primary" style={{ fontWeight: 600, marginTop: '4px' }}>6 HARDWARE BLADES READY</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Audio Waveform Graphic Panel */}
          <div 
            className="forge-card-elevated"
            style={{
              padding: 'var(--space-lg)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '420px',
              backgroundColor: 'var(--color-surface-container-high)',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(180, 42, 26, 0.3)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                <span className="animate-ping-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }} />
                <span className="font-technical-badge text-on-surface uppercase">SPECTRUM FFT LIVE READOUT</span>
              </div>
              <span className="font-technical-badge text-secondary">20 HZ - 22.05 KHZ MASTER RANGE</span>
            </div>

            {/* SVG Waveform Visualizer Graphic */}
            <div style={{ margin: 'auto 0', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg 
                style={{ width: '100%', height: '144px', color: 'var(--color-primary)' }} 
                fill="currentColor" 
                viewBox="0 0 400 120"
              >
                {barHeights.map((h, i) => {
                  const modH = Math.max(6, Math.min(118, h + ((i + pulseOffset) % 3 === 0 ? 8 : -4)));
                  const y = 60 - modH / 2;
                  const opacity = modH > 90 ? 1 : modH > 50 ? 0.8 : 0.45;
                  return (
                    <rect
                      key={i}
                      x={10 + i * 10}
                      y={y}
                      width={4}
                      height={modH}
                      rx={1}
                      opacity={opacity}
                    />
                  );
                })}
              </svg>
            </div>

            {/* Waveform Metrics Bar */}
            <div 
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTop: '1px solid rgba(90, 65, 60, 0.4)',
                paddingTop: 'var(--space-xs)',
                zIndex: 10
              }}
              className="font-technical-badge text-on-surface-variant"
            >
              <span>PEAK: -0.1 DBFS</span>
              <span>RMS: -14.2 LUFS</span>
              <span>CREST FACTOR: 11.4 DB</span>
              <span className="text-secondary">TRUE PEAK SAFE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
