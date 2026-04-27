import { motion } from 'motion/react';
import { ChevronLeft, Zap, Gift, Monitor } from 'lucide-react';

interface PromotionsPageProps {
  onBack: () => void;
}

const PROMOTIONS = [
  {
    id: 'DEAL_01',
    title: 'ƯU ĐÃI ĐA VŨ TRỤ',
    desc: 'Mua bất kỳ PC Cao Cấp nào, nhận ngay 3 game Indie huyền thoại được tải sẵn hoàn toàn miễn phí. Chương trình áp dụng cho tất cả các dòng PC có GPU từ RTX 4070 trở lên hoặc RX 7800 XT trở lên.',
    icon: Gift,
    color: 'cyber-blue',
    hex: '#00FFD1',
    timeline: 'Đến hết tháng này'
  },
  {
    id: 'DEAL_02',
    title: 'GÓI COMBO MÀN HÌNH',
    desc: 'Giảm thêm 10% khi mua kèm hệ thống dùng GPU tầm cao. Lựa chọn các dòng màn hình 144Hz trở lên từ MSI, ASUS, hoặc GIGABYTE sẽ được tự động áp dụng ưu đãi khi thanh toán.',
    icon: Monitor,
    color: 'cyber-pink',
    hex: '#FF007A',
    timeline: 'Số lượng có hạn'
  },
  {
    id: 'DEAL_03',
    title: 'GIA TỐC HYPER-WARP',
    desc: 'Miễn phí nâng cấp RAM từ 16GB lên 32GB đối với mọi cấu hình tuỳ chỉnh trị giá trên 30 triệu đồng. Tối đa hoá hiệu năng đa nhiệm mà không tốn thêm chi phí.',
    icon: Zap,
    color: '[#9D00FF]',
    hex: '#9D00FF',
    timeline: 'Chỉ trong tuần này'
  }
];

export default function PromotionsPage({ onBack }: PromotionsPageProps) {
  return (
    <div className="flex-1 max-w-7xl mx-auto w-full px-6 py-12 flex flex-col pt-24 lg:pt-32">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 group text-white hover:text-cyber-blue transition-colors px-4 py-2 border border-white/10 hover:border-cyber-blue bg-[#111] hover:bg-[#1A1A1A]"
        >
          <ChevronLeft className="w-5 h-5 group-hover:text-cyber-blue transition-colors" />
          <span className="text-xs font-mono uppercase font-bold tracking-widest">Trở Về</span>
        </button>
        <div className="mt-4 md:mt-0 md:ml-4">
          <h1 className="text-3xl font-black uppercase tracking-tighter italic">CHƯƠNG TRÌNH KHUYẾN MÃI</h1>
          <p className="text-sm font-mono text-cyber-blue mt-1">CÁC ƯU ĐÃI ĐANG KÍCH HOẠT</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROMOTIONS.map((promo, idx) => (
          <motion.div
            key={promo.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`hover-cyber-3d-pink bg-[#151515] border border-white/5 p-6 flex flex-col relative overflow-hidden group`}
            style={{ 
              ['--hover-color' as string]: promo.hex
            }}
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-${promo.color} blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity`} />
            
            <div className="flex justify-between items-start mb-6">
              <div className={`text-[10px] text-${promo.color} font-mono tracking-widest`}>[{promo.id}]</div>
              <div className={`w-8 h-8 rounded-full bg-[#111] flex items-center justify-center border border-${promo.color}/30 text-${promo.color}`}>
                <promo.icon className="w-4 h-4" />
              </div>
            </div>

            <h3 className="text-xl font-bold uppercase tracking-tight mb-4 group-hover:text-white transition-colors">{promo.title}</h3>
            
            <p className="text-sm opacity-60 font-sans leading-relaxed mb-8 flex-1">
              {promo.desc}
            </p>

            <div className="border-t border-white/10 pt-4 flex justify-between items-center text-[10px] font-mono">
              <span className="opacity-50 uppercase">Tình trạng</span>
              <span className={`text-${promo.color}`}>{promo.timeline}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
