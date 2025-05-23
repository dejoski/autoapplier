'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Code2, ExternalLink } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

const projects = [
  { name: 'DebugDaily', href: '/debugdaily', description: 'Daily coding challenges and solutions' },
  { name: 'AI Tools', href: '/ai-tools', description: 'Collection of AI-powered utilities' },
  { name: 'Web Apps', href: '/web-apps', description: 'Full-stack web applications' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
            <Code2 className="h-5 w-5" />
          </div>
          <span className="hidden font-bold text-gray-900 sm:inline-block group-hover:text-blue-600 transition-all duration-300">
            Dejan Stajic
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-all duration-300 hover:text-blue-600 relative group',
                isActive(item.href)
                  ? 'text-blue-600'
                  : 'text-gray-600'
              )}
            >
              {item.name}
              <span className={cn(
                'absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300',
                isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
              )} />
            </Link>
          ))}
          
          {/* Projects Dropdown */}
          <div className="relative group">
            <button className="text-sm font-medium text-gray-600 transition-all duration-300 hover:text-blue-600 flex items-center space-x-1">
              <span>Projects</span>
              <ExternalLink className="h-3 w-3" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 rounded-xl bg-white border border-gray-200 p-2 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              {projects.map((project) => (
                <Link
                  key={project.name}
                  href={project.href}
                  className="block rounded-lg px-4 py-3 text-sm hover:bg-gray-50 transition-all duration-300 group/item"
                >
                  <div className="font-medium text-gray-900 group-hover/item:text-blue-600 transition-colors">
                    {project.name}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {project.description}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Mobile menu button */}
        <Button
          className="md:hidden w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'block rounded-lg px-4 py-3 text-base font-medium transition-all duration-300',
                  isActive(item.href)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Projects */}
            <div className="px-4 py-2">
              <div className="text-base font-medium text-gray-600 mb-3">Projects</div>
              {projects.map((project) => (
                <Link
                  key={project.name}
                  href={project.href}
                  className="block rounded-lg px-4 py-3 text-sm hover:bg-gray-50 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="font-medium text-gray-900">{project.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{project.description}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
} 