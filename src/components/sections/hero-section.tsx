'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function HeroSection() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Basic skeleton loader for when not mounted
  if (!mounted) {
    return (
      <section className="relative flex items-center justify-center min-h-[70vh] md:min-h-screen bg-gray-100 dark:bg-gray-800 py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mx-auto mb-4"></div>
          <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mx-auto mb-6"></div>
          <div className="flex justify-center gap-4">
            <div className="h-12 bg-gray-400 dark:bg-gray-600 rounded-md w-40"></div>
            <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded-md w-40"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-stone-50 to-gray-100 dark:from-slate-900 dark:via-stone-800 dark:to-gray-900 text-foreground min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-24">
      {/* Optional: Abstract background shapes for visual interest */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20">
        <motion.div 
          className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.05, 1],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 md:space-y-8"
        >
          <ShoppingBag className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto" />
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="block">Discover Your Next</span>
            <span className={cn(
              "block text-transparent bg-clip-text",
              "bg-gradient-to-r from-primary via-accent to-rose-500",
              "dark:from-primary dark:via-accent dark:to-rose-400"
            )} style={{backgroundSize: '200% auto', animation: 'gradientMove 6s ease-in-out infinite'}}>
              Favorite Thing
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of high-quality products, designed to bring joy and style into your life. Unbeatable prices, exceptional service.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button asChild size="lg" className="font-semibold text-lg px-8 py-7 shadow-lg hover:shadow-xl transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
            <Link href="/products">
              Shop All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-semibold text-lg px-8 py-7 shadow-md hover:shadow-lg transition-all duration-300 border-border hover:bg-secondary w-full sm:w-auto">
            <Link href="/deals">
              View Latest Deals
            </Link>
          </Button>
        </motion.div>

        {/* Optional: Placeholder for a lifestyle image or product collage if desired later */}
        {/* <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-12 md:mt-16"
        >
          <div className="relative w-full max-w-3xl mx-auto aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg shadow-xl overflow-hidden">
            <Image 
              src="https://via.placeholder.com/1280x720.png?text=Awesome+Products+Showcase" 
              alt="E-commerce Products Showcase" 
              layout="fill" 
              objectFit="cover"
            />
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}

// Minimal CSS for gradient animation if not handled by Tailwind utility
// (Tailwind handles gradient animation with animate-gradient utility typically)
// You might need to add this to your global.css if issues with gradientMove:
/*
@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
*/ 