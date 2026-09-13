import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  ChevronRight, 
  ChevronLeft, 
  Eye, 
  Compass, 
  Award,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { PROJECTS_DATA } from '../data/projectsData';
import { Project } from '../types';

interface HeroProps {
  onSelectProject: (project: Project) => void;
  onOpenConsultation: () => void;
  onOpenCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onSelectProject, 
  onOpenConsultation, 
  onOpenCalculator 
}) => {
  const heroProjects = PROJECTS_DATA.slice(0, 4);
  const [activeSlide, setActiveSlide] = useState(0);
  const [viewMode, setViewMode] = useState<'photo' | 'draft'>('photo');

  // Automatic slide cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroProjects.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [heroProjects.length]);

  const currentProject = heroProjects[activeSlide];

  return (
    <section className="relative min-h-[94vh] flex flex-col justify-between pt-28 sm:pt-32 pb-12 overflow-hidden bg-transparent">
      
      {/* Background Architectural Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {heroProjects.map((project, idx) => (
          <div
            key={project.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              idx === activeSlide ? 'opacity-35 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            style={{
              backgroundImage: `url(${viewMode === 'draft' ? project.blueprintImage || project.coverImage : project.coverImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: viewMode === 'draft' 
                ? 'grayscale(100%) invert(85%) contrast(140%) sepia(20%)' 
                : 'grayscale(25%) contrast(110%) brightness(85%)',
              transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 9s ease-out, filter 0.6s ease'
            }}
          />
        ))}

        {/* Quiet Luxury Gradient Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121315] via-[#121315]/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121315] via-[#121315]/75 to-transparent" />
      </div>

      {/* Main Classical Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full my-auto py-8">
        <div className="max-w-4xl space-y-7">
          
          {/* Top Classical Monogram Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-[#c5a880]/40 bg-[#18191c]/80 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]"></span>
              <span className="text-[11px] sm:text-xs uppercase font-serif tracking-[0.25em] text-[#c5a880]">
                ОсОО «ГРАНД Плюс» • С 2007 ГОДА
              </span>
            </div>

            {/* Mode Switcher: Photo vs Architectural Draft */}
            <div className="hidden sm:inline-flex items-center p-0.5 border border-[#c5a880]/30 bg-[#16171a]/80 text-[11px] font-serif tracking-wider backdrop-blur-md">
              <button
                onClick={() => setViewMode('photo')}
                className={`px-3 py-1 transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'photo' 
                    ? 'bg-[#c5a880] text-[#121315] font-medium' 
                    : 'text-[#a89f91] hover:text-[#f4efe6]'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Фотография</span>
              </button>
              <button
                onClick={() => setViewMode('draft')}
                className={`px-3 py-1 transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'draft' 
                    ? 'bg-[#c5a880] text-[#121315] font-medium' 
                    : 'text-[#a89f91] hover:text-[#f4efe6]'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Архитектурный чертеж</span>
              </button>
            </div>
          </div>

          {/* Majestic Classical Headline */}
          <div className="space-y-3">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#f5f1eb] tracking-tight leading-[1.12]">
              Вневременная архитектура. <br />
              <span className="italic font-light text-[#c5a880]">
                Классические пропорции
              </span>{' '}
              и сейсмическая надежность.
            </h1>
            
            <p className="text-[#bfb7aa] text-base sm:text-lg max-w-2xl font-light leading-relaxed pt-2">
              Проектирование частных загородных резиденций, усадеб и клубных домов по канонам золотого сечения. Натуральный травертин Сары-Таш, гранит, мрамор и расчет конструкций на землетрясение до 9 баллов.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2 font-serif">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3.5 text-sm tracking-[0.15em] font-medium text-[#121315] bg-[#c5a880] hover:bg-[#d8c09d] transition-all flex items-center gap-2.5 uppercase cursor-pointer group shadow-sm"
            >
              <span>Обсудить проект с ГАП</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onOpenCalculator}
              className="px-6 py-3.5 text-sm tracking-[0.15em] text-[#e8e4dc] hover:text-[#c5a880] border border-[#c5a880]/35 hover:border-[#c5a880]/80 bg-[#16171a]/70 transition-all flex items-center gap-2 uppercase cursor-pointer"
            >
              <span>Рассчитать смету и сроки</span>
            </button>

            <a
              href="#portfolio"
              className="px-4 py-3.5 text-sm tracking-[0.15em] text-[#a89f91] hover:text-[#c5a880] transition-colors uppercase flex items-center gap-1.5"
            >
              <span>Портфолио бюро</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* 4 Classical Key Metrics */}
          <div className="pt-6 border-t border-[#c5a880]/20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl">
            <div>
              <div className="font-serif text-2xl sm:text-3xl font-medium text-[#c5a880]">
                {COMPANY_INFO.yearsInMarket}
              </div>
              <div className="text-[11px] font-serif uppercase tracking-widest text-[#a89f91] mt-0.5">
                Лет практики в КР
              </div>
            </div>

            <div>
              <div className="font-serif text-2xl sm:text-3xl font-medium text-[#f4efe6]">
                {COMPANY_INFO.completedArea}
              </div>
              <div className="text-[11px] font-serif uppercase tracking-widest text-[#a89f91] mt-0.5">
                Спроектировано
              </div>
            </div>

            <div>
              <div className="font-serif text-2xl sm:text-3xl font-medium text-[#c5a880]">
                {COMPANY_INFO.approvedProjects}
              </div>
              <div className="text-[11px] font-serif uppercase tracking-widest text-[#a89f91] mt-0.5">
                Реализованных объектов
              </div>
            </div>

            <div>
              <div className="font-serif text-2xl sm:text-3xl font-medium text-[#f4efe6]">
                9.0 баллов
              </div>
              <div className="text-[11px] font-serif uppercase tracking-widest text-[#a89f91] mt-0.5">
                Сейсмостойкость СНиП
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Featured Classical Project Bar at Bottom */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-4">
        <div className="border border-[#c5a880]/25 bg-[#16171a]/90 backdrop-blur-md p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 border border-[#c5a880]/40 overflow-hidden relative group">
              <img 
                src={currentProject.coverImage} 
                alt={currentProject.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-serif uppercase tracking-[0.2em] text-[#c5a880]">
                  {currentProject.categoryLabel} • {currentProject.year}
                </span>
                <span className="w-1 h-1 rounded-full bg-[#c5a880]" />
                <span className="text-[10px] font-serif tracking-wider text-[#9f9687]">
                  {currentProject.area}
                </span>
              </div>
              <h4 className="font-serif text-base sm:text-lg text-[#f4efe6] font-medium mt-0.5">
                {currentProject.title}
              </h4>
              <p className="text-xs text-[#a89f91] line-clamp-1 max-w-md mt-0.5 font-light">
                {currentProject.shortDesc}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end font-serif">
            {/* Carousel navigation buttons */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setActiveSlide((prev) => (prev - 1 + heroProjects.length) % heroProjects.length)}
                className="p-2 border border-[#c5a880]/30 hover:border-[#c5a880] text-[#cfc8bd] hover:text-[#c5a880] transition-colors"
                aria-label="Предыдущий проект"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="px-2 text-xs text-[#a89f91]">
                0{activeSlide + 1} / 0{heroProjects.length}
              </div>
              <button
                onClick={() => setActiveSlide((prev) => (prev + 1) % heroProjects.length)}
                className="p-2 border border-[#c5a880]/30 hover:border-[#c5a880] text-[#cfc8bd] hover:text-[#c5a880] transition-colors"
                aria-label="Следующий проект"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={() => onSelectProject(currentProject)}
              className="px-4 py-2 text-xs tracking-wider text-[#121315] bg-[#c5a880] hover:bg-[#d8c09d] transition-all flex items-center gap-1.5 uppercase font-medium"
            >
              <span>Детали объекта</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};
