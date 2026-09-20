import React, { useState, useEffect } from 'react';
import {
  Check,
  ArrowRight,
  ShieldCheck,
  Calculator,
  CheckCircle2,
  Sliders,
  Layers,
  Sparkles,
  RotateCcw,
  CheckSquare,
  Square,
  Building2,
  FileCheck2
} from 'lucide-react';
import { Language } from '../data/translations';
import { PricingSubTab } from '../types';

interface PricingTier {
  id: number;
  popular?: boolean;
  code: string;
  name: string;
  pricePerM2: number;
  description: string;
  features: string[];
  scopeDeliverables: string;
  recommendedFor: string;
}

interface CustomOption {
  id: string;
  category: 'base' | 'engineering' | 'interior' | 'supervision';
  name: string;
  shortCode: string;
  pricePerM2: number;
  description: string;
  badge?: string;
  recommended?: boolean;
}

interface PricingSectionProps {
  onInquire: (customMessage?: string, packageTitle?: string) => void;
  currentLang?: Language;
  activeTab?: PricingSubTab;
  onTabChange?: (tab: PricingSubTab) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onInquire,
  currentLang = 'RU',
  activeTab = 'packages',
  onTabChange,
}) => {
  // Mode: 'packages' (готовые пакеты) vs 'custom' (конструктор своего пакета)
  const [viewMode, setViewMode] = useState<PricingSubTab>(activeTab);

  // Synchronize internal viewMode when activeTab prop changes
  useEffect(() => {
    if (activeTab) {
      setViewMode(activeTab);
    }
  }, [activeTab]);

  const handleModeChange = (newMode: PricingSubTab) => {
    setViewMode(newMode);
    if (onTabChange) {
      onTabChange(newMode);
    }
  };

  // Ready packages state
  const [selectedTierId, setSelectedTierId] = useState<number>(1);
  const [areaM2, setAreaM2] = useState<number>(250);

  // Custom Package Builder state
  // Default selected: AR (Архитектура) + KR (Конструкции)
  const [selectedOptionIds, setSelectedOptionIds] = useState<string[]>([
    'concept',
    'ar',
    'kr'
  ]);

  const TIERS: PricingTier[] = [
    {
      id: 0,
      code: 'CONCEPT',
      name: currentLang === 'RU' ? 'Концептуальный' : currentLang === 'KY' ? 'Концептуалдык' : currentLang === 'ZH' ? '概念方案' : 'Concept Design',
      pricePerM2: 25,
      description: currentLang === 'RU'
        ? 'Объемно-пространственная идея, посадка на рельеф и планировочные решения для предварительной оценки объекта.'
        : currentLang === 'KY'
        ? 'Мейкиндик концепциясы, рельефке ылайыктоо жана пландаштыруу чечимдери.'
        : currentLang === 'ZH'
        ? '建筑空间构想、地形顺应与平面规划方案，适用于前期立项评估。'
        : 'Architectural spatial concept, topography fitting, and layout scheme for initial assessment.',
      scopeDeliverables: currentLang === 'RU' ? 'Альбом ЭП (Эскизный проект) + 3D рендеры' : 'Conceptual Book (EP) + 3D Renders',
      recommendedFor: currentLang === 'RU' ? 'Для оценки участка, бюджета и эстетики' : 'Ideal for land & budget evaluation',
      features: [
        currentLang === 'RU' ? 'Генеральный план и посадка на ландшафт' : 'Master site plan & landscape layout',
        currentLang === 'RU' ? 'Функциональные поэтажные планировки с мебелью' : 'Functional floor plan layouts with furniture',
        currentLang === 'RU' ? '3D фотореалистичные визуализации (4-6 ракурсов)' : 'Photo-realistic 3D exterior renders (4-6 angles)',
        currentLang === 'RU' ? 'Стилевая и колористическая концепция фасадов' : 'Material & color moodboard for facades',
        currentLang === 'RU' ? 'Принципиальная посадка инженерных вводов' : 'Basic utility entry point layout',
      ],
    },
    {
      id: 1,
      code: 'WORKING_AR_KR',
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
      scopeDeliverables: currentLang === 'RU' ? 'Полный рабочий комплект чертежей АР + КР с печатью' : 'Stamped Full Construction Blueprints (AR + KR)',
      recommendedFor: currentLang === 'RU' ? 'Для реального строительства и экспертизы' : 'Required for construction permit & building',
      features: [
        currentLang === 'RU' ? 'Архитектурные решения (Альбом АР в деталях)' : 'Architectural set (Detailed AR documentation)',
        currentLang === 'RU' ? 'Конструктивные расчеты (КР, сейсмика 9 баллов)' : 'Structural calculations (9-point seismic safety)',
        currentLang === 'RU' ? 'Кладочные планы, разрезы и сложные узлы' : 'Detailed masonry, sections & envelope details',
        currentLang === 'RU' ? 'Ведомости объемов и спецификации материалов' : 'Bill of materials & volume estimates',
        currentLang === 'RU' ? 'Теплотехнический расчет ограждающих конструкций' : 'Thermal insulation envelope engineering',
      ],
    },
    {
      id: 2,
      code: 'TURNKEY_FULL',
      name: currentLang === 'RU' ? 'Комплексный "Под ключ"' : currentLang === 'KY' ? 'Комплекстүү "Ачкыч тапшыруу"' : currentLang === 'ZH' ? '全专业交钥匙工程' : 'Turnkey Full-Scope',
      pricePerM2: 70,
      description: currentLang === 'RU'
        ? 'Максимальный объем проектирования: архитектура, несущие конструкции, все инженерные сети, дизайн интерьера и авторский надзор.'
        : currentLang === 'KY'
        ? 'Архитектура, конструкция, инженердик тармактар, интерьер дизайны жана автордук көзөмөл.'
        : currentLang === 'ZH'
        ? '全专业高精度设计：建筑、结构、机电管线、室内精装与现场驻场建筑师监督。'
        : 'End-to-end scope: architecture, structural engineering, MEP services, interior design & construction oversight.',
      scopeDeliverables: currentLang === 'RU' ? 'АР + КР + Инженерия (ОВ, ВК, ЭОМ) + Интерьеры + Надзор' : 'AR + KR + MEP + Interior Design + Site Supervision',
      recommendedFor: currentLang === 'RU' ? 'Для премиальных вилл и бизнес-объектов' : 'For luxury residences & commercial assets',
      features: [
        currentLang === 'RU' ? 'Архитектура (АР) + Конструкции (КР)' : 'Full AR + KR architectural packages',
        currentLang === 'RU' ? 'Инженерные сети (ОВ, ВК, ЭОМ, слаботочные сети)' : 'Full MEP engineering (HVAC, plumbing, electrical)',
        currentLang === 'RU' ? 'Интерьерный дизайн-проект с комплектацией' : 'Complete interior design & FF&E procurement',
        currentLang === 'RU' ? 'Ландшафтная концепция благоустройства' : 'Landscape layout and site lighting scheme',
        currentLang === 'RU' ? 'Авторский надзор за ходом строительства' : 'Architectural site supervision visits',
      ],
    },
  ];

  // Custom Package Builder Options
  const CUSTOM_OPTIONS: CustomOption[] = [
    {
      id: 'concept',
      category: 'base',
      name: currentLang === 'RU' ? 'Эскизный проект и 3D визуализация (ЭП)' : 'Concept & 3D Renderings',
      shortCode: 'ЭП',
      pricePerM2: 15,
      description: currentLang === 'RU'
        ? 'Генплан, фасады, планировки и 4-6 фотореалистичных 3D ракурсов экстерьера.'
        : 'Master plan, floor layouts, elevations, 3D photorealistic exterior visuals.',
      recommended: true,
    },
    {
      id: 'ar',
      category: 'base',
      name: currentLang === 'RU' ? 'Архитектурные решения (Рабочий альбом АР)' : 'Architectural Drawings (AR)',
      shortCode: 'АР',
      pricePerM2: 15,
      description: currentLang === 'RU'
        ? 'Кладочные планы, разрезы, узлы кровли, ведомости окон/дверей и отделки.'
        : 'Masonry plans, detailed architectural sections, roof nodes, window/door schedules.',
      recommended: true,
    },
    {
      id: 'kr',
      category: 'base',
      name: currentLang === 'RU' ? 'Конструктивные решения (Альбом КР, сейсмика 9 баллов)' : 'Structural Calculations (KR 9-point)',
      shortCode: 'КР',
      pricePerM2: 15,
      description: currentLang === 'RU'
        ? 'Фундаменты, ж/б каркас, колонны, ригели, плиты, армирование со спецификациями стали.'
        : 'Foundation, reinforced concrete frame, columns, beams, seismic calculations.',
      recommended: true,
    },
    {
      id: 'ov_vk',
      category: 'engineering',
      name: currentLang === 'RU' ? 'Инженерия: Отопление, Вентиляция, Водопровод и Канализация (ОВ + ВК)' : 'MEP: HVAC & Plumbing (OV + VK)',
      shortCode: 'ОВ+ВК',
      pricePerM2: 10,
      description: currentLang === 'RU'
        ? 'Разводка теплого пола, радиаторов, котельная, водоснабжение, канализация, трассы вентиляции.'
        : 'Hydronic floor heating, boiler room, domestic water supply, drainage & air duct layout.',
    },
    {
      id: 'eom',
      category: 'engineering',
      name: currentLang === 'RU' ? 'Инженерия: Электрооборудование и Освещение (ЭОМ + СС)' : 'Electrical & Low Voltage (EOM + SS)',
      shortCode: 'ЭОМ',
      pricePerM2: 8,
      description: currentLang === 'RU'
        ? 'Силовые сети, щиты, группы розеток, сценарии освещения, интернет, видеонаблюдение.'
        : 'Distribution panels, lighting scenarios, power outlets, weak current & security cabling.',
    },
    {
      id: 'interior',
      category: 'interior',
      name: currentLang === 'RU' ? 'Дизайн интерьера с развертками стен и ведомостями отделки' : 'Interior Design & FF&E Specifications',
      shortCode: 'ИНТЕРЬЕР',
      pricePerM2: 18,
      description: currentLang === 'RU'
        ? '3D визуализации комнат, планы расстановки мебели, развертки плитки, ведомости материалов и мебели.'
        : 'Full interior 3D renders, wall elevations, tile layouts, furniture and finishes procurement list.',
    },
    {
      id: 'landscape',
      category: 'interior',
      name: currentLang === 'RU' ? 'Ландшафтный дизайн и благоустройство участка' : 'Landscape & Exterior Site Design',
      shortCode: 'ЛАНДШАФТ',
      pricePerM2: 6,
      description: currentLang === 'RU'
        ? 'Мощение, террасы, зоны BBQ, сценарии ландшафтного освещения, дендроплан озеленения.'
        : 'Paving, patio dining, BBQ zone, outdoor accent illumination, planting layout.',
    },
    {
      id: 'supervision',
      category: 'supervision',
      name: currentLang === 'RU' ? 'Авторский надзор за строительством (до сдачи коробки)' : 'Architectural Site Supervision',
      shortCode: 'НАДЗОР',
      pricePerM2: 6,
      description: currentLang === 'RU'
        ? 'Регулярные выезды архитектора на объект, контроль соответствия проекту и армирования.'
        : 'Regular on-site architect inspections, quality control, reinforcement sign-offs.',
    },
  ];

  // Calculations for custom builder
  const toggleOption = (id: string) => {
    setSelectedOptionIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const customSelectedOptions = CUSTOM_OPTIONS.filter((opt) => selectedOptionIds.includes(opt.id));
  const customPricePerM2 = customSelectedOptions.reduce((sum, opt) => sum + opt.pricePerM2, 0);
  const customCalculatedTotal = customPricePerM2 * (areaM2 || 0);

  // Ready package calculations
  const currentTier = TIERS.find((t) => t.id === selectedTierId) || TIERS[1];
  const tierCalculatedTotal = currentTier.pricePerM2 * (areaM2 || 0);

  const handleInquireCustomPackage = () => {
    if (customSelectedOptions.length === 0) {
      alert(currentLang === 'RU' ? 'Пожалуйста, выберите хотя бы один пункт для сборки пакета.' : 'Please choose at least one item.');
      return;
    }
    const optionNames = customSelectedOptions.map((o) => `${o.shortCode} ($${o.pricePerM2}/м²)`).join(', ');
    const message = currentLang === 'RU'
      ? `Индивидуально собранный пакет проектирования: [${optionNames}]. Ставка: $${customPricePerM2}/м². Площадь: ${areaM2} м². Ориентировочная сумма: $${customCalculatedTotal.toLocaleString('en-US')}. Прошу подготовить расчет и проект договора.`
      : `Custom assembled package: [${optionNames}]. Rate: $${customPricePerM2}/m². Area: ${areaM2} m². Total estimate: $${customCalculatedTotal.toLocaleString('en-US')}. Please send proposal and contract draft.`;
    
    onInquire(message, `Индивидуальный пакет ($${customPricePerM2}/м²)`);
  };

  const handleSelectTierAndInquire = (tier: PricingTier) => {
    setSelectedTierId(tier.id);
    const message = currentLang === 'RU'
      ? `Выбран пакет проектирования: "${tier.name}" ($${tier.pricePerM2}/м²). Примерная площадь: ${areaM2} м². Ориентировочная стоимость: $${tier.pricePerM2 * areaM2}. Прошу подготовить проект договора.`
      : `Selected architectural package: "${tier.name}" ($${tier.pricePerM2}/m²). Estimated area: ${areaM2} m². Total: $${tier.pricePerM2 * areaM2}. Please send contract draft.`;
    onInquire(message, tier.name);
  };

  return (
    <div className="w-full flex flex-col justify-between p-4 sm:p-5 lg:p-6 bg-white border border-neutral-200/80 min-h-[520px] select-none">
      {/* Top Header & Mode Switcher */}
      <div className="border-b border-neutral-200 pb-3 shrink-0">
        <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <span>02</span>
            <span>/</span>
            <span className="uppercase tracking-widest text-[11px] font-sans text-neutral-600">
              {currentLang === 'RU' ? 'СТОИМОСТЬ И КОНСТРУКТОР ПАКЕТА' : 'PRICING & PACKAGE BUILDER'}
            </span>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="inline-flex p-0.5 bg-neutral-100 border border-neutral-200 text-xs">
            <button
              onClick={() => handleModeChange('packages')}
              className={`px-3 py-1 font-sans transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'packages'
                  ? 'bg-neutral-900 text-white font-medium shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/60'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{currentLang === 'RU' ? 'Готовые пакеты' : 'Ready Packages'}</span>
            </button>
            <button
              onClick={() => handleModeChange('custom')}
              className={`px-3 py-1 font-sans transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'custom'
                  ? 'bg-neutral-900 text-white font-medium shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/60'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>{currentLang === 'RU' ? 'Соберите свой пакет' : 'Build Your Own Package'}</span>
              <span className="text-[9px] font-mono px-1 py-0.2 bg-emerald-500/20 text-emerald-700 font-medium">
                NEW
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-neutral-900 font-normal tracking-tight">
            {viewMode === 'custom'
              ? (currentLang === 'RU' ? 'Конструктор: соберите свой пакет' : 'Build Your Own Package')
              : (currentLang === 'RU' ? 'Готовые пакеты проектирования' : 'Architectural Packages')}
          </h2>
          <span className="text-[11px] font-mono text-neutral-500">
            {viewMode === 'custom'
              ? (currentLang === 'RU' ? 'Отметьте только нужные вам разделы' : 'Check only the services you need')
              : (currentLang === 'RU' ? 'Комплексные фиксированные пакеты' : 'Full fixed-scope packages')}
          </span>
        </div>
        <p className="font-serif text-xs sm:text-sm text-neutral-600 mt-1 font-light max-w-3xl leading-relaxed">
          {viewMode === 'custom'
            ? (currentLang === 'RU'
                ? 'Отмечайте галочками только те разделы документации, которые требуются для вашего объекта. Вы не переплачиваете за лишние чертежи — стоимость за м² и итоговая сумма пересчитываются мгновенно.'
                : 'Select only the engineering and architectural sheets you actually need. Avoid paying for unused drawings with instant live calculation.')
            : (currentLang === 'RU'
                ? 'Классические сбалансированные пакеты под типовые задачи: от эскизной концепции до полного комплекта под ключ.'
                : 'Time-tested balanced packages covering essential needs from initial conceptual plans to turnkey delivery.')}
        </p>
      </div>

      {/* VIEW 1: CUSTOM PACKAGE BUILDER */}
      {viewMode === 'custom' && (
        <div className="my-4 flex-1 flex flex-col justify-between">
          {/* Quick presets for builder */}
          <div className="mb-3 flex items-center justify-between gap-2 flex-wrap text-xs">
            <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-wider">
              {currentLang === 'RU' ? 'Быстрые наборы:' : 'Quick Presets:'}
            </span>
            <div className="flex items-center gap-1.5 flex-wrap">
              <button
                onClick={() => setSelectedOptionIds(['concept', 'ar', 'kr'])}
                className="px-2.5 py-1 text-xs font-sans bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-neutral-800 transition-colors cursor-pointer"
              >
                {currentLang === 'RU' ? 'Стандарт (ЭП + АР + КР)' : 'Standard (EP + AR + KR)'}
              </button>
              <button
                onClick={() => setSelectedOptionIds(['concept', 'ar', 'kr', 'ov_vk', 'eom'])}
                className="px-2.5 py-1 text-xs font-sans bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-neutral-800 transition-colors cursor-pointer"
              >
                {currentLang === 'RU' ? '+ Вся Инженерия' : '+ All MEP'}
              </button>
              <button
                onClick={() => setSelectedOptionIds(CUSTOM_OPTIONS.map((o) => o.id))}
                className="px-2.5 py-1 text-xs font-sans bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-neutral-800 transition-colors cursor-pointer"
              >
                {currentLang === 'RU' ? 'Выбрать всё (Full)' : 'Select All'}
              </button>
              <button
                onClick={() => setSelectedOptionIds(['concept'])}
                className="px-2.5 py-1 text-xs font-sans text-neutral-500 hover:text-neutral-800 transition-colors cursor-pointer flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>{currentLang === 'RU' ? 'Сбросить' : 'Reset'}</span>
              </button>
            </div>
          </div>

          {/* Interactive Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
            {CUSTOM_OPTIONS.map((opt) => {
              const isChecked = selectedOptionIds.includes(opt.id);
              return (
                <div
                  key={opt.id}
                  onClick={() => toggleOption(opt.id)}
                  className={`p-3.5 border transition-all cursor-pointer flex flex-col justify-between select-none relative ${
                    isChecked
                      ? 'border-neutral-900 bg-neutral-50/90 ring-1 ring-neutral-900 shadow-xs'
                      : 'border-neutral-200 bg-white hover:border-neutral-400 hover:bg-neutral-50/40'
                  }`}
                >
                  <div>
                    {/* Top Row: Code + Checkbox */}
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 font-semibold ${
                        isChecked ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-600'
                      }`}>
                        {opt.shortCode}
                      </span>
                      <div className="flex items-center gap-1">
                        {opt.recommended && (
                          <span className="text-[9px] font-mono text-emerald-700 bg-emerald-50 px-1 border border-emerald-200">
                            БАЗОВЫЙ
                          </span>
                        )}
                        <div className={`w-4 h-4 rounded-xs border flex items-center justify-center transition-colors ${
                          isChecked ? 'bg-neutral-900 border-neutral-900 text-white' : 'border-neutral-300 bg-white'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </div>
                    </div>

                    <h4 className={`font-serif text-sm font-medium leading-snug mb-1.5 ${
                      isChecked ? 'text-neutral-950' : 'text-neutral-900'
                    }`}>
                      {opt.name}
                    </h4>

                    <p className="font-serif text-[11px] text-neutral-500 font-light leading-relaxed mb-3">
                      {opt.description}
                    </p>
                  </div>

                  {/* Price Tag */}
                  <div className="pt-2 border-t border-neutral-200/80 flex items-baseline justify-between">
                    <div>
                      <span className="font-mono text-base font-bold text-neutral-900">
                        +${opt.pricePerM2}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-500 ml-0.5">/ м²</span>
                    </div>
                    <span className={`text-[10px] font-mono ${isChecked ? 'text-neutral-900 font-medium' : 'text-neutral-400'}`}>
                      {isChecked ? (currentLang === 'RU' ? 'Включено' : 'Included') : (currentLang === 'RU' ? '+ Добавить' : '+ Add')}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Builder Summary Box & Live Area Calculator */}
          <div className="mt-4 p-4 bg-neutral-900 text-white border border-neutral-900 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  {currentLang === 'RU' ? 'Ваш индивидуальный пакет:' : 'Your Custom Package:'}
                </span>
                <span className="px-2 py-0.5 bg-white/10 text-white text-xs font-mono">
                  {customSelectedOptions.length} {currentLang === 'RU' ? 'из 8 модулей' : 'of 8 modules'}
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold">
                  ${customPricePerM2}/м²
                </span>
              </div>
              <p className="font-serif text-xs text-neutral-300 font-light line-clamp-1">
                {customSelectedOptions.length > 0
                  ? customSelectedOptions.map((o) => o.shortCode).join(' + ')
                  : (currentLang === 'RU' ? 'Ничего не выбрано. Выберите нужные модули выше.' : 'Nothing selected. Choose modules above.')}
              </p>
            </div>

            {/* Area & Totals */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2">
                <label className="text-xs font-sans text-neutral-300 whitespace-nowrap">
                  {currentLang === 'RU' ? 'Площадь:' : 'Area:'}
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min={30}
                    max={5000}
                    step={10}
                    value={areaM2}
                    onChange={(e) => setAreaM2(Math.max(1, Number(e.target.value) || 0))}
                    className="w-20 px-2 py-1 text-xs font-mono font-medium bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:border-white"
                  />
                  <span className="absolute right-2 top-1 text-[11px] font-mono text-neutral-400 pointer-events-none">
                    м²
                  </span>
                </div>
              </div>

              {/* Total Calculation */}
              <div className="flex items-baseline gap-1.5 pl-2 border-l border-neutral-800">
                <span className="text-xs font-mono text-neutral-400">
                  {currentLang === 'RU' ? 'Итого:' : 'Total:'}
                </span>
                <span className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight">
                  ${customCalculatedTotal.toLocaleString('en-US')}
                </span>
                <span className="text-[10px] font-mono text-neutral-400 hidden sm:inline">
                  (~{(customCalculatedTotal * 87).toLocaleString('ru-RU')} сом)
                </span>
              </div>

              {/* Inquire with custom bundle */}
              <button
                onClick={handleInquireCustomPackage}
                className="px-4 py-2 bg-white text-neutral-900 hover:bg-neutral-100 text-xs font-sans font-medium transition-colors cursor-pointer flex items-center gap-1.5 shrink-0"
              >
                <span>{currentLang === 'RU' ? 'Заказать этот пакет' : 'Order This Custom Package'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: READY PACKAGES */}
      {viewMode === 'packages' && (
        <div className="my-4 flex-1 flex flex-col justify-between">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 my-2 flex-1 items-stretch">
            {TIERS.map((tier) => {
              const isSelected = selectedTierId === tier.id;
              return (
                <div
                  key={tier.id}
                  onClick={() => setSelectedTierId(tier.id)}
                  className={`p-4 sm:p-5 border flex flex-col justify-between transition-all cursor-pointer relative ${
                    isSelected
                      ? 'border-neutral-900 bg-neutral-50/90 shadow-xs ring-1 ring-neutral-900'
                      : 'border-neutral-200 hover:border-neutral-400 bg-white hover:bg-neutral-50/40'
                  }`}
                >
                  <div className="absolute -top-2.5 right-3 flex items-center gap-1.5">
                    {isSelected ? (
                      <span className="px-2 py-0.5 bg-neutral-900 text-white text-[9px] font-mono uppercase tracking-wider flex items-center gap-1">
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                        <span>{currentLang === 'RU' ? 'ВЫБРАН ВАМИ' : 'SELECTED'}</span>
                      </span>
                    ) : tier.popular ? (
                      <span className="px-2 py-0.5 bg-neutral-200 text-neutral-800 text-[9px] font-mono uppercase tracking-wider">
                        {currentLang === 'RU' ? 'ХИТ ЗАКАЗОВ' : 'POPULAR'}
                      </span>
                    ) : null}
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-1.5">
                      <span>0{tier.id + 1} / ПАКЕТ</span>
                      <span className="text-neutral-500 font-sans">{tier.recommendedFor}</span>
                    </div>

                    <div className="flex items-start justify-between gap-2">
                      <h3 className={`font-serif text-lg sm:text-xl font-medium leading-snug ${isSelected ? 'text-neutral-950' : 'text-neutral-900'}`}>
                        {tier.name}
                      </h3>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isSelected
                            ? 'border-neutral-900 bg-neutral-900 text-white'
                            : 'border-neutral-300 bg-white'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 stroke-[2.5]" />}
                      </div>
                    </div>

                    <div className="mt-2.5 mb-3 pb-2.5 border-b border-neutral-200 flex items-baseline justify-between">
                      <div>
                        <span className="font-mono text-2xl sm:text-3xl text-neutral-900 font-semibold tracking-tight">
                          ${tier.pricePerM2}
                        </span>
                        <span className="text-xs font-mono text-neutral-500 ml-1">/ м²</span>
                      </div>
                      <span className="text-[11px] font-mono text-neutral-500">
                        ~{(tier.pricePerM2 * 87).toLocaleString('ru-RU')} сом/м²
                      </span>
                    </div>

                    <p className="font-serif text-xs text-neutral-600 font-light mb-3 leading-relaxed">
                      {tier.description}
                    </p>

                    <div className="bg-white/80 p-2 border border-neutral-200/70 mb-3 text-[11px] font-mono text-neutral-700">
                      <span className="text-neutral-400 block text-[9px] uppercase tracking-wider mb-0.5">
                        {currentLang === 'RU' ? 'Итог к выдаче:' : 'Deliverables:'}
                      </span>
                      <span className="font-medium text-neutral-900">{tier.scopeDeliverables}</span>
                    </div>

                    <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
                      {currentLang === 'RU' ? 'Состав документации:' : 'Included deliverables:'}
                    </div>
                    <ul className="space-y-1.5 text-xs text-neutral-700">
                      {tier.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 font-sans text-xs leading-tight">
                          <Check className="w-3.5 h-3.5 text-neutral-900 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 mt-4 border-t border-neutral-200/80">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectTierAndInquire(tier);
                      }}
                      className={`w-full py-2.5 px-3 text-xs font-sans font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        isSelected
                          ? 'bg-neutral-900 hover:bg-black text-white shadow-xs'
                          : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-900'
                      }`}
                    >
                      <span>
                        {isSelected
                          ? (currentLang === 'RU' ? 'Заказать этот пакет' : 'Order Selected Package')
                          : (currentLang === 'RU' ? 'Выбрать этот пакет' : 'Select This Package')}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Calculator for Ready Package */}
          <div className="my-2 p-3.5 sm:p-4 bg-neutral-50 border border-neutral-200 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white border border-neutral-300 flex items-center justify-center shrink-0">
                <Calculator className="w-4 h-4 text-neutral-700" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-medium text-neutral-900 uppercase">
                    {currentLang === 'RU' ? 'Калькулятор выбранного пакета:' : 'Selected Package Calculator:'}
                  </span>
                  <span className="text-xs font-serif font-semibold text-neutral-900 bg-white px-2 py-0.5 border border-neutral-200">
                    {currentTier.name} (${currentTier.pricePerM2}/м²)
                  </span>
                </div>
                <span className="text-[11px] font-sans text-neutral-500">
                  {currentLang === 'RU'
                    ? 'Укажите ориентировочную площадь для расчета стоимости проектирования'
                    : 'Enter your approximate building square meters to see total estimate'}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2">
                <label className="text-xs font-sans text-neutral-600 whitespace-nowrap">
                  {currentLang === 'RU' ? 'Площадь:' : 'Area:'}
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min={50}
                    max={5000}
                    step={10}
                    value={areaM2}
                    onChange={(e) => setAreaM2(Math.max(1, Number(e.target.value) || 0))}
                    className="w-24 px-2.5 py-1 text-xs font-mono font-medium bg-white border border-neutral-300 text-neutral-900 focus:outline-none focus:border-neutral-900"
                  />
                  <span className="absolute right-2 top-1 text-[11px] font-mono text-neutral-400 pointer-events-none">
                    м²
                  </span>
                </div>
              </div>

              <div className="flex items-baseline gap-1.5 pl-2 sm:border-l sm:border-neutral-200">
                <span className="text-xs font-mono text-neutral-500">
                  {currentLang === 'RU' ? 'Итого:' : 'Total:'}
                </span>
                <span className="font-mono text-lg sm:text-xl font-bold text-neutral-950">
                  ${tierCalculatedTotal.toLocaleString('en-US')}
                </span>
              </div>

              <button
                onClick={() => handleSelectTierAndInquire(currentTier)}
                className="px-3.5 py-1.5 bg-neutral-900 hover:bg-black text-white text-xs font-sans font-medium transition-colors cursor-pointer flex items-center gap-1 shrink-0"
              >
                <span>{currentLang === 'RU' ? 'Оформить заявку' : 'Send Inquiry'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Legal & Milestone Guarantee Bar */}
      <div className="pt-3 border-t border-neutral-200 shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-3 text-neutral-600 font-serif text-xs font-light">
          <ShieldCheck className="w-4 h-4 text-neutral-700 shrink-0" />
          <span>
            {currentLang === 'RU'
              ? 'Официальный договор с ОсОО "ГРАНД Плюс". Поэтапная оплата: 30% аванс, 40% согласование концепта, 30% передача чертежей с печатью.'
              : 'Official agreement with GRAND Plus LLC. Milestones: 30% advance, 40% design freeze approval, 30% final blueprint delivery.'}
          </span>
        </div>
        <button
          onClick={() => {
            if (viewMode === 'custom') {
              handleInquireCustomPackage();
            } else {
              handleSelectTierAndInquire(currentTier);
            }
          }}
          className="font-mono text-[11px] text-neutral-900 font-medium hover:underline underline-offset-2 shrink-0 cursor-pointer text-left sm:text-right"
        >
          {currentLang === 'RU' ? 'Запросить коммерческое предложение с расчетом' : 'Request Proposal with Itemized Breakdown'} →
        </button>
      </div>
    </div>
  );
};
