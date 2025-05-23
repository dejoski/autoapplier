'use client'

import { useState } from 'react'

interface ContentTemplate {
  type: string
  label: string
  prompt: (topic: string, tone: string) => string
  icon: string
}

const contentTemplates: ContentTemplate[] = [
  {
    type: 'blog',
    label: 'Blog Post Idea',
    prompt: (topic, tone) => `Write a compelling blog post outline about "${topic}" in a ${tone} tone. Include an engaging title, introduction, 3-4 main points, and a conclusion.`,
    icon: '📝'
  },
  {
    type: 'summary',
    label: 'Text Summarizer',
    prompt: (topic, tone) => `Summarize the following text in a ${tone} tone, highlighting the key points in a concise manner: "${topic}"`,
    icon: '📋'
  },
  {
    type: 'poem',
    label: 'Creative Poem',
    prompt: (topic, tone) => `Write a creative poem about "${topic}" with a ${tone} style. Make it engaging and memorable.`,
    icon: '🎭'
  },
  {
    type: 'adCopy',
    label: 'Ad Copy Headline',
    prompt: (topic, tone) => `Create 5 compelling advertising headlines for "${topic}" using a ${tone} tone. Make them attention-grabbing and persuasive.`,
    icon: '📢'
  },
  {
    type: 'email',
    label: 'Email Template',
    prompt: (topic, tone) => `Write a professional email template about "${topic}" in a ${tone} tone. Include subject line, greeting, body, and closing.`,
    icon: '📧'
  },
  {
    type: 'social',
    label: 'Social Media Post',
    prompt: (topic, tone) => `Create an engaging social media post about "${topic}" in a ${tone} tone. Include relevant hashtags and call-to-action.`,
    icon: '📱'
  }
]

const toneOptions = [
  { value: 'neutral', label: 'Neutral' },
  { value: 'formal', label: 'Formal' },
  { value: 'casual', label: 'Casual' },
  { value: 'witty', label: 'Witty' },
  { value: 'persuasive', label: 'Persuasive' },
  { value: 'friendly', label: 'Friendly' },
  { value: 'professional', label: 'Professional' },
  { value: 'creative', label: 'Creative' }
]

