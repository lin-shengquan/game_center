import { useNavigate } from 'react-router-dom';
import { Users } from 'lucide-react';
import { RatingStars } from './RatingStars';
import { Game } from '@/types';

interface GameCardProps {
  game: Game;
}

function formatPlays(plays: number): string {
  if (plays >= 1000000) {
    return `${(plays / 1000000).toFixed(1)}M`;
  } else if (plays >= 1000) {
    return `${(plays / 1000).toFixed(1)}K`;
  }
  return plays.toString();
}

export function GameCard({ game }: GameCardProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/games/${game.id}`)}
      className="group bg-dark-800 rounded-xl overflow-hidden cursor-pointer border border-dark-600 hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={game.coverImage}
          alt={game.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-dark-900/80 backdrop-blur-sm rounded-full">
          <Users size={14} className="text-primary-400" />
          <span className="text-xs text-gray-300">{formatPlays(game.plays)}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
          {game.name}
        </h3>
        <div className="flex items-center justify-between">
          <RatingStars rating={game.rating} size={14} />
          <span className="text-xs text-gray-400 bg-dark-700 px-2 py-1 rounded-full">
            {game.category}
          </span>
        </div>
      </div>
    </div>
  );
}
