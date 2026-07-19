import { Grid3X3, Puzzle, Swords, Shield, CreditCard, User, Sparkles, Target } from 'lucide-react';
import { useGameStore } from '@/store/gameStore';

const iconMap: Record<string, typeof Grid3X3> = {
  Grid3X3,
  Puzzle,
  Swords,
  Shield,
  CreditCard,
  User,
  Sparkles,
  Target,
};

export function CategoryNav() {
  const { categories, selectedCategory, setSelectedCategory } = useGameStore();

  return (
    <div className="overflow-x-auto pb-2 scrollbar-hide">
      <div className="flex gap-3 w-max">
        {categories.map((category) => {
          const Icon = iconMap[category.icon] || Grid3X3;
          const isSelected = selectedCategory === category.id;

          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 ${
                isSelected
                  ? 'bg-gradient-to-r from-primary-500 to-purple-500 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-dark-800 text-gray-300 hover:bg-dark-700 hover:text-white border border-dark-600'
              }`}
            >
              <Icon size={18} />
              <span className="font-medium">{category.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
