import { GitHubStats } from '@/components/sections/github-stats'

export const metadata = {
  title: 'GitHub Stats - Dejan Stajic',
  description: 'Live GitHub statistics, contributions, and development activity',
}

export default function GitHubPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            GitHub Activity
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Live statistics and insights into my development journey and open source contributions
          </p>
        </div>
        <GitHubStats />
      </div>
    </div>
  )
} 