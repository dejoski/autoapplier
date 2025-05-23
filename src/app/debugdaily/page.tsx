export default function DebugDailyPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-8">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-cyan-400">DebugDaily</h1>
        <p className="text-xl text-gray-400 mt-2">
          Your Daily Dose of AI-Powered Coding Challenges!
        </p>
      </header>

      <main className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
        {/* Challenge Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-xl">
          <h2 className="text-3xl font-semibold mb-6 text-cyan-300 border-b-2 border-cyan-500 pb-2">
            Today's Challenge
          </h2>
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-100">
              Problem: Reverse a String
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Write a function that takes a string as input and returns the
              string reversed. For example, an input of "hello" should return
              "olleh".
            </p>
            <div className="bg-gray-900 p-4 rounded-md">
              <pre className="text-sm text-gray-200 whitespace-pre-wrap">
                <code>
                  {`function reverseString(str) {
  // Your code here
}`}
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* Interaction Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-xl space-y-6">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-cyan-300 border-b-2 border-cyan-500 pb-2">
              Your Solution
            </h2>
            <textarea
              rows={8}
              className="w-full p-3 bg-gray-700 text-gray-100 rounded-md border border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 placeholder-gray-500"
              placeholder="Enter your code solution here..."
            />
          </div>

          <div className="space-y-3">
            <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition duration-150 ease-in-out transform hover:scale-105">
              Submit Solution
            </button>
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-4 rounded-lg shadow-md transition duration-150 ease-in-out transform hover:scale-105">
              Get AI Hint ✨
            </button>
          </div>

          <div id="ai-hint-area" className="hidden mt-4 p-4 bg-gray-700 rounded-md">
            <p className="text-sm text-yellow-300">
              {/* AI Hint will appear here */}
            </p>
          </div>
        </section>
      </main>

      <footer className="text-center mt-16 text-gray-500">
        <p>&copy; {new Date().getFullYear()} DebugDaily. Sharpen your skills!</p>
      </footer>
    </div>
  );
} 