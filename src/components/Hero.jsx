import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import InteractiveCharacter from './InteractiveCharacter';

export default function Hero({ onOpenResume }) {
  const [isHoveringCta, setIsHoveringCta] = useState(false);

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 md:pt-32 md:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Soft ambient blush glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-[#FBE8E9]/80 via-[#F4B8C4]/25 to-transparent filter blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Small Label: UI/UX DESIGNER — 2026 with subtle accent line */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="text-xs uppercase tracking-widest font-semibold text-[#ED6682]">
                UI/UX DESIGNER &mdash; 2026
              </span>
              <span className="w-16 h-[1.5px] bg-[#F4B8C4]" />
            </motion.div>

            {/* Editorial Headline: "I design how it feels." */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-editorial font-bold leading-[1.08] text-[#3B3035] tracking-tight">
                I design <br />
                <span className="font-editorial italic font-normal text-[#ED6682] relative inline-block">
                  how it feels.
                  {/* Delicate brush underline */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-[#F4B8C4]"
                    viewBox="0 0 200 12"
                    fill="none"
                  >
                    <path
                      d="M2 9 C50 2, 120 12, 198 4"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
            </motion.div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg text-[#8E7F84] max-w-lg leading-relaxed font-normal"
            >
              Thoughtful digital experiences shaped by creativity, technology, and human connection.
            </motion.p>

            {/* Primary and Secondary CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              {/* Primary CTA: Explore My Work */}
              <button
                id="explore-work-cta"
                onClick={scrollToWork}
                onMouseEnter={() => setIsHoveringCta(true)}
                onMouseLeave={() => setIsHoveringCta(false)}
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#ED6682] hover:bg-[#d85570] text-white font-medium text-sm tracking-wide transition-all duration-300 shadow-[0_10px_25px_rgba(237,102,130,0.35)] hover:shadow-[0_14px_30px_rgba(237,102,130,0.45)] hover:scale-105 active:scale-95"
              >
                <span>Explore My Work</span>
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </span>
              </button>

              {/* Secondary CTA: Let's Connect */}
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-[#F4B8C4] hover:border-[#ED6682] hover:bg-[#FBE8E9]/40 text-[#3B3035] hover:text-[#ED6682] text-sm font-medium tracking-wide transition-all duration-200 shadow-sm active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-[#ED6682]" />
                <span>Let's Connect</span>
              </button>

              {/* Handwritten "Scroll to explore" annotation */}
              <div className="hidden sm:flex items-center gap-1.5 text-[#8E7F84] font-cursive text-xl select-none pl-2">
                <span>Scroll to explore</span>
                <span className="text-lg rotate-45 text-[#ED6682]">⤸</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Authentic Designer Portrait in Editorial Floral Setting */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <InteractiveCharacter isHoveringCta={isHoveringCta} />
          </div>
        </div>
      </div>
    </section>
  );
}
