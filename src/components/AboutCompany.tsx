import React from 'react';
import { 
  Building, 
  Users, 
  Quote, 
  Star,
  FileBadge,
  ShieldCheck,
  Compass,
  Award
} from 'lucide-react';
import { COMPANY_INFO, TEAM_MEMBERS, TESTIMONIALS } from '../data/companyData';

export const AboutCompany: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#121315] relative overflow-hidden border-t border-[#c5a880]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-20">
        
        {/* Section 1: Bureau Story & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-[0.25em] text-[#c5a880]">
              <Compass className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>АРХИТЕКТУРНОЕ БЮРО «ГРАНД ПЛЮС»</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#f4efe6] tracking-tight leading-[1.1]">
              Традиции Академического Зодчества <br />
              <span className="italic text-[#c5a880]">
                с 2007 года в Кыргызстане
              </span>
            </h2>

            <p className="text-[#a89f91] text-sm sm:text-base leading-relaxed font-sans font-light">
              Архитектурная компания <strong className="text-[#f4efe6] font-medium">ОсОО «ГРАНД Плюс»</strong> основана в Бишкеке в 2007 году. На протяжении 18 лет мы проектируем частные загородные усадьбы, особняки и монументальные ансамбли по канонам золотого сечения и классической ордерной системы.
            </p>

            <p className="text-[#a89f91] text-sm sm:text-base leading-relaxed font-sans font-light">
              Каждое здание бюро создается как семейное родовое поместье, рассчитанное на века. Мы сочетаем благородство натурального кыргызского травертина Сары-Таш с монолитным железобетонным каркасом высшей категории сейсмостойкости до 9 баллов.
            </p>

            {/* License Block */}
            <div className="classic-frame p-6 flex items-start gap-4 relative">
              <div className="classic-tick-tl" />
              <div className="classic-tick-br" />

              <div className="w-12 h-12 bg-[#c5a880]/10 border border-[#c5a880]/40 flex items-center justify-center text-[#c5a880] flex-shrink-0">
                <FileBadge className="w-6 h-6" />
              </div>
              <div className="space-y-1 text-xs font-serif">
                <div className="font-medium text-[#f4efe6] text-sm">
                  {COMPANY_INFO.licenseNumber}
                </div>
                <div className="text-[#c5a880]">
                  Государственное агентство архитектуры, строительства и ЖКХ при Кабинете Министров КР
                </div>
                <p className="text-[#a89f91] leading-normal pt-1 font-sans font-light">
                  I категория государственного допуска: право генерального проектирования объектов высшей категории сложности без ограничений по высотности при сейсмичности площадки строительства до 9 баллов.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image / Visual Matrix */}
          <div className="lg:col-span-6 relative">
            <div className="classic-frame p-2 relative">
              <div className="classic-tick-tl" />
              <div className="classic-tick-br" />

              <div className="relative overflow-hidden aspect-[4/3] bg-[#16171a]">
                <img
                  src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80"
                  alt="Классическая архитектура бюро ГРАНД Плюс"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121315] via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 bg-[#121315]/90 backdrop-blur-md p-4 border border-[#c5a880]/30">
                  <div className="grid grid-cols-3 gap-4 text-center divide-x divide-[#c5a880]/20 font-serif">
                    <div>
                      <div className="text-2xl font-medium text-[#c5a880]">680k+</div>
                      <div className="text-[9px] text-[#a89f91] uppercase tracking-wider">м² спроектировано</div>
                    </div>
                    <div>
                      <div className="text-2xl font-medium text-[#f4efe6]">160+</div>
                      <div className="text-[9px] text-[#a89f91] uppercase tracking-wider">Объектов в портфолио</div>
                    </div>
                    <div>
                      <div className="text-2xl font-medium text-[#c5a880]">9.0</div>
                      <div className="text-[9px] text-[#a89f91] uppercase tracking-wider">Баллов СНиП КР</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Leadership Team */}
        <div className="space-y-8 font-serif">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a880] mb-2">
                <Users className="w-3.5 h-3.5" />
                <span>КОЛЛЕГИЯ АРХИТЕКТОРОВ И ИНЖЕНЕРОВ</span>
              </div>
              <h3 className="text-2xl sm:text-3xl text-[#f4efe6] font-normal">
                Руководство Архитектурного Бюро
              </h3>
            </div>
            <p className="text-xs text-[#a89f91]">
              В штате бюро 32 лицензированных специалиста академической школы
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, i) => (
              <div 
                key={i} 
                className="classic-frame overflow-hidden p-4 space-y-4 group relative"
              >
                <div className="aspect-[4/4] overflow-hidden relative bg-[#16171a]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121315]/90 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-[10px] text-[#c5a880] bg-[#121315]/90 px-2 py-0.5 border border-[#c5a880]/30 backdrop-blur-sm">
                    {member.experience}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-base font-serif font-medium text-[#f4efe6] group-hover:text-[#c5a880] transition-colors">
                    {member.name}
                  </h4>
                  <div className="text-xs text-[#c5a880]">
                    {member.role}
                  </div>
                  <p className="text-[11px] text-[#a89f91] leading-relaxed pt-1 font-sans font-light">
                    {member.credentials}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Client Reviews */}
        <div className="space-y-8 pt-6 font-serif">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a880]">
            <Quote className="w-3.5 h-3.5" />
            <span>ОТЗЫВЫ ВЛАДЕЛЬЦЕВ РЕЗИДЕНЦИЙ И ИНВЕСТОРОВ</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div 
                key={t.id} 
                className="classic-frame p-6 flex flex-col justify-between space-y-4 relative"
              >
                <div className="classic-tick-tl" />
                <div className="classic-tick-br" />

                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-[#c5a880]">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-[#c5a880]" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#d5cfc5] italic leading-relaxed font-sans font-light">
                    «{t.comment}»
                  </p>
                </div>

                <div className="border-t border-[#c5a880]/15 pt-4 space-y-1">
                  <div className="text-xs font-medium text-[#f4efe6] uppercase">
                    {t.clientName}
                  </div>
                  <div className="text-[11px] text-[#c5a880]">
                    {t.role}, {t.company}
                  </div>
                  <div className="text-[10px] text-[#8c8477]">
                    Объект: {t.projectTitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
