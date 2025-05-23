'use client'

import * as React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Download, Briefcase } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function HeroSection() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center space-y-8 opacity-0">
            {/* Profile Image Placeholder */}
            <div className="flex justify-center">
              <div className="w-32 h-32 rounded-full bg-secondary p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <div className="w-[120px] h-[120px] rounded-full bg-muted"></div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground">
                Dejan Stajic: Crafting Intelligent Web & AI Solutions That Drive Results.
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Senior Full Stack Developer specializing in Next.js, Python, and cutting-edge AI. I transform complex challenges into elegant, high-performance applications.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">React</span>
              <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Next.js</span>
              <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">TypeScript</span>
              <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Node.js</span>
              <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">AI/ML</span>
              <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Python</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Briefcase className="mr-2 h-5 w-5" />
                Explore My Work (Projects)
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/5">
                <Mail className="mr-2 h-5 w-5" />
                Discuss Your Project
              </Button>
            </div>

            <div className="flex justify-center gap-4">
              {/* Social buttons - keep simple or style consistently */}
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground">
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center space-y-8">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary to-accent p-1 shadow-lg">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                <Image
                  src="/profile pic.png"
                  alt="Dejan Stajic - Full Stack Developer & AI Enthusiast"
                  width={120}
                  height={120}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Dejan Stajic: <span className="block sm:inline">Crafting Intelligent Web & AI Solutions</span> <span className="block sm:inline text-transparent bg-gradient-to-r from-primary via-accent to-accent bg-clip-text">That Drive Results.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Senior Full Stack Developer specializing in Next.js, Python, and cutting-edge AI. I transform complex challenges into elegant, high-performance applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AI/ML'].map((skill) => (
              <span key={skill} className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium shadow-sm">
                {skill}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-md">
              <a href="#projects">
                <Briefcase className="mr-2 h-5 w-5" />
                Explore My Work (Projects)
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/60 text-primary hover:bg-primary/5 hover:text-primary font-semibold shadow-sm">
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Discuss Your Project
              </a>
            </Button>
            
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center gap-4 pt-2"
          >
            <Button asChild variant="outline" size="icon" className="rounded-full border-primary/30 text-muted-foreground hover:bg-secondary hover:text-primary">
              <a href="https://github.com/dejanstajic" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon" className="rounded-full border-primary/30 text-muted-foreground hover:bg-secondary hover:text-primary">
              <a href="https://linkedin.com/in/dejanstajic" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
             <Button asChild variant="outline" size="lg" className="border-primary/30 text-muted-foreground hover:bg-secondary hover:text-primary font-semibold shadow-sm">
              <a href="/Dejan_Stajic_CV.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
              <span className="text-sm mb-1">Scroll down</span>
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 