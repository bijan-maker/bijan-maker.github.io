import React, { useState } from 'react';
import { Sparkles, Send, ArrowRight } from 'lucide-react';

const AiAssistantPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [conversation, setConversation] = useState<{role: 'user' | 'assistant', content: string}[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m your AI news assistant. I can help you find news, summarize articles, and answer questions about current events. How can I assist you today?'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  
  const exampleQueries = [
    "What are the latest developments in AI technology?",
    "Summarize the current situation in the Middle East",
    "Which climate change stories are most important right now?",
    "Show me business news from Europe"
  ];
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) return;
    
    // Add user message to conversation
    const userMessage = { role: 'user' as const, content: query };
    setConversation(prev => [...prev, userMessage]);
    setQuery('');
    setIsTyping(true);
    
    // Simulate AI thinking
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real app, this would call an AI service
    // For demo, we'll simulate some generic responses
    let response = '';
    
    if (query.toLowerCase().includes('climate')) {
      response = "The latest climate change news focuses on new international agreements to reduce carbon emissions by 2030. Several major economies have announced more ambitious targets, though experts debate whether these commitments go far enough. Recent studies have shown accelerating ice melt in polar regions, raising concerns about potential sea level rise.";
    } else if (query.toLowerCase().includes('ai') || query.toLowerCase().includes('artificial intelligence')) {
      response = "Recent AI developments include breakthroughs in multimodal models that can process text, images, and audio simultaneously. There are ongoing discussions about AI regulation, with several countries proposing new frameworks for responsible AI use. The technology sector continues to see significant investment in AI startups, particularly those focused on healthcare and climate solutions.";
    } else if (query.toLowerCase().includes('middle east')) {
      response = "The current situation in the Middle East includes diplomatic initiatives to reduce regional tensions. Several countries have established new economic partnerships focused on renewable energy and water security. Peace processes continue with international mediation, though challenges remain in establishing lasting stability across the region.";
    } else if (query.toLowerCase().includes('business') || query.toLowerCase().includes('economy')) {
      response = "Current business trends show technology and green energy sectors outperforming traditional industries. Global supply chains are still adjusting to post-pandemic patterns, with many companies adopting nearshoring strategies. Inflation concerns have moderated in some regions, though central banks maintain cautious monetary policies.";
    } else {
      response = "Based on recent news sources, this topic has seen significant developments. Multiple perspectives are being presented across international media, with analyses suggesting both challenges and opportunities ahead. I can provide more specific information if you'd like to focus on a particular aspect of this subject.";
    }
    
    // Add AI response to conversation
    setConversation(prev => [...prev, { role: 'assistant', content: response }]);
    setIsTyping(false);
  };
  
  const handleExampleClick = (example: string) => {
    setQuery(example);
  };

  return (
    <div className="pt-24 pb-12 min-h-screen flex flex-col">
      <div className="container mx-auto px-4 flex-1 flex flex-col">
        <div className="mb-6">
          <div className="flex items-center space-x-3 mb-4">
            <Sparkles className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              AI News Assistant
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Ask about current events, request summaries, or get personalized news recommendations.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {conversation.map((message, index) => (
              <div 
                key={index} 
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] sm:max-w-[70%] rounded-lg p-3 ${
                    message.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-tl-none'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 rounded-tl-none">
                  <div className="flex space-x-2">
                    <div className="h-2 w-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="h-2 w-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="h-2 w-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Example queries */}
          {conversation.length <= 2 && (
            <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Try asking:</p>
              <div className="flex flex-wrap gap-2">
                {exampleQueries.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => handleExampleClick(example)}
                    className="text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-1.5 px-3 rounded-full flex items-center transition-colors"
                  >
                    {example}
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Input area */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-4">
            <form onSubmit={handleSubmit} className="flex items-center">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask about news, events, or topics..."
                className="flex-1 p-3 rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isTyping}
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-r-md transition-colors flex items-center justify-center disabled:opacity-70 disabled:hover:bg-blue-600"
                disabled={!query.trim() || isTyping}
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
              This AI assistant is for demonstration purposes. In a real application, it would connect to live news sources.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiAssistantPage;