import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl p-6 sm:p-8 text-zinc-800 dark:text-zinc-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' ? (
              <ShieldCheck className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            ) : (
              <FileText className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            )}
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms and Conditions'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {type === 'privacy' ? (
          <div className="space-y-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            <p>
              <strong>Effective Date:</strong> August 12, 2026
            </p>
            <p>
              Welcome to the personal portfolio website of <strong>Anas Mahmud</strong>. Your privacy is important. This Privacy Policy explains how information is handled when you visit this website.
            </p>

            <h4 className="text-base font-bold text-zinc-900 dark:text-white pt-2">1. Information Collection</h4>
            <p>
              This website does not collect personal data automatically unless you voluntarily submit information through the Contact Form (such as your name, email address, subject, and message).
            </p>

            <h4 className="text-base font-bold text-zinc-900 dark:text-white pt-2">2. Use of Information</h4>
            <p>
              Any information submitted via the contact form is strictly used to respond to your inquiries and discuss potential creative learning assignments or project opportunities. We do not sell or share your information with third parties.
            </p>

            <h4 className="text-base font-bold text-zinc-900 dark:text-white pt-2">3. Cookies & Analytics</h4>
            <p>
              This portfolio operates cleanly without tracking cookies or intrusive advertising scripts. Basic session storage may be used solely to remember your preferred visual theme (Light/Dark Mode).
            </p>

            <h4 className="text-base font-bold text-zinc-900 dark:text-white pt-2">4. Contact</h4>
            <p>
              If you have any questions regarding this Privacy Policy, please reach out via the website contact form.
            </p>
          </div>
        ) : (
          <div className="space-y-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            <p>
              <strong>Effective Date:</strong> August 12, 2026
            </p>
            <p>
              By accessing and using this personal portfolio website for <strong>Anas Mahmud</strong>, you agree to comply with and be bound by the following Terms and Conditions.
            </p>

            <h4 className="text-base font-bold text-zinc-900 dark:text-white pt-2">1. Intellectual Property</h4>
            <p>
              All original visual designs, layout graphics, video editing concepts, and text content presented on this website are the property of Anas Mahmud unless stated otherwise.
            </p>

            <h4 className="text-base font-bold text-zinc-900 dark:text-white pt-2">2. Service Level Disclaimer</h4>
            <p>
              Services and technical creative support displayed on this website are provided at a beginner and learning level while Anas Mahmud continues developing professional skills through the SBMC course at As-Sunnah Skill Development Institute.
            </p>

            <h4 className="text-base font-bold text-zinc-900 dark:text-white pt-2">3. Limitation of Liability</h4>
            <p>
              This website is provided "as is" without warranty of any kind. Anas Mahmud shall not be liable for any damages arising out of the use or inability to use this website.
            </p>

            <h4 className="text-base font-bold text-zinc-900 dark:text-white pt-2">4. Updates</h4>
            <p>
              These Terms and Conditions may be updated periodically. Continued use of the website signifies acceptance of any modified terms.
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
