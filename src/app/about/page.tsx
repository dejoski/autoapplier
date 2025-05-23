import { BrainCircuit, Target, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-12 md:mb-16">
          <BrainCircuit className="mx-auto h-16 w-16 text-primary mb-6" />
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            About DebugDaily
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground">
            Your daily dose of AI-centric coding challenges designed to sharpen your skills and prepare you for the future of development.
          </p>
        </div>

        <div className="space-y-12">
          <div className="p-8 bg-card border border-border rounded-xl shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Target className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At DebugDaily, our mission is to provide a dedicated platform for developers, students, and AI enthusiasts to practice and master coding problems that are relevant to the field of Artificial Intelligence. We believe that consistent practice with targeted challenges is key to building expertise in this rapidly evolving domain.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-card border border-border rounded-xl shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Users className="h-8 w-8 text-accent" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">Who Is This For?</h2>
                <ul className="list-disc list-outside pl-5 space-y-2 text-muted-foreground leading-relaxed">
                  <li>Aspiring AI/ML Engineers looking to strengthen their coding foundations.</li>
                  <li>Software developers aiming to transition into AI-focused roles.</li>
                  <li>Students learning about data structures, algorithms, and their applications in AI.</li>
                  <li>Anyone passionate about AI who wants to tackle interesting and relevant coding puzzles.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-8 bg-card border border-border rounded-xl shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="p-3 bg-secondary rounded-lg">
                  <BrainCircuit className="h-8 w-8 text-secondary-foreground" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">What We Offer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  DebugDaily offers a curated set of coding challenges that span various AI-related topics, including (but not limited to) data processing for AI, algorithm implementation, interaction with AI models, and simple simulations. Challenges come in varying difficulties, allowing you to progress at your own pace.
                  <br /><br />
                  While we don't currently offer a live code execution environment or user accounts, we are focused on providing high-quality problem statements to help you think, code, and learn. Consider this your daily AI workout!
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}