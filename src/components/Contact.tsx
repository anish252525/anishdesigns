
import { motion } from 'motion/react';

export default function Contact() {
  const contactInfo = [
    { label: 'EMAIL', value: 'anishdesigns3@gmail.com', href: 'mailto:anishdesigns3@gmail.com' },
    { label: 'PHONE', value: '+977 9827150889', href: 'tel:+9779827150889' },
    { label: 'LOCATION', value: 'Pokhara, Nepal' },
  ];

  return (
    <section id="contact" className="section-padding border-t border-gray-200 bg-[#fafafa]">
      <div className="section-layout">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-label">CONTACT</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {contactInfo.map((info) => (
            <div key={info.label} className="space-y-3">
              <h4 className="text-[0.75rem] font-semibold tracking-[0.1em] text-gray-500 uppercase">{info.label}</h4>
              {info.href ? (
                <a 
                  href={info.href} 
                  className="text-[1.05rem] text-[#1a1a1a] hover:opacity-50 transition-opacity block font-medium"
                >
                  {info.value}
                </a>
              ) : (
                <span className="text-[1.05rem] text-[#1a1a1a] block font-medium">{info.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
