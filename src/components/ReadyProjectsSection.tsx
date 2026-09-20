import React, { useState } from 'react';
import { Layers, Check, ArrowRight, Download, Filter, Home, BedDouble, Maximize2 } from 'lucide-react';
import { Language } from '../data/translations';
import t3Img from '../assets/images/t3_house_kamakura_1789388520270.jpg';
import tranquilityImg from '../assets/images/tranquility_villa_1789388564627.jpg';

interface ReadyProjectsSectionProps {
  onInquire: (projectName?: string) => void;
  currentLang?: Language;
}

interface ReadyProject {
  id: string;
  name: string;
  code: string;
  area: number;
  floors: number;
  bedrooms: number;
  dimensions: string;
  style: string;
  image: string;
  priceUSD: number;
  description: string;
  specs: string[];
}

export const ReadyProjectsSection: React.FC<ReadyProjectsSectionProps> = ({
  onInquire,
  currentLang = 'RU',
}) => {
  const [filter, setFilter] = useState<'all' | 'compact' | 'medium' | 'large'>('all');
  const [selectedProject, setSelectedProject] = useState<ReadyProject | null>(null);

  const PROJECTS: ReadyProject[] = [
    {
      id: 'ala-archa-245',
      name: currentLang === 'RU' ? 'Вилла «Ала-Арча 245»' : 'Villa Ala-Archa 245',
      code: 'GP-245-AA',
      area: 245,
      floors: 2,
      bedrooms: 3,
      dimensions: '14.2 × 11.6 м',
      style: currentLang === 'RU' ? 'Альпийский минимализм' : 'Alpine Minimalism',
      image: t3Img,
      priceUSD: 2400,
      description: currentLang === 'RU'
        ? 'Компактная двухэтажная резиденция с панорамной гостиной и вторым светом, навесом на 2 автомобиля и крытой террасой с камином.'
        : 'Two-story minimalist villa with double-height living room, 2-car carport, and sheltered fireplace terrace.',
      specs: [
        currentLang === 'RU' ? 'Комплект АР (Архитектура) — 38 листов' : 'Architectural drawings (AR) — 38 sheets',
        currentLang === 'RU' ? 'Комплект КР (Сейсмика 9 баллов) — 46 листов' : 'Structural drawings (KR) — 46 sheets',
        currentLang === 'RU' ? 'Ведомость материалов и спецификации' : 'Full Bill of Materials & Volumes',
        currentLang === 'RU' ? '3D-модель для бригады строителей' : 'BIM/3D model for construction crew',
      ],
    },
    {
      id: 'issyk-kul-340',
      name: currentLang === 'RU' ? 'Резиденция «Иссык-Куль 340»' : 'Residence Issyk-Kul 340',
      code: 'GP-340-IK',
      area: 340,
      floors: 2,
      bedrooms: 4,
      dimensions: '17.5 × 13.8 м',
      style: currentLang === 'RU' ? 'Неомодерн со спа-зоной' : 'Contemporary Spa Villa',
      image: tranquilityImg,
      priceUSD: 3200,
      description: currentLang === 'RU'
        ? 'Просторный загородный дом с изолированной мастер-зоной на втором этаже, банным комплексом на первом этаже и эксплуатируемой плоской кровлей.'
        : 'Spacious retreat featuring an isolated master suite, integrated sauna wellness zone, and accessible green roof deck.',
      specs: [
        currentLang === 'RU' ? 'Комплект АР (Архитектура) — 48 листов' : 'Architectural drawings (AR) — 48 sheets',
        currentLang === 'RU' ? 'Комплект КР (Монолитный каркас) — 58 листов' : 'Structural drawings (KR) — 58 sheets',
        currentLang === 'RU' ? 'Инженерные узлы подключения сетей' : 'MEP hookup nodes & utility diagrams',
        currentLang === 'RU' ? 'Адаптация фундамента под грунт за 5 дней' : 'Free foundation adaptation within 5 days',
      ],
    },
    {
      id: 'chon-kemin-190',
      name: currentLang === 'RU' ? 'Шале «Чон-Кемин 190»' : 'Chalet Chon-Kemin 190',
      code: 'GP-190-CK',
      area: 190,
      floors: 1,
      bedrooms: 3,
      dimensions: '16.0 × 12.4 м',
      style: currentLang === 'RU' ? 'Одноэтажное эко-шале' : 'Single-story Timber & Stone Chalet',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      priceUSD: 1950,
      description: currentLang === 'RU'
        ? 'Уютный одноэтажный дом без лестниц, идеальный для семейного отдыха. Фасад из камня Сары-Таш и тянь-шаньской термодревесины.'
        : 'Zero-step single-level chalet optimized for mountain living, cladded in Sary-Tash stone and heat-treated local spruce.',
      specs: [
        currentLang === 'RU' ? 'Комплект АР (Архитектура) — 32 листа' : 'Architectural drawings (AR) — 32 sheets',
        currentLang === 'RU' ? 'Комплект КР (Ленточный/плитный фундамент)' : 'Structural drawings (KR) — 36 sheets',
        currentLang === 'RU' ? 'Карта раскладки бруса и стропильной системы' : 'Timber frame cut-sheets & truss details',
        currentLang === 'RU' ? 'Готовность к выдаче: немедленно' : 'Instant delivery via cloud drive',
      ],
    },
    {
      id: 'arashan-420',
      name: currentLang === 'RU' ? 'Гранд-Вилла «Арашан 420»' : 'Grand Villa Arashan 420',
      code: 'GP-420-AR',
      area: 420,
      floors: 3,
      bedrooms: 5,
      dimensions: '19.8 × 15.2 м',
      style: currentLang === 'RU' ? 'Премиальный контемпорари' : 'High-End Contemporary',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      priceUSD: 3900,
      description: currentLang === 'RU'
        ? 'Флагманский проект трехуровневой резиденции с цокольным винным погребом, кинозалом, гаражом на 3 авто и бассейном на террасе.'
        : 'Three-level luxury residence with underground cellar, cinema room, 3-car garage, and cantilevered infinity swimming pool.',
      specs: [
        currentLang === 'RU' ? 'Полный комплект АР+КР — 115 листов' : 'Full AR+KR blueprints set — 115 sheets',
        currentLang === 'RU' ? 'Расчет подпорных стен для сложного склона' : 'Retaining wall structural calculations',
        currentLang === 'RU' ? '3D-тур и видео-облет объекта' : 'Interactive 3D walkthrough & exterior flyover',
        currentLang === 'RU' ? '3 выезда архитектора на привязку к участку' : '3 on-site architect topography visits',
      ],
    },
    {
      id: 'karakol-280',
      name: currentLang === 'RU' ? 'Вилла «Каракол 280»' : 'Villa Karakol 280',
      code: 'GP-280-KR',
      area: 280,
      floors: 2,
      bedrooms: 4,
      dimensions: '15.6 × 12.8 м',
      style: currentLang === 'RU' ? 'Горное шале с террасой' : 'Alpine Timber Chalet',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      priceUSD: 2750,
      description: currentLang === 'RU'
        ? 'Энергоэффективный дом с усиленным утеплением для предгорий, каминным залом и панорамным остеклением на Тянь-Шань.'
        : 'High-efficiency thermal envelope residence with double-glazed mountain panorama and natural stone fireplace.',
      specs: [
        currentLang === 'RU' ? 'Комплект АР (Архитектура) — 42 листа' : 'Architectural drawings (AR) — 42 sheets',
        currentLang === 'RU' ? 'Комплект КР (Снеговая нагрузка V район)' : 'Structural drawings (High snow-load zone)',
        currentLang === 'RU' ? 'Спецификация теплового контура' : 'Thermal efficiency insulation spec',
        currentLang === 'RU' ? 'Развертки фасадов в материалах' : 'Exterior material elevation details',
      ],
    },
    {
      id: 'bosteri-175',
      name: currentLang === 'RU' ? 'Коттедж «Бостери 175»' : 'Cottage Bosteri 175',
      code: 'GP-175-BS',
      area: 175,
      floors: 1,
      bedrooms: 3,
      dimensions: '14.0 × 11.2 м',
      style: currentLang === 'RU' ? 'Курортный минимализм' : 'Lakeside Minimalist Villa',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      priceUSD: 1850,
      description: currentLang === 'RU'
        ? 'Легкий и светлый дом с патио, летней кухней и открытым бассейном для побережья озера Иссык-Куль.'
        : 'Airy summer residence featuring outdoor patio dining, summer kitchenette, and direct garden flow.',
      specs: [
        currentLang === 'RU' ? 'Комплект АР (Архитектура) — 30 листов' : 'Architectural drawings (AR) — 30 sheets',
        currentLang === 'RU' ? 'Комплект КР (Сейсмика 9 баллов)' : 'Structural drawings (KR) — 34 sheets',
        currentLang === 'RU' ? 'Инженерные узлы летней террасы' : 'Outdoor patio engineering schematics',
        currentLang === 'RU' ? 'Готовность к выдаче: немедленно' : 'Instant delivery via cloud drive',
      ],
    },
  ];

  const filtered = PROJECTS.filter((p) => {
    if (filter === 'compact') return p.area <= 200;
    if (filter === 'medium') return p.area > 200 && p.area <= 300;
    if (filter === 'large') return p.area > 300;
    return true;
  });

  return (
    <div className="w-full flex flex-col justify-between p-4 sm:p-5 lg:p-6 bg-white border border-neutral-200/80 min-h-[480px] lg:min-h-[500px] select-none">
      {/* Top Header */}
      <div className="border-b border-neutral-200 pb-2.5 sm:pb-3 shrink-0">
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-0.5">
          <span>04</span>
          <span>/</span>
          <span className="uppercase tracking-widest text-[11px] font-sans text-neutral-600">
            {currentLang === 'RU' ? 'ГОТОВЫЕ ПРОЕКТЫ' : currentLang === 'KY' ? 'ДАЯР ДОЛБООРЛОР' : currentLang === 'ZH' ? '成熟方案' : 'READY PROJECTS'}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-neutral-900 font-normal tracking-tight">
            {currentLang === 'RU'
              ? 'Каталог готовых авторских проектов'
              : currentLang === 'KY'
              ? 'Автордук даяр долбоорлордун каталогу'
              : currentLang === 'ZH'
              ? '可即时落地的精选建筑设计图纸'
              : 'Turnkey Pre-Designed Architecture'}
          </h2>
          <span className="text-[11px] font-mono text-neutral-500">
            {currentLang === 'RU' ? 'Чертежи АР+КР готовы к строительству' : 'Complete AR+KR Stamped Blueprints'}
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mt-1.5">
          <p className="font-serif text-xs sm:text-sm text-neutral-600 font-light max-w-2xl">
            {currentLang === 'RU'
              ? 'Экономьте до 4-6 месяцев на стадии проектирования. Все проекты уже проверены на сейсмостойкость 9 баллов и адаптируются под ваш участок за 7 дней.'
              : 'Save 4–6 months on design lead time. Certified for 9-magnitude earthquakes and quickly adaptable to your parcel.'}
          </p>

          {/* Area Filter Tabs */}
          <div className="flex items-center gap-1.5 shrink-0 bg-neutral-100 p-1 border border-neutral-200 text-xs font-mono">
            <button
              onClick={() => setFilter('all')}
              className={`px-2.5 py-1 transition-colors cursor-pointer ${
                filter === 'all' ? 'bg-white text-neutral-900 shadow-xs font-medium' : 'text-neutral-600 hover:text-black'
              }`}
            >
              {currentLang === 'RU' ? 'Все' : 'All'}
            </button>
            <button
              onClick={() => setFilter('compact')}
              className={`px-2.5 py-1 transition-colors cursor-pointer ${
                filter === 'compact' ? 'bg-white text-neutral-900 shadow-xs font-medium' : 'text-neutral-600 hover:text-black'
              }`}
            >
              &le; 200 м²
            </button>
            <button
              onClick={() => setFilter('medium')}
              className={`px-2.5 py-1 transition-colors cursor-pointer ${
                filter === 'medium' ? 'bg-white text-neutral-900 shadow-xs font-medium' : 'text-neutral-600 hover:text-black'
              }`}
            >
              200–300 м²
            </button>
            <button
              onClick={() => setFilter('large')}
              className={`px-2.5 py-1 transition-colors cursor-pointer ${
                filter === 'large' ? 'bg-white text-neutral-900 shadow-xs font-medium' : 'text-neutral-600 hover:text-black'
              }`}
            >
              300+ м²
            </button>
          </div>
        </div>
      </div>

      {/* Projects Grid: 3 columns in a row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 my-4 flex-1">
        {filtered.map((proj) => (
          <div
            key={proj.id}
            className="border border-neutral-200 bg-white hover:border-neutral-400 hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden"
          >
            <div>
              {/* Image Preview with Specs Overlay */}
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 border-b border-neutral-200">
                <img
                  src={proj.image}
                  alt={proj.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 bg-neutral-900/90 text-white font-mono text-[9px] px-2 py-0.5 uppercase tracking-wider backdrop-blur-xs">
                  {proj.code}
                </div>
                <div className="absolute bottom-2 right-2 bg-white/95 text-neutral-900 font-mono text-xs font-medium px-2 py-0.5 border border-neutral-200 shadow-xs">
                  ${proj.priceUSD.toLocaleString()}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-3">
                <div className="text-[10px] font-mono text-neutral-500 mb-0.5 uppercase tracking-wider">
                  {proj.style}
                </div>
                <h3 className="font-serif text-base text-neutral-900 font-medium leading-snug mb-2">
                  {proj.name}
                </h3>

                {/* Dimensions & Specs pills */}
                <div className="grid grid-cols-3 gap-1 py-2 border-y border-neutral-200/80 text-[11px] font-mono text-neutral-700 mb-2.5">
                  <div className="flex flex-col items-center justify-center p-1 bg-neutral-50 border border-neutral-100">
                    <span className="text-[9px] text-neutral-400">ПЛОЩАДЬ</span>
                    <span className="font-medium text-neutral-900">{proj.area} м²</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-1 bg-neutral-50 border border-neutral-100">
                    <span className="text-[9px] text-neutral-400">ЭТАЖИ</span>
                    <span className="font-medium text-neutral-900">{proj.floors} эт.</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-1 bg-neutral-50 border border-neutral-100">
                    <span className="text-[9px] text-neutral-400">СПАЛЬНИ</span>
                    <span className="font-medium text-neutral-900">{proj.bedrooms} сп.</span>
                  </div>
                </div>

                <p className="font-serif text-xs text-neutral-600 font-light leading-relaxed mb-3 line-clamp-2">
                  {proj.description}
                </p>

                <div className="space-y-1">
                  {proj.specs.slice(0, 2).map((sp, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] font-sans text-neutral-600">
                      <Check className="w-3 h-3 text-emerald-700 shrink-0" />
                      <span className="truncate">{sp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="p-3 pt-0">
              <button
                onClick={() => onInquire(proj.name)}
                className="w-full py-2 bg-neutral-900 hover:bg-black text-white text-xs font-sans font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{currentLang === 'RU' ? 'Адаптировать под участок' : 'Order & Adapt to Plot'}</span>
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
            ? 'В стоимость входит передача альбомов АР и КР в формате PDF и DWG + 1 выезд архитектора для посадки здания на ваш участок.'
            : 'All packages include certified AR/KR albums in PDF & DWG formats plus on-site topography adaptation.'}
        </span>
        <button
          onClick={() => onInquire('Каталог готовых проектов')}
          className="font-mono text-[11px] text-neutral-900 font-medium hover:underline underline-offset-2 shrink-0 cursor-pointer"
        >
          {currentLang === 'RU' ? 'Запросить полный PDF-каталог (36 проектов)' : 'Request Full 36-Project Catalog'} →
        </button>
      </div>
    </div>
  );
};
