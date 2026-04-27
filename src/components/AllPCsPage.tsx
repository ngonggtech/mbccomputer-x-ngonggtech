import { motion } from 'motion/react';
import { PREBUILT_PCS } from '../constants';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';

interface AllPCsPageProps {
  onBack: () => void;
  onSelectPC?: (pc: any) => void;
}

export default function AllPCsPage({ onBack, onSelectPC }: AllPCsPageProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-7xl mx-auto px-6 py-12 pt-32 flex-1 w-full flex flex-col"
    >
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-[10px] text-[#00FFD1] font-bold uppercase tracking-widest hover:text-white transition-colors mb-8 w-fit"
      >
        <ChevronLeft className="w-4 h-4" /> Quay Lại Trang Chủ
      </button>

      <div className="border-b border-white/10 pb-4 mb-8">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic">
          TẤT CẢ CẤU HÌNH <span className="text-sm md:text-xl not-italic font-mono opacity-40 ml-2"> BỘ SƯU TẬP</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {PREBUILT_PCS.map((pc, i) => (
          <motion.div
            key={pc.id}
            onClick={() => onSelectPC?.(pc)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative cursor-pointer border border-white/5 bg-[#111] overflow-hidden hover:border-[#00FFD1]/50 transition-colors flex flex-col"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0a0a0a] group-hover:shadow-[0_0_20px_rgba(0,255,209,0.4)] z-0 transition-shadow duration-500">
               <img src={pc.image} alt={pc.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent h-1/2 mt-auto" />
               <div className="absolute top-3 right-3 px-3 py-1.5 bg-[#00FFD1] text-black font-black text-xs shadow-[0_0_15px_rgba(0,255,209,0.3)]">
                 {new Intl.NumberFormat('vi-VN').format(pc.price)} VNĐ
               </div>
            </div>
            
            <div className="p-5 flex flex-col gap-3 relative z-10 flex-1">
               <h4 className="font-bold uppercase tracking-widest text-xl group-hover:text-[#00FFD1] transition-colors">{pc.name}</h4>
               <p className="text-[11px] font-mono opacity-60 text-white/70 flex-1">
                 {pc.specs}
               </p>
               
               <div className="mt-4 border-t border-white/10 pt-4 flex justify-between items-center group/btn">
                 <span className="text-xs uppercase font-bold tracking-widest text-[#FF007A] flex items-center gap-2">
                   <ShoppingCart className="w-4 h-4" /> Mua Ngay
                 </span>
                 <ChevronRight className="w-5 h-5 text-white/30 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
