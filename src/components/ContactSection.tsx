import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle, 
  MessageSquare, 
  ShieldCheck,
  Atom,
  Zap,
  Radio
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
    projectType: 'Кибер-Аркология / Модульный Город',
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
    }, 700);
  };

  const whatsappMessage = encodeURIComponent(
    `Здравствуйте, ОсОО «ГРАНД Плюс»! Интересует генеральное проектирование: ${formData.projectType}, масштаб: ${formData.area || 'уточняется'}. ${formData.name ? `Меня зовут ${formData.name}.` : ''}`
  );

  return (
    <section id="contacts" className="py-24 sm:py-32 bg-[#020306] relative overflow-hidden border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>ТЕРМИНАЛ СВЯЗИ С ГАП БЮРО</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight uppercase leading-[1.08]">
            Инициируйте Проект Будущего
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base font-light font-sans">
            Приглашаем на встречу в наш высотный офис в Бишкеке или проведем предварительную защищенную видеоконференцию. Выполним первичный градостроительный и квантово-сейсмический анализ участка.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Office info & Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="hud-panel rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-6 relative">
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />
              
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-cyan-400 block tracking-wider">
                  Центральный офис в Кыргызстане
                </span>
                <h3 className="text-xl font-display font-bold text-white uppercase">
                  ОсОО «ГРАНД Плюс»
                </h3>
                <p className="text-xs text-neutral-400 font-mono">
                  {COMPANY_INFO.licenseNumber}
                </p>
              </div>

              <div className="space-y-4 text-sm text-neutral-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white font-display text-xs uppercase tracking-wider">Локация проектного штаба:</div>
                    <div className="text-neutral-300 text-xs sm:text-sm font-sans mt-0.5">{COMPANY_INFO.address}</div>
                    <div className="text-[11px] text-cyan-400/80 font-mono mt-0.5">Башня «Вектор 2100», 18 этаж</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white font-display text-xs uppercase tracking-wider">Линии оперативной связи:</div>
                    <div className="font-mono text-xs sm:text-sm space-y-1 mt-1">
                      <a href={`tel:${COMPANY_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`} className="block hover:text-cyan-400 transition-colors">
                        {COMPANY_INFO.phonePrimary} (Приемная дирекции)
                      </a>
                      <a href={`tel:${COMPANY_INFO.phoneMobile.replace(/[^0-9+]/g, '')}`} className="block hover:text-cyan-400 transition-colors">
                        {COMPANY_INFO.phoneMobile} (ГАП / Технический директор)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white font-display text-xs uppercase tracking-wider">Канал документации:</div>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-cyan-300 hover:text-cyan-200 font-mono text-xs transition-colors">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white font-display text-xs uppercase tracking-wider">Режим работы бюро:</div>
                    <div className="text-xs text-neutral-400 font-mono">{COMPANY_INFO.workingHours}</div>
                  </div>
                </div>
              </div>

              {/* Fast Messengers */}
              <div className="pt-4 border-t border-cyan-500/20 space-y-2 font-mono">
                <div className="text-xs uppercase text-neutral-400 tracking-wider">
                  Быстрые каналы связи:
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`https://wa.me/996700908822?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 hover:bg-emerald-900/40 text-emerald-300 flex items-center justify-center gap-2 text-xs font-semibold transition-all shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href="https://t.me/grandplus_arch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/40 hover:bg-cyan-900/40 text-cyan-300 flex items-center justify-center gap-2 text-xs font-semibold transition-all shadow-[0_0_15px_rgba(0,240,255,0.15)]"
                  >
                    <Send className="w-4 h-4 text-cyan-400" />
                    <span>Telegram</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Bishkek Geolocation Card */}
            <div className="hud-panel p-5 rounded-2xl text-xs text-neutral-300 space-y-2 relative">
              <div className="flex items-center gap-2 text-cyan-400 font-mono">
                <Atom className="w-4 h-4 text-cyan-400" />
                <span>Ориентиры проезда к башне</span>
              </div>
              <p className="leading-relaxed font-sans font-light">
                Пересечение ул. Ибраимова и ул. Боконбаева. Удобный подлет для дронов (вертолетная площадка на кровле) и подземный паркинг на 120 электромобилей.
              </p>
            </div>
          </div>

          {/* Right Column: Consultation / Request Form (7 cols) */}
          <div className="lg:col-span-7 hud-panel rounded-2xl sm:rounded-3xl p-6 sm:p-10 relative">
            <div className="hud-corner-tl" />
            <div className="hud-corner-br" />

            {isSubmitted ? (
              <div className="text-center py-12 space-y-5 animate-in fade-in">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto border border-cyan-500/40 shadow-[0_0_30px_rgba(0,240,255,0.3)]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white uppercase">
                  Телеметрия проекта успешно передана!
                </h3>
                <p className="text-neutral-300 text-sm max-w-md mx-auto leading-relaxed font-sans font-light">
                  Главный архитектор проектов (ГАП) и ведущий инженер ОсОО «ГРАНД Плюс» проанализируют параметры объекта и свяжутся с вами в течение 2 рабочих часов.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 font-mono">
                  <a
                    href={`https://wa.me/996700908822?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Подтвердить в WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        projectType: 'Кибер-Аркология / Модульный Город',
                        area: '',
                        message: '',
                      });
                    }}
                    className="px-5 py-3 rounded-xl bg-black/60 border border-cyan-500/30 hover:border-cyan-400 text-xs text-neutral-300 transition-colors"
                  >
                    Отправить новую спецификацию
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-1 uppercase">
                    Спецификация Запроса на Проектирование
                  </h3>
                  <p className="text-xs text-neutral-400 font-sans font-light">
                    Заполните параметры, и мы подготовим 5D BIM резюме, календарный план и сметный расчет.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5 font-mono">
                    <label className="text-xs uppercase tracking-wider text-cyan-400">
                      Имя инициатора / Корпорация *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Например: Азамат, «Skyline Developments»"
                      className="w-full px-4 py-3 rounded-xl bg-black/70 border border-cyan-500/25 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-cyan-400 transition-colors font-sans"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5 font-mono">
                    <label className="text-xs uppercase tracking-wider text-cyan-400">
                      Терминал связи / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+996 (___) __-__-__"
                      className="w-full px-4 py-3 rounded-xl bg-black/70 border border-cyan-500/25 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Building Type */}
                  <div className="space-y-1.5 font-mono">
                    <label className="text-xs uppercase tracking-wider text-cyan-400">
                      Класс гиперструктуры
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black border border-cyan-500/25 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors font-sans"
                    >
                      <option value="Кибер-Аркология / Модульный Город">Кибер-Аркология / Модульный Город</option>
                      <option value="Биоморфная Вилла / Резиденция">Биоморфная Вилла / Резиденция</option>
                      <option value="Нео-Небоскреб Скай-Сити">Нео-Небоскреб Скай-Сити</option>
                      <option value="Квантовый R&D Технопарк">Квантовый R&D Технопарк</option>
                      <option value="Аква-Курорт на Биосферных Платформах">Аква-Курорт на Биосферных Платформах</option>
                      <option value="Автономный Дата-Хаб & Дроно-Порт">Автономный Дата-Хаб & Дроно-Порт</option>
                      <option value="Мастер-план территории Будущего">Мастер-план территории Будущего</option>
                    </select>
                  </div>

                  {/* Area */}
                  <div className="space-y-1.5 font-mono">
                    <label className="text-xs uppercase tracking-wider text-cyan-400">
                      Проектируемая площадь (м²)
                    </label>
                    <input
                      type="text"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      placeholder="Например: 35 000 м²"
                      className="w-full px-4 py-3 rounded-xl bg-black/70 border border-cyan-500/25 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5 font-mono">
                  <label className="text-xs uppercase tracking-wider text-cyan-400">
                    Электронная почта для BIM-досье
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="architect@holdings.kg"
                    className="w-full px-4 py-3 rounded-xl bg-black/70 border border-cyan-500/25 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                  />
                </div>

                {/* Project Details / Note */}
                <div className="space-y-1.5 font-mono">
                  <label className="text-xs uppercase tracking-wider text-cyan-400">
                    Техническое задание / Вводные параметры
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Укажите координаты или адрес участка, желаемую высотность, сейсмичность или особые требования к автономности..."
                    className="w-full px-4 py-3 rounded-xl bg-black/70 border border-cyan-500/25 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none font-sans"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 font-mono"
                >
                  {submitting ? (
                    <span>Синхронизация данных...</span>
                  ) : (
                    <>
                      <span>Передать спецификацию в ОсОО «ГРАНД Плюс»</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400 text-center font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Полный протокол конфиденциальности NDA по законам Кыргызской Республики.</span>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
