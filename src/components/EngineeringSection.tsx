import React, { useState } from 'react';
import { 
  Activity, 
  ShieldAlert, 
  Cpu, 
  CheckCircle2, 
  Award, 
  Compass,
  Zap,
  Atom,
  Radio,
  FileCheck2
} from 'lucide-react';

export const EngineeringSection: React.FC = () => {
  const [activeZone, setActiveZone] = useState<8.5 | 9.0 | 9.5>(9.5);

  const seismicData = {
    8.5: {
      title: 'Зона 8.5 MSK (Высотная городская среда)',
      desc: 'Базовый рубеж для высотных комплексов Чуйской долины. Пространственное динамическое моделирование нелинейных ускорений в ANSYS.',
      features: [
        'Монолитные диафрагмы жесткости с полимерным углеродным армированием',
        'Гидравлические вязкоупругие демпферы по углам высотных секций',
        'Ограничение горизонтальных амплитуд колебаний вершины до 0.002H'
      ]
    },
    9.0: {
      title: 'Зона 9.0 MSK (Предгорья Ала-Тоо и рифтовые разломы)',
      desc: 'Экстремальные сейсмические риски сейсморазломов Тянь-Шаня. Интеграция пространственных диагонально-сетчатых экзоскелетов Diagrid.',
      features: [
        'Нелинейный анализ пластических шарниров (Non-linear Time-History Analysis)',
        'Диагрид-каркас из титан-стального композита B120',
        'Многоуровневые антисейсмические деформационные швы со скользящими шарнирами',
        'Демпфирование резонансных пиковых частот 0.8–2.5 Гц'
      ]
    },
    9.5: {
      title: 'Зона 9.5+ MSK (Квантовая Магнитная Левитация)',
      desc: 'Уникальная технология ОсОО «ГРАНД Плюс» для 100-этажных кибер-аркологий. Здание механически развязано с сотрясающимся скальным грунтом.',
      features: [
        'Электромагнитные левитационные подушки фундамента с мгновенным откликом 0.005 сек',
        'Активный 400-тонный инерционный маятниковый демпфер в шпиле башни с сервоприводом',
        'Графеновый самозатягивающийся экзоскелет с молекулярным контролем микротрещин',
        '100% сохранение работоспособности высокоточных квантовых лабораторий и резидентов'
      ]
    }
  };

  return (
    <section id="engineering" className="py-24 sm:py-32 bg-[#030407] relative overflow-hidden border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>КВАНТОВАЯ БЕЗОПАСНОСТЬ И ТЕКТОНИЧЕСКИЙ ЩИТ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight uppercase leading-[1.08]">
              Сейсмостойкость 9.5+ MSK: конструктивный расчет без риска
            </h2>
          </div>
          <p className="text-neutral-300 text-sm sm:text-base max-w-md font-light leading-relaxed font-sans">
            Кыргызстан расположен в активном тектоническом узле Тянь-Шаня. Инженеры «ГРАНД Плюс» создают гиперструктуры, способные выдержать землетрясения планетарного масштаба.
          </p>
        </div>

        {/* Dynamic Interactive Seismic Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Interactive Zone Switcher & Tech Breakdown (7 cols) */}
          <div className="lg:col-span-7 hud-panel rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="hud-corner-tl" />
            <div className="hud-corner-br" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider">
                  Шкала Сейсмозащиты // СНиП КР & Квантовая Физика
                </span>
                <span className="text-xs font-mono px-2.5 py-1 bg-cyan-500/10 text-cyan-300 rounded border border-cyan-500/30">
                  ANSYS FEA & ЛИРА-САПР 2025
                </span>
              </div>

              {/* Magnitude Buttons */}
              <div className="grid grid-cols-3 gap-3 mb-6 font-mono">
                {([8.5, 9.0, 9.5] as const).map((zone) => (
                  <button
                    key={zone}
                    type="button"
                    onClick={() => setActiveZone(zone)}
                    className={`py-3 px-4 rounded-xl border text-center transition-all cursor-pointer ${
                      activeZone === zone
                        ? 'bg-cyan-400 text-black font-bold border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                        : 'bg-black/60 border-cyan-500/20 text-neutral-300 hover:text-white hover:border-cyan-500/40'
                    }`}
                  >
                    <div className="text-xl sm:text-2xl font-bold">{zone} MSK</div>
                    <div className="text-[10px] uppercase tracking-wider opacity-90">
                      {zone === 9.5 ? 'Квант-Щит' : zone === 9.0 ? 'Диагрид' : 'Высотный'}
                    </div>
                  </button>
                ))}
              </div>

              {/* Active Zone Details Card */}
              <div className="p-6 rounded-xl bg-black/70 border border-cyan-500/25 space-y-4">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <h3 className="text-lg font-display font-bold text-white uppercase">
                    {seismicData[activeZone].title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans font-light">
                  {seismicData[activeZone].desc}
                </p>

                <div className="pt-2 space-y-2.5">
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    Конструктивные решения и протоколы стабилизации:
                  </div>
                  {seismicData[activeZone].features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Proof Quote */}
            <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-neutral-300 font-mono flex items-center gap-3">
              <Award className="w-6 h-6 text-cyan-400 flex-shrink-0" />
              <span>
                ОсОО «ГРАНД Плюс» проводит квантовую топологическую оптимизацию несущего каркаса, снижая металлоемкость на 38% без малейшей потери жесткости.
              </span>
            </div>
          </div>

          {/* Right: Technical Badges & Structural Audit (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            {/* Box 1: BIM & Digital Twin */}
            <div className="hud-panel p-6 rounded-2xl space-y-3">
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-base font-display font-bold text-white uppercase">
                Сквозное Нейро-BIM 5D (LOD 500)
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed font-sans font-light">
                Цифровая модель сооружения синхронизируется с датчиками напряжений в монолите, исключая коллизии между пространственными конструкциями и коммуникациями задолго до строительных работ.
              </p>
            </div>

            {/* Box 2: Geotechnical Analysis */}
            <div className="hud-panel p-6 rounded-2xl space-y-3">
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="text-base font-display font-bold text-white uppercase">
                Геотехника и расчет рифтовых оснований
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed font-sans font-light">
                Учет скальных галечников предгорий Ала-Тоо, высоконапорных грунтовых вод Иссык-Куля и глубоких разломов с моделированием волновых фронтов Рэлея и Лява.
              </p>
            </div>

            {/* Box 3: State Expertise Guarantee */}
            <div className="hud-panel p-6 rounded-2xl space-y-3">
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-display font-bold text-white uppercase">
                100% положительных Главэкспертиз КР
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed font-sans font-light">
                За 18+ лет практики ни один сложный проект ОсОО «ГРАНД Плюс» не получил отказ в органах строительного надзора и государственной экспертизы Кыргызской Республики.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
