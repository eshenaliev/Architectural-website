import React from 'react';
import { X, MapPin, User, Calendar, Maximize2, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../types';
import { Language, TRANSLATIONS } from '../data/translations';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquire: (project: ProjectItem) => void;
  currentLang?: Language;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInquire,
  currentLang = 'RU',
}) => {
  if (!project) return null;

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.RU;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6 md:p-10">
      <div className="bg-white text-neutral-900 w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 hover:bg-white text-black flex items-center justify-center shadow-md transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 stroke-[1.5]" />
        </button>

        {/* Project Image Banner */}
        <div className="relative h-64 sm:h-96 w-full bg-neutral-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          <div className="absolute bottom-6 left-6 sm:left-10 text-white">
            <span className="text-xs uppercase tracking-widest text-neutral-300 font-mono block mb-1">
              {project.category}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Content Details */}
        <div className="p-6 sm:p-10 space-y-8">
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-neutral-200 text-xs sm:text-sm font-sans">
            <div>
              <span className="text-neutral-400 block text-[11px] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" /> {t.modal.architect}
              </span>
              <span className="font-medium text-neutral-800">{project.architect}</span>
            </div>
            <div>
              <span className="text-neutral-400 block text-[11px] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> {t.modal.location}
              </span>
              <span className="font-medium text-neutral-800">{project.location}</span>
            </div>
            <div>
              <span className="text-neutral-400 block text-[11px] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> {t.modal.year}
              </span>
              <span className="font-medium text-neutral-800">{project.year}</span>
            </div>
            <div>
              <span className="text-neutral-400 block text-[11px] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5" /> {t.modal.area}
              </span>
              <span className="font-medium text-neutral-800">{project.area}</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <p className="font-serif text-base sm:text-lg text-neutral-800 leading-relaxed font-light">
              {project.description}
            </p>
          </div>

          {/* Key Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase tracking-widest text-neutral-500 font-sans">
                {t.modal.keyHighlights}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-sm text-neutral-700 font-light">
                    <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Modal Action Footers */}
          <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => onInquire(project)}
              className="w-full sm:w-auto px-8 py-3 bg-neutral-900 hover:bg-black text-white text-xs uppercase tracking-widest transition-colors cursor-pointer"
            >
              {t.modal.inquireProject}
            </button>
            <button
              onClick={onClose}
              className="text-xs text-neutral-500 hover:text-black uppercase tracking-wider transition-colors cursor-pointer"
            >
              {t.drawer.close}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
