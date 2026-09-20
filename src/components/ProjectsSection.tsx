import React from 'react';
import { ArrowUpRight, Filter, Layers } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/projects';
import { ProjectItem, ProjectType } from '../types';
import { Language, TRANSLATIONS } from '../data/translations';

interface ProjectsSectionProps {
  activeFilter: 'all' | ProjectType;
  onFilterChange: (filter: 'all' | ProjectType) => void;
  onSelectProject: (project: ProjectItem) => void;
  onViewAllWorks: () => void;
  onContactClick: () => void;
  currentLang?: Language;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  activeFilter,
  onFilterChange,
  onSelectProject,
  onViewAllWorks,
  onContactClick,
  currentLang = 'RU',
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.RU;

  const filterLabels: Record<string, string> = {
    all: currentLang === 'RU' ? 'Все' : currentLang === 'KY' ? 'Бардыгы' : currentLang === 'ZH' ? '全部' : 'All',
    residential: t.nav.projects.residential,
    commercial: t.nav.projects.commercial,
    other: t.nav.projects.other,
  };

  const filteredProjects = FEATURED_PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.type === activeFilter;
  });

  return (
    <div className="w-full flex flex-col justify-between p-4 sm:p-5 lg:p-6 bg-white border border-neutral-200/80 min-h-[480px] lg:min-h-[500px] select-none">
      {/* Top Header */}
      <div className="border-b border-neutral-200 pb-2.5 sm:pb-3 shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-0.5">
            <span>01</span>
            <span>/</span>
            <span className="uppercase tracking-widest text-[11px] font-sans text-neutral-600">
              {currentLang === 'RU' ? 'ПРОЕКТЫ' : currentLang === 'KY' ? 'ДОЛБООРЛОР' : currentLang === 'ZH' ? '作品目录' : 'PROJECTS'}
            </span>
          </div>
          <button
            onClick={onViewAllWorks}
            className="text-[11px] font-mono text-neutral-600 hover:text-black flex items-center gap-1 underline underline-offset-2 transition-colors cursor-pointer"
          >
            <span>{t.intro.exploreArchive}</span>
            <ArrowUpRight className="w-3 h-3 stroke-[1.5]" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mt-0.5">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-neutral-900 font-normal tracking-tight">
              {currentLang === 'RU'
                ? 'Архитектурный каталог'
                : currentLang === 'KY'
                ? 'Архитектуралык каталог'
                : currentLang === 'ZH'
                ? '建筑设计名录'
                : 'Architectural Portfolio'}
            </h2>
            <p className="font-serif text-xs sm:text-sm text-neutral-600 mt-0.5 font-light max-w-2xl">
              {currentLang === 'RU'
                ? 'Реализованные и концептуальные проекты бюро: от приватных резиденций до знаковых общественных центров.'
                : currentLang === 'KY'
                ? 'Бюронун ишке ашкан жана концептуалдык долбоорлору: виллалардан коомдук борборлорго чейин.'
                : currentLang === 'ZH'
                ? '事务所落成及概念方案：涵盖私人庄园、商务中心与自然生态度假设施。'
                : 'Selected portfolio from private alpine residences to landmark commercial hubs.'}
            </p>
          </div>

          {/* Subcategory Filter Tabs */}
          <div className="flex items-center gap-1 bg-neutral-100 p-0.5 border border-neutral-200 shrink-0 mt-2 sm:mt-0">
            {(['all', 'residential', 'commercial', 'other'] as const).map((key) => (
              <button
                key={key}
                onClick={() => onFilterChange(key)}
                className={`px-2.5 py-1 text-xs font-sans transition-colors cursor-pointer ${
                  activeFilter === key
                    ? 'bg-white text-neutral-900 font-medium shadow-xs'
                    : 'text-neutral-600 hover:text-black'
                }`}
              >
                {filterLabels[key]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 my-4 flex-1">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group flex flex-col justify-between p-3 border border-neutral-200 hover:border-neutral-400 bg-neutral-50/50 hover:bg-neutral-50 transition-all cursor-pointer"
          >
            <div>
              {/* Image Preview */}
              <div className="aspect-[16/10] overflow-hidden relative mb-2.5 border border-neutral-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-2 left-2 px-1.5 py-0.5 bg-black/75 text-white text-[9px] font-mono uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-white/90 text-neutral-900 text-[10px] font-mono">
                  {project.area}
                </span>
              </div>

              <div className="flex items-center justify-between text-neutral-400 text-[10px] font-mono mb-1">
                <span>{project.year}</span>
                <span className="truncate max-w-[150px]">{project.location}</span>
              </div>

              <h3 className="font-serif text-base sm:text-lg text-neutral-900 font-normal leading-snug group-hover:text-black">
                {project.title}
              </h3>
              <p className="font-serif text-xs text-neutral-600 font-light mt-1 line-clamp-2">
                {project.description}
              </p>
            </div>

            <div className="pt-2 mt-2 border-t border-neutral-200/80 flex items-center justify-between text-[11px] font-mono text-neutral-700">
              <span className="text-neutral-500">
                {currentLang === 'RU' ? 'Архитектура' : currentLang === 'KY' ? 'Архитектура' : currentLang === 'ZH' ? '设计' : 'Architecture'}
              </span>
              <span className="flex items-center gap-1 group-hover:translate-x-0.5 transition-transform text-neutral-900 font-medium">
                <span>{t.hero.details}</span>
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Metadata Bar */}
      <div className="pt-3 border-t border-neutral-200 shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <span className="font-serif text-neutral-600 font-light">
          {currentLang === 'RU'
            ? 'Все проекты разрабатываются в среде BIM (Autodesk Revit) с расчетом сейсмики до 9 баллов.'
            : currentLang === 'KY'
            ? 'Бардык долбоорлор 9 баллга чейинки сейсмикалык туруктуулукту эске алуу менен BIM форматында түзүлөт.'
            : currentLang === 'ZH'
            ? '所有项目均基于 BIM (Revit) 全专业数字模型协同设计，抗震设防烈度最高可达9度。'
            : 'Engineered with full BIM workflows complying with Eurocodes and 9-point seismic resilience.'}
        </span>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onContactClick}
            className="font-mono text-[11px] text-neutral-900 font-medium hover:underline underline-offset-2 cursor-pointer"
          >
            {t.intro.scheduleConsultation} →
          </button>
        </div>
      </div>
    </div>
  );
};
