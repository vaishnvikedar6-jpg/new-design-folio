import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, Mail, MapPin, Award, BookOpen, Code2 } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#3B3035]/50 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[32px] bg-white border border-[#F4B8C4] shadow-2xl p-6 sm:p-8 text-left z-10 space-y-6"
        >
          {/* Header */}
          <div className="flex items-start justify-between pb-4 border-b border-[#F4B8C4]">
            <div>
              <div className="text-xs text-[#ED6682] font-mono uppercase tracking-widest font-semibold">
                Official Curriculum Vitae · 2026
              </div>
              <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-[#3B3035] mt-1">
                Vaishnavi Kedar
              </h2>
              <div className="text-xs text-[#8E7F84] mt-0.5">
                UI/UX Designer &amp; Computer Engineering Student &middot; SIES GST Nerul
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#FBE8E9] text-[#3B3035] hover:bg-[#ED6682] hover:text-white transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Contact Row */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-[#8E7F84] py-2 border-b border-[#F4B8C4]/60">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#ED6682]" /> Navi Mumbai, Maharashtra, India
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#ED6682]" /> vaishnavikedar459@gmail.com
            </span>
            <a
              href="https://www.linkedin.com/in/vaishnavi-kedar-5a306039b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#ED6682] hover:underline font-medium"
            >
              LinkedIn Profile <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Education & Academic Excellence */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#3B3035] uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-[#ED6682]" />
              <span>Education</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#FFF5F7] border border-[#F4B8C4]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="font-editorial text-base font-bold text-[#3B3035]">
                  SIES Graduate School of Technology, Nerul
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#FBE8E9] text-[#ED6682] w-fit">
                  CGPA: 9.86 / 10.0
                </span>
              </div>
              <div className="text-xs text-[#8E7F84] mt-1">
                Bachelor of Engineering in Computer Engineering &middot; 2022 - 2026
              </div>
            </div>
          </div>

          {/* Hackathon Awards */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#3B3035] uppercase tracking-wider">
              <Award className="w-4 h-4 text-[#ED6682]" />
              <span>Hackathon Milestones &amp; Honors</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#FFF5F7] border border-[#F4B8C4] space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-editorial text-sm font-bold text-[#3B3035]">
                  Drishti UI/UX Designathon 2024
                </span>
                <span className="text-xs font-bold text-[#ED6682]">Top 6 Finalist</span>
              </div>
              <p className="text-xs text-[#8E7F84] leading-relaxed">
                Selected among top 6 finalist teams out of 193+ national registrations for AVIRA — Women's Safety Transit Companion.
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#3B3035] uppercase tracking-wider">
              <Code2 className="w-4 h-4 text-[#ED6682]" />
              <span>Professional Experience</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#FFF5F7] border border-[#F4B8C4] space-y-1">
              <div className="flex justify-between items-center">
                <span className="font-editorial text-sm font-bold text-[#3B3035]">
                  Oasis Infobyte &mdash; Web Development &amp; UI/UX Intern
                </span>
                <span className="text-xs text-[#8E7F84]">2025</span>
              </div>
              <p className="text-xs text-[#8E7F84]">
                Engineered interactive frontend components and designed human-centered UI mockups for tactile web applications.
              </p>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#F4B8C4]">
            <a
              href="mailto:vaishnavikedar459@gmail.com?subject=Portfolio%20Inquiry%20-%20UI/UX%20Designer"
              className="px-5 py-2.5 rounded-full bg-[#ED6682] text-white text-xs font-semibold hover:bg-[#d85570] transition-all shadow-md"
            >
              Get In Touch &rarr;
            </a>

            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F4B8C4] text-xs font-medium text-[#3B3035] hover:bg-[#FBE8E9] transition-all"
            >
              <Download className="w-3.5 h-3.5 text-[#ED6682]" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
