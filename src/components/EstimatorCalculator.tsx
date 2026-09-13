import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Check, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Compass
} from 'lucide-react';
import { CalculatorState } from '../types';

interface EstimatorCalculatorProps {
  onSendEstimate: (summary: string) => void;
}

export const EstimatorCalculator: React.FC<EstimatorCalculatorProps> = ({ 
  onSendEstimate 
}) => {
  const [calcState, setCalcState] = useState<CalculatorState>({
    buildingType: 'villa',
    area: 850,
    stages: {
      sketch: true,
      architecture: true,
      constructive: true,
      engineering: true,
      interior: true,
      supervision: true,
      expertise: true,
    },
    complexity: 'standard',
    seismicRequired: true,
  });

  const [currency, setCurrency] = useState<'USD' | 'KGS'>('USD');

  const buildingTypes = [
    { id: 'estate', label: 'Загородная усадьба в стиле палладианского классицизма', baseRatePerM2: 24.0, minDays: 35 },
    { id: 'villa', label: 'Классическая резиденция / особняк с колоннадой', baseRatePerM2: 22.0, minDays: 30 },
    { id: 'club_house', label: 'Неоклассический клубный дом / представительский особняк', baseRatePerM2: 18.0, minDays: 45 },
    { id: 'public_palace', label: 'Общественное здание / дворец торжеств', baseRatePerM2: 16.0, minDays: 50 },
    { id: 'resort_hotel', label: 'Курортная резиденция / пансионат на озере Иссык-Куль', baseRatePerM2: 19.0, minDays: 55 },
    { id: 'park_pavilion', label: 'Парковый павильон, ротонда и входная колоннада', baseRatePerM2: 26.0, minDays: 25 },
  ] as const;

  const currentTypeConfig = buildingTypes.find((b) => b.id === (calcState.buildingType as any)) || buildingTypes[1];

  // Calculation Logic
  const estimate = useMemo(() => {
    let stageMultiplier = 0;
    if (calcState.stages.sketch) stageMultiplier += 0.20;
    if (calcState.stages.architecture) stageMultiplier += 0.25;
    if (calcState.stages.constructive) stageMultiplier += 0.25;
    if (calcState.stages.engineering) stageMultiplier += 0.20;
    if (calcState.stages.interior) stageMultiplier += 0.25;
    if (calcState.stages.supervision) stageMultiplier += 0.15;
    if (calcState.stages.expertise) stageMultiplier += 0.10;

    if (stageMultiplier === 0) stageMultiplier = 0.2;

    let areaScale = 1.0;
    if (calcState.area > 5000) {
      areaScale = 0.70;
    } else if (calcState.area > 2000) {
      areaScale = 0.80;
    } else if (calcState.area > 1000) {
      areaScale = 0.90;
    } else if (calcState.area < 500) {
      areaScale = 1.15;
    }

    const ratePerM2 = currentTypeConfig.baseRatePerM2 * stageMultiplier * areaScale;
    const totalUSD = Math.round(calcState.area * ratePerM2);
    const totalKGS = Math.round(totalUSD * 89.5);

    let calculatedDays = Math.round(currentTypeConfig.minDays + (Math.log10(calcState.area) * 12 * stageMultiplier));
    if (calcState.area > 3000) calculatedDays += 20;

    return {
      rateUSD: ratePerM2.toFixed(1),
      rateKGS: (ratePerM2 * 89.5).toFixed(0),
      totalUSD,
      totalKGS,
      days: Math.min(150, Math.max(25, calculatedDays)),
      months: (calculatedDays / 30).toFixed(1),
    };
  }, [calcState, currentTypeConfig]);

  const toggleStage = (key: keyof typeof calcState.stages) => {
    setCalcState((prev) => ({
      ...prev,
      stages: {
        ...prev.stages,
        [key]: !prev.stages[key],
      },
    }));
  };

  const handleApplyEstimate = () => {
    const activeStagesList = Object.entries(calcState.stages)
      .filter(([_, v]) => v)
      .map(([k]) => {
        switch (k) {
          case 'sketch': return 'Эскизный проект (ЭП)';
          case 'architecture': return 'Архитектурные решения (АР)';
          case 'constructive': return 'Конструкции 9 баллов (КР)';
          case 'engineering': return 'Инженерные сети (ИОС)';
          case 'interior': return 'Классический интерьер (АИ)';
          case 'supervision': return 'Авторский надзор ГАПа';
          case 'expertise': return 'Сопровождение в Госэкспертизе КР';
          default: return k;
        }
      })
      .join(', ');

    const summary = `Заказ расчета: ${currentTypeConfig.label}, площадь: ${calcState.area} м². Состав разделов: ${activeStagesList}. Предварительная смета: $${estimate.totalUSD.toLocaleString()} USD (~${estimate.totalKGS.toLocaleString()} сом). Срок: ~${estimate.days} рабочих дней.`;
    onSendEstimate(summary);
  };

  return (
    <section id="calculator" className="py-24 sm:py-32 bg-[#121315] relative overflow-hidden border-t border-[#c5a880]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-[0.25em] text-[#c5a880]">
            <Calculator className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>ОНЛАЙН-КАЛЬКУЛЯТОР ПРОЕКТА</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#f4efe6] tracking-tight leading-[1.1]">
            Расчет Стоимости и Сроков Проектирования
          </h2>
          <p className="text-[#a89f91] text-sm sm:text-base font-light font-sans">
            Прозрачная калькуляция полного комплекта рабочей документации с учетом сейсмостойкости до 9 баллов и подбором камня Сары-Таш.
          </p>
        </div>

        <div className="classic-frame p-6 sm:p-10 relative">
          <div className="classic-tick-tl" />
          <div className="classic-tick-br" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Options Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-8 font-serif">
              
              {/* 1. Building Type */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#c5a880] mb-3">
                  01 // Тип классического объекта:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {buildingTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setCalcState((prev) => ({ ...prev, buildingType: type.id as any }))}
                      className={`p-3.5 text-left border transition-all text-xs cursor-pointer ${
                        (calcState.buildingType as any) === type.id
                          ? 'bg-[#c5a880] border-[#c5a880] text-[#121315] font-medium shadow-sm'
                          : 'bg-[#16171a] border-[#c5a880]/20 text-[#cfc8bd] hover:border-[#c5a880]/50'
                      }`}
                    >
                      <span className="line-clamp-2 leading-relaxed">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Projected Area Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs uppercase tracking-wider text-[#c5a880]">
                    02 // Проектируемая общая площадь:
                  </label>
                  <span className="font-serif text-xl font-medium text-[#f4efe6]">
                    {calcState.area.toLocaleString()} м²
                  </span>
                </div>

                <input
                  type="range"
                  min="200"
                  max="8000"
                  step="50"
                  value={calcState.area}
                  onChange={(e) => setCalcState((prev) => ({ ...prev, area: Number(e.target.value) }))}
                  className="w-full h-1.5 bg-[#252830] rounded-lg appearance-none cursor-pointer accent-[#c5a880]"
                />

                {/* Quick Area Presets */}
                <div className="flex flex-wrap gap-2 mt-3 font-serif">
                  {[350, 650, 1000, 1800, 3500].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setCalcState((prev) => ({ ...prev, area: preset }))}
                      className={`px-3 py-1 text-xs border transition-colors cursor-pointer ${
                        calcState.area === preset
                          ? 'bg-[#c5a880] text-[#121315] border-[#c5a880] font-medium'
                          : 'bg-[#16171a] border-[#c5a880]/20 text-[#a89f91] hover:text-[#f4efe6]'
                      }`}
                    >
                      {preset.toLocaleString()} м²
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Included Stages / Modules */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#c5a880] mb-3">
                  03 // Состав проектных разделов:
                </label>
                <div className="space-y-2">
                  {[
                    { key: 'sketch', label: 'Эскизный проект & Золотое Сечение (ЭП)', desc: 'Объемная модель, генплан, посадка по солнцу, 3D визуализации' },
                    { key: 'architecture', label: 'Архитектурные решения (Раздел АР)', desc: 'Поэтажные планы, разрезы, узлы карнизов 1:1, раскладка камня' },
                    { key: 'constructive', label: 'Конструктивные решения 9 баллов (Раздел КР)', desc: 'Расчет монолитного каркаса в ЛИРА-САПР по СНиП КР 20-02:2018' },
                    { key: 'engineering', label: 'Инженерные сети премиум-класса (Раздел ИОС)', desc: 'Приточно-вытяжная вентиляция с очисткой от смога, отопление, вода' },
                    { key: 'interior', label: 'Дизайн классического интерьера (Раздел АИ)', desc: 'Мраморные порталы, гипсовая лепнина, паркет, свет' },
                    { key: 'expertise', label: 'Сопровождение в Госэкспертизе Госстроя КР', desc: '100% защита проектных решений до получения разрешения' },
                    { key: 'supervision', label: 'Авторский надзор Главного Архитектора', desc: 'Контроль заливки монолита и каменных работ на стройплощадке' },
                  ].map((item) => {
                    const isChecked = (calcState.stages as any)[item.key];
                    return (
                      <div
                        key={item.key}
                        onClick={() => toggleStage(item.key as any)}
                        className={`p-3 border flex items-start gap-3 cursor-pointer transition-colors ${
                          isChecked 
                            ? 'bg-[#18191d] border-[#c5a880]/60 text-[#f4efe6]'
                            : 'bg-[#141517] border-[#c5a880]/15 text-[#8c8477] hover:border-[#c5a880]/30'
                        }`}
                      >
                        <div className={`w-4 h-4 mt-0.5 flex items-center justify-center border ${
                          isChecked 
                            ? 'bg-[#c5a880] border-[#c5a880] text-[#121315]' 
                            : 'border-[#4a453e] bg-[#16171a]'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <div>
                          <div className={`text-xs sm:text-sm font-serif ${isChecked ? 'text-[#f4efe6] font-medium' : 'text-[#a89f91]'}`}>
                            {item.label}
                          </div>
                          <div className="text-[11px] text-[#8c8477] font-sans font-light">
                            {item.desc}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Summary Result Card (5 cols) */}
            <div className="lg:col-span-5 bg-[#16171a] border border-[#c5a880]/40 p-6 sm:p-7 sticky top-28 space-y-6 relative font-serif">
              <div className="classic-tick-tl" />
              <div className="classic-tick-br" />
              
              <div className="flex items-center justify-between border-b border-[#c5a880]/20 pb-4">
                <div>
                  <span className="text-[10px] uppercase text-[#c5a880] block tracking-widest">
                    ПРЕДВАРИТЕЛЬНАЯ СМЕТА
                  </span>
                  <span className="text-sm font-medium text-[#f4efe6] line-clamp-1">
                    {currentTypeConfig.label}
                  </span>
                </div>

                {/* Currency Switcher */}
                <div className="flex items-center bg-[#121315] p-0.5 border border-[#c5a880]/30 text-xs">
                  <button
                    type="button"
                    onClick={() => setCurrency('USD')}
                    className={`px-2.5 py-1 cursor-pointer transition-colors ${
                      currency === 'USD' ? 'bg-[#c5a880] text-[#121315] font-medium' : 'text-[#a89f91]'
                    }`}
                  >
                    USD ($)
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrency('KGS')}
                    className={`px-2.5 py-1 cursor-pointer transition-colors ${
                      currency === 'KGS' ? 'bg-[#c5a880] text-[#121315] font-medium' : 'text-[#a89f91]'
                    }`}
                  >
                    сом
                  </button>
                </div>
              </div>

              {/* Big Price Display */}
              <div className="space-y-1">
                <span className="text-xs text-[#a89f91] block">
                  Ориентировочная стоимость проектных работ:
                </span>
                <div className="text-3xl sm:text-4xl font-medium text-[#c5a880] tracking-tight">
                  {currency === 'USD' 
                    ? `$${estimate.totalUSD.toLocaleString()}`
                    : `${estimate.totalKGS.toLocaleString()} сом`}
                </div>
                <div className="text-xs text-[#d5cfc5]">
                  ≈ {currency === 'USD' ? `$${estimate.rateUSD}` : `${estimate.rateKGS} сом`} за 1 м²
                </div>
              </div>

              {/* Time Estimate */}
              <div className="p-4 bg-[#121315] border border-[#c5a880]/20 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-[#c5a880]" />
                  <div>
                    <span className="text-xs text-[#a89f91] block">Срок проектирования:</span>
                    <span className="text-sm font-medium text-[#f4efe6]">
                      ≈ {estimate.days} рабочих дней (~{estimate.months} мес.)
                    </span>
                  </div>
                </div>
              </div>

              {/* Included features highlights */}
              <div className="space-y-2 text-xs text-[#cfc8bd] border-t border-[#c5a880]/20 pt-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#c5a880] flex-shrink-0" />
                  <span>Лицензия I категории Госстроя КР №01428</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#c5a880] flex-shrink-0" />
                  <span>Расчет сейсмостойкости 9 баллов (СНиП КР)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#c5a880] flex-shrink-0" />
                  <span>Спецификации натурального травертина Сары-Таш</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={handleApplyEstimate}
                className="w-full py-3.5 bg-[#c5a880] hover:bg-[#d8c09d] text-[#121315] font-medium text-xs uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Получить коммерческое предложение</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-[#8c8477] text-center leading-relaxed font-sans font-light">
                * Расчет является предварительным и уточняется после изучения градостроительных условий участка в Кыргызстане.
              </p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
