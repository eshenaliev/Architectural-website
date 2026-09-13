import React, { useState } from 'react';
import { X, Send, CheckCircle, ShieldCheck, Phone, MessageSquare, Atom } from 'lucide-react';
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
  const [topic, setTopic] = useState(prefilledTopic || 'Консультация по мегаструктуре');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappLink = `https://wa.me/996700908822?text=${encodeURIComponent(
    `Здравствуйте! Я хочу обсудить проект в ОсОО «ГРАНД Плюс». Тема: ${topic}. Телефон: ${phone || 'укажу в чате'}`
  )}`;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg hud-panel rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,240,255,0.2)] relative text-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="hud-corner-tl" />
        <div className="hud-corner-br" />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-black/60 border border-cyan-500/30 text-neutral-400 hover:text-cyan-400 hover:border-cyan-400 transition-colors cursor-pointer"
          aria-label="Закрыть"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4 font-mono">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto border border-cyan-500/40 shadow-[0_0_25px_rgba(0,240,255,0.3)]">
              <CheckCircle className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-display font-bold text-white uppercase">Запрос Передан в Бюро!</h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans font-light">
              Главный архитектор ОсОО «ГРАНД Плюс» проанализирует запрос и свяжется с вами в течение рабочего времени.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Подтвердить в WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-neutral-900 border border-cyan-500/20 text-neutral-300 text-xs hover:text-white"
              >
                Закрыть окно
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 font-mono">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-cyan-400 block mb-1">
                ОсОО «ГРАНД Плюс» // ТЕРМИНАЛ ГАП
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white uppercase">
                Консультация Архитектора Проекта
              </h3>
              <p className="text-xs text-neutral-400 mt-1 font-sans font-light">
                Ответим на вопросы по квантово-сейсмической защите 9.5 MSK, СНиП КР, согласованию с Главэкспертизой и параметрам участка.
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs uppercase text-cyan-400 block mb-1">
                  Имя инициатора / Корпорация:
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="ФИО или девелоперская компания"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/70 border border-cyan-500/30 text-white text-sm focus:outline-none focus:border-cyan-400 font-sans"
                />
              </div>

              <div>
                <label className="text-xs uppercase text-cyan-400 block mb-1">
                  Телефон / WhatsApp:
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+996 (___) __-__-__"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/70 border border-cyan-500/30 text-white text-sm focus:outline-none focus:border-cyan-400 font-mono"
                />
              </div>

              <div>
                <label className="text-xs uppercase text-cyan-400 block mb-1">
                  Тематика обсуждения:
                </label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/70 border border-cyan-500/30 text-white text-sm focus:outline-none focus:border-cyan-400 font-sans"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Связаться с ГАП бюро</span>
              <Send className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400 text-center font-sans">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span>Лицензия I категории (Госстрой Кыргызской Республики).</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
