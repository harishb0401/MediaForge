import React, { useState, useEffect } from 'react';
import { PLATFORMS } from '../config/platforms';

export default function IntakeTerminal({ initialPlatform = 'youtube' }) {
  const [selectedPlatformId, setSelectedPlatformId] = useState(initialPlatform);
  const platform = PLATFORMS.find(p => p.id === selectedPlatformId) || PLATFORMS[0];

  const [url, setUrl] = useState(platform.defaultUrl);
  const [selectedFormat, setSelectedFormat] = useState(platform.defaultFormat);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analyzedSuccess, setAnalyzedSuccess] = useState(false);

  // Active detected media state
  const [mediaTitle, setMediaTitle] = useState(platform.sampleMedia.title);
  const [mediaStats, setMediaStats] = useState(platform.sampleMedia);

  // Forging Transcode Simulation
  const [forgeState, setForgeState] = useState('idle'); // idle | transcoding | complete
  const [forgePercent, setForgePercent] = useState(0);
  const [forgePhase, setForgePhase] = useState('INGEST READY');
  const [btnLabel, setBtnLabel] = useState('[ START FORGING ]');

  // Sync state when platform changes
  useEffect(() => {
    const p = PLATFORMS.find(item => item.id === selectedPlatformId) || PLATFORMS[0];
    setUrl(p.defaultUrl);
    setSelectedFormat(p.defaultFormat);
    setMediaTitle(p.sampleMedia.title);
    setMediaStats(p.sampleMedia);
    setForgeState('idle');
    setForgePercent(0);
    setBtnLabel('[ START FORGING ]');
  }, [selectedPlatformId]);

  // Handle URL Analysis
  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setAnalyzedSuccess(false);

    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalyzedSuccess(true);
      if (url.toLowerCase().includes('playlist') || url.toLowerCase().includes('album')) {
        setMediaTitle(`Detected_Playlist_Archive_${platform.name}_Master.zip (12 Items)`);
      } else {
        setMediaTitle(platform.sampleMedia.title);
      }
      setTimeout(() => {
        setAnalyzedSuccess(false);
      }, 2500);
    }, 700);
  };

  // Handle Multi-Stage Forging Simulation
  const handleStartForge = () => {
    if (forgeState === 'complete') {
      setBtnLabel('DOWNLOAD STARTED!');
      setTimeout(() => {
        setBtnLabel('[ FORGE ANOTHER ]');
        setForgeState('idle');
        setForgePercent(0);
      }, 2000);
      return;
    }

    setForgeState('transcoding');
    setForgePercent(0);
    const phases = [
      "PARSING TARGET URL...",
      "DEMUXING HARDWARE STREAMS...",
      "TRANSCODING LOSSLESS CODEC...",
      "PACKAGING MASTER ARCHIVE..."
    ];

    let pct = 0;
    const interval = setInterval(() => {
      pct += 10;
      setForgePercent(pct);
      const phaseIndex = Math.min(Math.floor(pct / 28), phases.length - 1);
      setForgePhase(phases[phaseIndex]);

      if (pct >= 100) {
        clearInterval(interval);
        setForgeState('complete');
        setBtnLabel('[ DOWNLOAD MASTER FILE ]');
      }
    }, 160);
  };

  return (
    <section 
      id="intake-terminal"
      style={{
        position: 'relative',
        width: '100%',
        paddingTop: 'var(--space-3xl)',
        paddingBottom: 'var(--space-3xl)',
        backgroundColor: 'rgba(22, 12, 11, 0.85)',
        borderTop: '1px solid rgba(212, 139, 109, 0.12)',
        borderBottom: '1px solid rgba(212, 139, 109, 0.12)'
      }}
      className="px-responsive"
    >
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2xl)' }}>
        
        {/* Section Header */}
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 'var(--space-md)' }}>
          <div>
            <span className="font-label-caps uppercase text-secondary tracking-widest block">
              TRANSACTION MATRIX 01
            </span>
            <h2 className="font-headline-lg text-on-surface uppercase tracking-tight" style={{ marginTop: 'var(--space-2xs)' }}>
              From link to file.
            </h2>
          </div>
          <div 
            className="font-technical-data text-on-surface-variant"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-sm)',
              backgroundColor: 'var(--color-surface-container)',
              padding: '8px 14px',
              borderRadius: 'var(--radius-default)',
              border: '1px solid rgba(212, 139, 109, 0.15)'
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }} />
            <span>INGEST READY // INPUT PROTOCOL ACTIVE</span>
          </div>
        </div>

        {/* Main Forging Workspace Panel */}
        <div 
          className="forge-card"
          style={{
            padding: 'clamp(1rem, 3vw, 2rem)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-xl)',
            position: 'relative',
            backgroundColor: 'rgba(36, 25, 24, 0.95)',
            backdropFilter: 'blur(20px)'
          }}
        >
          {/* STEP 01: Platform Selection Segment Rail */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="font-technical-badge text-on-surface uppercase tracking-wider">
                STEP 01 // SELECT INGEST PROTOCOL
              </span>
              <span className="font-technical-badge text-on-surface-variant">
                AUTO-DETECT ENABLED
              </span>
            </div>

            <div className="grid-responsive-6">
              {PLATFORMS.map((p) => {
                const isActive = p.id === selectedPlatformId;
                return (
                  <button
                    key={p.id}
                    type="button"
                    className={`platform-chip ${isActive ? 'active' : ''}`}
                    onClick={() => setSelectedPlatformId(p.id)}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
                      <span 
                        className="material-symbols-outlined" 
                        style={{ 
                          fontSize: '20px', 
                          color: isActive ? 'var(--color-primary)' : 'var(--color-on-surface-variant)' 
                        }}
                      >
                        {p.icon}
                      </span>
                      <span 
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: isActive ? 'var(--color-primary)' : 'transparent',
                          transition: 'background-color 0.2s'
                        }}
                      />
                    </div>
                    <div>
                      <span className="font-headline-sm text-on-surface block" style={{ fontSize: '16px', lineHeight: 1.1 }}>
                        {p.name}
                      </span>
                      <span className="font-technical-badge text-on-surface-variant block" style={{ marginTop: '4px' }}>
                        {p.tagline}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 02: URL Intake Console Terminal */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
            <label 
              htmlFor="media-url-input"
              className="font-technical-badge text-on-surface uppercase tracking-wider"
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <span>STEP 02 // MEDIA / PLAYLIST TARGET INGESTION</span>
              <span className="text-secondary font-mono">ENCRYPTION: SECURE TLS 1.3</span>
            </label>

            <div 
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 'var(--space-xs)',
                backgroundColor: 'var(--color-surface-container-lowest)',
                padding: '6px',
                borderRadius: 'var(--radius-default)',
                border: '1px solid rgba(212, 139, 109, 0.2)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', padding: '0 12px', color: 'var(--color-primary)' }}>
                <span className="material-symbols-outlined">terminal</span>
              </div>
              <input
                id="media-url-input"
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder={platform.placeholder}
                style={{
                  flex: 1,
                  minWidth: '240px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: 'var(--color-on-surface)',
                  fontFamily: 'var(--font-technical)',
                  fontSize: '13px',
                  padding: '12px 8px',
                  outline: 'none'
                }}
              />
              <button
                type="button"
                id="analyze-button"
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="btn-hardware-secondary"
                style={{
                  padding: '10px 18px',
                  borderRadius: 'var(--radius-default)',
                  backgroundColor: 'var(--color-surface-container-high)',
                  color: 'var(--color-on-surface)'
                }}
              >
                <span>
                  {isAnalyzing ? 'Analyzing...' : analyzedSuccess ? 'Analyzed ✓' : 'Analyze URL'}
                </span>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
              </button>
            </div>
          </div>

          {/* STEP 03: Format & Codec Hardware Matrix */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="font-technical-badge text-on-surface uppercase tracking-wider">
                STEP 03 // SELECT EXPORT ENCODING MATRIX
              </span>
              <span className="font-technical-badge text-secondary">
                AUDIO & VIDEO EXTRACTORS ARMED
              </span>
            </div>

            <div className="grid-responsive-6">
              {platform.formats.map((fmt) => {
                const isActive = fmt.id === selectedFormat;
                return (
                  <button
                    key={fmt.id}
                    type="button"
                    className={`format-badge ${isActive ? 'active' : ''}`}
                    onClick={() => setSelectedFormat(fmt.id)}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="font-headline-sm text-on-surface" style={{ fontSize: '16px' }}>{fmt.label}</span>
                      <span 
                        className="font-technical-badge"
                        style={{
                          padding: '2px 6px',
                          backgroundColor: isActive ? 'var(--color-primary-container)' : 'var(--color-surface-container-lowest)',
                          color: isActive ? 'var(--color-on-primary-container)' : 'var(--color-secondary)',
                          borderRadius: 'var(--radius-sm)'
                        }}
                      >
                        {fmt.badge}
                      </span>
                    </div>
                    <span className="font-body-sm text-on-surface-variant block" style={{ marginTop: '6px' }}>
                      {fmt.desc}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 04: Active Inspection & Forging Card Preview */}
          <div 
            style={{
              backgroundColor: 'var(--color-surface-container-lowest)',
              padding: 'var(--space-lg)',
              borderRadius: 'var(--radius-default)',
              border: '1px solid rgba(212, 139, 109, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-lg)'
            }}
          >
            <style>{`
              @media (min-width: 1024px) {
                .inspection-row {
                  flex-direction: row !important;
                  align-items: center !important;
                  justify-content: space-between !important;
                }
              }
            `}</style>
            <div className="inspection-row" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              {/* Media Info & Thumbnail */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', minWidth: 0 }}>
                <div 
                  style={{
                    position: 'relative',
                    width: '96px',
                    height: '64px',
                    backgroundColor: 'var(--color-surface-container-high)',
                    borderRadius: 'var(--radius-default)',
                    overflow: 'hidden',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <span className="material-symbols-outlined text-secondary" style={{ fontSize: '32px' }}>play_circle</span>
                  <div 
                    className="font-technical-badge"
                    style={{
                      position: 'absolute',
                      bottom: '4px',
                      right: '4px',
                      backgroundColor: 'rgba(22, 12, 11, 0.9)',
                      padding: '1px 4px',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--color-on-surface)'
                    }}
                  >
                    {mediaStats.duration}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                    <span className="font-technical-badge text-secondary uppercase tracking-widest">
                      MEDIA DETECTED // STREAM READY
                    </span>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }} />
                  </div>
                  <h3 
                    className="font-headline-sm text-on-surface"
                    style={{ 
                      whiteSpace: 'nowrap', 
                      overflow: 'hidden', 
                      textOverflow: 'ellipsis', 
                      maxWidth: '540px' 
                    }}
                  >
                    {mediaTitle}
                  </h3>
                  <div 
                    className="font-technical-data text-on-surface-variant"
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      gap: '8px',
                      marginTop: '4px',
                      fontSize: '12px'
                    }}
                  >
                    <span>RES: {mediaStats.resolution}</span>
                    <span>•</span>
                    <span>FPS: {mediaStats.fps}</span>
                    <span>•</span>
                    <span>BITRATE: {mediaStats.bitrate}</span>
                    <span>•</span>
                    <span className="text-secondary">SIZE: {mediaStats.size}</span>
                  </div>
                </div>
              </div>

              {/* Action CTA & Live Forge Simulation */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                {forgeState === 'transcoding' && (
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-sm)',
                      backgroundColor: 'var(--color-surface-container)',
                      padding: '8px 14px',
                      borderRadius: 'var(--radius-default)',
                      border: '1px solid rgba(212, 139, 109, 0.2)'
                    }}
                  >
                    <svg style={{ width: '22px', height: '22px', animation: 'spinInfinite 1s linear infinite', color: 'var(--color-primary)' }} fill="none" viewBox="0 0 24 24">
                      <circle opacity="0.25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                      <path opacity="0.75" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" fill="currentColor" />
                    </svg>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span className="font-technical-badge text-on-surface uppercase">{forgePhase}</span>
                      <span className="font-technical-data text-secondary">{forgePercent}%</span>
                    </div>
                  </div>
                )}

                <button
                  type="button"
                  id="start-forge-btn"
                  onClick={handleStartForge}
                  disabled={forgeState === 'transcoding'}
                  className="btn-forge-primary"
                  style={{
                    padding: '12px 28px',
                    fontSize: '14px',
                    backgroundColor: forgeState === 'complete' ? 'var(--color-primary)' : 'var(--color-primary-container)',
                    color: forgeState === 'complete' ? 'var(--color-on-primary)' : 'var(--color-on-primary-container)',
                    boxShadow: '0 0 24px rgba(180, 42, 26, 0.45)'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>bolt</span>
                  <span>{btnLabel}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
