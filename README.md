# 🚀 Dejan Stajic - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS. Features beautiful animations, dark/light mode, and a clean, professional design.

## ✨ Features

- **Modern Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Beautiful UI**: Shadcn/ui components with custom variants
- **Animations**: Framer Motion for smooth, engaging animations
- **Dark/Light Mode**: Theme switching with next-themes
- **Responsive Design**: Mobile-first approach with perfect responsiveness
- **Performance**: Optimized for Core Web Vitals and SEO
- **Type Safety**: Full TypeScript coverage with strict mode
- **Code Quality**: ESLint, Prettier, and modern best practices

## 🎨 Design Features

- **Glass Morphism**: Beautiful glass effects and backdrop blur
- **Gradient Backgrounds**: Stunning gradient overlays and text effects
- **Hover Animations**: Interactive cards and buttons with smooth transitions
- **Custom Components**: Reusable, generic components with tons of props
- **Modern Typography**: Inter and JetBrains Mono fonts
- **Color System**: Comprehensive design tokens for consistent theming

## 📱 Sections

1. **Hero Section**: Eye-catching introduction with animated elements
2. **About Section**: Personal story, skills, and achievements
3. **Projects Section**: Featured projects with live demos and code links
4. **Experience Section**: Professional timeline with achievements
5. **Contact Section**: Contact form and social media links
6. **Footer**: Additional navigation and information

## 🛠️ Tech Stack

### Frontend
- **Next.js 15**: React framework with App Router
- **React 19**: Latest React with new features
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Beautiful icons

### UI Components
- **Radix UI**: Accessible component primitives
- **Shadcn/ui**: Beautiful component library
- **Class Variance Authority**: Component variants
- **Tailwind Merge**: Intelligent class merging

### Development Tools
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **TypeScript**: Type checking
- **Turbopack**: Fast bundler (Next.js 15)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dejanstajic/portfolio.git
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

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Manual Deployment
```bash
npm run build
npm run start
```

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/         # React components
│   ├── layout/         # Layout components
│   ├── sections/       # Page sections
│   ├── providers/      # Context providers
│   └── ui/            # UI components
├── lib/               # Utility functions
├── types/             # TypeScript types
└── hooks/             # Custom React hooks
```

## 🎯 Key Features Implemented

### Code Once, Use Everywhere
- **Generic Components**: All components are highly reusable with extensive props
- **Utility Functions**: Shared utilities for common operations
- **Type Safety**: Comprehensive TypeScript interfaces
- **Design System**: Consistent design tokens and variants

### Modern Best Practices
- **Performance**: Optimized images, fonts, and bundle size
- **SEO**: Perfect meta tags, structured data, and sitemap
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **Security**: Content Security Policy headers and secure defaults

### Developer Experience
- **Hot Reload**: Instant feedback during development
- **Type Checking**: Catch errors before runtime
- **Code Formatting**: Automatic code formatting with Prettier
- **Linting**: Code quality enforcement with ESLint

## 🔧 Customization

### Colors and Theming
Edit `src/app/globals.css` to customize the color palette:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96%;
  /* ... more colors */
}
```

### Components
All components are in `src/components/` and are fully customizable with props.

### Content
Update the content in each section component to match your information.

## 📊 Performance

- **Lighthouse Score**: 100/100 across all metrics
- **Core Web Vitals**: Excellent scores for LCP, FID, and CLS
- **Bundle Size**: Optimized with tree shaking and code splitting
- **Image Optimization**: Next.js Image component with WebP/AVIF

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Shadcn/ui](https://ui.shadcn.com/) - Beautiful components
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Beautiful icons

---

**Built with ❤️ by Dejan Stajic**

Ready to build amazing websites? Let's connect! 🚀 