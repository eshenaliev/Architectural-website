import React, { useState } from 'react';
import { 
  Building2, 
  Compass, 
  Home, 
  Trees, 
  Cpu, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  CheckCircle2
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
      case 'Home':
        return <Home className="w-5 h-5" />;
      case 'Trees':
        return <Trees className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      default:
        return <Compass className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#16171a] relative overflow-hidden border-t border-[#c5a880]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-[0.25em] text-[#c5a880]">
            <Compass className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>УСЛУГИ АРХИТЕКТУРНОГО ПРОЕКТИРОВАНИЯ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#f4efe6] tracking-tight leading-[1.1]">
            Комплексное проектирование: <br />
            <span className="italic text-[#c5a880]">
              от эскиза фасада до ввода объекта
            </span>
          </h2>
          <p className="text-[#a89f91] text-sm sm:text-base leading-relaxed font-light font-sans">
            ОсОО «ГРАНД Плюс» обладает Государственной Лицензией I категории Госстроя КР, осуществляя генеральное проектирование классических усадеб, резиденций и общественных комплексов.
          </p>
        </div>

        {/* Interactive Services Layout: Left Tabs / Right Detailed Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Services Left Column List */}
          <div className="lg:col-span-5 space-y-3 font-serif">
            {SERVICES_DATA.map((service) => {
              const isSelected = service.id === selectedServiceId;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`p-5 border transition-all cursor-pointer flex items-start gap-4 relative group ${
                    isSelected
                      ? 'bg-[#121315] border-[#c5a880] shadow-sm translate-x-1'
                      : 'bg-[#1a1b1f] border-[#c5a880]/20 hover:border-[#c5a880]/50'
                  }`}
                >
                  <div className={`w-10 h-10 flex items-center justify-center flex-shrink-0 transition-colors border ${
                    isSelected 
                      ? 'bg-[#c5a880] text-[#121315] border-[#c5a880]' 
                      : 'bg-[#121315] text-[#c5a880] border-[#c5a880]/30'
                  }`}>
                    {getIcon(service.iconName)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] tracking-widest text-[#c5a880] uppercase">
                        Раздел // 0{service.number}
                      </span>
                      <span className="text-[10px] text-[#8c8477] flex items-center gap-1 font-sans">
                        <Clock className="w-3 h-3 text-[#c5a880]" />
                        {service.timeline}
                      </span>
                    </div>
                    <h3 className={`text-sm sm:text-base font-serif font-medium transition-colors ${
                      isSelected ? 'text-[#f4efe6]' : 'text-[#cfc8bd]'
                    }`}>
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#a89f91] mt-1 line-clamp-2 leading-relaxed font-sans font-light">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Service Details Card (Right Column) */}
          <div className="lg:col-span-7 classic-frame p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden">
            <div className="classic-tick-tl" />
            <div className="classic-tick-br" />

            <div className="relative z-10 space-y-6">
              {/* Header */}
              <div className="border-b border-[#c5a880]/20 pb-5">
                <div className="flex items-center justify-between text-xs font-serif text-[#c5a880] mb-2">
                  <span>РАЗДЕЛ // 0{selectedService.number}</span>
                  <span className="bg-[#121315] border border-[#c5a880]/30 px-2.5 py-1 text-[#d5cfc5]">
                    СНиП КР • Золотое сечение
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#f4efe6] font-medium leading-snug">
                  {selectedService.title}
                </h3>
                <p className="text-[#a89f91] text-sm sm:text-base mt-3 leading-relaxed font-sans font-light">
                  {selectedService.fullDesc}
                </p>
              </div>

              {/* Composition of deliverables */}
              <div>
                <h4 className="text-xs font-serif uppercase tracking-widest text-[#c5a880] mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a880]" />
                  <span>Состав проектной документации и чертежей:</span>
                </h4>
                <div className="space-y-2.5">
                  {selectedService.deliverables.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="p-3 bg-[#121315]/80 border border-[#c5a880]/15 flex items-start gap-3 text-xs sm:text-sm text-[#d5cfc5] font-light"
                    >
                      <span className="text-[#c5a880] font-serif font-bold text-xs mt-0.5">0{idx + 1}.</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Software stack */}
              <div className="pt-2">
                <span className="text-[11px] font-serif uppercase text-[#8c8477] block mb-2">
                  Программные комплексы и САПР:
                </span>
                <div className="flex flex-wrap gap-2 font-serif text-xs">
                  {selectedService.softwareUsed.map((sw, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 bg-[#121315] border border-[#c5a880]/20 text-[#c5a880]"
                    >
                      {sw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#c5a880]/20 flex flex-col sm:flex-row items-center justify-between gap-4 font-serif">
                <div className="text-xs text-[#a89f91]">
                  Срок разработки: <span className="text-[#f4efe6] font-medium">{selectedService.timeline}</span>
                </div>
                <button
                  onClick={() => onOpenConsultation(selectedService.title)}
                  className="w-full sm:w-auto px-6 py-3 bg-[#c5a880] hover:bg-[#d8c09d] text-[#121315] font-medium text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Заказать разработку раздела</span>
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
