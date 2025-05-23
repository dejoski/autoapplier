'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Code, Zap, Users, Award, Briefcase, Brain, TrendingUp, ShieldCheck } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const uspItems = [
  {
    icon: Brain,
    title: 'AI-Powered Innovation',
    description: 'Leveraging AI/ML to build smarter, more efficient, and cutting-edge applications.',
  },
  {
    icon: Briefcase,
    title: 'Full-Stack Expertise',
    description: 'Seamless development from elegant front-end interfaces to robust back-end systems.',
  },
  {
    icon: Users,
    title: 'User-Centric Solutions',
    description: 'Crafting intuitive and engaging experiences that delight users and achieve business goals.',
  },
  {
    icon: TrendingUp,
    title: 'Results-Driven Approach',
    description: 'Focused on delivering tangible outcomes, measurable success, and real-world impact.',
  },
]

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML5', 'CSS3'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'Express.js', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis'] },
  { category: 'AI/ML', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI API', 'Langchain', 'Vector DBs'] },
  { category: 'DevOps & Cloud', items: ['Docker', 'Kubernetes', 'AWS', 'Vercel', 'GitHub Actions', 'CI/CD'] },
]

const achievements = [
  {
    icon: Code,
    title: '50+ Projects Delivered',
    description: 'Successfully designed, developed, and deployed a wide range of web applications and AI solutions.',
  },
  {
    icon: ShieldCheck,
    title: 'High-Performance Applications',
    description: 'Building reliable, scalable, and performant systems optimized for speed and efficiency.',
  },
  {
    icon: Users,
    title: '100K+ User Impact',
    description: 'Developed applications that have reached and served a significant global user base.',
  },
  {
    icon: Award,
    title: '5+ Years of Expertise',
    description: 'Dedicated experience in full-stack development, constantly learning and evolving with technology.',
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
    <section id="about" className="py-20 md:py-28 bg-secondary">
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
            I specialize in transforming ideas into impactful digital experiences and intelligent solutions, focusing on quality, performance, and user satisfaction.
          </p>
        </motion.div>

        {/* Why Work With Me? (USPs) */}
        <div className="mb-16 md:mb-20">
          <motion.h3 
            initial="hidden" 
            whileInView="visible" 
            variants={itemVariants} 
            viewport={{ once: true, amount: 0.3 }}
            className="text-2xl sm:text-3xl font-semibold text-foreground text-center mb-10 md:mb-12"
          >
            Why Partner With Me?
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {uspItems.map((item, index) => (
              <motion.div
                key={item.title}
                custom={index * 0.1 + 0.1}
                initial="hidden"
                whileInView="visible"
                variants={itemVariants}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="h-full bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="items-center text-center pb-3">
                    <div className="p-3 rounded-full bg-accent/10 mb-3">
                       <item.icon className="h-7 w-7 text-accent" />
                    </div>
                    <CardTitle className="text-lg text-foreground">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* My Approach / Philosophy */}
          <motion.div
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <Card className="bg-card shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">My Development Philosophy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  My approach begins with a deep dive into your objectives, ensuring every line of code serves a purpose. I champion clean, scalable architecture and user-centric design to build solutions that are not just functional, but also robust, maintainable, and a pleasure to use.
                </p>
                <p className="text-muted-foreground">
                  I thrive on solving complex problems and continuously explore new technologies to deliver innovative and future-proof results. Collaboration and transparent communication are key to how I work, ensuring we build something truly impactful together.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills & Achievements Merged */}
          <motion.div
            custom={0.3}
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-3"
          >
            <Card className="bg-card shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Core Competencies & Milestones</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Technical Skills */}
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-4">Technical Skillset</h4>
                  {skills.map((skillGroup) => (
                    <div key={skillGroup.category} className="mb-4 last:mb-0">
                      <h5 className="text-md font-medium text-accent mb-2">{skillGroup.category}</h5>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-full shadow-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Achievements / Key Metrics */}
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-6">Key Metrics & Achievements</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
                    {achievements.map((achievement) => (
                      <div key={achievement.title} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-1">
                          <achievement.icon className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-foreground">{achievement.title}</h5>
                          <p className="text-sm text-muted-foreground leading-snug">{achievement.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 