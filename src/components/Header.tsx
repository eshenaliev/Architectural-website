import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowUpRight,
  Calculator,
  ShieldCheck,
  Phone
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeaderProps {
  onOpenConsultation: () => void;
  onOpenCalculator: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenConsultation,
  onOpenCalculator 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Проекты', href: '#portfolio' },
    { label: 'Философия', href: '#philosophy' },
    { label: 'Услуги', href: '#services' },
    { label: 'Сейсмостойкость', href: '#engineering' },
    { label: 'Расчет проекта', href: '#calculator' },
    { label: 'О бюро', href: '#about' },
    { label: 'Контакты', href: '#contacts' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      {/* Top Classical Ledger Ribbon */}
      <div className={`border-b border-[#c5a880]/15 bg-[#121315]/95 backdrop-blur-md text-[11px] text-[#a89f91] py-1.5 transition-all duration-300 ${
        isScrolled ? 'hidden md:hidden' : 'block'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between font-serif tracking-widest uppercase">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#c5a880]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]"></span>
              <span>{COMPANY_INFO.licenseNumber}</span>
            </span>
            <span className="hidden md:inline-block text-neutral-600">•</span>
            <span className="hidden md:flex items-center gap-1.5 text-[#d5cfc5]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Сейсмостойкость 9 баллов (СНиП КР) • Золотое сечение</span>
            </span>
          </div>

          <div className="flex items-center gap-5">
            <span className="hidden sm:inline-block text-[#9a9182]">
              Бишкек, пр. Манаса, 115
            </span>
            <a 
              href={`tel:${COMPANY_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`} 
              className="text-[#c5a880] hover:text-[#dfcaa7] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3" />
              <span>{COMPANY_INFO.phonePrimary}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Classical Navigation Bar */}
      <div className={`transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#121315]/95 backdrop-blur-xl border-b border-[#c5a880]/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
          : 'bg-gradient-to-b from-[#121315]/95 via-[#121315]/80 to-transparent py-4 sm:py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Classical Logo Monogram */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative w-11 h-11 border border-[#c5a880]/50 bg-[#18191c] flex items-center justify-center transition-all duration-300 group-hover:border-[#c5a880]">
              <div className="classic-tick-tl" />
              <div className="classic-tick-br" />
              <span className="font-display font-semibold text-[#c5a880] text-sm tracking-wider">
                Г+
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="font-display font-medium text-lg sm:text-xl tracking-[0.16em] text-[#f4efe6] uppercase group-hover:text-[#c5a880] transition-colors">
                  ГРАНД <span className="font-light text-[#c5a880]">ПЛЮС</span>
                </span>
                <span className="text-[9px] font-serif tracking-[0.2em] text-[#c5a880] border border-[#c5a880]/30 px-1.5 py-0.5 rounded-xs uppercase hidden sm:inline-block">
                  EST. 2007
                </span>
              </div>
              <span className="text-[9px] tracking-[0.25em] text-[#9b9284] uppercase font-serif">
                Архитектурное Бюро
              </span>
            </div>
          </a>

          {/* Desktop Classical Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-serif tracking-[0.18em] uppercase text-[#cfc8bd] hover:text-[#c5a880] transition-all relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c5a880] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3 font-serif">
            <button
              onClick={onOpenCalculator}
              className="px-3.5 py-2 text-xs tracking-wider text-[#cfc8bd] hover:text-[#c5a880] border border-[#c5a880]/30 hover:border-[#c5a880]/60 bg-[#1a1b1f]/60 rounded-xs flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Calculator className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Расчет проекта</span>
            </button>

            <button
              onClick={onOpenConsultation}
              className="px-4 py-2 text-xs tracking-[0.15em] font-medium text-[#121315] bg-[#c5a880] hover:bg-[#d5baa0] rounded-xs shadow-sm transition-all flex items-center gap-1.5 uppercase cursor-pointer"
            >
              <span>Консультация ГАП</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden font-serif">
            <button
              onClick={onOpenConsultation}
              className="sm:hidden px-3 py-1.5 text-[10px] tracking-wider text-[#121315] bg-[#c5a880] rounded-xs uppercase font-medium"
            >
              Консультация
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#cfc8bd] hover:text-[#c5a880] border border-[#c5a880]/30 rounded-xs focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#121315]/98 border-b border-[#c5a880]/20 px-4 py-6 space-y-4 backdrop-blur-2xl">
          <div className="flex flex-col space-y-3 font-serif">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-wider text-[#e2ded6] hover:text-[#c5a880] py-2 border-b border-[#c5a880]/10"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2 font-serif">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCalculator();
              }}
              className="w-full py-3 rounded-xs border border-[#c5a880]/30 text-xs uppercase tracking-wider text-[#cfc8bd] flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4 text-[#c5a880]" />
              <span>Расчет стоимости проекта</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 rounded-xs bg-[#c5a880] text-[#121315] font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Связаться с ГАП бюро</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
