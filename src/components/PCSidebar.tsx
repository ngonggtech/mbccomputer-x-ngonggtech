import { motion } from 'motion/react';
import { X, ShoppingCart, ChevronRight, HardDrive, Cpu, MemoryStick, MonitorPlay } from 'lucide-react';

interface PC {
  id: string;
  name: string;
  price: number;
  image: string;
  specs: string;
}

interface PCSidebarProps {
  pc: PC | null;
  onClose: () => void;
}

export default function PCSidebar({ pc, onClose }: PCSidebarProps) {
  if (!pc) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end pointer-events-none">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 pointer-events-auto backdrop-blur-sm"
      />
      
      <motion.div 
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="w-full sm:w-[450px] bg-[#050505] h-full relative pointer-events-auto flex flex-col border-l border-white/10"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-8 h-8 bg-black/50 border border-white/10 flex items-center justify-center hover:bg-cyber-blue hover:text-black transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="relative h-64 w-full bg-[#0a0a0a] flex-shrink-0">
          <img src={pc.image} alt={pc.name} className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
        </div>

        <div className="flex-1 overflow-y-auto p-6 scrollbar-hide flex flex-col gap-6">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tighter italic text-cyber-blue mb-2">
              {pc.name}
            </h2>
            <div className="inline-block bg-[#FF007A] text-black px-3 py-1 text-sm font-black shadow-[0_0_10px_rgba(255,0,122,0.5)]">
              {new Intl.NumberFormat('vi-VN').format(pc.price)} VNĐ
            </div>
          </div>
          
          <div className="space-y-4">
             <div className="flex items-center gap-2 text-[#00FFD1] border-b border-white/10 pb-2">
                <MonitorPlay className="w-4 h-4" />
                <h3 className="text-xs font-bold uppercase tracking-widest">Thông Số Cấu Hình</h3>
             </div>
             
             <div className="space-y-3">
               <div className="bg-white/5 p-4 border border-white/10 flex flex-col gap-1 rounded-sm">
                 <span className="text-[10px] uppercase font-mono opacity-60 text-cyber-blue">Chi tiết cấu hình</span>
                 <p className="font-mono text-sm leading-relaxed text-white/90">
                   {pc.specs}
                 </p>
               </div>

               <div className="grid grid-cols-2 gap-3 mt-4">
                 <div className="bg-white/5 p-3 border border-white/10 rounded-sm flex items-center gap-3">
                   <div className="w-8 h-8 shrink-0 bg-black/50 border border-white/10" />
                   <span className="text-[10px] font-bold uppercase leading-tight">Valorant<br/><span className="text-[#FF007A] text-sm">5/5</span></span>
                 </div>
                 <div className="bg-white/5 p-3 border border-white/10 rounded-sm flex items-center gap-3">
                   <div className="w-8 h-8 shrink-0 bg-black/50 border border-white/10" />
                   <span className="text-[10px] font-bold uppercase leading-tight">Adobe Premiere Pro<br/><span className="text-[#00FFD1] text-sm">4/5</span></span>
                 </div>
                 <div className="bg-white/5 p-3 border border-white/10 rounded-sm flex items-center gap-3">
                   <div className="w-8 h-8 shrink-0 bg-black/50 border border-white/10" />
                   <span className="text-[10px] font-bold uppercase leading-tight">Black Myth Wukong<br/><span className="text-cyber-blue text-sm">4/5</span></span>
                 </div>
                 <div className="bg-white/5 p-3 border border-white/10 rounded-sm flex items-center gap-3">
                   <div className="w-8 h-8 shrink-0 bg-black/50 border border-white/10" />
                   <span className="text-[10px] font-bold uppercase leading-tight">ARK: Survival Ascended<br/><span className="text-[#9D00FF] text-sm">3/5</span></span>
                 </div>
               </div>
             </div>
          </div>
        </div>

        <div className="bg-[#0A0A0A] border-t border-white/10 p-4 shrink-0 px-6">
          <button
            className="w-full flex items-center justify-center gap-2 py-4 bg-[#FF007A] text-white font-black uppercase tracking-widest border border-[#FF007A] hover:bg-transparent hover:text-[#FF007A] transition-all shadow-[0_0_20px_rgba(255,0,122,0.4)] hover:shadow-none"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="mt-0.5">Đặt Mua Ngay</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
