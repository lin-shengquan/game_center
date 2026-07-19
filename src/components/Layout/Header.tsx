import { Gamepad2, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: '首页', path: '/' },
    { name: '游戏列表', path: '/games' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-dark-900/90 backdrop-blur-md border-b border-dark-700">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Gamepad2 size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold text-white">游戏中心</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-dark-700 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
