'use client'

import * as React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function HeroSection() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center space-y-8">
            {/* Profile Image Placeholder */}
            <div className="flex justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  {/* Placeholder for image to prevent layout shift */}
                  <div className="w-full h-full rounded-full bg-gray-200"></div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900">
                Hi, I'm <span className="text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text">Dejan Stajic</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
                Full Stack Developer & AI Enthusiast building modern web applications
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">React</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Next.js</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">TypeScript</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Node.js</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">AI/ML</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Python</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            <div className="flex justify-center gap-4">
              <Button className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600">
                <Github className="h-5 w-5" />
              </Button>
              <Button className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600">
                <Mail className="h-5 w-5" />
              </Button>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="flex flex-col items-center text-gray-400">
                <span className="text-sm mb-2">Scroll down</span>
                <ArrowDown className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center space-y-8">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-lg">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                <Image
                  src="/profile pic.png"
                  alt="Dejan Stajic Profile Picture"
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
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900">
              Hi, I'm <span className="text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text">Dejan Stajic</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
              Full Stack Developer & AI Enthusiast building modern web applications
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">React</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Next.js</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">TypeScript</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Node.js</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">AI/ML</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Python</span>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center gap-4"
          >
            <Button className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600">
              <Github className="h-5 w-5" />
            </Button>
            <Button className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600">
              <Mail className="h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center text-gray-400">
              <span className="text-sm mb-2">Scroll down</span>
              <ArrowDown className="h-4 w-4" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 