// Simulated AI responses for different content types
const generateMockContent = (contentType: string, topic: string, tone: string): string => {
  const responses: Record<string, (topic: string, tone: string) => string> = {
    blog: (topic, tone) => `# The Ultimate Guide to ${topic}

## Introduction
In today's fast-paced world, understanding ${topic} has become more crucial than ever. This ${tone} guide will walk you through everything you need to know.

## Key Points to Cover:

### 1. Understanding the Basics
- What exactly is ${topic}?
- Why it matters in today's context
- Common misconceptions

### 2. Practical Applications
- Real-world examples
- Step-by-step implementation
- Best practices to follow

### 3. Advanced Strategies
- Expert-level techniques
- Optimization methods
- Future trends and predictions

### 4. Common Pitfalls to Avoid
- Frequent mistakes beginners make
- How to troubleshoot issues
- Prevention strategies

## Conclusion
Mastering ${topic} requires dedication and the right approach. By following this guide, you'll be well-equipped to succeed in your journey.

*Ready to dive deeper? Start implementing these strategies today!*`,

    summary: (topic, tone) => `## Summary

**Key Points:**
• Main concept: ${topic} represents a significant development in its field
• Primary benefits include improved efficiency and user experience
• Implementation requires careful planning and execution
• Success metrics should be established early in the process

**Conclusion:** 
The ${tone} analysis reveals that ${topic} offers substantial value when properly implemented. Organizations should consider adopting this approach to stay competitive.

**Recommended Actions:**
1. Assess current capabilities
2. Develop implementation timeline
3. Allocate necessary resources
4. Monitor progress and adjust as needed`,

    poem: (topic, tone) => `**${topic}**

In the realm where dreams take flight,
${topic} shines with brilliant light.
A ${tone} dance of hope and grace,
Finding beauty in this space.

Through the whispers of the wind,
Stories of ${topic} begin.
Each moment holds a precious key,
Unlocking possibilities.

Like stars that pierce the darkest night,
${topic} guides us toward the light.
In every heart, a song rings true,
Of all the wonders we can do.

So let us celebrate today,
The ${tone} magic of ${topic}'s way.
For in this world of endless dreams,
Nothing is quite what it seems.`,

    adCopy: (topic, tone) => `🎯 **5 Powerful Headlines for ${topic}:**

1. **"Discover the Secret to ${topic} That Industry Leaders Don't Want You to Know!"**
   *${tone} and attention-grabbing*

2. **"Transform Your Life in 30 Days with This Revolutionary ${topic} Method"**
   *Results-focused with urgency*

3. **"Why 97% of People Fail at ${topic} (And How You Can Be in the 3%)"**
   *Problem-solution approach*

4. **"The ${topic} Breakthrough That's Changing Everything"**
   *Innovation-focused*

5. **"Finally! A ${tone} Approach to ${topic} That Actually Works"**
   *Relief and solution-oriented*

💡 **Bonus CTA Ideas:**
- "Get Started Today - Limited Time Offer!"
- "Join Thousands Who've Already Transformed Their ${topic}"
- "Don't Wait - Your Future Self Will Thank You"`,

    email: (topic, tone) => `**Subject:** Important Update Regarding ${topic}

Dear [Name],

I hope this email finds you well. I'm reaching out to discuss ${topic}, which I believe will be of significant interest to you.

**The Situation:**
Recent developments in ${topic} have created new opportunities that align perfectly with your goals. Given your expertise and interest in this area, I wanted to ensure you're aware of these changes.

**What This Means for You:**
• Enhanced capabilities in your current projects
• Potential for improved outcomes and efficiency
• Opportunity to stay ahead of industry trends

**Next Steps:**
I'd love to schedule a brief ${tone} conversation to discuss how ${topic} could benefit your specific situation. Would you be available for a 15-minute discussion this week?

Please let me know what works best for your schedule.

Best regards,
[Your Name]

P.S. I've attached some additional resources that you might find valuable.`,

    social: (topic, tone) => `🌟 Excited to share my thoughts on ${topic}! 

In today's world, ${topic} has become more important than ever. Here's why it matters:

✨ It transforms how we approach challenges
🚀 Creates new opportunities for growth  
💡 Inspires innovative thinking
🎯 Delivers real, measurable results

The ${tone} approach to ${topic} is what sets successful people apart. It's not just about knowing the theory - it's about taking action!

What's your experience with ${topic}? Drop a comment below! 👇

#${topic.replace(/\s+/g, '')} #Innovation #Growth #Success #Motivation #Leadership #PersonalDevelopment

🔗 Link in bio for more insights!`
  }

  return responses[contentType]?.(topic, tone) || `Generated content about ${topic} in a ${tone} tone would appear here.`
}

