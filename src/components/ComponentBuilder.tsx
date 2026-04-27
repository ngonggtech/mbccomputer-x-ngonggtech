import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, HardDrive, LayoutTemplate, MemoryStick, Power, Server, MonitorSmartphone, X, Check, Trash2, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { Component } from '../types';
import { COMPONENTS } from '../constants';

const CATEGORIES: { id: Component['type'], label: string, icon: any }[] = [
  { id: 'CPU', label: 'Vi xử lý', icon: Cpu },
  { id: 'Motherboard', label: 'Bo mạch chủ', icon: LayoutTemplate },
  { id: 'GPU', label: 'Card đồ họa', icon: MonitorSmartphone },
  { id: 'RAM', label: 'Bộ nhớ RAM', icon: MemoryStick },
  { id: 'Storage', label: 'Ổ cứng', icon: HardDrive },
  { id: 'PSU', label: 'Nguồn', icon: Power },
  { id: 'Case', label: 'Vỏ Case', icon: Server }
];

const SUGGESTED_GAMES_LOW = [
  { name: 'Valorant', fps: 320, img: 'https://wallpapercave.com/wp/wp6161917.jpg?q=80&w=600&auto=format&fit=crop' },
  { name: 'CS2', fps: 280, img: 'https://wallpapercave.com/wp/wp12803694.png?q=80&w=600&auto=format&fit=crop' },
  { name: 'League of Legends', fps: 400, img: 'https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/LOL_2560x1440-98749e0d718e82d27a084941939bc9d3?q=80&w=600&auto=format&fit=crop' },
  { name: 'GTA V', fps: 160, img: 'https://4kwallpapers.com/images/wallpapers/grand-theft-auto-v-2880x1800-10738.jpg?q=80&w=600&auto=format&fit=crop' },
  { name: 'PUBG', fps: 160, img: 'https://wstatic-prod-boc.krafton.com/pubg-legacy/2022/12/PUBG_BG_EGS@1920x1080.jpg?q=80&w=600&auto=format&fit=crop' },
  { name: 'Black Myth: Wukong', fps: 65, img: 'https://cdn.wccftech.com/wp-content/uploads/2024/06/Black-Myth_-Wukong_Key-Art-scaled.jpeg?q=80&w=600&auto=format&fit=crop' }
];

const SUGGESTED_GAMES_HIGH = [
  { name: 'Resident Evil Requiem', fps: 120, img: 'https://tse2.mm.bing.net/th/id/OIP.eWIqt_rdWnt-GYxct-HL0QHaEK?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3?q=80&w=600&auto=format&fit=crop' },
  { name: 'Dying Light: The Beast', fps: 100, img: 'https://static1.dualshockersimages.com/wordpress/wp-content/uploads/2025/06/dying-light-the-beast.jpg?q=80&w=600&auto=format&fit=crop' },
  { name: 'Metal Gear Solid Delta', fps: 90, img: 'https://static.deltiasgaming.com/2025/08/Metal-Gear-Solid-Delta.jpg?q=80&w=600&auto=format&fit=crop' },
  { name: 'Battlefield 6', fps: 120, img: 'https://gamingbolt.com/wp-content/uploads/2025/07/Battlefield-6.jpg?q=80&w=600&auto=format&fit=crop' },
  { name: 'Black Myth: Wukong', fps: 100, img: 'https://cdn.wccftech.com/wp-content/uploads/2024/06/Black-Myth_-Wukong_Key-Art-scaled.jpeg?q=80&w=600&auto=format&fit=crop' },
  { name: 'Cyberpunk 2077', fps: 80, img: 'https://image.api.playstation.com/vulcan/ap/rnd/202311/2812/ae84720b553c4ce943e9c342621b60f198beda0dbf533e21.jpg?q=80&w=600&auto=format&fit=crop' }
];

