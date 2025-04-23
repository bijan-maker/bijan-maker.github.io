import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { NewsProvider } from './context/NewsContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import BookmarksPage from './pages/BookmarksPage';
import AiAssistantPage from './pages/AiAssistantPage';

function App() {
  return (
    <ThemeProvider>
      <NewsProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/article/:id" element={<ArticleDetailPage />} />
                <Route path="/bookmarks" element={<BookmarksPage />} />
                <Route path="/ai-assistant" element={<AiAssistantPage />} />
                {/* Add other routes as needed */}
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </NewsProvider>
    </ThemeProvider>
  );
}

export default App;