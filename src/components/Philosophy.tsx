import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Philosophy = () => (
  <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
        <span className="terminal-text font-mono">// </span>
        Philosophy & Approach
      </h2>
      <Card className="transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 cursor-pointer group opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
        <CardContent className="pt-6 sm:pt-8">
          <pre className="text-left terminal-text font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto transition-all duration-300 group-hover:text-terminal-green">
{`// quiet dev. clear intent.

const goals = {
  validation: false,
  motivation: 'internal',
  output: 'consistent',
  privacy: 'first',
  offline: 'preferred'
};

// Building tools that respect users' time and data.
// No tracking, no noise, just solutions that work.`}</pre>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default Philosophy;
