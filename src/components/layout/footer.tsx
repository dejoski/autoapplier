'use client'

import * as React from 'react'
import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail, Heart, Code2 } from 'lucide-react'

import { Button } from '@/components/ui/button'

const footerLinks = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ],
  projects: [
    { name: 'DebugDaily', href: '/debugdaily' },
    { name: 'AI Tools', href: '/ai-tools' },
    { name: 'Web Apps', href: '/web-apps' },
  ],
  social: [
    { name: 'GitHub', href: 'https://github.com/dejanstajic', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/dejanstajic', icon: Linkedin },
    { name: 'X (Twitter)', href: 'https://twitter.com/dejanstajic', icon: Twitter },
    { name: 'Email', href: 'mailto:hello@dejanstajic.dev', icon: Mail },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 group w-fit">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <Code2 className="h-4 w-4" />
              </div>
              <span className="font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                Dejan Stajic
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Full Stack Developer & AI Enthusiast. Crafting intelligent web solutions that drive results.
            </p>
            <div className="flex space-x-2 pt-2">
              {footerLinks.social.map((social) => (
                <Button
                  key={social.name}
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-md border-border/80 text-muted-foreground hover:bg-secondary hover:text-primary"
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.main.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links (Projects became too specific, more general) */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">More</h3>
            <ul className="space-y-2">
              {footerLinks.projects.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Connect</h3>
            <p className="text-sm text-muted-foreground">
              Have a project in mind or want to connect?
            </p>
            <Button variant="outline" className="border-primary/60 text-primary hover:bg-primary/5 hover:text-primary font-semibold shadow-sm w-full sm:w-auto" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Dejan Stajic. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground flex items-center gap-1.5">
              Crafted with <Heart className="h-3.5 w-3.5 text-accent/80" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 