import { motion, AnimatePresence } from 'motion/react';
import { Send, X } from 'lucide-react';
import { Game } from '../types';

interface RequestPanelProps {
  selectedGames: Game[];
  selectedSoftware: Game[];
  onRemove: (id: string) => void;
  onRemoveSoftware: (id: string) => void;
  onSubmit: () => void;
}

export default function RequestPanel({ selectedGames, selectedSoftware, onRemove, onRemoveSoftware, onSubmit }: RequestPanelProps) {
  if (selectedGames.length === 0 && selectedSoftware.length === 0) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-12 right-6 z-50 w-full max-w-sm"
    >
      <div className="bg-[#050505] p-5 border-t border-l border-r border-[#FF007A]/50 shadow-[0_0_30px_rgba(255,0,122,0.15)] flex flex-col gap-4">
        <div className="flex-1 w-full overflow-hidden">
          <div className="text-[10px] uppercase font-bold text-cyber-pink tracking-widest border-b border-[#FF007A]/20 pb-2 mb-3">Danh Sách Cài Đặt / Tặng Kèm</div>
          <div className="flex flex-col gap-2 max-h-32 overflow-y-auto pr-2 scrollbar-hide">
            <AnimatePresence>
              {selectedGames.map((game) => (
                <motion.div
                  key={game.id}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                  className="flex items-center justify-between text-xs font-mono bg-[#111] p-2 border border-white/5"
                >
                  <span className="truncate mr-2 uppercase text-white/80">[GAME] {game.title}</span>
                  <button 
                    onClick={() => onRemove(game.id)}
                    className="hover:text-cyber-pink transition-colors text-white/40"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </motion.div>
              ))}
              {selectedSoftware.map((sw) => (
                <motion.div
                  key={sw.id}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                  className="flex items-center justify-between text-xs font-mono bg-[#111] p-2 border border-[#9D00FF]/30"
                >
                  <span className="truncate mr-2 uppercase text-[#9D00FF]">[PHẦN MỀM] {sw.title}</span>
                  <button 
                    onClick={() => onRemoveSoftware(sw.id)}
                    className="hover:text-[#9D00FF] transition-colors text-[#9D00FF]/50"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <button
          onClick={onSubmit}
          className="w-full bg-cyber-pink text-black px-4 py-3 font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-white transition-colors"
        >
          <Send className="w-3 h-3" />
          Hoàn Tất Hệ Thống
        </button>
      </div>
    </motion.div>
  );
}
