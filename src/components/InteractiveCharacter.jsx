import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

export default function InteractiveCharacter({ isHoveringCta }) {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Smooth springs for 3D cursor tracking
  const mouseX = useSpring(0, { stiffness: 85, damping: 22 });
  const mouseY = useSpring(0, { stiffness: 85, damping: 22 });

  const rotateY = useTransform(mouseX, [-1, 1], [-7, 7]);
  const rotateX = useTransform(mouseY, [-1, 1], [5, -5]);
  const shiftX = useTransform(mouseX, [-1, 1], [-8, 8]);
  const shiftY = useTransform(mouseY, [-1, 1], [-6, 6]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e) => {
      if (!containerRef.current || isMobile) return;
      const rect = containerRef.current.getBoundingClientRect();
      const charCenterX = rect.left + rect.width / 2;
      const charCenterY = rect.top + rect.height * 0.45;

      const normX = Math.max(-1, Math.min(1, (e.clientX - charCenterX) / (window.innerWidth * 0.5)));
      const normY = Math.max(-1, Math.min(1, (e.clientY - charCenterY) / (window.innerHeight * 0.5)));

      mouseX.set(normX);
      mouseY.set(normY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  // When hovering CTA button, tilt subtly toward the button
  useEffect(() => {
    if (isHoveringCta) {
      mouseX.set(-0.6);
      mouseY.set(0.4);
    }
  }, [isHoveringCta]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[560px] aspect-[4/3] flex items-center justify-center select-none"
      style={{ perspective: 1200 }}
    >
      {/* Soft watercolor ambient blush glow */}
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FBE8E9] via-[#F4B8C4]/35 to-transparent filter blur-3xl opacity-80 pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Authentic Designer Portrait with Smooth 3D Perspective Tilt */}
      <motion.div
        style={
          isMobile
            ? {}
            : {
                rotateX,
                rotateY,
                x: shiftX,
                y: shiftY,
                transformStyle: 'preserve-3d',
              }
        }
        className="relative w-full h-full flex items-center justify-center z-10"
      >
        <motion.div
          animate={
            isMobile
              ? { y: [0, -5, 0] }
              : {
                  y: [0, -6, 0],
                }
          }
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {/* Authentic Portrait of Vaishnavi with floral framing */}
          <img
            src="./assets/vaishnavi-reference-hero.png"
            alt="Vaishnavi Kedar — UI/UX Designer & Creative Engineer"
            className="w-full h-auto max-h-[460px] object-contain drop-shadow-[0_16px_36px_rgba(237,102,130,0.12)]"
          />

          {/* Drifting delicate pink petals */}
          <motion.div
            animate={{
              y: [0, 20, 0],
              x: [0, -10, 0],
              rotate: [0, 25, 0],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-8 left-6 text-[#ED6682] text-lg opacity-80 pointer-events-none"
          >
            🌸
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
