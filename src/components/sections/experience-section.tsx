'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const experiences = [
  {
    company: 'Currently Available',
    position: 'Senior Full Stack Developer',
    location: 'Remote',
    startDate: '2024',
    endDate: 'Present',
    current: true,
    description: 'Seeking exciting opportunities to build innovative web applications and AI-powered solutions.',
    achievements: [
      'Expertise in modern React and Next.js development',
      'AI integration and machine learning implementation',
      'Full-stack architecture and scalable solutions',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Python', 'AI/ML'],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to bring expertise in modern web development and AI solutions to your next project.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform md:-translate-x-0.5" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${experience.startDate}`}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-center md:flex-row"
              >
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-blue-600 rounded-full transform -translate-x-1/2 z-10" />

                <div className="w-full md:w-1/2 md:pr-8 ml-12 md:ml-0">
                  <Card className="border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg text-gray-900">{experience.position}</CardTitle>
                          <p className="text-blue-600 font-semibold">{experience.company}</p>
                        </div>
                        {experience.current && (
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                            Available
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{experience.startDate} - {experience.endDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{experience.description}</p>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm text-gray-900">Core Competencies:</h4>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-gray-600 flex items-start">
                              <span className="text-blue-600 mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-4">
                        <h4 className="font-semibold text-sm mb-2 text-gray-900">Technologies:</h4>
                        <div className="flex flex-wrap gap-1">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-blue-500 to-purple-600 border-transparent text-white max-w-2xl mx-auto shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-2">Ready for New Challenges</h3>
              <p className="mb-4">
                Let's collaborate on innovative projects and build something amazing together.
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center text-white hover:text-white/80 transition-colors"
                >
                  Let's work together
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
} 