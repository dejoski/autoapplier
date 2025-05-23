'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink, CheckCircle2 } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const experiences = [
  {
    company: 'Currently Available',
    position: 'Senior Full Stack Developer',
    location: 'Remote',
    startDate: '2024',
    endDate: 'Present',
    current: true,
    description: 'Actively seeking challenging and rewarding opportunities to leverage expertise in building innovative web applications and AI-powered solutions. Ready to contribute to impactful projects and collaborative teams.',
    achievements: [
      'Proficient in modern React, Next.js, and end-to-end TypeScript development.',
      'Experienced in AI integration, machine learning model deployment, and API development.',
      'Skilled in designing scalable full-stack architectures and ensuring robust, performant systems.',
      'Adept at agile methodologies, problem-solving, and delivering high-quality code.',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AI/ML', 'Cloud Platforms', 'DevOps'],
  },
]

export function ExperienceSection() {
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
    <section id="experience" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Professional Journey
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Highlighting key roles, responsibilities, and accomplishments in driving innovation and delivering impactful technology solutions.
          </p>
        </motion.div>

        {experiences && experiences.length > 0 ? (
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-px -ml-px" />

            <div className="space-y-12 md:space-y-16">
              {experiences.map((experience, index) => (
                <motion.div
                  key={`${experience.company}-${experience.startDate}`}
                  custom={index * 0.1}
                  initial="hidden"
                  whileInView="visible"
                  variants={itemVariants}
                  viewport={{ once: true, amount: 0.2 }}
                  className="relative flex items-start md:even:flex-row-reverse group"
                >
                  <div className="absolute left-4 md:left-1/2 w-3.5 h-3.5 bg-accent rounded-full transform -translate-x-1/2 z-10 border-4 border-secondary group-hover:scale-110 transition-transform" />

                  <div className="w-full md:w-[calc(50%-2rem)] ml-10 md:ml-0 md:group-even:ml-auto md:group-odd:mr-auto">
                    <Card className="bg-card shadow-lg hover:shadow-xl transition-all duration-300 border-border">
                      <CardHeader className="pb-4">
                        <div className="flex flex-col sm:flex-row items-start justify-between gap-2 mb-1">
                          <div>
                            <CardTitle className="text-xl text-foreground">{experience.position}</CardTitle>
                            <p className="text-primary font-semibold text-md">{experience.company}</p>
                          </div>
                          {experience.current && (
                            <span className="px-2.5 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full whitespace-nowrap mt-1 sm:mt-0">
                              Currently Available
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>{experience.startDate} - {experience.endDate}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{experience.description}</p>
                        
                        {experience.achievements && experience.achievements.length > 0 && (
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-foreground mb-1.5">Key Achievements:</h4>
                            <ul className="space-y-1">
                              {experience.achievements.map((achievement, i) => (
                                <li key={i} className="text-sm text-muted-foreground flex items-start">
                                  <CheckCircle2 className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {experience.technologies && experience.technologies.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold text-foreground mb-1.5">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-1.5">
                              {experience.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center text-muted-foreground py-10"
          >
            <p>Detailed professional experience will be updated here soon.</p>
             <p className="mt-2 text-sm">In the meantime, feel free to <a href="#contact" className="text-accent hover:underline">get in touch</a> or check out my <a href="/Dejan_Stajic_Resume.pdf" download className="text-accent hover:underline">resume</a>.</p>
          </motion.div>
        )}

        <motion.div
          custom={ (experiences?.length || 0) * 0.1 + 0.2}
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16 md:mt-20"
        >
          <Card className="bg-gradient-to-r from-primary via-primary to-accent/80 border-transparent text-primary-foreground max-w-2xl mx-auto shadow-xl hover:shadow-2xl transition-shadow">
            <CardContent className="p-6 sm:p-8 text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-3">Ready to Build Something Great?</h3>
              <p className="mb-6 text-sm sm:text-base text-primary-foreground/90">
                I'm actively seeking new challenges and opportunities to collaborate on innovative projects. Let's connect and discuss how I can help bring your vision to life.
              </p>
              <Button size="lg" className="bg-background hover:bg-background/90 text-accent font-bold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105" asChild>
                <a href="#contact">
                  Let's Work Together <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
} 