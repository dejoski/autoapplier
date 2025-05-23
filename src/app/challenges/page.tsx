import { mockChallenges } from '@/lib/mock-data';
import { ChallengeCard } from '@/components/cards/challenge-card';
import { ListFilter } from 'lucide-react';

export default function ChallengesPage() {
  const challenges = mockChallenges; // In a real app, fetch this data

  return (
    <div className="bg-background text-foreground min-h-screen">
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 md:mb-12">
            <div className='mb-6 md:mb-0'>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
                All Challenges
              </h1>
              <p className="mt-3 text-lg text-muted-foreground max-w-xl">
                Browse through our collection of AI-focused coding challenges. Filter by difficulty or tags to find your next problem to solve.
              </p>
            </div>
            {/* TODO: Add actual filtering UI controls */}
            <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm text-muted-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors">
              <ListFilter className="h-4 w-4" />
              <span>Filter Challenges</span>
            </button>
          </div>

          {challenges.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
              {challenges.map(challenge => (
                <ChallengeCard key={challenge.id} challenge={challenge} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-muted-foreground">No challenges available yet.</h2>
              <p className="mt-2 text-muted-foreground">Please check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}