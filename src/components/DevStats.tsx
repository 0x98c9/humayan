import React, { useRef, useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

function useSectionFadeIn() {
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
}

function useCountUp(target: number, inView: boolean, duration = 1200) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * (target - start) + start));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    requestAnimationFrame(step);
    // eslint-disable-next-line
  }, [inView, target, duration]);
  return count;
}

const stats = [
  { label: 'Failed Launches', value: 5 },
  { label: 'Cups of Coffee', value: 200 },
  { label: 'Distractions Avoided', value: Infinity },
  { label: 'Lines of Code', value: 50000 }
];

const DevStats = () => {
  const sectionRef = useSectionFadeIn();
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [sectionRef]);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 opacity-0">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => {
            let displayValue: string | number = stat.value;
            if (stat.value === Infinity) {
              displayValue = inView ? '∞' : '0';
            } else {
              const count = useCountUp(stat.value as number, inView, 1200 + index * 200);
              displayValue = inView ? (stat.value === 50000 ? `${count.toLocaleString()}+` : count) : '0';
            }
            return (
              <Card
                key={index}
                className="text-center transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 cursor-pointer group"
                style={{
                  animationDelay: `${0.2 * index}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <CardContent className="pt-4 sm:pt-6 pb-4 sm:pb-6">
                  <div className="text-2xl sm:text-3xl font-bold text-terminal-green transition-all duration-300 group-hover:scale-110">
                    {displayValue}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1 transition-all duration-300 group-hover:text-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DevStats;
