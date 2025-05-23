import { BlogSection } from '@/components/sections/blog-section'

export const metadata = {
  title: 'Blog - Dejan Stajic',
  description: 'Technical articles, insights, and thoughts on modern web development',
}

export default function BlogPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on modern web development, AI, and technology trends
          </p>
        </div>
        <BlogSection />
      </div>
    </div>
  )
} 