import React from 'react';
import { Compass, Building2, ShieldCheck, Cpu, Palette, Eye, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Language } from '../data/translations';

interface ServicesSectionProps {
  onInquire: () => void;
  onNavigateToProjects: () => void;
  currentLang?: Language;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onInquire,
  onNavigateToProjects,
  currentLang = 'RU',
}) => {
  const SERVICES = [
    {
      id: 'villas',
      icon: Compass,
      num: '01',
      title: currentLang === 'RU' ? 'Проектирование частных вилл и резиденций' : 'Private Villa & Luxury Residential Architecture',
      description: currentLang === 'RU'
        ? 'Создание уникальных загородных резиденций с тонкой посадкой на горный рельеф, панорамными видами и расчетом сейсмики до 9 баллов.'
        : 'Contextual residential architecture tailored to mountain slopes, pristine vistas, and 9-point seismic stability.',
      deliverables: [
        currentLang === 'RU' ? 'Инсоляционный и ландшафтный анализ' : 'Solar orientation & topography analysis',
        currentLang === 'RU' ? 'Функциональное зонирование и планировки' : 'Bespoke floor plans & private zoning',
        currentLang === 'RU' ? 'Фотореалистичные 3D-экстерьеры' : 'Photorealistic exterior 3D renderings',
      ],
    },
    {
      id: 'commercial',
      icon: Building2,
      num: '02',
      title: currentLang === 'RU' ? 'Коммерческая архитектура и HoReCa' : 'Commercial, Hospitality & Resort Architecture',
      description: currentLang === 'RU'
        ? 'Проектирование бизнес-центров, отелей, этно-резортов на озере Иссык-Куль и спа-комплексов с высокой экономической эффективностью.'
        : 'High-yield masterplans and design for business hubs, boutique alpine hotels, glampings, and wellness resorts.',
      deliverables: [
        currentLang === 'RU' ? 'Оптимизация полезной площади (GLA)' : 'GLA optimization & circulation design',
        currentLang === 'RU' ? 'Концепции для горного туризма' : 'Eco-tourism and hospitality masterplans',
        currentLang === 'RU' ? 'Согласование градостроительных норм' : 'Zoning approvals and compliance codes',
      ],
    },
    {
      id: 'structural',
      icon: ShieldCheck,
      num: '03',
      title: currentLang === 'RU' ? 'Конструктивные расчеты (КР)' : 'Structural Engineering & Seismic Calculations',
      description: currentLang === 'RU'
        ? 'Расчет надежных монолитных железобетонных, металлокаркасных и деревянных несущих конструкций в программных комплексах LIRA и SCAD.'
        : 'Rigorous structural engineering for high-seismic mountain zones using advanced finite-element analysis.',
      deliverables: [
        currentLang === 'RU' ? 'Расчет фундамента на сложных грунтах' : 'Foundation engineering for slope geology',
        currentLang === 'RU' ? 'Сейсмостойкость до 9 баллов по СНиП' : '9-magnitude earthquake resistance',
        currentLang === 'RU' ? 'Спецификации металлопроката и бетона' : 'Full steel reinforcement & concrete specs',
      ],
    },
    {
      id: 'bim',
      icon: Cpu,
      num: '04',
      title: currentLang === 'RU' ? 'BIM-моделирование и инженерия (MEP)' : 'BIM Coordination & MEP Engineering',
      description: currentLang === 'RU'
        ? 'Единая цифровая модель здания в Autodesk Revit с интеграцией отопления, вентиляции, водоснабжения, электрики и слаботочных систем.'
        : 'Single source of truth in Autodesk Revit integrating HVAC, electrical, plumbing, and smart automation without clashes.',
      deliverables: [
        currentLang === 'RU' ? '3D-проверка коллизий в Navisworks' : 'Automated clash detection in Navisworks',
        currentLang === 'RU' ? 'Автоматические ведомости объемов (BOM)' : 'Accurate automated quantity takeoffs',
        currentLang === 'RU' ? 'Схемы узлов ввода внешних сетей' : 'External municipal utility routing plans',
      ],
    },
    {
      id: 'interior',
      icon: Palette,
      num: '05',
      title: currentLang === 'RU' ? 'Архитектурный дизайн интерьеров' : 'Interior Architecture & FF&E Procurement',
      description: currentLang === 'RU'
        ? 'Гармоничное продолжение архитектуры во внутренних пространствах: натуральный камень Сары-Таш, тянь-шаньская ель, мягкий свет.'
        : 'Seamless dialogue between exterior envelope and internal spaces, celebrating local travertine and natural wood.',
      deliverables: [
        currentLang === 'RU' ? 'Планы расстановки мебели и света' : 'Bespoke layouts, lighting & ceiling plans',
        currentLang === 'RU' ? 'Развертки стен и спецификация отделки' : 'Wall elevations and luxury finish specs',
        currentLang === 'RU' ? 'Комплектация и заказ мебели' : 'Direct FF&E procurement & coordination',
      ],
    },
    {
      id: 'supervision',
      icon: Eye,
      num: '06',
      title: currentLang === 'RU' ? 'Авторский надзор и экспертиза' : 'Architectural Supervision & Construction Oversight',
      description: currentLang === 'RU'
        ? 'Регулярный контроль строительного процесса главным архитектором проекта: проверка армирования, заливки бетона и монтажа фасадов.'
        : 'On-site technical supervision by project architects ensuring built realization matches certified drawings to the millimeter.',
      deliverables: [
        currentLang === 'RU' ? 'Еженедельные выезды на стройплощадку' : 'Weekly site visits & progress reports',
        currentLang === 'RU' ? 'Журнал авторского надзора по нормам КР' : 'Formal supervisory logbook under KR laws',
        currentLang === 'RU' ? 'Подписание актов скрытых работ' : 'Signing concealed works certification',
      ],
    },
  ];

  return (
    <div className="w-full flex flex-col justify-between p-4 sm:p-5 lg:p-6 bg-white border border-neutral-200/80 min-h-[480px] lg:min-h-[500px] select-none">
      {/* Top Header */}
      <div className="border-b border-neutral-200 pb-2.5 sm:pb-3 shrink-0">
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-0.5">
          <span>01</span>
          <span>/</span>
          <span className="uppercase tracking-widest text-[11px] font-sans text-neutral-600">
            {currentLang === 'RU' ? 'УСЛУГИ' : currentLang === 'KY' ? 'КЫЗМАТТАР' : currentLang === 'ZH' ? '服务范围' : 'SERVICES'}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-neutral-900 font-normal tracking-tight">
            {currentLang === 'RU'
              ? 'Комплекс архитектурных услуг'
              : currentLang === 'KY'
              ? 'Архитектуралык кызматтардын комплекси'
              : currentLang === 'ZH'
              ? '全流程综合建筑设计服务'
              : 'Comprehensive Architectural Services'}
          </h2>
          <span className="text-[11px] font-mono text-neutral-500">
            {currentLang === 'RU' ? 'Лицензия Госстроя КР I категории' : 'State Architectural License Cat. I'}
          </span>
        </div>
        <p className="font-serif text-xs sm:text-sm text-neutral-600 mt-0.5 font-light max-w-3xl">
          {currentLang === 'RU'
            ? 'GRAND⁺ ведет проекты полного цикла: от геодезических изысканий и эскизной идеи до прохождения экспертизы и авторского надзора на стройплощадке.'
            : currentLang === 'KY'
            ? 'GRAND⁺ жер тилкесин изилдөөдөн баштап мамлекеттик экспертизага чейин толук циклдеги архитектуралык иштерди аткарат.'
            : currentLang === 'ZH'
            ? 'GRAND⁺ 提供从地块勘测、概念推演到施工图审查与驻场监理的全生命周期建筑工程咨询。'
            : 'Turnkey architectural services spanning initial zoning feasibility to structural engineering and final commissioning.'}
        </p>
      </div>

      {/* Services Grid (6 services in 3x2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 my-4 flex-1">
        {SERVICES.map((srv) => {
          const IconComp = srv.icon;
          return (
            <div
              key={srv.id}
              className="p-3.5 border border-neutral-200 hover:border-neutral-400 bg-neutral-50/50 hover:bg-neutral-50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 mb-2">
                  <span>{srv.num} / УСЛУГА</span>
                  <div className="w-7 h-7 border border-neutral-200 bg-white flex items-center justify-center text-neutral-700 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                    <IconComp className="w-3.5 h-3.5 stroke-[1.5]" />
                  </div>
                </div>

                <h3 className="font-serif text-base text-neutral-900 font-normal leading-snug mb-1.5 group-hover:text-black">
                  {srv.title}
                </h3>
                <p className="font-serif text-xs text-neutral-600 font-light leading-relaxed mb-3">
                  {srv.description}
                </p>
              </div>

              <div className="pt-2.5 border-t border-neutral-200/80 space-y-1">
                {srv.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-[11px] font-sans text-neutral-700">
                    <CheckCircle2 className="w-3 h-3 text-neutral-500 shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Metadata Bar */}
      <div className="pt-3 border-t border-neutral-200 shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <span className="font-serif text-neutral-600 font-light">
          {currentLang === 'RU'
            ? 'Все проекты выполняются в строгом соответствии со стандартами СНиП КР и международными еврокодами.'
            : 'All documentation adheres strictly to Kyrgyz building safety codes and ISO/Eurocode standards.'}
        </span>
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={onNavigateToProjects}
            className="font-mono text-[11px] text-neutral-600 hover:text-black hover:underline underline-offset-2 cursor-pointer"
          >
            {currentLang === 'RU' ? 'Смотреть портфолио' : 'View Portfolio'} →
          </button>
          <button
            onClick={onInquire}
            className="font-mono text-[11px] text-neutral-900 font-medium hover:underline underline-offset-2 cursor-pointer"
          >
            {currentLang === 'RU' ? 'Обсудить ваш проект' : 'Consult Architect'} →
          </button>
        </div>
      </div>
    </div>
  );
};
