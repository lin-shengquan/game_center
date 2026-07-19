import { Banner } from '@/components/Banner';
import { CategoryNav } from '@/components/CategoryNav';
import { GameCard } from '@/components/GameCard';
import { SearchBar } from '@/components/SearchBar';
import { useFilteredGames } from '@/store/gameStore';
import { games } from '@/data/mockGames';

export function Home() {
  const filteredGames = useFilteredGames();
  const featuredGames = games.filter((game) => game.isFeatured);

  return (
    <div className="space-y-8 animate-fade-in">
      <Banner />

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">热门推荐</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-2xl font-bold text-white">浏览游戏</h2>
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
    </div>
  );
}
