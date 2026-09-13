import React, { useState } from 'react';
import { 
  Building2, 
  Compass, 
  Cpu, 
  Map, 
  ShieldCheck, 
  Eye, 
  CheckCircle, 
  Clock, 
  ArrowRight,
  Atom,
  Zap
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

interface ServicesSectionProps {
  onOpenConsultation: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onOpenConsultation 
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_DATA[0].id);

  const selectedService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Map':
        return <Map className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      default:
        return <Eye className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#04060a] relative overflow-hidden border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-cyan-400">
            <Atom className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
            <span>КИБЕР-ИНЖЕНЕРИЯ ПОЛНОГО ЦИКЛА</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight uppercase leading-[1.08]">
            Стек Проектирования 2150: от квантового эскиза до цифрового двойника
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light font-sans">
            ОсОО «ГРАНД Плюс» обладает Государственной Лицензией I категории без ограничений по высотности и сложности, выполняя генеральное проектирование мегаструктур с гарантией сейсмостойкости 9.5 MSK.
          </p>
        </div>

        {/* Interactive Services Layout: Left Tabs / Right Detailed Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Services Left Column List */}
          <div className="lg:col-span-5 space-y-3 font-mono">
            {SERVICES_DATA.map((service) => {
              const isSelected = service.id === selectedServiceId;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 relative group ${
                    isSelected
                      ? 'bg-cyan-950/40 border-cyan-400 shadow-[0_0_25px_rgba(0,240,255,0.2)] translate-x-1'
                      : 'hud-panel hover:border-cyan-500/40'
                  }`}
                >
                  {isSelected && <div className="hud-corner-tl" />}
                  {isSelected && <div className="hud-corner-br" />}

                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                    isSelected 
                      ? 'bg-cyan-400 text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]' 
                      : 'bg-black/60 text-cyan-400/80 border border-cyan-500/20'
                  }`}>
                    {getIcon(service.iconName)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-mono text-cyan-400 font-bold">
                        // 0{service.number}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-400 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-cyan-400" />
                        {service.timeline}
                      </span>
                    </div>
                    <h3 className={`text-sm sm:text-base font-display font-bold transition-colors ${
                      isSelected ? 'text-white' : 'text-neutral-300'
                    }`}>
                      {service.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1 line-clamp-2 leading-relaxed font-sans font-light">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Service Details Card (Right Column) */}
          <div className="lg:col-span-7 hud-panel rounded-2xl sm:rounded-3xl p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden">
            <div className="hud-corner-tl" />
            <div className="hud-corner-br" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Header */}
              <div className="border-b border-cyan-500/20 pb-5">
                <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-2">
                  <span>МОДУЛЬ // 0{selectedService.number}</span>
                  <span className="bg-black/70 border border-cyan-500/30 px-2.5 py-1 rounded text-cyan-300">
                    Стандарты: СНиП КР / Neural BIM 5D
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight uppercase">
                  {selectedService.title}
                </h3>
                <p className="text-neutral-300 text-sm sm:text-base mt-3 leading-relaxed font-sans font-light">
                  {selectedService.fullDesc}
                </p>
              </div>

              {/* Composition of deliverables */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>Состав цифровой документации и спецификаций:</span>
                </h4>
                <div className="space-y-2.5">
                  {selectedService.deliverables.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="p-3 bg-black/60 border border-cyan-500/15 rounded-xl flex items-start gap-3 text-xs sm:text-sm text-neutral-200"
                    >
                      <Zap className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Software stack */}
              <div className="pt-2">
                <span className="text-[11px] font-mono uppercase text-neutral-400 block mb-2">
                  САПР & Квантовые вычислительные комплексы:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedService.softwareUsed.map((sw, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 text-xs font-mono bg-black/60 border border-cyan-500/25 text-cyan-300 rounded-lg"
                    >
                      {sw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
                <div className="text-xs text-neutral-400">
                  Цикл разработки: <span className="text-cyan-300 font-bold">{selectedService.timeline}</span>
                </div>
                <button
                  onClick={() => onOpenConsultation(selectedService.title)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)] cursor-pointer"
                >
                  <span>Инициировать раздел</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
