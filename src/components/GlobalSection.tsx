import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface GlobalSectionProps {
  onNavigateToWorks: () => void;
  onNavigateToContact: () => void;
  currentLang?: Language;
}

export const GlobalSection: React.FC<GlobalSectionProps> = ({
  onNavigateToWorks,
  onNavigateToContact,
  currentLang = 'RU',
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.RU;

  const HUBS = [
    {
      region: t.global.hub1Region,
      locations: currentLang === 'RU' ? 'Бишкек • Ош • Каракол • Чолпон-Ата' : currentLang === 'KY' ? 'Бишкек • Ош • Каракол • Чолпон-Ата' : currentLang === 'ZH' ? '比什凯克 • 奥什 • 卡拉科尔 • 乔尔蓬阿塔' : 'Bishkek • Osh • Karakol • Cholpon-Ata',
      type: t.global.hub1Type,
      desc: t.global.hub1Desc,
    },
    {
      region: t.global.hub2Region,
      locations: currentLang === 'RU' ? 'Алматы • Ташкент • Астана • Самарканд' : currentLang === 'KY' ? 'Алматы • Ташкент • Астана • Самарканд' : currentLang === 'ZH' ? '阿拉木图 • 塔什干 • 阿斯塔纳 • 撒马尔罕' : 'Almaty • Tashkent • Astana • Samarkand',
      type: t.global.hub2Type,
      desc: t.global.hub2Desc,
    },
    {
      region: t.global.hub3Region,
      locations: currentLang === 'RU' ? 'Дубай • Лондон • Цюрих • Стамбул' : currentLang === 'KY' ? 'Дубай • Лондон • Цюрих • Стамбул' : currentLang === 'ZH' ? '迪拜 • 伦敦 • 苏黎世 • 伊斯坦布尔' : 'Dubai • London • Zurich • Istanbul',
      type: t.global.hub3Type,
      desc: t.global.hub3Desc,
    },
  ];

  return (
    <div className="w-full flex flex-col justify-between p-4 sm:p-5 lg:p-6 bg-white border border-neutral-200/80 min-h-[480px] lg:min-h-[500px] select-none">
      {/* Top Header */}
      <div className="border-b border-neutral-200 pb-2.5 sm:pb-3 shrink-0">
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-0.5">
          <span>{t.global.number}</span>
          <span>/</span>
          <span className="uppercase tracking-widest text-[11px] font-sans text-neutral-600">{t.global.category}</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-neutral-900 font-normal tracking-tight">
          {t.global.title}
        </h2>
        <p className="font-serif text-xs sm:text-sm text-neutral-600 mt-0.5 font-light max-w-3xl">
          {t.global.description}
        </p>
      </div>

      {/* 3 Regional Hubs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 my-2.5 sm:my-3 flex-1 items-stretch">
        {HUBS.map((hub, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-5 bg-neutral-50/80 border border-neutral-200 flex flex-col justify-between space-y-3"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between text-neutral-500">
                <span className="text-[10px] font-mono uppercase tracking-widest">{hub.type}</span>
                <span className="text-xs font-mono text-neutral-400">0{idx + 1}</span>
              </div>
              <h3 className="font-serif text-base sm:text-lg text-neutral-900 font-normal leading-tight">
                {hub.region}
              </h3>
              <div className="text-[11px] font-sans text-neutral-700 font-medium">
                {hub.locations}
              </div>
              <p className="text-[11px] text-neutral-600 font-sans font-light leading-relaxed">
                {hub.desc}
              </p>
            </div>

            <div className="text-[10px] font-mono text-neutral-500 pt-2 border-t border-neutral-200 flex items-center justify-between">
              <span>{currentLang === 'RU' ? 'Архитектурный надзор' : currentLang === 'KY' ? 'Архитектуралык көзөмөл' : currentLang === 'ZH' ? '设计监造与配合' : 'Design Oversight'}</span>
              <span className="font-serif text-neutral-900 font-medium">GRAND⁺</span>
            </div>
          </div>
        ))}
      </div>

      {/* Supply Chain Assurance Strip */}
      <div className="p-2 sm:p-2.5 bg-neutral-100/60 border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-700 shrink-0">
        <span className="font-sans font-light">
          {currentLang === 'RU'
            ? 'Адаптация проектной документации под строительные нормы СНиП, Eurocode, IBC и национальные регламенты.'
            : currentLang === 'KY'
            ? 'Долбоордук документацияны эл аралык курулуш ченемдерине ылайыкташтыруу.'
            : currentLang === 'ZH'
            ? '设计施工图全面满足国际工程标准、Eurocode与所在国建筑规范许可要求。'
            : 'Turnkey architectural compliance adapting Kyrgyz designs to Eurocode, IBC, and local building codes.'}
        </span>
        <span className="font-mono text-[11px] text-neutral-900 font-medium shrink-0">
          {currentLang === 'RU' ? 'Международные стандарты' : currentLang === 'KY' ? 'Эл аралык стандарттар' : currentLang === 'ZH' ? '国际工程合规' : 'International Compliance'}
        </span>
      </div>

      {/* Bottom Action Strip */}
      <div className="pt-2 sm:pt-2.5 border-t border-neutral-200 flex items-center justify-between text-xs font-sans shrink-0">
        <button
          onClick={onNavigateToWorks}
          className="inline-flex items-center gap-1.5 text-neutral-900 hover:text-black font-medium transition-colors cursor-pointer group"
        >
          <span>{t.global.seeMap}</span>
          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
        </button>

        <button
          onClick={onNavigateToContact}
          className="px-4 py-1.5 bg-neutral-900 hover:bg-black text-white text-[11px] tracking-wider transition-colors cursor-pointer"
        >
          {t.global.internationalInquiry}
        </button>
      </div>
    </div>
  );
};
