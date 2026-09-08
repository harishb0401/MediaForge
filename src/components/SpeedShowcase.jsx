import React from 'react';

export default function SpeedShowcase() {
  const scrollToTerminal = () => {
    const el = document.getElementById('intake-terminal');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      style={{
        position: 'relative',
        width: '100%',
        paddingTop: 'var(--space-4xl)',
        paddingBottom: 'var(--space-4xl)',
        overflow: 'hidden'
      }}
      className="px-responsive"
    >
      <div 
        className="app-container"
        style={{
          backgroundColor: 'var(--color-surface-container-high)',
          borderRadius: 'var(--radius-default)',
          padding: 'clamp(2rem, 5vw, 4.5rem)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          position: 'relative',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
          border: '1px solid rgba(212, 139, 109, 0.2)'
        }}
      >
        {/* Backdrop Ambient Warmth */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(180, 42, 26, 0.2) 0%, transparent 50%, rgba(113, 58, 34, 0.2) 100%)',
            pointerEvents: 'none'
          }}
        />

        <span className="font-technical-badge text-secondary uppercase tracking-widest" style={{ zIndex: 10 }}>
          INDUSTRIAL TRANSCODE ARCHITECTURE
        </span>

        <h2 
          className="font-display-hero text-on-surface uppercase tracking-tight"
          style={{
            maxWidth: '800px',
            marginTop: 'var(--space-md)',
            zIndex: 10,
            lineHeight: 1.15
          }}
        >
          Media should move at your speed.
        </h2>

        <p 
          className="font-body-lg text-on-surface-variant"
          style={{
            maxWidth: '580px',
            marginTop: 'var(--space-lg)',
            zIndex: 10
          }}
        >
          "Experience the engine built for archiving the digital soundscape with zero client compromise."
        </p>

        <div style={{ marginTop: 'var(--space-2xl)', zIndex: 10 }}>
          <button
            type="button"
            onClick={scrollToTerminal}
            className="btn-forge-primary"
            style={{
              padding: '14px 32px',
              fontSize: '14px',
              boxShadow: '0 0 24px rgba(180, 42, 26, 0.6)'
            }}
          >
            [ Enter Forging Console ]
          </button>
        </div>
      </div>
    </section>
  );
}
