export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  source: string;
  publishedAt: string;
  imageUrl: string;
  category: string;
  region: string;
  url: string;
  isBookmarked?: boolean;
}

export type NewsCategory = 
  | 'politics'
  | 'technology'
  | 'business'
  | 'science'
  | 'health'
  | 'entertainment'
  | 'sports';

export type Region = 
  | 'global'
  | 'north-america'
  | 'europe'
  | 'asia'
  | 'middle-east'
  | 'africa'
  | 'south-america'
  | 'oceania';

export interface AiSearchParams {
  query: string;
  category?: NewsCategory;
  region?: Region;
}