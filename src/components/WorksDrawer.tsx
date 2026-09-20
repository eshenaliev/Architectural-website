import React, { useState } from 'react';
import { X, ArrowRight, MapPin } from 'lucide-react';
import { ProjectItem } from '../types';
import { FEATURED_PROJECTS } from '../data/projects';
import { Language, TRANSLATIONS } from '../data/translations';

interface WorksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
  currentLang?: Language;
}

export const WorksDrawer: React.FC<WorksDrawerProps> = ({
  isOpen,
  onClose,
  onSelectProject,
  currentLang = 'RU',
}) => {
  const [filter, setFilter] = useState<string>('All');

  if (!isOpen) return null;

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.RU;

  const categories = currentLang === 'RU'
    ? ['Все', 'Проектирование', 'Мебель', 'Матрасы', 'Массажные кресла']
    : currentLang === 'KY'
    ? ['Баары', 'Долбоорлоо', 'Эмерек', 'Матрастар', 'Массаждык креслолор']
    : currentLang === 'ZH'
    ? ['全部', '建筑规划设计', '高端定制家具', '健康床垫', '智能按摩椅']
    : ['All', 'Architecture Design', 'Bespoke Furniture', 'Mattresses', 'Massage Chairs'];

  const allTag = categories[0];

  const filtered = filter === 'All' || filter === allTag
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter((p) => {
        if (filter === 'Проектирование' || filter === 'Долбоорлоо' || filter === '建筑规划设计' || filter === 'Architecture Design') {
          return p.category === 'Houses/Villas' || p.category === 'Office buildings';
        }
        return p.category.toLowerCase().includes(filter.toLowerCase());
      });

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white text-neutral-900 overflow-hidden">
      {/* Top Header */}
      <div className="w-full px-6 sm:px-12 lg:px-20 py-5 flex items-center justify-between border-b border-neutral-200">
        <div>
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 block">
            {t.header.subline1} {t.header.subline2}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-neutral-900 font-normal tracking-tight">
            {t.drawer.archiveTitle}
          </h2>
        </div>

        <button
          onClick={onClose}
          className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-neutral-600 hover:text-black transition-colors cursor-pointer"
        >
          <span>{t.drawer.close}</span>
          <X className="w-5 h-5 stroke-[1.5]" />
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="px-6 sm:px-12 lg:px-20 py-4 border-b border-neutral-100 flex items-center gap-6 text-xs sm:text-sm font-sans overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`pb-1 transition-colors cursor-pointer whitespace-nowrap ${
              filter === cat || (filter === 'All' && cat === allTag)
                ? 'text-black font-medium border-b-2 border-black'
                : 'text-neutral-500 hover:text-black'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="flex-1 overflow-y-auto px-6 sm:px-12 lg:px-20 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                onSelectProject(project);
                onClose();
              }}
              className="group cursor-pointer flex flex-col justify-between border border-neutral-200/80 hover:border-neutral-900 transition-colors p-4 bg-neutral-50/50"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-neutral-100 mb-4 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 bg-black/70 text-white text-[10px] font-mono tracking-wider uppercase">
                    {project.category}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-1">
                  <span>{project.year}</span>
                  <span>{project.area}</span>
                </div>

                <h3 className="font-serif text-lg text-neutral-900 font-normal group-hover:text-black mb-1">
                  {project.title}
                </h3>

                <p className="text-xs text-neutral-500 font-sans flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-neutral-400" />
                  <span>{project.location}</span>
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-neutral-200/60 flex items-center justify-between text-xs text-neutral-800 font-sans">
                <span>{t.hero.details}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
