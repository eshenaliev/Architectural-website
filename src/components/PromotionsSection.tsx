import React from 'react';
import { Tag, Sparkles, ArrowRight, Clock, Percent, Compass } from 'lucide-react';
import { Language } from '../data/translations';

interface PromotionsSectionProps {
  onInquire: () => void;
  currentLang?: Language;
}

export const PromotionsSection: React.FC<PromotionsSectionProps> = ({
  onInquire,
  currentLang = 'RU',
}) => {
  const PROMOTIONS = [
    {
      id: 'topo-survey',
      tag: currentLang === 'RU' ? 'Сезонное предложение' : 'Spring Season',
      badge: currentLang === 'RU' ? 'Экономия $1,200' : 'Bonus Value',
      title: currentLang === 'RU' ? 'Геодезический аудит участка в подарок' : 'Complimentary Geodetic Survey',
      description: currentLang === 'RU'
        ? 'При заключении договора на проектирование жилого дома или виллы от 350 м² бюро выполняет профессиональную топографическую съемку и инсоляционный анализ за свой счет.'
        : 'Sign an architectural contract for villas over 350 m² and receive complimentary topographic survey and solar orientation analysis.',
      deadline: currentLang === 'RU' ? 'Действует до 31 мая 2026' : 'Valid until May 31, 2026',
      icon: Compass,
      code: 'GRAND-GEO2026',
    },
    {
      id: 'interior-discount',
      tag: currentLang === 'RU' ? 'Комплексный пакет' : 'Synergy Deal',
      badge: '-15%',
      title: currentLang === 'RU' ? 'Скидка 15% на проект интерьера' : '15% Off Full Interior Design',
      description: currentLang === 'RU'
        ? 'При заказе полного комплекта архитектуры (АР+КР) действует специальная скидка на дизайн интерьера с подбором отделочных материалов, освещения и авторской мебели.'
        : 'Get 15% off complete interior architectural design when commissioned together with full exterior architectural and structural engineering.',
      deadline: currentLang === 'RU' ? 'Постоянная программа лояльности' : 'Continuous Client Loyalty',
      icon: Percent,
      code: 'GRAND-INTERIOR15',
    },
    {
      id: 'horeca-special',
      tag: currentLang === 'RU' ? 'Инвестиционный пакет' : 'HoReCa Special',
      badge: currentLang === 'RU' ? 'Для инвесторов' : 'Investors',
      title: currentLang === 'RU' ? 'Эко-отели и глэмпинги Иссык-Куля' : 'Issyk-Kul Eco-Resort Masterplans',
      description: currentLang === 'RU'
        ? 'Специальные условия на разработку мастер-планов территорий и модульных гостевых шале для туристических проектов Кыргызстана с учетом экологических норм.'
        : 'Tailored conditions for hospitality investors developing mountain glamping, boutique eco-resorts, and spa retreats around Lake Issyk-Kul.',
      deadline: currentLang === 'RU' ? 'Доступно для первых 5 проектов сезона' : 'Limited to 5 projects this season',
      icon: Sparkles,
      code: 'GRAND-INVEST',
    },
  ];

  return (
    <div className="w-full flex flex-col justify-between p-4 sm:p-5 lg:p-6 bg-white border border-neutral-200/80 min-h-[480px] lg:min-h-[500px] select-none">
      {/* Top Header */}
      <div className="border-b border-neutral-200 pb-2.5 sm:pb-3 shrink-0">
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-0.5">
          <span>03</span>
          <span>/</span>
          <span className="uppercase tracking-widest text-[11px] font-sans text-neutral-600">
            {currentLang === 'RU' ? 'АКЦИИ' : currentLang === 'KY' ? 'АКЦИЯЛАР' : currentLang === 'ZH' ? '专属特惠' : 'SPECIAL OFFERS'}
          </span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-neutral-900 font-normal tracking-tight">
          {currentLang === 'RU'
            ? 'Специальные программы и акции'
            : currentLang === 'KY'
            ? 'Атайын программалар жана акциялар'
            : currentLang === 'ZH'
            ? '事务所当季专属礼遇与特惠'
            : 'Seasonal Studio Offers & Packages'}
        </h2>
        <p className="font-serif text-xs sm:text-sm text-neutral-600 mt-0.5 font-light max-w-3xl">
          {currentLang === 'RU'
            ? 'Действующие спецпредложения бюро для частных заказчиков и девелоперов, начинающих проектирование в этом сезоне.'
            : currentLang === 'KY'
            ? 'Бул сезондо долбоорлоону баштаган кардарлар жана куруучулар үчүн бюронун атайын сунуштары.'
            : currentLang === 'ZH'
            ? '面向当下启动项目的业主与开发商提供的阶段性专属支持及配套增值礼遇。'
            : 'Exclusive studio opportunities for clients commissioning residential and commercial design this season.'}
        </p>
      </div>

      {/* Promotions Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 my-4 flex-1">
        {PROMOTIONS.map((promo) => {
          const IconComponent = promo.icon;
          return (
            <div
              key={promo.id}
              className="group p-4 border border-neutral-200 hover:border-neutral-400 bg-neutral-50/50 hover:bg-neutral-50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                    {promo.tag}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 border border-emerald-200 font-medium">
                    {promo.badge}
                  </span>
                </div>

                <div className="w-8 h-8 rounded-none border border-neutral-300 bg-white flex items-center justify-center mb-3 text-neutral-800 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                  <IconComponent className="w-4 h-4 stroke-[1.5]" />
                </div>

                <h3 className="font-serif text-base sm:text-lg text-neutral-900 font-normal leading-snug mb-2">
                  {promo.title}
                </h3>
                <p className="font-serif text-xs text-neutral-600 font-light leading-relaxed mb-4">
                  {promo.description}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-200 space-y-2">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-400">
                  <Clock className="w-3 h-3" />
                  <span>{promo.deadline}</span>
                </div>

                <button
                  onClick={onInquire}
                  className="w-full py-1.5 bg-white hover:bg-neutral-900 text-neutral-900 hover:text-white border border-neutral-300 hover:border-neutral-900 text-xs font-sans font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>{currentLang === 'RU' ? 'Применить акцию' : 'Claim Offer'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Metadata Bar */}
      <div className="pt-3 border-t border-neutral-200 shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <span className="font-serif text-neutral-600 font-light">
          {currentLang === 'RU'
            ? 'Условия акций фиксируются в официальном договоре. Скидки по разным акциям не суммируются.'
            : 'Terms of promotions are formally stipulated in the design agreement contract.'}
        </span>
        <button
          onClick={onInquire}
          className="font-mono text-[11px] text-neutral-900 font-medium hover:underline underline-offset-2 shrink-0 cursor-pointer"
        >
          {currentLang === 'RU' ? 'Уточнить детали у менеджера' : 'Speak to Client Director'} →
        </button>
      </div>
    </div>
  );
};
