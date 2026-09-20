import React, { useState } from 'react';
import { Briefcase, Send, CheckCircle2, ChevronRight, Monitor, Award, HeartHandshake } from 'lucide-react';
import { Language } from '../data/translations';

interface CareersSectionProps {
  onInquire: () => void;
  currentLang?: Language;
}

export const CareersSection: React.FC<CareersSectionProps> = ({
  onInquire,
  currentLang = 'RU',
}) => {
  const [selectedJob, setSelectedJob] = useState<number>(0);

  const VACANCIES = [
    {
      id: 'lead-arch',
      title: currentLang === 'RU' ? 'Ведущий архитектор проекта (ГАП)' : 'Lead Project Architect',
      type: currentLang === 'RU' ? 'Полный день / Офис в Бишкеке' : 'Full-time / Bishkek Studio',
      exp: currentLang === 'RU' ? 'Опыт от 5 лет' : '5+ years experience',
      salary: currentLang === 'RU' ? 'По результатам собеседования' : 'Competitive / Negotiable',
      description: currentLang === 'RU'
        ? 'Руководство концептуальным проектированием и выпуском рабочей документации уникальных вилл, горных резортов и коммерческих зданий.'
        : 'Lead concept-to-construction delivery of high-end private villas, alpine resorts, and commercial complexes.',
      requirements: [
        currentLang === 'RU' ? 'Высшее архитектурное образование' : 'Master’s degree in Architecture',
        currentLang === 'RU' ? 'Свободное владение Revit (BIM) и AutoCAD' : 'Proficiency in Revit (BIM) and AutoCAD',
        currentLang === 'RU' ? 'Опыт работы со сложным горным рельефом и сейсмикой' : 'Experience with complex topography & seismic codes',
        currentLang === 'RU' ? 'Успешно реализованные объекты в портфолио' : 'Track record of built or documented projects',
      ],
    },
    {
      id: 'bim-coord',
      title: currentLang === 'RU' ? 'BIM-архитектор / Координатор' : 'BIM Coordinator / Modeler',
      type: currentLang === 'RU' ? 'Полный день / Гибрид' : 'Full-time / Hybrid',
      exp: currentLang === 'RU' ? 'Опыт от 3 лет' : '3+ years experience',
      salary: currentLang === 'RU' ? 'Высокая + бонусы за проекты' : 'Attractive + project bonuses',
      description: currentLang === 'RU'
        ? 'Создание цифровых информационных моделей зданий, координация смежных инженерных дисциплин и проверка коллизий.'
        : 'Develop information models, coordinate multidisciplinary MEP/structural data, and resolve model clashes.',
      requirements: [
        currentLang === 'RU' ? 'Глубокие знания Autodesk Revit и Navisworks' : 'Deep expertise in Autodesk Revit & Navisworks',
        currentLang === 'RU' ? 'Понимание стандартов BEP и протоколов моделирования' : 'Solid grasp of BEP and BIM protocols',
        currentLang === 'RU' ? 'Навыки параметрического моделирования (Dynamo приветствуется)' : 'Parametric modeling (Dynamo is a plus)',
        currentLang === 'RU' ? 'Внимание к детализации узлов и спецификациям' : 'Rigorous attention to detail and specifications',
      ],
    },
    {
      id: '3d-vis',
      title: currentLang === 'RU' ? 'Архитектор-визуализатор 3D' : 'Architectural 3D Visualizer',
      type: currentLang === 'RU' ? 'Полный день / Офис' : 'Full-time / In-house',
      exp: currentLang === 'RU' ? 'Опыт от 2 лет' : '2+ years experience',
      salary: currentLang === 'RU' ? 'Достойная + премия' : 'Competitive + performance',
      description: currentLang === 'RU'
        ? 'Создание кинематографичных и атмосферных экстерьерных визуализаций архитектуры в натуральном горном ландшафте Тянь-Шаня.'
        : 'Craft atmospheric exterior & interior imagery emphasizing natural light, materials, and Tien Shan landscape integration.',
      requirements: [
        currentLang === 'RU' ? 'Мастерское владение 3ds Max + Corona / D5 Render / Blender' : 'Mastery of 3ds Max + Corona / D5 Render',
        currentLang === 'RU' ? 'Тонкое чувство света, композиции и фактур материалов' : 'Refined sense of lighting, composition, and optics',
        currentLang === 'RU' ? 'Художественное или архитектурное образование' : 'Background in architecture, art, or visual design',
        currentLang === 'RU' ? 'Наличие сильного портфолио визуализаций' : 'Compelling architectural visualization portfolio',
      ],
    },
    {
      id: 'intern',
      title: currentLang === 'RU' ? 'Младший архитектор / Стажировка' : 'Junior Architect / Internship',
      type: currentLang === 'RU' ? 'Оплачиваемая стажировка' : 'Paid Internship',
      exp: currentLang === 'RU' ? 'Студенты старших курсов / Выпускники' : 'Graduates or senior students',
      salary: currentLang === 'RU' ? 'Стипендия + наставничество' : 'Stipend + mentor coaching',
      description: currentLang === 'RU'
        ? 'Погружение в реальную практику проектирования под руководством опытных главных архитекторов бюро с перспективой зачисления в штат.'
        : 'Hands-on participation in real architectural commissions coached by senior partners with employment fast-track.',
      requirements: [
        currentLang === 'RU' ? 'Базовые навыки Revit/Archicad, Photoshop' : 'Working foundation in Revit/Archicad, Photoshop',
        currentLang === 'RU' ? 'Высокая мотивация, архитектурное любопытство' : 'Strong passion for contextual modern architecture',
        currentLang === 'RU' ? 'Умение быстро учиться и работать в команде' : 'Fast learner and collaborative spirit',
        currentLang === 'RU' ? 'Студенческое портфолио курсовых проектов' : 'Academic portfolio of studio projects',
      ],
    },
  ];

  const activeJob = VACANCIES[selectedJob];

  return (
    <div className="w-full flex flex-col justify-between p-4 sm:p-5 lg:p-6 bg-white border border-neutral-200/80 min-h-[480px] lg:min-h-[500px] select-none">
      {/* Top Header */}
      <div className="border-b border-neutral-200 pb-2.5 sm:pb-3 shrink-0">
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-0.5">
          <span>05</span>
          <span>/</span>
          <span className="uppercase tracking-widest text-[11px] font-sans text-neutral-600">
            {currentLang === 'RU' ? 'КАРЬЕРА' : currentLang === 'KY' ? 'КАРЬЕРА' : currentLang === 'ZH' ? '招贤纳士' : 'CAREERS'}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-neutral-900 font-normal tracking-tight">
            {currentLang === 'RU'
              ? 'Вакансии и команда GRAND⁺'
              : currentLang === 'KY'
              ? 'Бош орундар жана GRAND⁺ командасы'
              : currentLang === 'ZH'
              ? '加入 GRAND⁺ 建筑设计团队'
              : 'Join the GRAND⁺ Studio Team'}
          </h2>
          <span className="text-[11px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
            {currentLang === 'RU' ? '4 открытые позиции' : '4 Open Roles'}
          </span>
        </div>
        <p className="font-serif text-xs sm:text-sm text-neutral-600 mt-0.5 font-light max-w-3xl">
          {currentLang === 'RU'
            ? 'Мы создаем передовую архитектуру Кыргызстана для международного признания. Приглашаем талантливых архитекторов, BIM-инженеров и визуализаторов.'
            : currentLang === 'KY'
            ? 'Биз эл аралык деңгээлдеги кыргыз архитектурасын түзөбүз. Архитекторлорду жана инженерлерди кызматташууга чакырабыз.'
            : currentLang === 'ZH'
            ? '我们致力于打造具有国际影响力的中亚现当代建筑作品，诚邀卓越的建筑师、BIM工程师与效果图艺术家同行。'
            : 'Designing cutting-edge alpine and international architecture. Join our multidisciplinary team in Bishkek.'}
        </p>
      </div>

      {/* Main Content: Vacancy List + Selected Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 my-4 flex-1">
        {/* Vacancy Selector (5 cols) */}
        <div className="lg:col-span-5 space-y-2">
          {VACANCIES.map((job, idx) => (
            <button
              key={job.id}
              onClick={() => setSelectedJob(idx)}
              className={`w-full text-left p-3 border transition-all cursor-pointer flex items-center justify-between ${
                selectedJob === idx
                  ? 'border-neutral-900 bg-neutral-900 text-white shadow-xs'
                  : 'border-neutral-200 bg-neutral-50/50 hover:bg-neutral-100/80 text-neutral-800'
              }`}
            >
              <div>
                <div
                  className={`text-[10px] font-mono uppercase tracking-wider mb-0.5 ${
                    selectedJob === idx ? 'text-neutral-300' : 'text-neutral-500'
                  }`}
                >
                  {job.type}
                </div>
                <h4
                  className={`font-serif text-sm sm:text-base font-normal leading-snug ${
                    selectedJob === idx ? 'text-white' : 'text-neutral-900'
                  }`}
                >
                  {job.title}
                </h4>
                <div
                  className={`text-[11px] font-mono mt-1 ${
                    selectedJob === idx ? 'text-neutral-300' : 'text-neutral-600'
                  }`}
                >
                  {job.exp}
                </div>
              </div>
              <ChevronRight
                className={`w-4 h-4 shrink-0 transition-transform ${
                  selectedJob === idx ? 'translate-x-1 text-white' : 'text-neutral-400'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Selected Vacancy Details (7 cols) */}
        <div className="lg:col-span-7 p-4 border border-neutral-200 bg-white flex flex-col justify-between">
          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 mb-1">
                <span>ВАКАНСИЯ #0{selectedJob + 1}</span>
                <span className="text-neutral-700 font-medium">{activeJob.salary}</span>
              </div>
              <h3 className="font-serif text-lg sm:text-xl text-neutral-900 font-normal">
                {activeJob.title}
              </h3>
              <p className="font-serif text-xs sm:text-sm text-neutral-700 font-light mt-1.5 leading-relaxed">
                {activeJob.description}
              </p>
            </div>

            <div>
              <h5 className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1.5">
                {currentLang === 'RU' ? 'Ключевые требования:' : 'Requirements:'}
              </h5>
              <ul className="space-y-1">
                {activeJob.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2 font-sans text-xs text-neutral-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neutral-800 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Studio Environment Info */}
            <div className="p-2.5 bg-neutral-50 border border-neutral-200 grid grid-cols-3 gap-2 text-center text-xs">
              <div>
                <div className="font-mono text-[10px] text-neutral-400 uppercase">Локация</div>
                <div className="font-sans text-[11px] font-medium text-neutral-800 mt-0.5">Бишкек, Шабдан Баатыра 43а</div>
              </div>
              <div>
                <div className="font-mono text-[10px] text-neutral-400 uppercase">Стек ПО</div>
                <div className="font-sans text-[11px] font-medium text-neutral-800 mt-0.5">Revit • Navisworks • Corona</div>
              </div>
              <div>
                <div className="font-mono text-[10px] text-neutral-400 uppercase">Оснащение</div>
                <div className="font-sans text-[11px] font-medium text-neutral-800 mt-0.5">RTX 4090 • 4K мониторы</div>
              </div>
            </div>
          </div>

          <div className="pt-3 mt-3 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-[11px] font-mono text-neutral-500">
              {currentLang === 'RU' ? 'Почта для резюме: hr@grand-plus.com' : 'Send CV: hr@grand-plus.com'}
            </span>
            <a
              href="mailto:hr@grand-plus.com?subject=Резюме на вакансию в GRAND+"
              className="w-full sm:w-auto px-4 py-2 bg-neutral-900 hover:bg-black text-white text-xs font-sans tracking-wide transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Send className="w-3 h-3" />
              <span>{currentLang === 'RU' ? 'Отправить резюме и портфолио' : 'Apply Now'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Metadata Bar */}
      <div className="pt-3 border-t border-neutral-200 shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <span className="font-serif text-neutral-600 font-light">
          {currentLang === 'RU'
            ? 'Официальное трудоустройство по ТК КР, медицинская страховка, участие в профильных архитектурных форумах.'
            : 'Official employment contract, health insurance, and professional architectural symposium sponsorships.'}
        </span>
        <button
          onClick={onInquire}
          className="font-mono text-[11px] text-neutral-900 font-medium hover:underline underline-offset-2 shrink-0 cursor-pointer"
        >
          {currentLang === 'RU' ? 'Задать вопрос HR' : 'Contact HR Dept'} →
        </button>
      </div>
    </div>
  );
};
