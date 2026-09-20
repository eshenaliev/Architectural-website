import React, { useState } from 'react';
import { Check, ArrowRight, ShieldCheck, FileCheck } from 'lucide-react';
import { Language } from '../data/translations';

interface PricingSectionProps {
  onInquire: () => void;
  currentLang?: Language;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onInquire,
  currentLang = 'RU',
}) => {
  const [selectedTier, setSelectedTier] = useState<number>(1);

  const TIERS = [
    {
      id: 0,
      name: currentLang === 'RU' ? 'Концептуальный' : currentLang === 'KY' ? 'Концептуалдык' : currentLang === 'ZH' ? '概念方案' : 'Concept Design',
      pricePerM2: 25,
      description: currentLang === 'RU'
        ? 'Объемно-пространственная идея, посадка на рельеф и планировочные решения для предварительной оценки объекта.'
        : currentLang === 'KY'
        ? 'Мейкиндик концепциясы, рельефке ылайыктоо жана пландаштыруу чечимдери.'
        : currentLang === 'ZH'
        ? '建筑空间构想、地形顺应与平面规划方案，适用于前期立项评估。'
        : 'Architectural spatial concept, topography fitting, and layout scheme for initial assessment.',
      features: [
        currentLang === 'RU' ? 'Генеральный план и посадка на ландшафт' : 'Master site plan & landscape layout',
        currentLang === 'RU' ? 'Функциональные поэтажные планировки' : 'Functional floor plan layouts',
        currentLang === 'RU' ? '3D фотореалистичные визуализации (4-6 ракурсов)' : 'Photo-realistic 3D exterior renders',
        currentLang === 'RU' ? 'Стилевая и колористическая концепция' : 'Material & color moodboard',
        currentLang === 'RU' ? 'Принципиальная посадка инженерных вводов' : 'Basic utility entry point layout',
      ],
    },
    {
      id: 1,
      popular: true,
      name: currentLang === 'RU' ? 'Рабочий проект (АР+КР)' : currentLang === 'KY' ? 'Жумушчу долбоор (АР+КР)' : currentLang === 'ZH' ? '施工图设计 (建筑+结构)' : 'Working Drawings (Arch + Struct)',
      pricePerM2: 45,
      description: currentLang === 'RU'
        ? 'Исчерпывающий комплект рабочей документации для строителей, прохождения государственной экспертизы и возведения здания.'
        : currentLang === 'KY'
        ? 'Курулушчулар жана мамлекеттик экспертиза үчүн толук жумушчу чиймелер топтому.'
        : currentLang === 'ZH'
        ? '完整的施工图技术图纸集，用于施工建造及官方图审备案，含抗震结构计算。'
        : 'Complete construction documentation set for contractors and 9-point seismic building code permits.',
      features: [
        currentLang === 'RU' ? 'Архитектурные решения (Альбом АР в деталях)' : 'Architectural set (Detailed AR documentation)',
        currentLang === 'RU' ? 'Конструктивные расчеты (КР, сейсмика 9 баллов)' : 'Structural calculations (9-point seismic)',
        currentLang === 'RU' ? 'Кладочные планы, разрезы и сложные узлы' : 'Detailed masonry, sections & envelope details',
        currentLang === 'RU' ? 'Ведомости объемов и спецификации материалов' : 'Bill of materials & volume estimates',
        currentLang === 'RU' ? 'Теплотехнический расчет ограждающих конструкций' : 'Thermal insulation envelope engineering',
      ],
    },
    {
      id: 2,
      name: currentLang === 'RU' ? 'Комплексный "Под ключ"' : currentLang === 'KY' ? 'Комплекстүү "Ачкыч тапшыруу"' : currentLang === 'ZH' ? '全专业交钥匙工程' : 'Turnkey Full-Scope',
      pricePerM2: 70,
      description: currentLang === 'RU'
        ? 'Максимальный объем проектирования: архитектура, несущие конструкции, все инженерные сети, дизайн интерьера и авторский надзор.'
        : currentLang === 'KY'
        ? 'Архитектура, конструкция, инженердик тармактар, интерьер дизайны жана автордук көзөмөл.'
        : currentLang === 'ZH'
        ? '全专业高精度设计：建筑、结构、机电管线、室内精装与现场驻场建筑师监督。'
        : 'End-to-end scope: architecture, structural engineering, MEP services, interior design & construction oversight.',
      features: [
        currentLang === 'RU' ? 'Архитектура (АР) + Конструкции (КР)' : 'Full AR + KR architectural packages',
        currentLang === 'RU' ? 'Инженерные сети (ОВ, ВК, ЭОМ, слаботочные сети)' : 'Full MEP engineering (HVAC, plumbing, electrical)',
        currentLang === 'RU' ? 'Интерьерный дизайн-проект с комплектацией' : 'Complete interior design & FF&E procurement',
        currentLang === 'RU' ? 'Ландшафтная концепция благоустройства' : 'Landscape layout and site lighting scheme',
        currentLang === 'RU' ? 'Авторский надзор за ходом строительства' : 'Architectural site supervision visits',
      ],
    },
  ];

  return (
    <div className="w-full flex flex-col justify-between p-4 sm:p-5 lg:p-6 bg-white border border-neutral-200/80 min-h-[480px] lg:min-h-[500px] select-none">
      {/* Top Header */}
      <div className="border-b border-neutral-200 pb-2.5 sm:pb-3 shrink-0">
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-0.5">
          <span>02</span>
          <span>/</span>
          <span className="uppercase tracking-widest text-[11px] font-sans text-neutral-600">
            {currentLang === 'RU' ? 'СТОИМОСТЬ' : currentLang === 'KY' ? 'БААСЫ' : currentLang === 'ZH' ? '设计取费' : 'PRICING'}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-neutral-900 font-normal tracking-tight">
            {currentLang === 'RU'
              ? 'Тарифы на проектирование'
              : currentLang === 'KY'
              ? 'Долбоорлоо тарифтери'
              : currentLang === 'ZH'
              ? '设计取费标准'
              : 'Architectural Fee Structure'}
          </h2>
          <span className="text-[11px] font-mono text-neutral-500">
            {currentLang === 'RU' ? 'Фиксированные расценки за м²' : 'Transparent per m² rates'}
          </span>
        </div>
        <p className="font-serif text-xs sm:text-sm text-neutral-600 mt-0.5 font-light max-w-3xl">
          {currentLang === 'RU'
            ? 'Прозрачное ценообразование без скрытых доплат. Каждый проект включает детальный аудит участка, расчет сейсмостойкости и адаптацию к климату.'
            : currentLang === 'KY'
            ? 'Ачык-айкын баалар. Ар бир долбоор жер тилкесин изилдөөнү, 9 баллдык сейсмикалык эсептөөнү камтыйт.'
            : currentLang === 'ZH'
            ? '透明规范的设计取费体系，无隐形费用。所有方案均包含场地勘察评估与抗震安全计算。'
            : 'Transparent fixed pricing per square meter tailored to the topography, seismic safety, and scale.'}
        </p>
      </div>

      {/* Main Grid: 3 Pricing Tiers spanning full width */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 my-4 flex-1 items-stretch">
        {TIERS.map((tier) => (
          <div
            key={tier.id}
            onClick={() => setSelectedTier(tier.id)}
            className={`p-4 border flex flex-col justify-between transition-all cursor-pointer relative ${
              selectedTier === tier.id
                ? 'border-neutral-900 bg-neutral-50/90 ring-1 ring-neutral-900'
                : 'border-neutral-200 hover:border-neutral-400 bg-white'
            }`}
          >
            {tier.popular && (
              <span className="absolute -top-2.5 right-3 px-2 py-0.5 bg-neutral-900 text-white text-[9px] font-mono uppercase tracking-wider">
                {currentLang === 'RU' ? 'Выбор заказчиков' : 'Standard'}
              </span>
            )}

            <div>
              <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-1">
                0{tier.id + 1} / ПАКЕТ
              </div>
              <h3 className="font-serif text-lg text-neutral-900 font-medium leading-snug">
                {tier.name}
              </h3>
              <div className="mt-2 mb-3 pb-2.5 border-b border-neutral-200">
                <span className="font-mono text-2xl sm:text-3xl text-neutral-900 font-semibold">
                  ${tier.pricePerM2}
                </span>
                <span className="text-xs font-mono text-neutral-500 ml-1">/ м²</span>
              </div>
              <p className="font-serif text-xs text-neutral-600 font-light mb-3.5 leading-relaxed">
                {tier.description}
              </p>

              <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
                {currentLang === 'RU' ? 'Что входит в проект:' : 'Included deliverables:'}
              </div>
              <ul className="space-y-2 text-xs text-neutral-700">
                {tier.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 font-sans text-xs leading-tight">
                    <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 mt-4 border-t border-neutral-200/80">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedTier(tier.id);
                  onInquire();
                }}
                className={`w-full py-2 text-xs font-sans font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                  selectedTier === tier.id
                    ? 'bg-neutral-900 hover:bg-black text-white'
                    : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-900'
                }`}
              >
                <span>{currentLang === 'RU' ? 'Выбрать этот тариф' : 'Select Package'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Metadata Bar */}
      <div className="pt-3 border-t border-neutral-200 shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <span className="font-serif text-neutral-600 font-light">
          {currentLang === 'RU'
            ? 'Договор заключается с ОсОО "ГРАНД Плюс". Оплата поэтапная (30% аванс, 40% согласование концепта, 30% передача рабочих чертежей).'
            : 'Staged contractual milestones: 30% advance, 40% design freeze approval, 30% delivery of stamped blueprints.'}
        </span>
        <button
          onClick={onInquire}
          className="font-mono text-[11px] text-neutral-900 font-medium hover:underline underline-offset-2 shrink-0 cursor-pointer"
        >
          {currentLang === 'RU' ? 'Получить договор и смету' : 'Request Sample Contract'} →
        </button>
      </div>
    </div>
  );
};
