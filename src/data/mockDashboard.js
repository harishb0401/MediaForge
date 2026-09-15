export const engineStatus = {
  version: "V2.4",
  status: "ONLINE",
  node: "EU-CENTRAL-09",
  uptime: "99.98%",
  operationalState: "OPERATIONAL"
};

export const systemMetrics = {
  totalProcessed: "12,842",
  dataProcessed: "4.82 TB",
  avgProcessTime: "08.4 SEC",
  successRate: "98.7%",
  activeJobs: "03"
};

export const activityFeed = [
  {
    id: "ACT-104",
    time: "18:42",
    title: "YouTube media processed",
    platform: "YouTube",
    status: "COMPLETED",
    details: "1080P MP4 stream • 84.2 MB"
  },
  {
    id: "ACT-103",
    time: "18:39",
    title: "Spotify playlist queued",
    platform: "Spotify",
    status: "PROCESSING",
    details: "24 tracks archive • ZIP format"
  },
  {
    id: "ACT-102",
    time: "18:31",
    title: "YouTube media processed",
    platform: "YouTube",
    status: "COMPLETED",
    details: "320k MP3 transcode • 12.8 MB"
  },
  {
    id: "ACT-101",
    time: "18:24",
    title: "Source validation failed",
    platform: "Unknown",
    status: "FAILED",
    details: "Unsupported domain protocol reject"
  },
  {
    id: "ACT-100",
    time: "18:15",
    title: "YouTube video processed",
    platform: "YouTube",
    status: "COMPLETED",
    details: "720P MP4 stream • 520.4 MB"
  }
];

export const processingQueue = [
  {
    id: "Q-01",
    index: "01",
    title: "Synthwave Cyberpunk Radio 24/7 - Chill Beats",
    platform: "YouTube",
    format: "MP4 / 1080P",
    status: "PROCESSING",
    progress: 72,
    eta: "00:14"
  },
  {
    id: "Q-02",
    index: "02",
    title: "Deep Focus Ambient Electronic Playlist 2026",
    platform: "Spotify",
    format: "ZIP Archive",
    status: "PROCESSING",
    progress: 41,
    eta: "00:38"
  },
  {
    id: "Q-03",
    index: "03",
    title: "Lo-Fi Hip Hop - Beats to Study/Relax To",
    platform: "YouTube",
    format: "MP3 / 320k",
    status: "QUEUED",
    progress: 0,
    eta: "WAITING"
  }
];

export const platformDistribution = {
  youtube: 68,
  spotify: 32
};

export const systemTelemetry = {
  cpuLoad: "42%",
  memory: "68%",
  queueCount: "03",
  throughput: "12.4 GB/S",
  latency: "0.08 SEC/MIN"
};
