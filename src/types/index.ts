export interface Game {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  screenshots: string[];
  category: string;
  rating: number;
  plays: number;
  gameUrl: string;
  isFeatured: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface BannerItem {
  id: string;
  gameId: string;
  title: string;
  subtitle: string;
  image: string;
}
