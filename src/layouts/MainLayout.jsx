import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ShaderBackground from '../components/ShaderBackground';

export default function MainLayout() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Background WebGL Shader Engine */}
      <ShaderBackground />

      {/* Main Header */}
      <Header />

      {/* Main Content Area */}
      <main style={{ flex: 1, paddingTop: '80px', width: '100%', position: 'relative' }}>
        <Outlet />
      </main>

      {/* Industrial Footer */}
      <Footer />
    </div>
  );
}
