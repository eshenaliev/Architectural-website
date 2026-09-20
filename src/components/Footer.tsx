import React from 'react';
import { Language, TRANSLATIONS } from '../data/translations';

interface FooterProps {
  onOpenMenu?: () => void;
  onOpenContact?: () => void;
  onOpenMore?: () => void;
  currentLang?: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang = 'RU' }) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.RU;

  return (
    <footer className="w-full bg-white border-t border-neutral-100 mt-4 sm:mt-6 shrink-0">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-3 sm:py-3.5 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 font-light gap-2">
        {/* Left: About, Privacy Policy, Terms of Service */}
        <div className="flex items-center gap-6 sm:gap-8">
          <a href="#about" className="hover:text-neutral-700 transition-colors">
            {t.footer.about}
          </a>
          <a href="#privacy" className="hover:text-neutral-700 transition-colors">
            {t.footer.privacy}
          </a>
          <a href="#terms" className="hover:text-neutral-700 transition-colors">
            {t.footer.terms}
          </a>
        </div>

        {/* Right: Copyright notice */}
        <div>
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
};
