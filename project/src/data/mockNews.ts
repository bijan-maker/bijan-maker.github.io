import { NewsArticle } from '../types';

export const mockNewsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'AI Algorithm Predicts Climate Change Impact With Unprecedented Accuracy',
    summary: 'New deep learning model shows 95% accuracy in predicting regional climate shifts over the next decade.',
    content: 'Scientists at the Global Climate Institute have developed a revolutionary AI algorithm that can predict the impact of climate change with unprecedented accuracy. The model, which uses deep learning techniques, has demonstrated a 95% accuracy rate in predicting regional climate shifts over the next decade. This breakthrough could significantly enhance our ability to prepare for and mitigate the effects of climate change.',
    author: 'Dr. Emma Chen',
    source: 'Science Today',
    publishedAt: '2025-05-22T10:30:00Z',
    imageUrl: 'https://images.pexels.com/photos/2373100/pexels-photo-2373100.jpeg',
    category: 'science',
    region: 'global',
    url: '#'
  },
  {
    id: '2',
    title: 'Global Quantum Computing Race Intensifies as New Players Enter',
    summary: 'Three new countries announce major investments in quantum computing research, shifting global tech dynamics.',
    content: 'The global race for quantum computing supremacy has intensified as three new countries announce major investments in research and development. Japan, India, and Brazil have committed billions to quantum computing initiatives, challenging the previous dominance of the US and China in this field. Industry experts suggest this shift could dramatically alter the global technology landscape within the next five years.',
    author: 'Richard Wong',
    source: 'Tech Insider',
    publishedAt: '2025-05-21T14:15:00Z',
    imageUrl: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg',
    category: 'technology',
    region: 'global',
    url: '#'
  },
  {
    id: '3',
    title: 'Historic Peace Agreement Signed in Middle East After Decades of Conflict',
    summary: 'Breakthrough negotiations result in landmark peace accord, establishing new diplomatic relations.',
    content: 'After nearly five decades of tension, a historic peace agreement has been signed between long-standing adversaries in the Middle East. The landmark accord, brokered through two years of secret negotiations, establishes new diplomatic and economic relations while addressing longstanding territorial disputes. International observers are calling this the most significant diplomatic breakthrough in the region this century.',
    author: 'Fatima Al-Jazari',
    source: 'Global Affairs',
    publishedAt: '2025-05-20T08:45:00Z',
    imageUrl: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
    category: 'politics',
    region: 'middle-east',
    url: '#'
  },
  {
    id: '4',
    title: 'European Union Announces Ambitious Green Energy Transition Plan',
    summary: 'New €500 billion initiative aims for carbon neutrality by 2040, creating millions of green jobs.',
    content: 'The European Union has unveiled an ambitious €500 billion green energy transition plan aimed at achieving carbon neutrality by 2040, a full decade ahead of previous targets. The comprehensive initiative includes major investments in renewable energy infrastructure, sustainable transportation networks, and green building renovations across all member states. Economic analysts project the creation of over 3 million new jobs in the green economy sector.',
    author: 'Martin Dubois',
    source: 'European Times',
    publishedAt: '2025-05-19T16:20:00Z',
    imageUrl: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
    category: 'business',
    region: 'europe',
    url: '#'
  },
  {
    id: '5',
    title: 'Breakthrough Medical Research Shows Promise for Alzheimer\'s Treatment',
    summary: 'Clinical trials report 67% reduction in cognitive decline using new gene therapy approach.',
    content: 'A groundbreaking medical research study has shown promising results for a new Alzheimer\'s treatment approach. The phase III clinical trials, involving over 3,000 patients across 12 countries, reported a 67% reduction in cognitive decline using a novel gene therapy technique. The research team, led by renowned neurologist Dr. Sophia Martinez, believes this could represent the most significant advancement in Alzheimer\'s treatment in over 30 years.',
    author: 'Dr. James Wilson',
    source: 'Medical Journal',
    publishedAt: '2025-05-18T09:10:00Z',
    imageUrl: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg',
    category: 'health',
    region: 'north-america',
    url: '#'
  },
  {
    id: '6',
    title: 'Major Cybersecurity Breach Affects Critical Infrastructure in Asia',
    summary: 'Coordinated cyber attack targets power grids and transportation systems across multiple countries.',
    content: 'A major cybersecurity breach has affected critical infrastructure across multiple Asian countries, targeting power grids, transportation systems, and government networks. Security experts attribute the sophisticated attack to a previously unknown threat actor with potential state sponsorship. Emergency response teams are working to contain the damage while international cybersecurity agencies have offered assistance in tracking the perpetrators.',
    author: 'Li Wei',
    source: 'Security Times',
    publishedAt: '2025-05-17T22:30:00Z',
    imageUrl: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg',
    category: 'technology',
    region: 'asia',
    url: '#'
  }
];

export const getNewsArticles = (): NewsArticle[] => {
  return mockNewsArticles;
};

export const getArticleById = (id: string): NewsArticle | undefined => {
  return mockNewsArticles.find(article => article.id === id);
};

export const getArticlesByRegion = (region: string): NewsArticle[] => {
  return mockNewsArticles.filter(article => article.region === region);
};

export const getArticlesByCategory = (category: string): NewsArticle[] => {
  return mockNewsArticles.filter(article => article.category === category);
};

export const searchArticles = (query: string): NewsArticle[] => {
  const lowerCaseQuery = query.toLowerCase();
  return mockNewsArticles.filter(
    article => 
      article.title.toLowerCase().includes(lowerCaseQuery) || 
      article.summary.toLowerCase().includes(lowerCaseQuery) ||
      article.content.toLowerCase().includes(lowerCaseQuery)
  );
};