import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ExternalLink, ShieldCheck, Moon, Wind } from 'lucide-react';

export default function ProjectShowcaseDesignForHer({ project }) {
  const [breathingPhase, setBreathingPhase] = useState('idle'); // 'idle' | 'inhale' | 'hold' | 'exhale'

  const startBreathing = () => {
    if (breathingPhase !== 'idle') return;
    setBreathingPhase('inhale');
    setTimeout(() => {
      setBreathingPhase('hold');
      setTimeout(() => {
        setBreathingPhase('exhale');
        setTimeout(() => {
          setBreathingPhase('idle');
        }, 4000);
      }, 4000);
    }, 4000);
  };

  return (
    <div className="relative rounded-3xl bg-gradient-to-b from-[#1A1822] to-[#121117] border border-[#F8C7CE]/15 p-6 sm:p-8 lg:p-12 overflow-hidden shadow-2xl">
      {/* Soft Ethereal Glows */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#F8C7CE]/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#DDA7F5]/10 rounded-full filter blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#F8C7CE]/10">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-[#F8C7CE]/15 text-[#F8C7CE] border border-[#F8C7CE]/30 text-xs font-semibold tracking-wider uppercase">
              Project 02 · Empathetic UX
            </span>
            <span className="px-3 py-1 rounded-full bg-[#DDA7F5]/15 text-[#DDA7F5] border border-[#DDA7F5]/30 text-xs font-medium">
              Interactive Figma Prototype
            </span>
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-medium text-[#F7F0E9] tracking-tight">
            Design for Her — <span className="italic text-[#F8C7CE]">Tactile Sanctuary</span>
          </h3>
          <p className="mt-2 text-base text-[#F7F0E9]/80 max-w-2xl font-light">
            An empathetic wellness, cycle, and safety mobile experience sculpted in Figma with organic curves and soothing visual rhythm.
          </p>
        </div>

        {/* Action Button */}
        <div>
          <a
            href={project.figmaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F8C7CE]/15 hover:bg-[#F8C7CE]/25 border border-[#F8C7CE]/30 text-[#F8C7CE] hover:text-[#F7F0E9] text-xs font-semibold tracking-wide transition-all duration-200 shadow-md active:scale-95"
          >
            <span>Launch Figma Prototype</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Exhibition Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8">
        {/* Left Column: Interactive Somatic Grounding & Insights */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <div className="space-y-3">
            <span className="text-xs font-semibold text-[#DDA7F5] uppercase tracking-wider">
              Emotional Micro-Architecture
            </span>
            <h4 className="text-2xl sm:text-3xl font-editorial font-medium text-[#F7F0E9]">
              Gentle by Nature. Resilient by Design.
            </h4>
            <p className="text-sm text-[#F7F0E9]/80 leading-relaxed font-light">
              Digital health products too often lean on harsh medical grids. Design for Her employs soft tactile blush surfaces, natural curves, and restorative micro-interactions to ease cognitive tension and somatic anxiety.
            </p>
          </div>

          {/* Interactive Breathing Rhythm Widget */}
          <div className="p-6 rounded-2xl bg-[#16151E] border border-[#F8C7CE]/20 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-medium text-[#F8C7CE]">
                <Wind className="w-4 h-4 text-[#DDA7F5]" />
                <span>Tactile Grounding Simulator (5-4-3-2-1 Rhythm)</span>
              </div>
              <span className="text-[11px] text-[#F8C7CE]/60 font-mono">Micro-Interaction</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-2">
              <div className="relative w-28 h-28 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale:
                      breathingPhase === 'inhale'
                        ? 1.3
                        : breathingPhase === 'hold'
                        ? 1.3
                        : breathingPhase === 'exhale'
                        ? 0.85
                        : 1,
                    opacity: breathingPhase === 'idle' ? 0.6 : 0.9,
                  }}
                  transition={{ duration: 4, ease: 'easeInOut' }}
                  className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FF526F]/30 via-[#F8C7CE]/30 to-[#DDA7F5]/30 filter blur-md"
                />
                <motion.div
                  animate={{
                    scale:
                      breathingPhase === 'inhale'
                        ? 1.25
                        : breathingPhase === 'hold'
                        ? 1.25
                        : breathingPhase === 'exhale'
                        ? 0.9
                        : 1,
                  }}
                  transition={{ duration: 4, ease: 'easeInOut' }}
                  className="relative w-20 h-20 rounded-full border-2 border-[#F8C7CE] flex items-center justify-center text-[11px] font-medium text-[#F7F0E9] text-center p-2 shadow-inner"
                >
                  {breathingPhase === 'idle' && 'Tap Start'}
                  {breathingPhase === 'inhale' && 'Inhale...'}
                  {breathingPhase === 'hold' && 'Hold...'}
                  {breathingPhase === 'exhale' && 'Release...'}
                </motion.div>
              </div>

              <div className="space-y-2 flex-1 text-center sm:text-left">
                <div className="text-xs text-[#F7F0E9]/90 font-medium">
                  Experience the app's soothing rhythm
                </div>
                <p className="text-[11px] text-[#F8C7CE]/70 leading-relaxed">
                  Calms commuter heart rate before boarding late-night public transport or entering unfamiliar transit zones.
                </p>
                <button
                  onClick={startBreathing}
                  disabled={breathingPhase !== 'idle'}
                  className="mt-1 px-4 py-1.5 rounded-full bg-[#DDA7F5]/20 hover:bg-[#DDA7F5]/30 text-[#DDA7F5] border border-[#DDA7F5]/30 text-xs font-semibold tracking-wide transition-all disabled:opacity-40"
                >
                  {breathingPhase === 'idle' ? 'Begin Calming Rhythm' : 'Pacing Breath...'}
                </button>
              </div>
            </div>
          </div>

          {/* Design Pillars */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-[#16151E] border border-[#F8C7CE]/10">
              <div className="text-xs font-semibold text-[#F7F0E9] flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-[#FF526F]" />
                <span>Private Vault</span>
              </div>
              <div className="text-[11px] text-[#F8C7CE]/70 mt-1">
                Zero cloud leakage of sensitive biological and hormonal data.
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#16151E] border border-[#F8C7CE]/10">
              <div className="text-xs font-semibold text-[#F7F0E9] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#34D399]" />
                <span>Discrete Check-in</span>
              </div>
              <div className="text-[11px] text-[#F8C7CE]/70 mt-1">
                Single swipe notifies trusted guardian without screen flash.
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Device Exhibition */}
        <div className="lg:col-span-6 relative flex items-center justify-center">
          <div className="relative w-full max-w-[320px] aspect-[9/18.5] bg-[#0A0A0E] rounded-[48px] p-3 border-[6px] border-[#2A2633] shadow-2xl device-shadow-purple">
            {/* Dynamic Island */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30" />

            {/* Screen Display Container */}
            <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-[#16151E]">
              <img
                src="./assets/designs/aura-safety-mobile.png"
                alt="Design for Her Figma Screen"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16151E]/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Annotation Tag */}
            <div className="absolute -bottom-4 -right-3 px-4 py-2 rounded-2xl bg-[#16151E]/95 border border-[#F8C7CE]/30 backdrop-blur-md shadow-xl text-left pointer-events-none z-20">
              <span className="text-[10px] text-[#DDA7F5] font-mono tracking-widest uppercase block">Figma Node 1:2</span>
              <span className="text-xs font-medium text-[#F7F0E9]">Soft Tactile Aesthetics</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
