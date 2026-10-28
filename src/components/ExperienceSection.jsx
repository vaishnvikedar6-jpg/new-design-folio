import React from 'react';
import { motion } from 'framer-motion';
import { Star, GraduationCap, Briefcase, Award } from 'lucide-react';

export default function ExperienceSection() {
  const milestones = [
    {
      id: 'drishti',
      icon: Star,
      title: 'Drishti UI/UX Designathon',
      subtitle: 'Top 6 finalist out of 193+ registrations.',
      badge: 'Hackathon Award',
    },
    {
      id: 'sies',
      icon: GraduationCap,
      title: 'SIES Graduate School of Technology',
      subtitle: 'B.E. Computer Engineering (2022 - 2026)',
      badge: 'Academic · CGPA 9.86',
    },
    {
      id: 'internship',
      icon: Briefcase,
      title: 'Internship Experience',
      subtitle: 'UI/UX Designer & Web Developer (2025)',
      badge: 'Industry Practice',
    },
    {
      id: 'certifications',
      icon: Award,
      title: 'Certifications',
      subtitle: 'Google UX Design, Coursera',
      badge: 'Verified Credential',
    },
  ];

  return (
    <section id="experience" className="relative py-16 md:py-24 px-5 sm:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#ED6682]">
              // EXPERIENCE &amp; ACHIEVEMENTS
            </span>
            <span className="w-12 h-[1px] bg-[#F4B8C4]" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-editorial font-bold text-[#3B3035] tracking-tight">
            Milestones &amp; <span className="font-editorial italic font-normal text-[#ED6682]">learnings.</span>
          </h2>
        </div>

        {/* Cursive Annotation */}
        <div className="font-cursive text-xl sm:text-2xl text-[#3B3035] rotate-3 select-none self-start sm:self-end">
          Still learning ♡
        </div>
      </div>

      {/* 4 Clean Horizontal Cards in a row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {milestones.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-5 rounded-2xl bg-white border border-[#F4B8C4] shadow-[0_4px_16px_rgba(237,102,130,0.05)] hover:shadow-[0_12px_28px_rgba(237,102,130,0.12)] hover:border-[#ED6682]/50 transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FBE8E9] border border-[#F4B8C4] text-[#ED6682] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-editorial font-bold text-[#3B3035] leading-snug group-hover:text-[#ED6682] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#8E7F84] mt-1.5 leading-relaxed font-normal">
                  {item.subtitle}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#F4B8C4]/40">
                <span className="text-[10px] font-semibold text-[#ED6682] tracking-wider uppercase">
                  {item.badge}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
