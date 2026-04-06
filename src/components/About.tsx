
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="section-padding border-t border-gray-200 bg-[#fafafa]">
      <div className="section-layout">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-label">ABOUT</h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6 max-w-3xl"
        >
          <p className="text-[1.05rem] text-[#666] leading-relaxed font-light">
            With <span className="text-[#1a1a1a] font-medium">6+ years</span> in the field, I create visual identities and experiences for events, brands, and social media. My clients include government bodies, international organizations, and major brands across Nepal.
          </p>
          <p className="text-[1.05rem] text-[#666] leading-relaxed font-light">
            I keep up with design trends and integrate AI tools into my workflow. I also have foundational skills in video editing and motion graphics using Premiere Pro and After Effects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
