import Klyvo3DBackground from './Klyvo3DBackground';
import KlyvoNavbar from './KlyvoNavbar';
import KlyvoHome from './KlyvoHome';
import KlyvoFeatures from './KlyvoFeatures';
import KlyvoDetails from './KlyvoDetails';
import KlyvoDownload from './KlyvoDownload';
import KlyvoFAQ from './KlyvoFAQ';
import KlyvoFooter from './KlyvoFooter';
import { KLYVO_CONFIG } from '../../config/klyvoWebsiteConfig';

export default function LandingPage() {
  const handleLaunchWebApp = () => {
    const targetUrl = KLYVO_CONFIG.deployment.webAppUrl || 'http://localhost:5173';
    window.open(targetUrl, '_blank');
  };

  const handleDownloadApk = () => {
    const dummyApkContent = `Klyvo App Package APK - Version ${KLYVO_CONFIG.version}\nCreated by ${KLYVO_CONFIG.creator}\nThank you for downloading Klyvo!`;
    const blob = new Blob([dummyApkContent], { type: 'application/vnd.android.package-archive' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `klyvo-app-${KLYVO_CONFIG.version}.apk`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="relative min-h-screen bg-[#0d1117] text-white font-sans selection:bg-purple-600 selection:text-white">
      {/* 3D WebGL Animated Cosmic Network Background */}
      <Klyvo3DBackground />

      {/* Header Navigation with Real App Icon & 5 Menu Links */}
      <KlyvoNavbar 
        onLaunchWebApp={handleLaunchWebApp}
        onDownloadApk={handleDownloadApk}
      />

      {/* Main Snap Scrolling Sections (Exact 1-Page fitted layout per header tab) */}
      <main className="relative z-10 w-full">
        {/* 1. Home Section */}
        <KlyvoHome />

        {/* 2. App Features Section */}
        <KlyvoFeatures />

        {/* 3. App Details Section */}
        <KlyvoDetails />

        {/* 4. App Download Section */}
        <KlyvoDownload 
          onLaunchWebApp={handleLaunchWebApp}
        />

        {/* 5. FAQ Section */}
        <KlyvoFAQ />
      </main>

      {/* Footer */}
      <KlyvoFooter 
        onLaunchWebApp={handleLaunchWebApp}
        onDownloadApk={handleDownloadApk}
      />

    </div>
  );
}
