import React, { useState } from 'react';
import { 
  Project, 
  ProjectCategory 
} from '../types';
import { PROJECTS_DATA } from '../data/projectsData';
import { 
  MapPin, 
  Activity, 
  ArrowUpRight,
  CheckCircle2,
  Atom,
  Cpu,
  Layers,
  Zap
} from 'lucide-react';

interface ProjectsPortfolioProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsPortfolio: React.FC<ProjectsPortfolioProps> = ({ 
  onSelectProject 
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'Все гиперструктуры' },
    { id: 'public', label: 'Кибер-Аркологии & R&D Хабы' },
    { id: 'residential', label: 'Вертикальные Модульные Города' },
    { id: 'commercial', label: 'Нео-Небоскребы & Скай-Сити' },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'Реализован':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      case 'Строится':
        return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40';
      case 'Проектирование':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/40';
      default:
        return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
    }
  };

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-[#030407] relative overflow-hidden border-t border-cyan-500/20">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[600px] h-[600px] bg-emerald-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 mb-3">
              <Atom className="w-4 h-4 text-cyan-400 animate-spin" />
              <span>КАТАЛОГ МЕГАСТРУКТУР 2150</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight uppercase leading-[1.08]">
              Проекты Будущего <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-200 to-emerald-400 font-bold">
                «ГРАНД Плюс»
              </span>
            </h2>
          </div>
          <p className="text-neutral-300 text-sm sm:text-base max-w-md font-light leading-relaxed font-sans">
            Синтез графеновых пространственных экзоскелетов, активной магнитной сейсмозащиты 9.5 MSK и замкнутых биосферных сред для Центральной Азии.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono tracking-wider uppercase transition-all whitespace-nowrap border cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-cyan-500 text-black border-cyan-400 font-bold shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                  : 'hud-panel text-neutral-400 hover:text-white hover:border-cyan-500/40'
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
              className="group hud-panel rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 flex flex-col cursor-pointer hover:shadow-[0_20px_50px_rgba(0,240,255,0.15)] relative"
            >
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />

              {/* Image Container */}
              <div className="relative aspect-[16/11] overflow-hidden bg-black">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080b12] via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity" />

                {/* Index Code Pill */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-[10px] font-mono tracking-widest rounded-lg bg-black/80 border border-cyan-500/30 text-cyan-300 backdrop-blur-md">
                    SYS-0{idx + 1} // HUD
                  </span>
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-[10px] font-mono tracking-wider rounded-lg border backdrop-blur-md uppercase ${getStatusBadge(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Hover Inspect Indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="w-10 h-10 rounded-xl bg-cyan-400 text-black flex items-center justify-center shadow-2xl font-bold">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-cyan-400/80 text-xs font-mono">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span className="truncate">{project.location}</span>
                    <span className="text-neutral-600">•</span>
                    <span className="text-neutral-400">{project.year}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-neutral-400 text-xs sm:text-sm line-clamp-2 leading-relaxed font-light font-sans">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Project Specs Strip */}
                <div className="pt-4 border-t border-cyan-500/15 grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-neutral-400 block tracking-wider">Масштаб</span>
                    <span className="font-semibold text-cyan-300 font-mono text-xs sm:text-sm">{project.area}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-neutral-400 block tracking-wider">Сейсмо-Щит</span>
                    <span className="font-semibold text-emerald-400 font-mono text-xs sm:text-sm flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-emerald-400" />
                      {project.seismicRating.split(' ')[0]} {project.seismicRating.split(' ')[1] || 'MSK'}
                    </span>
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-2 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-cyan-400 group-hover:text-cyan-300 border-t border-cyan-500/10">
                  <span>Инспектировать 5D BIM & Голограмму</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bureau Guarantee Note */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl sm:rounded-3xl hud-panel flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="hud-corner-tl" />
          <div className="hud-corner-br" />

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-6 h-6 text-cyan-400" />
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl font-sans">
              Каждая кибер-аркология и мегаструктура разработана бюро <strong className="text-white font-medium">«ГРАНД Плюс»</strong> с нулевым допуском ошибок, сквозной проверкой в ANSYS и подтверждением сейсмической надежности до 9.5 MSK в Главгосэкспертизе Кыргызской Республики.
            </p>
          </div>
          <a
            href="#contacts"
            className="whitespace-nowrap px-6 py-3 rounded-xl bg-cyan-400 text-black text-xs font-mono font-bold uppercase tracking-wider hover:bg-cyan-300 transition-all flex-shrink-0 shadow-[0_0_20px_rgba(0,240,255,0.3)]"
          >
            Запросить 5D BIM Спецификацию
          </a>
        </div>
      </div>
    </section>
  );
};
