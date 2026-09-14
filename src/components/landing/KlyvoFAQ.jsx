import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { KLYVO_CONFIG } from '../../config/klyvoWebsiteConfig';

export default function KlyvoFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative scroll-mt-20 flex flex-col justify-center py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8 my-auto w-full">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            FAQ
          </h2>
          <p className="text-xs sm:text-sm text-purple-200/90 max-w-xl mx-auto">
            Klyvo app ke baare me aksar puche jaane wale sawal aur unke jawab.
          </p>
        </div>

        {/* Accordion Container (Fitted 1-Screen View) */}
        <div className="space-y-3">
          {KLYVO_CONFIG.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#070a0f] border-2 border-purple-900/50 hover:border-purple-300 hover:shadow-[0_0_15px_rgba(192,132,252,0.6)] rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-white hover:text-purple-300 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-purple-400 transition-transform duration-300 shrink-0 ml-2 ${
                      isOpen ? 'rotate-180 text-white' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs text-purple-200/90 leading-relaxed border-t border-purple-900/40 animate-in fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
