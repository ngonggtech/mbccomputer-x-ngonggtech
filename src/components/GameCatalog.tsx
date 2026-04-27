import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gamepad2, Search, Filter, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Game } from '../types';
import { ALL_GAMES, GAME_CATEGORIES } from '../gamesDb';
import GameCard from './GameCard';

interface GameCatalogProps {
  selectedGames: Game[];
  onToggleGame: (game: Game) => void;
  onViewGameDetails?: (game: Game) => void;
}

export default function GameCatalog({ selectedGames, onToggleGame, onViewGameDetails }: GameCatalogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [page, setPage] = useState(1);
  const [randomGames, setRandomGames] = useState<Game[]>([]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Generate random games initially for the base list
    const shuffled = [...ALL_GAMES].sort(() => 0.5 - Math.random());
    setRandomGames(shuffled);

    // Check mobile
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const displayedGames = useMemo(() => {
    let source = ALL_GAMES;
    if (!selectedCategory && !searchQuery) {
      source = randomGames.length ? randomGames : ALL_GAMES;
    } else {
      if (selectedCategory) {
        source = source.filter(g => g.genre === selectedCategory);
      }
      if (searchQuery) {
        source = source.filter(g => g.title.toLowerCase().includes(searchQuery.toLowerCase()));
      }
    }
    return source;
  }, [selectedCategory, searchQuery, randomGames]);

  const itemsPerPage = isMobile ? 4 : 6;
  const totalPages = Math.ceil(displayedGames.length / itemsPerPage);
  const paginatedGames = displayedGames.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  useEffect(() => {
    setPage(1);
  }, [selectedCategory, searchQuery]);

  return (
    <section id="catalog" className="scroll-mt-32 py-2 px-6 max-w-7xl mx-auto flex gap-6 mt-4 flex-col lg:flex-row relative z-10 w-full">
      <div className="flex-1 flex flex-col gap-6 relative">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-white/10 pb-4 gap-4">
          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic text-white flex-1">
            CÁC GAME ĐI KÈM <span className="text-xs not-italic font-mono opacity-40 ml-2 text-white inline-block">Chọn game bạn thích </span>
          </h3>
          <div className="flex flex-wrap gap-2 items-center justify-end">
            {totalPages > 1 && (
              <div className="flex gap-1 mr-2 items-center text-white/50 text-[10px] font-mono">
                <button 
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="w-8 h-8 flex items-center justify-center border border-white/10 hover:border-white/40 hover:text-white transition-colors disabled:opacity-30"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="px-2">{page} / {totalPages}</span>
                <button 
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="w-8 h-8 flex items-center justify-center border border-white/10 hover:border-white/40 hover:text-white transition-colors disabled:opacity-30"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
            <button
              onClick={() => setShowCategoryMenu(!showCategoryMenu)}
              className="px-4 h-8 flex items-center justify-center gap-2 border border-cyber-blue text-cyber-blue cursor-pointer hover:bg-cyber-blue hover:text-black transition-colors text-[10px] uppercase font-bold tracking-widest"
            >
              <Filter className="w-3 h-3" />
              {selectedCategory ? selectedCategory : 'Thể Loại Game'}
            </button>
            {selectedCategory && (
              <button
                onClick={() => setSelectedCategory(null)}
                className="w-8 h-8 flex items-center justify-center border border-[#FF007A] text-[#FF007A] cursor-pointer hover:bg-[#FF007A] hover:text-white transition-colors"
                title="Xóa bộ lọc"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Context Menu / Mini Window */}
        <AnimatePresence>
          {showCategoryMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="absolute right-0 top-16 w-full max-w-[500px] bg-[#050505] border border-cyber-blue/30 p-4 shadow-[0_0_40px_rgba(0,255,209,0.1)] z-50 rounded-sm"
            >
              <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                <h4 className="text-[#00FFD1] text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  <Gamepad2 className="w-4 h-4" /> Chọn Thể Loại
                </h4>
                <button onClick={() => setShowCategoryMenu(false)} className="text-white/50 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {GAME_CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setShowCategoryMenu(false);
                    }}
                    className={`text-[10px] uppercase px-3 py-1.5 border transition-all ${selectedCategory === cat ? 'border-[#00FFD1] bg-[#00FFD1]/10 text-[#00FFD1]' : 'border-white/10 text-white/70 hover:border-white/40 hover:text-white bg-[#111]'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative group mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-cyber-blue transition-colors" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="TÌM KIẾM TỰA GAME..."
            className="bg-[#111] border border-white/10 py-3 pl-12 pr-6 w-full focus:outline-none focus:border-cyber-blue transition-all font-mono text-[10px] uppercase tracking-widest"
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 flex-1">
          {paginatedGames.map((game) => (
            <GameCard 
              key={game.id} 
              game={game} 
              onSelect={onToggleGame}
              onViewDetails={onViewGameDetails}
              isSelected={selectedGames.some(sg => sg.id === game.id)}
            />
          ))}
          {paginatedGames.length === 0 && (
            <div className="col-span-full py-12 flex items-center justify-center text-white/40 font-mono text-sm uppercase tracking-widest">
              Không có kết quả...
            </div>
          )}
        </div>

        <div className="mt-8 p-6 bg-[#111] border-l-2 border-cyber-pink flex items-center justify-between">
          <p className="text-[11px] opacity-80 uppercase tracking-widest">
            Không thấy tựa game yêu thích của bạn? Nhấp yêu cầu và kỹ thuật viên chúng tôi sẽ kiểm tra độ tương thích.
          </p>
        </div>
      </div>
    </section>
  );
}
