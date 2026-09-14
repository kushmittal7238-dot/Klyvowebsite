import React from 'react';
import LandingPage from './components/landing/LandingPage';

export default function App() {
  const handleLaunchWebApp = () => {
    alert('Web App mode: Open http://localhost:5173 or deploy the app build!');
  };

  return (
    <LandingPage onLaunchWebApp={handleLaunchWebApp} />
  );
}
