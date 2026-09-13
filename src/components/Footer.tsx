import React from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Award, 
  ArrowUp, 
  ShieldCheck,
  Atom,
  Zap
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020306] border-t border-cyan-500/20 text-neutral-400 text-xs relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-cyan-500/15">
          
          {/* Col 1 & 2: Brand & License */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-black border border-cyan-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                <span className="font-display font-black text-cyan-400 text-sm">Г+</span>
              </div>
              <div>
                <span className="font-display font-black text-base text-white tracking-wider uppercase block">
                  ГРАНД <span className="text-cyan-400 font-light">ПЛЮС</span>
                </span>
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">
                  FUTURE CYBER-ARCHITECTURE STUDIO
                </span>
              </div>
            </div>

            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm font-light font-sans">
              Генеральное проектирование кибер-аркологий, вертикальных модульных городов и мегаструктур будущего. Расчет квантовой сейсмозащиты 9.5 MSK на территории Кыргызской Республики и Центральной Азии.
            </p>

            <div className="hud-panel p-3 rounded-xl space-y-1 font-mono text-[11px] relative">
              <div className="text-cyan-400 flex items-center gap-1.5 font-semibold">
                <Award className="w-3.5 h-3.5" />
                <span>{COMPANY_INFO.licenseNumber}</span>
              </div>
              <div className="text-neutral-400">
                I категория допуска Госстроя Кыргызской Республики
              </div>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs uppercase tracking-wider text-cyan-400 font-bold">
              // Навигация
            </h4>
            <ul className="space-y-2">
              <li><a href="#portfolio" className="hover:text-cyan-300 transition-colors">Мегаструктуры 2150</a></li>
              <li><a href="#manifesto" className="hover:text-cyan-300 transition-colors">Манифест Кибер-Аркологии</a></li>
              <li><a href="#services" className="hover:text-cyan-300 transition-colors">Нейро-BIM & Инженерия</a></li>
              <li><a href="#calculator" className="hover:text-cyan-300 transition-colors">Квант-Смета</a></li>
              <li><a href="#engineering" className="hover:text-cyan-300 transition-colors">Сейсмощит 9.5 MSK</a></li>
              <li><a href="#about" className="hover:text-cyan-300 transition-colors">О бюро и ведущих ГАПах</a></li>
              <li><a href="#contacts" className="hover:text-cyan-300 transition-colors">Контакты приемной</a></li>
            </ul>
          </div>

          {/* Col 4: Typologies */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs uppercase tracking-wider text-cyan-400 font-bold">
              // Типологии объектов
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li>Вертикальные кибер-аркологии</li>
              <li>Графеновые диагрид-небоскребы</li>
              <li>Биосферные жилые капсулы</li>
              <li>Дроно-порты и высотные терминалы</li>
              <li>Квантовые исследовательские хабы</li>
              <li>Планетарные мастер-планы</li>
            </ul>
          </div>

          {/* Col 5: Contacts Summary */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs uppercase tracking-wider text-cyan-400 font-bold">
              // Терминал связи
            </h4>
            <div className="space-y-2 text-xs">
              <p className="text-neutral-200">{COMPANY_INFO.phonePrimary}</p>
              <p className="text-emerald-400">{COMPANY_INFO.phoneWhatsApp} (WhatsApp)</p>
              <p className="text-neutral-300">{COMPANY_INFO.email}</p>
              <p className="text-neutral-400 text-[11px] pt-1">
                Кыргызстан, г. Бишкек, Башня «Вектор 2100», ул. Ибраимова, 115/1
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <div>
            © {new Date().getFullYear()} ОсОО «ГРАНД Плюс». Neo-Futuristic Architecture & Quantum Seismic Engineering.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
          >
            <span>Вверх</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
