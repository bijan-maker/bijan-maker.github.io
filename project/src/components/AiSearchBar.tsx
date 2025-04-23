import React, { useState } from 'react';
import { Search, Sparkles, X } from 'lucide-react';
import { useNews } from '../context/NewsContext';
import { AiSearchParams, NewsCategory, Region } from '../types';

const AiSearchBar: React.FC = () => {
  const { performAiSearch, clearAiSearch } = useNews();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<NewsCategory | ''>('');
  const [region, setRegion] = useState<Region | ''>('');
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (query.trim()) {
      const searchParams: AiSearchParams = {
        query: query.trim()
      };
      
      if (category) {
        searchParams.category = category as NewsCategory;
      }
      
      if (region) {
        searchParams.region = region as Region;
      }
      
      await performAiSearch(searchParams);
    }
  };
  
  const handleClear = () => {
    setQuery('');
    setCategory('');
    setRegion('');
    clearAiSearch();
    setIsAdvancedOpen(false);
  };
  
  const toggleAdvanced = () => {
    setIsAdvancedOpen(!isAdvancedOpen);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-8 transition-all duration-300">
      <div className="flex items-center">
        <Sparkles className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">AI-Powered News Search</h2>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mt-2 mb-4">
        Use natural language to find exactly what you're looking for.
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try 'latest climate change news' or 'tech innovations in healthcare'"
            className="w-full p-3 pr-24 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="absolute right-2 top-2">
            {query && (
              <button
                type="button"
                onClick={handleClear}
                className="p-1 mr-1 rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                aria-label="Clear search"
              >
                <X className="h-5 w-5" />
              </button>
            )}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
              disabled={!query.trim()}
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="mt-2 flex justify-between items-center">
          <button
            type="button"
            onClick={toggleAdvanced}
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            {isAdvancedOpen ? 'Hide advanced options' : 'Show advanced options'}
          </button>
          
          <div className="text-xs text-gray-500 dark:text-gray-400 italic">
            Powered by AI
          </div>
        </div>
        
        {isAdvancedOpen && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as NewsCategory | '')}
                className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              >
                <option value="">All Categories</option>
                <option value="politics">Politics</option>
                <option value="technology">Technology</option>
                <option value="business">Business</option>
                <option value="science">Science</option>
                <option value="health">Health</option>
                <option value="entertainment">Entertainment</option>
                <option value="sports">Sports</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Region
              </label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value as Region | '')}
                className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              >
                <option value="">All Regions</option>
                <option value="global">Global</option>
                <option value="north-america">North America</option>
                <option value="europe">Europe</option>
                <option value="asia">Asia</option>
                <option value="middle-east">Middle East</option>
                <option value="africa">Africa</option>
                <option value="south-america">South America</option>
                <option value="oceania">Oceania</option>
              </select>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default AiSearchBar;