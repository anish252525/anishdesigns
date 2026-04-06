
import { motion } from 'motion/react';
import { SERVICES, TOOLS, CLIENTS } from '../constants';

export default function Expertise() {
  return (
    <section className="section-padding border-t border-gray-200">
      <div className="grid md:grid-cols-[0.4fr_1.6fr] gap-12 md:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-label">EXPERTISE</h2>
        </motion.div>

        <div className="space-y-16">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            <div className="space-y-6">
              <h3 className="text-[0.7rem] font-bold tracking-widest text-gray-500 uppercase">DESIGN SERVICES</h3>
              <ul className="space-y-3">
                {SERVICES.map((item) => (
                  <li key={item} className="text-base text-[#1a1a1a] font-light">{item}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-[0.7rem] font-bold tracking-widest text-gray-500 uppercase">TOOLS</h3>
              <ul className="space-y-3">
                {TOOLS.map((item) => (
                  <li key={item} className="text-base text-[#1a1a1a] font-light">{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-[0.7rem] font-bold tracking-widest text-gray-500 uppercase">CLIENTS</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {CLIENTS.map((client) => (
                <div 
                  key={client} 
                  className="p-4 bg-white border border-gray-200 text-center text-sm font-light hover:border-[#1a1a1a] hover:shadow-md transition-all duration-300"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
