import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, PenTool, Code2, Sparkles } from 'lucide-react';

export default function DesignProcess() {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      id: 'discover',
      stepNum: '01',
      title: 'Discover',
      subtitle: 'User Research & Anxieties',
      desc: 'Conducting in-depth commuter interviews, transit empathy audits, and journey mapping.',
      icon: Search,
    },
    {
      id: 'define',
      stepNum: '02',
      title: 'Define',
      subtitle: 'Problem & Architecture',
      desc: 'Synthesizing quantitative safety benchmarks, user pain points, and core design principles.',
      icon: FileText,
    },
    {
      id: 'design',
      stepNum: '03',
      title: 'Design',
      subtitle: 'Figma Systems & Flows',
      desc: 'Building high-fidelity tactile design systems, accessible color hierarchies, and mobile interfaces.',
      icon: PenTool,
    },
    {
      id: 'prototype',
      stepNum: '04',
      title: 'Prototype',
      subtitle: 'Micro-Interactions & Motion',
      desc: 'Prototyping responsive flows, haptic vibration cues, and real-time interactive previews.',
      icon: Code2,
    },
    {
      id: 'refine',
      stepNum: '05',
      title: 'Refine',
      subtitle: 'Usability & Polish',
      desc: 'Testing with actual commuters, iterating on feedback, and perfecting every pixel.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="process" className="relative py-16 md:py-24 px-5 sm:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#ED6682]">
              // DESIGN PROCESS
            </span>
            <span className="w-12 h-[1px] bg-[#F4B8C4]" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-editorial font-bold text-[#3B3035] tracking-tight">
            From idea to <span className="font-editorial italic font-normal text-[#ED6682]">impact.</span>
          </h2>
        </div>

        {/* Cursive Annotation */}
        <div className="font-cursive text-xl sm:text-2xl text-[#3B3035] rotate-2 select-none self-start sm:self-end">
          Better experiences, step by step ♡
        </div>
      </div>

      {/* 5 Circular Connected Process Nodes */}
      <div className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-4 items-center justify-between">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isHovered = activeStep === idx;

            return (
              <div key={step.id} className="relative flex flex-col items-center text-center group">
                {/* Connecting arrow between nodes (desktop) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-8 left-[65%] w-[70%] items-center justify-center pointer-events-none z-0">
                    <div className="w-full border-t border-dashed border-[#F4B8C4]" />
                    <span className="text-[#ED6682] text-xs -ml-1">➔</span>
                  </div>
                )}

                {/* Circular Badge Button */}
                <motion.button
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setActiveStep(idx)}
                  onMouseLeave={() => setActiveStep(null)}
                  className={`relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isHovered
                      ? 'bg-[#ED6682] text-white shadow-[0_10px_25px_rgba(237,102,130,0.35)]'
                      : 'bg-[#FBE8E9] text-[#ED6682] border border-[#F4B8C4] shadow-sm hover:border-[#ED6682]'
                  }`}
                  aria-label={`${step.stepNum} — ${step.title}`}
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:scale-110" />
                </motion.button>

                {/* Step Label: 01 — Discover */}
                <span className="mt-4 text-xs font-bold tracking-widest text-[#3B3035] uppercase">
                  {step.stepNum} &mdash; {step.title}
                </span>

                {/* Subtitle */}
                <span className="text-[11px] text-[#8E7F84] mt-1 max-w-[150px] leading-snug">
                  {step.subtitle}
                </span>
              </div>
            );
          })}
        </div>

        {/* Lightweight Active Step Detail Card on Hover */}
        {activeStep !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-4 rounded-2xl bg-[#FFF5F7] border border-[#F4B8C4] text-center max-w-lg mx-auto shadow-sm"
          >
            <div className="text-xs font-bold text-[#ED6682] uppercase tracking-wider mb-1">
              {steps[activeStep].stepNum} &mdash; {steps[activeStep].title}: {steps[activeStep].subtitle}
            </div>
            <p className="text-xs text-[#8E7F84]">
              {steps[activeStep].desc}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
