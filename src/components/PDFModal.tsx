
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface PDFModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  pdfUrl: string;
}

export default function PDFModal({ isOpen, onClose, title, pdfUrl }: PDFModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#fafafa] z-[2000] overflow-y-auto"
        >
          <div className="sticky top-0 flex justify-between items-center px-6 py-4 md:px-12 md:py-6 bg-white border-b border-gray-200 z-10">
            <h2 className="text-xl font-medium text-[#1a1a1a]">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors text-[#1a1a1a]"
              aria-label="Close modal"
            >
              <X size={32} />
            </button>
          </div>
          
          <div className="max-w-[1400px] mx-auto p-6 md:p-12">
            <div className="w-full h-[85vh] bg-white rounded-lg overflow-hidden border border-gray-200 shadow-xl">
              <iframe
                src={`https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
                className="w-full h-full border-none"
                title={title}
              />
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-500 mb-4 font-medium">PDF not loading? Open directly:</p>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-3 bg-[#1a1a1a] text-white text-sm font-medium hover:opacity-80 transition-opacity"
              >
                Open PDF
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
