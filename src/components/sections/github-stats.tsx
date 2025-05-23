"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge' // Temporarily removed for now, will re-add
import { Star, GitFork, Users, Activity, Calendar, TrendingUp, ExternalLinkIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface GitHubStatsData {
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
  const [stats, setStats] = useState<GitHubStatsData | null>(null)
  const [loading, setLoading] = useState(true)

  // Sample data - in production, this would fetch from GitHub API
  useEffect(() => {
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
          { name: 'TypeScript', percentage: 45, color: '#3178c6' },
          { name: 'JavaScript', percentage: 30, color: '#f7df1e' },
          { name: 'Python', percentage: 15, color: '#3776ab' },
          { name: 'HTML/CSS', percentage: 7, color: '#e34c26' }, // Combined HTML/CSS for simplicity
          { name: 'Other', percentage: 3, color: '#A9A9A9' }
        ]
      })
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const StatCard = ({ title, value, icon, description, gradientColors }: {
    title: string, value: number | string, icon: React.ReactNode, description: string, gradientColors?: string[]
  }) => (
    <Card className="group bg-card hover:shadow-lg transition-shadow duration-300 border border-border hover:border-primary/30 flex flex-col h-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-1">
          <div className={`p-2 rounded-md bg-gradient-to-br ${gradientColors ? `${gradientColors[0]} ${gradientColors[1]}` : 'from-secondary to-muted'} text-primary-foreground`}>
            {icon}
          </div>
          {/* <Badge variant="outline" className="text-xs font-medium border-primary/50 text-primary">Live</Badge> */}
        </div>
        <p className="text-sm text-muted-foreground pt-1">
          {title}
        </p>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-3xl font-bold text-foreground">
          {value.toLocaleString()}
        </p>
      </CardContent>
      <div className="p-6 pt-0">
        <p className="text-xs text-muted-foreground">
          {description}
        </p>
      </div>
    </Card>
  );

  const LoadingSkeleton = () => (
    <Card className="animate-pulse bg-card border-border">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-1">
          <div className="w-10 h-10 bg-muted rounded-md"></div>
        </div>
        <div className="h-4 bg-muted rounded w-3/4 mt-1"></div>
      </CardHeader>
      <CardContent>
        <div className="h-8 bg-muted rounded w-1/2"></div>
      </CardContent>
      <div className="p-6 pt-0">
        <div className="h-3 bg-muted rounded w-full"></div>
      </div>
    </Card>
  )

  if (loading) {
    return (
      <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => <LoadingSkeleton key={i} />)}
      </div>
    )
  }

  if (!stats) return <p className="text-center text-muted-foreground">Could not load GitHub stats.</p>

  const statItems = [
    { title: 'Public Repositories', value: stats.publicRepos, icon: <Activity className="w-5 h-5" />, description: 'Open source projects', gradientColors: ['from-blue-500', 'to-cyan-500'] },
    { title: 'Total Stars Earned', value: stats.totalStars, icon: <Star className="w-5 h-5" />, description: 'Across all repositories', gradientColors: ['from-yellow-400', 'to-orange-500'] },
    { title: 'GitHub Followers', value: stats.followers, icon: <Users className="w-5 h-5" />, description: 'Community reach', gradientColors: ['from-purple-500', 'to-pink-500'] },
    { title: 'Yearly Contributions', value: stats.contributions, icon: <TrendingUp className="w-5 h-5" />, description: `In the last year (${stats.streakCount} day streak)`, gradientColors: ['from-green-500', 'to-emerald-500'] },
  ];

  return (
    <div className="space-y-8 md:space-y-10">
      {/* Main Stats Grid */}
      <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4">
        {statItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <StatCard {...item} />
          </motion.div>
        ))}
      </div>

      {/* Contribution Activity & Languages */}
      <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-card hover:shadow-lg transition-shadow duration-300 border-border hover:border-primary/30 h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-semibold text-foreground">
                <Calendar className="w-5 h-5 text-primary" />
                Contribution Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48 md:h-60 bg-muted/50 rounded-lg flex items-center justify-center mb-4 border border-dashed border-border">
                <div className="text-center p-4">
                  <Activity className="w-10 h-10 mx-auto mb-3 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-1">
                    Dynamic GitHub contribution graph (placeholder)
                  </p>
                  <p className="text-xs text-muted-foreground/80">
                    This area would typically display a visual representation of your commit history.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Current Streak: <span className="font-semibold text-green-600 dark:text-green-400">{stats.streakCount} days</span></span>
                <span>Total: <span className="font-semibold text-foreground">{stats.contributions}</span> contributions (last year)</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="bg-card hover:shadow-lg transition-shadow duration-300 border-border hover:border-primary/30 h-full">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">Most Used Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.mostUsedLanguages.map((lang, index) => (
                  <div key={index} className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-2.5 h-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: lang.color }}
                        />
                        <span className="font-medium text-foreground">
                          {lang.name}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {lang.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5">
                      <motion.div 
                        className="h-1.5 rounded-full"
                        style={{ backgroundColor: lang.color }}
                        initial={{ width: '0%' }}
                        animate={{ width: `${lang.percentage}%` }}
                        transition={{ duration: 0.8, delay: 0.5 + index * 0.1, ease: [0.25, 1, 0.5, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Quick Links */}
      <motion.div 
        className="text-center pt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a 
          href="https://github.com/dejoski" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 text-sm"
        >
          <GitFork className="w-4 h-4" />
          Explore All Repositories on GitHub
          <ExternalLinkIcon className="w-4 h-4 opacity-80" />
        </a>
      </motion.div>
    </div>
  )
} 