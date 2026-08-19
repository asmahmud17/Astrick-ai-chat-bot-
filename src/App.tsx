import React, { useState, useEffect, useCallback } from 'react';
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
import { NotFound } from './components/NotFound';

const VALID_SECTIONS = ['home', 'about', 'skills', 'services', 'experience', 'contact'] as const;
type SectionId = (typeof VALID_SECTIONS)[number];

function normalizePath(pathname: string): string {
  // Strip GitHub Pages repository name prefix if present
  let normalized = pathname.replace(/^\/ANAS-MAHMUD\/?/i, '/');
  // Remove leading and trailing slashes
  normalized = normalized.replace(/^\/+|\/+$/g, '');
  return normalized;
}

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [isNotFound, setIsNotFound] = useState(false);
  const [legalModalState, setLegalModalState] = useState<{
    isOpen: boolean;
    type: 'privacy' | 'terms';
  }>({
    isOpen: false,
    type: 'privacy',
  });

  // Resolve current route from URL pathname and hash
  const resolveRoute = useCallback(() => {
    if (typeof window === 'undefined') return;

    const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
    const cleanPath = normalizePath(window.location.pathname).toLowerCase();

    // 1. Check direct hash first (e.g. #about)
    if (hash && VALID_SECTIONS.includes(hash as SectionId)) {
      setIsNotFound(false);
      setActiveSection(hash as SectionId);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
      return;
    }

    // 2. Check pathname (e.g. / or /about or /skills)
    if (!cleanPath || cleanPath === '' || cleanPath === 'index.html' || cleanPath === 'home') {
      setIsNotFound(false);
      setActiveSection('home');
      return;
    }

    if (VALID_SECTIONS.includes(cleanPath as SectionId)) {
      setIsNotFound(false);
      setActiveSection(cleanPath as SectionId);
      setTimeout(() => {
        const el = document.getElementById(cleanPath);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
      return;
    }

    // 3. Any other unknown route triggers 404
    setIsNotFound(true);
  }, []);

  // Listen to browser navigation (back/forward and hash changes)
  useEffect(() => {
    resolveRoute();
    window.addEventListener('popstate', resolveRoute);
    window.addEventListener('hashchange', resolveRoute);

    return () => {
      window.removeEventListener('popstate', resolveRoute);
      window.removeEventListener('hashchange', resolveRoute);
    };
  }, [resolveRoute]);

  // Track active section on scroll when on main page
  useEffect(() => {
    if (isNotFound) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (const section of VALID_SECTIONS) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isNotFound]);

  // Navigate smoothly between sections or recover from 404
  const handleNavigate = (sectionId: string) => {
    const validTarget = (VALID_SECTIONS.includes(sectionId as SectionId) ? sectionId : 'home') as SectionId;
    setIsNotFound(false);
    setActiveSection(validTarget);

    // Update history state without full page reload
    const isGitHubActions = window.location.pathname.startsWith('/ANAS-MAHMUD');
    const basePath = isGitHubActions ? '/ANAS-MAHMUD/' : '/';
    const targetUrl = validTarget === 'home' ? basePath : `${basePath}#${validTarget}`;
    window.history.pushState(null, '', targetUrl);

    setTimeout(() => {
      if (validTarget === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(validTarget);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 50);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-zinc-950 text-zinc-100 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-purple-500/30 selection:text-purple-200 transition-colors duration-200 light:bg-zinc-50 light:text-zinc-900">
        
        {/* Sticky Header Navigation */}
        <Navbar
          currentSection={activeSection}
          onNavigate={handleNavigate}
          isNotFound={isNotFound}
        />

        {/* Main Content Area */}
        <main className="pt-16">
          {isNotFound ? (
            /* 404 Unknown Route View */
            <NotFound onNavigateHome={() => handleNavigate('home')} />
          ) : (
            /* Main Portfolio Single-Page Experience */
            <>
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
            </>
          )}
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
