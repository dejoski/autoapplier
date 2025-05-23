'use client'

import * as React from 'react'

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