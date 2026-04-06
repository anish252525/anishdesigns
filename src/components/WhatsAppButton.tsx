
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/9779827150889?text=Hi%20Anish,%20I'd%20like%20to%20discuss%20a%20project"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl z-[999] group"
      aria-label="Contact on WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-current">
        <path d="M16 0C7.164 0 0 7.163 0 16c0 2.825.737 5.485 2.028 7.79L.084 30.948l7.383-1.936A15.918 15.918 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333c-2.496 0-4.87-.688-6.906-1.987l-.495-.296-5.132 1.346 1.37-5.004-.325-.512A13.238 13.238 0 012.667 16c0-7.363 5.97-13.333 13.333-13.333S29.333 8.637 29.333 16 23.363 29.333 16 29.333zm7.27-9.94c-.397-.198-2.352-1.16-2.717-1.293-.365-.132-.631-.198-.897.199-.266.397-1.029 1.293-1.261 1.559-.233.266-.465.299-.862.1-.397-.199-1.677-.618-3.194-1.971-1.18-1.053-1.977-2.352-2.21-2.75-.232-.397-.024-.612.175-.81.179-.179.397-.465.596-.697.199-.233.266-.398.398-.664.133-.266.067-.498-.033-.697-.1-.199-.897-2.16-1.229-2.955-.323-.774-.652-.67-.897-.682-.232-.012-.498-.015-.764-.015s-.697.1-1.062.498c-.365.398-1.394 1.36-1.394 3.319s1.427 3.85 1.625 4.116c.199.266 2.806 4.285 6.794 6.009.95.41 1.69.655 2.267.838.952.303 1.817.26 2.502.158.763-.114 2.352-.962 2.684-1.89.332-.93.332-1.726.233-1.89-.1-.165-.365-.266-.764-.465z"/>
      </svg>
      <span className="absolute right-full mr-4 px-3 py-1 bg-[#1a1a1a] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Send Message
      </span>
    </motion.a>
  );
}
