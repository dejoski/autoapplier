import { getChallengeById, Challenge, mockChallenges } from '@/lib/mock-data';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge'; // Assuming Badge component exists or will be created
import { ArrowLeft, Code, Brain } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Needed for Next.js to know which dynamic params to pre-render if using generateStaticParams
export async function generateStaticParams() {
  return mockChallenges.map(challenge => ({
    id: challenge.id,
  }));
}

interface ChallengePageProps {
  params: {
    id: string;
  };
}

export default function ChallengePage({ params }: ChallengePageProps) {
  const challenge = getChallengeById(params.id);

  if (!challenge) {
    notFound();
  }

  // Determine badge color based on difficulty
  let difficultyBadgeVariant: "default" | "secondary" | "destructive" | "outline" = "default";
  if (challenge.difficulty === 'Medium') difficultyBadgeVariant = 'secondary';
  if (challenge.difficulty === 'Hard') difficultyBadgeVariant = 'destructive';

  return (
    <div className="bg-background text-foreground min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Link href="/challenges" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group">
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Challenges
        </Link>

        <div className="bg-card p-6 sm:p-8 rounded-xl shadow-lg border border-border">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 pb-6 border-b border-border">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-2 sm:mb-0">
              {challenge.title}
            </h1>
            <Badge variant={difficultyBadgeVariant} className={`text-sm px-4 py-1.5 ${challenge.difficulty === 'Easy' ? 'bg-green-500/20 text-green-500 border-green-500/30' : challenge.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30' : 'bg-red-500/20 text-red-500 border-red-500/30'}`}>
              {challenge.difficulty}
            </Badge>
          </div>

          {challenge.longDescription && (
            <div className="prose prose-sm sm:prose dark:prose-invert max-w-none mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                <Brain className="h-5 w-5 mr-2 text-primary" /> Problem Description
              </h2>
              <p>{challenge.longDescription.split('\\n\\nExample:')[0]}</p>
              {challenge.longDescription.includes('Example:') && (
                <div className="mt-4 p-4 bg-muted/50 rounded-lg border border-border/70">
                  <h3 className="font-semibold text-foreground mb-2">Example:</h3>
                  <pre className="whitespace-pre-wrap text-sm text-muted-foreground">{challenge.longDescription.split('Example:')[1].trim()}</pre>
                </div>
              )}
            </div>
          )}

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                <Code className="h-5 w-5 mr-2 text-primary" /> Your Code
            </h2>
            {/* Placeholder for Code Editor */}
            <div className="bg-muted/30 border border-border rounded-lg p-4 min-h-[200px] flex items-center justify-center text-muted-foreground">
              <p>Code editor will be here.</p>
            </div>
          </div>
          
          <Button size="lg" className="w-full sm:w-auto font-semibold bg-primary hover:bg-primary/90 text-primary-foreground">
            Submit Solution
          </Button>

        </div>
      </div>
    </div>
  );
}