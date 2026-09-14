import React from 'react';
import { KLYVO_CONFIG } from '../../config/klyvoWebsiteConfig';

export default function KlyvoFooter() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80;
      const viewportHeight = window.innerHeight - headerHeight;
      const elementRect = element.getBoundingClientRect();
      const elementHeight = elementRect.height;
      const targetTop = window.scrollY + elementRect.top - headerHeight - Math.max(0, (viewportHeight - elementHeight) / 2);
      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative z-10 bg-transparent text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          {/* Left Column: Brand Icon + Title + Taglines */}
          <div className="space-y-2.5">
            <div 
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <img 
                src={KLYVO_CONFIG.appIcon} 
                alt="Klyvo Icon" 
                className="w-10 h-10 rounded-2xl object-cover border border-purple-500/50 transition-transform duration-300 group-hover:scale-105" 
              />
              <span className="font-black text-2xl tracking-tight text-white">
                {KLYVO_CONFIG.appName}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-purple-200/90 font-medium">
              {KLYVO_CONFIG.subTaglineMain}
            </p>

            <div className="text-xs text-purple-200/90 font-medium">
              Designed & Developed by <span className="text-white font-extrabold">{KLYVO_CONFIG.creator}</span> ✨
            </div>
          </div>

          {/* Right Column: 5 Nav Links */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-8 text-xs sm:text-sm font-semibold text-purple-200/90">
            <button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Home</button>
            <button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors">App Features</button>
            <button onClick={() => scrollToSection('details')} className="hover:text-white transition-colors">App Details</button>
            <button onClick={() => scrollToSection('download')} className="hover:text-white transition-colors">App Download</button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors">FAQ</button>
          </div>

        </div>

        {/* Bottom Copyright Line */}
        <div className="pt-4 text-center text-xs text-purple-300/60 font-medium">
          © 2026 {KLYVO_CONFIG.appName} App. All rights reserved. Created by {KLYVO_CONFIG.creator}.
        </div>

      </div>
    </footer>
  );
}
