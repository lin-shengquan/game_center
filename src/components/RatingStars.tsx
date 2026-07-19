import { Star } from 'lucide-react';

interface RatingStarsProps {
  rating: number;
  size?: number;
}

export function RatingStars({ rating, size = 16 }: RatingStarsProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star
          key={`full-${i}`}
          size={size}
          className="fill-yellow-400 text-yellow-400"
        />
      ))}
      {hasHalfStar && (
        <div className="relative">
          <Star
            size={size}
            className="text-gray-400"
          />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: 'inset(0 50% 0 0)' }}
          >
            <Star
              size={size}
              className="fill-yellow-400 text-yellow-400"
            />
          </div>
        </div>
      )}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star
          key={`empty-${i}`}
          size={size}
          className="text-gray-400"
        />
      ))}
      <span className="ml-1 text-sm text-gray-300">{rating}</span>
    </div>
  );
}
