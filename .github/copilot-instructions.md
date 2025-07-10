# Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This is a modern, minimal developer portfolio website built with Astro + Tailwind CSS.

## Project Overview
A professional developer portfolio showcasing projects, skills, and journey as a self-taught developer. Focus on clean aesthetics, performance, and scalability for future features like blogs and contact automation.

## Tech Stack
- **Framework**: Astro (for static site generation and performance)
- **Styling**: Tailwind CSS (utility-first CSS framework)
- **Typography**: Inter font family for clean, modern look
- **Icons**: Lucide icons for consistent iconography
- **Animations**: Simple CSS transitions and hover effects
- **Content**: Markdown/MDX support for future blog content
- **SEO**: Astro SEO configuration

## Design Philosophy
- **Developer-focused**: Clean, lightweight, professional
- **Dark mode default**: Modern dark theme with optional light mode toggle
- **Minimal aesthetic**: Grid-based layout with proper spacing
- **Subtle interactions**: Hover effects, no flashy UI
- **Typography-focused**: Emphasis on readability and hierarchy
- **Performance-first**: Optimized for speed and accessibility

## Key Sections
1. **Hero Section**: Clean headline, purpose statement, CTA buttons
2. **Projects Section**: Showcase key projects with tech stack badges
3. **Skills Section**: Organized tech stack by categories
4. **About Section**: Developer journey and current focus
5. **Contact Section**: Simple contact form or direct links

## Development Guidelines
- Use Astro components (.astro files) for all UI components
- Leverage Tailwind CSS utility classes for all styling
- Follow mobile-first responsive design principles
- Optimize images and assets for web performance
- Use TypeScript for better code quality and developer experience
- Maintain consistent spacing using Tailwind's spacing scale
- Use semantic HTML for accessibility
- Implement proper meta tags and SEO optimization

## File Organization
- `src/pages/` - Route-based page components (index.astro)
- `src/components/` - Reusable Astro components (Hero, Projects, Skills, About, Contact)
- `src/layouts/` - Layout components (BaseLayout.astro)
- `src/styles/` - Global styles and Tailwind imports
- `src/data/` - Static data for projects, skills, etc.
- `public/` - Static assets (images, icons, favicon)

## Color Scheme
- **Primary**: Dark background (#0f172a slate-900)
- **Secondary**: Medium gray (#1e293b slate-800)
- **Accent**: Blue (#3b82f6 blue-500)
- **Text**: Light gray (#e2e8f0 slate-200)
- **Muted**: Medium gray (#64748b slate-500)

## Component Structure
- Use atomic design principles
- Keep components small and focused
- Implement proper TypeScript interfaces for props
- Use consistent naming conventions
- Add proper accessibility attributes

## Future-Ready Features
- Dark/Light mode toggle preparation
- Blog/Thoughts section with MDX support
- Contact form with validation
- GitHub activity integration
- Project showcase expansion
- Performance monitoring
