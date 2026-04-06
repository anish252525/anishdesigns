
import { motion } from 'motion/react';

export default function Hero() {
  const stats = [
    { label: 'Years', value: '6+' },
    { label: 'Projects', value: '75+' },
    { label: 'Events', value: '25+' },
    { label: 'Brands', value: '20+' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-16 bg-[#fafafa]">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h1 className="text-[clamp(3rem,8vw,8rem)] font-display font-semibold tracking-tighter leading-[0.9] text-[#1a1a1a]">
              ANISH
            </h1>
            <p className="text-[clamp(1.2rem,2.5vw,1.5rem)] text-[#666] font-medium">Graphic Designer</p>
            <p className="text-[#999] text-lg">Brand, Event & Social Media Design</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="p-6 bg-white border border-gray-200 text-center hover:translate-y-[-3px] hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
              >
                <div className="text-3xl font-display font-semibold text-[#1a1a1a] mb-1">{stat.value}</div>
                <div className="text-[0.75rem] tracking-widest text-[#999] uppercase font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-6 pt-4">
            <a 
              href="#work" 
              className="px-10 py-4 bg-[#1a1a1a] text-white text-sm font-medium tracking-wide hover:opacity-80 transition-opacity"
            >
              View My Work
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <img 
            src="https://raw.githubusercontent.com/anish252525/portfolio-assets/main/anish1.png" 
            alt="Anish Portrait" 
            className="w-full max-w-[450px] h-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
