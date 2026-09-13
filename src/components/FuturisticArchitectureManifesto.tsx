import React, { useState } from 'react';
import { 
  Zap, 
  Cpu, 
  Layers, 
  Activity, 
  ShieldCheck, 
  Sliders, 
  Compass, 
  ChevronRight, 
  CheckCircle2,
  Atom,
  Building,
  Maximize2
} from 'lucide-react';

export const FuturisticArchitectureManifesto: React.FC = () => {
  // Megastructure Simulator State
  const [altitude, setAltitude] = useState(650); // meters
  const [seismicDampening, setSeismicDampening] = useState(9.5); // MSK
  const [exoskeletonDensity, setExoskeletonDensity] = useState(16); // segments
  const [skyBridges, setSkyBridges] = useState(3);

  const pillars = [
    {
      code: 'SYS-01',
      title: 'Автономные Кибер-Аркологии',
      desc: 'Вертикальные гипер-города замкнутого цикла: встроенные биосферы, вертикальное фермерство, замкнутая рециркуляция воды и микроядерная/солнечная энергогенерация.',
      tag: 'Closed-Loop Ecology'
    },
    {
      code: 'SYS-02',
      title: 'Активное Магнитное Гашение 9.5+ MSK',
      desc: 'Электромагнитные левитационные фундаменты и инерционные маятники в вершинах башен, нивелирующие тектонические сдвиги землетрясений Тянь-Шаня любой силы.',
      tag: 'Active Maglev Dampers'
    },
    {
      code: 'SYS-03',
      title: 'Графеновые Экзоскелеты & Наноструктуры',
      desc: 'Несущие каркасы из сверхпрочных углеродных нанотрубок и композитов с пределом текучести в 120 раз выше стали. Сверхлегкие консольные вылеты до 90 метров.',
      tag: 'Graphene Nanotubes'
    },
    {
      code: 'SYS-04',
      title: 'Нейро-BIM 5D & Цифровой Интеллект',
      desc: 'Здание функционирует как единый мыслящий организм: адаптивные кинетические панели фасада отслеживают угол солнца, ветер и плотность городского смога.',
      tag: 'Autonomous AI Core'
    }
  ];

  const futureMaterials = [
    {
      name: 'Углеродный графен-монолит B150',
      spec: 'Композитные диагональные колонны с прочностью на сжатие 150 МПа и нулевым водопоглощением',
      effect: 'Снижение веса каркаса на 65% при удвоенной сейсмостойкости'
    },
    {
      name: 'Аэрогелевое квантовое остекление',
      spec: 'Тройные светопрозрачные панели с вакуумной прослойкой и фотоэлектрическим слоем на квантовых точках',
      effect: 'Коэффициент сопротивления теплопередаче R = 4.2 м²·°C/Вт'
    },
    {
      name: 'Кинетическая перовскитная мета-кожа',
      spec: 'Автономные шестиугольные панели с сервоприводами, реагирующими на температурный градиент',
      effect: 'Генерация до 140 Вт/м² чистой энергии от солнечного излучения'
    },
    {
      name: 'Сверхпроводящие виброизоляторы',
      spec: 'Криогенные электродинамические опоры фундамента с мгновенным откликом на сейсмические P- и S-волны',
      effect: '100% изоляция верхних уровней аркологии от колебаний почвы'
    }
  ];

  return (
    <section id="manifesto" className="py-24 sm:py-32 bg-[#04060a] relative overflow-hidden border-t border-cyan-500/20">
      {/* Laser grid ambient glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-emerald-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-[10px] font-mono tracking-[0.25em] text-cyan-300 uppercase mb-4">
            <Atom className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
            <span>МАНИФЕСТ НЕО-ФУТУРИЗМА // ARCHITECTURE 2150</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight uppercase leading-[1.08]">
            Архитектура <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-200 to-emerald-400">
              Пост-Человеческой Эры
            </span>
          </h2>
          <p className="mt-5 text-sm sm:text-base text-neutral-300 font-light leading-relaxed font-sans">
            Мы отказались от компромиссного модернизма. Будущее Центральной Азии принадлежит не низкоплотным бетонным коробкам, а автономным кибер-аркологиям, устремленным в стратосферу, соединенным вакуумным транзитом и защищенным квантовыми сейсмическими щитами.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((pil) => (
            <div
              key={pil.code}
              className="hud-panel rounded-2xl p-7 relative group flex flex-col justify-between"
            >
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-cyan-400 font-bold tracking-wider">
                    // {pil.code}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                    {pil.tag}
                  </span>
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors">
                  {pil.title}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light font-sans">
                  {pil.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-cyan-500/15 flex items-center gap-2 text-[11px] font-mono text-cyan-400/70 group-hover:text-cyan-300 transition-colors">
                <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
                <span>СПЕЦИФИКАЦИЯ 2150</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Futuristic Megastructure Simulator */}
        <div className="hud-panel rounded-2xl sm:rounded-3xl p-6 sm:p-10 mb-20 shadow-2xl relative overflow-hidden">
          <div className="hud-corner-tl" />
          <div className="hud-corner-br" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Интерактивный расчет гиперструктуры</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase">
                  Симулятор Кибер-Аркологии
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-light mt-2 leading-relaxed">
                  Проверьте динамическую устойчивость вертикального города при изменении высотности, плотности графенового экзоскелета и калибровки активных магнитных демпферов.
                </p>
              </div>

              {/* Sliders */}
              <div className="space-y-4 pt-2 font-mono text-xs">
                {/* Altitude */}
                <div>
                  <div className="flex justify-between text-neutral-300 mb-1.5">
                    <span>Высота аркологии (Elevation):</span>
                    <span className="text-cyan-400 font-bold">{altitude} метров</span>
                  </div>
                  <input
                    type="range"
                    min="300"
                    max="1200"
                    step="25"
                    value={altitude}
                    onChange={(e) => setAltitude(Number(e.target.value))}
                    className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                </div>

                {/* Seismic Dampener */}
                <div>
                  <div className="flex justify-between text-neutral-300 mb-1.5">
                    <span>Калибровка сейсмозащиты:</span>
                    <span className="text-emerald-400 font-bold">{seismicDampening.toFixed(1)} MSK</span>
                  </div>
                  <input
                    type="range"
                    min="8.0"
                    max="10.0"
                    step="0.1"
                    value={seismicDampening}
                    onChange={(e) => setSeismicDampening(Number(e.target.value))}
                    className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                  />
                </div>

                {/* Diagrid Segments */}
                <div>
                  <div className="flex justify-between text-neutral-300 mb-1.5">
                    <span>Плотность экзоскелета (Diagrid):</span>
                    <span className="text-white font-bold">{exoskeletonDensity} узлов</span>
                  </div>
                  <input
                    type="range"
                    min="8"
                    max="28"
                    value={exoskeletonDensity}
                    onChange={(e) => setExoskeletonDensity(Number(e.target.value))}
                    className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                </div>

                {/* Sky-Bridges */}
                <div>
                  <div className="flex justify-between text-neutral-300 mb-1.5">
                    <span>Скай-бриджи к смежным кластерам:</span>
                    <span className="text-cyan-400 font-bold">{skyBridges} моста</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="6"
                    value={skyBridges}
                    onChange={(e) => setSkyBridges(Number(e.target.value))}
                    className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                </div>
              </div>

              {/* Dynamic Math Readout */}
              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 font-mono text-xs space-y-2 text-neutral-300">
                <div className="flex justify-between">
                  <span>Вместимость резидентов:</span>
                  <span className="text-cyan-300 font-bold">{Math.round((altitude * 85)).toLocaleString()} чел.</span>
                </div>
                <div className="flex justify-between">
                  <span>Энергоавтономия (Solar Metaskin):</span>
                  <span className="text-emerald-400 font-bold">142% (экспорт в сеть)</span>
                </div>
                <div className="flex justify-between">
                  <span>Тектонический фактор устойчивости:</span>
                  <span className="text-white font-bold">99.98% SAFE</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Vector Architectural Wireframe Canvas */}
            <div className="lg:col-span-7 bg-[#020306] border border-cyan-500/20 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center min-h-[380px] relative overflow-hidden">
              <div className="absolute top-3 left-4 text-[10px] font-mono tracking-widest text-cyan-400/80 uppercase">
                QUANTUM HUD // VECTOR ELEVATION SCHEMATIC
              </div>

              {/* Real-time Dynamic SVG Arcology Schematic */}
              <svg 
                className="w-full h-80 sm:h-96" 
                viewBox="0 0 500 360" 
                fill="none"
              >
                {/* Background Radar Rings */}
                <circle cx="250" cy="180" r="140" stroke="rgba(0, 240, 255, 0.05)" strokeDasharray="3 3" />
                <circle cx="250" cy="180" r="80" stroke="rgba(0, 240, 255, 0.08)" />

                {/* Ground Horizon Grid */}
                <line x1="20" y1="320" x2="480" y2="320" stroke="#00f0ff" strokeWidth="1.5" opacity="0.4" />
                <line x1="20" y1="335" x2="480" y2="335" stroke="#00f0ff" strokeWidth="1" opacity="0.2" />

                {/* Central Hyper-Tower Arcology Wireframe */}
                {(() => {
                  const towerBaseW = 100;
                  const towerTopW = 24;
                  const towerH = Math.min(270, (altitude / 1200) * 260 + 50);
                  const topY = 320 - towerH;
                  const leftX = 250 - towerBaseW / 2;
                  const rightX = 250 + towerBaseW / 2;
                  const leftTopX = 250 - towerTopW / 2;
                  const rightTopX = 250 + towerTopW / 2;

                  return (
                    <g>
                      {/* Main Outlines */}
                      <polygon
                        points={`${leftX},320 ${leftTopX},${topY} ${rightTopX},${topY} ${rightX},320`}
                        fill="rgba(0, 240, 255, 0.03)"
                        stroke="#00f0ff"
                        strokeWidth="2"
                      />

                      {/* Diagrid Lattice */}
                      {Array.from({ length: exoskeletonDensity }).map((_, i) => {
                        const stepRatio = (i + 1) / (exoskeletonDensity + 1);
                        const currY = 320 - towerH * stepRatio;
                        const wAtY = towerBaseW - (towerBaseW - towerTopW) * stepRatio;
                        const lx = 250 - wAtY / 2;
                        const rx = 250 + wAtY / 2;

                        return (
                          <g key={i}>
                            {/* Horizontal Floor Plates */}
                            <line
                              x1={lx}
                              y1={currY}
                              x2={rx}
                              y2={currY}
                              stroke="rgba(0, 240, 255, 0.25)"
                              strokeWidth="1"
                            />
                            {/* Diagrid Crosses */}
                            {i % 2 === 0 && (
                              <line
                                x1={lx}
                                y1={currY}
                                x2={rx}
                                y2={currY + (towerH / exoskeletonDensity)}
                                stroke="rgba(0, 255, 136, 0.35)"
                                strokeWidth="1"
                              />
                            )}
                          </g>
                        );
                      })}

                      {/* Top Quantum Spire Beacon */}
                      <line
                        x1="250"
                        y1={topY}
                        x2="250"
                        y2={topY - 35}
                        stroke="#00ff88"
                        strokeWidth="2"
                      />
                      <circle cx="250" cy={topY - 35} r="3" fill="#00ff88" className="animate-pulse" />

                      {/* Flanking Secondary Cluster Towers */}
                      <polygon
                        points="120,320 140,160 160,160 180,320"
                        fill="rgba(0, 240, 255, 0.02)"
                        stroke="rgba(0, 240, 255, 0.3)"
                        strokeWidth="1.5"
                      />
                      <polygon
                        points="320,320 340,150 360,150 380,320"
                        fill="rgba(0, 240, 255, 0.02)"
                        stroke="rgba(0, 240, 255, 0.3)"
                        strokeWidth="1.5"
                      />

                      {/* Sky-Bridges */}
                      {Array.from({ length: skyBridges }).map((_, sIdx) => {
                        const bY = 280 - sIdx * 55;
                        return (
                          <g key={`bridge-${sIdx}`}>
                            <line x1="160" y1={bY} x2="220" y2={bY} stroke="#00f0ff" strokeWidth="2" strokeDasharray="4 2" />
                            <line x1="280" y1={bY} x2="340" y2={bY} stroke="#00f0ff" strokeWidth="2" strokeDasharray="4 2" />
                            <circle cx="160" cy={bY} r="2.5" fill="#00f0ff" />
                            <circle cx="220" cy={bY} r="2.5" fill="#00f0ff" />
                            <circle cx="280" cy={bY} r="2.5" fill="#00f0ff" />
                            <circle cx="340" cy={bY} r="2.5" fill="#00f0ff" />
                          </g>
                        );
                      })}

                      {/* Active Seismic Magnetic Shield Field Lines */}
                      <path
                        d="M 160 325 Q 250 340 340 325"
                        stroke="#00ff88"
                        strokeWidth="2"
                        strokeDasharray="6 4"
                      />
                      <text x="250" y="348" textAnchor="middle" fill="#00ff88" fontSize="9" fontFamily="monospace">
                        MAGLEV SEISMIC STABILIZER 9.5 MSK ACTIVE
                      </text>
                    </g>
                  );
                })()}
              </svg>

              <div className="mt-2 text-center text-[10px] font-mono text-cyan-400">
                ДИАГНОСТИКА МЕГАСТРУКТУРЫ: СИСТЕМА «GRAND PLUS // ARCOLOGY CORE»
              </div>
            </div>

          </div>
        </div>

        {/* Future Materials Section */}
        <div>
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Материаловедение следующего столетия</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white uppercase">
              Инновационные метаматериалы
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {futureMaterials.map((m, idx) => (
              <div 
                key={idx}
                className="hud-panel rounded-2xl p-6 relative group"
              >
                <div className="hud-corner-tl" />
                <div className="hud-corner-br" />

                <div className="text-[10px] font-mono text-cyan-400/70 uppercase tracking-widest mb-2">
                  NANOTECH 0{idx + 1}
                </div>
                <h4 className="text-base font-display font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                  {m.name}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed font-light mb-4 font-sans">
                  {m.spec}
                </p>
                <div className="pt-3 border-t border-cyan-500/15 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{m.effect}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
