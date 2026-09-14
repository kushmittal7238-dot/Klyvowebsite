import React from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  MessageSquare, 
  Tv, 
  Briefcase, 
  Bot 
} from 'lucide-react';
import { KLYVO_CONFIG } from '../../config/klyvoWebsiteConfig';

export default function KlyvoFeatures() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-purple-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-purple-300" />;
      case 'MessageSquare': return <MessageSquare className="w-6 h-6 text-purple-400" />;
      case 'Tv': return <Tv className="w-6 h-6 text-purple-300" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-purple-400" />;
      case 'Bot': return <Bot className="w-6 h-6 text-purple-300" />;
      default: return <Sparkles className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section id="features" className="relative min-h-[calc(100vh-80px)] scroll-mt-20 snap-start flex flex-col justify-center py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 my-auto w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            App Features
          </h2>
          <p className="text-sm sm:text-base text-purple-200/90 max-w-xl mx-auto leading-relaxed">
            Features built directly into Klyvo to empower students and working professionals.
          </p>
        </div>

        {/* 6 Core Feature Cards (Spacious & Screen-Filling 3x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {KLYVO_CONFIG.features.map((feat) => (
            <div
              key={feat.id}
              className="bg-[#0d1117] border-2 border-purple-900/60 hover:border-purple-300 hover:shadow-[0_0_20px_rgba(192,132,252,0.6)] rounded-3xl p-6 sm:p-7 space-y-4 transition-all duration-300 hover:scale-105 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-950/70 border border-purple-800/80 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                  {getIcon(feat.iconName)}
                </div>
                <h3 className="text-lg sm:text-xl font-black text-white leading-snug">
                  {feat.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-purple-200/85 leading-relaxed pt-1 border-t border-purple-900/30">
                {feat.shortDesc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
