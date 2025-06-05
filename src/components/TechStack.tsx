import React from 'react';
import { Card } from '@/components/ui/card';

const techStack = [
    {
        name: 'Astro',
        icon: '/svg/astro.svg',
    },
    {
        name: 'Vite',
        icon: '/svg/vite.svg',
    },
    {
        name: 'Tailwind',
        icon: '/svg/tailwind.svg',
    },
    {
        name: 'TypeScript',
        icon: '/svg/typescript.svg',
    },
    {
        name: 'Tauri',
        icon: '/svg/tauri.svg',
    },
    {
        name: 'Rust',
        icon: '/svg/rust.svg',
    },
    {
        name: 'Next.js',
        icon: '/svg/nextjs.svg',
    },
    {
        name: 'Github',
        icon: '/svg/github.svg',
    },
    {
        name: 'Python',
        icon: '/svg/python.svg',
    },
    {
        name: 'VsCode',
        icon: '/svg/vscode.svg',
    },
];

const TechStack = () => (
  <section id="tech" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
        <span className="terminal-text font-mono">// </span>
        Tech Stack & Toolbox
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
        {techStack.map((tech, techIndex) => (
          <Card key={techIndex} className="flex flex-col items-center justify-center p-6 h-40 shadow-md border border-white bg-background/80 group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-terminal-green">
            <div className="w-14 h-14 mb-3 flex items-center justify-center bg-white rounded-lg overflow-hidden p-2">
              {tech.icon ? (
                <img src={tech.icon} alt={tech.name + ' logo'} className="w-full h-full object-contain" />
              ) : (
                <span className="text-2xl text-terminal-green opacity-60">🛠️</span>
              )}
            </div>
            <div className="text-sm sm:text-base font-semibold text-center group-hover:text-terminal-green transition-all duration-300">
              {tech.name}
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;
