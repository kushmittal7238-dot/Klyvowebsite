import React from 'react';
import { Crown, Check } from 'lucide-react';
import { KLYVO_CONFIG } from '../../config/klyvoWebsiteConfig';

export default function KlyvoDetails() {
  return (
    <section id="details" className="relative min-h-[calc(100vh-80px)] scroll-mt-20 snap-start flex flex-col justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10 my-auto w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            App Details & Premium Packages
          </h2>
          <p className="text-xs sm:text-sm text-purple-200/90 max-w-xl mx-auto">
            Choose the plan that fits your career goals & unlock AI capabilities.
          </p>
        </div>

        {/* 4 Tiers Grid (Spacious & Clean Auto-Adjusting Layout for Mobile/Tablet/Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {KLYVO_CONFIG.subscriptionTiers.map((t, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl p-5 sm:p-6 flex flex-col justify-between space-y-6 bg-[#070a0f] border-2 border-purple-900/50 hover:border-purple-300 hover:shadow-[0_0_20px_rgba(192,132,252,0.6)] transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              {/* Top Badge */}
              {t.badge && (
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] uppercase font-black tracking-wider border transition-transform duration-300 hover:scale-110 ${t.badgeClass}`}>
                  {t.badge}
                </div>
              )}

              <div className="space-y-4 pt-1">
                <div className="flex items-center justify-between text-[11px] font-black text-purple-400 uppercase tracking-widest">
                  <span>{t.tier}</span>
                </div>

                <div>
                  <h3 className="text-xl font-black text-white">{t.name}</h3>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-3xl font-black text-white">{t.price}</span>
                    <span className="text-xs text-purple-300 font-mono">/ {t.duration}</span>
                  </div>
                  <p className="text-xs text-purple-200/70 mt-1 min-h-[32px] leading-relaxed">
                    {t.subtitle}
                  </p>
                </div>

                {/* Included Features */}
                <div className="space-y-2 pt-3 border-t border-purple-900/40">
                  <span className="text-[10px] font-bold text-purple-300 uppercase tracking-wider block mb-1">
                    INCLUDED FEATURES:
                  </span>
                  <ul className="space-y-2 text-xs text-white">
                    {t.included.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 leading-tight">
                        <Check className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-3 rounded-2xl text-xs font-black transition-transform duration-300 hover:scale-105 ${t.ctaClass}`}
                onClick={() => alert(`Selected ${t.name} (${t.price}). Open Klyvo App to upgrade!`)}
              >
                {t.cta}
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
