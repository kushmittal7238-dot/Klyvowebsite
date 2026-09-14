import React from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Building2
} from 'lucide-react';
import { KLYVO_CONFIG } from '../../config/klyvoWebsiteConfig';

export default function KlyvoHome() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-80px)] scroll-mt-20 snap-start flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 my-auto">
        
        {/* Real App Icon & Title */}
        <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4">
          <div className="relative">
            <img 
              src={KLYVO_CONFIG.appIcon} 
              alt="Klyvo Official Icon" 
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl object-cover border-2 border-purple-500/60 transition-transform duration-300 hover:scale-105 cursor-pointer" 
            />
          </div>

          <div className="space-y-2">
            <span className="font-black text-5xl sm:text-7xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-200 to-white font-sans inline-block pb-3 pt-1 px-2 leading-normal overflow-visible transition-transform duration-300 hover:scale-105 cursor-default">
              {KLYVO_CONFIG.appName}
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              {KLYVO_CONFIG.tagline}
            </h1>
          </div>

          <div className="space-y-1.5 max-w-2xl mx-auto">
            <p className="text-sm sm:text-lg text-purple-200/90 leading-relaxed font-medium">
              {KLYVO_CONFIG.subTaglineMain}
            </p>
            <p className="text-xs sm:text-sm text-purple-300 font-bold tracking-wide">
              {KLYVO_CONFIG.subTaglineSub}
            </p>
          </div>
        </div>

        {/* Real App Highlights */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-purple-200 font-medium">
          <span className="flex items-center gap-1.5 bg-purple-950/60 border-2 border-purple-800/60 hover:border-purple-300 hover:shadow-[0_0_15px_rgba(192,132,252,0.6)] px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer">
            <CheckCircle2 className="w-4 h-4 text-purple-400" /> 100% Free & No Ads
          </span>
          <span className="flex items-center gap-1.5 bg-purple-950/60 border-2 border-purple-800/60 hover:border-purple-300 hover:shadow-[0_0_15px_rgba(192,132,252,0.6)] px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer">
            <ShieldCheck className="w-4 h-4 text-purple-400" /> Anonymous Confessions
          </span>
          <span className="flex items-center gap-1.5 bg-purple-950/60 border-2 border-purple-800/60 hover:border-purple-300 hover:shadow-[0_0_15px_rgba(192,132,252,0.6)] px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer">
            <Building2 className="w-4 h-4 text-purple-400" /> Verified Colleges & Companies
          </span>
        </div>

      </div>
    </section>
  );
}
