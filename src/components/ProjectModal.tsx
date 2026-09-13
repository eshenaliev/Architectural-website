import React, { useState } from 'react';
import { Project } from '../types';
import { 
  X, 
  MapPin, 
  Calendar, 
  Layers, 
  Check, 
  Download,
  Image as ImageIcon,
  Compass,
  ShieldCheck
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl bg-[#121315] border border-[#c5a880]/40 overflow-hidden shadow-2xl my-8 text-[#d5cfc5] font-serif"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="classic-tick-tl" />
        <div className="classic-tick-br" />

        {/* Top Control Bar */}
        <div className="sticky top-0 z-20 bg-[#121315]/95 backdrop-blur-md border-b border-[#c5a880]/20 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase bg-[#16171a] text-[#c5a880] px-3 py-1 border border-[#c5a880]/30 tracking-widest">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-[#8c8477] hidden sm:inline">
              ШИФР: ГП-{project.id.toUpperCase().slice(0, 6)} • СНиП КР
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadSheet}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 bg-[#16171a] border border-[#c5a880]/30 hover:border-[#c5a880] text-xs text-[#c5a880] transition-colors cursor-pointer"
              title="Скачать паспорт объекта"
            >
              <Download className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Паспорт объекта</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 border border-[#c5a880]/30 text-[#a89f91] hover:text-[#f4efe6] hover:border-[#c5a880] transition-colors cursor-pointer"
              aria-label="Закрыть"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {downloadNotice && (
          <div className="bg-[#18191d] border-b border-[#c5a880]/30 px-6 py-2 text-xs text-[#c5a880] text-center">
            ✓ Архитектурный паспорт классического объекта сформирован для ознакомления
          </div>
        )}

        {/* Modal Scrollable Content */}
        <div className="max-h-[80vh] overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Main Visual Showcase with View Modes */}
          <div className="space-y-4">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#16171a] border border-[#c5a880]/30">
              {viewMode === 'render' ? (
                <img
                  src={project.galleryImages[activeImageIndex] || project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full relative flex items-center justify-center bg-[#0d0e10]">
                  <img
                    src={project.blueprintImage || 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80'}
                    alt="Архитектурный чертеж фасада и ордера"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute top-4 left-4 bg-[#121315]/90 px-3 py-1.5 text-xs text-[#c5a880] border border-[#c5a880]/40">
                    Чертеж ордерного портика и деталировка карниза (М 1:20)
                  </div>
                </div>
              )}

              {/* View Switcher Overlay (Render vs Blueprint) */}
              <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 bg-[#121315]/90 backdrop-blur-md p-1.5 border border-[#c5a880]/30">
                <button
                  onClick={() => setViewMode('render')}
                  className={`px-3 py-1.5 text-xs transition-all flex items-center gap-1.5 cursor-pointer ${
                    viewMode === 'render'
                      ? 'bg-[#c5a880] text-[#121315] font-medium'
                      : 'text-[#a89f91] hover:text-[#f4efe6]'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>Фотография экстерьера</span>
                </button>
                <button
                  onClick={() => setViewMode('blueprint')}
                  className={`px-3 py-1.5 text-xs transition-all flex items-center gap-1.5 cursor-pointer ${
                    viewMode === 'blueprint'
                      ? 'bg-[#c5a880] text-[#121315] font-medium'
                      : 'text-[#a89f91] hover:text-[#f4efe6]'
                  }`}
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Архитектурный чертеж</span>
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
                    className={`relative w-24 h-16 overflow-hidden flex-shrink-0 border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx
                        ? 'border-[#c5a880] scale-105 shadow-md'
                        : 'border-[#c5a880]/20 opacity-60 hover:opacity-100'
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
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#a89f91]">
              <span className="flex items-center gap-1 text-[#c5a880]">
                <MapPin className="w-3.5 h-3.5" />
                {project.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#c5a880]" />
                Год реализации: {project.year}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-[#f4efe6]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c5a880]" />
                Сейсмостойкость: {project.seismicRating}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-serif text-[#f4efe6] font-normal">
              {project.title}
            </h1>
          </div>

          {/* Technical Specifications Bento Grid */}
          <div className="classic-frame p-5 relative">
            <h3 className="text-xs uppercase tracking-widest text-[#c5a880] mb-4 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Технико-экономические показатели (ТЭП)</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {project.metrics.map((metric, i) => (
                <div key={i} className="p-3 bg-[#16171a] border border-[#c5a880]/20">
                  <span className="text-[11px] text-[#8c8477] block mb-0.5 font-sans">
                    {metric.label}
                  </span>
                  <span className="text-sm sm:text-base font-serif font-medium text-[#f4efe6]">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Architectural Description */}
          <div className="space-y-3">
            <h3 className="text-lg font-serif text-[#f4efe6] font-normal">
              Архитектурно-художественная концепция
            </h3>
            <p className="text-[#a89f91] text-sm sm:text-base leading-relaxed font-sans font-light">
              {project.fullDesc}
            </p>
          </div>

          {/* Key Highlights */}
          <div className="space-y-3">
            <h4 className="text-sm uppercase tracking-wider text-[#c5a880]">
              Особенности ордера, материалов и конструкций:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.highlights.map((h, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#d5cfc5] p-3 bg-[#16171a] border border-[#c5a880]/20 font-sans font-light">
                  <Check className="w-4 h-4 text-[#c5a880] flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bureau Role & Client */}
          <div className="p-4 bg-[#16171a] border border-[#c5a880]/20 text-xs space-y-2 text-[#a89f91] font-sans">
            <div>
              <span className="text-[#8c8477]">Заказчик / Владелец: </span>
              <strong className="text-[#f4efe6] font-normal">{project.client}</strong>
            </div>
            <div>
              <span className="text-[#8c8477]">Генеральный проектировщик: </span>
              <strong className="text-[#c5a880] font-normal">{project.architectRole}</strong>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="bg-[#121315] border-t border-[#c5a880]/20 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#a89f91] text-center sm:text-left font-sans">
            Желаете заказать проектирование классической резиденции в похожем стиле?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 bg-[#18191c] border border-[#c5a880]/20 text-xs text-[#a89f91] hover:text-[#f4efe6] transition-colors cursor-pointer"
            >
              Закрыть
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation(project.title);
              }}
              className="w-1/2 sm:w-auto px-5 py-2.5 bg-[#c5a880] hover:bg-[#d8c09d] text-[#121315] font-medium text-xs uppercase tracking-wider transition-all shadow-sm cursor-pointer"
            >
              Обсудить проект
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
