import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { mockChallenges } from '@/lib/mock-data';
import { ArrowRight, Lightbulb, Zap } from 'lucide-react';
import { ChallengeCard } from '@/components/cards/challenge-card';

// Hero Section for DebugDaily
function HeroDebugDaily() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Lightbulb className="mx-auto h-16 w-16 text-accent mb-6 animate-pulse" />
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight">
          Welcome to <span className="text-primary">DebugDaily</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-muted-foreground">
          Sharpen your AI coding skills with unique daily challenges. Dive into problems inspired by real-world AI applications and enhance your problem-solving abilities.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="font-semibold shadow-md hover:shadow-lg transition-shadow bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/challenges">
              <Zap className="mr-2 h-5 w-5" /> View All Challenges
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-semibold shadow-sm hover:shadow-md transition-shadow border-primary/50 text-primary hover:bg-primary/10">
            <Link href="#featured-challenges"> {/* Smooth scroll to featured */}
              <ArrowRight className="mr-2 h-5 w-5" /> See Featured
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const featuredChallenges = mockChallenges.slice(0, 3); // Display first 3 challenges as featured

  return (
    <>
      <HeroDebugDaily />
      
      <section id="featured-challenges" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Featured Challenges
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Get a taste of what DebugDaily offers with these handpicked challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredChallenges.map(challenge => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="ghost" className="text-primary hover:text-primary/80">
              <Link href="/challenges">
                View All Challenges <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
} 