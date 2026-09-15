import React, { useState } from 'react';
import TrackList from './TrackList';

export default function PlaylistProcessor({ playlistUrl, onReset }) {
  const [stage, setStage] = useState('idle'); // idle | processing | completed
  const [stepText, setStepText] = useState('');
  const [downloaded, setDownloaded] = useState(false);

  const mockTracks = [
    { num: '01', title: 'Stellar Horizon [Master Ambient Mix]', artist: 'Solaris Audio', duration: '04:12' },
    { num: '02', title: 'Radiant Transit (Synthetic Sub-Bass Dub)', artist: 'Lunar Protocol', duration: '03:45' },
    { num: '03', title: 'Thermal Forge (Overclocked Reprise)', artist: 'CyberStems', duration: '05:20' },
    { num: '04', title: 'Deep Frequency Resonance', artist: 'Void Resonance', duration: '03:59' },
    { num: '05', title: 'Obsidian Echoes (Analog Tape Saturation)', artist: 'Analog Hardware', duration: '04:44' },
    { num: '06', title: 'Cryo-Compression (Main Frame Mix)', artist: 'Thermal Cluster', duration: '03:12' },
    { num: '07', title: 'Quantum Drift (Lossless Stem Excerpt)', artist: 'Vector Waves', duration: '04:02' },
    { num: '08', title: 'Ember Decay (Outro Ambient Session)', artist: 'Solaris Audio', duration: '06:15' }
  ];

  const handleStartPlaylistProcessing = () => {
    setStage('processing');
    const steps = [
      "ANALYZING PLAYLIST...",
      "DOWNLOADING METADATA...",
      "PREPARING ARCHIVE...",
      "PACKAGING ZIP..."
    ];

    let i = 0;
    setStepText(steps[0]);
    const interval = setInterval(() => {
      i++;
      if (i < steps.length) {
        setStepText(steps[i]);
      } else {
        clearInterval(interval);
        setStage('completed');
      }
    }, 700);
  };

  const handleDownloadZip = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div 
      className="forge-card-elevated"
      style={{
        padding: 'var(--space-xl)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-lg)',
        backgroundColor: 'var(--surface-container-high)',
        border: '1px solid var(--secondary)',
        boxShadow: '0 0 24px rgba(255, 181, 152, 0.2)'
      }}
    >
      {/* Playlist Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-sm)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
          <div 
            style={{
              width: '44px',
              height: '44px',
              backgroundColor: 'var(--secondary-container)',
              borderRadius: 'var(--radius-default)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--on-secondary-container)'
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>queue_music</span>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="font-technical-badge text-secondary uppercase">PLAYLIST DETECTED</span>
              <span className="font-technical-badge text-outline">• SPOTIFY HARVESTER</span>
            </div>
            <h3 className="font-headline-sm text-on-surface" style={{ fontSize: '18px', marginTop: '2px' }}>
              Spotify Master Audio Collection (2026 Archive)
            </h3>
          </div>
        </div>

        <div className="font-technical-badge text-secondary bg-surface-container-lowest" style={{ padding: '6px 12px', borderRadius: 'var(--radius-sm)' }}>
          TRACKS: 24 DETECTED
        </div>
      </div>

      {/* Playlist Track List */}
      <TrackList tracks={mockTracks} />

      {/* Processing State Feedback */}
      {stage === 'processing' && (
        <div 
          style={{
            padding: 'var(--space-md)',
            backgroundColor: 'var(--surface-container-lowest)',
            borderRadius: 'var(--radius-default)',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-md)',
            border: '1px solid rgba(212, 139, 109, 0.3)'
          }}
        >
          <svg style={{ width: '24px', height: '24px', animation: 'spin 1s linear infinite', color: 'var(--secondary)' }} fill="none" viewBox="0 0 24 24">
            <circle opacity="0.25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
            <path opacity="0.75" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" fill="currentColor" />
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span className="font-technical-badge text-on-surface-variant">BATCH HARVEST PROCESS</span>
            <span className="font-headline-sm text-secondary" style={{ fontSize: '15px' }}>{stepText}</span>
          </div>
        </div>
      )}

      {/* Completion Details */}
      {stage === 'completed' && (
        <div 
          style={{
            padding: 'var(--space-md)',
            backgroundColor: 'var(--surface-container-lowest)',
            borderRadius: 'var(--radius-default)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-xs)',
            border: '1px solid var(--secondary)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span className="font-headline-sm text-secondary" style={{ fontSize: '16px' }}>PLAYLIST ARCHIVE READY</span>
            <span className="font-technical-badge text-primary bg-primary-container" style={{ padding: '2px 8px', borderRadius: '2px' }}>
              FORMAT: ZIP
            </span>
          </div>
          <div className="font-technical-data text-on-surface-variant" style={{ fontSize: '12px' }}>
            ESTIMATED ARCHIVE SIZE: <strong className="text-on-surface">248.4 MB</strong> • TOTAL TRACKS: <strong className="text-on-surface">24 TRACKS</strong>
          </div>
        </div>
      )}

      {/* Actions */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--space-md)' }}>
        {stage === 'idle' && (
          <button
            type="button"
            onClick={handleStartPlaylistProcessing}
            className="btn-forge-primary"
            style={{ padding: '12px 28px', fontSize: '14px' }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>folder_zip</span>
            <span>[ FORGE PLAYLIST ]</span>
          </button>
        )}

        {stage === 'completed' && (
          <button
            type="button"
            onClick={handleDownloadZip}
            className="btn-forge-primary"
            style={{
              padding: '12px 28px',
              fontSize: '14px',
              backgroundColor: downloaded ? 'var(--secondary)' : 'var(--primary-container)',
              color: downloaded ? 'var(--on-secondary)' : 'var(--on-primary-container)'
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
              {downloaded ? 'done' : 'download'}
            </span>
            <span>{downloaded ? 'ZIP ARCHIVE READY' : '[ DOWNLOAD ZIP ARCHIVE ]'}</span>
          </button>
        )}

        <button
          type="button"
          onClick={onReset}
          className="btn-hardware-secondary"
          style={{ padding: '12px 20px', fontSize: '13px' }}
        >
          <span>[ INGEST ANOTHER URL ]</span>
        </button>
      </div>
    </div>
  );
}
