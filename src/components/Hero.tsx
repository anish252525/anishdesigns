
import { motion } from 'motion/react';

export default function Hero() {
  const stats = [
    { label: 'Years', value: '6+' },
    { label: 'Projects', value: '75+' },
    { label: 'Events', value: '25+' },
    { label: 'Brands', value: '20+' },
  ];

  return (
    <section id="home" className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 px-6 md:px-16 pt-32 pb-16 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left"
      >
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-[0.9] text-[#1a1a1a]">
          ANISH
        </h1>
        <div className="space-y-2">
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 font-light tracking-tight">Graphic Designer</p>
          <p className="text-sm md:text-base text-gray-400 font-medium tracking-wide uppercase">Brand, Event & Social Media Design</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 pt-4 md:pt-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="p-4 md:p-6 bg-white border border-gray-200 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-semibold text-[#1a1a1a] mb-1">{stat.value}</div>
              <div className="text-[0.6rem] md:text-[0.65rem] tracking-widest text-gray-400 uppercase font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="pt-4 md:pt-8">
          <a 
            href="#work" 
            className="inline-block w-full sm:w-auto px-10 py-4 bg-[#1a1a1a] text-white text-sm font-medium hover:opacity-80 transition-opacity text-center"
          >
            View My Work
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex-1 flex justify-center lg:justify-end w-full"
      >
        <img 
          src="https://raw.githubusercontent.com/anish252525/portfolio-assets/main/anish1.png" 
          alt="Anish Portrait" 
          className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[450px] h-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </section>
  );
}
