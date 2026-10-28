import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'work', 'process', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'process', label: 'Process' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-[#FFFAF9]/90 backdrop-blur-md border-b border-[#F4B8C4]/60 shadow-[0_4px_20px_rgba(237,102,130,0.05)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Logo: VK with delicate cherry blossom flower */}
        <button
          onClick={() => scrollTo('hero')}
          className="group flex items-center gap-2 text-left focus:outline-none transition-transform duration-200 hover:scale-105"
          aria-label="Vaishnavi Kedar Portfolio Home"
        >
          <span className="font-editorial text-2xl font-bold tracking-tight text-[#3B3035]">
            VK
          </span>
          <span className="text-xl transform group-hover:rotate-12 transition-transform duration-300">
            🌸
          </span>
        </button>

        {/* Center Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-7 lg:gap-9 text-xs sm:text-sm font-medium text-[#3B3035]/80"
          aria-label="Primary Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative py-1 text-sm transition-colors duration-200 ${
                  isActive
                    ? 'text-[#ED6682] font-semibold'
                    : 'text-[#3B3035]/75 hover:text-[#ED6682]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ED6682] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Button: Resume */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="group hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#3B3035] border border-[#F4B8C4] rounded-full hover:border-[#ED6682] hover:text-[#ED6682] hover:bg-[#FBE8E9]/40 transition-all duration-200 shadow-sm"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#ED6682]" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#3B3035] hover:bg-[#FBE8E9]/60 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#ED6682]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFAF9]/98 backdrop-blur-xl border-b border-[#F4B8C4] px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left text-base font-medium text-[#3B3035] hover:text-[#ED6682] py-1.5"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="pt-3 border-t border-[#F4B8C4]/60">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#FBE8E9] text-[#ED6682] font-semibold text-sm border border-[#F4B8C4]"
            >
              <span>View Full Resume</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
