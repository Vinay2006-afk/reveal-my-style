import { useState, useEffect } from 'react';
import NameReveal from '@/components/NameReveal';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import WebsiteAnalyzer from '@/components/WebsiteAnalyzer';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [showNameReveal, setShowNameReveal] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);

  const handleNameRevealComplete = () => {
    setShowNameReveal(false);
    setTimeout(() => {
      setShowMainContent(true);
    }, 500);
  };

  return (
    <div className="min-h-screen">
      {showNameReveal && (
        <NameReveal 
          name="Your Name" 
          onComplete={handleNameRevealComplete}
        />
      )}
      
      {showMainContent && (
        <div className="animate-fade-in">
          <Navigation />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <WebsiteAnalyzer />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Index;
