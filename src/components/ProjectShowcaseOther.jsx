import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, HeartPulse, Globe2, BarChart3, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { secondaryProjects } from '../data/portfolioData';

export default function ProjectShowcaseOther() {
  const iconMap = {
    'AyushLink': HeartPulse,
    'Anuvaad — Regional AI Translator': Globe2,
    'Smart City Planning Dashboard': BarChart3,
    'CyberGuard Suite': ShieldCheck,
  };

  return (
    <div className="space-y-8 pt-4">
      {/* Project 04: AURA Feature Highlight */}
      <div className="rounded-3xl bg-gradient-to-r from-[#181622] via-[#15141D] to-[#181622] border border-[#DDA7F5]/25 p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#DDA7F5]/10 rounded-full filter blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 text-left space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#DDA7F5]/15 text-[#DDA7F5] border border-[#DDA7F5]/30 text-xs font-semibold tracking-wider uppercase">
                Project 04 · Sensory Interaction
              </span>
              <span className="px-3 py-1 rounded-full bg-[#F8C7CE]/15 text-[#F8C7CE] text-xs font-medium">
                Figma Proto Node 1:3
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-editorial font-medium text-[#F7F0E9]">
              Aura — <span className="italic text-[#DDA7F5]">Minimalist Sensory Interface</span>
            </h3>

            <p className="text-sm text-[#F7F0E9]/80 font-light leading-relaxed max-w-2xl">
              An experimental deep-dive into digital tranquility, generous spatial breathing room, and micro-haptic feedback. Built to explore how software can feel calm, intuitive, and reassuring under high sensory stimulation.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {['Sensory UI', 'Tactile Motion', 'Figma Prototyping', 'Spatial Hierarchy'].map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-[#201D2C] border border-[#DDA7F5]/20 text-[11px] text-[#F8C7CE]">
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="https://www.figma.com/proto/Ampa8dUqHSzoXFItj7pm28/Untitled?node-id=1-3&starting-point-node-id=1%3A3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#DDA7F5]/20 hover:bg-[#DDA7F5]/30 border border-[#DDA7F5]/40 text-[#F7F0E9] text-xs font-semibold tracking-wide transition-all duration-200 active:scale-95"
              >
                <span>Launch Aura Prototype</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#DDA7F5]" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-48 sm:w-56 aspect-[9/16] rounded-3xl overflow-hidden border-2 border-[#DDA7F5]/30 shadow-2xl bg-[#0F0E16]">
              <img
                src="./assets/designs/aura-safety-mobile.png"
                alt="Aura Mobile Interface"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E16]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-center">
                <span className="text-[10px] text-[#DDA7F5] font-mono uppercase tracking-wider bg-black/60 px-2 py-0.5 rounded-full border border-white/10">
                  Interactive Node
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Other Engineering & Product Endeavors */}
      <div>
        <div className="text-left mb-6">
          <div className="text-xs font-semibold text-[#F8C7CE] uppercase tracking-widest font-sans flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#FF526F]" />
            <span>Additional Selected Work &middot; Full-Stack &amp; AI</span>
          </div>
          <h4 className="text-2xl sm:text-3xl font-editorial font-medium text-[#F7F0E9] mt-1">
            Bridging Design Thinking with Engineering
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {secondaryProjects.map((proj, idx) => {
            const Icon = iconMap[proj.title] || Globe2;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-6 sm:p-7 rounded-2xl bg-[#16161D] border border-[#F8C7CE]/12 hover:border-[#FF526F]/30 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#20202B] border border-[#F8C7CE]/15 flex items-center justify-center text-[#FF526F] group-hover:scale-105 group-hover:border-[#FF526F]/40 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#1F1F2B] border border-[#F8C7CE]/10 text-[10px] font-mono text-[#F8C7CE]/80">
                      {proj.status}
                    </span>
                  </div>

                  <div>
                    <h5 className="font-editorial text-xl font-medium text-[#F7F0E9] group-hover:text-[#FF526F] transition-colors">
                      {proj.title}
                    </h5>
                    <div className="text-xs text-[#F8C7CE]/70 mt-0.5 font-medium">{proj.domain}</div>
                  </div>

                  <p className="text-xs text-[#F7F0E9]/75 leading-relaxed font-light">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-[#F8C7CE]/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded bg-[#1C1C26] text-[#F8C7CE]/80 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#20202C] hover:bg-[#FF526F] text-[#F8C7CE] hover:text-white transition-all flex items-center gap-1 text-xs"
                      aria-label={`View live ${proj.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
