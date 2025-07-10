# Developer Portfolio

A modern, minimal, and fast developer portfolio website built with Astro and Tailwind CSS. Showcasing projects, skills, and journey as a self-taught developer with clean aesthetics and scalability for future updates.

## ✨ Features

- **Modern Design**: Clean, developer-focused interface with dark mode
- **Performance Optimized**: Built with Astro for blazing-fast static site generation
- **Responsive**: Mobile-first design that looks great on all devices
- **SEO Ready**: Proper meta tags and sitemap generation
- **Accessible**: WCAG compliant with proper semantic HTML
- **Scalable**: Easy to extend with blog posts, new projects, or additional features

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Icons**: [Lucide](https://lucide.dev/) - Beautiful, consistent icons
- **Typography**: Inter font family for clean, modern text
- **Animations**: CSS transitions for subtle interactions

## � Project Structure

```text
/
├── public/                 # Static assets (favicon, images)
├── src/
│   ├── components/        # Reusable Astro components
│   │   ├── Hero.astro
│   │   ├── Projects.astro
│   │   ├── Skills.astro
│   │   ├── About.astro
│   │   ├── Contact.astro
│   │   ├── Navigation.astro
│   │   └── Footer.astro
│   ├── data/             # Static data files
│   │   ├── projects.ts
│   │   └── skills.ts
│   ├── layouts/          # Layout components
│   │   └── BaseLayout.astro
│   ├── pages/            # File-based routing
│   │   └── index.astro
│   └── styles/           # Global styles
│       └── global.css
├── .github/              # GitHub configuration
│   └── copilot-instructions.md
└── package.json
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

## 🧞 Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## 🎨 Customization

### Personal Information
1. Update `src/data/projects.ts` with your projects
2. Modify `src/data/skills.ts` with your skills
3. Edit contact information in `src/components/Contact.astro`
4. Replace placeholder links in navigation and footer components

### Styling
- Colors can be customized in `src/styles/global.css`
- The design system uses Tailwind's slate color palette
- Accent color is blue (`blue-500`)

### Content
- Hero section: Edit `src/components/Hero.astro`
- About section: Update `src/components/About.astro`
- Add new sections by creating components and importing them in `src/pages/index.astro`

## 🌐 Deployment

This portfolio is optimized for deployment on:
- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist/` folder after running `npm run build`
- **Cloudflare Pages**: Connect GitHub and set build command to `npm run build`

## 📈 Future Enhancements

- [ ] Blog/Thoughts section with MDX support
- [ ] Dark/Light mode toggle
- [ ] Contact form with backend integration
- [ ] GitHub activity integration
- [ ] Performance monitoring
- [ ] Analytics integration

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using Astro & Tailwind CSS**
