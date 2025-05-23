'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function ContactSection() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement actual form submission logic (e.g., API call to a backend or email service)
    console.log('Form submitted:', formData)
    // Potentially reset form: setFormData({ name: '', email: '', subject: '', message: '' })
    // Show a success/error message to the user
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (!mounted) {
    return <section id="contact" className="py-20 md:py-28 bg-background min-h-[80vh]"></section>;
  }
  
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay },
    }),
  }
  const itemVariantsRight = {
    hidden: { opacity: 0, x: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay },
    }),
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project idea, a question, or just want to connect? I'm here to listen and explore how we can create something remarkable together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-12">
          {/* Contact Info Card */}
          <motion.div
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="h-full bg-card shadow-xl border-border overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-sm">
                  Feel free to reach out through any of the channels below. I typically respond within 24-48 hours. For urgent matters, please indicate so in your message subject.
                </p>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a href="mailto:hello@dejanstajic.dev" className="text-sm text-muted-foreground hover:text-accent transition-colors break-all">hello@dejanstajic.dev</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Schedule a Call</p>
                      <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Let's find a time (Link coming soon)</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Location</p>
                      <p className="text-sm text-muted-foreground">Global (Remote First)</p>
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-border">
                  <p className="font-semibold mb-3 text-foreground">Connect on Social Media</p>
                  <div className="flex gap-3">
                    <Button asChild variant="outline" size="icon" className="rounded-md border-border/80 text-muted-foreground hover:bg-secondary hover:text-primary">
                      <a href="https://github.com/dejanstajic" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="icon" className="rounded-md border-border/80 text-muted-foreground hover:bg-secondary hover:text-primary">
                      <a href="https://linkedin.com/in/dejanstajic" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="icon" className="rounded-md border-border/80 text-muted-foreground hover:bg-secondary hover:text-primary">
                      <a href="https://twitter.com/dejanstajic" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter) Profile">
                        <Twitter className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            variants={itemVariantsRight}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="bg-card shadow-xl border-border overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5" suppressHydrationWarning>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g., Jane Doe"
                        suppressHydrationWarning
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        suppressHydrationWarning
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry, Collaboration, etc."
                      suppressHydrationWarning
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me more about your project or query..."
                      rows={5}
                      suppressHydrationWarning
                    />
                  </div>
                  <div className="pt-1">
                    <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-md">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 