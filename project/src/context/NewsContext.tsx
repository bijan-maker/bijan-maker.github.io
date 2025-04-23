import React, { createContext, useContext, useState, useEffect } from 'react';
import { NewsArticle, AiSearchParams } from '../types';
import { getNewsArticles, searchArticles } from '../data/mockNews';

interface NewsContextType {
  articles: NewsArticle[];
  bookmarkedArticles: NewsArticle[];
  loading: boolean;
  aiSearchResults: NewsArticle[];
  bookmarkArticle: (articleId: string) => void;
  removeBookmark: (articleId: string) => void;
  performAiSearch: (params: AiSearchParams) => Promise<void>;
  clearAiSearch: () => void;
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export const NewsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [bookmarkedArticles, setBookmarkedArticles] = useState<NewsArticle[]>([]);
  const [aiSearchResults, setAiSearchResults] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    const fetchArticles = async () => {
      try {
        setLoading(true);
        // In a real app, this would be an API call
        const data = getNewsArticles();
        setArticles(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const bookmarkArticle = (articleId: string) => {
    setArticles(prevArticles => 
      prevArticles.map(article => 
        article.id === articleId ? { ...article, isBookmarked: true } : article
      )
    );
    
    const articleToBookmark = articles.find(article => article.id === articleId);
    if (articleToBookmark && !articleToBookmark.isBookmarked) {
      setBookmarkedArticles(prev => [...prev, { ...articleToBookmark, isBookmarked: true }]);
    }
  };

  const removeBookmark = (articleId: string) => {
    setArticles(prevArticles => 
      prevArticles.map(article => 
        article.id === articleId ? { ...article, isBookmarked: false } : article
      )
    );
    
    setBookmarkedArticles(prev => 
      prev.filter(article => article.id !== articleId)
    );
  };

  const performAiSearch = async (params: AiSearchParams): Promise<void> => {
    setLoading(true);
    try {
      // Simulate AI processing delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, this would call an AI-powered API
      const results = searchArticles(params.query);
      
      // Apply additional filters if specified
      let filteredResults = results;
      
      if (params.category) {
        filteredResults = filteredResults.filter(article => article.category === params.category);
      }
      
      if (params.region) {
        filteredResults = filteredResults.filter(article => article.region === params.region);
      }
      
      setAiSearchResults(filteredResults);
    } catch (error) {
      console.error('Error performing AI search:', error);
    } finally {
      setLoading(false);
    }
  };

  const clearAiSearch = () => {
    setAiSearchResults([]);
  };

  return (
    <NewsContext.Provider 
      value={{ 
        articles, 
        bookmarkedArticles, 
        loading, 
        aiSearchResults,
        bookmarkArticle, 
        removeBookmark,
        performAiSearch,
        clearAiSearch
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = (): NewsContextType => {
  const context = useContext(NewsContext);
  if (context === undefined) {
    throw new Error('useNews must be used within a NewsProvider');
  }
  return context;
};