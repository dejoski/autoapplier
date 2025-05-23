import Link from 'next/link';
import { Challenge } from '@/lib/mock-data';
import { ArrowRight } from 'lucide-react';

interface ChallengeCardProps {
  challenge: Challenge;
}

export function ChallengeCard({ challenge }: ChallengeCardProps) {
  return (
    <Link href={`/challenges/${challenge.id}`} className="block group h-full">
      <div className="h-full bg-card p-6 rounded-lg border border-border hover:shadow-xl transition-all duration-300 hover:border-primary/60 flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 flex-grow pr-2">{challenge.title}</h3>
          <span className={`whitespace-nowrap px-3 py-1 text-xs font-medium rounded-full ${challenge.difficulty === 'Easy' ? 'bg-green-100 text-green-700 dark:bg-green-700/30 dark:text-green-300' : challenge.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-700/30 dark:text-yellow-300' : 'bg-red-100 text-red-700 dark:bg-red-700/30 dark:text-red-300'}`}>
            {challenge.difficulty}
          </span>
        </div>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">{challenge.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {challenge.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 text-xs bg-secondary text-secondary-foreground rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center text-sm text-primary group-hover:underline">
          View Challenge <ArrowRight className="ml-1 h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}