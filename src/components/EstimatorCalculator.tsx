import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Check, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Atom,
  Zap,
  Cpu
} from 'lucide-react';
import { CalculatorState } from '../types';

interface EstimatorCalculatorProps {
  onSendEstimate: (summary: string) => void;
}

export const EstimatorCalculator: React.FC<EstimatorCalculatorProps> = ({ 
  onSendEstimate 
}) => {
  const [calcState, setCalcState] = useState<CalculatorState>({
    buildingType: 'residential_multi',
    area: 25000,
    stages: {
      sketch: true,
      architecture: true,
      constructive: true,
      engineering: true,
      interior: false,
      supervision: true,
      expertise: true,
    },
    complexity: 'standard',
    seismicRequired: true,
  });

  const [currency, setCurrency] = useState<'USD' | 'KGS'>('USD');

  const buildingTypes = [
    { id: 'residential_multi', label: 'Кибер-Аркология / Модульный Город', baseRatePerM2: 8.5, minDays: 60 },
    { id: 'villa', label: 'Биоморфная Вилла / Резиденция', baseRatePerM2: 19.0, minDays: 30 },
    { id: 'business_center', label: 'Нео-Небоскреб Скай-Сити', baseRatePerM2: 10.5, minDays: 50 },
    { id: 'retail', label: 'Квантовый R&D Технопарк', baseRatePerM2: 9.5, minDays: 55 },
    { id: 'hotel', label: 'Аква-Курорт на Биосферных Платформах', baseRatePerM2: 13.0, minDays: 65 },
    { id: 'industrial', label: 'Автономный Дата-Хаб & Дроно-Порт', baseRatePerM2: 6.5, minDays: 45 },
  ] as const;

  const currentTypeConfig = buildingTypes.find((b) => b.id === calcState.buildingType) || buildingTypes[0];

  // Calculation Logic
  const estimate = useMemo(() => {
    let stageMultiplier = 0;
    if (calcState.stages.sketch) stageMultiplier += 0.20;
    if (calcState.stages.architecture) stageMultiplier += 0.25;
    if (calcState.stages.constructive) stageMultiplier += 0.30;
    if (calcState.stages.engineering) stageMultiplier += 0.25;
    if (calcState.stages.interior) stageMultiplier += 0.20;
    if (calcState.stages.supervision) stageMultiplier += 0.15;
    if (calcState.stages.expertise) stageMultiplier += 0.10;

    if (stageMultiplier === 0) stageMultiplier = 0.2;

    let areaScale = 1.0;
    if (calcState.area > 50000) {
      areaScale = 0.60;
    } else if (calcState.area > 25000) {
      areaScale = 0.70;
    } else if (calcState.area > 10000) {
      areaScale = 0.80;
    } else if (calcState.area < 2000) {
      areaScale = 1.25;
    }

    const ratePerM2 = currentTypeConfig.baseRatePerM2 * stageMultiplier * areaScale;
    const totalUSD = Math.round(calcState.area * ratePerM2);
    const totalKGS = Math.round(totalUSD * 89.5);

    let calculatedDays = Math.round(currentTypeConfig.minDays + (Math.log10(calcState.area) * 15 * stageMultiplier));
    if (calcState.area > 25000) calculatedDays += 30;

    return {
      rateUSD: ratePerM2.toFixed(1),
      rateKGS: (ratePerM2 * 89.5).toFixed(0),
      totalUSD,
      totalKGS,
      days: Math.min(180, Math.max(25, calculatedDays)),
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
          case 'sketch': return 'Эскизный квант-концепт (ЭП)';
          case 'architecture': return 'Архитектурный раздел (АР-2150)';
          case 'constructive': return 'Сейсмощит 9.5 & Конструкции (КР)';
          case 'engineering': return 'Замкнутые сети жизнеобеспечения (ИОС)';
          case 'interior': return 'Биофильные интерьеры';
          case 'supervision': return 'Авторский надзор & IoT-мониторинг';
          case 'expertise': return 'Сопровождение в Госэкспертизе КР';
          default: return k;
        }
      })
      .join(', ');

    const summary = `Расчет мегаструктуры: ${currentTypeConfig.label}, масштаб: ${calcState.area} м². Состав модулей: ${activeStagesList}. Расчетная смета: $${estimate.totalUSD.toLocaleString()} USD (~${estimate.totalKGS.toLocaleString()} сом). Срок проектирования: ~${estimate.days} дней.`;
    onSendEstimate(summary);
  };

  return (
    <section id="calculator" className="py-24 sm:py-32 bg-[#020306] relative overflow-hidden border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400">
            <Calculator className="w-3.5 h-3.5 text-cyan-400" />
            <span>КВАНТ-КАЛЬКУЛЯТОР СМЕТЫ 5D</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight uppercase leading-[1.08]">
            Расчет Бюджета Мегаструктуры & Сроков
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base font-light font-sans">
            Мгновенная калькуляция стоимости генерального проектирования с учетом сейсмичности до 9.5 баллов и требуемых разделов 5D BIM.
          </p>
        </div>

        <div className="hud-panel rounded-2xl sm:rounded-3xl p-6 sm:p-10 backdrop-blur-xl relative">
          <div className="hud-corner-tl" />
          <div className="hud-corner-br" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Options Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-8 font-mono">
              
              {/* 1. Building Type */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-cyan-400 mb-3 font-bold">
                  // 01. Типология кибер-структуры:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {buildingTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setCalcState((prev) => ({ ...prev, buildingType: type.id as any }))}
                      className={`p-3.5 rounded-xl text-left border transition-all text-xs cursor-pointer ${
                        calcState.buildingType === type.id
                          ? 'bg-cyan-950/60 border-cyan-400 text-white font-bold shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                          : 'bg-black/50 border-cyan-500/20 text-neutral-400 hover:text-white hover:border-cyan-500/40'
                      }`}
                    >
                      <span className="line-clamp-2">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Projected Area Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs uppercase tracking-wider text-cyan-400 font-bold">
                    // 02. Проектируемая площадь (м²):
                  </label>
                  <span className="font-mono text-xl font-extrabold text-cyan-300">
                    {calcState.area.toLocaleString()} м²
                  </span>
                </div>

                <input
                  type="range"
                  min="500"
                  max="100000"
                  step="500"
                  value={calcState.area}
                  onChange={(e) => setCalcState((prev) => ({ ...prev, area: Number(e.target.value) }))}
                  className="w-full h-2 bg-neutral-900 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />

                {/* Quick Area Presets */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {[2500, 10000, 25000, 50000, 85000].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setCalcState((prev) => ({ ...prev, area: preset }))}
                      className={`px-3 py-1 text-[11px] rounded-lg border transition-colors cursor-pointer ${
                        calcState.area === preset
                          ? 'bg-cyan-400 text-black border-cyan-400 font-bold'
                          : 'bg-black/60 border-cyan-500/20 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {preset.toLocaleString()} м²
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Included Stages / Modules */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-cyan-400 mb-3 font-bold">
                  // 03. Пакеты документации & Инженерии:
                </label>
                <div className="space-y-2">
                  {[
                    { key: 'sketch', label: 'Концепт-проект & 3D Голограмма (Стадия «ЭП»)', desc: 'Аэродинамическая форма, инсоляция, генерация 8K рендеров' },
                    { key: 'architecture', label: 'Архитектурные решения (Раздел «АР-2150»)', desc: 'Планы уровней, разрезы, узлы кинетических фасадов' },
                    { key: 'constructive', label: 'Сейсмощит 9.5 & Экзоскелет (Раздел «КР»)', desc: 'Расчет в ANSYS и ЛИРА-САПР на 9.5 MSK, магнитные подушки' },
                    { key: 'engineering', label: 'Замкнутые сети жизнеобеспечения (Раздел «ИОС»)', desc: 'Рециркуляция воды, фильтрация смога PM2.5, геотермия' },
                    { key: 'expertise', label: 'Сопровождение в Госэкспертизе КР', desc: '100% гарантия согласования в надзорных инстанциях' },
                    { key: 'supervision', label: 'Авторский надзор & IoT-мониторинг', desc: 'Сенсорный контроль геометрии монолита на площадке' },
                    { key: 'interior', label: 'Биофильный дизайн интерьеров', desc: 'Органические био-капсулы, гидропоника, умный свет' },
                  ].map((item) => {
                    const isChecked = (calcState.stages as any)[item.key];
                    return (
                      <div
                        key={item.key}
                        onClick={() => toggleStage(item.key as any)}
                        className={`p-3 rounded-xl border flex items-start gap-3 cursor-pointer transition-colors ${
                          isChecked 
                            ? 'bg-cyan-950/40 border-cyan-400 text-neutral-100'
                            : 'bg-black/40 border-cyan-500/15 text-neutral-400 hover:border-cyan-500/30'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border ${
                          isChecked 
                            ? 'bg-cyan-400 border-cyan-400 text-black' 
                            : 'border-neutral-600 bg-neutral-900'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <div>
                          <div className={`text-xs sm:text-sm font-semibold ${isChecked ? 'text-white' : 'text-neutral-300'}`}>
                            {item.label}
                          </div>
                          <div className="text-[11px] text-neutral-400 font-sans font-light">
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
            <div className="lg:col-span-5 bg-black/80 border border-cyan-500/30 rounded-2xl p-6 sm:p-7 sticky top-28 space-y-6 relative overflow-hidden">
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />
              
              <div className="flex items-center justify-between border-b border-cyan-500/20 pb-4 font-mono">
                <div>
                  <span className="text-[10px] uppercase text-cyan-400 block tracking-widest">
                    ТЕЛЕМЕТРИЯ СМЕТЫ
                  </span>
                  <span className="text-sm font-bold text-white">
                    {currentTypeConfig.label}
                  </span>
                </div>

                {/* Currency Switcher */}
                <div className="flex items-center bg-neutral-950 p-1 rounded-lg border border-cyan-500/30">
                  <button
                    type="button"
                    onClick={() => setCurrency('USD')}
                    className={`px-2 py-1 text-[11px] font-mono rounded cursor-pointer ${
                      currency === 'USD' ? 'bg-cyan-400 text-black font-bold' : 'text-neutral-400'
                    }`}
                  >
                    USD ($)
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrency('KGS')}
                    className={`px-2 py-1 text-[11px] font-mono rounded cursor-pointer ${
                      currency === 'KGS' ? 'bg-cyan-400 text-black font-bold' : 'text-neutral-400'
                    }`}
                  >
                    KGS (сом)
                  </button>
                </div>
              </div>

              {/* Big Price Display */}
              <div className="space-y-1">
                <span className="text-xs text-neutral-400 block font-mono">
                  Общая расчетная сумма проекта:
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 tracking-tight font-mono">
                  {currency === 'USD' 
                    ? `$${estimate.totalUSD.toLocaleString()}`
                    : `${estimate.totalKGS.toLocaleString()} сом`}
                </div>
                <div className="text-xs text-cyan-300 font-mono">
                  ≈ {currency === 'USD' ? `$${estimate.rateUSD}` : `${estimate.rateKGS} сом`} за 1 м²
                </div>
              </div>

              {/* Time Estimate */}
              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/25 flex items-center justify-between font-mono">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <div>
                    <span className="text-xs text-neutral-400 block">Срок генерального проектирования</span>
                    <span className="text-sm font-bold text-white">
                      ≈ {estimate.days} рабочих дней (~{estimate.months} мес.)
                    </span>
                  </div>
                </div>
              </div>

              {/* Included features highlights */}
              <div className="space-y-2 text-xs text-neutral-300 font-mono border-t border-cyan-500/20 pt-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Лицензия I категории (Серия ГР №01428)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Квантовая сейсмозащита 9.5 MSK</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Передача цифрового двойника LOD 500</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={handleApplyEstimate}
                className="w-full py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Инициировать коммерческое предложение</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-neutral-400 text-center leading-relaxed font-sans font-light">
                * Смета является предварительной и уточняется после топографической съемки и геологических зондов участка в Кыргызстане.
              </p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
