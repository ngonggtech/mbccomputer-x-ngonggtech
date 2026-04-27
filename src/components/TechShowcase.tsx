import { motion } from 'motion/react';
import { ShieldCheck, Truck, Wrench } from 'lucide-react';

const FEATURES = [
  {
    icon: Wrench,
    title: "Lắp Ráp Chuẩn Kỹ Thuật",
    desc: "Mỗi hệ thống đều trải qua bài test cường độ cao 24h kèm theo tinh chỉnh firmware đặc biệt để tối ưu nhiệt độ."
  },
  {
    icon: Truck,
    title: "Giao Hàng Bạch Kim",
    desc: "Vận chuyển nội bộ, lắp đặt tại nhà, và tối ưu trực tiếp bởi đội ngũ kỹ sư thực thụ."
  },
  {
    icon: ShieldCheck,
    title: "Hỗ Trợ Trọn Đời",
    desc: "Kết nối trực tiếp tới người lắp máy. Không robot, không kịch bản. Hoàn toàn làm chủ kỹ thuật."
  }
];

export default function TechShowcase() {
  return (
    <section id="systems" className="py-8 bg-transparent">
      <div className="border-t border-white/10 pt-8 mt-4 mb-6">
        <h3 className="text-2xl font-bold uppercase tracking-tighter italic">Góc Trưng Bày Phần Cứng</h3>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          {FEATURES.map((f, i) => (
              <div key={i} className="hover-cyber-3d-pink flex gap-4 p-5 bg-[#111] border border-white/5 items-start transition-all hover:border-[#FF007A]/50">
              <div className="flex-shrink-0 w-10 h-10 border border-[#FF007A]/20 flex items-center justify-center bg-[#151515]">
                <f.icon className="w-5 h-5 text-cyber-pink" />
              </div>
              <div>
                <h4 className="text-sm font-bold mb-1 tracking-tight uppercase text-white/90">{f.title}</h4>
                <p className="text-[11px] opacity-60 font-sans leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="hover-cyber-3d-pink relative group border border-white/5 bg-[#151515] p-1 flex">
          <div className="relative overflow-hidden w-full h-[300px]">
             <img 
              src="https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1200&auto=format&fit=crop" 
              alt="High-end PC internals" 
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 transition-duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
               <div className="p-4 w-full flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#00FFD1] uppercase font-mono">Bản Dựng Tham Khảo Hiện Tại</span>
                    <span className="font-bold uppercase tracking-widest text-sm">PHANTOM-V SERIES</span>
                  </div>
                  <div className="px-3 py-1 bg-cyber-blue text-black text-[10px] font-black uppercase">
                    Có Sẵn
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
