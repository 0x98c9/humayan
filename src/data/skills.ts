export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon?: string;
  level: 'learning' | 'intermediate' | 'advanced';
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'JavaScript', level: 'advanced' },
      { name: 'TypeScript', level: 'intermediate' },
      { name: 'React', level: 'intermediate' },
      { name: 'Astro', level: 'learning' },
      { name: 'HTML5', level: 'advanced' },
      { name: 'CSS3', level: 'advanced' },
      { name: 'Tailwind CSS', level: 'intermediate' },
    ]
  },
  {
    name: 'Backend & Database',
    skills: [
      { name: 'Node.js', level: 'intermediate' },
      { name: 'Firebase', level: 'intermediate' },
      { name: 'MongoDB', level: 'learning' },
      { name: 'REST APIs', level: 'intermediate' },
    ]
  },
  {
    name: 'Tools & Others',
    skills: [
      { name: 'Git', level: 'advanced' },
      { name: 'GitHub', level: 'advanced' },
      { name: 'VS Code', level: 'advanced' },
      { name: 'Figma', level: 'intermediate' },
      { name: 'Markdown', level: 'advanced' },
      { name: 'Responsive Design', level: 'advanced' },
    ]
  }
];
