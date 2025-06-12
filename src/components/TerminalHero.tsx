import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Mail } from 'lucide-react';

const TerminalHero = () => {
  const [showCursor, setShowCursor] = useState(true);
  const [currentCommand, setCurrentCommand] = useState(0);

  const terminalCommands = [
    'whoami',
    'ls projects/',
    'cat skills.txt',
  ];

  const terminalOutputs = [
    'Humayan Al Rosid',
    'webxzet/  fakemint/  4xShell/  4xFlow/  tazko/  gpa-snap/',
    'React • TypeScript • Rust • Tauri • Astro • Vite',
  ];

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 1000);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentCommand < terminalCommands.length) {
        setCurrentCommand(prev => prev + 1);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [currentCommand]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20 pt-20">
      <div className="max-w-5xl mx-auto w-full">
        {/* Terminal Window */}
        <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-700 transform transition-all duration-700 hover:scale-[1.01] hover:shadow-3xl animate-fade-in">
          {/* Terminal Header */}
          <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2 border-b border-gray-700">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full transition-all duration-300 hover:bg-red-400 cursor-pointer"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full transition-all duration-300 hover:bg-yellow-400 cursor-pointer"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full transition-all duration-300 hover:bg-green-400 cursor-pointer"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-gray-300 text-sm font-mono">humayan@dev</span>
            </div>
          </div>
          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm leading-relaxed">
            {/* Welcome Message */}
            <div className="mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              <div className="text-terminal-green">
                Last login: {new Date().toDateString()} on console
              </div>
            </div>
            {/* Terminal Commands */}
            <div className="space-y-4">
              {terminalCommands.slice(0, currentCommand).map((command, index) => (
                <div key={index} className="space-y-2 opacity-0 animate-fade-in" style={{ animationDelay: `${1 + index * 0.3}s`, animationFillMode: 'forwards' }}>
                  <div className="flex items-center space-x-2">
                    <span className="text-terminal-green">humayan@dev</span>
                    <span className="text-white">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$</span>
                    <span className="text-white">{command}</span>
                  </div>
                  <div className="text-gray-300 ml-4 mb-2 transform transition-all duration-500 hover:translate-x-2">
                    {terminalOutputs[index]}
                  </div>
                </div>
              ))}
              {/* Current Prompt */}
              {currentCommand < terminalCommands.length && (
                <div className="flex items-center space-x-2 opacity-0 animate-fade-in" style={{ animationDelay: `${1 + currentCommand * 0.3}s`, animationFillMode: 'forwards' }}>
                  <span className="text-terminal-green">humayan@dev</span>
                  <span className="text-white">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white">$</span>
                  <span className="text-white">{terminalCommands[currentCommand]}</span>
                  {showCursor && (
                    <span className="w-2 h-5 bg-terminal-green animate-pulse inline-block"></span>
                  )}
                </div>
              )}
              {/* Final State */}
              {currentCommand >= terminalCommands.length && (
                <div className="space-y-4 opacity-0 animate-fade-in" style={{ animationDelay: '3s', animationFillMode: 'forwards' }}>
                  <div className="flex items-center space-x-2">
                    <span className="text-terminal-green">humayan@dev</span>
                    <span className="text-white">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$</span>
                    <span className="text-white">./start</span>
                  </div>
                  <div className="text-gray-300 ml-4">
                    Starting portfolio server...
                  </div>
                  <div className="text-terminal-green ml-4">
                    ✓ Server running at humayan.pages.dev
                  </div>
                  <div className="text-gray-400 ml-4">
                    Ready to showcase projects and connect with collaborators.
                  </div>
                  {/* Action Buttons */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-3 ml-4">
                    <Button className="glow-button bg-terminal-green text-black hover:bg-terminal-green/90 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-terminal-green/20" variant="outline" onClick={() => window.open('https://github.com/0x98c9', '_blank')}>
                      <Github className="w-4 h-4 mr-2" />
                      ./github
                    </Button>
                    <Button variant="outline" className="glow-button border-terminal-green text-terminal-green hover:bg-terminal-green/10 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-terminal-green/10" onClick={() => window.open('mailto:humayanalrosid3@gmail.com', '_blank')}>
                      <Mail className="w-4 h-4 mr-2" />
                      ./contact
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Brief Description Below Terminal */}
        <div className="text-center mt-8 text-gray-400 opacity-0 animate-fade-in" style={{ animationDelay: '4s', animationFillMode: 'forwards' }}>
          <p className="text-lg transform transition-all duration-500 hover:text-gray-300">
            22-year-old BCA student from India • Building privacy-first tools • Passionate about Astro and Tauri
          </p>
        </div>
      </div>
    </section>
  );
};

export default TerminalHero;
