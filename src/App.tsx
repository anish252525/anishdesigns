/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Brands from './components/Brands';
import Expertise from './components/Expertise';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PDFModal from './components/PDFModal';

export default function App() {
  const [modalState, setModalState] = useState<{ isOpen: boolean; title: string; url: string }>({
    isOpen: false,
    title: '',
    url: '',
  });

  const openPDF = (title: string, url: string) => {
    setModalState({ isOpen: true, title, url });
  };

  const closePDF = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Brands onOpenPDF={openPDF} />
        <Expertise />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <PDFModal 
        isOpen={modalState.isOpen} 
        onClose={closePDF} 
        title={modalState.title} 
        pdfUrl={modalState.url} 
      />
    </div>
  );
}