export default function ComponentBuilder() {
  const [selectedParts, setSelectedParts] = useState<Record<string, Component>>({});
  const [activeCategory, setActiveCategory] = useState<Component['type']>('CPU');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  const handleCategoryChange = (catId: Component['type']) => {
    setActiveCategory(catId);
    setSearchQuery('');
    setCurrentPage(0);
  };

  const handleSelect = (comp: Component) => {
    setSelectedParts(prev => ({
      ...prev,
      [comp.type]: comp
    }));
  };

  const currentOptions = useMemo(() => {
    return COMPONENTS.filter(c => c.type === activeCategory);
  }, [activeCategory]);

  const filteredOptions = useMemo(() => {
    return currentOptions.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [currentOptions, searchQuery]);

  const ITEMS_PER_PAGE = 4;
  const totalPages = Math.ceil(filteredOptions.length / ITEMS_PER_PAGE);

  const paginatedOptions = useMemo(() => {
    return filteredOptions.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);
  }, [filteredOptions, currentPage]);

  const totalPrice = useMemo(() => {
    return (Object.values(selectedParts) as Component[]).reduce((sum, item) => sum + item.price, 0);
  }, [selectedParts]);

  const isComplete = Object.keys(selectedParts).length === CATEGORIES.length;
  const suggestedGames = totalPrice <= 20000000 ? SUGGESTED_GAMES_LOW : SUGGESTED_GAMES_HIGH;

  return (
    <section id="builder" className="py-8 px-6 max-w-7xl mx-auto flex flex-col gap-6 w-full">
      <div className="flex justify-between items-end border-b border-white/10 pb-4">
        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic">
          Tự Build PC <span className="text-xs not-italic font-mono opacity-40 ml-2">Giá cập nhật theo thời gian thực</span>
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Categories Sidebar */}
        <div className="w-full lg:w-1/4 flex flex-col gap-2">
          {CATEGORIES.map(cat => {
            const isActive = activeCategory === cat.id;
            const hasSelected = !!selectedParts[cat.id];
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`hover-cyber-3d-pink flex items-center justify-between p-4 border text-left transition-all ${
                  isActive 
                    ? 'border-[#FF007A] bg-[#FF007A]/10' 
                    : 'border-white/5 bg-[#111] hover:border-[#FF007A]/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <cat.icon className={`w-4 h-4 ${isActive ? 'text-[#00FFD1]' : 'text-white/50'}`} />
                  <div>
                    <div className={`text-xs font-bold uppercase tracking-widest ${isActive ? 'text-[#00FFD1]' : 'text-white/80'}`}>
                      {cat.id}
                    </div>
                    {hasSelected && (
                      <div className="text-[10px] opacity-60 font-mono truncate max-w-[120px]">
                        {selectedParts[cat.id].name}
                      </div>
                    )}
                  </div>
                </div>
                {hasSelected && <Check className="w-4 h-4 text-[#00FFD1]" />}
              </button>
            )
          })}
        </div>

        {/* Options Grid */}
        <div className="flex-1">
          {/* Search Box */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder={`Tìm ${activeCategory.toLowerCase()}...`}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(0);
              }}
              className="w-full bg-[#151515] border border-white/10 pl-10 pr-4 py-3 text-sm font-mono focus:outline-none focus:border-[#00FFD1] transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AnimatePresence mode="popLayout">
              {paginatedOptions.map(comp => {
                const isSelected = selectedParts[comp.type]?.id === comp.id;
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    key={comp.id}
                    onClick={() => handleSelect(comp)}
                    className={`hover-cyber-3d-pink relative cursor-pointer group bg-[#151515] border p-1 transition-all duration-300 ${
                      isSelected 
                        ? 'border-[#FF007A] bg-gradient-to-b from-[#FF007A]/10 to-transparent' 
                        : 'border-white/5 hover:border-[#FF007A]/50'
                    }`}
                  >
                    <div className="h-32 bg-[#222] relative overflow-hidden flex items-center justify-center">
                      <img 
                        src={comp.image} 
                        alt={comp.name} 
                        className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#151515] to-transparent/20" />
                      <div className="absolute top-2 right-2 px-2 py-1 bg-black/60 border border-white/10 text-[10px] font-mono font-bold">
                        {new Intl.NumberFormat('vi-VN').format(comp.price)}đ
                      </div>
                    </div>
                    <div className="p-4 relative z-10 border-t border-white/5 bg-[#1A1A1A]">
                      <h4 className="text-sm font-bold tracking-tight uppercase mb-1">{comp.name}</h4>
                      <p className="text-[10px] text-white/50 font-mono line-clamp-1">{comp.specs}</p>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
          
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-6 bg-[#111] p-2 border border-white/5">
              <button
                disabled={currentPage === 0}
                onClick={() => setCurrentPage(p => p - 1)}
                className="p-2 border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/5 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="text-[10px] uppercase font-mono tracking-widest text-[#00FFD1]">
                Trang {currentPage + 1} / {totalPages}
              </div>
              <button
                disabled={currentPage === totalPages - 1}
                onClick={() => setCurrentPage(p => p + 1)}
                className="p-2 border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/5 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {currentOptions.length > 0 && filteredOptions.length === 0 && (
            <div className="p-8 border border-white/5 border-dashed text-center bg-[#111] mt-4">
              <p className="text-[11px] uppercase tracking-widest text-white/40">Không tìm thấy linh kiện nào phù hợp.</p>
            </div>
          )}

          {currentOptions.length === 0 && (
            <div className="p-8 border border-white/5 border-dashed text-center bg-[#111] mt-4">
              <p className="text-[11px] uppercase tracking-widest text-white/40">Đang đồng bộ kho tàng... Vui lòng quay lại sau.</p>
            </div>
          )}
        </div>

        {/* Build Summary Right Sidebar */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          <div className="bg-[#111] border border-white/5 p-6 sticky top-24">
            <h4 className="text-xs font-bold uppercase tracking-widest border-b border-white/10 pb-2 mb-4 flex justify-between items-center">
              <span>Bảng Build Cấu Hình</span>
              <div className="flex items-center gap-3">
                {Object.keys(selectedParts).length > 0 && (
                  <button 
                    onClick={() => setSelectedParts({})}
                    className="text-[#FF007A] hover:text-white text-[9px] flex items-center gap-1 transition-colors border border-transparent hover:border-white/10 px-2 py-1"
                  >
                    <Trash2 className="w-3 h-3" /> BỎ CHỌN TOÀN BỘ
                  </button>
                )}
                <span className="text-[#00FFD1] font-mono">[{Object.keys(selectedParts).length}/{CATEGORIES.length}]</span>
              </div>
            </h4>
            
            <div className="flex flex-col gap-3 min-h-[200px]">
              {CATEGORIES.map(cat => {
                const part = selectedParts[cat.id];
                return part ? (
                  <div key={cat.id} className="flex justify-between items-start border-b border-white/5 pb-2">
                    <div className="flex flex-col">
                      <span className="text-[9px] text-[#FF007A] font-mono uppercase">{cat.id}</span>
                      <span className="text-xs uppercase font-bold tracking-tight">{part.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono">{new Intl.NumberFormat('vi-VN').format(part.price)}đ</span>
                      <button 
                        onClick={() => setSelectedParts(prev => { 
                          const newParts = {...prev}; 
                          delete newParts[cat.id]; 
                          return newParts; 
                        })}
                        className="text-white/30 hover:text-red-500 transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div key={cat.id} className="flex justify-between items-center border-b border-white/5 pb-2 opacity-30">
                    <span className="text-[9px] font-mono uppercase">Yêu Cầu {cat.id}...</span>
                  </div>
                )
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-[#00FFD1]/30">
              <div className="flex justify-between items-end mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest">Tổng Ước Tính</span>
                <span className="text-xl font-black font-mono text-[#00FFD1] leading-none">{new Intl.NumberFormat('vi-VN').format(totalPrice)}đ</span>
              </div>
              <button 
                disabled={Object.keys(selectedParts).length === 0}
                className="w-full bg-[#00FFD1] text-black disabled:bg-white/5 disabled:text-white/20 px-4 py-3 font-bold uppercase tracking-widest text-[10px] hover:bg-white transition-colors"
              >
                Tiến Hành Thanh Toán
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isComplete && (
          <motion.div 
            initial={{ opacity: 0, y: 30, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: 30, height: 0 }}
            className="mt-8 pt-8 overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row gap-6 bg-[#0a0a0a] border border-[#00FFD1]/30 p-6 shadow-[0_0_30px_rgba(0,255,209,0.1)]">
              {/* Display Complete Case Picture */}
              <div className="w-full lg:w-1/3">
                <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-[#00FFD1] flex items-center gap-2">
                  <Server className="w-4 h-4" />
                  Cỗ Máy Của Bạn
                </h4>
                <div className="relative aspect-[3/4] bg-[#111] overflow-hidden border border-white/10 group">
                  <img 
                    src={totalPrice > 20000000 ? "https://hoanghapc.vn/media/lib/25-04-2021/vo-case-may-tinh-6.jpg" : "https://nguyencongpc.vn/media/news/2307_pc-van-phong-duoi-20-trieu-2.jpg"} 
                    alt="Hoàn chỉnh" 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-lighten"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                     <span className="px-2 py-1 bg-[#00FFD1] text-black text-[10px] font-black uppercase inline-block mb-1 shadow-[0_0_10px_rgba(0,255,209,0.5)]">
                       MỨC GIÁ: {totalPrice >= 20000000 ? 'HIGH-END' : 'MID-RANGE'}
                     </span>
                     <h5 className="font-bold text-lg leading-tight uppercase font-mono">Custom Setup</h5>
                  </div>
                </div>
              </div>
              
              {/* Suggested Games */}
              <div className="w-full lg:w-2/3">
                <h4 className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                  <MonitorSmartphone className="w-4 h-4" />
                  Khả Năng Chơi Game & Mức FPS
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {suggestedGames.map((game, i) => (
                     <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="relative aspect-[4/3] overflow-hidden border border-white/10 group cursor-default bg-[#151515]"
                     >
                       <img src={game.img} alt={game.name} className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-transparent" />
                       
                       {/* FPS Badge in corner */}
                       <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-[#00FFD1] text-black text-[10px] font-black font-mono shadow-[0_0_8px_rgba(0,255,209,0.6)]">
                         ~{game.fps} FPS
                       </div>
                       
                       <div className="absolute bottom-2 left-3 right-3">
                         <p className="text-[11px] font-bold uppercase leading-tight truncate drop-shadow-md">{game.name}</p>
                       </div>
                     </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
