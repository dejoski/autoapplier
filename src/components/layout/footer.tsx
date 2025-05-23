'use client'

import * as React from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin, Youtube, ShoppingCart } from 'lucide-react'

import { Button } from '@/components/ui/button'

const footerSections = {
  customerService: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Shipping & Returns', href: '/shipping-returns' },
    { name: 'Track Order', href: '/track-order' },
  ],
  ourCompany: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Press', href: '/press' },
  ],
  legal: [
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
  ],
  social: [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'YouTube', href: '#', icon: Youtube },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand & Social */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 group w-fit">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <ShoppingCart className="h-4 w-4" />
              </div>
              <span className="font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                E-Commerce Platform
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your one-stop shop for amazing products. Quality and customer satisfaction guaranteed.
            </p>
            <div className="flex space-x-2 pt-2">
              {footerSections.social.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-md text-muted-foreground hover:bg-secondary hover:text-primary"
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Customer Service</h3>
            <ul className="space-y-2">
              {footerSections.customerService.map((link) => (
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

          {/* Our Company */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Our Company</h3>
            <ul className="space-y-2">
              {footerSections.ourCompany.map((link) => (
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

          {/* Legal */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Legal</h3>
            <ul className="space-y-2">
              {footerSections.legal.map((link) => (
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
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Modern E-Commerce Platform. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground flex items-center gap-1.5">
              Powered by Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 