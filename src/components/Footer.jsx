import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  FileText,
  Globe,
  ExternalLink,
} from 'lucide-react';

const LinkedInIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 0 0 1.64-1.64 1.64 1.64 0 1 0-1.64 1.64m1.4 9.74v-8.37H5.06v8.37h2.8z" />
  </svg>
);

const GitHubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
  </svg>
);

export default function Footer({ onOpenResume }) {
  const socialLinks = [
    {
      name: 'Portfolio',
      url: 'https://vaishnvikedar6-jpg.github.io/new-design-folio/',
      icon: Globe,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/vaishnavi-kedar-5a306039b/',
      icon: LinkedInIcon,
    },
    {
      name: 'Behance',
      url: 'https://www.behance.net/vaishnavikedar',
      icon: ExternalLink,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/vaishnvikedar6-jpg',
      icon: GitHubIcon,
    },
    {
      name: 'Email',
      url: 'mailto:vaishnavikedar459@gmail.com',
      icon: Mail,
    },
    {
      name: 'Resume',
      onClick: onOpenResume,
      icon: FileText,
    },
  ];

  return (
    <footer id="contact" className="relative pt-12 pb-10 px-5 sm:px-8 max-w-6xl mx-auto">
      {/* Arched Soft Blush Pink Banner */}
      <div className="relative rounded-[36px] bg-gradient-to-r from-[#FBE8E9] via-[#FFF5F7] to-[#FBE8E9] border border-[#F4B8C4] p-8 sm:p-10 lg:p-12 shadow-[0_12px_32px_rgba(237,102,130,0.08)] overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full filter blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Left: Floral sprig + Headline */}
          <div className="flex items-center gap-5 text-left">
            <div className="hidden sm:flex w-14 h-14 rounded-full bg-white/90 border border-[#F4B8C4] shadow-sm items-center justify-center text-2xl shrink-0">
              🌸
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-editorial font-bold text-[#3B3035] leading-tight">
                Let's design something that <br />
                moves <span className="font-editorial italic font-normal text-[#ED6682]">people.</span>
              </h2>
            </div>
          </div>

          {/* Right: 6 Social Profile Buttons */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              if (item.onClick) {
                return (
                  <button
                    key={item.name}
                    onClick={item.onClick}
                    className="flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/90 hover:bg-white border border-[#F4B8C4] text-[#3B3035] hover:text-[#ED6682] hover:border-[#ED6682] hover:shadow-md transition-all duration-200 group"
                  >
                    <Icon className="w-4 h-4 mb-1 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-medium tracking-tight">{item.name}</span>
                  </button>
                );
              }
              return (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/90 hover:bg-white border border-[#F4B8C4] text-[#3B3035] hover:text-[#ED6682] hover:border-[#ED6682] hover:shadow-md transition-all duration-200 group"
                >
                  <Icon className="w-4 h-4 mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-medium tracking-tight">{item.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Sub-Footer Row */}
      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8E7F84]">
        <div>
          &copy; 2026 Vaishnavi Kedar. All rights reserved.
        </div>
        <div className="flex items-center gap-1 font-cursive text-base text-[#3B3035]">
          <span>Made with</span>
          <span className="text-[#ED6682]">♡</span>
        </div>
      </div>
    </footer>
  );
}
