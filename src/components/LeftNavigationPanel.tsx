import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';
import { ProjectType, PricingSubTab } from '../types';

export type NavSection = 'home' | 'services' | 'projects' | 'pricing' | 'promotions' | 'readyProjects' | 'guide' | 'contact' | 'careers' | 'philosophy' | 'architects' | 'materials' | 'global';

interface LeftNavigationPanelProps {
  activeSection: NavSection;
  projectFilter?: 'all' | ProjectType;
  pricingSubTab?: PricingSubTab;
  onSelectSection: (section: NavSection, filter?: 'all' | ProjectType, pricingTab?: PricingSubTab) => void;
  currentLang?: Language;
}

export const LeftNavigationPanel: React.FC<LeftNavigationPanelProps> = ({
  activeSection,
  projectFilter = 'all',
  pricingSubTab = 'packages',
  onSelectSection,
  currentLang = 'RU',
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.RU;

  const isProjectsActive = activeSection === 'projects';
  const [isProjectsExpanded, setIsProjectsExpanded] = useState<boolean>(activeSection === 'projects');

  const isPricingActive = activeSection === 'pricing';
  const [isPricingExpanded, setIsPricingExpanded] = useState<boolean>(activeSection === 'pricing');

  // When switching to any other section, control accordion states
  useEffect(() => {
    if (activeSection === 'projects') {
      setIsProjectsExpanded(true);
    } else {
      setIsProjectsExpanded(false);
    }

    if (activeSection === 'pricing') {
      setIsPricingExpanded(true);
    } else {
      setIsPricingExpanded(false);
    }
  }, [activeSection]);

  const handleProjectsClick = () => {
    if (!isProjectsActive) {
      onSelectSection('projects', 'all');
      setIsProjectsExpanded(true);
    } else {
      // Toggle accordion if already in projects
      setIsProjectsExpanded((prev) => !prev);
    }
  };

  const handlePricingClick = () => {
    if (!isPricingActive) {
      onSelectSection('pricing', undefined, pricingSubTab || 'packages');
      setIsPricingExpanded(true);
    } else {
      // Toggle accordion if already in pricing
      setIsPricingExpanded((prev) => !prev);
    }
  };

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
            onClick={handleProjectsClick}
            className={`group text-left w-full py-1.5 px-2 border-l-2 transition-all cursor-pointer focus:outline-none flex items-center justify-between ${
              isProjectsActive
                ? 'border-neutral-900 bg-neutral-50/90 text-neutral-900 font-medium'
                : 'border-transparent text-neutral-700 hover:text-black hover:bg-neutral-50/50'
            }`}
          >
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg leading-tight tracking-tight">
                {t.nav.projects.title}
              </span>
              <span className="font-serif text-[11px] text-neutral-400 group-hover:text-neutral-600 font-light mt-0.5">
                {t.nav.projects.subtitle}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              {isProjectsActive && projectFilter !== 'all' && (
                <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest bg-neutral-200/60 px-1 py-0.5">
                  {projectFilter.slice(0, 3)}
                </span>
              )}
              {isProjectsExpanded ? (
                <ChevronDown className="w-3.5 h-3.5 text-neutral-900 shrink-0" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700 shrink-0" />
              )}
            </div>
          </button>

          {/* Sub-items: Жилые, Коммерческие, Другие (отображаются при нажатии на Проекты и скрываются при нажатии на другие) */}
          {isProjectsExpanded && (
            <div className="ml-3 pl-2.5 border-l border-neutral-200 py-0.5 space-y-0.5 mt-0.5 transition-all">
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
          )}
        </div>

        {/* 4. Стоимость with Nested Sub-items (Готовые пакеты & Соберите свой пакет) */}
        <div className="pt-0.5">
          {/* Main "Стоимость" Row */}
          <button
            onClick={handlePricingClick}
            className={`group text-left w-full py-1.5 px-2 border-l-2 transition-all cursor-pointer focus:outline-none flex items-center justify-between ${
              isPricingActive
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
            <div className="flex items-center gap-1.5">
              {isPricingActive && (
                <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider bg-neutral-200/60 px-1 py-0.5">
                  {pricingSubTab === 'packages' ? (currentLang === 'RU' ? 'ПАКЕТЫ' : 'PACKAGES') : (currentLang === 'RU' ? 'КОНСТРУКТОР' : 'CUSTOM')}
                </span>
              )}
              {isPricingExpanded ? (
                <ChevronDown className="w-3.5 h-3.5 text-neutral-900 shrink-0" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700 shrink-0" />
              )}
            </div>
          </button>

          {/* Sub-items: Готовые пакеты & Соберите свой пакет (отображаются при нажатии на Стоимость и скрываются при нажатии на другие) */}
          {isPricingExpanded && (
            <div className="ml-3 pl-2.5 border-l border-neutral-200 py-0.5 space-y-0.5 mt-0.5 transition-all">
              {/* Готовые пакеты */}
              <button
                onClick={() => onSelectSection('pricing', undefined, 'packages')}
                className={`w-full text-left py-1 px-2 transition-all text-xs font-serif flex items-center justify-between cursor-pointer ${
                  isPricingActive && pricingSubTab === 'packages'
                    ? 'text-neutral-900 font-medium bg-neutral-100/90'
                    : 'text-neutral-600 hover:text-black hover:bg-neutral-50'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <span className="text-[10px] text-neutral-400 font-mono">—</span>
                  <span>{t.nav.pricing.packages}</span>
                </span>
                {isPricingActive && pricingSubTab === 'packages' && (
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                )}
              </button>

              {/* Соберите свой пакет */}
              <button
                onClick={() => onSelectSection('pricing', undefined, 'custom')}
                className={`w-full text-left py-1 px-2 transition-all text-xs font-serif flex items-center justify-between cursor-pointer ${
                  isPricingActive && pricingSubTab === 'custom'
                    ? 'text-neutral-900 font-medium bg-neutral-100/90'
                    : 'text-neutral-600 hover:text-black hover:bg-neutral-50'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <span className="text-[10px] text-neutral-400 font-mono">—</span>
                  <span>{t.nav.pricing.custom}</span>
                </span>
                {isPricingActive && pricingSubTab === 'custom' && (
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                )}
              </button>
            </div>
          )}
        </div>

        {/* 5. Готовые проекты */}
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

        {/* 6. Новичкам (Гид от участка до ввода в эксплуатацию) */}
        <button
          onClick={() => onSelectSection('guide')}
          className={`group text-left py-1.5 px-2 border-l-2 transition-all cursor-pointer focus:outline-none flex items-center justify-between ${
            activeSection === 'guide'
              ? 'border-neutral-900 bg-neutral-50/90 text-neutral-900 font-medium'
              : 'border-transparent text-neutral-700 hover:text-black hover:bg-neutral-50/50'
          }`}
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-base sm:text-lg leading-tight tracking-tight">
                {t.nav.guide.title}
              </span>
              <span className="text-[9px] font-mono text-emerald-800 bg-emerald-50 px-1 py-0.2 border border-emerald-200 font-medium">
                ГИД
              </span>
            </div>
            <span className="font-serif text-[11px] text-neutral-400 group-hover:text-neutral-600 font-light mt-0.5">
              {t.nav.guide.subtitle}
            </span>
          </div>
          {activeSection === 'guide' && (
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

        {/* 7. Карьера */}
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
