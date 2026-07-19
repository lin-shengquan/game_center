import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { bannerItems } from '@/data/mockGames';
import { resolveArtworkUrl, setFallbackArtwork } from '@/lib/artwork';

export function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + bannerItems.length) % bannerItems.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % bannerItems.length);
  };

  return (
    <div className="relative rounded-2xl overflow-hidden h-[300px] md:h-[400px]">
      <div className="relative w-full h-full">
        {bannerItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={resolveArtworkUrl(item.image)}
              alt={item.title}
              onError={(event) => setFallbackArtwork(event.currentTarget, item.title, 'banner')}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-dark-900/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 animate-slide-up">
                {item.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-200 mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                {item.subtitle}
              </p>
              <button
                onClick={() => navigate(`/games/${item.gameId}`)}
                className="self-start px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-500 text-white font-semibold rounded-xl hover:scale-105 transition-transform animate-slide-up"
                style={{ animationDelay: '0.2s' }}
              >
                立即游玩
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-dark-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-dark-800 transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-dark-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-dark-800 transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {bannerItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-gradient-to-r from-primary-500 to-purple-500'
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
