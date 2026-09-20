import React, { useState } from 'react';
import { X, CheckCircle2, Send, MessageCircle } from 'lucide-react';
import { ProjectItem } from '../types';
import { Language, TRANSLATIONS } from '../data/translations';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProject?: ProjectItem | null;
  currentLang?: Language;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  selectedProject,
  currentLang = 'RU',
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [projectType, setProjectType] = useState(selectedProject ? selectedProject.category : 'Проектирование');
  const [message, setMessage] = useState(
    selectedProject ? `Запрос на консультацию / расчет по проекту "${selectedProject.title}" (${selectedProject.category}).` : ''
  );

  if (!isOpen) return null;

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.RU;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6 md:p-10">
      <div className="bg-white text-neutral-900 w-full max-w-2xl shadow-2xl relative p-6 sm:p-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5 stroke-[1.5]" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mx-auto text-black">
              <CheckCircle2 className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="font-sans text-2xl text-neutral-900 font-semibold">
              {t.contact.inquiryReceived}
            </h3>
            <p className="text-neutral-600 text-sm font-sans max-w-md mx-auto leading-relaxed">
              {t.contact.thankYou}
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 bg-black text-white text-xs font-sans tracking-wider cursor-pointer"
            >
              {t.drawer.close}
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-neutral-400 block mb-1">
                {t.header.subline1} {t.header.subline2}
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl text-neutral-900 font-semibold">
                {t.contact.title}
              </h3>
              <p className="text-neutral-500 text-xs sm:text-sm font-sans mt-1">
                {t.contact.description}
              </p>

              {/* Direct WhatsApp Quick Contact */}
              <div className="mt-3.5 p-2.5 bg-neutral-50 border border-neutral-200 flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-sans text-neutral-600">
                  {currentLang === 'RU' ? 'Связаться напрямую через WhatsApp:' : currentLang === 'KY' ? 'WhatsApp аркылуу байланышуу:' : currentLang === 'ZH' ? '直接通过WhatsApp咨询:' : 'Direct WhatsApp Inquiry:'}
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://wa.me/996773707172"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-sans font-medium text-emerald-800 bg-white border border-emerald-300 hover:bg-emerald-50 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>+996 773 70 71 72</span>
                  </a>
                  <a
                    href="https://wa.me/996500505152"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-sans font-medium text-emerald-800 bg-white border border-emerald-300 hover:bg-emerald-50 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>+996 500 50 51 52</span>
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans text-neutral-600 mb-1">{t.contact.nameLabel}</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-3.5 py-2.5 border border-neutral-300 text-sm font-sans focus:outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-xs font-sans text-neutral-600 mb-1">{t.contact.emailLabel}</label>
                  <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-3.5 py-2.5 border border-neutral-300 text-sm font-sans focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans text-neutral-600 mb-1">{t.contact.typeLabel}</label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-neutral-300 text-sm font-sans focus:outline-none focus:border-black bg-white"
                  >
                    <option value="Проектирование">{currentLang === 'RU' ? 'Проектирование зданий и сооружений' : 'Architecture & Masterplanning'}</option>
                    <option value="Вилла">{currentLang === 'RU' ? 'Частные горные виллы и шале' : 'Alpine Villas & Chalets'}</option>
                    <option value="Эко-курорт">{currentLang === 'RU' ? 'Курортные комплексы и отели' : 'Eco-Resorts & Hospitality'}</option>
                    <option value="Мебель">{currentLang === 'RU' ? 'Мебель и интерьерные системы' : 'Bespoke Furniture & Interiors'}</option>
                    <option value="Матрасы">{currentLang === 'RU' ? 'Матрасы и здоровый сон' : 'Mattresses & Wellness'}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-sans text-neutral-600 mb-1">
                    {currentLang === 'RU' ? 'Локация объекта' : currentLang === 'KY' ? 'Объекттин жайгашкан жери' : currentLang === 'ZH' ? '项目所在地' : 'Project Location'}
                  </label>
                  <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder={currentLang === 'RU' ? 'Бишкек, Ала-Арча, Иссык-Куль...' : 'City, Country'}
                    className="w-full px-3.5 py-2.5 border border-neutral-300 text-sm font-sans focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-sans text-neutral-600 mb-1">{t.contact.messageLabel}</label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full px-3.5 py-2.5 border border-neutral-300 text-sm font-sans focus:outline-none focus:border-black resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-neutral-400 font-sans">
                  {currentLang === 'RU' ? 'Конфиденциально • Центральный офис в Бишкеке' : 'Confidential architectural inquiry • Bishkek Desk'}
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black hover:bg-neutral-800 text-white text-xs font-sans tracking-wider transition-colors cursor-pointer"
                >
                  <span>{t.contact.submitButton}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
