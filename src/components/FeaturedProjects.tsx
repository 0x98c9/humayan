import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Brevilo",
    category: "AI SaaS",
    description: "AI repurposing SaaS for content creators. Built for Bolt Hackathon using OpenAI APIs.",
    stack: ["OpenAI", "Vite", "Supabase"],
    link: "#",
    status: "planning"
  },
  {
    title: "Documed",
    category: "Desktop App",
    description: "Offline toolkit for PDF & image tools. Desktop-first, web version coming soon.",
    stack: ["Tauri", "Rust", "Tailwind CSS"],
    link: "#",
    status: "building"
  },
  {
    title: "WebxZet",
    category: "Web App",
    description: "Hub for free tools, study utilities, and productivity experiments for students.",
    stack: ["Astro", "Tailwind", "TypeScript"],
    link: "https://webxzet.tech",
    status: "live"
  },
  {
    title: "SayHi Link",
    category: "Web App",
    description: "Lightweight click-to-chat whatsapp chat links generator.",
    stack: ["Vite", "Tailwind CSS", "TypeScript"],
    link: "https://sayhilink.netlify.app/",
    status: "live"
  },
  {
    title: "SaveFlow",
    category: "Web App",
    description: "Simple budget tracker for students to manage expenses and savings.",
    stack: ["React", "TypeScript", "IndexedDB"],
    link: "https://saveflow.onrender.com/",
    status: "live"
  },
  {
    title: "Lumen",
    category: "Web App",
    description: "Your space to reflect, privately, add notes, and track your thoughts.",
    stack: ["Vite", "Tailwind CSS", "IndexedDB"],
    link: "https://lumenbook.pages.dev/",
    status: "live"
  }
];

const FeaturedProjects = () => (
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
                <Badge variant={project.status === 'live' ? 'default' : 'secondary'} className={`text-xs transition-all duration-300${project.status === 'live' ? ' group-hover:bg-terminal-green' : ' group-hover:scale-110'}`}>
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
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
                  <Button className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg" variant="outline" size="sm" onClick={() => window.open(project.link, '_blank')}>
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
);

export default FeaturedProjects;
