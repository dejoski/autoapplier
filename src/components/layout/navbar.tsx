'use client'

import Link from 'next/link'
import { User, Github, Mail, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2 group">
          <User className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
          <span className="font-bold text-lg group-hover:text-accent transition-colors">
            Dejan Stajic
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link
            href="#about"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#experience"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            Experience
          </Link>
          <Link
            href="#contact"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="h-9 w-9"
          >
            <a
              href="https://github.com/dejoski"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="h-9 w-9"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  )
}