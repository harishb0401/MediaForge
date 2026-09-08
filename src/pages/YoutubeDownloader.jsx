import React, { useState } from 'react';
import IntakeTerminal from '../components/IntakeTerminal';

export default function YoutubeDownloader() {
  const [quality, setQuality] = useState('2160p');
  const [includeSubs, setIncludeSubs] = useState(true);
  const [extractStems, setExtractStems] = useState(false);
  const [chaptersSplit, setChaptersSplit] = useState(false);

  const videoOptions = [
    { res: '2160p', label: '4K Ultra HD (60 FPS)', codec: 'AV1 / VP9', size: '~280 MB' },
    { res: '1440p', label: '2K Quad HD (60 FPS)', codec: 'VP9 Profile 2', size: '~150 MB' },
    { res: '1080p', label: 'Full HD 1080p HQ', codec: 'H.264 High 5.2', size: '~85 MB' },
    { res: '720p', label: 'HD 720p Mobile', codec: 'H.264 Baseline', size: '~45 MB' },
    { res: 'audio', label: 'Extract Lossless Audio Only', codec: 'OPUS / FLAC', size: '~25 MB' }
  ];

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
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '24px' }}>smart_display</span>
            <span className="font-technical-badge text-primary uppercase tracking-widest">
              DEDICATED INGESTION NODE // YOUTUBE 4K
            </span>
          </div>
          <h1 className="font-headline-lg text-on-surface uppercase tracking-tight">
            YouTube 4K & Playlist Extractor
          </h1>
          <p className="font-body-md text-on-surface-variant" style={{ maxWidth: '640px' }}>
            Transcode single videos, high-framerate 60FPS streams, or complete multi-gigabyte playlists directly into master MP4, WEBM, or uncompressed audio files.
          </p>
        </div>
      </section>

      {/* Embedded Intake Terminal tailored to YouTube */}
      <IntakeTerminal initialPlatform="youtube" />

      {/* Advanced Parameters Console */}
      <section className="px-responsive" style={{ paddingBottom: 'var(--space-3xl)' }}>
        <div className="app-container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="font-label-caps text-secondary uppercase tracking-widest">
              ADVANCED YOUTUBE TRANSCODE PREFERENCES
            </span>
            <span className="font-technical-badge text-outline">HARDWARE ENGINE NVENC</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-md)' }}>
            {/* Resolution Selector Box */}
            <div className="forge-card" style={{ padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              <span className="font-technical-badge text-primary uppercase">MAX TARGET RESOLUTION</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {videoOptions.map((opt) => (
                  <button
                    key={opt.res}
                    type="button"
                    onClick={() => setQuality(opt.res)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 12px',
                      backgroundColor: quality === opt.res ? 'var(--color-surface-container-high)' : 'var(--color-surface-container-lowest)',
                      border: quality === opt.res ? '1px solid var(--color-primary)' : '1px solid rgba(212, 139, 109, 0.15)',
                      borderRadius: 'var(--radius-default)',
                      cursor: 'pointer',
                      color: 'var(--color-on-surface)',
                      textAlign: 'left'
                    }}
                  >
                    <div>
                      <span className="font-headline-sm block" style={{ fontSize: '14px' }}>{opt.label}</span>
                      <span className="font-technical-badge text-on-surface-variant">{opt.codec}</span>
                    </div>
                    <span className="font-technical-badge text-secondary">{opt.size}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Ingestion Modules & Switches */}
            <div className="forge-card" style={{ padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              <span className="font-technical-badge text-secondary uppercase">METADATA & SUBTITLE BLADES</span>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
                  <div>
                    <span className="font-headline-sm text-on-surface block" style={{ fontSize: '14px' }}>Extract Subtitles / CC</span>
                    <span className="font-body-sm text-on-surface-variant block">Embeds multi-language SRT and VTT streams into container.</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={includeSubs}
                    onChange={(e) => setIncludeSubs(e.target.checked)}
                    style={{ accentColor: 'var(--color-primary)', width: '18px', height: '18px' }}
                  />
                </label>

                <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
                  <div>
                    <span className="font-headline-sm text-on-surface block" style={{ fontSize: '14px' }}>Chapter Slice Mode</span>
                    <span className="font-body-sm text-on-surface-variant block">Splits video into individual tagged files according to YouTube chapters.</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={chaptersSplit}
                    onChange={(e) => setChaptersSplit(e.target.checked)}
                    style={{ accentColor: 'var(--color-primary)', width: '18px', height: '18px' }}
                  />
                </label>

                <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
                  <div>
                    <span className="font-headline-sm text-on-surface block" style={{ fontSize: '14px' }}>Isolate Acoustic Audio Stems</span>
                    <span className="font-body-sm text-on-surface-variant block">Demuxes dialog, background music, and SFX tracks into separate stems.</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={extractStems}
                    onChange={(e) => setExtractStems(e.target.checked)}
                    style={{ accentColor: 'var(--color-primary)', width: '18px', height: '18px' }}
                  />
                </label>
              </div>

              <div 
                style={{
                  marginTop: 'auto',
                  padding: '10px',
                  backgroundColor: 'var(--color-surface-container-lowest)',
                  borderRadius: 'var(--radius-default)',
                  border: '1px solid rgba(212, 139, 109, 0.15)'
                }}
              >
                <span className="font-technical-badge text-outline block">ESTIMATED THROUGHPUT SPEED</span>
                <span className="font-technical-data text-secondary">~65 MB/S HARDWARE EGRESS READY</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
