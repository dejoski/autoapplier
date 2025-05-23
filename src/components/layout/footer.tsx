'use client'

import * as React from 'react'
import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'

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
    { name: 'Twitter', href: 'https://twitter.com/dejanstajic', icon: Twitter },
    { name: 'Email', href: 'mailto:hello@dejanstajic.dev', icon: Mail },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                <span className="text-sm font-bold">DS</span>
              </div>
              <span className="font-bold text-gray-900">Dejan Stajic</span>
            </div>
            <p className="text-sm text-gray-600">
              Full Stack Developer & AI Enthusiast building the future, one line of code at a time.
            </p>
            <div className="flex space-x-2">
              {footerLinks.social.map((social) => (
                <Button
                  key={social.name}
                  className="h-8 w-8 rounded-md bg-white border border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
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
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.main.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Projects</h3>
            <ul className="space-y-2">
              {footerLinks.projects.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Get In Touch</h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                Ready to work together?
              </p>
              <Button className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 h-8 rounded-md px-3 text-xs" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Dejan Stajic. All rights reserved.
            </p>
            <p className="text-sm text-gray-600 flex items-center gap-1">
              Made with <Heart className="h-3 w-3 text-red-500" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 