import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden pt-36 pb-20 border-b border-white/5">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-cyber-pink/5 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-12 lg:pt-0">
        <div className="flex flex-col lg:flex-row lg:items-start items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full lg:max-w-2xl"
          >
            
            
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 leading-none tracking-tighter italic">
              NÂNG TẦM <br />
              <span className="text-cyan-200 whitespace-nowrap">TRẢI NGHIỆM</span> CỦA BẠN.
            </h1>

            <p className="max-w-2xl text-white/70 text-sm leading-relaxed font-sans border-l-2 border-cyber-pink pl-6 bg-gradient-to-r from-cyber-pink/5 to-transparent py-4 text-left">
              Từng bộ PC đều được chúng tôi lắp ráp và tối ưu tỉ mỉ.<br className="hidden lg:block" />
              Mua ngay để trải nghiệm dịch vụ tận tâm cùng nhiều ưu đãi hấp dẫn khác.
            </p>

            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="relative w-full aspect-video sm:aspect-[4/3] lg:aspect-video bg-[#050505] border border-white/10 overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <iframe
                src="https://www.youtube.com/embed/pHwRrE14cjE?si=Fg7f_ujfXFX4VC5x"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>

              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/30 pointer-events-none" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/30 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/30 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/30 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Info Strip */}
      <div className="absolute bottom-0 left-0 w-full bg-[#111] border-y border-white/10 py-3 px-6 hidden sm:flex items-center justify-between text-[10px] font-mono uppercase text-white/50 tracking-widest">
        <div className="flex items-center gap-8">
          <span>// FACEBOOK: MBC Computer</span>
          <span>// TIKTOK: MBC Computer Official</span>
          <span className="text-cyber-green">// SHOPEE: CÔNG TY TNHH TIN HỌC MBC</span>
        </div>
        <div>
          <span> </span>
        </div>
      </div>
    </section>
  );
}
