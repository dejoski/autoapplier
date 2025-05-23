'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ShoppingCart, User, Search, Tag, Home as HomeIcon, List } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/ui/theme-toggle'

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Shop All', href: '/products', icon: List },
  { name: 'Categories', href: '/categories', icon: List },
  { name: 'Deals', href: '/deals', icon: Tag },
  { name: 'Support', href: '/support' },
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group" onClick={() => setMobileMenuOpen(false)}>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
            <ShoppingCart className="h-4 w-4" />
          </div>
          <span className="hidden font-bold text-foreground sm:inline-block group-hover:text-accent transition-colors duration-300">
            E-Commerce
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <nav className="flex items-center space-x-4 lg:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-all duration-200 hover:text-accent relative group flex items-center gap-1',
                  isActive(item.href)
                    ? 'text-accent'
                    : 'text-muted-foreground'
                )}
              >
                {item.icon && <item.icon className="w-4 h-4 mr-1" />}
                {item.name}
                <span className={cn(
                  'absolute -bottom-0.5 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300',
                  isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                )} />
              </Link>
            ))}
          </nav>

          {/* Icons & Theme Toggle */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="w-9 h-9 hover:bg-secondary">
              <Search className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </Button>
            <Button variant="ghost" size="icon" className="w-9 h-9 hover:bg-secondary">
              <User className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </Button>
            <Button variant="ghost" size="icon" className="w-9 h-9 hover:bg-secondary relative">
              <ShoppingCart className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </Button>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile menu button & Theme Toggle (Theme toggle first for consistency) */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="w-9 h-9 hover:bg-secondary md:hidden">
            <Search className="h-5 w-5 text-muted-foreground hover:text-primary" />
          </Button>
          <Button variant="ghost" size="icon" className="w-9 h-9 hover:bg-secondary md:hidden">
            <User className="h-5 w-5 text-muted-foreground hover:text-primary" />
          </Button>
          <Button variant="ghost" size="icon" className="w-9 h-9 hover:bg-secondary relative md:hidden">
            <ShoppingCart className="h-5 w-5 text-muted-foreground hover:text-primary" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="w-9 h-9 bg-background hover:bg-secondary text-muted-foreground border-border/80"
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
                {item.icon && <item.icon className="w-4 h-4 mr-1" />}
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
} 