'use client'

import { useState, useEffect } from 'react'

interface Challenge {
  id: string
  title: string
  description: string
  starterCode: string
  solution: string
  testCases: Array<{ input: unknown; expected: unknown }>
  difficulty: 'Easy' | 'Medium' | 'Hard'
}

interface TestResult {
  passed: boolean
  input: unknown
  expected: unknown
  actual: unknown
}

const challenges: Challenge[] = [
  {
    id: '1',
    title: 'Reverse a String',
    description: 'Write a function that takes a string as input and returns the string reversed. For example, an input of "hello" should return "olleh".',
    starterCode: `function reverseString(str) {
  // Your code here
  return "";
}`,
    solution: `function reverseString(str) {
  return str.split('').reverse().join('');
}`,
    testCases: [
      { input: 'hello', expected: 'olleh' },
      { input: 'world', expected: 'dlrow' },
      { input: 'JavaScript', expected: 'tpircSavaJ' }
    ],
    difficulty: 'Easy'
  },
  {
    id: '2',
    title: 'Find Maximum Number',
    description: 'Write a function that takes an array of numbers and returns the largest number in the array.',
    starterCode: `function findMax(numbers) {
  // Your code here
  return 0;
}`,
    solution: `function findMax(numbers) {
  return Math.max(...numbers);
}`,
    testCases: [
      { input: [1, 5, 3, 9, 2], expected: 9 },
      { input: [-1, -5, -3], expected: -1 },
      { input: [42], expected: 42 }
    ],
    difficulty: 'Easy'
  },
  {
    id: '3',
    title: 'Count Vowels',
    description: 'Write a function that counts the number of vowels (a, e, i, o, u) in a given string.',
    starterCode: `function countVowels(str) {
  // Your code here
  return 0;
}`,
    solution: `function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  return str.split('').filter(char => vowels.includes(char)).length;
}`,
    testCases: [
      { input: 'hello', expected: 2 },
      { input: 'JavaScript', expected: 3 },
      { input: 'xyz', expected: 0 }
    ],
    difficulty: 'Medium'
  }
]

