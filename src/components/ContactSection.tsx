import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck,
  Compass
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ContactSectionProps {
  initialNotes?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  initialNotes = '' 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Загородная усадьба в стиле классицизма',
    area: '',
    message: initialNotes || '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  React.useEffect(() => {
    if (initialNotes) {
      setFormData((prev) => ({ ...prev, message: initialNotes }));
    }
  }, [initialNotes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const whatsappMessage = encodeURIComponent(
    `Здравствуйте, ОсОО «ГРАНД Плюс»! Интересует индивидуальное архитектурное проектирование: ${formData.projectType}, площадь: ${formData.area || 'уточняется'}. ${formData.name ? `Меня зовут ${formData.name}.` : ''}`
  );

  return (
    <section id="contacts" className="py-24 sm:py-32 bg-[#121315] relative overflow-hidden border-t border-[#c5a880]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-[0.25em] text-[#c5a880]">
            <Compass className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>КОНТАКТЫ АРХИТЕКТУРНОГО БЮРО</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#f4efe6] tracking-tight leading-[1.1]">
            Обсудить Проект с Главным Архитектором
          </h2>
          <p className="text-[#a89f91] text-sm sm:text-base font-light font-sans leading-relaxed">
            Приглашаем вас в наш офис в Бишкеке для чашки кофе и ознакомления с образцами натурального камня Сары-Таш, мрамора и чертежами реализованных усадеб.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Office info & Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="classic-frame p-6 sm:p-8 space-y-6 relative font-serif">
              <div className="classic-tick-tl" />
              <div className="classic-tick-br" />
              
              <div className="space-y-1">
                <span className="text-xs uppercase text-[#c5a880] block tracking-widest">
                  Центральный офис в Бишкеке
                </span>
                <h3 className="text-xl text-[#f4efe6] font-normal uppercase">
                  ОсОО «ГРАНД Плюс»
                </h3>
                <p className="text-xs text-[#a89f91]">
                  {COMPANY_INFO.licenseNumber}
                </p>
              </div>

              <div className="space-y-4 text-sm text-[#cfc8bd]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#c5a880] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#f4efe6] text-xs uppercase tracking-wider">Адрес бюро:</div>
                    <div className="text-[#d5cfc5] text-xs sm:text-sm font-sans mt-0.5">{COMPANY_INFO.address}</div>
                    <div className="text-[11px] text-[#c5a880] mt-0.5">Бизнес-центр «Grand», 4 этаж</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#c5a880] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#f4efe6] text-xs uppercase tracking-wider">Телефоны бюро:</div>
                    <div className="text-xs sm:text-sm space-y-1 mt-1 font-sans">
                      <a href={`tel:${COMPANY_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`} className="block text-[#d5cfc5] hover:text-[#c5a880] transition-colors">
                        {COMPANY_INFO.phonePrimary} (Приемная директора)
                      </a>
                      <a href={`tel:${COMPANY_INFO.phoneMobile.replace(/[^0-9+]/g, '')}`} className="block text-[#d5cfc5] hover:text-[#c5a880] transition-colors">
                        {COMPANY_INFO.phoneMobile} (Главный архитектор ГАП)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#c5a880] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#f4efe6] text-xs uppercase tracking-wider">Электронная почта:</div>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#c5a880] hover:text-[#dfcaa7] font-sans text-xs transition-colors">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#c5a880] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#f4efe6] text-xs uppercase tracking-wider">Часы работы:</div>
                    <div className="text-xs text-[#a89f91] font-sans">{COMPANY_INFO.workingHours}</div>
                  </div>
                </div>
              </div>

              {/* Fast Messengers */}
              <div className="pt-4 border-t border-[#c5a880]/20 space-y-2">
                <div className="text-xs uppercase text-[#a89f91] tracking-wider">
                  Прямая связь с архитектором:
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`https://wa.me/996700908822?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#18191c] border border-[#c5a880]/30 hover:border-[#c5a880] text-[#c5a880] flex items-center justify-center gap-2 text-xs font-medium transition-all"
                  >
                    <MessageSquare className="w-4 h-4 text-[#c5a880]" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href="https://t.me/grandplus_arch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#18191c] border border-[#c5a880]/30 hover:border-[#c5a880] text-[#cfc8bd] hover:text-[#f4efe6] flex items-center justify-center gap-2 text-xs font-medium transition-all"
                  >
                    <Send className="w-4 h-4 text-[#c5a880]" />
                    <span>Telegram</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Bishkek Geolocation Card */}
            <div className="classic-frame p-5 text-xs text-[#a89f91] space-y-2 relative font-sans font-light">
              <div className="flex items-center gap-2 text-[#c5a880] font-serif font-medium">
                <Compass className="w-4 h-4 text-[#c5a880]" />
                <span>Ориентиры проезда к офису</span>
              </div>
              <p className="leading-relaxed">
                Пересечение проспекта Манаса и ул. Боконбаева. Удобный подъезд с собственным охраняемым паркингом для гостей бюро.
              </p>
            </div>
          </div>

          {/* Right Column: Consultation / Request Form (7 cols) */}
          <div className="lg:col-span-7 classic-frame p-6 sm:p-10 relative">
            <div className="classic-tick-tl" />
            <div className="classic-tick-br" />

            {isSubmitted ? (
              <div className="text-center py-12 space-y-5 animate-in fade-in font-serif">
                <div className="w-16 h-16 bg-[#c5a880]/15 text-[#c5a880] flex items-center justify-center mx-auto border border-[#c5a880]/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl text-[#f4efe6] font-normal uppercase">
                  Ваша заявка успешно принята!
                </h3>
                <p className="text-[#a89f91] text-sm max-w-md mx-auto leading-relaxed font-sans font-light">
                  Главный архитектор проектов ОсОО «ГРАНД Плюс» свяжется с вами в течение рабочего дня для согласования удобного времени консультации.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 font-serif">
                  <a
                    href={`https://wa.me/996700908822?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-[#c5a880] text-[#121315] font-medium text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Написать сразу в WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        projectType: 'Загородная усадьба в стиле классицизма',
                        area: '',
                        message: '',
                      });
                    }}
                    className="px-5 py-3 bg-[#18191c] border border-[#c5a880]/30 hover:border-[#c5a880] text-xs text-[#cfc8bd] transition-colors uppercase tracking-wider"
                  >
                    Заполнить еще одну заявку
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-serif">
                <div>
                  <h3 className="text-xl sm:text-2xl text-[#f4efe6] mb-1 font-normal">
                    Заявка на Проектирование Объекта
                  </h3>
                  <p className="text-xs text-[#a89f91] font-sans font-light">
                    Укажите параметры вашего будущего дома, и мы подготовим первичный градостроительный анализ и расчет сметы.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-[#c5a880]">
                      Ваше имя / Заказчик *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Например: Улан Сатыбалдиев"
                      className="w-full px-4 py-3 bg-[#16171a] border border-[#c5a880]/25 text-[#f4efe6] placeholder-[#6b6459] text-sm focus:outline-none focus:border-[#c5a880] transition-colors font-sans"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-[#c5a880]">
                      Телефон / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+996 (___) __-__-__"
                      className="w-full px-4 py-3 bg-[#16171a] border border-[#c5a880]/25 text-[#f4efe6] placeholder-[#6b6459] text-sm focus:outline-none focus:border-[#c5a880] transition-colors font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Building Type */}
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-[#c5a880]">
                      Тип объекта
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#16171a] border border-[#c5a880]/25 text-[#f4efe6] text-sm focus:outline-none focus:border-[#c5a880] transition-colors font-sans"
                    >
                      <option value="Загородная усадьба в стиле классицизма">Загородная усадьба в стиле классицизма</option>
                      <option value="Классическая резиденция / особняк">Классическая резиденция / особняк</option>
                      <option value="Неоклассический клубный дом">Неоклассический клубный дом</option>
                      <option value="Общественное здание / дворец торжеств">Общественное здание / дворец торжеств</option>
                      <option value="Курортная вилла на озере Иссык-Куль">Курортная вилла на озере Иссык-Куль</option>
                      <option value="Парковый ансамбль и ландшафт">Парковый ансамбль и ландшафт</option>
                    </select>
                  </div>

                  {/* Area */}
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-[#c5a880]">
                      Ориентировочная площадь (м²)
                    </label>
                    <input
                      type="text"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      placeholder="Например: 850 м²"
                      className="w-full px-4 py-3 bg-[#16171a] border border-[#c5a880]/25 text-[#f4efe6] placeholder-[#6b6459] text-sm focus:outline-none focus:border-[#c5a880] transition-colors font-sans"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#c5a880]">
                    Электронная почта для сметы
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="client@mail.kg"
                    className="w-full px-4 py-3 bg-[#16171a] border border-[#c5a880]/25 text-[#f4efe6] placeholder-[#6b6459] text-sm focus:outline-none focus:border-[#c5a880] transition-colors font-sans"
                  />
                </div>

                {/* Project Details / Note */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#c5a880]">
                    Пожелания к проекту (локация участка, рельеф, материалы)
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Укажите район строительства (например, Байтик, Чон-Арык, Иссык-Куль), пожелания по фасаду (травертин Сары-Таш, гранит) и составу комнат..."
                    className="w-full px-4 py-3 bg-[#16171a] border border-[#c5a880]/25 text-[#f4efe6] placeholder-[#6b6459] text-sm focus:outline-none focus:border-[#c5a880] transition-colors resize-none font-sans font-light"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-[#c5a880] hover:bg-[#d8c09d] text-[#121315] font-medium text-xs uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-sm"
                >
                  {submitting ? (
                    <span>Отправка данных...</span>
                  ) : (
                    <>
                      <span>Направить заявку главному архитектору</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-[#8c8477] text-center font-sans font-light">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#c5a880] flex-shrink-0" />
                  <span>Строгая конфиденциальность персональных данных согласно законодательству КР.</span>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
