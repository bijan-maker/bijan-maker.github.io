import React from 'react';
import AiSearchBar from '../components/AiSearchBar';
import NewsGrid from '../components/NewsGrid';
import { useNews } from '../context/NewsContext';

const HomePage: React.FC = () => {
  const { articles, loading, aiSearchResults } = useNews();
  
  // Group articles by category
  const technologyArticles = articles.filter(article => article.category === 'technology');
  const politicsArticles = articles.filter(article => article.category === 'politics');
  const featuredArticles = articles.slice(0, 3); // Just take first 3 for featured
  
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Breaking News from Around the Globe
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Discover the latest international headlines, powered by AI to deliver personalized news that matters to you.
          </p>
        </div>
        
        <AiSearchBar />
        
        {aiSearchResults.length > 0 ? (
          <NewsGrid 
            articles={aiSearchResults} 
            title="AI Search Results" 
            emptyMessage="No articles match your search criteria. Try a different query."
          />
        ) : (
          <>
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
              </div>
            ) : (
              <>
                <NewsGrid articles={featuredArticles} title="Featured Stories" />
                <NewsGrid articles={technologyArticles} title="Technology" />
                <NewsGrid articles={politicsArticles} title="Politics" />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;