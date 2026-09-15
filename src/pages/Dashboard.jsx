import React from 'react';
import {
  engineStatus,
  systemMetrics,
  activityFeed,
  processingQueue,
  platformDistribution,
  systemTelemetry
} from '../data/mockDashboard';
import EngineStatusPanel from '../components/dashboard/EngineStatusPanel';
import DashboardMetrics from '../components/dashboard/DashboardMetrics';
import ProcessingQueue from '../components/dashboard/ProcessingQueue';
import ActivityFeed from '../components/dashboard/ActivityFeed';
import PlatformDistribution from '../components/dashboard/PlatformDistribution';
import TelemetryPanel from '../components/dashboard/TelemetryPanel';

export default function Dashboard() {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '80px', minHeight: '100vh' }}>
      <div className="px-grid-margin max-w-container">
        {/* Page Header */}
        <div style={{ marginBottom: 'var(--space-lg)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-xs)' }}>
            <span className="font-technical-badge uppercase text-secondary" style={{ letterSpacing: '0.1em' }}>
              06 // ENGINE CONTROL
            </span>
            <span style={{ color: 'var(--outline-variant)' }}>|</span>
            <span className="font-technical-badge uppercase text-outline">NODES ACTIVE</span>
          </div>
          <h1 className="font-headline-xl text-on-surface" style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>
            DASHBOARD
          </h1>
          <p className="font-body-md text-on-surface-variant" style={{ margin: '8px 0 0 0', fontSize: '15px' }}>
            ENGINE TELEMETRY // MEDIA PROCESSING OVERVIEW
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
          {/* Prominent Engine Status Panel */}
          <EngineStatusPanel engine={engineStatus} />

          {/* Core System Metrics Grid */}
          <DashboardMetrics metrics={systemMetrics} />

          {/* Grid Section: Queue & Platform Share */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-lg)' }}>
            <ProcessingQueue queue={processingQueue} />
            <PlatformDistribution distribution={platformDistribution} />
          </div>

          {/* Activity Feed Section */}
          <ActivityFeed activities={activityFeed} />

          {/* System Hardware Telemetry Panel */}
          <TelemetryPanel telemetry={systemTelemetry} />
        </div>
      </div>
    </div>
  );
}
