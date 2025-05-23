"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarDays, Clock, ExternalLink, ChevronRight } from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  publishedAt: string
  readTime: string
  tags: string[]
  featured: boolean
}

// Sample blog posts - in production, these would come from a CMS or API
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable Next.js Applications with TypeScript',
    excerpt: 'Learn how to architect modern web applications using Next.js 14, TypeScript, and best practices for scalability and maintainability.',
    content: '',
    publishedAt: '2024-01-15',
    readTime: '8 min read',
    tags: ['Next.js', 'TypeScript', 'React', 'Web Development'],
    featured: true
  },
  {
    id: '2',
    title: 'AI Integration in Modern Web Applications',
    excerpt: 'Exploring practical approaches to integrating AI and machine learning capabilities into web applications with real-world examples.',
    content: '',
    publishedAt: '2024-01-10',
    readTime: '12 min read',
    tags: ['AI', 'Machine Learning', 'API Integration', 'JavaScript'],
    featured: true
  },
  {
    id: '3',
    title: 'Optimizing Performance in React Applications',
    excerpt: 'Deep dive into React performance optimization techniques including memoization, lazy loading, and bundle splitting strategies.',
    content: '',
    publishedAt: '2024-01-05',
    readTime: '10 min read',
    tags: ['React', 'Performance', 'Optimization', 'JavaScript'],
    featured: false
  },
  {
    id: '4',
    title: 'The Future of Web Development: Trends for 2024',
    excerpt: 'Analyzing emerging trends in web development including WebAssembly, edge computing, and the evolution of JavaScript frameworks.',
    content: '',
    publishedAt: '2024-01-01',
    readTime: '6 min read',
    tags: ['Web Development', 'Trends', 'Technology', 'Future'],
    featured: false
  }
]

export function BlogSection() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  const PostCard = ({ post, isFeatured }: { post: BlogPost, isFeatured?: boolean }) => (
    <Card key={post.id} className="group flex flex-col h-full bg-card hover:shadow-xl transition-shadow duration-300 border border-border hover:border-primary/30">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
          <CalendarDays className="w-3.5 h-3.5" />
          <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
          <Clock className="w-3.5 h-3.5 ml-1" />
          <span>{post.readTime}</span>
        </div>
        <CardTitle className={`text-lg font-semibold group-hover:text-primary transition-colors duration-300 ${isFeatured ? 'md:text-xl' : ''}`}>
          <a href="#" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
            {post.title}
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className={`text-sm text-muted-foreground mb-4 ${isFeatured ? 'line-clamp-3' : 'line-clamp-2'}`}>
          {post.excerpt}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs font-medium">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <div className="p-6 pt-0 mt-auto">
        <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all duration-300 group-hover:underline">
          Read More
          <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </a>
      </div>
    </Card>
  )

  return (
    <div className="space-y-16">
      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Featured Articles
          </h2>
          <div className="grid gap-6 md:gap-8 md:grid-cols-1 lg:grid-cols-2">
            {featuredPosts.map((post) => (
              <PostCard post={post} key={post.id} isFeatured />
            ))}
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-foreground">
          All Articles
        </h2>
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {regularPosts.map((post) => (
            <PostCard post={post} key={post.id} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 px-6 bg-secondary/50 rounded-xl">
        <h3 className="text-2xl font-bold mb-3 text-foreground">
          Stay Updated
        </h3>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Subscribe to get notified about new articles on web development, AI, and tech trends.
        </p>
        <div className="flex justify-center">
          <input type="email" placeholder="Enter your email" className="px-4 py-2.5 rounded-l-md border border-border focus:ring-2 focus:ring-primary focus:outline-none w-full max-w-xs bg-background" />
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-r-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  )
} 