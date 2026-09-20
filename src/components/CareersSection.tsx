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
      id: 'architect',
      title: currentLang === 'RU' ? 'Архитектор' : currentLang === 'KY' ? 'Архитектор' : currentLang === 'ZH' ? '建筑师' : 'Architect',
      type: currentLang === 'RU' ? 'Полный день / Офис в Бишкеке' : 'Full-time / Bishkek Studio',
      exp: currentLang === 'RU' ? 'Опыт от 3 лет' : '3+ years experience',
      salary: currentLang === 'RU' ? 'Достойная + проектные бонусы' : 'Competitive + project bonuses',
      software: 'Revit (BIM) • AutoCAD • ArchiCAD',
      description: currentLang === 'RU'
        ? 'Разработка архитектурных концепций, объемно-планировочных решений и выпуск рабочей документации (альбом АР) для частных резиденций, жилых комплексов и коммерческих объектов.'
        : currentLang === 'KY'
        ? 'Архитектуралык концепцияларды, көлөмдүк-пландаштыруу чечимдерин жана АР жумушчу чиймелерин иштеп чыгуу.'
        : currentLang === 'ZH'
        ? '负责高端私人住宅、商业综合体的方案深化与施工图设计 (建筑方案及AR施工图绘制)。'
        : 'Development of architectural concepts, spatial layouts, and detailed construction documentation (AR package) for villas and commercial assets.',
      requirements: [
        currentLang === 'RU' ? 'Высшее профильное архитектурное образование' : 'Degree in Architecture',
        currentLang === 'RU' ? 'Уверенное владение Revit / AutoCAD / ArchiCAD' : 'Proficiency in Revit / AutoCAD / ArchiCAD',
        currentLang === 'RU' ? 'Знание строительных норм, ГОСТов и СНиПов (сейсмика, пожарные нормы)' : 'Knowledge of building codes, seismic regulations & standards',
        currentLang === 'RU' ? 'Опыт разработки узлов, разрезов и кладочных планов' : 'Experience drafting construction details, wall sections & schedules',
        currentLang === 'RU' ? 'Наличие портфолио выполненных архитектурных проектов' : 'Portfolio of completed architectural projects',
      ],
    },
    {
      id: 'structural-engineer',
      title: currentLang === 'RU' ? 'Конструктор' : currentLang === 'KY' ? 'Конструктор' : currentLang === 'ZH' ? '结构工程师' : 'Structural Engineer',
      type: currentLang === 'RU' ? 'Полный день / Офис в Бишкеке' : 'Full-time / Bishkek Studio',
      exp: currentLang === 'RU' ? 'Опыт от 3 лет' : '3+ years experience',
      salary: currentLang === 'RU' ? 'Высокая + бонусы за проекты' : 'High + performance bonuses',
      software: 'ЛИРА-САПР / SCAD • AutoCAD • Revit',
      description: currentLang === 'RU'
        ? 'Расчет и проектирование несущих железобетонных и металлических конструкций зданий (альбом КР) с обязательным учетом 9-балльной сейсмичности региона и сложного рельефа.'
        : currentLang === 'KY'
        ? '9 баллдык сейсмикалык шарттарда имараттардын темир-бетон жана металл конструкцияларын эсептөө жана долбоорлоо (КР альбому).'
        : currentLang === 'ZH'
        ? '负责建筑钢筋混凝土及钢结构力学计算与施工图绘制 (KR结构图纸)，重点进行9级高烈度抗震计算。'
        : 'Calculation and detailed drafting of reinforced concrete and steel structures (KR package) designed for 9-point seismic zones.',
      requirements: [
        currentLang === 'RU' ? 'Высшее инженерно-строительное образование (ПГС)' : 'Civil / Structural Engineering degree',
        currentLang === 'RU' ? 'Уверенный расчет в расчетных комплексах (ЛИРА-САПР / SCAD Office)' : 'Proficiency in finite element analysis software (LIRA-SAPR / SCAD)',
        currentLang === 'RU' ? 'Опыт проектирования монолитного ж/б каркаса в сейсмических районах (8–9 баллов)' : 'Experience designing reinforced concrete frames for high-seismic zones',
        currentLang === 'RU' ? 'Грамотное оформление чертежей опалубки, армирования и спецификаций металла' : 'Accurate formwork, rebar detailing and steel reinforcement schedules',
        currentLang === 'RU' ? 'Опыт защиты проектных решений в Государственной экспертизе' : 'Experience defending structural calculations in State Building Authority',
      ],
    },
    {
      id: 'arch-visualizer',
      title: currentLang === 'RU' ? 'Архитектор-визуализатор' : currentLang === 'KY' ? 'Архитектор-визуализатор' : currentLang === 'ZH' ? '建筑效果图表现师' : 'Architectural Visualizer',
      type: currentLang === 'RU' ? 'Полный день / Офис или гибрид' : 'Full-time / Bishkek studio or hybrid',
      exp: currentLang === 'RU' ? 'Опыт от 2 лет' : '2+ years experience',
      salary: currentLang === 'RU' ? 'Достойная + премии' : 'Competitive + bonuses',
      software: '3ds Max + Corona / D5 / Blender • Photoshop',
      description: currentLang === 'RU'
        ? 'Создание фотореалистичных экстерьерных и интерьерных 3D-визуализаций с проработкой освещения, фактур натуральных материалов и интеграцией в горный ландшафт.'
        : currentLang === 'KY'
        ? 'Жарыктандырууну, табигый материалдардын текстурасын жана тоолуу ландшафтты эске алуу менен фотореалисттик 3D визуализация түзүү.'
        : currentLang === 'ZH'
        ? '负责建筑外观及室内空间的顶级写实级效果图渲染，精细表现材质质感、自然天光与山景环境。'
        : 'Creation of atmospheric, photorealistic 3D renderings focusing on natural lighting, raw material textures, and alpine context.',
      requirements: [
        currentLang === 'RU' ? 'Владение 3ds Max + Corona Renderer / V-Ray, D5 Render или Blender' : 'Mastery of 3ds Max + Corona / V-Ray, D5 Render or Blender',
        currentLang === 'RU' ? 'Умение работать с архитектурными чертежами и 3D-моделями (Revit, SketchUp)' : 'Ability to read CAD/BIM blueprints and work with 3D models',
        currentLang === 'RU' ? 'Тонкое чувство композиции кадра, архитектурного света и реалистичных текстур' : 'Strong sense of composition, cinematic lighting and realistic shading',
        currentLang === 'RU' ? 'Постобработка рендеров в Adobe Photoshop' : 'Post-processing mastery in Adobe Photoshop',
        currentLang === 'RU' ? 'Обязательно сильное портфолио экстерьерных и интерьерных рендеров' : 'Compelling portfolio of exterior and interior renderings is mandatory',
      ],
    },
    {
      id: 'junior-intern',
      title: currentLang === 'RU' ? 'Младший архитектор (Стажировка)' : currentLang === 'KY' ? 'Кенже архитектор (Стажировка)' : currentLang === 'ZH' ? '初级建筑师 (带薪实习)' : 'Junior Architect (Internship)',
      type: currentLang === 'RU' ? 'Оплачиваемая стажировка / Менторство' : 'Paid Internship / Mentorship',
      exp: currentLang === 'RU' ? 'Студенты старших курсов / Выпускники' : 'Senior students / Fresh graduates',
      salary: currentLang === 'RU' ? 'Стипендия + быстрый переход в штат' : 'Stipend + full-time employment track',
      software: 'Revit / ArchiCAD • Photoshop',
      description: currentLang === 'RU'
        ? 'Практическое погружение в реальные архитектурные проекты под персональным наставничеством ведущих архитекторов бюро с перспективой зачисления в постоянный штат.'
        : currentLang === 'KY'
        ? 'Жетекчи архитекторлордун жетекчилиги астында реалдуу долбоорлорго катышуу жана штатка өтүү мүмкүнчүлүгү.'
        : currentLang === 'ZH'
        ? '在资深主创建筑师的一对一导师制指导下深度参与实际工程项目，表现优异者直接转正为全职建筑师。'
        : 'Hands-on participation in real architectural commissions coached by senior architects with direct transition into the full-time team.',
      requirements: [
        currentLang === 'RU' ? 'Студенты 4–5 курсов или недавние выпускники профильных вузов (КГУСТА, КРСУ и др.)' : '4th/5th year architectural students or recent university graduates',
        currentLang === 'RU' ? 'Базовые навыки работы в Revit, AutoCAD или ArchiCAD' : 'Working foundation in Revit, AutoCAD or ArchiCAD',
        currentLang === 'RU' ? 'Искренняя увлеченность современной архитектурой и желание быстро учиться' : 'Genuine passion for contemporary architecture and willingness to learn',
        currentLang === 'RU' ? 'Внимание к деталям, ответственность и командный дух' : 'Attention to detail, responsibility and team mindset',
        currentLang === 'RU' ? 'Студенческое портфолио учебных или концептуальных проектов' : 'Academic portfolio of studio projects',
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
            {currentLang === 'RU' ? 'КАРЬЕРА В GRAND⁺' : currentLang === 'KY' ? 'КАРЬЕРА' : currentLang === 'ZH' ? '招贤纳士' : 'CAREERS'}
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
            ? 'Мы формируем сильную инженерно-архитектурную команду в Бишкеке. Ищем профессионалов и перспективных специалистов для работы над современными объектами.'
            : currentLang === 'KY'
            ? 'Биз Бишкекте күчтүү инженердик-архитектуралык команда түзүүдөбүз. Адистерди биргелешип иштөөгө чакырабыз.'
            : currentLang === 'ZH'
            ? '我们正在比什凯克组建极具竞争力的建筑与结构工程设计团队，诚邀专业人士与有潜力的青年才俊加入。'
            : 'Building a multidisciplinary design studio in Bishkek. Looking for dedicated professionals and aspiring architects.'}
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
                <div className="font-sans text-[11px] font-medium text-neutral-800 mt-0.5">{activeJob.software}</div>
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
              href={`mailto:hr@grand-plus.com?subject=Резюме на вакансию "${encodeURIComponent(activeJob.title)}" в ОсОО ГРАНД Плюс`}
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
            ? 'Официальное трудоустройство по ТК КР, современное рабочее место, профессиональное развитие и участие в знаковых проектах.'
            : 'Official employment contract, modern workstations, professional growth, and participation in landmark architectural projects.'}
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
