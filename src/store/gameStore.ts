import { create } from 'zustand';
import { Game } from '@/types';
import { games, categories } from '@/data/mockGames';

interface GameStore {
  games: Game[];
  categories: typeof categories;
  selectedCategory: string;
  searchQuery: string;
  setSelectedCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
  filteredGames: Game[];
  getGameById: (id: string) => Game | undefined;
}

export const useGameStore = create<GameStore>((set, get) => ({
  games,
  categories,
  selectedCategory: 'all',
  searchQuery: '',

  setSelectedCategory: (category) => set({ selectedCategory: category }),

  setSearchQuery: (query) => set({ searchQuery: query }),

  filteredGames: [],

  getGameById: (id) => get().games.find((game) => game.id === id),
}));

export const useFilteredGames = () => {
  const { games, selectedCategory, searchQuery } = useGameStore();

  return games.filter((game) => {
    const matchesCategory = selectedCategory === 'all' || game.category === selectedCategory;
    const matchesSearch = game.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          game.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
};
