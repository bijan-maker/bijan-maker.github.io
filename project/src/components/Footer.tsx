import React from 'react';
import { Globe, Twitter, Facebook, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                Global<span className="text-blue-600 dark:text-blue-400">AI</span>News
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Delivering international news enhanced by artificial intelligence for faster, smarter global insights.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold mb-4">Sections</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/categories/politics" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Politics
                </Link>
              </li>
              <li>
                <Link 
                  to="/categories/technology" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link 
                  to="/categories/business" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Business
                </Link>
              </li>
              <li>
                <Link 
                  to="/categories/science" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Science
                </Link>
              </li>
              <li>
                <Link 
                  to="/categories/health" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Health
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold mb-4">Regions</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/regions/north-america" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  North America
                </Link>
              </li>
              <li>
                <Link 
                  to="/regions/europe" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Europe
                </Link>
              </li>
              <li>
                <Link 
                  to="/regions/asia" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Asia
                </Link>
              </li>
              <li>
                <Link 
                  to="/regions/middle-east" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Middle East
                </Link>
              </li>
              <li>
                <Link 
                  to="/regions/africa" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Africa
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold mb-4">Contact</h3>
            <div className="space-y-4">
              <p className="flex items-start text-gray-600 dark:text-gray-400">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-blue-600 dark:text-blue-400" />
                <span>contact@globalalinews.com</span>
              </p>
              <div>
                <h4 className="text-gray-900 dark:text-white font-semibold mb-2">Subscribe to our newsletter</h4>
                <form className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 p-2 rounded-l-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-r-md transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} GlobalAINews. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-4 text-sm">
              <Link 
                to="/privacy" 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                to="/about" 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;