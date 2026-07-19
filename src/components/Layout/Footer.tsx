import { Gamepad2, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-dark-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-purple-500 rounded-xl flex items-center justify-center">
              <Gamepad2 size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold text-white">游戏中心</span>
          </div>

          <div className="text-gray-400 text-center md:text-right">
            <p className="flex items-center justify-center md:justify-end gap-1">
              Made with <Heart size={14} className="text-red-500 fill-red-500" /> by 游戏中心团队
            </p>
            <p className="mt-2 text-sm">
              © 2026 游戏中心. All rights reserved.
            </p>
            <p className="mt-3 text-sm text-gray-500">
              开发者：lai hongsheng
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
