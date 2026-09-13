import React from 'react';
import { 
  Compass, 
  Layers, 
  FileCheck2, 
  ShieldCheck, 
  Eye, 
  CheckCircle2
} from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Геология & Градостроительный Анализ',
      desc: 'Топографическая съемка, шурфование горных грунтов, получение АПУ/ИТУ в Бишкекглавархитектуре и посадка резиденции по сторонам света с видом на горы.',
      icon: Compass
    },
    {
      num: '02',
      title: 'Эскизный Проект & Золотое Сечение (ЭП)',
      desc: 'Поиск идеальных пропорций, проработка анфиладных осей, высот этажей, ордерного портика и создание фотореалистичных 3D-визуализаций.',
      icon: Layers
    },
    {
      num: '03',
      title: 'Архитектурные Решения (Раздел АР)',
      desc: 'Детальные чертежи карнизов, сандриков, балюстрад в масштабе 1:10 и 1:1. Попильная раскладка плит травертина Сары-Таш и гранита для камнерезного производства.',
      icon: Eye
    },
    {
      num: '04',
      title: 'Конструкции Железобетонные (Раздел КЖ/КР)',
      desc: 'Расчет монолитного каркаса и фундаментов на сейсмичность до 9 баллов по СНиП КР 20-02:2018 в лицензионных программных комплексах ЛИРА-САПР и SCAD.',
      icon: ShieldCheck
    },
    {
      num: '05',
      title: 'Государственная Экспертиза Госстроя',
      desc: 'Комплексная защита проектных решений перед экспертами Государственного агентства архитектуры и строительства КР до получения положительного заключения.',
      icon: FileCheck2
    },
    {
      num: '06',
      title: 'Авторский Надзор Главного Архитектора',
      desc: 'Регулярный выезд ГАПа на объект. Приемка арматурных сеток перед заливкой бетона, контроль геометрии каменной облицовки и сдача объекта под ключ.',
      icon: CheckCircle2
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#121315] relative overflow-hidden border-t border-[#c5a880]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-[0.25em] text-[#c5a880]">
            <Compass className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>СТРОГИЙ РЕГЛАМЕНТ РАБОТЫ БЮРО</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#f4efe6] tracking-tight leading-[1.1]">
            Этапы Создания Классической Резиденции
          </h2>
          <p className="text-[#a89f91] text-sm sm:text-base font-light font-sans">
            От первого карандашного наброска до подписания акта ввода в эксплуатацию. Каждый этап строго регламентирован нормами Кыргызской Республики.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-serif">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="classic-frame p-6 sm:p-7 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div className="classic-tick-tl" />
                <div className="classic-tick-br" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-serif text-[#c5a880]/50 group-hover:text-[#c5a880] transition-colors">
                      № 0{idx + 1}
                    </span>
                    <div className="w-10 h-10 border border-[#c5a880]/30 bg-[#16171a] flex items-center justify-center text-[#c5a880] group-hover:border-[#c5a880] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-serif font-medium text-[#f4efe6] mb-2 group-hover:text-[#c5a880] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#a89f91] leading-relaxed font-sans font-light">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#c5a880]/15 flex items-center justify-between text-[11px] font-serif text-[#8c8477]">
                  <span>ЭТАП {idx + 1} ИЗ 6</span>
                  <span className="text-[#c5a880]">СНиП КР • Госстрой</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
