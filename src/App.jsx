import React, { useState } from 'react';
import BotanicalCanvas from './components/BotanicalCanvas';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Launchboard from './components/Launchboard';
import DesignProcess from './components/DesignProcess';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#FFFAF9] text-[#3B3035] selection:bg-[#F4B8C4] selection:text-[#ED6682] overflow-x-hidden">
      {/* Non-intrusive custom cursor */}
      <CustomCursor />

      {/* Background ambient canvas particles & mouse glow */}
      <BotanicalCanvas />

      {/* Floating Header Navigation */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Area */}
      <main className="relative z-10 flex flex-col">
        {/* 01. Hero Section (with personalized 20yo 3D character in maroon velvet top) */}
        <Hero onOpenResume={() => setResumeModalOpen(true)} />

        {/* 02. Interactive Design Launchboard (Flagship UI/UX compositions) */}
        <Launchboard />

        {/* 03. Design Process Pipeline (DISCOVER -> DEFINE -> DESIGN -> PROTOTYPE -> REFINE) */}
        <DesignProcess />

        {/* 04. Compact About Me ("An engineer by education. A designer by curiosity.") */}
        <AboutSection />

        {/* 05. Experience & Verified Hackathon Achievements (Drishti Top 6 Finalist) */}
        <ExperienceSection />
      </main>

      {/* 06. Footer ("Let's design something that moves people.") */}
      <Footer onOpenResume={() => setResumeModalOpen(true)} />

      {/* Full Curriculum Vitae & Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
