'use client'

import * as React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Briefcase, Play, Image as ImageIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const projects = [
  {
    id: 'debugdaily',
    title: 'DebugDaily - AI Coding Challenges',
    description: 'A platform offering daily coding problems with AI-powered hints and detailed explanations to accelerate learning and problem-solving skills.',
    image: '/projects/debugdaily.jpg',
    iframeUrl: '/debugdaily',
    technologies: ['Next.js', 'TypeScript', 'OpenAI API', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/dejanstajic/debugdaily',
    liveUrl: '/debugdaily',
    keyFeatures: [
      'Real code execution & testing',
      'AI-powered hints & solutions',
      'Progress tracking & streaks',
    ],
  },
  {
    id: 'ai-content-generator',
    title: 'AI Content Generation Suite',
    description: 'A powerful suite of AI tools for generating diverse, high-quality content including articles, summaries, and creative text formats using advanced language models.',
    image: '/projects/ai-content.jpg',
    iframeUrl: '/ai-tools',
    technologies: ['React', 'TypeScript', 'AI Integration', 'Content Generation', 'Tailwind CSS'],
    githubUrl: 'https://github.com/dejanstajic/ai-content',
    liveUrl: '/ai-tools',
    keyFeatures: [
      'Multiple content generation modes',
      'Real-time AI content creation',
      'Generation history & management',
    ],
  },
  {
    id: 'ecommerce-platform',
    title: 'Modern E-Commerce Platform',
    description: 'A full-stack e-commerce solution featuring a sleek user interface, robust backend, secure payment integration, and comprehensive product management.',
    image: '/projects/ecommerce.jpg',
    iframeUrl: '/web-apps',
    technologies: ['Next.js', 'React State Management', 'Shopping Cart', 'Checkout Flow', 'Tailwind CSS'],
    githubUrl: 'https://github.com/dejanstajic/ecommerce',
    liveUrl: '/web-apps',
    keyFeatures: [
      'Full shopping cart functionality',
      'Product search & filtering',
      'Complete checkout process',
    ],
  },
]

export function ProjectsSection() {
  const [showLivePreviews, setShowLivePreviews] = useState(true)
  const [loadedIframes, setLoadedIframes] = useState<Set<string>>(new Set())

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay },
    }),
  }

  const handleIframeLoad = (projectId: string) => {
    setLoadedIframes(prev => new Set([...prev, projectId]))
  }

  return (
    <section id="projects" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A selection of my work demonstrating practical application of modern technologies to solve real-world challenges and deliver value.
          </p>
          
          {/* Live Preview Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-sm text-muted-foreground">Preview Mode:</span>
            <div className="flex items-center gap-2 bg-secondary/50 rounded-lg p-1">
              <button
                onClick={() => setShowLivePreviews(false)}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all",
                  !showLivePreviews 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <ImageIcon className="h-4 w-4" />
                Images
              </button>
              <button
                onClick={() => setShowLivePreviews(true)}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all",
                  showLivePreviews 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Play className="h-4 w-4" />
                Live Apps
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index * 0.1}
              initial="hidden"
              whileInView="visible"
              variants={itemVariants}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className="h-full bg-card shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden border-border group">
                <CardHeader className="p-0">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary">
                    {showLivePreviews ? (
                      <>
                        {/* Loading indicator */}
                        {!loadedIframes.has(project.id) && (
                          <div className="absolute inset-0 flex items-center justify-center bg-secondary z-10">
                            <div className="flex flex-col items-center gap-2">
                              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                              <span className="text-sm text-muted-foreground">Loading live app...</span>
                            </div>
                          </div>
                        )}
                        
                        {/* Live iframe preview */}
                        <iframe
                          src={project.iframeUrl}
                          className="w-full h-full border-0 scale-75 origin-top-left"
                          style={{ 
                            width: '133.33%', 
                            height: '133.33%',
                            pointerEvents: 'none' // Prevent interaction in preview
                          }}
                          onLoad={() => handleIframeLoad(project.id)}
                          title={`${project.title} Preview`}
                        />
                        
                        {/* Overlay for interaction */}
                        <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <div className="bg-black/80 text-white px-4 py-2 rounded-lg text-sm font-medium">
                            Click to interact with live app
                          </div>
                        </div>
                      </>
                    ) : (
                      // Fallback to image or placeholder
                      project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-secondary flex items-center justify-center">
                          <Briefcase className="h-16 w-16 text-muted-foreground/50" />
                        </div>
                      )
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-5 md:p-6 flex flex-col flex-grow">
                  <CardTitle className="mb-2 text-xl text-foreground leading-tight">{project.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  {project.keyFeatures && project.keyFeatures.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">Key Features:</h4>
                      <ul className="list-disc list-inside space-y-0.5">
                        {project.keyFeatures.map((feature) => (
                          <li key={feature} className="text-xs text-muted-foreground">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">Technologies:</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-border/60 flex gap-3">
                    <Button asChild size="sm" className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1.5" />
                        {showLivePreviews ? 'Open Full App' : 'Live Demo'}
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="flex-1 border-primary/50 text-primary hover:bg-primary/5">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1.5" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          custom={projects.length * 0.1 + 0.2}
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16 md:mt-20"
        >
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button variant="outline" size="lg" className="border-primary/60 text-primary hover:bg-primary/5 hover:text-primary font-semibold shadow-sm">
              View More on GitHub <Github className="h-4 w-4 ml-2" />
            </Button>
            {showLivePreviews && (
              <p className="text-sm text-muted-foreground">
                ✨ You're viewing live, interactive previews of real applications
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 