import React, { useState } from 'react';
import { Sparkles, Clipboard, CheckCircle } from 'lucide-react';
import { NewsArticle } from '../types';

interface AiNewsSummaryProps {
  article: NewsArticle;
}

const AiNewsSummary: React.FC<AiNewsSummaryProps> = ({ article }) => {
  const [copied, setCopied] = useState(false);
  
  // This would be AI-generated in a real app
  const aiSummary = `${article.summary} This important development has significant implications for global policy and stakeholders across multiple sectors.`;
  
  const handleCopy = () => {
    navigator.clipboard.writeText(aiSummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6 border border-blue-200 dark:border-blue-800">
      <div className="flex items-start">
        <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-1 flex-shrink-0" />
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center">
            AI Summary
            <span className="ml-2 text-xs bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 py-0.5 px-2 rounded-full">
              Beta
            </span>
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            {aiSummary}
          </p>
          <div className="mt-3 flex justify-end">
            <button 
              onClick={handleCopy}
              className="text-xs flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {copied ? (
                <>
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Copied!
                </>
              ) : (
                <>
                  <Clipboard className="h-4 w-4 mr-1" />
                  Copy summary
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiNewsSummary;