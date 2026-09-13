import React, { useState } from 'react';
import { Project } from '../types';
import { 
  X, 
  MapPin, 
  ShieldCheck, 
  Calendar, 
  Layers, 
  Check, 
  Download,
  Image as ImageIcon,
  Compass,
  Atom,
  Cpu,
  Zap,
  Radio
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenConsultation: (projectTitle?: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ 
  project, 
  onClose,
  onOpenConsultation 
}) => {
  if (!project) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'render' | 'blueprint'>('render');
  const [downloadNotice, setDownloadNotice] = useState(false);

  const handleDownloadSheet = () => {
    setDownloadNotice(true);
    setTimeout(() => setDownloadNotice(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl bg-[#05070d] border border-cyan-500/30 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.15)] my-8 text-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="hud-corner-tl" />
        <div className="hud-corner-br" />

        {/* Top Control Bar */}
        <div className="sticky top-0 z-20 bg-[#05070d]/95 backdrop-blur-md border-b border-cyan-500/20 px-6 py-4 flex items-center justify-between font-mono">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase bg-cyan-950/60 text-cyan-300 px-3 py-1 rounded-lg border border-cyan-500/40">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-neutral-400 hidden sm:inline">
              SYS-ID: GP-{project.id.toUpperCase().slice(0, 6)} // HUD
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadSheet}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-black/60 border border-cyan-500/30 hover:border-cyan-400 text-xs text-cyan-300 transition-colors cursor-pointer"
              title="Экспорт спецификации объекта"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>5D BIM Паспорт</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-black/60 border border-cyan-500/30 text-neutral-400 hover:text-cyan-400 hover:border-cyan-400 transition-colors cursor-pointer"
              aria-label="Закрыть"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {downloadNotice && (
          <div className="bg-cyan-950/50 border-b border-cyan-500/30 px-6 py-2 text-xs text-cyan-300 font-mono text-center">
            ✓ 5D BIM Спецификация мегаструктуры сформирована (LOD 500 / СНиП КР)
          </div>
        )}

        {/* Modal Scrollable Content */}
        <div className="max-h-[80vh] overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Main Visual Showcase with View Modes */}
          <div className="space-y-4">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black border border-cyan-500/25">
              {viewMode === 'render' ? (
                <img
                  src={project.galleryImages[activeImageIndex] || project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full relative flex items-center justify-center bg-[#02070d] cyber-grid">
                  <img
                    src={project.blueprintImage || 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80'}
                    alt="Схема и структурный каркас"
                    className="w-full h-full object-cover opacity-75"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-mono text-cyan-300 border border-cyan-500/40">
                    Топологическая схема графенового экзоскелета (LOD 500)
                  </div>
                </div>
              )}

              {/* View Switcher Overlay (Render vs Blueprint) */}
              <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 bg-black/85 backdrop-blur-md p-1.5 rounded-xl border border-cyan-500/30 font-mono">
                <button
                  onClick={() => setViewMode('render')}
                  className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                    viewMode === 'render'
                      ? 'bg-cyan-400 text-black font-bold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>8K Голограмма</span>
                </button>
                <button
                  onClick={() => setViewMode('blueprint')}
                  className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                    viewMode === 'blueprint'
                      ? 'bg-cyan-400 text-black font-bold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Структурный каркас / Диагрид</span>
                </button>
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {viewMode === 'render' && project.galleryImages.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {project.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-24 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx
                        ? 'border-cyan-400 scale-105 shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                        : 'border-cyan-500/20 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Ракурс ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Title & Key Meta */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1 text-cyan-400">
                <MapPin className="w-3.5 h-3.5" />
                {project.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                Горизонт: {project.year}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-emerald-400">
                <Zap className="w-3.5 h-3.5" />
                Сейсмозащита: {project.seismicRating}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight uppercase">
              {project.title}
            </h1>
          </div>

          {/* Technical Specifications Bento Grid */}
          <div className="hud-panel rounded-2xl p-5 relative">
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Технико-экономические показатели (ТЭП 2150)</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono">
              {project.metrics.map((metric, i) => (
                <div key={i} className="p-3 bg-black/60 border border-cyan-500/20 rounded-xl">
                  <span className="text-[11px] text-neutral-400 block mb-0.5">
                    {metric.label}
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Architectural Description */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-bold text-white uppercase">
              Архитектурно-пространственная концепция
            </h3>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-sans font-light">
              {project.fullDesc}
            </p>
          </div>

          {/* Key Highlights */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 font-mono">
              Инновации каркаса и систем жизнеобеспечения:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.highlights.map((h, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200 hud-panel p-3 rounded-xl border border-cyan-500/20 font-sans">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bureau Role & Client */}
          <div className="p-4 rounded-xl bg-black/60 border border-cyan-500/20 text-xs font-mono space-y-2 text-neutral-400">
            <div>
              <span className="text-neutral-500">Заказчик / Инициатор: </span>
              <strong className="text-neutral-200">{project.client}</strong>
            </div>
            <div>
              <span className="text-neutral-500">Генеральный проектировщик: </span>
              <strong className="text-cyan-300">{project.architectRole}</strong>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="bg-black/90 border-t border-cyan-500/20 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
          <div className="text-xs text-neutral-400 text-center sm:text-left">
            Требуется разработка объекта аналогичного класса сложности?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl bg-neutral-900 text-xs text-neutral-300 hover:text-white transition-colors cursor-pointer"
            >
              Закрыть
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation(project.title);
              }}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] cursor-pointer"
            >
              Инициировать проект
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
