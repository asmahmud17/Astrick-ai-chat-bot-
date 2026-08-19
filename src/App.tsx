import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';

export default function App() {
  const [legalModalState, setLegalModalState] = useState<{
    isOpen: boolean;
    type: 'privacy' | 'terms';
  }>({
    isOpen: false,
    type: 'privacy',
  });

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-zinc-950 text-zinc-100 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-purple-500/30 selection:text-purple-200 transition-colors duration-200 light:bg-zinc-50 light:text-zinc-900">
        
        {/* Sticky Navigation Bar */}
        <Navbar />

        {/* Main Sections */}
        <main>
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. About Section */}
          <About />

          {/* 3. Skills Section */}
          <Skills />

          {/* 4. Services Section */}
          <Services />

          {/* 5. Learning Experience Section */}
          <Experience />

          {/* 6. Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer
          onOpenPrivacy={() => setLegalModalState({ isOpen: true, type: 'privacy' })}
          onOpenTerms={() => setLegalModalState({ isOpen: true, type: 'terms' })}
        />

        {/* Legal Modal (Privacy Policy & Terms) */}
        <LegalModal
          isOpen={legalModalState.isOpen}
          type={legalModalState.type}
          onClose={() => setLegalModalState({ isOpen: false, type: 'privacy' })}
        />

      </div>
    </ThemeProvider>
  );
}
