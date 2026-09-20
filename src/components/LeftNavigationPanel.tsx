import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';
import { ProjectType } from '../types';

export type NavSection = 'home' | 'services' | 'projects' | 'pricing' | 'promotions' | 'readyProjects' | 'contact' | 'careers' | 'philosophy' | 'architects' | 'materials' | 'global';

interface LeftNavigationPanelProps {
  activeSection: NavSection;
  projectFilter?: 'all' | ProjectType;
  onSelectSection: (section: NavSection, filter?: 'all' | ProjectType) => void;
  currentLang?: Language;
}

export const LeftNavigationPanel: React.FC<LeftNavigationPanelProps> = ({
  activeSection,
  projectFilter = 'all',
  onSelectSection,
  currentLang = 'RU',
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.RU;

  const isProjectsActive = activeSection === 'projects';

  return (
    <nav
      className="w-full md:w-[260px] lg:w-[280px] shrink-0 select-none flex flex-col justify-between p-3.5 sm:p-4 lg:p-5 bg-white border border-neutral-200/80 min-h-[500px] lg:min-h-[540px]"
      aria-label="Main Navigation Directory"
    >
      {/* Navigation Items List starting directly with Главная */}
      <div className="flex-1 flex flex-col justify-start space-y-0.5 sm:space-y-1">
        {/* 1. Главная */}
        <button
          onClick={() => onSelectSection('home')}
          className={`group text-left py-1.5 px-2 border-l-2 transition-all cursor-pointer focus:outline-none flex items-center justify-between ${
            activeSection === 'home'
              ? 'border-neutral-900 bg-neutral-50/90 text-neutral-900 font-medium'
              : 'border-transparent text-neutral-700 hover:text-black hover:bg-neutral-50/50'
          }`}
        >
          <div className="flex flex-col">
            <span className="font-serif text-base sm:text-lg leading-tight tracking-tight">
              {t.nav.home.title}
            </span>
            <span className="font-serif text-[11px] text-neutral-400 group-hover:text-neutral-600 font-light mt-0.5">
              {t.nav.home.subtitle}
            </span>
          </div>
          {activeSection === 'home' && (
            <ChevronRight className="w-3.5 h-3.5 text-neutral-900 shrink-0" />
          )}
        </button>

        {/* 2. Услуги (После главной) */}
        <button
          onClick={() => onSelectSection('services')}
          className={`group text-left py-1.5 px-2 border-l-2 transition-all cursor-pointer focus:outline-none flex items-center justify-between ${
            activeSection === 'services'
              ? 'border-neutral-900 bg-neutral-50/90 text-neutral-900 font-medium'
              : 'border-transparent text-neutral-700 hover:text-black hover:bg-neutral-50/50'
          }`}
        >
          <div className="flex flex-col">
            <span className="font-serif text-base sm:text-lg leading-tight tracking-tight">
              {t.nav.services.title}
            </span>
            <span className="font-serif text-[11px] text-neutral-400 group-hover:text-neutral-600 font-light mt-0.5">
              {t.nav.services.subtitle}
            </span>
          </div>
          {activeSection === 'services' && (
            <ChevronRight className="w-3.5 h-3.5 text-neutral-900 shrink-0" />
          )}
        </button>

        {/* 3. Проекты with Nested Sub-items */}
        <div className="pt-0.5">
          {/* Main "Проекты" Row */}
          <button
            onClick={() => onSelectSection('projects', 'all')}
            className={`group text-left w-full py-1.5 px-2 border-l-2 transition-all cursor-pointer focus:outline-none flex items-center justify-between ${
              isProjectsActive && projectFilter === 'all'
                ? 'border-neutral-900 bg-neutral-50/90 text-neutral-900 font-medium'
                : isProjectsActive
                ? 'border-neutral-400 bg-neutral-50/40 text-neutral-900'
                : 'border-transparent text-neutral-700 hover:text-black hover:bg-neutral-50/50'
            }`}
          >
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg leading-tight tracking-tight">
                {t.nav.projects.title}:
              </span>
              <span className="font-serif text-[11px] text-neutral-400 group-hover:text-neutral-600 font-light mt-0.5">
                {t.nav.projects.subtitle}
              </span>
            </div>
            {isProjectsActive && (
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                {projectFilter === 'all' ? 'ALL' : projectFilter.toUpperCase()}
              </span>
            )}
          </button>

          {/* Sub-items: Жилые, Коммерческие, Другие */}
          <div className="ml-3 pl-2.5 border-l border-neutral-200 py-0.5 space-y-0.5 mt-0.5">
            {/* Жилые */}
            <button
              onClick={() => onSelectSection('projects', 'residential')}
              className={`w-full text-left py-1 px-2 transition-all text-xs font-serif flex items-center justify-between cursor-pointer ${
                isProjectsActive && projectFilter === 'residential'
                  ? 'text-neutral-900 font-medium bg-neutral-100/90'
                  : 'text-neutral-600 hover:text-black hover:bg-neutral-50'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <span className="text-[10px] text-neutral-400 font-mono">—</span>
                <span>{t.nav.projects.residential}</span>
              </span>
              {isProjectsActive && projectFilter === 'residential' && (
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
              )}
            </button>

            {/* Коммерческие */}
            <button
              onClick={() => onSelectSection('projects', 'commercial')}
              className={`w-full text-left py-1 px-2 transition-all text-xs font-serif flex items-center justify-between cursor-pointer ${
                isProjectsActive && projectFilter === 'commercial'
                  ? 'text-neutral-900 font-medium bg-neutral-100/90'
                  : 'text-neutral-600 hover:text-black hover:bg-neutral-50'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <span className="text-[10px] text-neutral-400 font-mono">—</span>
                <span>{t.nav.projects.commercial}</span>
              </span>
              {isProjectsActive && projectFilter === 'commercial' && (
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
              )}
            </button>

            {/* Другие */}
            <button
              onClick={() => onSelectSection('projects', 'other')}
              className={`w-full text-left py-1 px-2 transition-all text-xs font-serif flex items-center justify-between cursor-pointer ${
                isProjectsActive && projectFilter === 'other'
                  ? 'text-neutral-900 font-medium bg-neutral-100/90'
                  : 'text-neutral-600 hover:text-black hover:bg-neutral-50'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <span className="text-[10px] text-neutral-400 font-mono">—</span>
                <span>{t.nav.projects.other}</span>
              </span>
              {isProjectsActive && projectFilter === 'other' && (
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
              )}
            </button>
          </div>
        </div>

        {/* 4. Стоимость */}
        <button
          onClick={() => onSelectSection('pricing')}
          className={`group text-left py-1.5 px-2 border-l-2 transition-all cursor-pointer focus:outline-none flex items-center justify-between ${
            activeSection === 'pricing'
              ? 'border-neutral-900 bg-neutral-50/90 text-neutral-900 font-medium'
              : 'border-transparent text-neutral-700 hover:text-black hover:bg-neutral-50/50'
          }`}
        >
          <div className="flex flex-col">
            <span className="font-serif text-base sm:text-lg leading-tight tracking-tight">
              {t.nav.pricing.title}
            </span>
            <span className="font-serif text-[11px] text-neutral-400 group-hover:text-neutral-600 font-light mt-0.5">
              {t.nav.pricing.subtitle}
            </span>
          </div>
          {activeSection === 'pricing' && (
            <ChevronRight className="w-3.5 h-3.5 text-neutral-900 shrink-0" />
          )}
        </button>

        {/* 5. Акции */}
        <button
          onClick={() => onSelectSection('promotions')}
          className={`group text-left py-1.5 px-2 border-l-2 transition-all cursor-pointer focus:outline-none flex items-center justify-between ${
            activeSection === 'promotions'
              ? 'border-neutral-900 bg-neutral-50/90 text-neutral-900 font-medium'
              : 'border-transparent text-neutral-700 hover:text-black hover:bg-neutral-50/50'
          }`}
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-serif text-base sm:text-lg leading-tight tracking-tight">
                {t.nav.promotions.title}
              </span>
              <span className="text-[9px] font-mono text-emerald-700 bg-emerald-50 px-1 py-0.2 border border-emerald-200">
                PROMO
              </span>
            </div>
            <span className="font-serif text-[11px] text-neutral-400 group-hover:text-neutral-600 font-light mt-0.5">
              {t.nav.promotions.subtitle}
            </span>
          </div>
          {activeSection === 'promotions' && (
            <ChevronRight className="w-3.5 h-3.5 text-neutral-900 shrink-0" />
          )}
        </button>

        {/* 6. Готовые проекты (После акции) */}
        <button
          onClick={() => onSelectSection('readyProjects')}
          className={`group text-left py-1.5 px-2 border-l-2 transition-all cursor-pointer focus:outline-none flex items-center justify-between ${
            activeSection === 'readyProjects'
              ? 'border-neutral-900 bg-neutral-50/90 text-neutral-900 font-medium'
              : 'border-transparent text-neutral-700 hover:text-black hover:bg-neutral-50/50'
          }`}
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-base sm:text-lg leading-tight tracking-tight">
                {t.nav.readyProjects.title}
              </span>
              <span className="text-[9px] font-mono text-neutral-700 bg-neutral-100 px-1 py-0.2 border border-neutral-200">
                КАТАЛОГ
              </span>
            </div>
            <span className="font-serif text-[11px] text-neutral-400 group-hover:text-neutral-600 font-light mt-0.5">
              {t.nav.readyProjects.subtitle}
            </span>
          </div>
          {activeSection === 'readyProjects' && (
            <ChevronRight className="w-3.5 h-3.5 text-neutral-900 shrink-0" />
          )}
        </button>

        {/* 7. Контакты */}
        <button
          onClick={() => onSelectSection('contact')}
          className={`group text-left py-1.5 px-2 border-l-2 transition-all cursor-pointer focus:outline-none flex items-center justify-between ${
            activeSection === 'contact'
              ? 'border-neutral-900 bg-neutral-50/90 text-neutral-900 font-medium'
              : 'border-transparent text-neutral-700 hover:text-black hover:bg-neutral-50/50'
          }`}
        >
          <div className="flex flex-col">
            <span className="font-serif text-base sm:text-lg leading-tight tracking-tight">
              {t.nav.contact.title}
            </span>
            <span className="font-serif text-[11px] text-neutral-400 group-hover:text-neutral-600 font-light mt-0.5">
              {t.nav.contact.subtitle}
            </span>
          </div>
          {activeSection === 'contact' && (
            <ChevronRight className="w-3.5 h-3.5 text-neutral-900 shrink-0" />
          )}
        </button>

        {/* 8. Карьера */}
        <button
          onClick={() => onSelectSection('careers')}
          className={`group text-left py-1.5 px-2 border-l-2 transition-all cursor-pointer focus:outline-none flex items-center justify-between ${
            activeSection === 'careers'
              ? 'border-neutral-900 bg-neutral-50/90 text-neutral-900 font-medium'
              : 'border-transparent text-neutral-700 hover:text-black hover:bg-neutral-50/50'
          }`}
        >
          <div className="flex flex-col">
            <span className="font-serif text-base sm:text-lg leading-tight tracking-tight">
              {t.nav.careers.title}
            </span>
            <span className="font-serif text-[11px] text-neutral-400 group-hover:text-neutral-600 font-light mt-0.5">
              {t.nav.careers.subtitle}
            </span>
          </div>
          {activeSection === 'careers' && (
            <ChevronRight className="w-3.5 h-3.5 text-neutral-900 shrink-0" />
          )}
        </button>
      </div>

      {/* Bottom Metadata Bar in Frame */}
      <div className="pt-3 border-t border-neutral-200 shrink-0 text-[10px] font-mono text-neutral-500 flex items-center justify-between">
        <span>GRAND⁺ 2026</span>
        <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 border border-emerald-200 font-sans">
          Bishkek HQ
        </span>
      </div>
    </nav>
  );
};
