import { Search } from 'lucide-react';
import { useGameStore } from '@/store/gameStore';

export function SearchBar() {
  const { searchQuery, setSearchQuery } = useGameStore();

  return (
    <div className="relative max-w-xl w-full mx-auto">
      <div className="relative">
        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="搜索游戏..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-dark-800 border border-dark-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
        />
      </div>
    </div>
  );
}
