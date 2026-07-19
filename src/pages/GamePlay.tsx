import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';
import { useGameStore } from '@/store/gameStore';

export function GamePlay() {
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

  const gameUrl = game.gameUrl.startsWith('/')
    ? `${import.meta.env.BASE_URL}${game.gameUrl.slice(1)}`
    : game.gameUrl;

  return (
    <div className="relative w-full h-screen bg-dark-950">
      <button
        onClick={() => navigate(`/games/${game.id}`)}
        className="absolute top-4 left-4 z-10 w-12 h-12 bg-dark-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-dark-800 transition-colors shadow-lg"
      >
        <ArrowLeft size={24} />
      </button>

      <button
        onClick={() => navigate('/')}
        className="absolute top-4 right-4 z-10 w-12 h-12 bg-dark-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-dark-800 transition-colors shadow-lg"
      >
        <X size={24} />
      </button>

      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
        <h1 className="text-xl font-semibold text-white bg-dark-900/80 backdrop-blur-sm px-6 py-2 rounded-full">
          {game.name}
        </h1>
      </div>

      <div className="w-full h-full">
        <iframe
          src={gameUrl}
          title={game.name}
          className="w-full h-full border-0"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
        />
      </div>
    </div>
  );
}
