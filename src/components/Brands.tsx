
import { motion } from 'motion/react';
import Thumbnail from './Thumbnail';

interface BrandsProps {
  onOpenPDF: (title: string, url: string) => void;
}

export default function Brands({ onOpenPDF }: BrandsProps) {
  const brands = [
    { 
      title: "Lumino Technology", 
      desc: "Brand Identity — Click to view PDF", 
      pdf: "https://raw.githubusercontent.com/anish252525/anishdesigns/main/Lumino_Tech_Brand_Guide.pdf"
    },
    { 
      title: "Sajilo Care", 
      desc: "Complete Identity — Click to view PDF", 
      pdf: "https://raw.githubusercontent.com/anish252525/portfolio-assets/main/Sajilo_Care_Brand_Guide_V1.00.pdf"
    },
    { 
      title: "Akala Tech", 
      desc: "Visual System", 
    },
  ];

  return (
    <section id="brands" className="section-padding border-t border-gray-200 bg-[#fafafa]">
      <div className="section-layout">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-label">BRAND IDENTITIES</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => brand.pdf && onOpenPDF(brand.title, brand.pdf)}
              className={`group relative aspect-[4/3] bg-white border border-gray-200 overflow-hidden hover:translate-y-[-5px] hover:shadow-xl hover:shadow-black/5 transition-all duration-300 ${brand.pdf ? 'cursor-pointer' : ''}`}
            >
              <Thumbnail title={brand.title} className="transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-[0.9rem] font-semibold mb-1">{brand.title}</h3>
                  <p className="text-gray-300 text-[0.78rem]">{brand.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
