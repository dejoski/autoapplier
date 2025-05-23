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
    <footer className="py-6 md:px-8 md:py-0 border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-20 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} DebugDaily. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {/* Placeholder for social links or other footer items if needed */}
          <p className="text-sm text-muted-foreground">
            Sharpen your AI Coding Skills.
          </p>
        </div>
      </div>
    </footer>
  )
} 