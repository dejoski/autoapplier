'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github, Globe, Code, Zap, Users, Star } from 'lucide-react'

interface WebApp {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  category: string
  status: 'Live' | 'In Development' | 'Completed'
  featured: boolean
  liveUrl?: string
  githubUrl?: string
  stats: {
    users?: string
    rating?: number
    downloads?: string
  }
}

const webApps: WebApp[] = [
  {
    id: '1',
    title: 'TaskFlow Pro',
    description: 'Advanced project management platform with real-time collaboration',
    longDescription: 'A comprehensive project management solution built with Next.js and real-time features. Includes team collaboration, task tracking, time management, and advanced analytics.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&q=80',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Socket.io', 'Tailwind CSS'],
    category: 'Productivity',
    status: 'Live',
    featured: true,
    liveUrl: 'https://taskflow-pro.demo.com',
    githubUrl: 'https://github.com/dejan/taskflow-pro',
    stats: {
      users: '2.5K+',
      rating: 4.8,
      downloads: '15K+'
    }
  },
  {
    id: '2',
    title: 'EcoTracker',
    description: 'Carbon footprint tracking and sustainability analytics dashboard',
    longDescription: 'Environmental impact tracking application that helps users monitor their carbon footprint, set sustainability goals, and track progress with beautiful data visualizations.',
    image: 'https://images.unsplash.com/photo-1569163139394-de44cb5894c6?w=600&h=400&fit=crop&q=80',
    technologies: ['React', 'D3.js', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
    category: 'Environment',
    status: 'Live',
    featured: true,
    liveUrl: 'https://ecotracker.demo.com',
    githubUrl: 'https://github.com/dejan/ecotracker',
    stats: {
      users: '1.8K+',
      rating: 4.6,
      downloads: '8K+'
    }
  },
  {
    id: '3',
    title: 'CodeReview AI',
    description: 'AI-powered code review and quality analysis platform',
    longDescription: 'Intelligent code review platform that uses machine learning to analyze code quality, suggest improvements, and automate the review process for development teams.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&q=80',
    technologies: ['Python', 'FastAPI', 'React', 'TensorFlow', 'Docker', 'Redis'],
    category: 'Developer Tools',
    status: 'In Development',
    featured: true,
    githubUrl: 'https://github.com/dejan/codereview-ai',
    stats: {
      users: '500+',
      rating: 4.9
    }
  },
  {
    id: '4',
    title: 'FinanceFlow',
    description: 'Personal finance management with investment tracking',
    longDescription: 'Comprehensive personal finance application with expense tracking, budget planning, investment portfolio management, and financial goal setting.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&q=80',
    technologies: ['Vue.js', 'Nuxt.js', 'Supabase', 'Stripe API', 'Plaid API'],
    category: 'Finance',
    status: 'Live',
    featured: false,
    liveUrl: 'https://financeflow.demo.com',
    githubUrl: 'https://github.com/dejan/financeflow',
    stats: {
      users: '3.2K+',
      rating: 4.7,
      downloads: '12K+'
    }
  },
  {
    id: '5',
    title: 'HealthHub',
    description: 'Telemedicine platform with appointment scheduling',
    longDescription: 'Modern telemedicine platform connecting patients with healthcare providers, featuring video consultations, appointment scheduling, and health record management.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&q=80',
    technologies: ['Next.js', 'WebRTC', 'Prisma', 'PostgreSQL', 'Stripe', 'Twilio'],
    category: 'Healthcare',
    status: 'Completed',
    featured: false,
    githubUrl: 'https://github.com/dejan/healthhub',
    stats: {
      users: '1.5K+',
      rating: 4.5
    }
  },
  {
    id: '6',
    title: 'LearnSpace',
    description: 'Interactive online learning platform with live sessions',
    longDescription: 'Educational platform offering interactive courses, live sessions, progress tracking, and collaborative learning features for students and educators.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&q=80',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'AWS S3', 'Zoom API'],
    category: 'Education',
    status: 'Live',
    featured: false,
    liveUrl: 'https://learnspace.demo.com',
    githubUrl: 'https://github.com/dejan/learnspace',
    stats: {
      users: '4.1K+',
      rating: 4.8,
      downloads: '20K+'
    }
  }
]

const categories = ['All', 'Productivity', 'Environment', 'Developer Tools', 'Finance', 'Healthcare', 'Education']

