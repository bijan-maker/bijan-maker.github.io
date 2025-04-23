import React from 'react';
import NewsGrid from '../components/NewsGrid';
import { useNews } from '../context/NewsContext';
import { Bookmark } from 'lucide-react';

const BookmarksPage: React.FC = () => {
  const { bookmarkedArticles, loading } = useNews();

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <div className="flex items-center space-x-3 mb-4">
            <Bookmark className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Your Bookmarks
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Articles you've saved for later reading.
          </p>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <NewsGrid 
            articles={bookmarkedArticles} 
            emptyMessage="You haven't bookmarked any articles yet. Start exploring and save stories that interest you." 
          />
        )}
      </div>
    </div>
  );
};

export default BookmarksPage;