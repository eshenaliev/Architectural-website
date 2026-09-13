import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  ChevronRight, 
  ChevronLeft, 
  Eye, 
  Grid3X3, 
  Cpu, 
  Compass, 
  Radio,
  Zap,
  Atom,
  Layers,
  Activity
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
  const [viewMode, setViewMode] = useState<'render' | 'mesh' | 'stress'>('render');

  // Automatic slide cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroProjects.length);
    }, 8500);
    return () => clearInterval(timer);
  }, [heroProjects.length]);

  const currentProject = heroProjects[activeSlide];

  return (
    <section className="relative min-h-[96vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-transparent">
      
      {/* Background Holographic Layer for Active Project */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {heroProjects.map((project, idx) => (
          <div
            key={project.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              idx === activeSlide ? 'opacity-30 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            style={{
              backgroundImage: `url(${viewMode === 'mesh' ? project.blueprintImage || project.coverImage : project.coverImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: viewMode === 'mesh' 
                ? 'grayscale(100%) invert(90%) contrast(160%) hue-rotate(180deg)' 
                : viewMode === 'stress'
                ? 'hue-rotate(90deg) contrast(140%) saturate(180%)'
                : 'grayscale(20%) contrast(120%) brightness(85%)',
              transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 8s ease-out, filter 0.6s ease'
            }}
          />
        ))}

        {/* Ambient Sci-Fi Scanning HUD Laser Line */}
        <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-laser-scan pointer-events-none" />

        {/* Deep contrast vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030407] via-[#030407]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030407] via-[#030407]/70 to-transparent" />
      </div>

      {/* Main Studio Display & Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full my-auto py-8">
        <div className="max-w-4xl space-y-6">
          
          {/* Top HUD Telemetry Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 backdrop-blur-xl">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span className="text-[10px] sm:text-xs uppercase font-mono tracking-[0.22em] text-cyan-300">
                ОсОО «ГРАНД Плюс» // NEO-FUTURISTIC ARCHITECTURE 2150
              </span>
            </div>

            {/* Interactive Mode Toggle: Render vs Blueprint Mesh vs Stress */}
            <div className="hidden sm:inline-flex items-center p-0.5 rounded-xl bg-black/60 border border-cyan-500/30 text-[10px] font-mono tracking-wider backdrop-blur-md">
              <button
                onClick={() => setViewMode('render')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'render' 
                    ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]' 
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Eye className="w-3 h-3" />
                <span>Рендер</span>
              </button>
              <button
                onClick={() => setViewMode('mesh')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'mesh' 
                    ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]' 
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Grid3X3 className="w-3 h-3" />
                <span>3D Сетка</span>
              </button>
              <button
                onClick={() => setViewMode('stress')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'stress' 
                    ? 'bg-emerald-400 text-black font-bold shadow-[0_0_15px_rgba(0,255,136,0.4)]' 
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Activity className="w-3 h-3" />
                <span>Сейсмо-Анализ</span>
              </button>
            </div>
          </div>

          {/* Main Futuristic Hero Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-display font-black tracking-tight text-white leading-[1.02] uppercase">
            Архитектура <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-200 to-emerald-400">
              Пост-Урбанизма
            </span>
          </h1>

          {/* Subtitle: High-tech Arcology & Quantum Seismic Engineering */}
          <p className="text-sm sm:text-base lg:text-lg text-neutral-300 max-w-2xl font-light leading-relaxed tracking-wide font-sans">
            Проектирование автономных кибер-аркологий, мегаструктур и вертикальных городов нового столетия. Сверхпрочные графеновые экзоскелеты, активная магнитная сейсмозащита 9.5+ MSK и сквозное нейро-проектирование 5D BIM.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3 font-mono">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs tracking-[0.16em] uppercase transition-all shadow-[0_0_35px_rgba(0,240,255,0.35)] flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>Инициировать гиперпроект</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenCalculator}
              className="px-6 py-4 rounded-xl hud-panel text-white font-mono text-xs tracking-[0.14em] uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Калькулятор сметы & квант-BIM</span>
            </button>

            <a
              href="#manifesto"
              className="px-4 py-3 text-xs uppercase tracking-[0.2em] text-cyan-400/80 hover:text-cyan-300 flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Манифест 2150</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Technical Badges */}
          <div className="pt-6 flex flex-wrap items-center gap-y-2 gap-x-7 text-xs text-neutral-300 border-t border-cyan-500/20 font-mono">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Лицензия Госстроя I кат. без ограничений высотности</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>Квантовая сейсмозащита 9.5 MSK</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Нейро-BIM 5D • AI-симуляция аэродинамики</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Floating Telemetry Bar & Project Showcase */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-6">
        <div className="hud-panel rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 shadow-2xl">
          <div className="hud-corner-tl" />
          <div className="hud-corner-br" />

          {/* Key Metric Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-cyan-500/15">
            <div className="pt-2 sm:pt-0 sm:pr-4">
              <div className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                {COMPANY_INFO.yearsInMarket}
              </div>
              <div className="text-[10px] font-mono text-cyan-400/70 uppercase tracking-wider">
                Лет в авангарде
              </div>
            </div>

            <div className="pt-2 sm:pt-0 sm:px-4">
              <div className="text-2xl sm:text-3xl font-display font-bold text-cyan-300 tracking-tight">
                {COMPANY_INFO.completedArea}
              </div>
              <div className="text-[10px] font-mono text-cyan-400/70 uppercase tracking-wider">
                Мегаструктур
              </div>
            </div>

            <div className="pt-2 sm:pt-0 sm:px-4">
              <div className="text-2xl sm:text-3xl font-display font-bold text-emerald-400 tracking-tight">
                9.5 MSK
              </div>
              <div className="text-[10px] font-mono text-emerald-400/80 uppercase tracking-wider">
                Квант-Сейсмозащита
              </div>
            </div>

            <div className="pt-2 sm:pt-0 sm:pl-4">
              <div className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                100%
              </div>
              <div className="text-[10px] font-mono text-cyan-400/70 uppercase tracking-wider">
                Главгосэкспертиза КР
              </div>
            </div>
          </div>

          {/* Active Flagship Project Showcase Card */}
          <div className="flex items-center justify-between lg:justify-end gap-5 border-t lg:border-t-0 lg:border-l border-cyan-500/20 pt-4 lg:pt-0 lg:pl-6">
            <div 
              onClick={() => onSelectProject(currentProject)}
              className="cursor-pointer group flex items-center gap-3.5 text-left"
            >
              <div className="w-14 h-14 rounded-xl overflow-hidden relative border border-cyan-500/30 flex-shrink-0">
                <img 
                  src={currentProject.coverImage} 
                  alt={currentProject.title}
                  className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-cyan-950/30 group-hover:bg-transparent" />
              </div>
              <div>
                <div className="text-[9px] font-mono uppercase text-cyan-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>{currentProject.categoryLabel} • {currentProject.year}</span>
                  <span className="text-neutral-400">[{currentProject.metrics[0].value}]</span>
                </div>
                <div className="text-xs sm:text-sm font-display font-semibold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                  {currentProject.title}
                </div>
                <div className="text-[10px] font-mono text-neutral-400">
                  {currentProject.location}
                </div>
              </div>
            </div>

            {/* Carousel Buttons */}
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <button
                onClick={() => setActiveSlide((prev) => (prev - 1 + heroProjects.length) % heroProjects.length)}
                className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-cyan-500/20 text-neutral-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/30 transition-all cursor-pointer"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveSlide((prev) => (prev + 1) % heroProjects.length)}
                className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-cyan-500/20 text-neutral-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/30 transition-all cursor-pointer"
                aria-label="Next project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
