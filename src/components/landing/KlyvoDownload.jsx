import React, { useState } from 'react';
import { Download, Globe, Smartphone, CheckCircle2, ShieldCheck, QrCode, ArrowRight } from 'lucide-react';
import { KLYVO_CONFIG } from '../../config/klyvoWebsiteConfig';

export default function KlyvoDownload({ onLaunchWebApp }) {
  const [downloading, setDownloading] = useState(false);
  const [showQr, setShowQr] = useState(false);

  const handleApkDownload = () => {
    setDownloading(true);
    
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

    setTimeout(() => setDownloading(false), 3000);
  };

  return (
    <section id="download" className="relative min-h-[calc(100vh-80px)] scroll-mt-20 snap-start flex flex-col justify-center py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12 my-auto w-full text-center">
        
        {/* Section Header */}
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            App Download
          </h2>
          <p className="text-sm sm:text-base text-purple-200/90 max-w-xl mx-auto leading-relaxed">
            Get Klyvo on your Android phone via direct APK or launch instant web app in your browser.
          </p>
        </div>

        {/* 2 Main Options (Spacious & Balanced 1-Screen Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto text-left">
          
          {/* Direct APK Option */}
          <div className="bg-[#0d1117] border-2 border-purple-900/60 hover:border-purple-300 hover:shadow-[0_0_20px_rgba(192,132,252,0.6)] rounded-3xl p-7 sm:p-8 space-y-6 flex flex-col justify-between transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-950 border border-purple-800 hover:border-purple-300 flex items-center justify-center text-purple-300 shrink-0 transition-all duration-300 hover:scale-110">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">Direct Android APK</h3>
                  <p className="text-xs text-purple-300/80 font-mono mt-0.5">
                    {KLYVO_CONFIG.apkSize} • Android 8.0+
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-purple-200/90 leading-relaxed">
                Direct APK download for Android phones. High-speed, secure, and ready to install.
              </p>

              <div className="space-y-2 text-xs text-purple-200 pt-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>100% Safe & Verified APK</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-purple-400" />
                  <span>Supports All Android Devices</span>
                </div>
              </div>
            </div>

            <div className="space-y-2.5 pt-2">
              <button
                onClick={handleApkDownload}
                className="w-full py-3.5 rounded-2xl text-xs sm:text-sm font-black bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center gap-2 border border-purple-400 transition-transform duration-300 hover:scale-105"
              >
                <Download className="w-4 h-4" />
                <span>{downloading ? 'Downloading APK...' : `Download APK (${KLYVO_CONFIG.apkSize})`}</span>
              </button>

              <button
                onClick={() => setShowQr(!showQr)}
                className="w-full py-2.5 rounded-xl text-xs font-bold bg-black text-purple-200 border border-purple-800 hover:border-purple-300 hover:text-white flex items-center justify-center gap-1.5 transition-all duration-300 hover:scale-105"
              >
                <QrCode className="w-4 h-4 text-purple-400" />
                <span>{showQr ? 'Hide QR Code' : 'Scan Mobile QR Code'}</span>
              </button>
            </div>
          </div>

          {/* Web App Instant Access */}
          <div className="bg-[#0d1117] border-2 border-purple-900/60 hover:border-purple-300 hover:shadow-[0_0_20px_rgba(192,132,252,0.6)] rounded-3xl p-7 sm:p-8 space-y-6 flex flex-col justify-between transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-950 border border-purple-800 hover:border-purple-300 flex items-center justify-center text-purple-300 shrink-0 transition-all duration-300 hover:scale-110">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">Instant Web App</h3>
                  <p className="text-xs text-purple-300 font-mono mt-0.5">PWA / Web Browser Mode</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-purple-200/90 leading-relaxed">
                Open Klyvo directly in Chrome, Edge, Safari, or Brave without installing anything.
              </p>

              <div className="space-y-2 text-xs text-purple-200 pt-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Works on Mobile & Laptop</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Instant Gmail 1-Click Login</span>
                </div>
              </div>
            </div>

            <button
              onClick={onLaunchWebApp}
              className="w-full py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-black hover:bg-purple-950 text-white border border-purple-800 hover:border-purple-300 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
            >
              <Globe className="w-4 h-4 text-purple-400" />
              <span>Launch Web App in Browser</span>
            </button>
          </div>

        </div>

        {/* 3-Step Quick Install Strip (Fills bottom space gracefully) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-left pt-2">
          <div className="p-3 rounded-2xl bg-[#0d1117] border-2 border-purple-900/40 hover:border-purple-300 hover:shadow-[0_0_15px_rgba(192,132,252,0.6)] flex items-center gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
            <span className="w-7 h-7 rounded-xl bg-purple-950 text-purple-300 font-black text-xs flex items-center justify-center shrink-0 border border-purple-800 transition-transform duration-300 hover:scale-110">1</span>
            <span className="text-xs font-semibold text-purple-200">Tap Download APK</span>
          </div>

          <div className="p-3 rounded-2xl bg-[#0d1117] border-2 border-purple-900/40 hover:border-purple-300 hover:shadow-[0_0_15px_rgba(192,132,252,0.6)] flex items-center gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
            <span className="w-7 h-7 rounded-xl bg-purple-950 text-purple-300 font-black text-xs flex items-center justify-center shrink-0 border border-purple-800 transition-transform duration-300 hover:scale-110">2</span>
            <span className="text-xs font-semibold text-purple-200">Allow Unknown Sources</span>
          </div>

          <div className="p-3 rounded-2xl bg-[#0d1117] border-2 border-purple-900/40 hover:border-purple-300 hover:shadow-[0_0_15px_rgba(192,132,252,0.6)] flex items-center gap-3 transition-all duration-300 hover:scale-105 cursor-pointer">
            <span className="w-7 h-7 rounded-xl bg-purple-950 text-purple-300 font-black text-xs flex items-center justify-center shrink-0 border border-purple-800 transition-transform duration-300 hover:scale-110">3</span>
            <span className="text-xs font-semibold text-purple-200">Install & Enjoy App</span>
          </div>
        </div>

        {/* QR Modal Overlay */}
        {showQr && (
          <div className="p-4 bg-[#0d1117] border border-purple-800 rounded-2xl max-w-xs mx-auto text-center space-y-2 animate-in fade-in">
            <h4 className="text-xs font-bold text-white">Scan with Mobile Camera</h4>
            <div className="p-3 bg-white rounded-xl inline-block">
              <div className="w-32 h-32 bg-[#070a0f] rounded-lg p-2 flex flex-col items-center justify-center text-white space-y-1">
                <QrCode className="w-16 h-16 text-white" />
                <span className="text-[8px] font-mono font-bold text-purple-300">klyvo.app/apk</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
