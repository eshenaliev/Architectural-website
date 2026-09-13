import React from 'react';
import { 
  Award, 
  ArrowUp, 
  Compass,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0e0f11] border-t border-[#c5a880]/20 text-[#a89f91] text-xs relative overflow-hidden font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#c5a880]/15">
          
          {/* Col 1 & 2: Brand & License */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border border-[#c5a880]/40 bg-[#16171a] flex items-center justify-center">
                <span className="font-serif font-semibold text-[#c5a880] text-sm tracking-widest">Г+</span>
              </div>
              <div>
                <span className="font-serif text-base text-[#f4efe6] tracking-wider uppercase block">
                  ГРАНД <span className="text-[#c5a880] font-light">ПЛЮС</span>
                </span>
                <span className="text-[10px] text-[#8c8477] uppercase tracking-[0.2em] block">
                  АРХИТЕКТУРНОЕ БЮРО • С 2007 ГОДА
                </span>
              </div>
            </div>

            <p className="text-[#a89f91] text-xs leading-relaxed max-w-sm font-light font-sans">
              Индивидуальное проектирование частных загородных усадеб, резиденций и особняков в традициях академического классицизма. Расчет сейсмостойкости до 9 баллов на территории Кыргызстана.
            </p>

            <div className="classic-frame p-3 space-y-1 text-[11px] relative">
              <div className="text-[#c5a880] flex items-center gap-1.5 font-medium">
                <Award className="w-3.5 h-3.5" />
                <span>{COMPANY_INFO.licenseNumber}</span>
              </div>
              <div className="text-[#8c8477]">
                I категория допуска Госстроя Кыргызской Республики
              </div>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#c5a880]">
              Навигация
            </h4>
            <ul className="space-y-2 text-[#cfc8bd]">
              <li><a href="#portfolio" className="hover:text-[#c5a880] transition-colors">Портфолио резиденций</a></li>
              <li><a href="#philosophy" className="hover:text-[#c5a880] transition-colors">Философия зодчества</a></li>
              <li><a href="#services" className="hover:text-[#c5a880] transition-colors">Услуги и состав проекта</a></li>
              <li><a href="#calculator" className="hover:text-[#c5a880] transition-colors">Калькулятор сметы</a></li>
              <li><a href="#engineering" className="hover:text-[#c5a880] transition-colors">Сейсмостойкость 9 баллов</a></li>
              <li><a href="#about" className="hover:text-[#c5a880] transition-colors">Об архитектурном бюро</a></li>
              <li><a href="#contacts" className="hover:text-[#c5a880] transition-colors">Контакты и адрес</a></li>
            </ul>
          </div>

          {/* Col 4: Typologies */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#c5a880]">
              Типологии объектов
            </h4>
            <ul className="space-y-2 text-[#8c8477]">
              <li>Загородные усадьбы и поместья</li>
              <li>Классические городские особняки</li>
              <li>Представительские резиденции</li>
              <li>Курортные виллы на Иссык-Куле</li>
              <li>Парковые ротонды и павильоны</li>
              <li>Интерьеры с мраморными порталами</li>
            </ul>
          </div>

          {/* Col 5: Contacts Summary */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#c5a880]">
              Контакты бюро
            </h4>
            <div className="space-y-2 text-xs font-sans">
              <p className="text-[#f4efe6]">{COMPANY_INFO.phonePrimary}</p>
              <p className="text-[#c5a880]">{COMPANY_INFO.phoneWhatsApp} (WhatsApp)</p>
              <p className="text-[#a89f91]">{COMPANY_INFO.email}</p>
              <p className="text-[#8c8477] text-[11px] pt-1">
                Кыргызстан, г. Бишкек, пр. Манаса, 115, БЦ «Grand», 4 этаж
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © 2007–{new Date().getFullYear()} ОсОО «ГРАНД Плюс». Классическое архитектурное проектирование и сейсмоинженерия.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#c5a880] hover:text-[#f4efe6] transition-colors cursor-pointer"
          >
            <span>В начало</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
