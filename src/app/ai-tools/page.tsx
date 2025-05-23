export default function AiToolsPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-4 sm:p-8">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-purple-400">AI Content Generation Suite</h1>
        <p className="text-xl text-slate-400 mt-2">
          Craft compelling content with the power of Artificial Intelligence.
        </p>
      </header>

      <main className="max-w-3xl mx-auto bg-slate-800 p-6 sm:p-8 rounded-xl shadow-2xl">
        <section className="space-y-8">
          <div>
            <label htmlFor="contentType" className="block text-lg font-medium text-purple-300 mb-2">
              1. Choose Content Type:
            </label>
            <select
              id="contentType"
              className="w-full p-3 bg-slate-700 text-gray-100 rounded-md border border-slate-600 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            >
              <option value="blog">Blog Post Idea</option>
              <option value="summary">Text Summarizer</option>
              <option value="poem">Creative Poem</option>
              <option value="adCopy">Ad Copy Headline</option>
            </select>
          </div>

          <div>
            <label htmlFor="prompt" className="block text-lg font-medium text-purple-300 mb-2">
              2. Enter Your Prompt or Topic:
            </label>
            <textarea
              id="prompt"
              rows={5}
              className="w-full p-3 bg-slate-700 text-gray-100 rounded-md border border-slate-600 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-slate-500"
              placeholder="e.g., 'Benefits of learning a new language', or paste text to summarize..."
            />
          </div>
          
          <div>
            <label htmlFor="tone" className="block text-sm font-medium text-purple-300 mb-1">Optional: Tone of Voice</label>
            <select
              id="tone"
              className="w-full p-2 bg-slate-700 text-gray-100 rounded-md border border-slate-600 focus:ring-1 focus:ring-purple-500 text-sm"
            >
              <option value="neutral">Neutral</option>
              <option value="formal">Formal</option>
              <option value="casual">Casual</option>
              <option value="witty">Witty</option>
              <option value="persuasive">Persuasive</option>
            </select>
          </div>

          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg shadow-lg transition duration-150 ease-in-out transform hover:scale-105 text-lg">
            Generate Content ✨
          </button>
        </section>

        <section className="mt-12 pt-8 border-t-2 border-slate-700">
          <h2 className="text-3xl font-semibold mb-6 text-purple-300">
            Generated Output:
          </h2>
          <div
            id="outputArea"
            className="min-h-[200px] p-4 bg-slate-900/70 text-gray-200 rounded-md border border-slate-600 whitespace-pre-wrap leading-relaxed prose prose-invert prose-sm sm:prose-base max-w-none"
          >
            <p className="text-slate-400 italic">Your AI-generated content will appear here...</p>
            {/* Example Output Structure */}
            {/* 
            <h3 className="text-xl font-semibold text-purple-400">Blog Post Idea: The Joy of Multilingualism</h3>
            <p>Learning a new language opens up a world of opportunities, not just for travel but for cognitive benefits and cultural understanding...</p>
            */}
          </div>
        </section>
      </main>

      <footer className="text-center mt-16 text-slate-500">
        <p>&copy; {new Date().getFullYear()} AI Content Suite. Powered by Innovation.</p>
      </footer>
    </div>
  );
} 