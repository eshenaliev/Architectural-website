import React, { useState } from 'react';
import { 
  Compass, 
  Columns, 
  ShieldCheck, 
  Sparkles, 
  Scale, 
  CheckCircle2, 
  Layers
} from 'lucide-react';

export const ClassicalArchitecturePhilosophy: React.FC = () => {
  // Classical Order Proportion Interactive Calculator
  const [selectedOrder, setSelectedOrder] = useState<'doric' | 'ionic' | 'corinthian'>('corinthian');
  const [facadeHeight, setFacadeHeight] = useState<number>(10); // meters

  const ordersData = {
    doric: {
      name: 'Дорический ордер',
      ratio: '1:8',
      character: 'Мужественность, строгость, монументальная сила',
      idealFor: 'Цокольные ярусы, стилобаты, загородные въездные группы',
      columnRatio: 8,
      entablatureRatio: 0.25,
      pedimentAngle: '24°'
    },
    ionic: {
      name: 'Ионический ордер',
      ratio: '1:9',
      character: 'Изящество, грация, волюты с золотой спиралью',
      idealFor: 'Портики загородных усадеб, бельведеры, террасы с видом на горы',
      columnRatio: 9,
      entablatureRatio: 0.22,
      pedimentAngle: '22°'
    },
    corinthian: {
      name: 'Коринфский ордер',
      ratio: '1:10',
      character: 'Торжественность, резные листья аканта, триумфальная стать',
      idealFor: 'Парадные фасады премиальных резиденций, клубные дома, залы приемов',
      columnRatio: 10,
      entablatureRatio: 0.2,
      pedimentAngle: '20°'
    }
  };

  const currentOrder = ordersData[selectedOrder];
  const columnDiameter = (facadeHeight / currentOrder.columnRatio).toFixed(2);
  const entablatureHeight = (facadeHeight * currentOrder.entablatureRatio).toFixed(2);
  const goldenWidth = (facadeHeight * 1.618).toFixed(1);

  const vitruvianPrinciples = [
    {
      latin: 'FIRMITAS',
      title: 'Прочность & Монолитность',
      desc: 'Несущий монолитный железобетонный каркас высшей категории надёжности. Пространственный расчет в ЛИРА-САПР и SCAD на прямое сейсмическое воздействие 9 баллов СНиП КР 20-02:2018.',
      icon: ShieldCheck
    },
    {
      latin: 'UTILITAS',
      title: 'Польза & Эргономика',
      desc: 'Логика планировок от Андреа Палладио: парадные анфиладные оси, идеальная ориентация комнат по сторонам света с видом на Тянь-Шань, скрытые премиальные инженерные коммуникации.',
      icon: Scale
    },
    {
      latin: 'VENUSTAS',
      title: 'Красота & Золотое Сечение',
      desc: 'Гармония пропорций (Ф = 1.618). Выверенные ордерные карнизы, колоннады из цельного камня, авторская гипсовая лепнина и ручная резьба по кыргызскому травертину Сары-Таш.',
      icon: Sparkles
    }
  ];

  const classicMaterials = [
    {
      name: 'Травертин Сары-Таш (Кыргызстан)',
      origin: 'Ошская область, месторождение Сары-Таш',
      desc: 'Благородный теплый камень медового оттенка. Морозостоек, превосходно дышит и приобретает благородный тон с годами.',
      use: 'Облицовка основных фасадов, пилястры, резные сандрики и карнизы'
    },
    {
      name: 'Куртинский Гранит & Базальт',
      origin: 'Центральная Азия',
      desc: 'Высокопрочный натуральный камень с нулевым водопоглощением. Защищает здание от влаги, снега и грунтовых вод.',
      use: 'Рустованный цокольный ярус, стилобат, парадные лестницы и балюстрады'
    },
    {
      name: 'Белый Мрамор & Оникс',
      origin: 'Месторождения Коелга и Carrara',
      desc: 'Скульптурная пластичность и глубина полупрозрачного рисунка. Идеален для парадных залов и фонтанных групп.',
      use: 'Внутренние колонны, порталы каминов, курватуры парадных лестниц'
    },
    {
      name: 'Медь и Натуральный Сланец',
      origin: 'Европейские карьеры',
      desc: 'Кровельные материалы со сроком службы более 150 лет. С годами медь покрывается благородной малахитовой патиной.',
      use: 'Шпилевые завершения, купола ротонд, карнизные отливы и кровля мансард'
    }
  ];

  return (
    <section id="philosophy" className="py-24 sm:py-32 bg-[#16171a] relative overflow-hidden border-t border-[#c5a880]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-serif tracking-[0.25em] text-[#c5a880] uppercase mb-4">
            <Compass className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>ФИЛОСОФИЯ ЗОДЧЕСТВА БЮРО</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#f4efe6] tracking-tight leading-[1.1]">
            Каноны Вневременной <br />
            <span className="italic text-[#c5a880]">
              Классической Архитектуры
            </span>
          </h2>
          <p className="mt-5 text-sm sm:text-base text-[#a89f91] font-light leading-relaxed font-sans">
            «Красота есть согласие частей в едином целом, при котором ни одна деталь не может быть добавлена или отнята без нарушения совершенства» — Леон Баттиста Альберти. Мы проектируем здания, которые передаются по наследству.
          </p>
        </div>

        {/* The Vitruvian Triad (3 Pillars) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {vitruvianPrinciples.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.latin}
                className="classic-frame p-8 flex flex-col justify-between space-y-6 relative hover:border-[#c5a880]/60 transition-all duration-300"
              >
                <div className="classic-tick-tl" />
                <div className="classic-tick-br" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-serif tracking-[0.25em] text-[#c5a880] uppercase border-b border-[#c5a880]/40 pb-1">
                      {pillar.latin}
                    </span>
                    <Icon className="w-5 h-5 text-[#c5a880]" />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#f4efe6]">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#a89f91] leading-relaxed font-light font-sans">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#c5a880]/15 flex items-center justify-between text-[11px] font-serif text-[#8c8477]">
                  <span>Канон зодчества</span>
                  <span className="text-[#c5a880]">0{idx + 1} // ПРИНЦИП</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Classical Proportion Studio (Golden Ratio & Order Calculation) */}
        <div className="classic-frame p-8 sm:p-12 mb-20 relative">
          <div className="classic-tick-tl" />
          <div className="classic-tick-br" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Interactive Order Selectors */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-serif uppercase tracking-[0.2em] text-[#c5a880]">
                  Интерактивный расчет пропорций
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#f4efe6] font-normal">
                  Модульная система Палладио & Золотое Сечение
                </h3>
                <p className="text-xs sm:text-sm text-[#a89f91] font-light leading-relaxed">
                  В классической архитектуре все размеры здания рассчитываются через диаметр колонны (модуль). Выберите ордер и высоту фасада:
                </p>
              </div>

              {/* Order selector tabs */}
              <div className="grid grid-cols-3 gap-2 font-serif text-xs">
                {(['doric', 'ionic', 'corinthian'] as const).map((ord) => (
                  <button
                    key={ord}
                    onClick={() => setSelectedOrder(ord)}
                    className={`py-3 px-2 border text-center transition-all cursor-pointer uppercase tracking-wider ${
                      selectedOrder === ord
                        ? 'border-[#c5a880] bg-[#c5a880] text-[#121315] font-medium'
                        : 'border-[#c5a880]/25 text-[#a89f91] hover:border-[#c5a880]/60 bg-[#121315]'
                    }`}
                  >
                    {ordersData[ord].name.split(' ')[0]}
                  </button>
                ))}
              </div>

              {/* Slider for facade height */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs font-serif">
                  <span className="text-[#a89f91]">Заданная высота колоннады / портика:</span>
                  <span className="text-[#c5a880] font-medium text-sm">{facadeHeight} метров</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="20"
                  step="0.5"
                  value={facadeHeight}
                  onChange={(e) => setFacadeHeight(parseFloat(e.target.value))}
                  className="w-full h-1 bg-[#252830] rounded-lg appearance-none cursor-pointer accent-[#c5a880]"
                />
              </div>

              <div className="p-4 border border-[#c5a880]/20 bg-[#121315]/80 space-y-2">
                <div className="text-xs font-serif text-[#c5a880] font-medium uppercase tracking-wider">
                  {currentOrder.name} ({currentOrder.ratio})
                </div>
                <div className="text-xs text-[#d5cfc5] font-light">
                  {currentOrder.character}. <span className="text-[#a89f91]">{currentOrder.idealFor}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Mathematical Classical Proportions */}
            <div className="lg:col-span-6 bg-[#121315] border border-[#c5a880]/30 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-[#c5a880]/20 pb-4">
                <div className="font-serif text-sm tracking-wider uppercase text-[#c5a880]">
                  Геометрия Золотого Сечения (Φ = 1.618)
                </div>
                <div className="text-[10px] font-serif uppercase tracking-widest text-[#8c8477]">
                  СНиП КР / АР-101
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-serif">
                <div className="p-3 border border-[#c5a880]/15 bg-[#16171a]">
                  <span className="text-[10px] text-[#8c8477] uppercase block tracking-wider">Диаметр колонны (D)</span>
                  <span className="text-lg text-[#f4efe6] font-medium mt-1 block">Ø {columnDiameter} м</span>
                  <span className="text-[10px] text-[#a89f91]">Модуль здания H / {currentOrder.columnRatio}</span>
                </div>

                <div className="p-3 border border-[#c5a880]/15 bg-[#16171a]">
                  <span className="text-[10px] text-[#8c8477] uppercase block tracking-wider">Антаблемент (H_ant)</span>
                  <span className="text-lg text-[#c5a880] font-medium mt-1 block">{entablatureHeight} м</span>
                  <span className="text-[10px] text-[#a89f91]">Архитрав + Фриз + Карниз</span>
                </div>

                <div className="p-3 border border-[#c5a880]/15 bg-[#16171a]">
                  <span className="text-[10px] text-[#8c8477] uppercase block tracking-wider">Гармоническая ширина</span>
                  <span className="text-lg text-[#f4efe6] font-medium mt-1 block">{goldenWidth} м</span>
                  <span className="text-[10px] text-[#a89f91]">Пропорция H × 1.618</span>
                </div>

                <div className="p-3 border border-[#c5a880]/15 bg-[#16171a]">
                  <span className="text-[10px] text-[#8c8477] uppercase block tracking-wider">Уклон фронтона</span>
                  <span className="text-lg text-[#c5a880] font-medium mt-1 block">{currentOrder.pedimentAngle}</span>
                  <span className="text-[10px] text-[#a89f91]">Античный тимпан</span>
                </div>
              </div>

              <div className="text-[11px] text-[#8c8477] font-light leading-relaxed pt-2 border-t border-[#c5a880]/15 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span>Все параметры автоматически рассчитываются архитекторами бюро при разработке раздела АР (Архитектурные Решения).</span>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Noble Classical Materials */}
        <div>
          <div className="mb-10 text-center sm:text-left">
            <span className="text-xs font-serif uppercase tracking-[0.25em] text-[#c5a880]">
              Материаловедение зодчества
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl text-[#f4efe6] font-normal mt-1">
              Благородные природные материалы вечности
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {classicMaterials.map((mat) => (
              <div
                key={mat.name}
                className="p-6 border border-[#c5a880]/20 bg-[#121315]/70 flex flex-col justify-between space-y-4 hover:border-[#c5a880]/50 transition-all"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-serif uppercase tracking-wider text-[#c5a880]">
                    {mat.origin}
                  </span>
                  <h4 className="font-serif text-lg text-[#f4efe6] font-medium">
                    {mat.name}
                  </h4>
                  <p className="text-xs text-[#a89f91] font-light leading-relaxed">
                    {mat.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#c5a880]/15">
                  <span className="text-[10px] uppercase text-[#8c8477] block font-serif">Применение в проектах</span>
                  <span className="text-xs text-[#d5cfc5] font-light mt-0.5 block">{mat.use}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
