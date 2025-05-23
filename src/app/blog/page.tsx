'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Calendar, Clock, User, Search, BookOpen, TrendingUp, Code, Lightbulb } from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishDate: string
  readTime: string
  category: string
  tags: string[]
  featured: boolean
  image: string
  views: number
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable React Applications with TypeScript',
    excerpt: 'Learn how to structure large React applications using TypeScript, best practices for component architecture, and advanced patterns for maintainable code.',
    content: 'Full article content would go here...',
    author: 'Dejan Stajic',
    publishDate: '2024-01-15',
    readTime: '8 min read',
    category: 'React',
    tags: ['React', 'TypeScript', 'Architecture', 'Best Practices'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop&q=80',
    views: 2847
  },
  {
    id: '2',
    title: 'The Future of Web Development: AI-Powered Coding Tools',
    excerpt: 'Exploring how AI is revolutionizing the development process, from code generation to automated testing and deployment strategies.',
    content: 'Full article content would go here...',
    author: 'Dejan Stajic',
    publishDate: '2024-01-10',
    readTime: '12 min read',
    category: 'AI',
    tags: ['AI', 'Development Tools', 'Future Tech', 'Automation'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&q=80',
    views: 3521
  },
  {
    id: '3',
    title: 'Mastering Next.js 14: App Router and Server Components',
    excerpt: 'Deep dive into Next.js 14 features including the new App Router, Server Components, and how to optimize performance for production applications.',
    content: 'Full article content would go here...',
    author: 'Dejan Stajic',
    publishDate: '2024-01-05',
    readTime: '10 min read',
    category: 'Next.js',
    tags: ['Next.js', 'Server Components', 'Performance', 'React'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop&q=80',
    views: 1923
  },
  {
    id: '4',
    title: 'Database Design Patterns for Modern Web Applications',
    excerpt: 'Comprehensive guide to database design patterns, from traditional SQL to modern NoSQL solutions and when to use each approach.',
    content: 'Full article content would go here...',
    author: 'Dejan Stajic',
    publishDate: '2023-12-28',
    readTime: '15 min read',
    category: 'Database',
    tags: ['Database', 'SQL', 'NoSQL', 'Architecture'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&q=80',
    views: 1456
  },
  {
    id: '5',
    title: 'Implementing Real-time Features with WebSockets and Socket.io',
    excerpt: 'Step-by-step guide to adding real-time functionality to your web applications using WebSockets, Socket.io, and modern deployment strategies.',
    content: 'Full article content would go here...',
    author: 'Dejan Stajic',
    publishDate: '2023-12-20',
    readTime: '11 min read',
    category: 'WebSockets',
    tags: ['WebSockets', 'Real-time', 'Socket.io', 'Node.js'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80',
    views: 2134
  },
  {
    id: '6',
    title: 'CSS Grid vs Flexbox: When to Use Which Layout Method',
    excerpt: 'Practical comparison of CSS Grid and Flexbox with real-world examples, performance considerations, and decision-making frameworks.',
    content: 'Full article content would go here...',
    author: 'Dejan Stajic',
    publishDate: '2023-12-15',
    readTime: '7 min read',
    category: 'CSS',
    tags: ['CSS', 'Grid', 'Flexbox', 'Layout'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&q=80',
    views: 1789
  }
]

const categories = ['All', 'React', 'AI', 'Next.js', 'Database', 'WebSockets', 'CSS']

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter(post => post.featured)
  const recentPosts = blogPosts.slice(0, 3)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tech Blog
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on modern web development, AI, and technology trends.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        {selectedCategory === 'All' && searchTerm === '' && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary/90 text-primary-foreground">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      {formatDate(post.publishDate)}
                      <Clock className="h-4 w-4 ml-2" />
                      {post.readTime}
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <User className="h-4 w-4" />
                          {post.author}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {post.views.toLocaleString()} views
                        </div>
                      </div>
                      
                      <Button 
                        className="w-full" 
                        onClick={() => setSelectedPost(post)}
                      >
                        Read Article
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Code className="h-6 w-6 text-primary" />
            {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
            <span className="text-sm font-normal text-muted-foreground ml-2">
              ({filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'})
            </span>
          </h2>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <Lightbulb className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or category filter.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {post.featured && (
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-primary/90 text-primary-foreground text-xs">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <Calendar className="h-3 w-3" />
                      {formatDate(post.publishDate)}
                      <Clock className="h-3 w-3 ml-2" />
                      {post.readTime}
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-2">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                        {post.tags.slice(0, 1).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {post.author}
                        </div>
                        <div>
                          {post.views.toLocaleString()} views
                        </div>
                      </div>
                      
                      <Button 
                        size="sm" 
                        className="w-full" 
                        onClick={() => setSelectedPost(post)}
                      >
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* Article Modal */}
        {selectedPost && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      {formatDate(selectedPost.publishDate)}
                      <Clock className="h-4 w-4 ml-2" />
                      {selectedPost.readTime}
                      <User className="h-4 w-4 ml-2" />
                      {selectedPost.author}
                    </div>
                    <CardTitle className="text-2xl mb-3">{selectedPost.title}</CardTitle>
                    <CardDescription className="text-lg">
                      {selectedPost.excerpt}
                    </CardDescription>
                  </div>
                  <Button variant="outline" onClick={() => setSelectedPost(null)}>
                    ✕
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <img 
                    src={selectedPost.image} 
                    alt={selectedPost.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  
                  <div className="flex gap-4 items-center">
                    <Badge variant="secondary">{selectedPost.category}</Badge>
                    {selectedPost.featured && (
                      <Badge className="bg-primary/90 text-primary-foreground">Featured</Badge>
                    )}
                    <div className="text-sm text-muted-foreground">
                      {selectedPost.views.toLocaleString()} views
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedPost.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedPost.content}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      This is a preview of the article content. In a real implementation, this would contain the full article with proper formatting, code examples, and detailed explanations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Newsletter Signup */}
        <section className="mt-20 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Stay Updated</CardTitle>
              <CardDescription>
                Get the latest articles and insights delivered to your inbox.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1"
                />
                <Button>Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                No spam, unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
} 