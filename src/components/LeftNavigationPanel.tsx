import React from 'react';
import { Language, TRANSLATIONS } from '../data/translations';

export type NavSection = 'works' | 'philosophy' | 'architects' | 'materials' | 'global' | 'contact';

interface LeftNavigationPanelProps {
  activeSection: NavSection;
  onSelectSection: (section: NavSection) => void;
  currentLang?: Language;
}

export const LeftNavigationPanel: React.FC<LeftNavigationPanelProps> = ({
  activeSection,
  onSelectSection,
  currentLang = 'RU',
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.RU;

  const MENU_ITEMS: {
    key: NavSection;
    title: string;
    subtitle: string;
  }[] = [
    {
      key: 'works',
      title: t.nav.works.title,
      subtitle: t.nav.works.subtitle,
    },
    {
      key: 'philosophy',
      title: t.nav.philosophy.title,
      subtitle: t.nav.philosophy.subtitle,
    },
    {
      key: 'architects',
      title: t.nav.architects.title,
      subtitle: t.nav.architects.subtitle,
    },
    {
      key: 'materials',
      title: t.nav.materials.title,
      subtitle: t.nav.materials.subtitle,
    },
    {
      key: 'global',
      title: t.nav.global.title,
      subtitle: t.nav.global.subtitle,
    },
    {
      key: 'contact',
      title: t.nav.contact.title,
      subtitle: t.nav.contact.subtitle,
    },
  ];

  return (
    <nav
      className="w-full md:w-[220px] lg:w-[250px] shrink-0 select-none flex flex-col"
      aria-label="Main Sections Menu"
    >
      {MENU_ITEMS.map((item) => {
        const isActive = activeSection === item.key;

        return (
          <button
            key={item.key}
            onClick={() => onSelectSection(item.key)}
            className="group text-left py-2.5 sm:py-3 border-b border-neutral-100 last:border-b-0 cursor-pointer focus:outline-none transition-colors"
          >
            <div className="flex flex-col">
              <span
                className={`font-serif text-base sm:text-lg leading-snug tracking-tight transition-colors ${
                  isActive
                    ? 'text-black font-medium'
                    : 'text-neutral-700 group-hover:text-black font-normal'
                }`}
              >
                {item.title}
              </span>
              <span
                className={`font-serif text-[11px] sm:text-xs leading-tight tracking-normal transition-colors mt-0.5 ${
                  isActive
                    ? 'text-neutral-900 font-normal'
                    : 'text-neutral-400 group-hover:text-neutral-600 font-light'
                }`}
              >
                {item.subtitle}
              </span>
            </div>
          </button>
        );
      })}
    </nav>
  );
};
