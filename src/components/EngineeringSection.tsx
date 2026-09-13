import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Award, 
  Compass,
  FileCheck2,
  Scale
} from 'lucide-react';

export const EngineeringSection: React.FC = () => {
  const [activeZone, setActiveZone] = useState<8.0 | 8.5 | 9.0>(9.0);

  const seismicData = {
    8.0: {
      title: 'Сейсмическая зона 8 баллов (Чуйская долина)',
      desc: 'Равнинные участки с плотными грунтами. Классический монолитный железобетонный безригельный или ригельный каркас.',
      specs: [
        'Монолитный ленточный фундамент или сплошная железобетонная плита толщиной от 400 мм',
        'Арматура периодического профиля класса А500С с антикоррозийной обработкой',
        'Монолитные сердечники и антисейсмические пояса, связывающие кирпичное заполнение',
        'Запас прочности несущих колонн с коэффициентом надежности по ответственности γn = 1.2'
      ]
    },
    8.5: {
      title: 'Сейсмическая зона 8.5 баллов (Бишкек и южные микрорайоны)',
      desc: 'Повышенные динамические нагрузки вблизи предгорных террас. Монолитные диафрагмы жесткости в обоих направлениях.',
      specs: [
        'Сплошная ребристая фундаментная плита толщиной 500–600 мм на гравийно-песчаной подушке',
        'Монолитные пилоны и ядра жесткости, скрытые в толще классических стен и анфилад',
        'Жесткие узлы сопряжения перекрытий с колоннами по нормам СНиП КР 20-02:2018',
        'Антисейсмические гибкие связи облицовочного камня Сары-Таш из нержавеющей стали AISI 304'
      ]
    },
    9.0: {
      title: 'Сейсмическая зона 9.0 баллов (Предгорья Ала-Тоо, Байтик, Чон-Арык)',
      desc: 'Максимальная сейсмическая категория для частных резиденций и усадеб. Полная конструктивная безопасность при катастрофических толчках.',
      specs: [
        'Монолитная фундаментная плита глубокого заложения толщиной от 700 мм с двойным армированием',
        'Пространственный каркас с монолитными стенами-диафрагмами, рассчитанный в ПК ЛИРА-САПР',
        'Исключение хрупкого разрушения узлов за счет специального косвенного армирования хомутами',
        'Независимые деформационно-антисейсмические швы при сложной форме здания в плане',
        '100% положительное заключение Государственной экспертизы Государственного агентства архитектуры и строительства КР'
      ]
    }
  };

  return (
    <section id="engineering" className="py-24 sm:py-32 bg-[#121315] relative overflow-hidden border-t border-[#c5a880]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-[0.25em] text-[#c5a880]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>КОНСТРУКТИВНЫЙ РАСЧЕТ РАЗДЕЛА КР</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#f4efe6] tracking-tight leading-[1.1]">
              Сейсмостойкость 9 баллов: <br />
              <span className="italic text-[#c5a880]">
                безупречная надежность по СНиП КР
              </span>
            </h2>
          </div>
          <p className="text-[#a89f91] text-sm sm:text-base max-w-md font-light leading-relaxed font-sans">
            Кыргызстан расположен в зоне высокой сейсмической активности Тянь-Шаня. Инженеры бюро «ГРАНД Плюс» проектируют классические резиденции, сочетающие изящную эстетику с прочностью крепости.
          </p>
        </div>

        {/* Dynamic Interactive Seismic Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Interactive Zone Switcher & Tech Breakdown (7 cols) */}
          <div className="lg:col-span-7 classic-frame p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="classic-tick-tl" />
            <div className="classic-tick-br" />

            <div>
              <div className="flex items-center justify-between mb-6 border-b border-[#c5a880]/20 pb-4">
                <span className="text-xs font-serif uppercase text-[#c5a880] tracking-wider">
                  Шкала Сейсмостойкости // СНиП КР 20-02:2018
                </span>
                <span className="text-xs font-serif px-2.5 py-1 bg-[#18191c] text-[#d5cfc5] border border-[#c5a880]/30">
                  ЛИРА-САПР & SCAD Office
                </span>
              </div>

              {/* Magnitude Buttons */}
              <div className="grid grid-cols-3 gap-3 mb-6 font-serif">
                {([8.0, 8.5, 9.0] as const).map((zone) => (
                  <button
                    key={zone}
                    type="button"
                    onClick={() => setActiveZone(zone)}
                    className={`py-3 px-4 border text-center transition-all cursor-pointer ${
                      activeZone === zone
                        ? 'bg-[#c5a880] text-[#121315] font-medium border-[#c5a880] shadow-sm'
                        : 'bg-[#16171a] border-[#c5a880]/25 text-[#a89f91] hover:text-[#f4efe6] hover:border-[#c5a880]/50'
                    }`}
                  >
                    <div className="text-base sm:text-lg font-medium">{zone} баллов</div>
                    <div className="text-[10px] tracking-wider uppercase mt-0.5 opacity-80">
                      {zone === 9.0 ? 'Максимум' : zone === 8.5 ? 'Предгорья' : 'Долина'}
                    </div>
                  </button>
                ))}
              </div>

              {/* Active Zone Detail Content */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#c5a880]" />
                  <h3 className="font-serif text-lg sm:text-xl text-[#f4efe6] font-medium">
                    {seismicData[activeZone].title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#a89f91] leading-relaxed font-light">
                  {seismicData[activeZone].desc}
                </p>

                {/* Specs List */}
                <div className="pt-2 space-y-2.5">
                  <div className="text-xs font-serif uppercase tracking-wider text-[#c5a880]">
                    Конструктивные решения и узлы безопасности:
                  </div>
                  {seismicData[activeZone].specs.map((spec, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#d5cfc5] font-light">
                      <CheckCircle2 className="w-4 h-4 text-[#c5a880] flex-shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom calculation note */}
            <div className="pt-4 border-t border-[#c5a880]/15 flex items-center justify-between text-[11px] font-serif text-[#8c8477]">
              <span>Нормативный базис: СНиП КР 20-02:2018</span>
              <span className="text-[#c5a880]">ЛИЦЕНЗИЯ I КАТЕГОРИИ №01428</span>
            </div>
          </div>

          {/* Right: Engineering Guarantees & Credentials (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Box 1: Госэкспертиза */}
            <div className="classic-frame p-6 relative flex-1 flex flex-col justify-between">
              <div className="classic-tick-tl" />
              <div className="classic-tick-br" />

              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#c5a880]/10 border border-[#c5a880]/30 flex items-center justify-center">
                  <FileCheck2 className="w-5 h-5 text-[#c5a880]" />
                </div>
                <h4 className="font-serif text-lg text-[#f4efe6] font-medium">
                  100% прохождение Государственной экспертизы
                </h4>
                <p className="text-xs sm:text-sm text-[#a89f91] font-light leading-relaxed">
                  Мы лично сопровождаем проект и защищаем каждый расчет перед экспертами Госстроя Кыргызской Республики. Ни одного отрицательного заключения за 18 лет работы бюро.
                </p>
              </div>

              <div className="pt-4 border-t border-[#c5a880]/15 mt-4 text-[11px] font-serif text-[#c5a880]">
                Официальный юридический допуск к строительству
              </div>
            </div>

            {/* Box 2: Моделирование горных грунтов */}
            <div className="classic-frame p-6 relative flex-1 flex flex-col justify-between">
              <div className="classic-tick-tl" />
              <div className="classic-tick-br" />

              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#c5a880]/10 border border-[#c5a880]/30 flex items-center justify-center">
                  <Compass className="w-5 h-5 text-[#c5a880]" />
                </div>
                <h4 className="font-serif text-lg text-[#f4efe6] font-medium">
                  Геологические изыскания и сложные склоны
                </h4>
                <p className="text-xs sm:text-sm text-[#a89f91] font-light leading-relaxed">
                  Проектирование подпорных стен, дренажей и каскадных фундаментов при перепадах высот участка до 12 метров в предгорных районах Бишкека и на побережье озера Иссык-Куль.
                </p>
              </div>

              <div className="pt-4 border-t border-[#c5a880]/15 mt-4 text-[11px] font-serif text-[#c5a880]">
                Защита от оползней, размывов и просадок грунта
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
