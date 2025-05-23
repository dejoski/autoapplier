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
    <section className="min-h-screen flex items-center justify-center bg-background text-foreground relative overflow-hidden">
      {/* Background Effects - 2025 Trend: Glow and Light Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-purple-50/10 to-pink-50/20 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <div className="text-center space-y-8">
          {/* Profile Image - Enhanced with Glow Effect */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse" />
              <div className="relative w-32 h-32 rounded-full bg-gradient-to-r from-primary to-accent p-1 shadow-2xl">
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
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Enhanced Typography - 2025 Trend: Expressive Typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              <span className="block">Dejan Stajic:</span>
              <span className="block sm:inline">Crafting Intelligent</span>{' '}
              <span className="relative inline-block">
                <span className="block sm:inline text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text animate-gradient-x">
                  Web & AI Solutions
                </span>
                {/* Glow text effect */}
                <span className="absolute inset-0 block sm:inline text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text blur-sm opacity-50">
                  Web & AI Solutions
                </span>
              </span>{' '}
              <span className="block text-transparent bg-gradient-to-r from-accent via-primary to-accent bg-clip-text">
                That Drive Results.
              </span>
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Senior Full Stack Developer specializing in <span className="text-blue-600 dark:text-blue-400 font-semibold">Next.js</span>, <span className="text-green-600 dark:text-green-400 font-semibold">Python</span>, and cutting-edge <span className="text-purple-600 dark:text-purple-400 font-semibold">AI</span>. I transform complex challenges into elegant, high-performance applications.
            </motion.p>
          </motion.div>

          {/* Enhanced Tech Stack - 2025 Trend: Interactive Elements */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              { name: 'React', color: 'from-blue-500 to-cyan-500' },
              { name: 'Next.js', color: 'from-gray-700 to-gray-900' },
              { name: 'TypeScript', color: 'from-blue-600 to-blue-700' },
              { name: 'Node.js', color: 'from-green-500 to-green-600' },
              { name: 'Python', color: 'from-yellow-500 to-orange-500' },
              { name: 'AI/ML', color: 'from-purple-500 to-pink-500' }
            ].map((skill) => (
              <motion.span 
                key={skill.name} 
                whileHover={{ scale: 1.05, y: -2 }}
                className={`relative px-4 py-2 bg-gradient-to-r ${skill.color} text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 cursor-default group`}
              >
                <span className="relative z-10">{skill.name}</span>
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-full blur opacity-0 group-hover:opacity-75 transition-opacity duration-300`} />
              </motion.span>
            ))}
          </motion.div>

          {/* Enhanced Buttons - 2025 Trend: Glow Effects on Interactive Elements */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button asChild size="lg" className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group">
                <a href="#projects">
                  <Briefcase className="mr-2 h-5 w-5" />
                  Explore My Work
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-md blur opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button asChild size="lg" variant="outline" className="border-2 border-gradient-to-r from-blue-500 to-purple-500 text-primary hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-950 dark:hover:to-purple-950 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Discuss Your Project
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center gap-4 pt-2"
          >
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" size="icon" className="rounded-full border-primary/30 text-muted-foreground hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-950 dark:hover:to-purple-950 hover:text-primary hover:border-blue-500 transition-all duration-300">
                <a href="https://github.com/dejoski" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" size="icon" className="rounded-full border-primary/30 text-muted-foreground hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-950 dark:hover:to-purple-950 hover:text-primary hover:border-blue-500 transition-all duration-300">
                <a href="https://linkedin.com/in/dejanstajic" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" size="lg" className="border-primary/30 text-muted-foreground hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 dark:hover:from-green-950 dark:hover:to-emerald-950 hover:text-primary hover:border-green-500 font-semibold transition-all duration-300">
                <a href="/Dejan_Stajic_Resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.a 
              href="#about" 
              className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group"
              whileHover={{ y: -2 }}
            >
              <span className="text-sm mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Scroll down</span>
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowDown className="h-4 w-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 