import React from 'react';
import { Compass, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/projects';
import { Language, TRANSLATIONS } from '../data/translations';

interface PhilosophySectionProps {
  onNavigateToWorks: () => void;
  onNavigateToContact: () => void;
  currentLang?: Language;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({
  onNavigateToWorks,
  onNavigateToContact,
  currentLang = 'RU',
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.RU;
  const previewImg = FEATURED_PROJECTS[2]?.image || FEATURED_PROJECTS[0]?.image;

  return (
    <div className="w-full flex flex-col justify-between p-4 sm:p-5 lg:p-6 bg-white border border-neutral-200/80 min-h-[480px] lg:min-h-[500px] select-none">
      {/* Top Header */}
      <div className="border-b border-neutral-200 pb-2.5 sm:pb-3 shrink-0">
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-0.5">
          <span>{t.philosophy.number}</span>
          <span>/</span>
          <span className="uppercase tracking-widest text-[11px] font-sans text-neutral-600">{t.philosophy.category}</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-neutral-900 font-normal tracking-tight">
          {t.philosophy.title}
        </h2>
        <p className="font-serif text-xs sm:text-sm text-neutral-600 mt-0.5 font-light max-w-3xl">
          {t.philosophy.description}
        </p>
      </div>

      {/* Visual Architectural Banner */}
      <div
        onClick={onNavigateToWorks}
        title="Explore all architectural works"
        className="group relative w-full h-[110px] sm:h-[125px] lg:h-[135px] overflow-hidden bg-neutral-900 my-1.5 sm:my-2 shrink-0 cursor-pointer"
      >
        <img
          src={previewImg}
          alt="Kyrgyz Architectural Atmosphere"
          className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center justify-between px-6 sm:px-8">
          <p className="font-serif italic text-white/95 text-sm sm:text-base lg:text-lg max-w-xl leading-snug drop-shadow-sm font-light">
            {t.philosophy.quote}
          </p>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-sans text-white/90 bg-black/40 border border-white/30 px-3 py-1 backdrop-blur-xs group-hover:bg-white group-hover:text-black transition-colors">
            <span>{t.philosophy.exploreWorks}</span>
            <span>↗</span>
          </span>
        </div>
      </div>

      {/* 3 Core Philosophical Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 my-1.5 sm:my-2 flex-1 items-stretch">
        <div className="p-3 sm:p-3.5 bg-neutral-50/80 border border-neutral-200 flex flex-col justify-between space-y-1.5">
          <div className="inline-flex items-center gap-1.5 text-neutral-400">
            <Compass className="w-3.5 h-3.5 stroke-[1.5] text-neutral-900" />
            <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-neutral-500">
              01 • {t.philosophy.pillar1Sub}
            </span>
          </div>
          <div>
            <h3 className="font-serif text-sm sm:text-base text-neutral-900 font-normal">
              {t.philosophy.pillar1Title}
            </h3>
            <p className="text-[11px] text-neutral-600 font-sans font-light leading-snug mt-1">
              {t.philosophy.pillar1Desc}
            </p>
          </div>
          <div className="text-[10px] font-mono text-neutral-500 pt-1 border-t border-neutral-200">
            {currentLang === 'RU' ? 'Пространственная свобода' : currentLang === 'KY' ? 'Мейкиндик эркиндиги' : currentLang === 'ZH' ? '空间自由度' : 'Spatial Freedom'}
          </div>
        </div>

        <div className="p-3 sm:p-3.5 bg-neutral-50/80 border border-neutral-200 flex flex-col justify-between space-y-1.5">
          <div className="inline-flex items-center gap-1.5 text-neutral-400">
            <Sparkles className="w-3.5 h-3.5 stroke-[1.5] text-neutral-900" />
            <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-neutral-500">
              02 • {t.philosophy.pillar2Sub}
            </span>
          </div>
          <div>
            <h3 className="font-serif text-sm sm:text-base text-neutral-900 font-normal">
              {t.philosophy.pillar2Title}
            </h3>
            <p className="text-[11px] text-neutral-600 font-sans font-light leading-snug mt-1">
              {t.philosophy.pillar2Desc}
            </p>
          </div>
          <div className="text-[10px] font-mono text-neutral-500 pt-1 border-t border-neutral-200">
            {currentLang === 'RU' ? 'Честность материалов' : currentLang === 'KY' ? 'Табигый материалдар' : currentLang === 'ZH' ? '本真材料' : 'Material Honesty'}
          </div>
        </div>

        <div className="p-3 sm:p-3.5 bg-neutral-50/80 border border-neutral-200 flex flex-col justify-between space-y-1.5">
          <div className="inline-flex items-center gap-1.5 text-neutral-400">
            <Layers className="w-3.5 h-3.5 stroke-[1.5] text-neutral-900" />
            <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-neutral-500">
              03 • {t.philosophy.pillar3Sub}
            </span>
          </div>
          <div>
            <h3 className="font-serif text-sm sm:text-base text-neutral-900 font-normal">
              {t.philosophy.pillar3Title}
            </h3>
            <p className="text-[11px] text-neutral-600 font-sans font-light leading-snug mt-1">
              {t.philosophy.pillar3Desc}
            </p>
          </div>
          <div className="text-[10px] font-mono text-neutral-500 pt-1 border-t border-neutral-200">
            {currentLang === 'RU' ? 'Архитектурный покой' : currentLang === 'KY' ? 'Архитектуралык бейпилдик' : currentLang === 'ZH' ? '宁静建筑' : 'Architectural Serenity'}
          </div>
        </div>
      </div>

      {/* Bottom Action Strip */}
      <div className="pt-2 sm:pt-2.5 border-t border-neutral-200 flex items-center justify-between text-xs font-sans shrink-0">
        <button
          onClick={onNavigateToWorks}
          className="inline-flex items-center gap-1.5 text-neutral-900 hover:text-black font-medium transition-colors cursor-pointer group"
        >
          <span>{currentLang === 'RU' ? 'Посмотреть реализованные проекты' : currentLang === 'KY' ? 'Ишке ашкан долбоорлорду көрүү' : currentLang === 'ZH' ? '查看已建成项目' : 'View Realized Architecture'}</span>
          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
        </button>

        <button
          onClick={onNavigateToContact}
          className="px-4 py-1.5 bg-neutral-900 hover:bg-black text-white text-[11px] tracking-wider transition-colors cursor-pointer"
        >
          {currentLang === 'RU' ? 'Обсудить философию вашего проекта' : currentLang === 'KY' ? 'Долбоор боюнча кеңешүү' : currentLang === 'ZH' ? '探讨项目设计理念' : 'Discuss Your Concept'}
        </button>
      </div>
    </div>
  );
};
