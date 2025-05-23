"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarDays, Clock, ExternalLink } from 'lucide-react'

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

  return (
    <div className="space-y-12">
      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Featured Articles
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-blue-500/50">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <CalendarDays className="w-4 h-4" />
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    <Clock className="w-4 h-4 ml-2" />
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <button className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all duration-200 font-medium">
                    Read More
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
          Recent Articles
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {regularPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <CalendarDays className="w-4 h-4" />
                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                </div>
                <CardTitle className="text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 text-sm">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {post.tags.length > 2 && (
                    <Badge variant="secondary" className="text-xs">
                      +{post.tags.length - 2}
                    </Badge>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {post.readTime}
                  </span>
                  <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                    Read →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 px-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl">
        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Want to Stay Updated?
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
          Get notified when I publish new articles about web development, AI, and technology.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
          Subscribe to Newsletter
        </button>
      </section>
    </div>
  )
} 