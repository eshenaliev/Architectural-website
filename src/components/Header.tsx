import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowUpRight,
  Calculator,
  Radio,
  Atom,
  ShieldCheck
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
    { label: 'Мегаструктуры', href: '#portfolio' },
    { label: 'Манифест 2150', href: '#manifesto' },
    { label: 'Кибер-Услуги', href: '#services' },
    { label: 'Сейсмозащита 9.5', href: '#engineering' },
    { label: 'Квант-Смета', href: '#calculator' },
    { label: 'О Бюро', href: '#about' },
    { label: 'Контакты', href: '#contacts' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      {/* Top HUD Telemetry Ribbon */}
      <div className={`border-b border-cyan-500/15 bg-[#030407]/95 backdrop-blur-xl text-[11px] text-neutral-400 py-1.5 transition-all duration-300 ${
        isScrolled ? 'hidden md:hidden' : 'block'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between font-mono tracking-wider">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-cyan-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
              <span>{COMPANY_INFO.licenseNumber}</span>
            </span>
            <span className="hidden md:inline-block text-neutral-700">/</span>
            <span className="hidden md:flex items-center gap-1.5 text-neutral-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Квантовая сейсмозащита 9.5 MSK • Графеновые экзоскелеты</span>
            </span>
          </div>

          <div className="flex items-center gap-5">
            <span className="hidden sm:inline-block text-neutral-400">
              Бишкек // Башня «Вектор 2100»
            </span>
            <a 
              href={`tel:${COMPANY_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`} 
              className="text-cyan-400 hover:text-cyan-300 font-mono tracking-wider transition-colors"
            >
              {COMPANY_INFO.phonePrimary}
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation */}
      <div className={`transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#030407]/95 backdrop-blur-2xl border-b border-cyan-500/20 py-3 shadow-[0_10px_35px_rgba(0,240,255,0.08)]' 
          : 'bg-gradient-to-b from-[#030407]/95 via-[#030407]/70 to-transparent py-4 sm:py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo with Futuristic Holographic Brackets */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative w-11 h-11 rounded-xl bg-black border border-cyan-500/40 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]">
              <div className="absolute inset-0 cyber-dots opacity-40" />
              <div className="font-display font-black text-cyan-400 text-base tracking-tighter relative z-10">
                Г+
              </div>
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="font-display font-black text-lg sm:text-xl tracking-[0.14em] text-white uppercase group-hover:text-cyan-300 transition-colors">
                  ГРАНД <span className="font-light text-cyan-400">ПЛЮС</span>
                </span>
                <span className="text-[9px] font-mono tracking-widest text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5 rounded uppercase">
                  FUTURE 2150
                </span>
              </div>
              <span className="text-[9px] tracking-[0.22em] text-neutral-400 uppercase font-mono">
                Neo-Futuristic Architecture
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-mono tracking-[0.15em] uppercase text-neutral-300 hover:text-cyan-300 transition-all relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenCalculator}
              className="px-3.5 py-2 text-xs font-mono tracking-wider text-neutral-300 hover:text-cyan-300 hud-panel rounded-xl flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Calculator className="w-3.5 h-3.5 text-cyan-400" />
              <span>Квант-Смета</span>
            </button>

            <button
              onClick={onOpenConsultation}
              className="px-4 py-2 text-xs font-mono tracking-[0.12em] font-bold text-black bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow-[0_0_25px_rgba(0,240,255,0.35)] transition-all flex items-center gap-1.5 uppercase cursor-pointer"
            >
              <span>Инициировать проект</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenConsultation}
              className="sm:hidden px-3 py-1.5 text-[10px] font-mono tracking-wider font-bold text-black bg-cyan-400 rounded-lg uppercase"
            >
              Инициировать
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-cyan-400 hud-panel rounded-xl focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#030407]/98 border-b border-cyan-500/25 px-4 py-6 space-y-4 backdrop-blur-2xl">
          <div className="flex flex-col space-y-3 font-mono">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-wider text-neutral-200 hover:text-cyan-300 py-2 border-b border-white/[0.06]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2 font-mono">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCalculator();
              }}
              className="w-full py-3 rounded-xl hud-panel text-xs uppercase tracking-wider text-neutral-200 flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4 text-cyan-400" />
              <span>Калькулятор сметы 2150</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 rounded-xl bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
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
