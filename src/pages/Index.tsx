import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Mail, Twitter, ArrowUp } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Index = () => {
  const [showCursor, setShowCursor] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [terminalText, setTerminalText] = useState('');
  const [currentCommand, setCurrentCommand] = useState(0);

  const terminalCommands = [
    'whoami',
    'ls projects/',
    'cat skills.txt',
    'echo "Building the future, one tool at a time"'
  ];

  const terminalOutputs = [
    'Humayan Al Rosid - Full Stack Developer & Tool Builder',
    'brevilo/  documed/  4xpdf/  webxzet/  budget-tracker/',
    'React • TypeScript • Rust • Tauri • Astro • AI APIs',
    'Building the future, one tool at a time'
  ];

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 1000);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(cursorInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentCommand < terminalCommands.length) {
        setCurrentCommand(prev => prev + 1);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentCommand]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const projects = [
    {
      title: "Brevilo",
      category: "AI SaaS",
      description: "AI repurposing SaaS for content creators. Built for Bolt Hackathon using OpenAI APIs.",
      stack: ["OpenAI", "React", "Supabase"],
      link: "https://brevilo.site",
      status: "live"
    },
    {
      title: "Documed",
      category: "Offline Tools",
      description: "Offline toolkit for PDF & image tools. Desktop-first, web version coming soon.",
      stack: ["Tauri", "Rust", "PDF.js"],
      link: "#",
      status: "beta"
    },
    {
      title: "4xPDF",
      category: "Desktop Apps",
      description: "Lightweight offline PDF tools built with Tauri + Rust for converting, editing, compressing.",
      stack: ["Tauri", "Rust", "TypeScript"],
      link: "#",
      status: "development"
    },
    {
      title: "WebxZet",
      category: "Web Platform",
      description: "Hub for free tools, study utilities, and productivity experiments for students.",
      stack: ["Astro", "Tailwind", "TypeScript"],
      link: "#",
      status: "planning"
    },
    {
      title: "Budget Tracker",
      category: "Frontend Utilities",
      description: "Simple CRUD app using IndexedDB & LocalStorage. Fully frontend, no backend required.",
      stack: ["React", "IndexedDB", "LocalStorage"],
      link: "#",
      status: "live"
    }
  ];

  const techStack = {
    "Frontend": ["Astro", "Vite", "React", "Tailwind", "TypeScript"],
    "Desktop": ["Tauri", "Rust"],
    "AI/Backend": ["OpenAI", "Supabase", "Whisper", "Node.js"],
    "Storage": ["IndexedDB", "LocalStorage", "Supabase"],
    "Tools": ["PDF.js", "MathJax", "Shadcn/UI", "Framer Motion"]
  };

  const currentWork = [
    { title: "Brevilo v2: Auth + Payments", status: "completed" },
    { title: "Documed Web version", status: "completed" },
    { title: "4xImage Tauri release", status: "upcoming" },
    { title: "More in-browser calculators & converters", status: "experimental" }
  ];

  const timeline = [
    {
      year: "2025",
      title: "Scaling AI Tools",
      description: "Building Brevilo v2, expanding Documed platform"
    },
    {
      year: "2024",
      title: "Rust & Desktop Focus",
      description: "Launched 4xPDF suite, mastered Tauri development"
    },
    {
      year: "2023",
      title: "Web Development Journey",
      description: "Started with React, discovered offline-first philosophy"
    }
  ];

  const stats = [
    { label: "GitHub Stars", value: "2.1k+" },
    { label: "Tools Shipped", value: "12" },
    { label: "Downloads", value: "50k+" },
    { label: "Hackathons", value: "3" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Terminal Hero Section */}
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
                <span className="text-gray-300 text-sm font-mono">terminal</span>
              </div>
            </div>
            
            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm leading-relaxed">
              {/* Welcome Message */}
              <div className="mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                <div className="text-terminal-green">
                  Last login: {new Date().toDateString()} on ttys000
                </div>
                <div className="text-gray-400 mt-2">
                  Welcome to Humayan's development environment.
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
                      <span className="text-white">cd portfolio && ./start</span>
                    </div>
                    <div className="text-gray-300 ml-4">
                      Starting portfolio server...
                    </div>
                    <div className="text-terminal-green ml-4">
                      ✓ Server running at localhost:3000
                    </div>
                    <div className="text-gray-400 ml-4">
                      Ready to showcase projects and connect with collaborators.
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-3 ml-4">
                      <Button className="glow-button bg-terminal-green text-black hover:bg-terminal-green/90 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-terminal-green/20">
                        <Github className="w-4 h-4 mr-2" />
                        ./github
                      </Button>
                      <Button variant="outline" className="glow-button border-terminal-green text-terminal-green hover:bg-terminal-green/10 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-terminal-green/10">
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
              21-year-old BCA student from India • Building privacy-first tools for students and solopreneurs
            </p>
          </div>
        </div>
      </section>

      {/* Dev Stats */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 cursor-pointer group opacity-0 animate-fade-in" style={{ animationDelay: `${0.2 * index}s`, animationFillMode: 'forwards' }}>
                <CardContent className="pt-4 sm:pt-6 pb-4 sm:pb-6">
                  <div className="text-2xl sm:text-3xl font-bold text-terminal-green transition-all duration-300 group-hover:scale-110">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1 transition-all duration-300 group-hover:text-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <span className="terminal-text font-mono">// </span>
            Featured Projects
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="h-full flex flex-col transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 cursor-pointer group opacity-0 animate-fade-in" style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }}>
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs transition-all duration-300 group-hover:scale-110">
                      {project.category}
                    </Badge>
                    <Badge 
                      variant={project.status === 'live' ? 'default' : 'secondary'}
                      className="text-xs transition-all duration-300 group-hover:scale-110"
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg sm:text-xl transition-all duration-300 group-hover:text-terminal-green">{project.title}</CardTitle>
                  <CardDescription className="text-sm transition-all duration-300 group-hover:text-foreground">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0 flex-1 flex flex-col justify-end">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.stack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs transition-all duration-300 hover:scale-110 hover:bg-primary/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    {project.link !== '#' && (
                      <Button className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg" variant="outline" size="sm">
                        <ExternalLink className="w-3 h-3 mr-2" />
                        View Project
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <span className="terminal-text font-mono">// </span>
            Tech Stack & Toolbox
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {Object.entries(techStack).map(([category, technologies], index) => (
              <Card key={category} className="transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 cursor-pointer group opacity-0 animate-fade-in" style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }}>
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-base sm:text-lg terminal-text font-mono transition-all duration-300 group-hover:text-terminal-green">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs transition-all duration-300 hover:scale-110 hover:bg-terminal-green/10 hover:border-terminal-green cursor-pointer">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Currently Shipping */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <span className="terminal-text font-mono">// </span>
            Currently Shipping
          </h2>
          
          <div className="space-y-3 sm:space-y-4">
            {currentWork.map((work, index) => (
              <div key={index} className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg bg-card/50 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:bg-card/70 cursor-pointer group opacity-0 animate-fade-in" style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }}>
                <span className="text-base sm:text-lg flex-shrink-0 transition-all duration-300 group-hover:scale-125">
                  {work.status === 'completed' ? '✅' : 
                   work.status === 'upcoming' ? '🔜' : '🧪'}
                </span>
                <span className="flex-1 text-sm sm:text-base transition-all duration-300 group-hover:text-terminal-green">{work.title}</span>
                <Badge variant="outline" className="text-xs flex-shrink-0 transition-all duration-300 group-hover:scale-110">
                  {work.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <span className="terminal-text font-mono">// </span>
            Journey Timeline
          </h2>
          
          <div className="space-y-6 sm:space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-6 transform transition-all duration-500 hover:translate-x-4 cursor-pointer group opacity-0 animate-fade-in" style={{ animationDelay: `${0.2 * index}s`, animationFillMode: 'forwards' }}>
                <div className="w-full sm:w-20 text-left sm:text-right">
                  <span className="text-lg font-bold terminal-text font-mono transition-all duration-300 group-hover:text-terminal-green group-hover:scale-110">
                    {item.year}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 transition-all duration-300 group-hover:text-terminal-green">{item.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground transition-all duration-300 group-hover:text-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <span className="terminal-text font-mono">// </span>
            Philosophy & Approach
          </h2>
          
          <Card className="transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 cursor-pointer group opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <CardContent className="pt-6 sm:pt-8">
              <pre className="text-left terminal-text font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto transition-all duration-300 group-hover:text-terminal-green">
{`// calm mind. focused builder.
const goals = {
  validation: false,
  motivation: 'internal',
  output: 'consistent',
  privacy: 'first',
  offline: 'preferred'
};

// Building tools that respect users' time and data.
// No tracking, no noise, just solutions that work.`}
              </pre>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Let's Build Together */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <span className="terminal-text font-mono">// </span>
            Let's Build Together
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <Card className="transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 cursor-pointer group opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <CardHeader>
                <CardTitle className="terminal-text font-mono text-base sm:text-lg transition-all duration-300 group-hover:text-terminal-green">Available For</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-sm sm:text-base text-muted-foreground">
                  <li className="transition-all duration-300 hover:text-foreground hover:translate-x-2">• Collaborations on student tools</li>
                  <li className="transition-all duration-300 hover:text-foreground hover:translate-x-2">• Idea validation & feedback</li>
                  <li className="transition-all duration-300 hover:text-foreground hover:translate-x-2">• Open source contributions</li>
                  <li className="transition-all duration-300 hover:text-foreground hover:translate-x-2">• Platform integrations</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 cursor-pointer group opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <CardHeader>
                <CardTitle className="terminal-text font-mono text-base sm:text-lg transition-all duration-300 group-hover:text-terminal-green">Preferred Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-sm sm:text-base text-muted-foreground">
                  <li className="transition-all duration-300 hover:text-foreground hover:translate-x-2">• Astro + TypeScript</li>
                  <li className="transition-all duration-300 hover:text-foreground hover:translate-x-2">• Tauri + Rust</li>
                  <li className="transition-all duration-300 hover:text-foreground hover:translate-x-2">• AI APIs (OpenAI, etc.)</li>
                  <li className="transition-all duration-300 hover:text-foreground hover:translate-x-2">• Privacy-first solutions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <Button className="w-full sm:w-auto transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20" size="lg">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
              <Mail className="w-4 h-4 mr-2" />
              Email
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
              <Twitter className="w-4 h-4 mr-2" />
              Twitter
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto text-center space-y-3 sm:space-y-4">
          <p className="text-sm sm:text-base text-muted-foreground transition-all duration-300 hover:text-foreground">
            Quietly shipping what matters.
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground font-mono transition-all duration-300 hover:text-terminal-green">
            // built by someone who smiles more than he tweets
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 rounded-full w-10 h-10 sm:w-12 sm:h-12 z-50 transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary/20 animate-fade-in"
          size="icon"
        >
          <ArrowUp className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
};

export default Index;
