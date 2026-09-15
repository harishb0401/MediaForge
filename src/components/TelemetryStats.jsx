import React from 'react';

export default function TelemetryStats() {
  const stats = [
    {
      label: 'FILES TRANSCODED',
      value: '14.8M+',
      subtext: '+124k files today',
      valueColor: 'var(--color-on-surface)',
      subColor: 'var(--color-secondary)'
    },
    {
      label: 'SUCCESSFUL DOWNLOADS',
      value: '5.2M+',
      subtext: '99.98% delivery rate',
      valueColor: 'var(--color-primary)',
      subColor: 'var(--color-primary)'
    },
    {
      label: 'PLAYLISTS BUNDLED',
      value: '940K+',
      subtext: 'Avg. 22 tracks/pack',
      valueColor: 'var(--color-on-surface)',
      subColor: 'var(--color-secondary)'
    },
    {
      label: 'ENGINE UPTIME',
      value: '99.94%',
      subtext: 'Global cluster online',
      valueColor: 'var(--color-tertiary)',
      subColor: 'var(--color-outline)'
    }
  ];

  return (
    <section 
      id="telemetry-stats"
      style={{
        position: 'relative',
        width: '100%',
        paddingTop: 'var(--space-3xl)',
        paddingBottom: 'var(--space-3xl)'
      }}
      className="px-responsive"
    >
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2xl)' }}>
        <div>
          <span className="font-label-caps uppercase text-secondary tracking-widest block">
            LIVE THROUGHPUT
          </span>
          <h2 className="font-headline-lg text-on-surface uppercase tracking-tight" style={{ marginTop: 'var(--space-2xs)' }}>
            Media, in numbers.
          </h2>
        </div>

        <div className="grid-responsive-stats">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="forge-card"
              style={{
                padding: 'var(--space-xl)',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'var(--color-surface-container-high)',
                border: '1px solid rgba(212, 139, 109, 0.15)'
              }}
            >
              <span className="font-technical-badge text-on-surface-variant uppercase">
                {item.label}
              </span>
              <span 
                className="font-display-hero"
                style={{
                  color: item.valueColor,
                  marginTop: 'var(--space-xs)',
                  letterSpacing: '-0.03em',
                  fontSize: 'clamp(32px, 4vw, 56px)'
                }}
              >
                {item.value}
              </span>
              <span 
                className="font-technical-data"
                style={{
                  color: item.subColor,
                  marginTop: 'var(--space-xs)'
                }}
              >
                {item.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
