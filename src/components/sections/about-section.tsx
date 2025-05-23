'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Code, Zap, Users, Award } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'] },
  { category: 'AI/ML', items: ['TensorFlow', 'PyTorch', 'OpenAI API', 'Langchain', 'Vector DBs'] },
  { category: 'DevOps', items: ['Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Kubernetes'] },
]

const achievements = [
  {
    icon: Code,
    title: '50+ Projects',
    description: 'Successfully delivered web applications and AI solutions',
  },
  {
    icon: Zap,
    title: '99% Uptime',
    description: 'Reliable and performant applications',
  },
  {
    icon: Users,
    title: '100K+ Users',
    description: 'Applications serving users worldwide',
  },
  {
    icon: Award,
    title: '5+ Years',
    description: 'Experience in full-stack development',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with expertise in modern web technologies and AI integration.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Personal Story */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle>My Journey</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Started as a curious developer fascinated by the endless possibilities of code. 
                  Over the years, I've evolved into a full-stack engineer with a special passion 
                  for AI and machine learning technologies.
                </p>
                <p className="text-gray-600">
                  I believe in writing clean, maintainable code and creating user experiences 
                  that are not just functional, but delightful.
                </p>
              </CardContent>
            </Card>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <achievement.icon className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                      <h3 className="font-semibold mb-1">{achievement.title}</h3>
                      <p className="text-xs text-gray-600">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <motion.div
                    key={skillGroup.category}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-3"
                  >
                    <h3 className="font-semibold text-blue-600">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 