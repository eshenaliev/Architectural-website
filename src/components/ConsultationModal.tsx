import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, MessageSquare, Compass } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledTopic?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ 
  isOpen, 
  onClose,
  prefilledTopic = '' 
}) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState(prefilledTopic || 'Консультация по классическому проекту');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappLink = `https://wa.me/996700908822?text=${encodeURIComponent(
    `Здравствуйте! Я хочу обсудить проект в ОсОО «ГРАНД Плюс». Тема: ${topic}. Заказчик: ${name || 'укажу в чате'}, Телефон: ${phone || 'укажу в чате'}`
  )}`;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg bg-[#121315] border border-[#c5a880]/40 p-6 sm:p-8 shadow-2xl relative text-[#d5cfc5] font-serif"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="classic-tick-tl" />
        <div className="classic-tick-br" />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 border border-[#c5a880]/30 text-[#a89f91] hover:text-[#f4efe6] hover:border-[#c5a880] transition-colors cursor-pointer"
          aria-label="Закрыть"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 bg-[#c5a880]/15 text-[#c5a880] flex items-center justify-center mx-auto border border-[#c5a880]/40">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl text-[#f4efe6] font-normal uppercase">Заявка Принята в Бюро</h3>
            <p className="text-xs sm:text-sm text-[#a89f91] leading-relaxed font-sans font-light">
              Главный архитектор ОсОО «ГРАНД Плюс» свяжется с вами для согласования даты и времени консультации.
            </p>
            <div className="pt-2 flex flex-col gap-2 font-serif">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#c5a880] hover:bg-[#d8c09d] text-[#121315] font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Написать сразу в WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="w-full py-2.5 bg-[#18191c] border border-[#c5a880]/20 text-[#a89f91] text-xs hover:text-[#f4efe6]"
              >
                Закрыть окно
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a880] block mb-1">
                ОсОО «ГРАНД Плюс» • АРХИТЕКТУРНОЕ БЮРО
              </span>
              <h3 className="text-xl sm:text-2xl text-[#f4efe6] font-normal">
                Консультация Главного Архитектора
              </h3>
              <p className="text-xs text-[#a89f91] mt-1 font-sans font-light">
                Обсудим планировку усадьбы, ордерные пропорции, сейсмостойкость 9 баллов и подбор натурального камня Сары-Таш.
              </p>
            </div>

            <div className="space-y-3 font-serif">
              <div>
                <label className="text-xs uppercase text-[#c5a880] block mb-1">
                  Ваше имя:
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="ФИО заказчика"
                  className="w-full px-4 py-2.5 bg-[#16171a] border border-[#c5a880]/30 text-[#f4efe6] text-sm focus:outline-none focus:border-[#c5a880] font-sans"
                />
              </div>

              <div>
                <label className="text-xs uppercase text-[#c5a880] block mb-1">
                  Телефон / WhatsApp:
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+996 (___) __-__-__"
                  className="w-full px-4 py-2.5 bg-[#16171a] border border-[#c5a880]/30 text-[#f4efe6] text-sm focus:outline-none focus:border-[#c5a880] font-sans"
                />
              </div>

              <div>
                <label className="text-xs uppercase text-[#c5a880] block mb-1">
                  Тема консультации:
                </label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#16171a] border border-[#c5a880]/30 text-[#f4efe6] text-sm focus:outline-none focus:border-[#c5a880] font-sans"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#c5a880] hover:bg-[#d8c09d] text-[#121315] font-medium text-xs uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Записаться на консультацию</span>
              <Send className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-[#8c8477] text-center font-sans font-light">
              <ShieldCheck className="w-3.5 h-3.5 text-[#c5a880] flex-shrink-0" />
              <span>Лицензия I категории Госстроя Кыргызской Республики.</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
