'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ThemeToggleProps {
  className?: string
  variant?: 'default' | 'ghost' | 'outline'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

export function ThemeToggle({ 
  className, 
  variant = 'ghost', 
  size = 'icon' 
}: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant={variant} size={size} className={cn(className)} disabled>
        <Sun className="h-4 w-4" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className={cn(className)}
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export function ThemeToggleWithText({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" className={cn('justify-start', className)} disabled>
        <Sun className="mr-2 h-4 w-4" />
        Light
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className={cn('justify-start', className)}
    >
      {theme === 'light' ? (
        <>
          <Moon className="mr-2 h-4 w-4" />
          Dark
        </>
      ) : (
        <>
          <Sun className="mr-2 h-4 w-4" />
          Light
        </>
      )}
    </Button>
  )
} 