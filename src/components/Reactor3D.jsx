import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Reactor3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || 600;
    let height = container.clientHeight || 520;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const redCoreLight = new THREE.PointLight(0xB42A1A, 5, 20);
    redCoreLight.position.set(0, 0, 2);
    scene.add(redCoreLight);

    const amberAccentLight = new THREE.PointLight(0xD48B6D, 3.5, 15);
    amberAccentLight.position.set(3, 3, 4);
    scene.add(amberAccentLight);

    // Main Group
    const forgeGroup = new THREE.Group();
    scene.add(forgeGroup);

    // 1. Central Prismatic Media Core (Octahedral Crystal)
    const coreGeo = new THREE.OctahedronGeometry(1.6, 1);
    const coreMat = new THREE.MeshPhongMaterial({
      color: 0x1f0b09,
      emissive: 0x5D170E,
      specular: 0xD48B6D,
      shininess: 90,
      transparent: true,
      opacity: 0.88,
      flatShading: true
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    forgeGroup.add(coreMesh);

    // Outer Wireframe Cage
    const wireGeo = new THREE.OctahedronGeometry(1.65, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xD48B6D,
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    forgeGroup.add(wireMesh);

    // 2. Dual Concentric Processing Rings
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0xB42A1A, wireframe: true, transparent: true, opacity: 0.7 });
    const ringGeo1 = new THREE.TorusGeometry(2.4, 0.025, 16, 64);
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    forgeGroup.add(ring1);

    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0xD4B6A8, wireframe: true, transparent: true, opacity: 0.5 });
    const ringGeo2 = new THREE.TorusGeometry(2.9, 0.02, 16, 72);
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = Math.PI * 0.35;
    forgeGroup.add(ring2);

    // 3. Floating Media Nodes (MP4, MP3, 4K, ZIP nodes)
    const nodeGroup = new THREE.Group();
    forgeGroup.add(nodeGroup);

    const nodeGeo = new THREE.BoxGeometry(0.35, 0.35, 0.35);
    const nodeMat = new THREE.MeshPhongMaterial({
      color: 0xD48B6D,
      emissive: 0x7A1E12,
      shininess: 100
    });

    const nodes = [];
    const numNodes = 6;
    for (let i = 0; i < numNodes; i++) {
      const mesh = new THREE.Mesh(nodeGeo, nodeMat);
      const angle = (i / numNodes) * Math.PI * 2;
      mesh.position.set(Math.cos(angle) * 3.4, Math.sin(angle) * 3.4, (Math.random() - 0.5) * 1.5);
      nodeGroup.add(mesh);
      nodes.push({ mesh, angle, speed: 0.008 + i * 0.002, radius: 3.2 + (i % 2) * 0.4 });
    }

    // 4. Data Particle Stream / Embers
    const particleCount = 240;
    const pGeometry = new THREE.BufferGeometry();
    const pPositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const r = 1.2 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;
      pPositions[i] = r * Math.cos(phi) * Math.cos(theta);
      pPositions[i+1] = r * Math.cos(phi) * Math.sin(theta);
      pPositions[i+2] = r * Math.sin(phi);
    }

    pGeometry.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    const pMaterial = new THREE.PointsMaterial({
      color: 0xD48B6D,
      size: 0.055,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(pGeometry, pMaterial);
    forgeGroup.add(particles);

    // Mouse Tracking
    let targetRotX = 0;
    let targetRotY = 0;

    const handleMouseMove = (e) => {
      const mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      const mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      targetRotY = mouseX * 0.45;
      targetRotX = mouseY * 0.35;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 600;
      const h = container.clientHeight || 520;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();
    let animId;

    function animate() {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Gentle smooth rotation + mouse parallax
      forgeGroup.rotation.y += 0.006;
      forgeGroup.rotation.x += (targetRotX - forgeGroup.rotation.x) * 0.05;
      forgeGroup.rotation.y += (targetRotY - forgeGroup.rotation.y) * 0.05;

      coreMesh.rotation.y = -t * 0.25;
      coreMesh.rotation.x = t * 0.15;
      wireMesh.rotation.y = -t * 0.25;
      wireMesh.rotation.x = t * 0.15;

      ring1.rotation.z = t * 0.3;
      ring1.rotation.x = Math.sin(t * 0.5) * 0.3;

      ring2.rotation.y = -t * 0.25;
      ring2.rotation.z = Math.cos(t * 0.4) * 0.4;

      // Orbiting nodes
      nodes.forEach((n, idx) => {
        n.angle += n.speed;
        n.mesh.position.x = Math.cos(n.angle) * n.radius;
        n.mesh.position.y = Math.sin(n.angle) * (n.radius * 0.85);
        n.mesh.position.z = Math.sin(t * 1.5 + idx) * 0.8;
        n.mesh.rotation.x += 0.02;
        n.mesh.rotation.y += 0.03;
      });

      // Pulse core light
      redCoreLight.intensity = 4.5 + Math.sin(t * 3.0) * 1.2;

      // Particle flutter
      const pos = pGeometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        pos[i * 3 + 1] += 0.003;
        if (pos[i * 3 + 1] > 3.5) {
          pos[i * 3 + 1] = -3.5;
        }
      }
      pGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '520px', overflow: 'hidden' }}>
      <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }} />

      {/* Floating Precision Telemetry Badges */}
      <div 
        style={{
          position: 'absolute',
          top: '1.5rem',
          left: '1.5rem',
          padding: '0.35rem 0.75rem',
          backgroundColor: 'rgba(40, 29, 28, 0.85)',
          backdropFilter: 'blur(12px)',
          borderRadius: 'var(--radius-default)',
          border: '1px solid rgba(212, 139, 109, 0.2)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          boxShadow: '0 4px 16px rgba(0,0,0,0.5)',
          animation: 'pulseGlow 2.5s infinite'
        }}
      >
        <span className="material-symbols-outlined text-primary" style={{ fontSize: '15px' }}>videocam</span>
        <span className="font-technical-badge text-on-surface uppercase">4K LOSSLESS [60FPS AV1]</span>
      </div>

      <div 
        style={{
          position: 'absolute',
          top: '5rem',
          right: '1.5rem',
          padding: '0.35rem 0.75rem',
          backgroundColor: 'rgba(40, 29, 28, 0.85)',
          backdropFilter: 'blur(12px)',
          borderRadius: 'var(--radius-default)',
          border: '1px solid rgba(212, 139, 109, 0.2)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          boxShadow: '0 4px 16px rgba(0,0,0,0.5)'
        }}
      >
        <span className="material-symbols-outlined text-secondary" style={{ fontSize: '15px' }}>equalizer</span>
        <span className="font-technical-badge text-on-surface uppercase">AUDIO MASTER [FLAC 24-BIT]</span>
      </div>

      <div 
        style={{
          position: 'absolute',
          bottom: '5rem',
          left: '1.5rem',
          padding: '0.35rem 0.75rem',
          backgroundColor: 'rgba(40, 29, 28, 0.85)',
          backdropFilter: 'blur(12px)',
          borderRadius: 'var(--radius-default)',
          border: '1px solid rgba(212, 139, 109, 0.2)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          boxShadow: '0 4px 16px rgba(0,0,0,0.5)'
        }}
      >
        <span className="material-symbols-outlined text-tertiary" style={{ fontSize: '15px' }}>folder_zip</span>
        <span className="font-technical-badge text-on-surface uppercase">PLAYLIST ARCHIVE [ZIP ENGINE]</span>
      </div>

      <div 
        style={{
          position: 'absolute',
          bottom: '1.5rem',
          right: '1.5rem',
          padding: '0.35rem 0.75rem',
          backgroundColor: 'rgba(51, 39, 39, 0.9)',
          backdropFilter: 'blur(12px)',
          borderRadius: 'var(--radius-default)',
          border: '1px solid rgba(180, 42, 26, 0.4)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          boxShadow: '0 4px 16px rgba(180,42,26,0.3)'
        }}
      >
        <span className="animate-ping-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }}></span>
        <span className="font-technical-badge text-primary uppercase">ZERO-LATENCY TRANSCODE</span>
      </div>

      {/* Brand Emblem Micro Overlay */}
      <div 
        style={{
          position: 'absolute',
          bottom: '1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          opacity: 0.6,
          transition: 'opacity 0.2s',
          cursor: 'default'
        }}
      >
        <img alt="MediaForge Emblem" src="/src/assets/mediaforge-emblem.svg" style={{ width: '16px', height: '16px' }} />
        <span className="font-technical-badge text-outline">MEDIAFORGE INDUSTRIAL CORE</span>
      </div>
    </div>
  );
}
