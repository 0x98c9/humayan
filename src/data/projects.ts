export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: 'live' | 'coming-soon' | 'in-progress';
}

export const projects: Project[] = [
{
    id: 'naukrimap',
    name: 'NaukriMap',
    description: 'Government exam roadmap tool helping students navigate their career paths with structured guidance and resources. Currently under active development.',
    tags: ['Edtech', 'Career Guidance', 'Government Exams'],
    stack: ['TypeScript', 'NextJs', 'Tailwind', 'Firebase'],
    status: 'in-progress'
  },
  {
    id: 'webxzet',
    name: 'WebxZet',
    description: '50+ free no-login tools for developers, designers, and content creators. Everything from text formatters to color generators in one place.',
    tags: ['Developer Tools', 'Utilities', 'Free'],
    stack: ['Astro', 'TypeScript', 'Tailwind', 'Local Storage'],
    liveUrl: 'https://webxzet.tech',
    status: 'live'
  },
  {
    id: 'tazko',
    name: 'Tazko',
    description: 'Clean, no-login task manager that keeps productivity simple. Built for users who want to manage tasks without the overhead of account creation.',
    tags: ['Productivity', 'Task Management', 'No-Auth'],
    stack: ['TypeScript', 'Vite', 'Tailwind', 'Local Storage'],
    liveUrl: 'https://tazko.pages.dev',
    status: 'live'
  },
  {
    id: 'fourxflow',
    name: '4xFlow',
    description: 'Offline productivity app to manage tasks, ideas, and projects. A comprehensive workspace for developers and creatives to organize their workflow.',
    tags: ['Productivity', 'Offline-First', 'Project Management'],
    stack: ['TypeScript', 'Astro', 'Rust', 'Tauri'],
    liveUrl: 'https://fourxflow.pages.dev',
    status: 'live'
  },
  {
    id: 'fourxshell',
    name: '4xShell',
    description: 'A premium-looking TypeScript-based web terminal. Experience the power of command-line interface in your browser with modern aesthetics.',
    tags: ['Terminal', 'CLI', 'Web App'],
    stack: ['TypeScript', 'Tailwind', 'Terminal Emulation'],
    liveUrl: 'https://4xshell.pages.dev',
    status: 'live'
  },
  {
    id: 'fakemint',
    name: 'FakeMint',
    description: 'Generate realistic fake data instantly for development, testing, and design. Perfect for populating mockups and testing applications.',
    tags: ['Developer Tools', 'Testing', 'Data Generation'],
    stack: ['TypeScript', 'Faker.js', 'NextJs', 'Tailwind'],
    liveUrl: 'https://fakemint.netlify.app',
    status: 'live'
  },
];
