import React from 'react';
import { X, ArrowRight, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang?: Language;
  onChangeLang?: (lang: Language) => void;
  onSelectSection: (section: string) => void;
  onOpenContact: () => void;
}

export const MenuOverlay: React.FC<MenuOverlayProps> = ({
  isOpen,
  onClose,
  currentLang = 'RU',
  onChangeLang,
  onSelectSection,
  onOpenContact,
}) => {
  if (!isOpen) return null;

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.RU;

  const NAV_LINKS = [
    { id: 'works', label: t.nav.works.title, sub: t.nav.works.subtitle },
    { id: 'philosophy', label: t.nav.philosophy.title, sub: t.nav.philosophy.subtitle },
    { id: 'architects', label: t.nav.architects.title, sub: t.nav.architects.subtitle },
    { id: 'materials', label: t.nav.materials.title, sub: t.nav.materials.subtitle },
    { id: 'global', label: t.nav.global.title, sub: t.nav.global.subtitle },
    { id: 'contact', label: t.nav.contact.title, sub: t.nav.contact.subtitle },
  ];

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#0f0f10] text-white">
      {/* Top Bar */}
      <div className="w-full px-6 sm:px-10 lg:px-16 py-4 sm:py-5 flex items-center justify-between border-b border-neutral-800">
        <a href="/" className="inline-flex items-center group" onClick={onClose} aria-label="GRAND+ Home">
          <span className="font-sans text-xl sm:text-2xl text-white font-semibold tracking-tight inline-flex items-start">
            <span>GRAND</span>
            <sup className="text-[0.6em] font-normal leading-none ml-0.5 relative -top-0.5">+</sup>
          </span>
          <div className="h-6 w-[1px] bg-neutral-700 mx-3 hidden sm:block" />
          <div className="flex flex-col text-[10px] sm:text-[11px] leading-[1.2] text-neutral-400 font-sans tracking-wide">
            <span>{t.header.subline1}</span>
            <span>{t.header.subline2}</span>
          </div>
        </a>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <span>{t.drawer.close}</span>
          <X className="w-5 h-5 stroke-[1.5]" />
        </button>
      </div>

      {/* Main Menu Grid */}
      <div className="flex-1 overflow-y-auto px-6 sm:px-12 lg:px-20 py-12 max-w-7xl mx-auto w-full flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Navigation items */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-6">
            {NAV_LINKS.map((link, idx) => (
              <button
                key={link.id}
                onClick={() => {
                  onSelectSection(link.id);
                  onClose();
                }}
                className="group flex flex-col text-left w-full py-2 border-b border-neutral-800/80 hover:border-neutral-500 transition-colors cursor-pointer"
              >
                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="font-sans text-xs sm:text-sm text-neutral-500 group-hover:text-white transition-colors font-medium tracking-wider">
                      0{idx + 1}
                    </span>
                    <span className="font-sans text-2xl sm:text-3xl lg:text-4xl text-neutral-200 group-hover:text-white font-semibold tracking-tight transition-colors">
                      {link.label}
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-neutral-600 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                </div>
                <span className="font-sans text-xs sm:text-sm text-neutral-500 group-hover:text-neutral-300 font-light mt-1 pl-7 sm:pl-10">
                  {link.sub}
                </span>
              </button>
            ))}
          </div>

          {/* Right: Contact & Identity Info */}
          <div className="lg:col-span-4 space-y-8 lg:pl-6">
            <div>
              <p className="text-xs font-sans uppercase tracking-widest text-neutral-500 mb-2 font-medium">Headquarters</p>
              <h3 className="font-sans text-xl text-neutral-200 font-semibold">
                {t.contact.hqTitle}
              </h3>
              <p className="font-sans text-xs text-neutral-400 mt-1 font-light leading-relaxed">
                {t.header.subline1} {t.header.subline2}
              </p>
            </div>

            <div className="space-y-3 text-xs text-neutral-400 font-light">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                <span>{t.contact.addressMain}</span>
              </p>
              <div className="space-y-1.5">
                <p className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-neutral-500 shrink-0" />
                  <span>+996 773 70 71 72 / +996 500 50 51 52</span>
                </p>
                <div className="flex items-center gap-2 pl-6.5">
                  <a
                    href="https://wa.me/996773707172"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-sans font-medium text-emerald-300 bg-emerald-950/70 hover:bg-emerald-900 border border-emerald-700/60 transition-colors"
                  >
                    <MessageCircle className="w-3 h-3" />
                    <span>WhatsApp 1</span>
                  </a>
                  <a
                    href="https://wa.me/996500505152"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-sans font-medium text-emerald-300 bg-emerald-950/70 hover:bg-emerald-900 border border-emerald-700/60 transition-colors"
                  >
                    <MessageCircle className="w-3 h-3" />
                    <span>WhatsApp 2</span>
                  </a>
                </div>
              </div>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-neutral-500 shrink-0" />
                <span>inquiry@grand-plus.com</span>
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-800 space-y-2 text-xs text-neutral-500">
              <p>Registered Architecture & Design Center • International Union of Architects Member Network</p>
              <p>© {new Date().getFullYear()} GRAND + Kyrgyz International Architectural design Center.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