export default function WebAppsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedApp, setSelectedApp] = useState<WebApp | null>(null)

  const filteredApps = selectedCategory === 'All' 
    ? webApps 
    : webApps.filter(app => app.category === selectedCategory)

  const featuredApps = webApps.filter(app => app.featured)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-500/10 text-green-600 border-green-500/20'
      case 'In Development': return 'bg-blue-500/10 text-blue-600 border-blue-500/20'
      case 'Completed': return 'bg-purple-500/10 text-purple-600 border-purple-500/20'
      default: return 'bg-gray-500/10 text-gray-600 border-gray-500/20'
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Globe className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Web Applications
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of full-stack web applications I've built, featuring modern technologies and solving real-world problems.
          </p>
        </div>

        {/* Featured Apps */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Star className="h-6 w-6 text-primary" />
            Featured Applications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredApps.map((app) => (
              <Card key={app.id} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={app.image} 
                    alt={app.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={getStatusColor(app.status)}>
                      {app.status}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {app.title}
                    </CardTitle>
                    <div className="flex gap-2">
                      {app.liveUrl && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={app.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {app.githubUrl && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={app.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <CardDescription>{app.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {app.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {app.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{app.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                    
                    {app.stats && (
                      <div className="flex justify-between text-sm text-muted-foreground">
                        {app.stats.users && (
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {app.stats.users}
                          </div>
                        )}
                        {app.stats.rating && (
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            {app.stats.rating}
                          </div>
                        )}
                      </div>
                    )}
                    
                    <Button 
                      className="w-full" 
                      onClick={() => setSelectedApp(app)}
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* All Apps Grid */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Code className="h-6 w-6 text-primary" />
            All Applications
            <span className="text-sm font-normal text-muted-foreground ml-2">
              ({filteredApps.length} {filteredApps.length === 1 ? 'app' : 'apps'})
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApps.map((app) => (
              <Card key={app.id} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={app.image} 
                    alt={app.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className={getStatusColor(app.status)} variant="outline">
                      {app.status}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {app.title}
                    </CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {app.category}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm">{app.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {app.technologies.slice(0, 2).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {app.technologies.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{app.technologies.length - 2}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        className="flex-1" 
                        onClick={() => setSelectedApp(app)}
                      >
                        Details
                      </Button>
                      {app.liveUrl && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={app.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {app.githubUrl && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={app.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* App Detail Modal */}
        {selectedApp && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl">{selectedApp.title}</CardTitle>
                    <CardDescription className="text-lg mt-2">
                      {selectedApp.description}
                    </CardDescription>
                  </div>
                  <Button variant="outline" onClick={() => setSelectedApp(null)}>
                    ✕
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <img 
                    src={selectedApp.image} 
                    alt={selectedApp.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  
                  <div className="flex gap-4 items-center">
                    <Badge className={getStatusColor(selectedApp.status)}>
                      {selectedApp.status}
                    </Badge>
                    <Badge variant="secondary">{selectedApp.category}</Badge>
                    {selectedApp.stats?.rating && (
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{selectedApp.stats.rating}</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedApp.longDescription}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedApp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {selectedApp.stats && (
                    <div>
                      <h4 className="font-semibold mb-3">Statistics</h4>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        {selectedApp.stats.users && (
                          <div>
                            <div className="text-2xl font-bold text-primary">{selectedApp.stats.users}</div>
                            <div className="text-sm text-muted-foreground">Users</div>
                          </div>
                        )}
                        {selectedApp.stats.rating && (
                          <div>
                            <div className="text-2xl font-bold text-primary">{selectedApp.stats.rating}</div>
                            <div className="text-sm text-muted-foreground">Rating</div>
                          </div>
                        )}
                        {selectedApp.stats.downloads && (
                          <div>
                            <div className="text-2xl font-bold text-primary">{selectedApp.stats.downloads}</div>
                            <div className="text-sm text-muted-foreground">Downloads</div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex gap-3 pt-4">
                    {selectedApp.liveUrl && (
                      <Button asChild>
                        <a href={selectedApp.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Live App
                        </a>
                      </Button>
                    )}
                    {selectedApp.githubUrl && (
                      <Button variant="outline" asChild>
                        <a href={selectedApp.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          View Source
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
} 