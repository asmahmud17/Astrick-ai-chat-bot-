import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, User, Sparkles, Code, Briefcase, Mail, Layers } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  currentSection: string;
  onNavigate: (sectionId: string) => void;
  isNotFound?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ currentSection, onNavigate, isNotFound = false }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home', icon: User },
    { name: 'About', id: 'about', icon: Sparkles },
    { name: 'Skills', id: 'skills', icon: Code },
    { name: 'Services', id: 'services', icon: Layers },
    { name: 'Experience', id: 'experience', icon: Briefcase },
    { name: 'Contact', id: 'contact', icon: Mail },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isNotFound
          ? 'bg-zinc-950/90 dark:bg-zinc-950/90 light:bg-white/90 backdrop-blur-md border-b border-zinc-800/80 light:border-zinc-200/80 shadow-lg shadow-black/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, 'home')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg p-1"
            aria-label="Anas Mahmud Portfolio Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700 flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-purple-600/30 group-hover:scale-105 transition-transform duration-200">
              AM
            </div>
            <div className="flex flex-col text-left">
              <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                Creative Learner
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-100/80 dark:bg-zinc-900/80 p-1.5 rounded-full border border-zinc-200 dark:border-zinc-800/80 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = !isNotFound && currentSection === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-600/25 font-semibold'
                      : 'text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Theme Toggle & Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-purple-600" />
              )}
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 cursor-pointer"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-purple-600" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-white/95 dark:bg-zinc-950/95 border-b border-zinc-200 dark:border-zinc-800 backdrop-blur-xl shadow-2xl p-6 transition-all">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const LinkIcon = link.icon;
              const isActive = !isNotFound && currentSection === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-purple-600/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 border border-purple-500/30'
                      : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900'
                  }`}
                >
                  <LinkIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
