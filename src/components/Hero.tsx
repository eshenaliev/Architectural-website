import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { ProjectItem } from '../types';
import { FEATURED_PROJECTS } from '../data/projects';
import { Language, TRANSLATIONS } from '../data/translations';

interface HeroProps {
  activeProject?: ProjectItem;
  projects?: ProjectItem[];
  onOpenDetails: (project: ProjectItem) => void;
  currentLang?: Language;
}

export const Hero: React.FC<HeroProps> = ({
  activeProject,
  projects = FEATURED_PROJECTS,
  onOpenDetails,
  currentLang = 'RU',
}) => {
  const displayProjects = projects && projects.length > 0 ? projects : [activeProject || FEATURED_PROJECTS[0]];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.RU;

  // Auto-advance banner every 6 seconds if user is not hovering
  useEffect(() => {
    if (isPaused || displayProjects.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayProjects.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, displayProjects.length]);

  const currentProject = displayProjects[currentIndex] || activeProject || FEATURED_PROJECTS[0];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + displayProjects.length) % displayProjects.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % displayProjects.length);
  };

  const handleSelectDot = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(idx);
  };

  return (
    <section
      onClick={() => onOpenDetails(currentProject)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      title="Нажмите, чтобы открыть подробности проекта"
      className="group relative w-full h-[220px] sm:h-[260px] lg:h-[300px] bg-neutral-900 overflow-hidden select-none shrink-0 cursor-pointer"
    >
      {/* Background Architectural Photos with smooth cross-fade */}
      {displayProjects.map((proj, idx) => (
        <div
          key={proj.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            idx === currentIndex ? 'opacity-100 z-1' : 'opacity-0 pointer-events-none'
          }`}
        >
          <img
            src={proj.image}
            alt={`${proj.title} — ${proj.category}`}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Subtle dark gradient for high-contrast legibility */}
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        </div>
      ))}

      {/* Caption Overlay matching image.png */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        <div className="max-w-xl">
          {/* Category Tag with subtle counter */}
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-mono text-white/75 uppercase tracking-widest">
              {String(currentIndex + 1).padStart(2, '0')} / {String(displayProjects.length).padStart(2, '0')}
            </span>
            <span className="text-white/40 font-mono text-xs">•</span>
            <span className="font-sans text-[11px] text-white/80 uppercase tracking-widest font-medium">
              {currentProject.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal tracking-tight leading-tight drop-shadow-sm">
            {currentProject.title}
          </h1>

          {/* Subtitle / Location */}
          <p className="font-serif text-sm sm:text-base lg:text-lg text-white/90 font-light tracking-normal mt-0.5 drop-shadow-sm">
            {currentProject.heroSubtitle || currentProject.location}
          </p>

          {/* Interactive Actions */}
          <div className="mt-3 sm:mt-3.5 flex items-center gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenDetails(currentProject);
              }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-white/90 text-white text-xs font-sans tracking-wide bg-black/25 hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-[2px] cursor-pointer shadow-sm"
            >
              <span>{t.hero.details}</span>
              <span className="text-[11px] leading-none">⌂</span>
            </button>

            <span className="text-[11px] font-sans text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
              <Maximize2 className="w-3 h-3" />
              <span>{t.hero.clickToExplore}</span>
            </span>
          </div>
        </div>

        {/* Carousel Navigation & Indicators */}
        <div className="hidden sm:flex flex-col items-end gap-3 z-20">
          {/* Arrows */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrev}
              aria-label="Previous project"
              className="w-8 h-8 rounded-full border border-white/40 bg-black/30 hover:bg-white hover:text-black text-white flex items-center justify-center backdrop-blur-sm transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next project"
              className="w-8 h-8 rounded-full border border-white/40 bg-black/30 hover:bg-white hover:text-black text-white flex items-center justify-center backdrop-blur-sm transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Slide Indicator Bars */}
          <div className="flex items-center gap-1.5">
            {displayProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => handleSelectDot(idx, e)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1 transition-all duration-300 rounded-full cursor-pointer ${
                  idx === currentIndex ? 'w-6 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile-only Bottom Slide Dots */}
      <div className="sm:hidden absolute bottom-3 right-6 z-20 flex items-center gap-1.5">
        {displayProjects.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => handleSelectDot(idx, e)}
            className={`h-1 transition-all duration-300 rounded-full ${
              idx === currentIndex ? 'w-5 bg-white' : 'w-2 bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
