import React from 'react';

export default function CapabilitiesMatrix() {
  const cards = [
    {
      num: '01 / PLATFORM UNIVERSALITY',
      icon: 'hub',
      title: 'Multi-Platform Extraction',
      desc: 'Universal ingestion adapters tailored to over 40 mainstream audio, video, and live-streaming backends. No client throttling, no CAPTCHA interruptions.',
      footer: (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '12px' }}>
          <span className="font-technical-badge" style={{ padding: '2px 8px', backgroundColor: 'var(--color-surface-container)', color: 'var(--color-on-surface-variant)', borderRadius: '2px' }}>YOUTUBE 4K</span>
          <span className="font-technical-badge" style={{ padding: '2px 8px', backgroundColor: 'var(--color-surface-container)', color: 'var(--color-on-surface-variant)', borderRadius: '2px' }}>SPOTIFY 320K</span>
          <span className="font-technical-badge" style={{ padding: '2px 8px', backgroundColor: 'var(--color-surface-container)', color: 'var(--color-on-surface-variant)', borderRadius: '2px' }}>SOUNDCLOUD FLAC</span>
          <span className="font-technical-badge" style={{ padding: '2px 8px', backgroundColor: 'var(--color-surface-container)', color: 'var(--color-on-surface-variant)', borderRadius: '2px' }}>VIMEO MASTER</span>
        </div>
      ),
      isHighlight: false
    },
    {
      num: '02 / UNCOMPROMISED BITRATE',
      icon: 'graphic_eq',
      title: 'Lossless Audio & Color Gamuts',
      desc: 'Extract master stereo streams without destructive re-compression. Retains DCI-P3 color profiles, Rec.709, and HDR10 metadata in high-efficiency containers.',
      footer: (
        <div 
          style={{
            backgroundColor: 'var(--color-surface-container-lowest)',
            padding: '8px 12px',
            borderRadius: 'var(--radius-default)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'var(--color-secondary)'
          }}
          className="font-technical-badge"
        >
          <span>BIT DEPTH: 24-BIT / 96KHZ</span>
          <span>DYNAMIC RANGE: &gt;112 DB</span>
        </div>
      ),
      isHighlight: true
    },
    {
      num: '03 / PLAYLIST INGESTION',
      icon: 'queue_music',
      title: 'Complete Playlist Harvest',
      desc: 'Feed an entire YouTube, Spotify, or SoundCloud album link. The engine automatically indexes every single item, sequences filenames, and downloads all in one bundle.',
      footer: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-on-surface-variant)' }} className="font-technical-data">
          <span className="material-symbols-outlined text-secondary" style={{ fontSize: '16px' }}>done_all</span>
          <span>Up to 500 tracks per batch job</span>
        </div>
      ),
      isHighlight: false
    },
    {
      num: '04 / ZERO HOST IMPACT',
      icon: 'memory',
      title: 'Cloud-Driven Multi-Thread',
      desc: 'All transcoding work runs in our thermal-stabilized server blades. Your client CPU never throttles, heats up, or consumes battery power during intensive conversions.',
      footer: (
        <div className="font-technical-badge text-outline">
          DISTRIBUTED KUBERNETES PODS
        </div>
      ),
      isHighlight: false
    },
    {
      num: '05 / FINE ARCHITECTURE',
      icon: 'tune',
      title: 'Granular Format Governance',
      desc: 'Tweak container specifics before starting: switch between AAC, MP3, OPUS, and FLAC, or force DCI 4K resolution bounds and constant bitrate targets.',
      footer: (
        <div className="font-technical-badge text-secondary">
          CRF 16 • PRESET VERYSLOW • VBR/CBR
        </div>
      ),
      isHighlight: false
    },
    {
      num: '06 / PACKAGING APPARATUS',
      icon: 'folder_zip',
      title: 'One-Click ZIP Archiving',
      desc: 'No need to accept dozens of individual browser download prompts. Everything packages into a cleanly structured single archive with folder structures intact.',
      footer: (
        <div className="font-technical-badge text-primary">
          STREAMED ZIP ON THE FLY
        </div>
      ),
      isHighlight: false
    }
  ];

  return (
    <section 
      id="features"
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
        
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 'var(--space-sm)' }}>
          <div>
            <span className="font-label-caps uppercase text-secondary tracking-widest block">
              CAPABILITIES MATRIX
            </span>
            <h2 className="font-headline-lg text-on-surface uppercase tracking-tight" style={{ marginTop: 'var(--space-2xs)' }}>
              Built for every kind of media.
            </h2>
          </div>
          <span className="font-technical-badge text-outline">
            SPECIFICATION DOCUMENT: ARCHIVE-SPEC-2026
          </span>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid-responsive-bento">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={card.isHighlight ? 'forge-card-elevated' : 'forge-card'}
              style={{
                padding: 'var(--space-xl)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 'var(--space-lg)',
                backgroundColor: card.isHighlight ? 'var(--color-surface-container-high)' : 'var(--color-surface-container-low)',
                border: card.isHighlight ? '1px solid rgba(180, 42, 26, 0.4)' : '1px solid rgba(212, 139, 109, 0.15)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="font-technical-badge uppercase" style={{ color: card.isHighlight ? 'var(--color-primary)' : 'var(--color-secondary)' }}>
                    {card.num}
                  </span>
                  <span className="material-symbols-outlined" style={{ color: card.isHighlight ? 'var(--color-primary)' : 'var(--color-primary)' }}>
                    {card.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-on-surface" style={{ marginTop: 'var(--space-md)' }}>
                  {card.title}
                </h3>
                <p className="font-body-md text-on-surface-variant" style={{ marginTop: 'var(--space-sm)' }}>
                  {card.desc}
                </p>
              </div>

              <div>
                {card.footer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
