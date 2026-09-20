import React from 'react';
import { ProjectItem } from '../types';

interface ProjectCarouselBarProps {
  projects: ProjectItem[];
  activeIndex: number;
  onSelectIndex: (index: number) => void;
  onOpenMore: () => void;
}

export const ProjectCarouselBar: React.FC<ProjectCarouselBarProps> = ({
  projects,
  activeIndex,
  onSelectIndex,
  onOpenMore,
}) => {
  return (
    <div className="w-full bg-white border-b border-neutral-100 shrink-0">
      <div className="max-w-5xl px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2.5 md:gap-5">
          {/* Project Tabs (4 Items) - tighter spacing */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3.5 flex-1">
            {projects.map((project, idx) => {
              const isActive = idx === activeIndex;

              return (
                <button
                  key={project.id}
                  onClick={() => onSelectIndex(idx)}
                  className="text-left group cursor-pointer focus:outline-none transition-all flex flex-col justify-end"
                >
                  {/* Category */}
                  <span className="text-[9.5px] sm:text-[10.5px] text-neutral-500 font-sans tracking-wide block transition-colors group-hover:text-neutral-800">
                    {project.category}
                  </span>

                  {/* Title */}
                  <span
                    className={`text-[11.5px] sm:text-xs font-sans mt-0.5 truncate block transition-colors ${
                      isActive
                        ? 'text-neutral-900 font-medium'
                        : 'text-neutral-700 font-normal group-hover:text-black'
                    }`}
                  >
                    {project.title}
                  </span>

                  {/* Bottom Indicator Bar */}
                  <div className="w-full mt-1 sm:mt-1.5">
                    {isActive ? (
                      <div className="h-[2px] bg-black w-full" />
                    ) : (
                      <div className="h-[1px] bg-neutral-300 w-full group-hover:bg-neutral-400 transition-colors" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Button: "More —" */}
          <div className="shrink-0 flex items-center">
            <button
              onClick={onOpenMore}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2 bg-[#161616] hover:bg-black text-white text-xs font-sans tracking-wider transition-colors duration-200 cursor-pointer font-medium"
            >
              <span>More</span>
              <span className="font-sans text-sm leading-none translate-y-[-0.5px]">—</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
