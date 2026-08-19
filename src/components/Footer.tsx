import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Facebook, Instagram, Youtube, Linkedin, Twitter, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const socialIcons = [
    { name: 'Facebook', icon: Facebook },
    { name: 'Instagram', icon: Instagram },
    { name: 'YouTube', icon: Youtube },
    { name: 'LinkedIn', icon: Linkedin },
    { name: 'Twitter', icon: Twitter },
  ];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-zinc-900 text-zinc-300 border-t border-zinc-800 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-800">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-600 flex items-center justify-center text-white font-extrabold text-base shadow-md shadow-purple-600/30">
                AM
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
              Video Editing Learner, Graphic Design Learner & Digital Marketing Learner
            </p>

            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleScrollTo('home')} className="hover:text-purple-400 transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('about')} className="hover:text-purple-400 transition-colors cursor-pointer">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('skills')} className="hover:text-purple-400 transition-colors cursor-pointer">
                  Skills
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('services')} className="hover:text-purple-400 transition-colors cursor-pointer">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('experience')} className="hover:text-purple-400 transition-colors cursor-pointer">
                  Experience
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('contact')} className="hover:text-purple-400 transition-colors font-medium text-purple-400 cursor-pointer">
                  Contact Me
                </button>
              </li>
            </ul>
          </div>

          {/* Social Placeholders & Legal */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Social Links
            </h4>
            
            <p className="text-xs text-zinc-400">
              Social channels will be updated soon. Placeholders below:
            </p>

            {/* Inactive Social Icon Placeholders */}
            <div className="flex items-center gap-2 pt-1">
              {socialIcons.map((soc) => {
                const IconComponent = soc.icon;
                return (
                  <div
                    key={soc.name}
                    className="relative group p-2.5 rounded-xl bg-zinc-800/80 text-zinc-500 border border-zinc-700/60 cursor-not-allowed"
                    title={`${soc.name} (Link coming soon)`}
                  >
                    <IconComponent className="w-4 h-4" />
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2.5 py-1 text-[10px] font-medium text-white bg-zinc-950 border border-zinc-700 rounded shadow-lg whitespace-nowrap z-20">
                      Link coming soon
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © 2026 {personalInfo.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-purple-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-purple-400 transition-colors cursor-pointer"
            >
              Terms and Conditions
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
