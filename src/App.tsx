import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ArrowUp, MessageCircle, Phone, Volume2, VolumeX } from 'lucide-react';
import ReactPlayer from 'react-player';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PrebuiltPCs from './components/PrebuiltPCs';
import GameCatalog from './components/GameCatalog';
import TechShowcase from './components/TechShowcase';
import RequestPanel from './components/RequestPanel';
import ComponentBuilder from './components/ComponentBuilder';
import GameSidebar from './components/GameSidebar';
import PCSidebar from './components/PCSidebar';
import AllPCsPage from './components/AllPCsPage';
import PromotionsPage from './components/PromotionsPage';
import { Game } from './types';

import SoftwareCatalog from './components/SoftwareCatalog';

export default function App() {
  const [selectedGames, setSelectedGames] = useState<Game[]>([]);
  const [selectedSoftware, setSelectedSoftware] = useState<Game[]>([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [viewedGame, setViewedGame] = useState<Game | null>(null);
  const [viewedSoftware, setViewedSoftware] = useState<Game | null>(null);
  const [viewedPC, setViewedPC] = useState<any | null>(null);
  const [currentView, setCurrentView] = useState<'home' | 'all-pcs' | 'promotions'>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { scrollYProgress } = useScroll();
  const bgY1 = useTransform(scrollYProgress, [0, 1], [-200, 1200]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [1000, -500]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 0.8, 0.5]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

  const toggleGame = (game: Game) => {
    setSelectedGames(prev => {
      const exists = prev.find(g => g.id === game.id);
      if (exists) {
        return prev.filter(g => g.id !== game.id);
      }
      return [...prev, game];
    });
  };

  const toggleSoftware = (sw: Game) => {
    setSelectedSoftware(prev => {
      const exists = prev.find(s => s.id === sw.id);
      if (exists) {
        return prev.filter(s => s.id !== sw.id);
      }
      return [...prev, sw];
    });
  };

  const removeGame = (id: string) => {
    setSelectedGames(prev => prev.filter(g => g.id !== id));
  };

  const handleRequestSubmit = () => {
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
      setSelectedGames([]);
    }, 5000);
  };

  return (
    <div className="relative min-h-screen bg-transparent text-white font-sans selection:bg-cyber-blue selection:text-black flex flex-col">
      {/* Dynamic Animated Background Layers */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-cyber-black flex justify-center items-center">
        <div className="absolute inset-0 cyber-grid opacity-20 mask-image:linear-gradient(to_bottom,transparent,black,transparent)"></div>
        
        {/* Floating Light Orbs */}
        <motion.div 
          style={{ y: bgY1, opacity: opacity1 }} 
          className="absolute top-0 left-[10%] w-[40vw] h-[40vw] bg-[#00FFD1] blur-[150px] rounded-full mix-blend-lighten pointer-events-none" 
        />
        <motion.div 
          style={{ y: bgY2, opacity: opacity2 }} 
          className="absolute bottom-0 right-[10%] w-[50vw] h-[50vw] bg-[#FF007A] blur-[180px] rounded-full mix-blend-lighten pointer-events-none" 
        />
        <motion.div 
          style={{ y: bgY1, opacity: opacity2, scale: 1.5 }} 
          className="absolute top-[40%] right-[30%] w-[30vw] h-[30vw] bg-[#9D00FF] blur-[160px] rounded-full mix-blend-lighten pointer-events-none" 
        />
        
        {/* Scanning Light Strip */}
        <motion.div 
          style={{ y: bgY1 }} 
          className="absolute left-1/4 w-[3px] h-[50vh] bg-gradient-to-b from-transparent via-[#00FFD1] to-transparent blur-[2px] opacity-100 shadow-[0_0_30px_#00FFD1,0_0_60px_#00FFD1] pointer-events-none" 
        />
        <motion.div 
          style={{ y: bgY2 }} 
          className="absolute right-1/3 w-[2px] h-[60vh] bg-gradient-to-b from-transparent via-[#FF007A] to-transparent blur-[3px] opacity-100 shadow-[0_0_40px_#FF007A,0_0_80px_#FF007A] pointer-events-none" 
        />
      </div>

      <Navbar onHome={() => setCurrentView('home')} />
      
      {currentView === 'home' ? (
        <main className="flex-1 flex flex-col pt-4">
          <Hero />
          {/* Promotion Section and About sidebar */}
        <section className="py-4 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 items-start">
            
            {/* Left Sidebar: Company Info & Promos */}
            <motion.aside 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/4 flex flex-col gap-6 lg:sticky lg:top-24"
            >
              <div className="hover-cyber-3d bg-[#111] p-6 border-l-2 border-cyber-pink flex flex-col gap-4 shadow-sm border-r border-y border-white/5">
                <h2 className="text-[10px] font-bold text-cyber-pink uppercase tracking-widest">Về Chúng Tôi</h2>
                <p className="text-sm leading-relaxed opacity-80 font-sans">
                  MBC Computer - đối tác số 1 của MSI và GIGABYTE. Giải pháp công nghệ toàn diện cho cá nhân và doanh nghiệp.
Chuyên cung cấp PC, linh kiện, thiết bị văn phòng chính hãng với giá tốt.
Bảo hành nhanh chóng - Hỗ trợ tận tâm.
                </p>
                <div className="mt-4 flex flex-col gap-2 font-mono">
                  <div className="flex justify-between text-[10px] border-b border-white/10 pb-1">
                    <span className="opacity-60">CHẤT LƯỢNG LẮP RÁP</span>
                    <span className="text-cyber-blue">ĐÃ KIỂM ĐỊNH</span>
                  </div>
                  <div className="flex justify-between text-[10px] border-b border-white/10 pb-1">
                    <span className="opacity-60">TỐI ƯU HIỆU NĂNG</span>
                    <span className="text-cyber-blue">SẴN SÀNG CHIẾN GAME</span>
                  </div>
                </div>
              </div>

              <div 
                className="hover-cyber-3d bg-gradient-to-br from-[#1A1A1A] to-[#050505] p-6 border border-white/5 flex-1 flex flex-col gap-6"
                onClick={() => {
                  setCurrentView('promotions');
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
              >
                <div className="flex justify-between items-center group">
                  <h2 className="text-[10px] font-bold uppercase tracking-widest">Khuyến Mãi Đang Chạy</h2>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-cyber-blue group-hover:text-white transition-colors cursor-pointer">Xem Thêm {'>'}</span>
                </div>
                <div className="space-y-6">
                  <div className="group cursor-pointer border-l-2 border-transparent hover:border-cyber-blue pl-3 transition-all">
                    <div className="text-[10px] text-cyber-blue mb-1 font-mono">[ DEAL_01 ]</div>
                    <div className="text-base font-bold leading-none uppercase tracking-tight mb-2">ƯU ĐÃI CỰC LỚN</div>
                    <div className="text-[11px] opacity-60 font-sans">Mua bất kỳ PC Cao Cấp nào, nhận ngay combo game hot tùy chọn được tải sẵn hoàn toàn miễn phí.</div>
                  </div>
                  <div className="group cursor-pointer border-l-2 border-transparent hover:border-cyber-pink pl-3 transition-all">
                    <div className="text-[10px] text-cyber-pink mb-1 font-mono">[ DEAL_02 ]</div>
                    <div className="text-base font-bold leading-none uppercase tracking-tight mb-2">GÓI COMBO MÀN HÌNH</div>
                    <div className="text-[11px] opacity-60 font-sans">Giảm thêm 10% khi mua kèm hệ thống dùng GPU tầm cao.</div>
                  </div>
                </div>
              </div>
            </motion.aside>

            {/* Main Center Catalog */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 overflow-hidden"
            >
              <PrebuiltPCs 
                onViewAll={() => {
                  setCurrentView('all-pcs');
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }} 
                onSelectPC={(pc) => setViewedPC(pc)}
              />
              <GameCatalog 
                selectedGames={selectedGames} 
                onToggleGame={toggleGame} 
                onViewGameDetails={(g) => setViewedGame(g)}
              />
              <SoftwareCatalog
                selectedSoftware={selectedSoftware}
                onToggleSoftware={toggleSoftware}
                onViewSoftwareDetails={(g) => setViewedSoftware(g)}
              />
            </motion.div>
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <ComponentBuilder />
        </motion.div>

        {/* Tech Showcase Preview moved to bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="px-6 pb-12 w-full max-w-7xl mx-auto"
        >
          <TechShowcase />
        </motion.div>
      </main>
      ) : currentView === 'all-pcs' ? (
        <AllPCsPage 
          onBack={() => {
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'instant' });
          }} 
          onSelectPC={(pc) => setViewedPC(pc)}
        />
      ) : currentView === 'promotions' ? (
        <PromotionsPage onBack={() => {
          setCurrentView('home');
          window.scrollTo({ top: 0, behavior: 'instant' });
        }} />
      ) : null}

      {/* Footer Status Bar */}
      <footer className="mt-auto bg-cyber-blue text-black h-10 flex items-center px-6 justify-between font-mono text-[10px] font-bold uppercase border-t border-cyber-blue">
        <div className="flex items-center gap-8 hidden sm:flex">
          <span>Hệ Thống Trực Tuyến</span>
          <span>Giao Hàng: Toàn Quốc</span>
          <span>Hỗ Trợ: 24/7</span>
        </div>
        <div className="animate-pulse tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-black block"></span> GỌI TRỰC TIẾP: 1900-CYBER-TECH
        </div>
      </footer>

      <RequestPanel 
        selectedGames={selectedGames} 
        selectedSoftware={selectedSoftware}
        onRemove={removeGame}
        onRemoveSoftware={(id) => setSelectedSoftware(prev => prev.filter(s => s.id !== id))}
        onSubmit={handleRequestSubmit}
      />

      <div className={`fixed right-6 z-40 flex flex-col items-center gap-3 transition-all duration-300 ${
        selectedGames.length > 0 || selectedSoftware.length > 0 ? 'bottom-[18rem] md:bottom-[20rem]' : 'bottom-16'
      }`}>
        {/* Phone */}
        <a href="tel:0123456789" className="w-10 h-10 bg-[#4CAF50] text-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(76,175,80,0.5)] hover:bg-white hover:text-[#4CAF50] hover:scale-110 transition-all cursor-pointer" title="Gọi Điện">
          <Phone className="w-5 h-5" />
        </a>
        {/* Zalo */}
        <a href="https://zalo.me/0123456789" target="_blank" rel="noreferrer" className="w-10 h-10 bg-[#0068FF] text-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,104,255,0.5)] hover:bg-white hover:text-[#0068FF] hover:scale-110 transition-all font-bold text-[10px] cursor-pointer" title="Zalo">
          Zalo
        </a>
        {/* Messenger */}
        <a href="https://m.me/yourusername" target="_blank" rel="noreferrer" className="w-10 h-10 bg-[#0084FF] text-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,132,255,0.5)] hover:bg-white hover:text-[#0084FF] hover:scale-110 transition-all cursor-pointer" title="Messenger">
          <MessageCircle className="w-5 h-5" />
        </a>

        <AnimatePresence>
          {isScrolled && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, height: 0, marginTop: -12 }}
              animate={{ opacity: 1, scale: 1, height: 40, marginTop: 0 }}
              exit={{ opacity: 0, scale: 0.8, height: 0, marginTop: -12 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 bg-cyber-blue text-black rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,255,209,0.3)] hover:bg-white hover:text-black hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] hover:scale-110 transition-all overflow-hidden cursor-pointer"
            >
              <ArrowUp className="w-5 h-5 flex-shrink-0" />
            </motion.button>
          )}
        </AnimatePresence>

        <button
          onClick={toggleMusic}
          className="w-10 h-10 bg-[#FF007A] text-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,0,122,0.5)] hover:bg-white hover:text-[#FF007A] hover:scale-110 transition-all cursor-pointer mt-1"
          title={isMusicPlaying ? "Tắt Nhạc" : "Bật Nhạc"}
        >
          {isMusicPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
        </button>
      </div>

      {/* Background YouTube Music */}
      <div className="absolute w-[1px] h-[1px] opacity-0 pointer-events-none -z-50 overflow-hidden">
        <ReactPlayer
          url="https://www.youtube.com/embed/T-q9Ww3-F9U?si=DI0NPHSFKDzjJskW"
          playing={isMusicPlaying}
          loop={true}
          volume={0.5}
          width="10px"
          height="10px"
          config={{
            youtube: {
              playerVars: { autoplay: 1 }
            }
          }}
        />
      </div>

      <GameSidebar 
        game={viewedGame} 
        onClose={() => setViewedGame(null)} 
        onSelectGame={toggleGame}
        isSelectedForInstall={viewedGame ? selectedGames.some(sg => sg.id === viewedGame.id) : false}
      />
      <GameSidebar 
        game={viewedSoftware} 
        onClose={() => setViewedSoftware(null)} 
        onSelectGame={toggleSoftware}
        isSelectedForInstall={viewedSoftware ? selectedSoftware.some(sg => sg.id === viewedSoftware.id) : false}
        type="software"
      />
      
      <AnimatePresence>
        {viewedPC && (
          <PCSidebar 
            pc={viewedPC}
            onClose={() => setViewedPC(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="glass-card p-12 rounded-[2rem] text-center max-w-md border-cyber-blue shadow-[0_0_50px_rgba(0,243,255,0.2)]"
            >
              <div className="w-20 h-20 bg-cyber-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  📡
                </motion.div>
              </div>
              <h2 className="text-3xl font-black mb-4">ĐÃ NHẬN THÔNG TIN</h2>
              <p className="text-gray-400 mb-8 font-sans">
                Bộ cấu hình yêu cầu và danh sách thư viện game của bạn đã được gửi trực tiếp tới phòng kĩ thuật. Kỹ sư của chúng tôi sẽ sớm liên hệ để chốt specs.
              </p>
              <button 
                onClick={() => setShowConfirmation(false)}
                className="w-full border border-cyber-blue text-cyber-blue font-bold uppercase tracking-widest text-[10px] hover:bg-cyber-blue hover:text-black mt-6 py-3 transition-colors"
              >
                Quay Trở Lại
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