export default function DebugDailyPage() {
  const [currentChallenge, setCurrentChallenge] = useState<Challenge>(challenges[0])
  const [userCode, setUserCode] = useState<string>(currentChallenge.starterCode)
  const [output, setOutput] = useState<string>('')
  const [testResults, setTestResults] = useState<TestResult[]>([])
  const [streak, setStreak] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setUserCode(currentChallenge.starterCode)
    setOutput('')
    setTestResults([])
  }, [currentChallenge])

  const executeCode = () => {
    setIsLoading(true)
    try {
      const results: TestResult[] = []
      const functionName = currentChallenge.starterCode.match(/function (\w+)/)?.[1]
      
      if (functionName) {
        currentChallenge.testCases.forEach(testCase => {
          try {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const actual = eval(`${userCode}; ${functionName}(${JSON.stringify(testCase.input)})`)
            const passed = JSON.stringify(actual) === JSON.stringify(testCase.expected)
            results.push({
              passed,
              input: testCase.input,
              expected: testCase.expected,
              actual
            })
          } catch (error) {
            results.push({
              passed: false,
              input: testCase.input,
              expected: testCase.expected,
              actual: `Error: ${error}`
            })
          }
        })
      }
      
      setTestResults(results)
      
      const allPassed = results.every(r => r.passed)
      if (allPassed) {
        setOutput('🎉 All tests passed! Great job!')
        setStreak(prev => prev + 1)
      } else {
        setOutput('❌ Some tests failed. Check the results below.')
      }
      
    } catch (error) {
      setOutput(`❌ Error: ${error}`)
      setTestResults([])
    }
    setIsLoading(false)
  }

  const getAIHint = async () => {
    setIsLoading(true)
    
    // Simulate AI hint generation (in real app, this would call OpenAI API)
    setTimeout(() => {
      const hints = {
        '1': "💡 Think about breaking the string into individual characters, then putting them back together in reverse order. JavaScript has built-in methods for this!",
        '2': "💡 Consider using Math.max() with the spread operator (...) to find the maximum value in an array.",
        '3': "💡 You can use filter() to count characters that match certain criteria. Create a string of vowels to check against!"
      }
      setOutput(hints[currentChallenge.id as keyof typeof hints] || "💡 Try breaking down the problem into smaller steps!")
      setIsLoading(false)
    }, 1500)
  }

  const nextChallenge = () => {
    const currentIndex = challenges.findIndex(c => c.id === currentChallenge.id)
    const nextIndex = (currentIndex + 1) % challenges.length
    setCurrentChallenge(challenges[nextIndex])
  }

  const prevChallenge = () => {
    const currentIndex = challenges.findIndex(c => c.id === currentChallenge.id)
    const prevIndex = currentIndex === 0 ? challenges.length - 1 : currentIndex - 1
    setCurrentChallenge(challenges[prevIndex])
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-8">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-cyan-400">DebugDaily</h1>
        <p className="text-xl text-gray-400 mt-2">
          Your Daily Dose of AI-Powered Coding Challenges!
        </p>
        <div className="mt-4 flex justify-center items-center space-x-4">
          <span className="bg-cyan-600 px-3 py-1 rounded-full text-sm">🔥 Streak: {streak}</span>
          <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">
            {currentChallenge.difficulty}
          </span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-2">
        {/* Challenge Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold text-cyan-300 border-b-2 border-cyan-500 pb-2">
              Challenge {currentChallenge.id}
            </h2>
            <div className="space-x-2">
              <button 
                onClick={prevChallenge}
                className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm"
              >
                ← Prev
              </button>
              <button 
                onClick={nextChallenge}
                className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm"
              >
                Next →
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-100">
              {currentChallenge.title}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {currentChallenge.description}
            </p>
            <div className="bg-gray-900 p-4 rounded-md">
              <pre className="text-sm text-gray-200 whitespace-pre-wrap">
                <code>{currentChallenge.starterCode}</code>
              </pre>
            </div>
          </div>

          {/* Test Results */}
          {testResults.length > 0 && (
            <div className="mt-6 space-y-2">
              <h4 className="text-lg font-medium text-cyan-300">Test Results:</h4>
              {testResults.map((result, index) => (
                <div key={index} className={`p-3 rounded text-sm ${result.passed ? 'bg-green-800' : 'bg-red-800'}`}>
                  <div>Input: {JSON.stringify(result.input)}</div>
                  <div>Expected: {JSON.stringify(result.expected)}</div>
                  <div>Got: {JSON.stringify(result.actual)}</div>
                  <div className="font-bold">{result.passed ? '✅ PASS' : '❌ FAIL'}</div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Interaction Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-xl space-y-6">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-cyan-300 border-b-2 border-cyan-500 pb-2">
              Your Solution
            </h2>
            <textarea
              rows={12}
              value={userCode}
              onChange={(e) => setUserCode(e.target.value)}
              className="w-full p-3 bg-gray-700 text-gray-100 rounded-md border border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 placeholder-gray-500 font-mono text-sm"
              placeholder="Enter your code solution here..."
            />
          </div>

          <div className="space-y-3">
            <button 
              onClick={executeCode}
              disabled={isLoading}
              className="w-full bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition duration-150 ease-in-out transform hover:scale-105 disabled:transform-none"
            >
              {isLoading ? '⏳ Running Tests...' : '🚀 Submit Solution'}
            </button>
            <button 
              onClick={getAIHint}
              disabled={isLoading}
              className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-600 text-gray-900 font-semibold py-3 px-4 rounded-lg shadow-md transition duration-150 ease-in-out transform hover:scale-105 disabled:transform-none"
            >
              {isLoading ? '🤔 Thinking...' : 'Get AI Hint ✨'}
            </button>
          </div>

          {/* Output Area */}
          {output && (
            <div className="mt-4 p-4 bg-gray-700 rounded-md">
              <p className="text-sm text-yellow-300 whitespace-pre-wrap">{output}</p>
            </div>
          )}
        </section>
      </main>

      <footer className="text-center mt-16 text-gray-500">
        <p>&copy; {new Date().getFullYear()} DebugDaily. Sharpen your skills!</p>
      </footer>
    </div>
  )
} 