'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Code2, ExternalLink, Github, BookOpen } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'GitHub', href: '/github', icon: Github },
  { name: 'Contact', href: '#contact' },
]

const projects = [
  { name: 'DebugDaily', href: '/debugdaily', description: 'Daily coding challenges and solutions' },
  { name: 'AI Tools', href: '/ai-tools', description: 'Collection of AI-powered utilities' },
  { name: 'Web Apps', href: '/web-apps', description: 'Full-stack web applications' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [currentHash, setCurrentHash] = React.useState('')
  const [isMounted, setIsMounted] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    setIsMounted(true)
    const updateHash = () => {
      setCurrentHash(window.location.hash)
    }
    
    updateHash()
    window.addEventListener('hashchange', updateHash)
    return () => {
      window.removeEventListener('hashchange', updateHash)
    }
  }, [])

  const isActive = (href: string) => {
    if (!isMounted) {
      return false; // All links are inactive on SSR and initial client render
    }

    // Client-side only logic for active state:
    if (href === '/') {
      return pathname === href && (currentHash === '' || currentHash === href ); // Simplified root check with hash
    }
    if (href.startsWith('#')) {
      return pathname === '/' && currentHash === href;
    }
    // For page links (like /debugdaily, /ai-tools, /index-v2.html)
    return pathname.startsWith(href);
  }

  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group" onClick={() => setMobileMenuOpen(false)}>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
            <Code2 className="h-4 w-4" />
          </div>
          <span className="hidden font-bold text-foreground sm:inline-block group-hover:text-accent transition-colors duration-300">
            Dejan Stajic
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-all duration-200 hover:text-accent relative group flex items-center gap-1.5',
                isActive(item.href)
                  ? 'text-accent'
                  : 'text-muted-foreground'
              )}
            >
              {item.icon && <item.icon className="w-4 h-4" />}
              {item.name}
              <span className={cn(
                'absolute -bottom-0.5 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300',
                isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
              )} />
            </Link>
          ))}
          
          {/* Projects Dropdown */}
          <div className="relative group">
            <button className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-accent flex items-center space-x-1">
              <span>More</span> 
              <ExternalLink className="h-3 w-3" />
            </button>
            <div className="absolute top-full right-0 mt-2 w-64 rounded-xl bg-background border border-border p-2 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-10">
              {projects.map((project) => (
                <Link
                  key={project.name}
                  href={project.href}
                  className="block rounded-md px-4 py-3 text-sm hover:bg-secondary transition-colors duration-200 group/item"
                >
                  <div className="font-medium text-foreground group-hover/item:text-accent transition-colors">
                    {project.name}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {project.description}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Mobile menu button */}
        <Button
          variant="outline"
          size="icon"
          className="md:hidden w-9 h-9 bg-background hover:bg-secondary text-muted-foreground border-border/80"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border shadow-lg">
          <div className="space-y-1 px-3 py-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center gap-2 rounded-md px-3 py-3 text-base font-medium transition-colors duration-200',
                  isActive(item.href)
                    ? 'bg-accent/10 text-accent' 
                    : 'text-muted-foreground hover:bg-secondary hover:text-primary'
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Projects */}
            <div className="px-3 pt-3">
              <div className="text-sm font-semibold text-foreground mb-2">More Projects</div>
              {projects.map((project) => (
                <Link
                  key={project.name}
                  href={project.href}
                  className="block rounded-md px-3 py-3 text-sm hover:bg-secondary transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="font-medium text-muted-foreground hover:text-primary">{project.name}</div>
                  <div className="text-xs text-muted-foreground/80 mt-0.5">{project.description}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
} 