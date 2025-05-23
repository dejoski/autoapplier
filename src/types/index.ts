// Core types for the portfolio website

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  images?: string[]
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  category: ProjectCategory
  status: ProjectStatus
  startDate: string
  endDate?: string
  slug: string
}

export type ProjectCategory = 
  | 'web-development'
  | 'mobile-app'
  | 'ai-ml'
  | 'blockchain'
  | 'design'
  | 'other'

export type ProjectStatus = 
  | 'completed'
  | 'in-progress'
  | 'planned'
  | 'archived'

export interface Experience {
  id: string
  company: string
  position: string
  description: string
  startDate: string
  endDate?: string
  current: boolean
  location: string
  technologies: string[]
  achievements: string[]
  companyUrl?: string
  logo?: string
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate?: string
  current: boolean
  location: string
  gpa?: string
  achievements: string[]
  logo?: string
}

export interface Skill {
  id: string
  name: string
  category: SkillCategory
  level: SkillLevel
  icon?: string
  description?: string
}

export type SkillCategory = 
  | 'frontend'
  | 'backend'
  | 'database'
  | 'devops'
  | 'design'
  | 'mobile'
  | 'ai-ml'
  | 'blockchain'
  | 'other'

export type SkillLevel = 
  | 'beginner'
  | 'intermediate'
  | 'advanced'
  | 'expert'

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface SocialLink {
  id: string
  platform: string
  url: string
  icon: string
  username?: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  slug: string
  publishedAt: string
  updatedAt?: string
  tags: string[]
  featured: boolean
  readingTime: number
  image?: string
  author: {
    name: string
    avatar: string
    bio: string
  }
}

export interface Testimonial {
  id: string
  name: string
  position: string
  company: string
  content: string
  avatar?: string
  rating: number
  featured: boolean
}

export interface Achievement {
  id: string
  title: string
  description: string
  date: string
  category: string
  icon?: string
  url?: string
}

// Component prop types
export interface ButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asChild?: boolean
  className?: string
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export interface CardProps {
  className?: string
  children: React.ReactNode
  hover?: boolean
  gradient?: boolean
  glass?: boolean
}

export interface SectionProps {
  id?: string
  className?: string
  children: React.ReactNode
  container?: boolean
  background?: 'default' | 'muted' | 'gradient'
}

export interface AnimationProps {
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  once?: boolean
  className?: string
  children: React.ReactNode
}

// Navigation types
export interface NavItem {
  title: string
  href: string
  description?: string
  external?: boolean
  disabled?: boolean
}

export interface NavConfig {
  mainNav: NavItem[]
  sidebarNav?: NavItem[]
}

// Theme types
export type Theme = 'light' | 'dark' | 'system'

// API response types
export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
  error?: string
}

// Form validation types
export interface FormErrors {
  [key: string]: string | undefined
}

export interface FormState<T> {
  data: T
  errors: FormErrors
  isSubmitting: boolean
  isValid: boolean
}

// SEO types
export interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  publishedTime?: string
  modifiedTime?: string
  author?: string
} 