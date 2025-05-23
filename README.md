# 🚀 Dejan Stajic - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS. Designed with an "Innovative Professionalism & Clear Impact" philosophy to effectively showcase skills and drive engagement.

## ✨ Core Features

- **Strategic Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS chosen for performance and scalability.
- **Impactful UI**: Custom-built with Shadcn/ui principles, focusing on clarity and professionalism.
- **Purposeful Animations**: Framer Motion for smooth, engaging animations that enhance user experience without distracting.
- **Responsive Design**: Mobile-first approach ensuring a flawless experience on all devices.
- **Performance Optimized**: Focus on Core Web Vitals and best practices for a fast, accessible site.
- **Type Safety**: Full TypeScript coverage with strict mode for robust development.
- **Code Quality**: ESLint, Prettier, and modern best practices ensure maintainable and clean code.

## 🎨 Design Philosophy: "Innovative Professionalism & Clear Impact"

- **Sophisticated Color Palette**: Utilizes a deep desaturated blue for primary elements and text, a vibrant teal/cyan for impactful CTAs, and clean neutrals for a modern, trustworthy feel.
- **Strong Visual Hierarchy**: Guides the user's eye to key information and calls to action.
- **Clear Typography**: Inter font used for excellent readability and a professional look.
- **Spacious & Uncluttered Layout**: Generous whitespace and deliberate element placement for a focused user experience.
- **Value-Driven Copy**: Headlines and descriptions are crafted to highlight impact and expertise.

## 📱 Key Sections

1.  **Hero Section**: Compelling introduction with value-driven headlines, clear calls to action, and a professional profile presentation.
2.  **About Section**: (Planned) Personal story, skills, and unique selling propositions.
3.  **Projects Section**: (Planned) Showcases key projects as mini case studies, focusing on problem, solution, and impact.
4.  **Experience Section**: (Planned) Professional timeline highlighting achievements and responsibilities.
5.  **Contact Section**: (Planned) Easy-to-use contact form and direct links for communication.
6.  **Footer**: Consistent navigation and social links.

## 🛠️ Tech Stack

### Frontend
- **Next.js 15**: React framework with App Router
- **React 19**: Latest React features
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

### UI Components/Principles
- **Radix UI Primitives**: Foundation for accessible components.
- **Shadcn/ui Inspired**: Custom components built with similar principles for consistency and quality.
- **Class Variance Authority**: For managing component variants.
- **Tailwind Merge**: For intelligent class name merging.

### Development Tools
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Turbopack**: (via Next.js 15) Fast bundler

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Installation

1.  **Clone the repository**
    ```bash
    # If you previously cloned with a different name, use your local folder name
    git clone https://github.com/dejoski/autoapplier.git
    cd autoapplier
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or yarn install / pnpm install
    ```

3.  **Start development server**
    ```bash
    npm run dev
    ```

4.  **Open in browser**
    Navigate to `http://localhost:3000` (or the port specified by `npm run dev`)

## 📝 Available Scripts

- `npm run dev`: Start development server.
- `npm run build`: Build for production.
- `npm run start`: Start production server (after build).
- `npm run lint`: Run ESLint for code analysis.
- `npm run type-check`: Run TypeScript compiler for type checking.
- `npm run format`: Format code using Prettier.
- `npm run format:check`: Check code formatting.

## 🌐 Deployment

Deployed automatically via Vercel from the `main` branch of the [GitHub repository](https://github.com/dejoski/autoapplier).

Production URL: [https://autoapplier-6bn9n8esr-dejans-projects-f07f73db.vercel.app](https://autoapplier-6bn9n8esr-dejans-projects-f07f73db.vercel.app)

## 📁 Project Structure (Simplified)

```
src/
├── app/                 # Next.js App Router (globals.css, layout.tsx, page.tsx)
├── components/          # React components
│   ├── layout/          # Header, Footer
│   ├── sections/        # Hero, About, Projects, etc.
│   └── ui/              # Reusable UI elements (Button, Card)
├── lib/                 # Utility functions (e.g., cn)
└── public/              # Static assets (images, CV.pdf)
.cursor/
└── rules/               # Cursor AI rules (e.g., pending-features.mdc)
TODO_FEATURES.md         # Checklist for pending feature implementations
README.md                # This file
next.config.ts           # Next.js configuration
tailwind.config.ts       # Tailwind CSS configuration
tsconfig.json            # TypeScript configuration
package.json             # Project dependencies and scripts
```

## 🎯 Guiding Principles

- **Write Once, Use Everywhere**: Emphasize reusable components and utility functions.
- **Clarity & Maintainability**: Clean code, clear structure, and helpful documentation (like `TODO_FEATURES.md`).
- **User-Centric Design**: Focus on providing a clear, valuable, and engaging experience for the end-user.
- **Iterative Improvement**: Continuously refine and enhance based on feedback and evolving goals.

## 🔧 Customization

- **Colors & Theme**: Edit CSS variables in `src/app/globals.css`.
- **Content**: Update content directly within the respective section components in `src/components/sections/`.
- **Components**: Modify or extend components in `src/components/ui/` and `src/components/layout/`.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/) (for principles and inspiration)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)

---

**Built with a focus on impact by Dejan Stajic.**

Let's build something great! 🚀 