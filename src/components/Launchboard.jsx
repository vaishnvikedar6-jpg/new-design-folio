import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Launchboard() {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <section id="work" className="relative py-16 md:py-24 px-5 sm:px-8 max-w-6xl mx-auto">
      {/* Soft ambient background bloom */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full bg-gradient-to-b from-[#FBE8E9]/50 via-[#F4B8C4]/20 to-transparent filter blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Section Header matching reference */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#ED6682]">
              // SELECTED WORK
            </span>
            <span className="w-12 h-[1px] bg-[#F4B8C4]" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-editorial font-bold text-[#3B3035] tracking-tight leading-tight">
            Designs that <br />
            make an <span className="font-editorial italic font-normal text-[#ED6682]">impact.</span>
          </h2>
        </div>

        {/* Slide Counter & Arrows */}
        <div className="flex items-center gap-3 self-start sm:self-end">
          <span className="text-xs font-mono font-medium text-[#8E7F84] tracking-widest">
            01 / 04
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setCurrentSlide(prev => Math.max(1, prev - 1))}
              className="w-8 h-8 rounded-full border border-[#F4B8C4] flex items-center justify-center text-[#3B3035] hover:bg-[#FBE8E9] hover:border-[#ED6682] transition-colors"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentSlide(prev => Math.min(4, prev + 1))}
              className="w-8 h-8 rounded-full border border-[#F4B8C4] flex items-center justify-center text-[#3B3035] hover:bg-[#FBE8E9] hover:border-[#ED6682] transition-colors"
              aria-label="Next Project"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 01. Large Featured Project Card: AVIRA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        className="relative rounded-[32px] bg-gradient-to-br from-[#FFF5F7] via-[#FFFBFB] to-[#FBE8E9]/40 border border-[#F4B8C4]/80 p-8 sm:p-10 lg:p-12 mb-8 shadow-[0_16px_40px_rgba(237,102,130,0.08)] overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="text-xs font-mono font-semibold text-[#ED6682] tracking-widest">
              01
            </div>

            <div className="space-y-2">
              <h3 className="text-3xl sm:text-4xl font-editorial font-bold text-[#3B3035] tracking-tight">
                AVIRA
              </h3>
              <p className="text-sm sm:text-base text-[#8E7F84] leading-relaxed font-normal">
                A safety-first transit companion for women commuters.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1 rounded-full bg-[#FBE8E9] text-[#ED6682] text-xs font-semibold">
                Mobile App
              </span>
              <span className="px-3.5 py-1 rounded-full bg-white border border-[#F4B8C4] text-[#3B3035]/80 text-xs font-medium">
                UI/UX Design
              </span>
            </div>

            {/* Role */}
            <div className="text-xs text-[#8E7F84] font-medium pt-1">
              <span className="text-[#3B3035] font-semibold">My Role:</span> UI/UX Designer
            </div>

            {/* View Project Link with circular arrow */}
            <div className="pt-2">
              <a
                href="https://www.figma.com/design/4z78d3naEOI0XzCR0oc4J7/AVIRA?node-id=12-790&t=FlMtIR4sxAwxxGSA-1"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#3B3035] hover:text-[#ED6682] transition-colors"
              >
                <span>View Project</span>
                <span className="w-7 h-7 rounded-full bg-[#FBE8E9] group-hover:bg-[#ED6682] group-hover:text-white flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#ED6682] group-hover:text-white transition-colors" />
                </span>
              </a>
            </div>
          </div>

          {/* Right Visual: 3-Phone Perspective Mockup Art matching reference */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-[500px] flex items-center justify-center select-none"
            >
              <img
                src="./assets/avira-reference-mockups.png"
                alt="AVIRA 3-Phone Perspective UI Mockups"
                className="w-full h-auto object-contain drop-shadow-[0_12px_32px_rgba(237,102,130,0.14)]"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Row of 3 Secondary Projects below AVIRA */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Project 02: Design for Her */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group rounded-[24px] bg-white border border-[#F4B8C4] p-6 shadow-[0_8px_24px_rgba(237,102,130,0.06)] hover:shadow-[0_16px_36px_rgba(237,102,130,0.14)] hover:border-[#ED6682]/60 transition-all duration-300 flex flex-col justify-between"
        >
          <div className="space-y-4">
            <div className="text-xs font-mono font-semibold text-[#ED6682] tracking-widest">
              02
            </div>
            <div className="space-y-1.5">
              <h4 className="text-xl font-editorial font-bold text-[#3B3035] tracking-tight">
                Design for Her
              </h4>
              <p className="text-xs text-[#8E7F84] leading-relaxed">
                A menstrual wellness platform for every woman.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-[#FBE8E9] text-[#ED6682] text-[10px] font-semibold">
                Health &amp; Wellness
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#FCF8F8] border border-[#F4B8C4] text-[#8E7F84] text-[10px] font-medium">
                UI/UX Design
              </span>
            </div>
          </div>

          {/* 3 Pink Mobile Mockups from reference */}
          <div className="my-6 relative h-[140px] flex items-center justify-center">
            <img
              src="./assets/mockup-design-for-her.png"
              alt="Design for Her Mockup"
              className="max-h-[135px] w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
            />
          </div>

          {/* Link */}
          <div className="pt-2 border-t border-[#F4B8C4]/40">
            <a
              href="https://www.figma.com/proto/Ampa8dUqHSzoXFItj7pm28/Untitled?node-id=1-3&starting-point-node-id=1%3A3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3B3035] group-hover:text-[#ED6682] transition-colors"
            >
              <span>View Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#ED6682]" />
            </a>
          </div>
        </motion.div>

        {/* Project 03: Civic Fix */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group rounded-[24px] bg-white border border-[#F4B8C4] p-6 shadow-[0_8px_24px_rgba(237,102,130,0.06)] hover:shadow-[0_16px_36px_rgba(237,102,130,0.14)] hover:border-[#ED6682]/60 transition-all duration-300 flex flex-col justify-between"
        >
          <div className="space-y-4">
            <div className="text-xs font-mono font-semibold text-[#ED6682] tracking-widest">
              03
            </div>
            <div className="space-y-1.5">
              <h4 className="text-xl font-editorial font-bold text-[#3B3035] tracking-tight">
                Civic Fix
              </h4>
              <p className="text-xs text-[#8E7F84] leading-relaxed">
                Report. Resolve. Build better communities.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-[#FBE8E9] text-[#ED6682] text-[10px] font-semibold">
                Civic Tech
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#FCF8F8] border border-[#F4B8C4] text-[#8E7F84] text-[10px] font-medium">
                UI/UX Design
              </span>
            </div>
          </div>

          {/* 3 Civic Fix Mobile Mockups from reference */}
          <div className="my-6 relative h-[140px] flex items-center justify-center">
            <img
              src="./assets/mockup-civic-fix.png"
              alt="Civic Fix Mockup"
              className="max-h-[135px] w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
            />
          </div>

          {/* Link */}
          <div className="pt-2 border-t border-[#F4B8C4]/40">
            <a
              href="https://www.figma.com/proto/7ua1fjJwYSe9NK58SMV0k3/civic_fix?node-id=29-104"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3B3035] group-hover:text-[#ED6682] transition-colors"
            >
              <span>View Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#ED6682]" />
            </a>
          </div>
        </motion.div>

        {/* Project 04: Aura */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="group rounded-[24px] bg-white border border-[#F4B8C4] p-6 shadow-[0_8px_24px_rgba(237,102,130,0.06)] hover:shadow-[0_16px_36px_rgba(237,102,130,0.14)] hover:border-[#ED6682]/60 transition-all duration-300 flex flex-col justify-between"
        >
          <div className="space-y-4">
            <div className="text-xs font-mono font-semibold text-[#ED6682] tracking-widest">
              04
            </div>
            <div className="space-y-1.5">
              <h4 className="text-xl font-editorial font-bold text-[#3B3035] tracking-tight">
                Aura
              </h4>
              <p className="text-xs text-[#8E7F84] leading-relaxed">
                A mindful space for better mental health.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-[#FBE8E9] text-[#ED6682] text-[10px] font-semibold">
                Wellness
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#FCF8F8] border border-[#F4B8C4] text-[#8E7F84] text-[10px] font-medium">
                UI/UX Design
              </span>
            </div>
          </div>

          {/* 2 Serene Pastel Mobile Mockups from reference */}
          <div className="my-6 relative h-[140px] flex items-center justify-center">
            <img
              src="./assets/mockup-aura.png"
              alt="Aura Mockup"
              className="max-h-[135px] w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
            />
          </div>

          {/* Link */}
          <div className="pt-2 border-t border-[#F4B8C4]/40">
            <a
              href="https://www.figma.com/proto/SywpLu8fhcY5Wv4sHlgL6T/Design-for-Her?node-id=1-2&starting-point-node-id=1%3A2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3B3035] group-hover:text-[#ED6682] transition-colors"
            >
              <span>View Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#ED6682]" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
