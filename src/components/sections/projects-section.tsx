'use client'

import * as React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Briefcase } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const projects = [
  {
    id: 'debugdaily',
    title: 'DebugDaily - AI Coding Challenges',
    description: 'A platform offering daily coding problems with AI-powered hints and detailed explanations to accelerate learning and problem-solving skills.',
    image: '/projects/debugdaily.jpg',
    technologies: ['Next.js', 'TypeScript', 'OpenAI API', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/dejanstajic/debugdaily',
    liveUrl: '/debugdaily',
    keyFeatures: [
      'AI-generated hints & solutions',
      'Progress tracking & streaks',
      'Community discussions',
    ],
  },
  {
    id: 'ai-content-generator',
    title: 'AI Content Generation Suite',
    description: 'A powerful suite of AI tools for generating diverse, high-quality content including articles, summaries, and creative text formats using advanced language models.',
    image: '/projects/ai-content.jpg',
    technologies: ['React', 'Python', 'FastAPI', 'OpenAI GPT-4', 'Docker', 'AWS'],
    githubUrl: 'https://github.com/dejanstajic/ai-content',
    liveUrl: '/ai-tools',
    keyFeatures: [
      'Multiple content generation modes',
      'Customizable output parameters',
      'Scalable cloud architecture',
    ],
  },
  {
    id: 'ecommerce-platform',
    title: 'Modern E-Commerce Platform',
    description: 'A full-stack e-commerce solution featuring a sleek user interface, robust backend, secure payment integration, and comprehensive product management.',
    image: '/projects/ecommerce.jpg',
    technologies: ['Next.js', 'Stripe API', 'MongoDB', 'Node.js', 'Tailwind CSS', 'Redux'],
    githubUrl: 'https://github.com/dejanstajic/ecommerce',
    liveUrl: '/web-apps',
    keyFeatures: [
      'Secure Stripe payment gateway',
      'Advanced product filtering & search',
      'Admin dashboard for management',
    ],
  },
]

export function ProjectsSection() {
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
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of my work demonstrating practical application of modern technologies to solve real-world challenges and deliver value.
          </p>
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
              <Card className="h-full bg-card shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden border-border">
                <CardHeader className="p-0">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    {project.image ? (
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
                        Live Demo
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
          <Button variant="outline" size="lg" className="border-primary/60 text-primary hover:bg-primary/5 hover:text-primary font-semibold shadow-sm">
            View More on GitHub <Github className="h-4 w-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 