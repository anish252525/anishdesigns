
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
    <section id="brands" className="section-padding border-t border-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_1.6fr] gap-8 md:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-label">BRAND IDENTITIES</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => brand.pdf && onOpenPDF(brand.title, brand.pdf)}
              className={`group relative aspect-[4/3] bg-gray-100 border border-gray-200 overflow-hidden ${brand.pdf ? 'cursor-pointer' : ''}`}
            >
              <Thumbnail title={brand.title} className="transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-sm font-semibold mb-1">{brand.title}</h3>
                <p className="text-gray-300 text-[0.7rem]">{brand.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
