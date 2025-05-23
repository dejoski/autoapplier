'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Copy, Sparkles, Wand2 } from 'lucide-react'

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
  const [promptText, setPromptText] = useState<string>('')
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
    if (!promptText.trim()) {
      setOutput('⚠️ Please enter a topic or prompt to generate content.')
      return
    }

    setIsLoading(true)
    setOutput('🤖 AI is crafting your content...')

    // Simulate API call delay
    setTimeout(() => {
      const generatedContent = generateMockContent(contentType, promptText, tone)
      setOutput(generatedContent)
      
      // Add to history
      const newEntry = {
        type: contentType,
        prompt: promptText,
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
    setPromptText(historyItem.prompt)
    setTone(historyItem.tone)
    setOutput(historyItem.output)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI Content Generator
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create compelling content with the power of AI. Generate blog posts, emails, social media content, and more.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wand2 className="h-5 w-5" />
                  Content Generator
                </CardTitle>
                <CardDescription>
                  Choose a content type, enter your topic, and let AI create amazing content for you.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Content Type Selection */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Content Type</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {contentTemplates.map((template) => (
                      <button
                        key={template.type}
                        onClick={() => setContentType(template.type)}
                        className={`p-4 rounded-lg border-2 transition-all duration-200 text-left hover:shadow-md flex flex-col items-center justify-center aspect-square ${
                          contentType === template.type
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border bg-card hover:border-primary/50'
                        }`}
                      >
                        <div className="text-2xl mb-2">{template.icon}</div>
                        <div className="text-sm font-medium text-center">{template.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Topic Input */}
                <div>
                  <label htmlFor="topic" className="text-sm font-medium mb-2 block">
                    Topic or Content
                  </label>
                  <Textarea
                    id="topic"
                    rows={4}
                    value={promptText}
                    onChange={(e) => setPromptText(e.target.value)}
                    placeholder={`e.g., ${contentType === 'summary' ? 'Paste text to summarize...' : 'Benefits of learning a new language'}`}
                    className="resize-none"
                  />
                </div>
                
                {/* Tone Selection */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Tone of Voice</label>
                  <Select value={tone} onValueChange={setTone}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {toneOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    onClick={generateContent}
                    disabled={isLoading}
                    className="flex-1"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-4 w-4 mr-2" />
                        Generate {selectedTemplate?.icon} Content
                      </>
                    )}
                  </Button>
                  {output && (
                    <Button variant="outline" onClick={clearOutput}>
                      Clear
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* History Sidebar */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Generations</CardTitle>
              </CardHeader>
              <CardContent>
                {generationHistory.length === 0 ? (
                  <p className="text-muted-foreground text-sm text-center py-4">
                    No content generated yet.
                  </p>
                ) : (
                  <div className="space-y-3">
                    {generationHistory.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => loadFromHistory(item)}
                        className="w-full text-left p-3 bg-secondary/50 hover:bg-secondary rounded-lg transition-colors"
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-primary">
                            {contentTemplates.find(t => t.type === item.type)?.icon}{' '}
                            {contentTemplates.find(t => t.type === item.type)?.label}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {item.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground truncate">
                          {item.prompt.substring(0, 60)}{item.prompt.length > 60 && '...'}
                        </p>
                      </button>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Output Section */}
        {output && (
          <Card className="mt-8">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Generated Content</CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyToClipboard}
                  className="flex items-center gap-2"
                >
                  <Copy className="h-4 w-4" />
                  {copySuccess || 'Copy'}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="min-h-[200px] p-4 bg-muted/30 rounded-lg border whitespace-pre-wrap font-mono text-sm">
                {output === '🤖 AI is crafting your content...' || output === '⚠️ Please enter a topic or prompt to generate content.' ? (
                  <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                    {output === '🤖 AI is crafting your content...' && (
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mb-4" />
                    )}
                    <p className="text-center">{output}</p>
                  </div>
                ) : (
                  output
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
} 