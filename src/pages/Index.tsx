import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import TerminalHero from '@/components/TerminalHero';
import DevStats from '@/components/DevStats';
import FeaturedProjects from '@/components/FeaturedProjects';
import TechStack from '@/components/TechStack';
import CurrentlyShipping from '@/components/CurrentlyShipping';
import Timeline from '@/components/Timeline';
import Philosophy from '@/components/Philosophy';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <TerminalHero />
      <DevStats />
      <FeaturedProjects />
      <TechStack />
      <CurrentlyShipping />
      <Timeline />
      <Philosophy />
      <Contact />
      <Footer />
      <ScrollToTop showScrollTop={showScrollTop} scrollToTop={scrollToTop} />
    </div>
  );
};

export default Index;
