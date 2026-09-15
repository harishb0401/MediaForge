import React from 'react';

export default function TechSpecsGrid() {
  const specs = [
    {
      badge: 'CONTAINER ENGINE',
      badgeColor: 'var(--color-primary)',
      title: 'Video Codecs',
      items: [
        '• AV1 (libsvtav1 / Main Profile)',
        '• H.265 / HEVC (NVENC accelerated)',
        '• H.264 / AVC (High Profile Level 5.2)',
        '• VP9 High Bitrate Mode',
        '• ProRes 422 HQ (Direct Egress)'
      ]
    },
    {
      badge: 'ACOUSTIC PIPELINE',
      badgeColor: 'var(--color-secondary)',
      title: 'Audio Standards',
      items: [
        '• Lossless FLAC (24-bit / 96kHz)',
        '• Uncompressed PCM WAV (Studio Master)',
        '• MP3 CBR 320 kbps (LAME 3.100)',
        '• AAC-LC / HE-AAC v2 (Apple Spec)',
        '• OPUS Vorbis (Low Latency Voice)'
      ]
    },
    {
      badge: 'NETWORK SPEED',
      badgeColor: 'var(--color-tertiary)',
      title: 'Edge Delivery',
      items: [
        '• Multi-part chunked CDN streaming',
        '• Anycast Edge Ingestion (14.2ms)',
        '• HTTP/3 & QUIC protocol transport',
        '• Auto-resuming interrupted downloads',
        '• Uncapped bandwidth pipes'
      ]
    },
    {
      badge: 'PRIVACY PROTOCOL',
      badgeColor: 'var(--color-primary)',
      title: 'Security Core',
      items: [
        '• Zero log policy on ingested URLs',
        '• Volatile RAM processing (No disk persistence)',
        '• 1-Hour automated buffer wiping',
        '• TLS 1.3 Strict HTTPS everywhere',
        '• Fully anonymous session handles'
      ]
    }
  ];

  return (
    <section 
      id="tech-specs"
      style={{
        position: 'relative',
        width: '100%',
        paddingTop: 'var(--space-3xl)',
        paddingBottom: 'var(--space-3xl)',
        backgroundColor: 'var(--color-surface-container-lowest)'
      }}
      className="px-responsive"
    >
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2xl)' }}>
        <div>
          <span className="font-label-caps uppercase text-secondary tracking-widest block">
            INFRASTRUCTURE SPECIFICATION
          </span>
          <h2 className="font-headline-lg text-on-surface uppercase tracking-tight" style={{ marginTop: 'var(--space-2xs)' }}>
            Engineered for media.
          </h2>
        </div>

        <div className="grid-responsive-stats font-technical-data">
          {specs.map((spec, i) => (
            <div 
              key={i}
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
              <span className="font-technical-badge uppercase" style={{ color: spec.badgeColor }}>
                {spec.badge}
              </span>
              <span className="font-headline-sm text-on-surface" style={{ fontSize: '18px' }}>
                {spec.title}
              </span>
              <ul 
                className="font-body-sm text-on-surface-variant"
                style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', marginTop: 'var(--space-xs)' }}
              >
                {spec.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
