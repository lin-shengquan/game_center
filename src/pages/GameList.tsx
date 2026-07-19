import { CategoryNav } from '@/components/CategoryNav';
import { GameCard } from '@/components/GameCard';
import { SearchBar } from '@/components/SearchBar';
import { useFilteredGames } from '@/store/gameStore';

export function GameList() {
  const filteredGames = useFilteredGames();

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white">游戏列表</h1>
        <p className="text-gray-400">发现更多精彩的免费小游戏</p>
        <SearchBar />
      </div>

      <CategoryNav />

      {filteredGames.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg">没有找到符合条件的游戏</p>
          <p className="text-gray-500 mt-2">尝试更换搜索关键词或选择其他分类</p>
        </div>
      )}
    </div>
  );
}
