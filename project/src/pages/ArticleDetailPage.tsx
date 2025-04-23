import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookmarkPlus, BookmarkCheck, Share2 } from 'lucide-react';
import { getArticleById } from '../data/mockNews';
import { NewsArticle } from '../types';
import { useNews } from '../context/NewsContext';
import AiNewsSummary from '../components/AiNewsSummary';

const ArticleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const { bookmarkArticle, removeBookmark } = useNews();
  
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        // In a real app, this would be an API call
        if (id) {
          const data = getArticleById(id);
          if (data) {
            setArticle(data);
          }
        }
      } catch (error) {
        console.error('Error fetching article:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchArticle();
    
    // Scroll to top when navigating to article
    window.scrollTo(0, 0);
  }, [id]);
  
  const handleBookmarkToggle = () => {
    if (!article) return;
    
    if (article.isBookmarked) {
      removeBookmark(article.id);
      setArticle({ ...article, isBookmarked: false });
    } else {
      bookmarkArticle(article.id);
      setArticle({ ...article, isBookmarked: true });
    }
  };
  
  const handleShare = () => {
    if (navigator.share && article) {
      navigator.share({
        title: article.title,
        text: article.summary,
        url: window.location.href,
      }).catch(err => console.error('Error sharing:', err));
    }
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (loading) {
    return (
      <div className="pt-24 pb-12 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!article) {
    return (
      <div className="pt-24 pb-12 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Article Not Found</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              The article you're looking for doesn't exist or has been removed.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <div className="h-96 relative">
              <img 
                src={article.imageUrl} 
                alt={article.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-500/80 text-white mr-2">
                      {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                    </span>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-500/80 text-white">
                      {article.region.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-white">
                    {article.title}
                  </h1>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-gray-600 dark:text-gray-400">
                    By <span className="font-medium">{article.author}</span>
                  </p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm">
                    {formatDate(article.publishedAt)} · {article.source}
                  </p>
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={handleBookmarkToggle}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    aria-label={article.isBookmarked ? "Remove bookmark" : "Add bookmark"}
                  >
                    {article.isBookmarked ? (
                      <BookmarkCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    ) : (
                      <BookmarkPlus className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    )}
                  </button>
                  
                  <button
                    onClick={handleShare}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Share article"
                  >
                    <Share2 className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  </button>
                </div>
              </div>
              
              <AiNewsSummary article={article} />
              
              <div className="prose dark:prose-invert max-w-none">
                <p className="font-medium text-xl text-gray-900 dark:text-white mb-4">
                  {article.summary}
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {article.content}
                </p>
                
                {/* This would be more detailed content in a real article */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                  Experts around the world are closely watching these developments, with many suggesting this could represent a significant shift in how we approach global challenges. The implications extend beyond immediate headlines, potentially reshaping policy frameworks and international cooperation mechanisms.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                  "This is just the beginning of what promises to be a transformative period," commented one analyst who has been tracking these trends for over a decade. "The real question now is how quickly other stakeholders will adapt to this new paradigm."
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                  As we continue to monitor this evolving situation, the full scope of its impact remains to be seen. What's clear, however, is that we are witnessing a pivotal moment that may well be referenced in history books for generations to come.
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Source</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  This article was originally published by {article.source}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;