export default function AiToolsPage() {
  const [contentType, setContentType] = useState<string>('blog')
  const [prompt, setPrompt] = useState<string>('')
  const [tone, setTone] = useState<string>('neutral')
  const [output, setOutput] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [copySuccess, setCopySuccess] = useState<string>('')
  const [generationHistory, setGenerationHistory] = useState<Array<{
    type: string
    prompt: string
    tone: string
    output: string
    timestamp: Date
  }>>([])

  const selectedTemplate = contentTemplates.find(t => t.type === contentType)

  const generateContent = async () => {
    if (!prompt.trim()) {
      setOutput('⚠️ Please enter a topic or prompt to generate content.')
      return
    }

    setIsLoading(true)
    setOutput('🤖 AI is crafting your content...')

    // Simulate API call delay
    setTimeout(() => {
      const generatedContent = generateMockContent(contentType, prompt, tone)
      setOutput(generatedContent)
      
      // Add to history
      const newEntry = {
        type: contentType,
        prompt,
        tone,
        output: generatedContent,
        timestamp: new Date()
      }
      setGenerationHistory(prev => [newEntry, ...prev.slice(0, 4)]) // Keep last 5
      
      setIsLoading(false)
    }, 2000)
  }

  const clearOutput = () => {
    setOutput('')
  }

  const copyToClipboard = async () => {
    if (output && output !== '🤖 AI is crafting your content...' && output !== '⚠️ Please enter a topic or prompt to generate content.') {
      try {
        await navigator.clipboard.writeText(output)
        setCopySuccess('Copied!')
        setTimeout(() => setCopySuccess(''), 2000)
      } catch (err) {
        console.error('Failed to copy content:', err)
        setCopySuccess('Failed!')
        setTimeout(() => setCopySuccess(''), 2000)
      }
    }
  }

  const loadFromHistory = (historyItem: typeof generationHistory[0]) => {
    setContentType(historyItem.type)
    setPrompt(historyItem.prompt)
    setTone(historyItem.tone)
    setOutput(historyItem.output)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-sky-100 text-slate-800 p-4 sm:p-8 font-sans">
      <header className="mb-12 text-center opacity-0 animate-fadeIn">
        <h1 className="text-6xl font-bold text-sky-600 drop-shadow-sm">
          AI Content Generation Suite
        </h1>
        <p className="text-xl text-slate-600 mt-3">
          Craft compelling content with the power of Artificial Intelligence.
        </p>
        <div className="mt-6 flex justify-center items-center space-x-4">
          <span className="bg-sky-500/20 text-sky-700 px-4 py-2 rounded-lg text-sm font-medium shadow-sm">
            ✨ {generationHistory.length} Generated
          </span>
          <span className="bg-emerald-500/20 text-emerald-700 px-4 py-2 rounded-lg text-sm font-medium shadow-sm">
            🚀 Powered by Advanced AI
          </span>
        </div>
      </header>

      <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-3">
        {/* Input Section */}
        <div className="lg:col-span-2 opacity-0 animate-fadeIn animation-delay-200">
          <main className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-xl border border-slate-200">
            <section className="space-y-8">
              <div>
                <label htmlFor="contentType" className="block text-lg font-semibold text-sky-700 mb-4">
                  1. Choose Content Type:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {contentTemplates.map((template) => (
                    <button
                      key={template.type}
                      onClick={() => setContentType(template.type)}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 text-left shadow-sm hover:shadow-md flex flex-col items-center justify-center aspect-square focus:outline-none focus:ring-2 focus:ring-sky-500/50 ${
                        contentType === template.type
                          ? 'border-sky-500 bg-sky-500/10 text-sky-700'
                          : 'border-slate-300 bg-slate-50 text-slate-600 hover:border-sky-400 hover:bg-sky-500/5'
                      }`}
                    >
                      <div className="text-3xl mb-2">{template.icon}</div>
                      <div className="text-sm font-semibold text-center">{template.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="prompt" className="block text-lg font-semibold text-sky-700 mb-2">
                  2. Enter Your Topic or Content:
                </label>
                <textarea
                  id="prompt"
                  rows={5}
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="w-full p-3 bg-white border border-slate-300 text-slate-700 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 placeholder-slate-400 shadow-sm text-base"
                  placeholder={`e.g., ${contentType === 'summary' ? 'Paste text to summarize...' : 'Benefits of learning a new language'}`}
                />
              </div>
              
              <div>
                <label htmlFor="tone" className="block text-sm font-semibold text-sky-700 mb-2">
                  3. Select Tone of Voice:
                </label>
                <select
                  id="tone"
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="w-full p-3 bg-white border border-slate-300 text-slate-700 rounded-md focus:ring-2 focus:ring-sky-500 text-base shadow-sm"
                >
                  {toneOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-4 pt-4 border-t border-slate-200 mt-6">
                <button 
                  onClick={generateContent}
                  disabled={isLoading}
                  className="flex-1 bg-sky-600 hover:bg-sky-700 disabled:bg-slate-400 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-150 ease-in-out transform hover:scale-105 disabled:transform-none text-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Generating...
                    </span>
                  ) : `Generate ${selectedTemplate?.icon} Content`}
                </button>
                {output && (
                  <button 
                    onClick={clearOutput}
                    className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-150 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                  >
                    Clear
                  </button>
                )}
              </div>
            </section>
          </main>
        </div>

        {/* History Sidebar */}
        <div className="lg:col-span-1 opacity-0 animate-fadeIn animation-delay-400">
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-xl border border-slate-200 sticky top-8">
            <h3 className="text-xl font-semibold text-sky-700 mb-5 border-b border-slate-200 pb-3">
              Recent Generations
            </h3>
            {generationHistory.length === 0 ? (
              <p className="text-slate-500 text-sm text-center py-4">No content generated yet.</p>
            ) : (
              <div className="space-y-3">
                {generationHistory.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => loadFromHistory(item)}
                    className="w-full text-left p-4 bg-slate-50 hover:bg-sky-500/10 rounded-lg transition-colors shadow-sm hover:shadow-md border border-slate-200 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-md font-semibold text-sky-600">
                        {contentTemplates.find(t => t.type === item.type)?.icon}{' '}
                        {contentTemplates.find(t => t.type === item.type)?.label}
                      </span>
                      <span className="text-xs text-slate-400">
                        {item.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 truncate">
                      {item.prompt.substring(0, 60)}{item.prompt.length > 60 && '...'}
                    </p>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Output Section */}
      {output && (
        <section className="max-w-7xl mx-auto mt-10 opacity-0 animate-fadeInUp animation-delay-600">
          <div className="bg-white/70 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-2xl border border-slate-200">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-200">
              <h2 className="text-3xl font-semibold text-sky-700">
                Voilà! Your Content:
              </h2>
              <button
                onClick={copyToClipboard}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 shadow-md hover:shadow-lg flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-offset-2 ${copySuccess === 'Copied!' ? 'bg-green-500 hover:bg-green-600 focus:ring-green-500' : copySuccess === 'Failed!' ? 'bg-red-500 hover:bg-red-600 focus:ring-red-500' : 'bg-emerald-500 hover:bg-emerald-600 focus:ring-emerald-500'} text-white`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8 2a1 1 0 00-1 1v1H5a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1h-2V3a1 1 0 00-1-1H8zM7 4h6v1H7V4zm5 5H8v1h4V9zm-4 2h4v1H8v-1z" />
                </svg>
                <span>{copySuccess || 'Copy to Clipboard'}</span>
              </button>
            </div>
            <div className="min-h-[250px] p-5 bg-slate-50 text-slate-700 rounded-md border border-slate-200 whitespace-pre-wrap leading-relaxed prose prose-sm sm:prose-base max-w-none shadow-inner">
              {output === '🤖 AI is crafting your content...' || output === '⚠️ Please enter a topic or prompt to generate content.' ? (
                <div className="flex flex-col items-center justify-center h-full text-slate-500">
                  {output === '🤖 AI is crafting your content...' && (
                    <svg className="animate-spin h-10 w-10 text-sky-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  )}
                  <p className="text-lg">{output}</p>
                </div>
              ) : (
                output
              )}
            </div>
          </div>
        </section>
      )}

      <footer className="text-center mt-20 text-slate-600 text-sm opacity-0 animate-fadeIn animation-delay-800">
        <p>&copy; {new Date().getFullYear()} AI Content Generation Suite. Crafted with ❤️ and AI.</p>
        <p className="mt-1">A Portfolio Project by Dejan Stajic - Aiming to Impress!</p>
      </footer>
    </div>
  )
} 