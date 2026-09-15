import React, { useState, useEffect } from 'react';
import TechnicalStatusPanel from '../components/processing/TechnicalStatusPanel';
import MediaUrlInput from '../components/processing/MediaUrlInput';
import PlatformSelector from '../components/processing/PlatformSelector';
import FormatSelector from '../components/processing/FormatSelector';
import QualitySelector from '../components/processing/QualitySelector';
import ProgressIndicator from '../components/processing/ProgressIndicator';
import ResultCard from '../components/processing/ResultCard';
import PlaylistProcessor from '../components/processing/PlaylistProcessor';
import ProcessingErrorPanel from '../components/processing/ProcessingErrorPanel';

export default function Processing() {
  const [url, setUrl] = useState('');
  const [platform, setPlatform] = useState('youtube'); // youtube | spotify
  const [format, setFormat] = useState('mp4'); // mp4 | mp3
  const [quality, setQuality] = useState('1080p'); // 1080p | 720p | 480p | 320k | 256k | 128k
  const [isPlaylist, setIsPlaylist] = useState(false);

  // State Machine: idle | analyzing | processing | completed | error
  const [appState, setAppState] = useState('idle');
  const [progressPercent, setProgressPercent] = useState(0);
  const [statusText, setStatusText] = useState('INGEST READY');
  const [resultData, setResultData] = useState(null);

  // Auto-detection logic when URL changes
  useEffect(() => {
    if (!url) {
      setIsPlaylist(false);
      return;
    }

    const lower = url.toLowerCase();
    if (lower.includes('spotify')) {
      setPlatform('spotify');
      setFormat('mp3');
      if (quality === '1080p' || quality === '720p' || quality === '480p') {
        setQuality('320k');
      }
      if (lower.includes('playlist') || lower.includes('album')) {
        setIsPlaylist(true);
      } else {
        setIsPlaylist(false);
      }
    } else if (lower.includes('youtube') || lower.includes('youtu.be')) {
      setPlatform('youtube');
      if (lower.includes('playlist')) {
        setIsPlaylist(true);
      } else {
        setIsPlaylist(false);
      }
    } else if (lower.includes('playlist')) {
      setIsPlaylist(true);
    }
  }, [url]);

  // When platform changes manually
  const handlePlatformSelect = (p) => {
    setPlatform(p);
    if (p === 'spotify') {
      setFormat('mp3');
      if (quality === '1080p' || quality === '720p' || quality === '480p') {
        setQuality('320k');
      }
    }
  };

  // When format changes manually
  const handleFormatSelect = (fmt) => {
    setFormat(fmt);
    if (fmt === 'mp4') {
      setQuality('1080p');
    } else if (fmt === 'mp3') {
      setQuality('320k');
    }
  };

  // Helper to validate URL
  const validateUrl = (inputUrl) => {
    if (!inputUrl || inputUrl.trim() === '') return false;
    const lower = inputUrl.toLowerCase();
    return lower.includes('youtube.com') || lower.includes('youtu.be') || lower.includes('spotify.com');
  };

  // Trigger main processing flow
  const handleStartForging = () => {
    // 1. Validate
    if (!validateUrl(url)) {
      setAppState('error');
      return;
    }

    // 2. Entering Analyzing State
    setAppState('analyzing');
    setStatusText('ANALYZING SOURCE STREAM...');
    setProgressPercent(0);

    setTimeout(() => {
      setStatusText('EXTRACTING MEDIA METADATA...');

      setTimeout(() => {
        // 3. Entering Processing State with stepped percentages
        setAppState('processing');
        const percentages = [0, 18, 37, 54, 72, 89, 100];
        const statusMessages = [
          'FORGING MEDIA CONTAINER...',
          'TRANSCODING STREAM BLADES...',
          'TRANSCODING STREAM BLADES...',
          'OPTIMIZING OUTPUT CODEC...',
          'OPTIMIZING OUTPUT CODEC...',
          'FINALIZING MEDIA FILE...',
          'FORGING COMPLETE!'
        ];

        let step = 0;
        const interval = setInterval(() => {
          step++;
          if (step < percentages.length) {
            setProgressPercent(percentages[step]);
            setStatusText(statusMessages[step]);
          } else {
            clearInterval(interval);
            // 4. Completed State
            const ext = format === 'mp4' ? 'mp4' : 'mp3';
            const cleanTitle = platform === 'youtube' ? 'MediaForge_YouTube_Master' : 'MediaForge_Spotify_Lossless';
            
            setResultData({
              fileName: `${cleanTitle}_${quality.toUpperCase()}.${ext}`,
              format: format,
              quality: quality,
              size: format === 'mp4' ? '184.2 MB' : '14.8 MB',
              duration: '04:32'
            });
            setAppState('completed');
          }
        }, 300);
      }, 600);
    }, 600);
  };

  // Reset to idle state
  const handleReset = () => {
    setAppState('idle');
    setProgressPercent(0);
    setStatusText('INGEST READY');
    setResultData(null);
  };

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
        className="px-grid-margin max-w-container"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '24px' }}>developer_board</span>
            <span className="font-technical-badge text-primary uppercase tracking-widest">
              CINEMATIC CONSOLE // FORGING WORKSPACE
            </span>
          </div>
          <h1 className="font-headline-lg text-on-surface uppercase tracking-tight">
            Media Transcode & Processing Console
          </h1>
          <p className="font-body-md text-on-surface-variant" style={{ maxWidth: '640px' }}>
            High-fidelity stream ingestion and hardware transcode console. Paste a YouTube or Spotify media link to analyze, transcode, and package output.
          </p>
        </div>
      </section>

      {/* Console Workspace Container */}
      <section className="px-grid-margin max-w-container" style={{ paddingBottom: 'var(--space-4xl)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
          
          {/* Instrumentation Status Panel */}
          <TechnicalStatusPanel />

          {/* Main State Machine Views */}
          {appState === 'error' ? (
            <ProcessingErrorPanel invalidUrl={url} onReset={handleReset} />
          ) : isPlaylist ? (
            <PlaylistProcessor playlistUrl={url} onReset={handleReset} />
          ) : appState === 'completed' && resultData ? (
            <ResultCard resultData={resultData} onReset={handleReset} />
          ) : (
            /* Input / Analyzing / Processing Panel */
            <div 
              className="forge-card"
              style={{
                padding: 'var(--space-xl)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-xl)',
                backgroundColor: 'rgba(36, 25, 24, 0.95)',
                backdropFilter: 'blur(20px)'
              }}
            >
              {/* Target URL Input */}
              <MediaUrlInput 
                url={url}
                onChange={setUrl}
                onClear={() => setUrl('')}
                detectedPlatform={platform}
                isProcessing={appState === 'analyzing' || appState === 'processing'}
              />

              {/* Platform Selector */}
              <PlatformSelector 
                selectedPlatform={platform}
                onSelect={handlePlatformSelect}
                isProcessing={appState === 'analyzing' || appState === 'processing'}
              />

              {/* Format & Quality Controls */}
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: 'var(--space-lg)'
                }}
              >
                <FormatSelector 
                  platform={platform}
                  selectedFormat={format}
                  onSelect={handleFormatSelect}
                  isProcessing={appState === 'analyzing' || appState === 'processing'}
                />

                <QualitySelector 
                  format={format}
                  selectedQuality={quality}
                  onSelect={setQuality}
                  isProcessing={appState === 'analyzing' || appState === 'processing'}
                />
              </div>

              {/* Progress Indicator Component during Analyzing or Processing */}
              {(appState === 'analyzing' || appState === 'processing') && (
                <ProgressIndicator stateText={statusText} percent={progressPercent} />
              )}

              {/* Action Trigger Button */}
              {appState === 'idle' && (
                <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 'var(--space-sm)' }}>
                  <button
                    type="button"
                    onClick={handleStartForging}
                    className="btn-forge-primary"
                    style={{
                      padding: '14px 36px',
                      fontSize: '15px',
                      boxShadow: '0 0 24px rgba(180, 42, 26, 0.5)'
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>bolt</span>
                    <span>[ START FORGING ]</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
