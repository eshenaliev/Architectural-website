import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface ContactSectionProps {
  onNavigateToWorks: () => void;
  currentLang?: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onNavigateToWorks,
  currentLang = 'RU',
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState(currentLang === 'RU' ? 'Частная резиденция' : 'Private Residence');
  const [message, setMessage] = useState('');

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.RU;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const projectTypes = currentLang === 'RU'
    ? ['Частная резиденция', 'Вилла / Шале', 'Общественное здание', 'Эко-курорт', 'Мебель и интерьер', 'Матрасы / Релакс']
    : currentLang === 'KY'
    ? ['Жеке вилла', 'Резиденция', 'Коомдук имарат', 'Эко-курорт', 'Эмерек жана интерьер', 'Матрастар']
    : currentLang === 'ZH'
    ? ['私人度假别墅', '山地豪宅', '公共与商业建筑', '生态度假园区', '高端家具与空间', '床垫与舒压系统']
    : ['Private Residence', 'Alpine Villa / Chalet', 'Public Building', 'Eco-Resort / Hospitality', 'Bespoke Furniture', 'Mattresses & Wellness'];

  return (
    <div className="w-full flex flex-col justify-between p-4 sm:p-5 lg:p-6 bg-white border border-neutral-200/80 min-h-[480px] lg:min-h-[500px] select-none">
      {/* Top Header */}
      <div className="border-b border-neutral-200 pb-2.5 sm:pb-3 shrink-0">
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-0.5">
          <span>{t.contact.number}</span>
          <span>/</span>
          <span className="uppercase tracking-widest text-[11px] font-sans text-neutral-600">{t.contact.category}</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-neutral-900 font-normal tracking-tight">
          {t.contact.title}
        </h2>
        <p className="font-serif text-xs sm:text-sm text-neutral-600 mt-0.5 font-light max-w-3xl">
          {t.contact.description}
        </p>
      </div>

      {/* Main Split: Form on left, Single Bishkek Office details on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4 my-2.5 sm:my-3 flex-1 min-h-0 items-stretch">
        {/* Form Container */}
        <div className="lg:col-span-7 bg-neutral-50/70 border border-neutral-200 p-4 sm:p-5 flex flex-col justify-between">
          {submitted ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-4 space-y-3">
              <CheckCircle2 className="w-10 h-10 text-neutral-900 stroke-[1.5]" />
              <h3 className="font-serif text-xl text-neutral-900 font-normal">
                {t.contact.inquiryReceived}
              </h3>
              <p className="text-xs text-neutral-600 font-sans max-w-sm leading-relaxed">
                {t.contact.thankYou}
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setEmail('');
                  setMessage('');
                }}
                className="mt-2 text-xs text-neutral-800 underline underline-offset-4 cursor-pointer hover:text-black font-sans"
              >
                {t.contact.sendAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between space-y-2.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-neutral-500 mb-1 font-medium">
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-3 py-1.5 bg-white border border-neutral-300 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors font-sans"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-neutral-500 mb-1 font-medium">
                    {t.contact.emailLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-3 py-1.5 bg-white border border-neutral-300 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-wider text-neutral-500 mb-1 font-medium">
                  {t.contact.typeLabel}
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-3 py-1.5 bg-white border border-neutral-300 text-xs text-neutral-800 focus:outline-none focus:border-black transition-colors cursor-pointer font-sans"
                >
                  {projectTypes.map((pt) => (
                    <option key={pt} value={pt}>{pt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-wider text-neutral-500 mb-1 font-medium">
                  {t.contact.messageLabel}
                </label>
                <textarea
                  rows={2}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full px-3 py-1.5 bg-white border border-neutral-300 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors resize-none font-sans"
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-[10px] text-neutral-400 font-sans">
                  {currentLang === 'RU' ? 'Ответ в течение 24 часов' : currentLang === 'KY' ? '24 сааттын ичинде жооп' : currentLang === 'ZH' ? '24小时内专人回复' : 'Guaranteed 24-hour response'}
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-neutral-900 hover:bg-black text-white text-xs font-sans tracking-wide transition-colors cursor-pointer shadow-sm font-medium"
                >
                  <Send className="w-3 h-3" />
                  <span>{t.contact.submitButton}</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Bishkek Central Office Details */}
        <div className="lg:col-span-5 bg-neutral-50/70 border border-neutral-200 p-4 sm:p-5 flex flex-col justify-between space-y-3">
          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between text-neutral-500 mb-1">
                <span className="text-[10px] font-mono uppercase tracking-widest">{t.contact.hqLabel}</span>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 border border-emerald-200">Open for Visits</span>
              </div>
              <h3 className="font-serif text-base sm:text-lg text-neutral-900 font-normal leading-tight">
                {t.contact.hqTitle}
              </h3>
            </div>

            {/* Address */}
            <div className="p-3 bg-white border border-neutral-200 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-medium text-neutral-900">
                <MapPin className="w-3.5 h-3.5 text-neutral-900 shrink-0" />
                <span>{t.contact.addressMain}</span>
              </div>
              <p className="text-[11px] text-neutral-600 font-sans pl-5.5 leading-snug">
                {t.contact.addressSub}
              </p>
              <div className="pl-5.5 pt-1">
                <a
                  href="https://maps.google.com/?q=Shabdan+Baatyr+43a+Bishkek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-neutral-700 hover:text-black font-medium underline underline-offset-2 font-sans"
                >
                  <span>{currentLang === 'RU' ? 'Открыть на Яндекс.Картах / Google Maps' : currentLang === 'KY' ? 'Картадан көрүү' : currentLang === 'ZH' ? '在地图中打开' : 'Open in Google Maps'}</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* Phone & WhatsApp Numbers */}
            <div className="p-3 bg-white border border-neutral-200 space-y-2">
              <div className="flex items-center justify-between text-xs font-medium text-neutral-900">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-neutral-900 shrink-0" />
                  <span>{t.contact.phoneTitle}</span>
                </div>
              </div>
              <div className="flex flex-col space-y-2 pl-5.5 pt-0.5">
                {/* Number 1 */}
                <div className="flex items-center justify-between gap-2">
                  <a
                    href="tel:+996773707172"
                    className="font-mono text-xs sm:text-sm text-neutral-900 hover:text-black hover:underline tracking-wide transition-colors"
                  >
                    +996 773 70 71 72
                  </a>
                  <a
                    href="https://wa.me/996773707172"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-sans font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 transition-colors"
                    title="WhatsApp: +996 773 70 71 72"
                  >
                    <MessageCircle className="w-3 h-3 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Number 2 */}
                <div className="flex items-center justify-between gap-2">
                  <a
                    href="tel:+996500505152"
                    className="font-mono text-xs sm:text-sm text-neutral-900 hover:text-black hover:underline tracking-wide transition-colors"
                  >
                    +996 500 50 51 52
                  </a>
                  <a
                    href="https://wa.me/996500505152"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-sans font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 transition-colors"
                    title="WhatsApp: +996 500 50 51 52"
                  >
                    <MessageCircle className="w-3 h-3 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="p-3 bg-white border border-neutral-200 space-y-1">
              <div className="flex items-center gap-2 text-xs font-medium text-neutral-900">
                <Mail className="w-3.5 h-3.5 text-neutral-900 shrink-0" />
                <span>Email для официальных обращений</span>
              </div>
              <div className="pl-5.5">
                <a
                  href="mailto:inquiry@grand-plus.com"
                  className="font-mono text-xs text-neutral-800 hover:text-black underline underline-offset-2"
                >
                  inquiry@grand-plus.com
                </a>
              </div>
            </div>
          </div>

          <div className="text-[10px] font-mono text-neutral-500 pt-2 border-t border-neutral-200 flex items-center justify-between">
            <span>{t.contact.hours}</span>
          </div>
        </div>
      </div>

      {/* Bottom Action Strip */}
      <div className="pt-2 sm:pt-2.5 border-t border-neutral-200 flex items-center justify-between text-xs font-sans shrink-0">
        <button
          onClick={onNavigateToWorks}
          className="text-neutral-600 hover:text-black font-light transition-colors cursor-pointer"
        >
          ← {currentLang === 'RU' ? 'Вернуться к портфолио проектов' : currentLang === 'KY' ? 'Долбоорлор тизмесине кайтуу' : currentLang === 'ZH' ? '返回项目作品集' : 'Return to Works Archive'}
        </button>

        <span className="text-[11px] font-sans text-neutral-500 tracking-wide font-medium">
          GRAND⁺ • Bishkek, Kyrgyzstan
        </span>
      </div>
    </div>
  );
};
