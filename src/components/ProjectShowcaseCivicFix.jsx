import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ThumbsUp, MapPin, AlertTriangle, CheckCircle2, Clock, ExternalLink, Building2, Camera } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ProjectShowcaseCivicFix({ project }) {
  const [upvotes, setUpvotes] = useState(42);
  const [hasUpvoted, setHasUpvoted] = useState(false);

  const handleUpvote = (e) => {
    if (!hasUpvoted) {
      setUpvotes((prev) => prev + 1);
      setHasUpvoted(true);
      confetti({
        particleCount: 25,
        spread: 45,
        origin: {
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight,
        },
        colors: ['#38BDF8', '#FF526F', '#F8C7CE'],
      });
    } else {
      setUpvotes((prev) => prev - 1);
      setHasUpvoted(false);
    }
  };

  const steps = [
    { title: 'Geo-Capture', detail: 'GPS Auto-Tag (Ward 14 Nerul)', icon: Camera, status: 'complete' },
    { title: 'AI Classification', detail: 'Critical Road Hazard Detected', icon: AlertTriangle, status: 'complete' },
    { title: 'PWD Assignment', detail: 'Navi Mumbai Municipal Corp', icon: Building2, status: 'active' },
    { title: 'Resolution Proof', detail: 'Post-repair photo verification', icon: CheckCircle2, status: 'upcoming' },
  ];

  return (
    <div className="relative rounded-3xl bg-gradient-to-b from-[#161A22] to-[#101217] border border-[#38BDF8]/20 p-6 sm:p-8 lg:p-12 overflow-hidden shadow-2xl">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#38BDF8]/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#FF526F]/8 rounded-full filter blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#F8C7CE]/10">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-[#38BDF8]/15 text-[#38BDF8] border border-[#38BDF8]/30 text-xs font-semibold tracking-wider uppercase">
              Project 03 · Civic Tech
            </span>
            <span className="px-3 py-1 rounded-full bg-[#F8C7CE]/15 text-[#F8C7CE] border border-[#F8C7CE]/30 text-xs font-medium">
              PixelVerse UI/UX Hackathon
            </span>
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-medium text-[#F7F0E9] tracking-tight">
            Civic Fix — <span className="italic text-[#38BDF8]">Citizen Infrastructure Pipeline</span>
          </h3>
          <p className="mt-2 text-base text-[#F7F0E9]/80 max-w-2xl font-light">
            Designed under hackathon time constraints to transform citizen frustration over potholes and infrastructure decay into verified municipal action.
          </p>
        </div>

        {/* Action Button */}
        <div>
          <a
            href={project.figmaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#38BDF8]/15 hover:bg-[#38BDF8]/25 border border-[#38BDF8]/30 text-[#38BDF8] hover:text-[#F7F0E9] text-xs font-semibold tracking-wide transition-all duration-200 shadow-md active:scale-95"
          >
            <span>Inspect Figma Prototype</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Structured Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8">
        {/* Left Column: Device Mockup */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[310px] aspect-[9/18.5] bg-[#0A0A0E] rounded-[48px] p-3 border-[6px] border-[#1D2530] shadow-2xl">
            {/* Notch */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30" />

            {/* Screen Display */}
            <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-[#10131A]">
              <img
                src="./assets/designs/civic-fix-screen.png"
                alt="Civic Fix Interface"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10131A]/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Interactive Upvote Floating Pill */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleUpvote}
              className={`absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full border shadow-xl flex items-center gap-2 text-xs font-semibold transition-all ${
                hasUpvoted
                  ? 'bg-[#38BDF8] text-[#111116] border-[#38BDF8]'
                  : 'bg-[#181E28] text-[#F7F0E9] border-[#38BDF8]/40 hover:border-[#38BDF8]'
              }`}
            >
              <ThumbsUp className={`w-3.5 h-3.5 ${hasUpvoted ? 'fill-current' : ''}`} />
              <span>{hasUpvoted ? 'Upvoted!' : 'Upvote Issue'} ({upvotes})</span>
            </motion.button>
          </div>
        </div>

        {/* Right Column: Municipal Pipeline & Information Architecture */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="space-y-3">
            <span className="text-xs font-semibold text-[#38BDF8] uppercase tracking-wider">
              Systemic Problem Solving
            </span>
            <h4 className="text-2xl sm:text-3xl font-editorial font-medium text-[#F7F0E9]">
              Accountability Engineered into Every Tap
            </h4>
            <p className="text-sm text-[#F7F0E9]/80 leading-relaxed font-light">
              Civic issue reporting apps usually fail because complaints disappear into black boxes. Civic Fix enforces visible municipal responsibility: each hazard displays the assigned government department (PWD, MSEDCL), repair SLAs, and communal upvotes.
            </p>
          </div>

          {/* Stepper Pipeline */}
          <div className="p-5 rounded-2xl bg-[#131720] border border-[#38BDF8]/20 space-y-4">
            <div className="text-xs font-semibold text-[#F7F0E9] uppercase tracking-wider">
              Issue Resolution Pipeline
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isComplete = step.status === 'complete';
                const isActive = step.status === 'active';
                return (
                  <div
                    key={i}
                    className={`p-3.5 rounded-xl border transition-all ${
                      isActive
                        ? 'bg-[#38BDF8]/10 border-[#38BDF8] text-[#F7F0E9]'
                        : isComplete
                        ? 'bg-[#161C26] border-[#38BDF8]/20 text-[#F7F0E9]/90'
                        : 'bg-[#11151C] border-white/5 text-white/50'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-[#38BDF8]' : isComplete ? 'text-[#34D399]' : 'text-white/40'}`} />
                      <span className="text-xs font-semibold">{step.title}</span>
                      {isActive && (
                        <span className="ml-auto text-[9px] px-1.5 py-0.5 rounded bg-[#38BDF8]/20 text-[#38BDF8] uppercase font-mono">
                          Live
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-[#F8C7CE]/70">{step.detail}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Design Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-4 rounded-xl bg-[#131720] border border-[#F8C7CE]/10">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#F7F0E9]">
                <MapPin className="w-3.5 h-3.5 text-[#FF526F]" />
                <span>Zero Typing Geolocation</span>
              </div>
              <p className="text-[11px] text-[#F8C7CE]/70 mt-1">
                Pinpoints local municipal ward (e.g. Ward 14 Nerul) instantly through device triangulation.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#131720] border border-[#F8C7CE]/10">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#F7F0E9]">
                <Clock className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>48-Hour Municipal SLA</span>
              </div>
              <p className="text-[11px] text-[#F8C7CE]/70 mt-1">
                Automated escalation to ward municipal commissioner if unassigned past 48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
