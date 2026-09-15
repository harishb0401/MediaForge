import React, { useState } from 'react';

export default function BatchForgeDeck() {
  const [zipLoading, setZipLoading] = useState(false);
  const [zipStatus, setZipStatus] = useState(null);
  const [showAllTracks, setShowAllTracks] = useState(false);
  const [downloadingTrack, setDownloadingTrack] = useState(null);

  const initialTracks = [
    {
      num: '01',
      title: '01 - Stellar Horizon [Master Ambient Mix]',
      codec: 'FLAC 24-BIT // 48.0 KHZ',
      duration: '04:12',
      size: '24.2 MB',
      waveBars: [3, 5, 2, 4, 1, 3]
    },
    {
      num: '02',
      title: '02 - Radiant Transit (Synthetic Sub-Bass Dub)',
      codec: 'FLAC 24-BIT // 48.0 KHZ',
      duration: '03:45',
      size: '21.8 MB',
      waveBars: [2, 4, 5, 3, 1, 3]
    },
    {
      num: '03',
      title: '03 - Thermal Forge (Overclocked Reprise)',
      codec: 'FLAC 24-BIT // 48.0 KHZ',
      duration: '05:20',
      size: '31.4 MB',
      waveBars: [4, 5, 4, 2, 1, 4]
    },
    {
      num: '04',
      title: '04 - Deep Frequency Resonance',
      codec: 'FLAC 24-BIT // 48.0 KHZ',
      duration: '03:59',
      size: '23.1 MB',
      waveBars: [1, 3, 5, 3, 2, 4]
    }
  ];

  const extraTracks = [
    {
      num: '05',
      title: '05 - Obsidian Echoes (Analog Tape Saturation)',
      codec: 'FLAC 24-BIT // 48.0 KHZ',
      duration: '04:44',
      size: '26.8 MB',
      waveBars: [2, 3, 5, 4, 2, 1]
    },
    {
      num: '06',
      title: '06 - Cryo-Compression (Main Frame Mix)',
      codec: 'FLAC 24-BIT // 48.0 KHZ',
      duration: '03:12',
      size: '18.4 MB',
      waveBars: [3, 4, 2, 5, 3, 2]
    },
    {
      num: '07',
      title: '07 - Quantum Drift (Lossless Stem Excerpt)',
      codec: 'FLAC 24-BIT // 48.0 KHZ',
      duration: '04:02',
      size: '23.9 MB',
      waveBars: [1, 2, 4, 5, 3, 4]
    },
    {
      num: '08',
      title: '08 - Ember Decay (Outro Ambient Session)',
      codec: 'FLAC 24-BIT // 48.0 KHZ',
      duration: '06:15',
      size: '36.5 MB',
      waveBars: [4, 5, 3, 2, 1, 2]
    }
  ];

  const displayedTracks = showAllTracks ? [...initialTracks, ...extraTracks] : initialTracks;

  const handleZipDownload = () => {
    setZipLoading(true);
    setTimeout(() => {
      setZipLoading(false);
      setZipStatus('ZIP Package Ready — Download Started!');
      setTimeout(() => setZipStatus(null), 3000);
    }, 1200);
  };

  const handleTrackDownload = (num) => {
    setDownloadingTrack(num);
    setTimeout(() => {
      setDownloadingTrack(null);
    }, 1500);
  };

  return (
    <section 
      id="tracklist-deck"
      style={{
        position: 'relative',
        width: '100%',
        paddingTop: 'var(--space-4xl)',
        paddingBottom: 'var(--space-4xl)'
      }}
      className="px-responsive"
    >
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2xl)' }}>
        
        {/* Section Header */}
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 'var(--space-md)' }}>
          <div>
            <span className="font-label-caps uppercase text-secondary tracking-widest block">
              BATCH FORGING STATION
            </span>
            <h2 className="font-headline-lg text-on-surface uppercase tracking-tight" style={{ marginTop: 'var(--space-2xs)' }}>
              One playlist. One download.
            </h2>
          </div>

          <button
            type="button"
            id="download-all-zip-btn"
            onClick={handleZipDownload}
            disabled={zipLoading}
            className="btn-forge-primary"
            style={{ padding: '10px 20px', fontSize: '13px' }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
              {zipLoading ? 'sync' : zipStatus ? 'check_circle' : 'folder_zip'}
            </span>
            <span>
              {zipLoading 
                ? 'Packaging ZIP Archive...' 
                : zipStatus 
                ? zipStatus 
                : 'Download Complete ZIP • 248.4 MB'}
            </span>
          </button>
        </div>

        {/* Visualizer Deck Container */}
        <div 
          className="forge-card"
          style={{
            padding: 'var(--space-lg)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-md)',
            backgroundColor: 'var(--color-surface-container-low)',
            border: '1px solid rgba(212, 139, 109, 0.15)'
          }}
        >
          {/* Playlist Meta Header */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 'var(--space-md)',
              backgroundColor: 'rgba(22, 12, 11, 0.6)',
              borderRadius: 'var(--radius-default)',
              gap: 'var(--space-md)',
              border: '1px solid rgba(212, 139, 109, 0.1)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
              <div 
                style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: 'var(--color-primary-container)',
                  borderRadius: 'var(--radius-default)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-on-primary-container)'
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>album</span>
              </div>
              <div>
                <div className="font-technical-badge text-secondary uppercase">
                  DETECTED ALBUM // YOUTUBE MUSIC BUNDLE
                </div>
                <h3 className="font-headline-sm text-on-surface" style={{ fontSize: '17px' }}>
                  Late Night Sessions Vol. IV (Original Audio Master)
                </h3>
              </div>
            </div>

            <div 
              className="font-technical-data text-on-surface-variant"
              style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-lg)', fontSize: '12px' }}
            >
              <span>TRACKS: <strong className="text-on-surface">12 DETECTED</strong></span>
              <span>TOTAL DURATION: <strong className="text-on-surface">48:16</strong></span>
              <span>EST. SIZE: <strong className="text-secondary">248.4 MB</strong></span>
            </div>
          </div>

          {/* Tracklist Table */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {displayedTracks.map((track) => {
              const isCurrentDownloading = downloadingTrack === track.num;
              return (
                <div key={track.num} className="track-row">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', minWidth: 0 }}>
                    <span className="font-technical-data text-outline" style={{ width: '24px' }}>
                      {track.num}
                    </span>
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>
                      play_arrow
                    </span>
                    <div style={{ minWidth: 0 }}>
                      <span 
                        className="font-body-md text-on-surface block"
                        style={{
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          maxWidth: '480px'
                        }}
                      >
                        {track.title}
                      </span>
                      <span className="font-technical-badge text-on-surface-variant">
                        {track.codec}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-lg)', flexShrink: 0 }}>
                    {/* Mini Waveform Visualizer */}
                    <div 
                      style={{
                        display: 'none',
                        alignItems: 'center',
                        gap: '4px',
                        height: '20px'
                      }}
                      className="track-waveform"
                    >
                      <style>{`
                        @media (min-width: 768px) {
                          .track-waveform { display: flex !important; }
                        }
                      `}</style>
                      {track.waveBars.map((height, i) => (
                        <span
                          key={i}
                          style={{
                            width: '2px',
                            height: `${height * 4}px`,
                            backgroundColor: i % 2 === 0 ? 'var(--color-secondary)' : 'var(--color-primary)',
                            borderRadius: '1px'
                          }}
                        />
                      ))}
                    </div>

                    <span className="font-technical-data text-on-surface-variant">
                      {track.duration}
                    </span>

                    <span 
                      className="font-technical-badge"
                      style={{
                        padding: '2px 6px',
                        backgroundColor: 'var(--color-surface-container-lowest)',
                        color: 'var(--color-secondary)',
                        borderRadius: 'var(--radius-default)'
                      }}
                    >
                      {track.size}
                    </span>

                    <button
                      type="button"
                      aria-label={`Download Track ${track.num}`}
                      onClick={() => handleTrackDownload(track.num)}
                      className="btn-ghost-icon"
                      style={{
                        width: '32px',
                        height: '32px',
                        backgroundColor: isCurrentDownloading ? 'var(--color-primary-container)' : 'var(--color-surface-container-lowest)',
                        color: isCurrentDownloading ? 'var(--color-on-primary-container)' : 'var(--color-on-surface)'
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                        {isCurrentDownloading ? 'sync' : 'download'}
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer Pagination / Toggle */}
          <div 
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: 'var(--space-sm)',
              borderTop: '1px solid rgba(212, 139, 109, 0.1)'
            }}
            className="font-technical-data text-on-surface-variant"
          >
            <span>SHOWING {displayedTracks.length} OF 12 TRACKS</span>
            <button
              type="button"
              onClick={() => setShowAllTracks(!showAllTracks)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--color-secondary)',
                cursor: 'pointer',
                fontFamily: 'var(--font-technical)',
                fontSize: '12px',
                textDecoration: 'underline'
              }}
            >
              {showAllTracks ? '- COLLAPSE EXTRA QUEUE' : '+ VIEW REMAINING 8 TRACKS IN QUEUE'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
