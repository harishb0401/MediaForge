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

      {/* Header Navigation */}
      <Header />

      {/* Main Content Area */}
      <main style={{ width: '100%', paddingTop: '80px', flex: 1, position: 'relative' }}>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
