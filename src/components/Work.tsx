
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CATEGORIES, WORK_ITEMS } from '../constants';
import Thumbnail from './Thumbnail';

export default function Work() {
  const [filter, setFilter] = useState('all');
  const [expanded, setExpanded] = useState(false);
  const INITIAL_SHOW = 6;

  const filteredItems = useMemo(() => {
    return filter === 'all' 
      ? WORK_ITEMS 
      : WORK_ITEMS.filter(item => item.category === filter);
  }, [filter]);

  const visibleItems = expanded ? filteredItems : filteredItems.slice(0, INITIAL_SHOW);

  return (
    <section id="work" className="section-padding border-t border-gray-200 bg-[#fafafa]">
      <div className="section-layout">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-label">SELECTED WORK</h2>
        </motion.div>

        <div className="space-y-12">
          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-4 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setFilter(cat.id);
                  setExpanded(false);
                }}
                className={`px-5 py-2 border text-[0.78rem] tracking-wide transition-all duration-200 whitespace-nowrap ${
                  filter === cat.id 
                    ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]' 
                    : 'bg-transparent text-[#666] border-gray-200 hover:border-[#1a1a1a] hover:text-[#1a1a1a]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {visibleItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="group relative aspect-[4/3] bg-white border border-gray-200 overflow-hidden cursor-pointer hover:translate-y-[-5px] hover:shadow-xl hover:shadow-black/5 transition-all duration-300"
                >
                  <Thumbnail title={item.title} className="transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-white text-[0.9rem] font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-300 text-[0.78rem]">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12 text-gray-400 italic">
              No projects in this category yet.
            </div>
          )}

          {/* See More */}
          {filteredItems.length > INITIAL_SHOW && (
            <div className="text-center pt-8">
              <button
                onClick={() => {
                  setExpanded(!expanded);
                  if (expanded) {
                    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-10 py-3 border border-gray-200 text-[#1a1a1a] text-[0.9rem] hover:border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
              >
                {expanded ? 'See Less' : `See More (${filteredItems.length - INITIAL_SHOW} more)`}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
