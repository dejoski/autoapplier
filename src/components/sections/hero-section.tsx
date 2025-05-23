'use client'

import * as React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Download, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function HeroSection() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Placeholder for when not mounted to prevent layout shifts and maintain structure
  if (!mounted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center space-y-8 opacity-0">
            <div className="flex justify-center">
              <div className="w-32 h-32 rounded-full bg-secondary p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <div className="w-[120px] h-[120px] rounded-full bg-muted"></div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="h-16 bg-muted rounded w-3/4 mx-auto"></div> 
              <div className="h-8 bg-muted rounded w-full mx-auto"></div>
              <div className="h-8 bg-muted rounded w-5/6 mx-auto"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="px-4 py-2 bg-secondary rounded-full w-20 h-8"></div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <div className="h-12 bg-accent rounded-lg w-48"></div>
              <div className="h-12 bg-secondary rounded-lg w-48"></div>
            </div>
            <div className="flex justify-center gap-4 pt-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-10 h-10 bg-secondary rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-background text-foreground relative overflow-hidden py-16 md:py-24">
      {/* Subtle Background Gradient Animation */}
      <div className="absolute inset-0 -z-10 opacity-50">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/30 to-background"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: '200% 200%' }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <div className="text-center space-y-10 md:space-y-12">
          {/* Profile Image - Refined Look */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-full blur-md opacity-50 group-hover:opacity-75 group-hover:blur-lg transition duration-500" />
              <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full bg-background p-1 shadow-xl">
                <Image
                  src="/profile pic.png"
                  alt="Dejan Stajic - Full Stack Developer & AI Enthusiast"
                  width={144}
                  height={144}
                  className="rounded-full object-cover aspect-square"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="space-y-4 md:space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight">
              <span className="block">Dejan Stajic</span>
              <span className={cn(
                "block text-transparent bg-clip-text",
                "bg-gradient-to-r from-primary via-accent to-primary", // Adjusted gradient for better harmony
                "dark:from-primary dark:via-accent dark:to-primary"
              )} style={{backgroundSize: '200% auto', animation: 'gradientMove 4s ease-in-out infinite'}}>
                Full Stack & AI Developer
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Crafting intelligent, high-performance web applications. Specializing in Next.js, Python, and cutting-edge AI to transform complex challenges into elegant solutions.
            </p>
          </motion.div>

          {/* Tech Stack - More Subtle Presentation */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3"
          >
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AI/ML'].map((skill) => (
              <motion.span 
                key={skill} 
                whileHover={{ y: -3 }}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-xs sm:text-sm font-medium shadow-sm cursor-default transition-shadow hover:shadow-md"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* Buttons - Refined Styling */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4"
          >
            <Button asChild size="lg" className="font-semibold shadow-md hover:shadow-lg transition-shadow bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="#projects">
                <Briefcase className="mr-2 h-5 w-5" />
                View Projects
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-semibold shadow-sm hover:shadow-md transition-shadow border-primary/50 text-primary hover:bg-primary/5">
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </Button>
          </motion.div>

          {/* Social Links - Subtle Hover Effects */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="flex justify-center gap-3 pt-2"
          >
            <Button asChild variant="outline" size="icon" className="rounded-full text-muted-foreground hover:text-primary hover:border-primary/70 transition-colors duration-300">
              <a href="https://github.com/dejoski" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon" className="rounded-full text-muted-foreground hover:text-primary hover:border-primary/70 transition-colors duration-300">
              <a href="https://linkedin.com/in/dejanstajic" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" className="font-medium text-muted-foreground hover:text-primary hover:border-primary/70 transition-colors duration-300">
              <a href="/Dejan_Stajic_Resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </motion.div>

          {/* Scroll Indicator - Cleaner Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group">
              <span className="text-xs sm:text-sm mb-1">Scroll</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="h-4 w-4" />
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 