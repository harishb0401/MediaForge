import React, { useState } from 'react';
import IntakeTerminal from '../components/IntakeTerminal';

export default function SpotifyDownloader() {
  const [bitrate, setBitrate] = useState('flac');
  const [embedLyrics, setEmbedLyrics] = useState(true);
  const [hdArtwork, setHdArtwork] = useState(true);
  const [trackNumbering, setTrackNumbering] = useState(true);

  const audioCodecs = [
    { id: 'flac', label: 'FLAC 24-Bit / 48kHz', desc: 'Lossless Studio Master Quality', spec: '1,411 KBPS BITRATE' },
    { id: 'mp3', label: 'MP3 Constant 320 kbps', desc: 'Universal Maximum Compatibility', spec: 'CBR LAME 3.100' },
    { id: 'wav', label: 'WAV 96 kHz Uncompressed', desc: 'Direct Linear PCM Soundboard', spec: 'RAW AUDIO STREAM' },
    { id: 'm4a', label: 'M4A Apple Lossless / AAC', desc: 'Optimized for Apple Ecosystem', spec: 'AAC 320 KBPS' }
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
            <span className="material-symbols-outlined text-secondary" style={{ fontSize: '24px' }}>music_note</span>
            <span className="font-technical-badge text-secondary uppercase tracking-widest">
              DEDICATED ACOUSTIC NODE // SPOTIFY LOSSLESS
            </span>
          </div>
          <h1 className="font-headline-lg text-on-surface uppercase tracking-tight">
            Spotify Track & Album Harvester
          </h1>
          <p className="font-body-md text-on-surface-variant" style={{ maxWidth: '640px' }}>
            Extract master stereo audio streams from any Spotify track, album, or user playlist. Embeds pristine 3000x3000 artwork, complete ID3v2.4 tags, and synced LRC lyrics.
          </p>
        </div>
      </section>

      {/* Embedded Intake Terminal tailored to Spotify */}
      <IntakeTerminal initialPlatform="spotify" />

      {/* Advanced Parameters Console */}
      <section className="px-responsive" style={{ paddingBottom: 'var(--space-3xl)' }}>
        <div className="app-container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="font-label-caps text-secondary uppercase tracking-widest">
              ACOUSTIC ENCODING MATRIX & METADATA PREFERENCES
            </span>
            <span className="font-technical-badge text-outline">ID3V2.4 SPECIFICATION</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-md)' }}>
            {/* Audio Codec Selectors */}
            <div className="forge-card" style={{ padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              <span className="font-technical-badge text-secondary uppercase">BIT DEPTH & BITRATE SPECIFICATION</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {audioCodecs.map((codec) => (
                  <button
                    key={codec.id}
                    type="button"
                    onClick={() => setBitrate(codec.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 12px',
                      backgroundColor: bitrate === codec.id ? 'var(--color-surface-container-high)' : 'var(--color-surface-container-lowest)',
                      border: bitrate === codec.id ? '1px solid var(--color-primary)' : '1px solid rgba(212, 139, 109, 0.15)',
                      borderRadius: 'var(--radius-default)',
                      cursor: 'pointer',
                      color: 'var(--color-on-surface)',
                      textAlign: 'left'
                    }}
                  >
                    <div>
                      <span className="font-headline-sm block" style={{ fontSize: '14px' }}>{codec.label}</span>
                      <span className="font-body-sm text-on-surface-variant block">{codec.desc}</span>
                    </div>
                    <span className="font-technical-badge text-secondary">{codec.spec}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* ID3 Metadata Injection Box */}
            <div className="forge-card" style={{ padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              <span className="font-technical-badge text-primary uppercase">METADATA WRITING BLADES</span>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
                  <div>
                    <span className="font-headline-sm text-on-surface block" style={{ fontSize: '14px' }}>Embed 3000×3000 Cover Art</span>
                    <span className="font-body-sm text-on-surface-variant block">Embeds uncompressed high-resolution album artwork into ID3 frame.</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={hdArtwork}
                    onChange={(e) => setHdArtwork(e.target.checked)}
                    style={{ accentColor: 'var(--color-primary)', width: '18px', height: '18px' }}
                  />
                </label>

                <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
                  <div>
                    <span className="font-headline-sm text-on-surface block" style={{ fontSize: '14px' }}>Embed Synchronized Lyrics (LRC)</span>
                    <span className="font-body-sm text-on-surface-variant block">Includes timestamped subtitle track for audio player karaoke display.</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={embedLyrics}
                    onChange={(e) => setEmbedLyrics(e.target.checked)}
                    style={{ accentColor: 'var(--color-primary)', width: '18px', height: '18px' }}
                  />
                </label>

                <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
                  <div>
                    <span className="font-headline-sm text-on-surface block" style={{ fontSize: '14px' }}>Strict Track Numbering & Hierarchy</span>
                    <span className="font-body-sm text-on-surface-variant block">Formats filenames as "Disc-Track - Artist - Title" with ID3 disc indices.</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={trackNumbering}
                    onChange={(e) => setTrackNumbering(e.target.checked)}
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
                <span className="font-technical-badge text-outline block">AUDIO QUALITY CERTIFICATION</span>
                <span className="font-technical-data text-secondary">TRUE LOSSLESS STEREO PCM // 0.00% CLIPPING</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
