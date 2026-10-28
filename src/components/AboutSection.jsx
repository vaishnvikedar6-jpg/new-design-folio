import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function AboutSection() {
  const skills = [
    'UI/UX Design',
    'Wireframing',
    'Prototyping',
    'Figma',
    'Visual Design',
    'HTML',
    'CSS',
    'JavaScript',
  ];

  const scrollToExperience = () => {
    const el = document.getElementById('experience');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="relative py-16 md:py-24 px-5 sm:px-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Tilted Polaroid Photo with Washi Tape and floral sprig using authentic photo */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, rotate: -4 }}
            whileInView={{ opacity: 1, rotate: -2 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="relative select-none"
          >
            {/* Polaroid Artwork with exact tape and floral decoration */}
            <div className="relative">
              <img
                src="./assets/about-polaroid-exact.png"
                alt="Vaishnavi Kedar — UI/UX Designer & Computer Engineering Student"
                className="w-[260px] sm:w-[290px] h-auto object-contain drop-shadow-[0_16px_36px_rgba(237,102,130,0.14)]"
              />
            </div>

            {/* Cursive Annotation: "Creative Thinker ♡" */}
            <div className="absolute -right-4 bottom-6 sm:bottom-10 font-cursive text-xl sm:text-2xl text-[#3B3035] rotate-6 bg-white/95 px-3 py-1 rounded-xl border border-[#F4B8C4] shadow-sm pointer-events-none z-20">
              Creative Thinker ♡
            </div>
          </motion.div>
        </div>

        {/* Right Column: Introduction & Skills */}
        <div className="lg:col-span-7 text-left space-y-6">
          {/* Label */}
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#ED6682]">
              // ABOUT ME
            </span>
            <span className="w-12 h-[1px] bg-[#F4B8C4]" />
          </div>

          {/* Headline requested: "An engineer by education. A designer driven by curiosity." */}
          <div className="space-y-2">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold text-[#3B3035] tracking-tight leading-tight">
              An engineer by education. <br />
              A designer driven by <span className="font-editorial italic font-normal text-[#ED6682]">curiosity.</span>
            </h3>
            <p className="text-sm sm:text-base font-normal text-[#8E7F84] pt-1 leading-relaxed max-w-xl">
              I am a UI/UX designer and Computer Engineering student at SIES GST Nerul (CGPA 9.86), passionate about combining creativity, technology, and human-centered design to craft intuitive, beautiful digital products.
            </p>
          </div>

          {/* Skills Pills */}
          <div className="pt-2">
            <div className="flex flex-wrap items-center gap-2.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1.5 rounded-full bg-white border border-[#F4B8C4] text-xs font-semibold text-[#3B3035] shadow-sm hover:border-[#ED6682] hover:text-[#ED6682] hover:bg-[#FBE8E9]/40 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* More About Me Link */}
          <div className="pt-2">
            <button
              onClick={scrollToExperience}
              className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#3B3035] hover:text-[#ED6682] transition-colors"
            >
              <span>View Milestones &amp; Learnings</span>
              <span className="w-6 h-6 rounded-full bg-[#FBE8E9] group-hover:bg-[#ED6682] flex items-center justify-center transition-all duration-300">
                <ArrowUpRight className="w-3.5 h-3.5 text-[#ED6682] group-hover:text-white transition-colors" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
