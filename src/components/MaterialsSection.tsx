import React from 'react';
import { Sparkles, Trees, Flame, ArrowRight } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface MaterialsSectionProps {
  onNavigateToWorks: () => void;
  onNavigateToContact: () => void;
  currentLang?: Language;
}

export const MaterialsSection: React.FC<MaterialsSectionProps> = ({
  onNavigateToWorks,
  onNavigateToContact,
  currentLang = 'RU',
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.RU;

  const MATERIALS = [
    {
      id: 'spruce',
      kanji: 'Карагай',
      name: t.materials.mat1Name,
      origin: currentLang === 'RU' ? 'Чон-Кемин и Ала-Арча' : currentLang === 'KY' ? 'Чоң-Кемин жана Ала-Арча' : currentLang === 'ZH' ? '琼科明与阿拉阿恰' : 'Chon-Kemin & Ala-Archa',
      icon: Trees,
      desc: t.materials.mat1Desc,
    },
    {
      id: 'sarytash',
      kanji: 'Сары-Таш',
      name: t.materials.mat2Name,
      origin: currentLang === 'RU' ? 'Карьеры Оша и Узгена' : currentLang === 'KY' ? 'Ош жана Өзгөн карьерлери' : currentLang === 'ZH' ? '奥什与乌兹根矿区' : 'Osh & Uzgen Deposits',
      icon: Sparkles,
      desc: t.materials.mat2Desc,
    },
    {
      id: 'charred-larch',
      kanji: 'Күйгүзүү',
      name: t.materials.mat3Name,
      origin: currentLang === 'RU' ? 'Каракол и Нарын' : currentLang === 'KY' ? 'Каракол жана Нарын' : currentLang === 'ZH' ? '卡拉科尔与纳伦' : 'Karakol & Naryn Region',
      icon: Flame,
      desc: t.materials.mat3Desc,
    },
  ];

  return (
    <div className="w-full flex flex-col justify-between p-4 sm:p-5 lg:p-6 bg-white border border-neutral-200/80 min-h-[480px] lg:min-h-[500px] select-none">
      {/* Top Header */}
      <div className="border-b border-neutral-200 pb-2.5 sm:pb-3 shrink-0">
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-0.5">
          <span>{t.materials.number}</span>
          <span>/</span>
          <span className="uppercase tracking-widest text-[11px] font-sans text-neutral-600">{t.materials.category}</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-neutral-900 font-normal tracking-tight">
          {t.materials.title}
        </h2>
        <p className="font-serif text-xs sm:text-sm text-neutral-600 mt-0.5 font-light max-w-3xl">
          {t.materials.description}
        </p>
      </div>

      {/* 3 Materials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 my-2.5 sm:my-3 flex-1 items-stretch">
        {MATERIALS.map((mat) => {
          const IconComp = mat.icon;
          return (
            <div
              key={mat.id}
              className="p-3.5 sm:p-4 bg-neutral-50/80 border border-neutral-200 flex flex-col justify-between space-y-2 hover:border-neutral-900 transition-colors"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-mincho text-sm font-light text-neutral-400">{mat.kanji}</span>
                  <IconComp className="w-3.5 h-3.5 text-neutral-800" />
                </div>
                <h3 className="font-serif text-sm sm:text-base text-neutral-900 font-normal leading-tight">
                  {mat.name}
                </h3>
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                  {mat.origin}
                </div>
                <p className="text-[11px] text-neutral-600 font-sans font-light leading-snug pt-1">
                  {mat.desc}
                </p>
              </div>

              <div className="text-[10px] font-mono text-neutral-400 pt-1.5 border-t border-neutral-200">
                {currentLang === 'RU' ? '100% Устойчивое лесопользование' : currentLang === 'KY' ? '100% Табигый тоо токою' : currentLang === 'ZH' ? '100% 可持续林业' : '100% Sustainable Forestry'}
              </div>
            </div>
          );
        })}
      </div>

      {/* Supply Chain Assurance Strip */}
      <div className="p-2 sm:p-2.5 bg-neutral-100/60 border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-700 shrink-0">
        <span className="font-sans font-light">
          {t.materials.assurance}
        </span>
        <span className="font-mono text-[11px] text-neutral-900 font-medium shrink-0">
          {t.materials.originVerified}
        </span>
      </div>

      {/* Bottom Action Strip */}
      <div className="pt-2 sm:pt-2.5 border-t border-neutral-200 flex items-center justify-between text-xs font-sans shrink-0">
        <button
          onClick={onNavigateToWorks}
          className="inline-flex items-center gap-1.5 text-neutral-900 hover:text-black font-medium transition-colors cursor-pointer group"
        >
          <span>{t.materials.seeProjects}</span>
          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
        </button>

        <button
          onClick={onNavigateToContact}
          className="px-4 py-1.5 bg-neutral-900 hover:bg-black text-white text-[11px] tracking-wider transition-colors cursor-pointer"
        >
          {t.materials.requestSamples}
        </button>
      </div>
    </div>
  );
};
