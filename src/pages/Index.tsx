import { useState, useEffect, useRef } from 'react';
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

const useSectionFadeIn = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
        } else {
          entry.target.classList.remove('animate-fade-in');
          entry.target.classList.add('opacity-0');
        }
      });
    };
    const observer = new window.IntersectionObserver(handleIntersect, {
      threshold: 0.15,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return ref;
};

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
      <section ref={useSectionFadeIn()} className="opacity-0">
        <TerminalHero />
      </section>
      <section ref={useSectionFadeIn()} className="opacity-0">
        <DevStats />
      </section>
      <section ref={useSectionFadeIn()} className="opacity-0">
        <FeaturedProjects />
      </section>
      <section ref={useSectionFadeIn()} className="opacity-0">
        <TechStack />
      </section>
      <section ref={useSectionFadeIn()} className="opacity-0">
        <CurrentlyShipping />
      </section>
      <section ref={useSectionFadeIn()} className="opacity-0">
        <Timeline />
      </section>
      <section ref={useSectionFadeIn()} className="opacity-0">
        <Philosophy />
      </section>
      <section ref={useSectionFadeIn()} className="opacity-0">
        <Contact />
      </section>
      <Footer />
      <ScrollToTop showScrollTop={showScrollTop} scrollToTop={scrollToTop} />
    </div>
  );
};

export default Index;
