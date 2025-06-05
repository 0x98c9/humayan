import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Mail, Twitter } from 'lucide-react';

const Contact = () => (
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
        <Button className="w-full sm:w-auto transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20" size="lg" onClick={() => window.open('https://github.com/0x98c9', '_blank')}>
          <Github className="w-4 h-4 mr-2" />
          GitHub
        </Button>
        <Button variant="outline" size="lg" className="w-full sm:w-auto transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10" onClick={() => window.open('mailto:humayanalrosid3@gmail.com', '_blank')}>
          <Mail className="w-4 h-4 mr-2" />
          Email
        </Button>
        <Button variant="outline" size="lg" className="w-full sm:w-auto transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10" onClick={() => window.open('https://twitter.com/0x98c9', '_blank')}>
          <Twitter className="w-4 h-4 mr-2" />
          Twitter
        </Button>
      </div>
    </div>
  </section>
);

export default Contact;
