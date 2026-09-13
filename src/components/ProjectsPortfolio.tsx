import React, { useState } from 'react';
import { 
  Project, 
  ProjectCategory 
} from '../types';
import { PROJECTS_DATA } from '../data/projectsData';
import { 
  MapPin, 
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Compass
} from 'lucide-react';

interface ProjectsPortfolioProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsPortfolio: React.FC<ProjectsPortfolioProps> = ({ 
  onSelectProject 
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'Все объекты' },
    { id: 'residential', label: 'Загородные усадьбы и виллы' },
    { id: 'public', label: 'Неоклассические ансамбли' },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'Реализован':
        return 'bg-[#c5a880]/15 text-[#e5cfb1] border-[#c5a880]/40';
      case 'Строится':
        return 'bg-[#9a7b56]/15 text-[#d8be9d] border-[#9a7b56]/40';
      case 'Проектирование':
        return 'bg-[#6b6255]/20 text-[#c5bcaf] border-[#6b6255]/40';
      default:
        return 'bg-neutral-800 text-neutral-300 border-neutral-700';
    }
  };

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-[#121315] relative overflow-hidden border-t border-[#c5a880]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-[0.25em] text-[#c5a880] mb-3">
              <Compass className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>ПОРТФОЛИО АРХИТЕКТУРНОГО БЮРО</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#f4efe6] tracking-tight leading-[1.1]">
              Избранные объекты <br />
              <span className="italic text-[#c5a880]">
                «ГРАНД Плюс»
              </span>
            </h2>
          </div>
          <p className="text-[#a89f91] text-sm sm:text-base max-w-md font-light leading-relaxed font-sans">
            Синтез классических ордеров, пропорций золотого сечения, натурального камня Сары-Таш и высшей категории сейсмостойкости до 9 баллов.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar font-serif">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 text-xs tracking-widest uppercase transition-all whitespace-nowrap border cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#c5a880] text-[#121315] border-[#c5a880] font-medium shadow-sm'
                  : 'border-[#c5a880]/25 text-[#a89f91] hover:text-[#f4efe6] hover:border-[#c5a880]/50 bg-[#16171a]'
              }`}
            >
              {cat.label}
              {cat.id === 'all' && (
                <span className="ml-2 text-[10px] opacity-80">
                  [{PROJECTS_DATA.length}]
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group classic-frame overflow-hidden transition-all duration-400 flex flex-col cursor-pointer hover:border-[#c5a880]/60 relative"
            >
              <div className="classic-tick-tl" />
              <div className="classic-tick-br" />

              {/* Image Container */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#16171a]">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121315] via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />

                {/* Index Code */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 text-[10px] font-serif tracking-widest bg-[#121315]/85 border border-[#c5a880]/30 text-[#c5a880] backdrop-blur-md">
                    № 0{idx + 1}
                  </span>
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-2.5 py-1 text-[10px] font-serif tracking-wider border backdrop-blur-md uppercase ${getStatusBadge(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Hover Inspect Indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="w-9 h-9 bg-[#c5a880] text-[#121315] flex items-center justify-center font-bold shadow-md">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-[#c5a880] text-xs font-serif">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="truncate">{project.location}</span>
                    <span className="text-[#6b6357]">•</span>
                    <span className="text-[#9e968a]">{project.year}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-serif font-medium text-[#f4efe6] group-hover:text-[#c5a880] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-[#a89f91] text-xs sm:text-sm line-clamp-2 leading-relaxed font-light font-sans">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Project Specs Strip */}
                <div className="pt-4 border-t border-[#c5a880]/15 grid grid-cols-2 gap-3 text-xs font-serif">
                  <div>
                    <span className="text-[10px] uppercase text-[#8c8477] block tracking-wider">Масштаб</span>
                    <span className="text-[#f4efe6] text-xs sm:text-sm font-medium">{project.area}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#8c8477] block tracking-wider">Сейсмостойкость</span>
                    <span className="text-[#c5a880] text-xs sm:text-sm font-medium flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      9.0 баллов
                    </span>
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-2 flex items-center justify-between text-xs font-serif uppercase tracking-wider text-[#c5a880] group-hover:text-[#d8c09d] border-t border-[#c5a880]/10">
                  <span>Ознакомиться с проектом</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bureau Guarantee Note */}
        <div className="mt-16 p-6 sm:p-8 classic-frame flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="classic-tick-tl" />
          <div className="classic-tick-br" />

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#c5a880]/10 border border-[#c5a880]/30 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-6 h-6 text-[#c5a880]" />
            </div>
            <p className="text-xs sm:text-sm text-[#d5cfc5] leading-relaxed max-w-2xl font-sans font-light">
              Каждый проект бюро <strong className="text-[#f4efe6] font-normal">«ГРАНД Плюс»</strong> разрабатывается с полным комплектом рабочей документации (АР, КР, ИОС), детальной спецификацией натурального камня и расчетом сейсмостойкости 9 баллов в Государственной экспертизе Госстроя Кыргызской Республики.
            </p>
          </div>
          <a
            href="#contacts"
            className="whitespace-nowrap px-6 py-3.5 bg-[#c5a880] text-[#121315] text-xs font-serif font-medium uppercase tracking-[0.15em] hover:bg-[#d8c09d] transition-all flex-shrink-0"
          >
            Заказать индивидуальный проект
          </a>
        </div>
      </div>
    </section>
  );
};
