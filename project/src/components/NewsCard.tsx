import React from 'react';
import { BookmarkPlus, BookmarkCheck, ExternalLink } from 'lucide-react';
import { NewsArticle } from '../types';
import { useNews } from '../context/NewsContext';
import { Link } from 'react-router-dom';

interface NewsCardProps {
  article: NewsArticle;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  const { bookmarkArticle, removeBookmark } = useNews();
  
  const handleBookmarkToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (article.isBookmarked) {
      removeBookmark(article.id);
    } else {
      bookmarkArticle(article.id);
    }
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      politics: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      technology: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      business: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      science: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
      health: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      entertainment: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
      sports: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    };
    
    return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
      <Link to={`/article/${article.id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-0 right-0 p-2">
            <button 
              onClick={handleBookmarkToggle} 
              className="p-1.5 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 transition-colors"
              aria-label={article.isBookmarked ? "Remove bookmark" : "Add bookmark"}
            >
              {article.isBookmarked ? (
                <BookmarkCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              ) : (
                <BookmarkPlus className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              )}
            </button>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${getCategoryColor(article.category)}`}>
              {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {formatDate(article.publishedAt)}
            </span>
          </div>
          
          <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white line-clamp-2">
            {article.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {article.summary}
          </p>
          
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">
              By {article.author}
            </span>
            <div className="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
              <span className="mr-1">Read more</span>
              <ExternalLink className="h-4 w-4" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;