import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldAlert,
  Navigation,
  Activity,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Layers,
  Eye,
  Info,
  PhoneCall,
  Volume2
} from 'lucide-react';

export default function ProjectShowcaseAvira({ project }) {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('screens'); // 'screens' | 'psychology' | 'workflow'
  const [sosActive, setSosActive] = useState(false);

  const screens = [
    {
      id: 'route',
      title: 'Safety-Rated Route Planning',
      badge: 'Live Safe Corridors',
      image: './assets/designs/avira-screen-route.png',
      description: 'Calculates high-visibility routes incorporating street lamp density, open commercial storefronts, and nearby police patrol kiosks.',
      stats: { score: '98%', metric: 'Verified Safe Transit Corridor', time: '22 min' },
    },
    {
      id: 'pulse',
      title: 'Proactive Avira Pulse Check-in',
      badge: 'Zero-Panic Vigilance',
      image: './assets/designs/avira-screen-pulse.png',
      description: 'An unobtrusive vibration prompts the commuter at regular intervals: "Are you feeling safe?". A single silent tap confirms safety without drawing attention.',
      stats: { countdown: '04:52', trigger: 'Silent Geofenced Timer', action: 'One-Tap Reassurance' },
    },
  ];

  const colorPrinciples = [
    {
      name: 'Coral Red (#FF526F)',
      role: 'SOS & Critical Panic Protocol',
      rationale: 'Reserved exclusively for irreversible distress actions (SOS broadcast, siren, police dispatch). By stripping red from ordinary buttons, the UI guarantees that red creates instant adrenaline focus during true emergencies while eliminating everyday anxiety fatigue.'
    },
    {
      name: 'Mint Teal (#34D399)',
      role: 'Verified Safety & Confirmation',
      rationale: 'Used for verified well-lit transit paths, positive check-ins, and automated arrival triggers. Provides immediate somatic relief and cognitive comfort to users navigating dark roads.'
    },
    {
      name: 'Deep Charcoal (#111116)',
      role: 'Night Transit Minimal Canvas',
      rationale: 'Prevents glaring screen reflections in dark transit environments, preserving commuter night vision and ensuring route scores remain readable at a rapid glance.'
    }
  ];

  return (
    <div className="relative rounded-3xl bg-gradient-to-b from-[#181820] to-[#121217] border border-[#F8C7CE]/15 p-6 sm:p-8 lg:p-12 overflow-hidden shadow-2xl">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF526F]/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#34D399]/8 rounded-full filter blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#F8C7CE]/10">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-[#FF526F]/20 text-[#FF526F] border border-[#FF526F]/30 text-xs font-semibold tracking-wider uppercase">
              Project 01 · Featured Flagship
            </span>
            <span className="px-3 py-1 rounded-full bg-[#34D399]/15 text-[#34D399] border border-[#34D399]/30 text-xs font-medium">
              ★ Top 6 Finalist — Drishti Designathon
            </span>
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-medium text-[#F7F0E9] tracking-tight">
            AVIRA — <span className="italic text-[#F8C7CE]">Transit Safety Companion</span>
          </h3>
          <p className="mt-2 text-base text-[#F7F0E9]/80 max-w-2xl font-light">
            Empowering women commuters with proactive safety-scored routing, silent vibration check-ins, and instantaneous SOS dispatch.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href={project.figmaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF526F] hover:bg-[#ff3b5c] text-white text-xs font-semibold tracking-wide transition-all duration-200 shadow-lg shadow-[#FF526F]/25 hover:shadow-xl active:scale-95"
          >
            <span>Explore Figma File</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Launchboard Mode Selector */}
      <div className="flex flex-wrap items-center gap-2 my-6">
        <button
          onClick={() => setActiveTab('screens')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
            activeTab === 'screens'
              ? 'bg-[#FF526F]/20 text-[#FF526F] border border-[#FF526F]/40 shadow-sm'
              : 'bg-[#1e1e28] text-[#F8C7CE]/70 hover:text-[#F7F0E9]'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Interactive Screen Explorer</span>
        </button>

        <button
          onClick={() => setActiveTab('psychology')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
            activeTab === 'psychology'
              ? 'bg-[#34D399]/20 text-[#34D399] border border-[#34D399]/40 shadow-sm'
              : 'bg-[#1e1e28] text-[#F8C7CE]/70 hover:text-[#F7F0E9]'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Color Psychology &amp; Rationale</span>
        </button>

        <button
          onClick={() => setActiveTab('workflow')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
            activeTab === 'workflow'
              ? 'bg-[#DDA7F5]/20 text-[#DDA7F5] border border-[#DDA7F5]/40 shadow-sm'
              : 'bg-[#1e1e28] text-[#F8C7CE]/70 hover:text-[#F7F0E9]'
          }`}
        >
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>Instant SOS Simulator</span>
        </button>
      </div>

      {/* Tab 1: Interactive Screen Explorer */}
      {activeTab === 'screens' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-2">
          {/* Left Column: Device Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[310px] aspect-[9/18.5] bg-[#0A0A0E] rounded-[48px] p-3 border-[6px] border-[#2C2C38] shadow-2xl device-shadow-coral">
              {/* iPhone Notch / Island */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-end px-2">
                <span className="w-2 h-2 rounded-full bg-[#34D399]/60" />
              </div>

              {/* Screen Display Container */}
              <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-[#111116]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeScreenIndex}
                    src={screens[activeScreenIndex].image}
                    alt={screens[activeScreenIndex].title}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Floating Micro Hotspot on phone screen */}
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-11/12 py-2 px-3 rounded-xl bg-black/80 backdrop-blur-md border border-[#F8C7CE]/20 text-center pointer-events-none z-20">
                  <span className="text-[10px] text-[#F8C7CE] font-sans font-medium">
                    {screens[activeScreenIndex].badge}
                  </span>
                </div>
              </div>

              {/* Screen Toggle Pill on Mobile Frame bottom */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 p-1 rounded-full bg-[#181820] border border-[#F8C7CE]/20 shadow-lg">
                {screens.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveScreenIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      activeScreenIndex === i ? 'bg-[#FF526F] w-6' : 'bg-[#F8C7CE]/40 hover:bg-[#F8C7CE]'
                    }`}
                    aria-label={`Show screen ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Screen Details & Interactive Controls */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-3">
              <span className="text-xs font-semibold text-[#FF526F] tracking-wider uppercase">
                Active Viewport Analysis
              </span>
              <h4 className="text-2xl sm:text-3xl font-editorial font-medium text-[#F7F0E9]">
                {screens[activeScreenIndex].title}
              </h4>
              <p className="text-sm text-[#F7F0E9]/80 leading-relaxed font-light">
                {screens[activeScreenIndex].description}
              </p>
            </div>

            {/* Screen Selector Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {screens.map((screen, idx) => (
                <button
                  key={screen.id}
                  onClick={() => setActiveScreenIndex(idx)}
                  className={`p-4 rounded-2xl text-left border transition-all duration-200 ${
                    activeScreenIndex === idx
                      ? 'bg-[#22222E] border-[#FF526F] shadow-lg shadow-[#FF526F]/10'
                      : 'bg-[#16161D] border-[#F8C7CE]/10 hover:border-[#F8C7CE]/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-mono text-[#F8C7CE]/60">0{idx + 1}</span>
                    {activeScreenIndex === idx && (
                      <span className="w-2 h-2 rounded-full bg-[#FF526F] animate-ping" />
                    )}
                  </div>
                  <div className="text-sm font-semibold text-[#F7F0E9]">{screen.title}</div>
                  <div className="text-xs text-[#F8C7CE]/70 mt-1">{screen.badge}</div>
                </button>
              ))}
            </div>

            {/* Key Design Deliverables for this screen */}
            <div className="p-5 rounded-2xl bg-[#16161D]/80 border border-[#F8C7CE]/15 space-y-3">
              <div className="text-xs font-semibold text-[#F8C7CE] uppercase tracking-wider flex items-center gap-2">
                <Info className="w-3.5 h-3.5 text-[#34D399]" />
                <span>Feature Architecture</span>
              </div>
              <ul className="text-xs text-[#F7F0E9]/80 space-y-2 list-disc list-inside">
                <li><strong className="text-[#F7F0E9]">Dynamic Crowd Heatmaps:</strong> Color-codes paths by nighttime pedestrian volume so solitary commuters are never guided down desolate alleys.</li>
                <li><strong className="text-[#F7F0E9]">Avira Pulse Geofencing:</strong> Triggers silent haptic pings on approach to low-illumination transit zones.</li>
                <li><strong className="text-[#F7F0E9]">One-Touch Safe Transit Share:</strong> Directly broadcasts encrypted real-time location to emergency contacts with zero registration required on the recipient's phone.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Color Psychology & Rationale */}
      {activeTab === 'psychology' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4 text-left">
          {colorPrinciples.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[#16161D] border border-[#F8C7CE]/15 hover:border-[#F8C7CE]/35 transition-all"
            >
              <div className="w-4 h-4 rounded-full mb-3" style={{
                backgroundColor: index === 0 ? '#FF526F' : index === 1 ? '#34D399' : '#111116',
                border: index === 2 ? '1px solid #F8C7CE' : 'none'
              }} />
              <div className="font-editorial text-lg text-[#F7F0E9] font-medium">{principle.name}</div>
              <div className="text-xs font-semibold text-[#FF526F] mt-1 mb-3">{principle.role}</div>
              <p className="text-xs text-[#F7F0E9]/80 leading-relaxed font-light">{principle.rationale}</p>
            </motion.div>
          ))}
        </div>
      )}

      {/* Tab 3: Interactive SOS Workflow Simulation */}
      {activeTab === 'workflow' && (
        <div className="p-6 sm:p-8 rounded-2xl bg-[#16161D] border border-[#FF526F]/30 text-left space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono text-[#FF526F] uppercase tracking-wider">Zero-Friction Emergency Pipeline</div>
              <h4 className="text-2xl font-editorial text-[#F7F0E9] mt-1">Instant SOS Response Protocol</h4>
              <p className="text-xs text-[#F8C7CE]/80 max-w-xl mt-1">
                During acute distress, manual dials fail. AVIRA's pipeline can be triggered by holding the volume rocker or tapping the SOS surface for 1.5 seconds.
              </p>
            </div>
            <button
              onClick={() => setSosActive(!sosActive)}
              className={`px-6 py-3 rounded-full font-semibold text-xs tracking-wider uppercase transition-all shadow-lg active:scale-95 ${
                sosActive
                  ? 'bg-[#34D399] text-[#111116] shadow-[#34D399]/40'
                  : 'bg-[#FF526F] text-white shadow-[#FF526F]/40 animate-pulse'
              }`}
            >
              {sosActive ? '✓ Reset Simulation' : '🚨 Simulate SOS Trigger'}
            </button>
          </div>

          {/* Interactive Steps Visualizer */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className={`p-4 rounded-xl border transition-all ${
              sosActive ? 'bg-[#FF526F]/15 border-[#FF526F] text-[#F7F0E9]' : 'bg-[#181820] border-[#F8C7CE]/10 text-white/60'
            }`}>
              <div className="text-xs font-mono mb-1 text-[#FF526F]">Phase 01</div>
              <div className="text-sm font-semibold text-[#F7F0E9]">Haptic Lock &amp; Siren</div>
              <div className="text-[11px] text-[#F8C7CE]/70 mt-1">Screen switches to full contrast; 110dB acoustic deterring pulse optional.</div>
            </div>

            <div className={`p-4 rounded-xl border transition-all ${
              sosActive ? 'bg-[#FF526F]/15 border-[#FF526F] text-[#F7F0E9]' : 'bg-[#181820] border-[#F8C7CE]/10 text-white/60'
            }`}>
              <div className="text-xs font-mono mb-1 text-[#FF526F]">Phase 02</div>
              <div className="text-sm font-semibold text-[#F7F0E9]">Circle Broadcast</div>
              <div className="text-[11px] text-[#F8C7CE]/70 mt-1">Encrypted live coordinate link transmitted to 3 emergency contacts.</div>
            </div>

            <div className={`p-4 rounded-xl border transition-all ${
              sosActive ? 'bg-[#FF526F]/15 border-[#FF526F] text-[#F7F0E9]' : 'bg-[#181820] border-[#F8C7CE]/10 text-white/60'
            }`}>
              <div className="text-xs font-mono mb-1 text-[#FF526F]">Phase 03</div>
              <div className="text-sm font-semibold text-[#F7F0E9]">Audio Ambience Recording</div>
              <div className="text-[11px] text-[#F8C7CE]/70 mt-1">Automated 30-second continuous ambient recording stored locally.</div>
            </div>

            <div className={`p-4 rounded-xl border transition-all ${
              sosActive ? 'bg-[#34D399]/15 border-[#34D399] text-[#F7F0E9]' : 'bg-[#181820] border-[#F8C7CE]/10 text-white/60'
            }`}>
              <div className="text-xs font-mono mb-1 text-[#34D399]">Phase 04</div>
              <div className="text-sm font-semibold text-[#F7F0E9]">Nearest Booth Dispatch</div>
              <div className="text-[11px] text-[#F8C7CE]/70 mt-1">Pins nearest 24/7 manned transit kiosk or emergency patrol location.</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
