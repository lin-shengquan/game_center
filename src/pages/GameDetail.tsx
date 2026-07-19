import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Play } from 'lucide-react';
import { RatingStars } from '@/components/RatingStars';
import { useGameStore } from '@/store/gameStore';
import { categories } from '@/data/mockGames';
import { fallbackArtwork } from '@/lib/artwork';

export function GameDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const game = useGameStore((state) => state.getGameById(id || ''));

  if (!game) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-400 text-lg">游戏不存在</p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
        >
          返回首页
        </button>
      </div>
    );
  }

  const categoryName = categories.find((cat) => cat.id === game.category)?.name || game.category;

  function formatPlays(plays: number): string {
    if (plays >= 1000000) {
      return `${(plays / 1000000).toFixed(1)}M`;
    } else if (plays >= 1000) {
      return `${(plays / 1000).toFixed(1)}K`;
    }
    return plays.toString();
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
      >
        <ArrowLeft size={20} />
        <span>返回</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="rounded-2xl overflow-hidden">
            <img
              src={fallbackArtwork(game.name, 'cover')}
              alt={game.name}
              className="w-full h-64 lg:h-80 object-cover"
            />
          </div>

          {game.screenshots.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {game.screenshots.map((_screenshot, index) => (
                <img
                  key={index}
                  src={fallbackArtwork(`${game.name} ${index + 1}`, 'screenshot')}
                  alt={`${game.name}截图 ${index + 1}`}
                  className="w-full h-32 object-cover rounded-xl"
                />
              ))}
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm">
                {categoryName}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">{game.name}</h1>
          </div>

          <div className="flex items-center gap-6">
            <RatingStars rating={game.rating} size={20} />
            <div className="flex items-center gap-2 text-gray-300">
              <Users size={20} />
              <span>{formatPlays(game.plays)} 次游玩</span>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed">{game.description}</p>

          <button
            onClick={() => navigate(`/play/${game.id}`)}
            className="w-full py-4 bg-gradient-to-r from-primary-500 to-purple-500 text-white font-semibold text-lg rounded-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
          >
            <Play size={24} />
            开始游戏
          </button>
        </div>
      </div>
    </div>
  );
}
