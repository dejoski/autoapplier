"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, GitFork, Users, Activity, Calendar, TrendingUp } from 'lucide-react'
import { useEffect, useState } from 'react'

interface GitHubStats {
  publicRepos: number
  followers: number
  following: number
  totalStars: number
  totalForks: number
  contributions: number
  streakCount: number
  mostUsedLanguages: { name: string; percentage: number; color: string }[]
}

export function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [loading, setLoading] = useState(true)

  // Sample data - in production, this would fetch from GitHub API
  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      setStats({
        publicRepos: 42,
        followers: 87,
        following: 52,
        totalStars: 234,
        totalForks: 89,
        contributions: 1247,
        streakCount: 23,
        mostUsedLanguages: [
          { name: 'TypeScript', percentage: 35, color: '#3178c6' },
          { name: 'JavaScript', percentage: 28, color: '#f7df1e' },
          { name: 'Python', percentage: 18, color: '#3776ab' },
          { name: 'CSS', percentage: 12, color: '#1572b6' },
          { name: 'Other', percentage: 7, color: '#6b7280' }
        ]
      })
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-6">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (!stats) return null

  const statCards = [
    {
      title: 'Public Repositories',
      value: stats.publicRepos,
      icon: <Activity className="w-5 h-5" />,
      description: 'Open source projects',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Total Stars',
      value: stats.totalStars,
      icon: <Star className="w-5 h-5" />,
      description: 'Across all repositories',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Followers',
      value: stats.followers,
      icon: <Users className="w-5 h-5" />,
      description: 'GitHub community',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Contributions',
      value: stats.contributions,
      icon: <TrendingUp className="w-5 h-5" />,
      description: 'This year',
      gradient: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Main Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
            <CardContent className="p-6 relative">
              <div className="flex items-center justify-between mb-2">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.gradient} text-white`}>
                  {stat.icon}
                </div>
                <Badge variant="secondary" className="text-xs">
                  Live
                </Badge>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {stat.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* GitHub Activity Graph Placeholder */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Contribution Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-32 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg flex items-center justify-center mb-4">
            <div className="text-center">
              <Activity className="w-8 h-8 mx-auto mb-2 text-gray-400" />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                GitHub contribution graph would appear here
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500 dark:text-gray-400">
              Current streak: <span className="font-semibold text-green-600 dark:text-green-400">{stats.streakCount} days</span>
            </span>
            <span className="text-gray-500 dark:text-gray-400">
              Total: {stats.contributions} contributions this year
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Language Statistics */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle>Most Used Languages</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {stats.mostUsedLanguages.map((lang, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: lang.color }}
                    />
                    <span className="font-medium text-gray-900 dark:text-white">
                      {lang.name}
                    </span>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400">
                    {lang.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full transition-all duration-500 ease-out"
                    style={{ 
                      backgroundColor: lang.color, 
                      width: `${lang.percentage}%` 
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Links */}
      <div className="flex flex-wrap gap-4 justify-center">
        <a 
          href="https://github.com/dejoski" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors font-medium"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
          View GitHub Profile
        </a>
        <a 
          href="https://github.com/dejoski?tab=repositories" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
        >
          <GitFork className="w-4 h-4" />
          Browse Repositories
        </a>
      </div>
    </div>
  )
} 