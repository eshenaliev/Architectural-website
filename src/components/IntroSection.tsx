import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ProjectItem } from '../types';
import { FEATURED_PROJECTS } from '../data/projects';
import { Language, TRANSLATIONS } from '../data/translations';

interface IntroSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  onContactClick?: () => void;
  onViewAllWorks?: () => void;
  currentLang?: Language;
}

export const IntroSection: React.FC<IntroSectionProps> = ({
  onSelectProject,
  onContactClick,
  onViewAllWorks,
  currentLang = 'RU',
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.RU;
  const worksCards = FEATURED_PROJECTS.slice(1, 4);

  return (
    <div className="w-full flex flex-col justify-between p-4 sm:p-5 lg:p-6 bg-white border border-neutral-200/80 min-h-[480px] lg:min-h-[500px] select-none">
      {/* Top Header matching other sections */}
      <div className="border-b border-neutral-200 pb-2.5 sm:pb-3 shrink-0">
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-0.5">
          <span>{t.intro.number}</span>
          <span>/</span>
          <span className="uppercase tracking-widest text-[11px] font-sans text-neutral-600">{t.intro.category}</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-neutral-900 font-normal tracking-tight">
          {t.intro.title}
        </h2>
        <p className="font-serif text-xs sm:text-sm text-neutral-600 mt-0.5 font-light max-w-3xl">
          {t.intro.description}
        </p>
      </div>

      {/* 3-Card Architectural Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 my-2.5 sm:my-3 flex-1 items-stretch">
        {worksCards.map((project) => (
          <button
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="text-left group cursor-pointer focus:outline-none flex flex-col justify-between p-3 sm:p-3.5 bg-neutral-50/80 hover:bg-neutral-50 border border-neutral-200 hover:border-neutral-400 transition-all"
          >
            <div>
              {/* Project Image */}
              <div className="w-full aspect-[16/10] bg-neutral-100 overflow-hidden relative mb-2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 bg-black/60 backdrop-blur-sm text-white text-[10px] font-mono tracking-wider uppercase">
                  {project.category}
                </span>
              </div>

              {/* Location & Year */}
              <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 mb-0.5">
                <span className="truncate max-w-[170px]">{project.location}</span>
                <span>{project.year}</span>
              </div>

              {/* Title with subtle arrow */}
              <h4 className="font-serif text-base sm:text-lg text-neutral-900 font-normal group-hover:text-black transition-colors flex items-center justify-between">
                <span>{project.title}</span>
                <span className="font-serif text-sm leading-none transition-transform duration-200 group-hover:translate-x-1 text-neutral-400 group-hover:text-neutral-900">
                  —
                </span>
              </h4>

              {/* Highlight summary */}
              <p className="text-[11px] text-neutral-600 font-sans font-light mt-0.5 line-clamp-1">
                {project.highlights?.[0] || project.architect}
              </p>
            </div>

            {/* Bottom meta strip */}
            <div className="text-[10px] font-mono text-neutral-500 pt-1.5 mt-2 border-t border-neutral-200/80 flex items-center justify-between">
              <span>{project.area}</span>
              <span className="group-hover:text-neutral-900 transition-colors">⌂</span>
            </div>
          </button>
        ))}
      </div>

      {/* Scope Assurance Strip */}
      <div className="p-2 sm:p-2.5 bg-neutral-100/60 border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-700 shrink-0">
        <span className="font-sans font-light">
          {currentLang === 'RU'
            ? 'Премиальные жилые резиденции, общественные здания и эко-курорты, рассчитанные на сейсмические и климатические условия высокогорья.'
            : currentLang === 'KY'
            ? 'Жогорку категориядагы виллалар, коомдук имараттар жана эко-курорттор.'
            : currentLang === 'ZH'
            ? '高端住宅别墅、公共建筑及生态度假酒店，符合高山抗震及生物气候标准。'
            : 'Bespoke residential villas, public buildings, and eco-resorts certified for alpine seismic & bioclimatic criteria.'}
        </span>
        <span className="font-mono text-[11px] text-neutral-900 font-medium shrink-0">
          {currentLang === 'RU'
            ? 'Лицензированная проектная практика'
            : currentLang === 'KY'
            ? 'Лицензияланган долбоорлоо'
            : currentLang === 'ZH'
            ? '国家认证建筑设计机构'
            : 'Licensed Architectural Practice'}
        </span>
      </div>

      {/* Bottom Action Strip matching other sections */}
      <div className="pt-2 sm:pt-2.5 border-t border-neutral-200 flex items-center justify-between text-xs font-sans shrink-0">
        <button
          onClick={onViewAllWorks}
          className="inline-flex items-center gap-1.5 text-neutral-900 hover:text-black font-medium transition-colors cursor-pointer group"
        >
          <span>{t.intro.exploreArchive} ({FEATURED_PROJECTS.length})</span>
          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
        </button>

        <button
          onClick={onContactClick}
          className="px-4 py-1.5 bg-neutral-900 hover:bg-black text-white text-[11px] tracking-wider transition-colors cursor-pointer"
        >
          {t.intro.scheduleConsultation}
        </button>
      </div>
    </div>
  );
};
