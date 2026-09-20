import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface HeaderProps {
  onOpenMenu: () => void;
  currentLang: Language;
  onChangeLang: (lang: Language) => void;
}

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'RU', label: 'Русский' },
  { code: 'EN', label: 'English' },
  { code: 'KY', label: 'Кыргызча' },
  { code: 'ZH', label: '中文' },
];

export const Header: React.FC<HeaderProps> = ({
  onOpenMenu,
  currentLang,
  onChangeLang,
}) => {
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.RU;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activeLangObj = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  return (
    <header className="w-full bg-white relative z-40 shrink-0 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-2.5 sm:py-3 flex items-center justify-between">
        {/* Left/Center: GRAND⁺ Text and Kyrgyz International Architectural design Center */}
        <a href="/" className="inline-flex items-center group" aria-label="GRAND+ Home">
          <span className="font-serif text-lg sm:text-xl text-neutral-900 font-medium tracking-tight inline-flex items-start">
            <span>GRAND</span>
            <sup className="text-[0.6em] font-light leading-none ml-0.5 relative -top-0.5">+</sup>
          </span>
          <div className="h-4.5 sm:h-5 w-[1px] bg-neutral-300 mx-2.5 sm:mx-3" />
          <div className="flex flex-col text-[8.5px] sm:text-[9.5px] leading-[1.25] text-neutral-800 font-serif tracking-[0.02em]">
            <span>{t.header.subline1}</span>
            <span>{t.header.subline2}</span>
          </div>
        </a>

        {/* Right: Language Selector */}
        <div className="flex items-center gap-4">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] text-neutral-800 hover:text-black font-sans transition-colors cursor-pointer py-1"
              aria-label="Select Language"
            >
              <span className="font-medium">{activeLangObj.label}</span>
              <ChevronDown className={`w-3 h-3 text-neutral-600 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white border border-neutral-200 shadow-lg py-1 z-50 text-xs font-sans">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onChangeLang(lang.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-2 flex items-center justify-between hover:bg-neutral-100 transition-colors cursor-pointer ${
                      currentLang === lang.code ? 'font-semibold text-black bg-neutral-50' : 'text-neutral-700'
                    }`}
                  >
                    <span>{lang.label}</span>
                    {currentLang === lang.code && <Check className="w-3.5 h-3.5 text-black" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
