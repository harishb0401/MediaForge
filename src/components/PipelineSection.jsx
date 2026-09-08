import React from 'react';

export default function PipelineSection() {
  const stages = [
    {
      num: '01 / INGEST',
      title: 'URL Ingestion',
      icon: 'cloud_download',
      desc: 'Bypasses platform rate limiters via distributed dynamic IP rotators.',
      spec: 'HTTP 302 DIRECT PIPED',
      isPrimary: false
    },
    {
      num: '02 / DECODE',
      title: 'Deep Analysis',
      icon: 'troubleshoot',
      desc: 'Demuxes audio streams, bitrates, chromatic gamuts, and chapter markers.',
      spec: 'FFMPEG HARDWARE BLADE',
      isPrimary: false
    },
    {
      num: '03 / FORGE',
      title: 'Adaptive Transcode',
      icon: 'developer_board',
      desc: 'AV1, HEVC, or lossless audio PCM rendering with hardware GPU threads.',
      spec: 'CUDA CLUSTER PARALLEL',
      isPrimary: true
    },
    {
      num: '04 / ENRICH',
      title: 'Metadata Injection',
      icon: 'id_card',
      desc: 'High-res artwork embedding, ID3 tag normalization, and chapter indexing.',
      spec: 'ID3V2.4 & ATOM WRITING',
      isPrimary: false
    },
    {
      num: '05 / BUNDLE',
      title: 'Batch Packaging',
      icon: 'archive',
      desc: 'Organizes tracks into multi-disc folder hierarchies with master ZIP archive.',
      spec: 'STORE / DEFLATE LEVEL 9',
      isPrimary: false
    },
    {
      num: '06 / EGRESS',
      title: 'CDN Egress',
      icon: 'rocket_launch',
      desc: 'Chunked parallel download streams from the edge node closest to you.',
      spec: 'ANYCAST 100G CDN',
      isPrimary: false
    }
  ];

  return (
    <section 
      id="pipeline-section"
      style={{
        position: 'relative',
        width: '100%',
        paddingTop: 'var(--space-4xl)',
        paddingBottom: 'var(--space-4xl)'
      }}
      className="px-responsive"
    >
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2xl)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
          <span className="font-label-caps uppercase text-secondary tracking-widest">
            ARCHITECTURE // ZERO BUFFERING
          </span>
          <h2 className="font-headline-lg text-on-surface uppercase tracking-tight">
            Forge your media.
          </h2>
          <p className="font-body-md text-on-surface-variant" style={{ maxWidth: '640px' }}>
            Industrial ingestion through distributed transcode blades. Stream data is demuxed, analyzed, converted, and assembled concurrently at machine limits.
          </p>
        </div>

        {/* Pipeline Steps Graphic Grid */}
        <div className="grid-responsive-6">
          {stages.map((stage, idx) => (
            <div
              key={idx}
              className={stage.isPrimary ? 'forge-card-elevated' : 'forge-card'}
              style={{
                padding: 'var(--space-md)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '224px',
                backgroundColor: stage.isPrimary ? 'var(--color-surface-container-high)' : 'var(--color-surface-container-low)',
                transition: 'all 0.2s ease',
                border: stage.isPrimary ? '1px solid rgba(180, 42, 26, 0.4)' : '1px solid rgba(212, 139, 109, 0.15)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span 
                  className="font-technical-badge" 
                  style={{ color: stage.isPrimary ? 'var(--color-primary)' : 'var(--color-primary)' }}
                >
                  {stage.num}
                </span>
                <span 
                  className="material-symbols-outlined" 
                  style={{ 
                    fontSize: '20px', 
                    color: stage.isPrimary ? 'var(--color-primary)' : 'var(--color-secondary)' 
                  }}
                >
                  {stage.icon}
                </span>
              </div>

              <div>
                <h4 className="font-headline-sm text-on-surface" style={{ fontSize: '16px' }}>{stage.title}</h4>
                <p className="font-body-sm text-on-surface-variant" style={{ marginTop: '4px', lineHeight: '1.4' }}>
                  {stage.desc}
                </p>
              </div>

              <div 
                className="font-technical-badge"
                style={{ color: stage.isPrimary ? 'var(--color-primary)' : 'var(--color-outline)' }}
              >
                {stage.spec}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
