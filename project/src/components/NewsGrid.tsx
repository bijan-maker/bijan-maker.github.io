import React from 'react';
import NewsCard from './NewsCard';
import { NewsArticle } from '../types';

interface NewsGridProps {
  articles: NewsArticle[];
  title?: string;
  emptyMessage?: string;
}

const NewsGrid: React.FC<NewsGridProps> = ({ 
  articles, 
  title, 
  emptyMessage = 'No articles found' 
}) => {
  return (
    <div className="mb-8">
      {title && (
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h2>
      )}
      
      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map(article => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
          <p className="text-gray-600 dark:text-gray-300">{emptyMessage}</p>
        </div>
      )}
    </div>
  );
};

export default NewsGrid;