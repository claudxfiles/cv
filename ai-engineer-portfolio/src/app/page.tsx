'use client';
import React from 'react';

import Navbar from '@/components/sections/navbar';
import HeroSection from '@/components/sections/hero-section';
import ProjectsSection from '@/components/sections/projects-section';
import SkillsSection from '@/components/sections/skills-section';
import Footer from '@/components/sections/footer';
import ParticleBackground from '@/components/ui/particle-background';
import FloatingIcons from '@/components/ui/floating-icons';
import ScrollToTop from '@/components/ui/scroll-to-top';
import AboutSection from '@/components/sections/about-section';
import ExperienceSection from '@/components/sections/experience-section';

export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen relative">
      {/* Background elements */}
      <ParticleBackground />
      <FloatingIcons />

      {/* Gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-900/30 to-transparent z-0 pointer-events-none" />

      {/* Content */}
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <Footer />

      {/* Utility components */}
      <ScrollToTop />
    </main>
  );
}
