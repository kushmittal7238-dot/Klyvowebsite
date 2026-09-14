import React, { useState, useEffect } from 'react';
import { Download, Globe, Menu, X } from 'lucide-react';
import { KLYVO_CONFIG } from '../../config/klyvoWebsiteConfig';

export default function KlyvoNavbar({ onLaunchWebApp, onDownloadApk }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navTabs = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'App Features' },
    { id: 'details', label: 'App Details' },
    { id: 'download', label: 'App Download' },
    { id: 'faq', label: 'FAQ' },
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 140;

          for (let i = navTabs.length - 1; i >= 0; i--) {
            const sectionId = navTabs[i].id;
            const element = document.getElementById(sectionId);
            if (element) {
              const top = element.offsetTop;
              if (scrollPosition >= top) {
                setActiveSection(sectionId);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80;
      const viewportHeight = window.innerHeight - headerHeight;
      const elementRect = element.getBoundingClientRect();
      const elementHeight = elementRect.height;

      // Calculate position so section content is centered in screen under the fixed header
      const targetTop = window.scrollY + elementRect.top - headerHeight - Math.max(0, (viewportHeight - elementHeight) / 2);

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Real App Icon & Brand Title */}
          <div 
            onClick={() => scrollToSection('home')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img 
              src={KLYVO_CONFIG.appIcon} 
              alt="Klyvo Icon" 
              className="w-10 h-10 rounded-2xl object-cover border border-purple-500/50 transition-transform duration-300 group-hover:scale-105" 
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-2xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-200 to-white inline-block pb-1 pt-0.5 leading-normal overflow-visible">
                  {KLYVO_CONFIG.appName}
                </span>
                <span className="text-[10px] bg-purple-950/90 text-purple-300 border border-purple-800/80 px-2.5 py-0.5 rounded-full font-bold tracking-wider transition-transform duration-300 hover:scale-105 inline-block">
                  Official Website
                </span>
              </div>
              <p className="text-[11px] text-purple-300/80 font-medium tracking-wide">
                by <span className="text-white font-bold">{KLYVO_CONFIG.creator}</span> ✨
              </p>
            </div>
          </div>

          {/* Clean Desktop Navigation Bar (Classic Borderless Active Tab Highlight) */}
          <nav className="hidden md:flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider">
            {navTabs.map((tab) => {
              const isActive = activeSection === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full transition-all duration-300 hover:scale-105 inline-block ${
                    isActive
                      ? 'bg-purple-950/90 text-white font-black'
                      : 'text-purple-300/70 hover:text-white hover:bg-purple-950/40'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onLaunchWebApp}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-black hover:bg-purple-950 text-purple-200 border border-purple-800/60 transition-transform duration-300 hover:scale-105 flex items-center gap-1.5"
            >
              <Globe className="w-3.5 h-3.5 text-purple-400" />
              <span>Launch Web App</span>
            </button>

            <button
              onClick={onDownloadApk}
              className="px-4 py-2 rounded-xl text-xs font-black bg-purple-600 hover:bg-purple-500 text-white transition-transform duration-300 hover:scale-105 flex items-center gap-1.5 border border-purple-400"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download APK</span>
            </button>
          </div>

          {/* Mobile/Tablet Hamburger Toggle */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-purple-950 text-purple-200 border border-purple-800 transition-transform duration-300 hover:scale-105"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile/Tablet Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d1117]/95 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col gap-2 font-semibold text-sm text-purple-200">
            {navTabs.map((tab) => {
              const isActive = activeSection === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`text-left py-2 px-3.5 rounded-xl transition-all duration-300 hover:scale-105 ${
                    isActive
                      ? 'bg-purple-950/90 text-white font-black'
                      : 'text-purple-200/80 hover:bg-purple-950/40'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onDownloadApk(); }}
              className="w-full py-2.5 rounded-xl text-xs font-black bg-purple-600 text-white flex items-center justify-center gap-1.5 border border-purple-400 transition-transform duration-300 hover:scale-105"
            >
              <Download className="w-4 h-4" /> Direct APK Download
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onLaunchWebApp(); }}
              className="w-full py-2.5 rounded-xl text-xs font-bold bg-black text-purple-200 border border-purple-800 flex items-center justify-center gap-1.5 transition-transform duration-300 hover:scale-105"
            >
              <Globe className="w-4 h-4 text-purple-400" /> Launch Web App
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
