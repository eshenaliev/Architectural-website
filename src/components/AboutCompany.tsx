import React from 'react';
import { 
  Building, 
  Users, 
  Quote, 
  Star,
  FileBadge,
  Atom,
  ShieldCheck,
  Zap,
  Layers
} from 'lucide-react';
import { COMPANY_INFO, TEAM_MEMBERS, TESTIMONIALS } from '../data/companyData';

export const AboutCompany: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#030407] relative overflow-hidden border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-20">
        
        {/* Section 1: Bureau Story & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-cyan-400">
              <Atom className="w-4 h-4 text-cyan-400 animate-spin" />
              <span>КИБЕР-АРХИТЕКТУРНОЕ БЮРО «ГРАНД ПЛЮС»</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight uppercase leading-[1.08]">
              Архитектура 2150 года: Города будущего в Сердце Азии
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-sans font-light">
              Архитектурная компания <strong className="text-white">ОсОО «ГРАНД Плюс»</strong> (GRAND PLUS FUTURE ARCHITECTURE) основана в Бишкеке в 2007 году. Мы создаем будущее цивилизации: многоуровневые кибер-аркологии, графеновые экзоскелеты и автономные экосистемы обитания, защищенные от смога и сейсмических катастроф.
            </p>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-sans font-light">
              Отказываясь от устаревших шаблонов, мы проектируем здания как единые живые организмы: вертикальные транспортные лифты на магнитной левитации, кинетические светопоглощающие фасады и алгоритмические пространственные каркасы 5D BIM.
            </p>

            {/* License Block */}
            <div className="hud-panel p-6 rounded-2xl flex items-start gap-4 relative">
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />

              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center text-cyan-400 flex-shrink-0">
                <FileBadge className="w-6 h-6" />
              </div>
              <div className="space-y-1 text-xs font-mono">
                <div className="font-bold text-white text-sm">
                  {COMPANY_INFO.licenseNumber}
                </div>
                <div className="text-cyan-400">
                  Государственный комитет по делам строительства и архитектуры КР
                </div>
                <p className="text-neutral-300 leading-normal pt-1 font-sans font-light">
                  I категория допуска: генеральное проектирование мегаструктур без ограничений по высотности и сложности при расчетной сейсмичности строительной площадки 9.5 MSK.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image / Visual Matrix */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden hud-panel p-2">
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />

              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-black">
                <img
                  src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80"
                  alt="Футуристическая архитектура бюро ГРАНД Плюс"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-cyan-500/30">
                  <div className="grid grid-cols-3 gap-4 text-center divide-x divide-cyan-500/20 font-mono">
                    <div>
                      <div className="text-2xl font-black text-cyan-400">820k+</div>
                      <div className="text-[9px] text-neutral-400 uppercase">м² спроектировано</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-white">160+</div>
                      <div className="text-[9px] text-neutral-400 uppercase">Гиперструктур</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-emerald-400">9.5</div>
                      <div className="text-[9px] text-neutral-400 uppercase">Сейсмо-Щит MSK</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Leadership Team */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
                <Users className="w-3.5 h-3.5" />
                <span>КОЛЛЕГИЯ ГАП & ВЕДУЩИХ ИНЖЕНЕРОВ</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight uppercase">
                Руководство и Создатели Кибер-Аркологии
              </h3>
            </div>
            <p className="text-xs font-mono text-neutral-400">
              В проектной команде 32 ведущих специалиста высшей категории
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, i) => (
              <div 
                key={i} 
                className="hud-panel rounded-2xl overflow-hidden transition-all p-4 space-y-4 group relative"
              >
                <div className="aspect-[4/4] rounded-xl overflow-hidden relative bg-black">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-[10px] font-mono text-cyan-300 bg-black/80 px-2 py-0.5 rounded border border-cyan-500/30 backdrop-blur-sm">
                    {member.experience}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-base font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {member.name}
                  </h4>
                  <div className="text-xs font-medium text-cyan-400 font-mono">
                    {member.role}
                  </div>
                  <p className="text-[11px] text-neutral-400 leading-relaxed pt-1 font-sans font-light">
                    {member.credentials}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Client Reviews */}
        <div className="space-y-8 pt-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400">
            <Quote className="w-3.5 h-3.5" />
            <span>ОТЗЫВЫ ДЕВЕЛОПЕРОВ И ИНВЕСТОРОВ</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div 
                key={t.id} 
                className="hud-panel rounded-2xl p-6 flex flex-col justify-between space-y-4 relative"
              >
                <div className="hud-corner-tl" />
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-cyan-400">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-cyan-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300 italic leading-relaxed font-sans">
                    «{t.comment}»
                  </p>
                </div>

                <div className="border-t border-cyan-500/15 pt-4 space-y-1">
                  <div className="text-xs font-bold text-white font-display uppercase">
                    {t.clientName}
                  </div>
                  <div className="text-[11px] text-cyan-400 font-mono">
                    {t.role}, {t.company}
                  </div>
                  <div className="text-[10px] text-neutral-400 font-mono">
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
