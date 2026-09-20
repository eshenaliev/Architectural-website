import React from 'react';
import { Users, Shield, ArrowRight } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface ArchitectsSectionProps {
  onNavigateToWorks: () => void;
  onNavigateToContact: () => void;
  currentLang?: Language;
}

export const ArchitectsSection: React.FC<ArchitectsSectionProps> = ({
  onNavigateToWorks,
  onNavigateToContact,
  currentLang = 'RU',
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.RU;

  return (
    <div className="w-full flex flex-col justify-between p-4 sm:p-5 lg:p-6 bg-white border border-neutral-200/80 min-h-[480px] lg:min-h-[500px] select-none">
      {/* Top Header */}
      <div className="border-b border-neutral-200 pb-2.5 sm:pb-3 shrink-0">
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-0.5">
          <span>{t.architects.number}</span>
          <span>/</span>
          <span className="uppercase tracking-widest text-[11px] font-sans text-neutral-600">{t.architects.category}</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-neutral-900 font-normal tracking-tight">
          {t.architects.title}
        </h2>
        <p className="font-serif text-xs sm:text-sm text-neutral-600 mt-0.5 font-light max-w-3xl">
          {t.architects.description}
        </p>
      </div>

      {/* 3 Core Divisions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 my-2.5 sm:my-3 flex-1 items-stretch">
        {/* Studio 1 */}
        <div className="p-4 sm:p-5 bg-neutral-50/80 border border-neutral-200 flex flex-col justify-between space-y-3">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">{t.architects.card1Badge}</span>
              <Users className="w-4 h-4 text-neutral-800" />
            </div>
            <h3 className="font-serif text-base sm:text-lg text-neutral-900 font-normal">
              {t.architects.card1Title}
            </h3>
            <p className="text-[11px] sm:text-xs text-neutral-600 font-sans font-light leading-relaxed">
              {t.architects.card1Desc}
            </p>
          </div>
          <div className="text-[10px] font-mono text-neutral-500 pt-2 border-t border-neutral-200">
            {t.architects.card1Foot}
          </div>
        </div>

        {/* Studio 2 */}
        <div className="p-4 sm:p-5 bg-neutral-50/80 border border-neutral-200 flex flex-col justify-between space-y-3">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">{t.architects.card2Badge}</span>
              <Shield className="w-4 h-4 text-neutral-800" />
            </div>
            <h3 className="font-serif text-base sm:text-lg text-neutral-900 font-normal">
              {t.architects.card2Title}
            </h3>
            <p className="text-[11px] sm:text-xs text-neutral-600 font-sans font-light leading-relaxed">
              {t.architects.card2Desc}
            </p>
          </div>
          <div className="text-[10px] font-mono text-neutral-500 pt-2 border-t border-neutral-200">
            {t.architects.card2Foot}
          </div>
        </div>

        {/* Studio 3 */}
        <div className="p-4 sm:p-5 bg-neutral-50/80 border border-neutral-200 flex flex-col justify-between space-y-3">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">{t.architects.card3Badge}</span>
              <Users className="w-4 h-4 text-neutral-800" />
            </div>
            <h3 className="font-serif text-base sm:text-lg text-neutral-900 font-normal">
              {t.architects.card3Title}
            </h3>
            <p className="text-[11px] sm:text-xs text-neutral-600 font-sans font-light leading-relaxed">
              {t.architects.card3Desc}
            </p>
          </div>
          <div className="text-[10px] font-mono text-neutral-500 pt-2 border-t border-neutral-200">
            {t.architects.card3Foot}
          </div>
        </div>
      </div>

      {/* Assurance Strip */}
      <div className="p-2 sm:p-2.5 bg-neutral-100/60 border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-700 shrink-0">
        <span className="font-sans font-light">
          {currentLang === 'RU'
            ? 'Все ведущие архитекторы имеют государственную аттестацию I категории и опыт работы с международными нормами ISO & Eurocode.'
            : currentLang === 'KY'
            ? 'Бардык архитекторлор I категориядагы мамлекеттик аттестацияга ээ.'
            : currentLang === 'ZH'
            ? '所有主创建筑师均持有一级执业资质，熟悉国际ISO与欧洲建筑标准规范。'
            : 'All leading master architects possess State Class 1 Certification and align with Eurocode & ISO standards.'}
        </span>
        <span className="font-sans text-[11px] text-neutral-900 font-medium tracking-wide shrink-0">
          {currentLang === 'RU' ? 'Аттестация I категории' : currentLang === 'KY' ? 'I категориядагы сертификат' : currentLang === 'ZH' ? '一级注册资质认证' : 'Class 1 Certification'}
        </span>
      </div>

      {/* Bottom Action Strip */}
      <div className="pt-2 sm:pt-2.5 border-t border-neutral-200 flex items-center justify-between text-xs font-sans shrink-0">
        <button
          onClick={onNavigateToWorks}
          className="inline-flex items-center gap-1.5 text-neutral-900 hover:text-black font-medium transition-colors cursor-pointer group"
        >
          <span>{t.architects.actionLeft}</span>
          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
        </button>

        <button
          onClick={onNavigateToContact}
          className="px-4 py-1.5 bg-neutral-900 hover:bg-black text-white text-[11px] tracking-wider transition-colors cursor-pointer"
        >
          {t.architects.actionRight}
        </button>
      </div>
    </div>
  );
};
