import React from 'react';

export default function MediaUrlInput({ url, onChange, onClear, detectedPlatform, isProcessing }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)', width: '100%' }}>
      <label 
        htmlFor="processing-url-input"
        className="font-technical-badge text-on-surface uppercase tracking-wider"
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <span>TARGET INGESTION URL</span>
        <span className="text-secondary font-mono" style={{ fontSize: '10px' }}>
          {detectedPlatform ? `DETECTED: ${detectedPlatform.toUpperCase()}` : 'AUTO-DETECT ENABLED'}
        </span>
      </label>

      <div 
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 'var(--space-xs)',
          backgroundColor: 'var(--surface-container-lowest)',
          padding: '8px 12px',
          borderRadius: 'var(--radius-default)',
          border: '1px solid rgba(212, 139, 109, 0.25)',
          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)',
          transition: 'border-color 150ms ease'
        }}
      >
        <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px', flexShrink: 0 }}>
          terminal
        </span>

        <input
          id="processing-url-input"
          type="text"
          value={url}
          onChange={(e) => onChange(e.target.value)}
          disabled={isProcessing}
          placeholder="PASTE MEDIA URL TO BEGIN FORGING..."
          style={{
            flex: 1,
            width: '100%',
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            color: 'var(--on-surface)',
            fontFamily: 'var(--font-technical)',
            fontSize: '13px',
            lineHeight: '20px'
          }}
        />

        {url && !isProcessing && (
          <button
            type="button"
            onClick={onClear}
            aria-label="Clear input URL"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--on-surface-variant)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2px',
              borderRadius: 'var(--radius-sm)'
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>close</span>
          </button>
        )}
      </div>

      {/* Preset Quick Test Helpers */}
      {!isProcessing && (
        <div style={{ display: 'flex', flexWrap: 'wrap', items: 'center', gap: '8px', marginTop: '4px' }}>
          <span className="font-technical-badge text-on-surface-variant">SAMPLE TARGETS:</span>
          <button
            type="button"
            onClick={() => onChange('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}
            className="font-technical-badge text-secondary hover:text-primary"
            style={{ textDecoration: 'underline' }}
          >
            YouTube Video
          </button>
          <span className="text-outline">•</span>
          <button
            type="button"
            onClick={() => onChange('https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT')}
            className="font-technical-badge text-secondary hover:text-primary"
            style={{ textDecoration: 'underline' }}
          >
            Spotify Track
          </button>
          <span className="text-outline">•</span>
          <button
            type="button"
            onClick={() => onChange('https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M')}
            className="font-technical-badge text-secondary hover:text-primary"
            style={{ textDecoration: 'underline' }}
          >
            Spotify Playlist
          </button>
          <span className="text-outline">•</span>
          <button
            type="button"
            onClick={() => onChange('https://invalid-domain-test.com/stream')}
            className="font-technical-badge text-outline hover:text-primary"
            style={{ textDecoration: 'underline' }}
          >
            Invalid Link
          </button>
        </div>
      )}
    </div>
  );
}
