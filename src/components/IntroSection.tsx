import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Building2,
  Award,
  MapPin,
  Phone,
  Compass,
} from 'lucide-react';
import { ProjectItem } from '../types';
import { FEATURED_PROJECTS } from '../data/projects';
import { Language, TRANSLATIONS } from '../data/translations';

interface IntroSectionProps {
  onSelectProject?: (project: ProjectItem) => void;
  onContactClick?: () => void;
  onViewAllWorks?: () => void;
  currentLang?: Language;
}

export const IntroSection: React.FC<IntroSectionProps> = ({
  onContactClick,
  onViewAllWorks,
  currentLang = 'RU',
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.RU;

  return (
    <div className="w-full flex flex-col justify-between p-4 sm:p-6 lg:p-7 bg-white border border-neutral-200/80 min-h-[460px] select-none">
      {/* 1. Top Section Header */}
      <div className="border-b border-neutral-200 pb-3 sm:pb-4 shrink-0">
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-1">
          <span>{t.intro.number}</span>
          <span>/</span>
          <span className="uppercase tracking-widest text-[11px] font-sans text-neutral-600 font-medium">
            {t.intro.category}
          </span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-neutral-900 font-normal tracking-tight">
          {t.intro.title}
        </h2>
        <p className="font-serif text-xs sm:text-sm text-neutral-600 mt-1.5 font-light max-w-4xl leading-relaxed">
          {t.intro.description}
        </p>
      </div>

      {/* 2. Official Bureau Profile & Key Competencies (ОсОО «ГРАНД Плюс») in 3 columns */}
      <div className="my-4 sm:my-5 bg-neutral-50/70 border border-neutral-200 p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 pb-3.5 border-b border-neutral-200/80">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 mb-1.5 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>ЛИЦЕНЗИЯ ГОССТРОЯ КР № 02381-ГС • II И ВЫСШАЯ КАТЕГОРИЯ</span>
            </div>
            <h3 className="font-serif text-base sm:text-lg text-neutral-900 font-normal">
              Общество с ограниченной ответственностью «ГРАНД Плюс»
            </h3>
            <p className="text-xs text-neutral-600 font-sans font-light mt-0.5 max-w-3xl leading-relaxed">
              Архитектурно-проектная организация полного цикла в г. Бишкек. Генеральное проектирование капитальных объектов в условиях повышенной сейсмичности (до 9 баллов) по государственным строительным нормам СНиП КР.
            </p>
          </div>

          {/* 3 Quick Stats Strip (3 в ряд) */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full lg:w-auto shrink-0 pt-2 lg:pt-0">
            <div className="bg-white border border-neutral-200 px-3 py-2 text-center min-w-[85px]">
              <span className="block font-serif text-base sm:text-lg font-medium text-neutral-900 leading-none">10+</span>
              <span className="text-[9.5px] font-mono text-neutral-500 uppercase mt-0.5 block">Лет опыта</span>
            </div>
            <div className="bg-white border border-neutral-200 px-3 py-2 text-center min-w-[85px]">
              <span className="block font-serif text-base sm:text-lg font-medium text-emerald-700 leading-none">9 баллов</span>
              <span className="text-[9.5px] font-mono text-neutral-500 uppercase mt-0.5 block">Сейсмика</span>
            </div>
            <div className="bg-white border border-neutral-200 px-3 py-2 text-center min-w-[85px]">
              <span className="block font-serif text-base sm:text-lg font-medium text-neutral-900 leading-none">150+</span>
              <span className="text-[9.5px] font-mono text-neutral-500 uppercase mt-0.5 block">Объектов</span>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars of Grand Plus Work (В ТРИ РЯДА / 3 КОЛОНКИ ВМЕСТО 4) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 pt-4">
          <div className="p-3.5 sm:p-4 bg-white border border-neutral-200/90 flex flex-col justify-between hover:border-neutral-400 transition-colors">
            <div>
              <div className="flex items-center gap-1.5 text-neutral-900 mb-1.5">
                <Compass className="w-4 h-4 text-neutral-700" />
                <span className="text-[10.5px] font-mono uppercase tracking-wider text-neutral-500">01 • Земля и ТУ</span>
              </div>
              <h4 className="font-serif text-sm sm:text-base text-neutral-900 font-medium">Градостроительный аудит</h4>
              <p className="text-xs text-neutral-600 font-sans font-light mt-1.5 leading-relaxed">
                Юридическая экспертиза Красной книги, проверка красных линий улиц в ГлавАПУ, топосъемка М 1:500, инженерно-геологические изыскания и получение официальных АПУ и ИТУ на подключение к сетям.
              </p>
            </div>
            <div className="mt-3 pt-2.5 border-t border-neutral-100 text-[10px] font-mono text-neutral-500">
              Бишкекглавархитектура • Кадастр
            </div>
          </div>

          <div className="p-3.5 sm:p-4 bg-white border border-neutral-200/90 flex flex-col justify-between hover:border-neutral-400 transition-colors">
            <div>
              <div className="flex items-center gap-1.5 text-neutral-900 mb-1.5">
                <Building2 className="w-4 h-4 text-neutral-700" />
                <span className="text-[10.5px] font-mono uppercase tracking-wider text-neutral-500">02 • Проектирование</span>
              </div>
              <h4 className="font-serif text-sm sm:text-base text-neutral-900 font-medium">ЭП + Рабочий проект (АР, КР)</h4>
              <p className="text-xs text-neutral-600 font-sans font-light mt-1.5 leading-relaxed">
                Эскизный проект с 3D-визуализацией, конструктивный расчет сейсмостойкости на 9 баллов в ЛИРА-САПР, полный комплект инженерных сетей (ОВ, ВК, ЭОМ), генеральный план (ГП) и сметный расчет.
              </p>
            </div>
            <div className="mt-3 pt-2.5 border-t border-neutral-100 text-[10px] font-mono text-neutral-500">
              СНиП КР 20-02:2018 • ЛИРА-САПР
            </div>
          </div>

          <div className="p-3.5 sm:p-4 bg-white border border-neutral-200/90 flex flex-col justify-between hover:border-neutral-400 transition-colors">
            <div>
              <div className="flex items-center gap-1.5 text-neutral-900 mb-1.5">
                <Award className="w-4 h-4 text-neutral-700" />
                <span className="text-[10.5px] font-mono uppercase tracking-wider text-neutral-500">03 • Экспертиза и Сдача</span>
              </div>
              <h4 className="font-serif text-sm sm:text-base text-neutral-900 font-medium">Экспертиза, ГАСК и Техпаспорт</h4>
              <p className="text-xs text-neutral-600 font-sans font-light mt-1.5 leading-relaxed">
                Защита проекта в Госэкспертизе, регистрация талона на СМР в ГАСК, авторский надзор с актами скрытых работ, лабораторный контроль бетона, приемочная комиссия и оформление техпаспорта в Кадастре.
              </p>
            </div>
            <div className="mt-3 pt-2.5 border-t border-neutral-100 text-[10px] font-mono text-neutral-500">
              Госэкспертиза • ГАСК • Ввод в эксплуатацию
            </div>
          </div>
        </div>
      </div>

      {/* 3. Scope Assurance & Official Bureau Credentials */}
      <div className="p-3 bg-neutral-100/70 border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-neutral-700 shrink-0 my-1">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 font-sans text-xs text-neutral-600">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-neutral-800 shrink-0" />
            <span>г. Бишкек, ул. Шабдан Баатыра, 43а / ул. Раззакова, 19</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-neutral-800 shrink-0" />
            <span>+996 (555) 00-11-22 • +996 (312) 62-44-88</span>
          </span>
        </div>
        <span className="font-mono text-[11px] text-neutral-900 font-medium shrink-0 bg-white px-2.5 py-0.5 border border-neutral-300">
          ОсОО «ГРАНД Плюс» • ИНН 01205201410190
        </span>
      </div>

      {/* 4. Bottom Action Strip */}
      <div className="pt-3 sm:pt-3.5 border-t border-neutral-200 flex items-center justify-between text-xs font-sans shrink-0">
        <button
          onClick={onViewAllWorks}
          className="inline-flex items-center gap-1.5 text-neutral-900 hover:text-black font-medium transition-colors cursor-pointer group"
        >
          <span>{t.intro.exploreArchive} ({FEATURED_PROJECTS.length})</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </button>

        <button
          onClick={onContactClick}
          className="px-4 py-2 bg-neutral-900 hover:bg-black text-white text-[11px] tracking-wider transition-colors cursor-pointer"
        >
          {t.intro.scheduleConsultation}
        </button>
      </div>
    </div>
  );
};

