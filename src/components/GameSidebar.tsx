import { motion, AnimatePresence } from 'motion/react';
import { X, Gamepad2, Layers } from 'lucide-react';
import { Game } from '../types';

interface GameSidebarProps {
  game: Game | null;
  onClose: () => void;
  onSelectGame: (game: Game) => void;
  isSelectedForInstall: boolean;
  type?: 'game' | 'software';
}

const BENCHMARKS = [
  { gpu: 'GTX 1660 Super', fps: 55 },
  { gpu: 'RTX 2060', fps: 78 },
  { gpu: 'RTX 3050', fps: 65 },
  { gpu: 'RTX 3060', fps: 110 }
];

export default function GameSidebar({ game, onClose, onSelectGame, isSelectedForInstall, type = 'game' }: GameSidebarProps) {
  if (!game) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 w-full md:w-1/3 min-w-[320px] max-w-sm h-full bg-[#0A0A0A] border-l border-white/10 z-[100] flex flex-col shadow-2xl overflow-hidden"
      >
        {/* Cover Image Background / Trailer */}
        <div className="relative h-48 sm:h-56 w-full flex-shrink-0 bg-black">
          {game.trailerUrl ? (
            <iframe
              className="w-full h-full object-cover pointer-events-none"
              src={game.trailerUrl.includes('?') ? `${game.trailerUrl}&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3` : `${game.trailerUrl}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3`}
              title={`${game.title} Trailer`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <img 
              src={game.image} 
              alt={game.title} 
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-black/50 hover:bg-white/10 border border-white/20 text-white rounded-none transition-colors backdrop-blur-sm z-10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto w-full px-6 -mt-8 relative z-10 custom-scrollbar pb-24">
          <div className="flex items-end justify-between mb-4">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter drop-shadow-md leading-none">
              {game.title}
            </h2>
            <div className="bg-[#00FFD1] text-black px-2 py-1 text-xs font-black rounded-sm shadow-[0_0_10px_rgba(0,255,209,0.5)]">
              {type === 'software' ? 'TÀI KHOẢN' : game.rating}
            </div>
          </div>
          
          <div className="text-[10px] text-white/50 font-mono uppercase mb-4 tracking-widest flex items-center gap-2">
            <Gamepad2 className="w-3 h-3" />
            {game.genre}
          </div>

          <p className="text-[13px] text-white/70 leading-relaxed font-sans mb-8">
            {game.description}
          </p>

          {type === 'software' ? (
            <div className="mb-6 border-t border-white/10 pt-6">
               <div className="flex items-center gap-2 mb-4 text-[#00FFD1]">
                  <Layers className="w-4 h-4" />
                  <h3 className="text-xs font-bold uppercase tracking-widest">Thời Hạn Tài Khoản</h3>
               </div>
               
               <div className="space-y-3">
                  <div className="bg-white/5 p-4 border border-white/10 flex justify-between items-center rounded-sm">
                    <span className="font-bold text-cyber-blue text-sm">1 THÁNG</span>
                    <span className="text-[10px] uppercase font-mono opacity-60">Gói Cơ Bản</span>
                  </div>
                  <div className="bg-white/5 p-4 border border-white/10 flex justify-between items-center rounded-sm">
                    <span className="font-bold text-cyber-pink text-sm">3 THÁNG</span>
                    <span className="text-[10px] uppercase font-mono opacity-60">Tặng Kèm Khi Mua PC Tầm Trung</span>
                  </div>
                  <div className="bg-white/5 p-4 border border-white/10 flex justify-between items-center rounded-sm">
                    <span className="font-bold text-[#FFD700] text-sm">6 THÁNG</span>
                    <span className="text-[10px] uppercase font-mono opacity-60">Gói Khuyên Dùng</span>
                  </div>
                  <div className="bg-white/5 p-4 border border-white/10 flex justify-between items-center rounded-sm">
                    <span className="font-bold text-[#9D00FF] text-sm">1 NĂM</span>
                    <span className="text-[10px] uppercase font-mono opacity-60">Tặng Kèm Khi Mua PC Cao Cấp</span>
                  </div>
               </div>
            </div>
          ) : (
            <div className="mb-6 border-t border-white/10 pt-6">
               <div className="flex items-center gap-2 mb-4 text-[#00FFD1]">
                  <Layers className="w-4 h-4" />
                  <h3 className="text-xs font-bold uppercase tracking-widest">Đánh Giá Hiệu Năng (1080p High)</h3>
               </div>
               
               <div className="space-y-4">
                 {BENCHMARKS.map((bench) => {
                    const widthPercent = Math.min((bench.fps / 144) * 100, 100); // 144 is max ref width
                    return (
                      <div key={bench.gpu} className="flex flex-col gap-1">
                        <div className="flex justify-between text-[11px] font-mono text-white/80">
                          <span>{bench.gpu}</span>
                          <span className="text-[#00FFD1] font-bold">{bench.fps} FPS</span>
                        </div>
                        <div className="w-full h-2 bg-white/5 overflow-hidden">
                          <motion.div 
                            className="h-full bg-[#00FFD1]"
                            initial={{ width: 0 }}
                            animate={{ width: `${widthPercent}%` }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                          />
                        </div>
                      </div>
                    );
                 })}
               </div>
            </div>
          )}
        </div>

        <div className="absolute bottom-0 w-full bg-[#0A0A0A] border-t border-white/10 p-4 z-50">
          <button
            onClick={() => onSelectGame(game)}
            className={`w-full py-4 text-xs font-bold uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(0,255,209,0.2)] hover:shadow-[0_0_25px_rgba(0,255,209,0.4)] ${
              isSelectedForInstall 
                ? 'bg-cyber-pink text-black border border-cyber-pink shadow-[0_0_15px_rgba(255,0,122,0.2)]'
                : 'bg-[#00FFD1] text-black border border-[#00FFD1]'
            }`}
          >
            {isSelectedForInstall ? 'Đã Chọn Cho Cài Đặt' : (type === 'software' ? 'Yêu Cầu Kích Hoạt Tài Khoản Này' : 'Yêu Cầu Cài Đặt Game Này')}
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
