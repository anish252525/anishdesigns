
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'WORK', href: '#work' },
    { label: 'BRANDS', href: '#brands' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 py-4 md:py-6 px-6 md:px-16 bg-[#fafafa]/90 backdrop-blur-md z-[1000] border-b border-gray-200 flex justify-between items-center">
      <div className="logo h-6 md:h-8">
        <img 
          src="https://raw.githubusercontent.com/anish252525/portfolio-assets/main/logo1.png" 
          alt="Anish Logo" 
          className="h-full w-auto"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10">
        {navItems.map((item) => (
          <li key={item.label}>
            <a 
              href={item.href} 
              className="text-[0.85rem] tracking-wider text-[#1a1a1a] hover:opacity-50 transition-opacity font-medium"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden p-2 text-[#1a1a1a]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 md:hidden flex flex-col p-6 space-y-4 shadow-xl"
          >
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg tracking-wider text-[#1a1a1a] font-medium py-2 border-b border-gray-50 last:border-0"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
