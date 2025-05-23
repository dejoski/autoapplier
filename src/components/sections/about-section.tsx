'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Globe, Lightbulb } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const skills = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'React, Next.js, TypeScript, Tailwind CSS',
    color: 'text-blue-500',
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Node.js, Python, PostgreSQL, MongoDB',
    color: 'text-green-500',
  },
  {
    icon: Globe,
    title: 'Full-Stack Solutions',
    description: 'End-to-end application development',
    color: 'text-purple-500',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Creative solutions to complex challenges',
    color: 'text-yellow-500',
  },
]

export function AboutSection() {
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
    <section id="about" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate full-stack developer with a focus on creating innovative solutions that drive real business value and exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Building the Future, One Line at a Time
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                With a strong foundation in modern web technologies and a passion for clean, efficient code, 
                I specialize in creating full-stack applications that solve real-world problems.
              </p>
              <p>
                My approach combines technical expertise with user-centered design thinking, ensuring that 
                every project not only functions flawlessly but also delivers an exceptional user experience.
              </p>
              <p>
                From concept to deployment, I enjoy the entire development lifecycle and take pride in 
                writing maintainable, scalable code that stands the test of time.
              </p>
            </div>
          </motion.div>

          <motion.div
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((skill) => (
              <Card key={skill.title} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <skill.icon className={`h-8 w-8 ${skill.color} mb-2`} />
                  <CardTitle className="text-lg text-foreground">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 