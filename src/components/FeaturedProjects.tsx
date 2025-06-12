import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "GPA Snap",
    category: "Web App",
    description: "A web app to help students track and manage their GPA effectively.",
    stack: ["Vite", "Tailwind CSS", "IndexedDB"],
    link: "#",
    status: "planning"
  },
  {
    title: "4xFlow",
    category: "Desktop App",
    description: "Offline productivity app to manage tasks, ideas, and projects with a sleek interface.",
    stack: ["Tauri", "Rust", "Tailwind", "Vite"],
    link: "https://fourxflow.pages.dev/",
    status: "live"
  },
  {
    title: "4xShell",
    category: "Web App",
    description: "A premium-looking typescript-based web terminal. 25+ commands, 8+ themes, and more.",
    stack: ["TypeScript", "Vite", "Tailwind"],
    link: "https://4xshell.pages.dev",
    status: "live"
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
    title: "Tazko",
    category: "Web App",
    description: "Create, organize, and track your tasks with simple task management system.",
    stack: ["Vite", "Tailwind CSS", "TypeScript"],
    link: "https://tazko.pages.dev/",
    status: "live"
  },
  {
    title: "FakeMint",
    category: "Web App",
    description: "Generate fake data for testing and development up to 1000 rows.",
    stack: ["Vite", "TypeScript", "IndexedDB"],
    link: "https://fakemint.netlify.app/",
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
