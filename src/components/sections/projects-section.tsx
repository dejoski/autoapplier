'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Star } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const projects = [
  {
    title: 'DebugDaily',
    description: 'Daily coding challenges and solutions platform with AI-powered hints and explanations.',
    image: '/projects/debugdaily.jpg',
    technologies: ['Next.js', 'TypeScript', 'OpenAI API', 'PostgreSQL'],
    githubUrl: 'https://github.com/dejanstajic/debugdaily',
    liveUrl: '/debugdaily',
    featured: true,
  },
  {
    title: 'AI Content Generator',
    description: 'Powerful AI tool for generating high-quality content using advanced language models.',
    image: '/projects/ai-content.jpg',
    technologies: ['React', 'Python', 'FastAPI', 'OpenAI'],
    githubUrl: 'https://github.com/dejanstajic/ai-content',
    liveUrl: '/ai-tools',
    featured: true,
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with modern UI and robust backend architecture.',
    image: '/projects/ecommerce.jpg',
    technologies: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind'],
    githubUrl: 'https://github.com/dejanstajic/ecommerce',
    liveUrl: '/web-apps',
    featured: true,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work, featuring innovative solutions and cutting-edge technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group border border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-xl">
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                      <Star className="h-12 w-12 text-blue-400" />
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                      <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                      <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2 text-gray-900">{project.title}</CardTitle>
                  <p className="text-gray-600 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1 bg-blue-600 text-white hover:bg-blue-700">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50" size="lg">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 