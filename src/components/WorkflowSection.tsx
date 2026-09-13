import React from 'react';
import { 
  FileText, 
  Layers, 
  Compass, 
  CheckCircle, 
  ShieldCheck, 
  Cpu,
  Atom,
  Zap,
  Radio
} from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Лидарное 3D-Сканирование & Геология',
      desc: 'Анализ тектонических разломов, получение АПУ/ИТУ в ГлавАПУ, лазерная съемка пятна застройки дронами и квантово-сейсмический зондаж грунта.',
      icon: Radio
    },
    {
      num: '02',
      title: 'Алгоритмический Эскиз (ЭП-2150)',
      desc: 'Генеративное формообразование в Grasshopper, сквозная аэродинамическая симуляция ветровых потоков и голографическая визуализация 8K.',
      icon: Layers
    },
    {
      num: '03',
      title: 'Сейсмощит 9.5 MSK & Каркас (Стадия «П»)',
      desc: 'Нелинейный МКЭ-расчет несущего графенового остова в ANSYS и ЛИРА-САПР, интеграция магнитных подушек и маятниковых демпферов.',
      icon: Compass
    },
    {
      num: '04',
      title: 'Главгосэкспертиза КР (100% Успех)',
      desc: 'Защита расчетных моделей в органах экспертизы Кыргызской Республики, согласование специальных технических условий (СТУ) без проволочек.',
      icon: ShieldCheck
    },
    {
      num: '05',
      title: 'Цифровой Двойник Здания (LOD 500)',
      desc: 'Передача генеральному подрядчику сверхточных ЧПУ-файлов производства фасадных панелей, спецификаций титан-стали и 5D календарного графика.',
      icon: Cpu
    },
    {
      num: '06',
      title: 'IoT-Мониторинг & Авторский Надзор',
      desc: 'Установка тензодатчиков в заливаемый монолит, контроль геометрии спутниковым RTK-позиционированием и сдача аркологии в эксплуатацию.',
      icon: CheckCircle
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#030407] relative overflow-hidden border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400">
            <Atom className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
            <span>ПРОТОКОЛ ВОЗВЕДЕНИЯ МЕГАСТРУКТУРЫ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight uppercase leading-[1.08]">
            Алгоритм Реализации Проекта 2150
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base font-light font-sans">
            Каждый шаг строго регламентирован внутренними протоколами качества ОсОО «ГРАНД Плюс» и стандартами строительной безопасности Кыргызской Республики.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="hud-panel p-6 sm:p-7 rounded-2xl transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div className="hud-corner-tl" />
                <div className="hud-corner-br" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-black text-cyan-500/40 group-hover:text-cyan-400 transition-colors">
                      // {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors uppercase">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans font-light">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-cyan-500/15 flex items-center justify-between text-[11px] font-mono text-neutral-400 group-hover:text-cyan-300">
                  <span>ФАЗА {idx + 1} ИЗ 6</span>
                  <span className="text-emerald-400 font-semibold">СНиП КР / BIM 5D</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
