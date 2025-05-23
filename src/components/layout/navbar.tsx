'use client'

import Link from 'next/link'
import { Code, BrainCircuit } from 'lucide-react' // Using BrainCircuit for AI/logo

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <BrainCircuit className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block">
            DebugDaily
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          <Link
            href="/challenges"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Challenges
          </Link>
          <Link
            href="/leaderboard"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Leaderboard
          </Link>
          <Link
            href="/about"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            About
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          {/* TODO: Theme toggle and Auth buttons */}
        </div>
      </div>
    </header>
  )
}