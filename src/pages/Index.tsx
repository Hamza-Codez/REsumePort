import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { useScrollAnimations } from '@/hooks/useScrollAnimations';

const Index = () => {
  const navigate = useNavigate();
  
  // Initialize scroll animations
  useScrollAnimations();

  const handleNavigateToExperiences = () => {
    navigate('/experiences');
  };

  return (
    <div className="min-h-screen bg-background animated-bg">
      <Navigation onNavigateToExperiences={handleNavigateToExperiences} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
