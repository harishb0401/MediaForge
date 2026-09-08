import React from 'react';

export default function FinalCta() {
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
        marginBottom: 'var(--space-2xl)'
      }}
      className="px-responsive"
    >
      <div 
        className="app-container"
        style={{
          background: 'linear-gradient(180deg, var(--color-surface-container) 0%, var(--color-surface-container-lowest) 100%)',
          borderRadius: 'var(--radius-default)',
          padding: 'clamp(2rem, 5vw, 4.5rem)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 24px 60px rgba(0,0,0,0.7)',
          border: '1px solid rgba(212, 139, 109, 0.25)'
        }}
      >
        {/* Brand Emblem Watermark Accent */}
        <img 
          src="/src/assets/mediaforge-emblem.svg" 
          alt="MediaForge Emblem" 
          style={{ width: '64px', height: '64px', marginBottom: 'var(--space-md)', opacity: 0.85 }} 
        />

        <span className="font-technical-badge text-primary uppercase tracking-widest">
          DEPLOY MEDIA PIPELINE
        </span>

        <h2 
          className="font-display-hero text-on-surface uppercase tracking-tight"
          style={{
            maxWidth: '900px',
            marginTop: 'var(--space-sm)',
            lineHeight: 1.12
          }}
        >
          Your media. Your format. Your workflow.
        </h2>

        <p 
          className="font-body-lg text-on-surface-variant"
          style={{
            maxWidth: '620px',
            marginTop: 'var(--space-lg)'
          }}
        >
          Join sound designers, video archivists, and audio engineers who demand loss-free speed without arbitrary platform restrictions.
        </p>

        <div style={{ marginTop: 'var(--space-2xl)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-md)' }}>
          <button
            type="button"
            onClick={scrollToTerminal}
            className="btn-forge-primary"
            style={{
              padding: '14px 36px',
              fontSize: '15px',
              boxShadow: '0 0 32px rgba(180,42,26,0.6)'
            }}
          >
            [ Start Forging Free ]
          </button>
        </div>

        <div 
          style={{
            marginTop: 'var(--space-3xl)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--space-lg)'
          }}
          className="font-technical-badge text-on-surface-variant"
        >
          <span>NO REGISTRATION NEEDED</span>
          <span>•</span>
          <span>NO BANDWIDTH CAPS</span>
          <span>•</span>
          <span>UNLIMITED LOSSLESS AUDIO</span>
        </div>
      </div>
    </section>
  );
}
