import React, { useState } from 'react';
import {
  Compass,
  FileText,
  Building2,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ChevronRight,
  ShieldCheck,
  HelpCircle,
  Calculator,
  ArrowRight,
  Landmark,
  Hammer,
  FileCheck,
  Layers,
  MapPin,
  Zap,
  Droplets,
  Flame,
  SearchCheck,
  UserCheck
} from 'lucide-react';
import { Language } from '../data/translations';

interface BeginnersGuideSectionProps {
  onInquire: (customMessage?: string) => void;
  currentLang?: Language;
}

export const BeginnersGuideSection: React.FC<BeginnersGuideSectionProps> = ({
  onInquire,
  currentLang = 'RU',
}) => {
  const [activeTab, setActiveTab] = useState<'stages' | 'checklist' | 'mistakes' | 'calculator'>('stages');
  const [activeStep, setActiveStep] = useState<number>(0);

  // Calculator state
  const [calcArea, setCalcArea] = useState<number>(250);
  const [calcTerrain, setCalcTerrain] = useState<'flat' | 'slope'>('flat');
  const [calcUtilities, setCalcUtilities] = useState<'ready' | 'none'>('ready');

  const STEPS = [
    {
      id: 1,
      num: '01',
      title: currentLang === 'RU' ? 'Покупка участка и градостроительный аудит' : 'Land Purchase & Due Diligence',
      shortTitle: currentLang === 'RU' ? '1. Покупка земли' : '1. Land Purchase',
      duration: currentLang === 'RU' ? '2–4 недели' : '2–4 weeks',
      authority: currentLang === 'RU' ? 'Госрегистр (Кадастр), Бишкекглавархитектура' : 'State Cadastre, Bishkek Architecture',
      costNote: currentLang === 'RU' ? 'Оценка рисков до передачи задатка' : 'Risk check before deposit',
      summary: currentLang === 'RU'
        ? 'Юридическая проверка «Красной книги», топосъемка, проверка «красных линий» и инженерно-геологические изыскания грунта.'
        : 'Legal audit of title deeds, topographic survey, building setback lines, and soil geotechnical drilling.',
      details: [
        {
          label: currentLang === 'RU' ? 'Юридический аудит' : 'Legal Verification',
          text: currentLang === 'RU'
            ? 'Проверка подлинности Государственного акта о праве частной собственности («Красная книга»), целевого назначения (строго ИЖС для частного дома) и выписки из ЕГРПИ об отсутствии арестов, судебных споров или банковских залогов.'
            : 'Verification of state property title deed, zoning classification (strictly residential), and clearance of liens or bank encumbrances.',
        },
        {
          label: currentLang === 'RU' ? 'Красные линии и ограничения' : 'Setback Lines & Easements',
          text: currentLang === 'RU'
            ? 'Проверка в Бишкекглавархитектуре: не попадает ли участок под расширение магистралей, охранные зоны ЛЭП, газопроводов высокого давления или водоохранные полосы (БЧК, реки Ала-Арча и Аламедин).'
            : 'Official municipal check to verify that boundaries do not clash with planned avenue expansions, high-voltage power easements or water protection zones.',
        },
        {
          label: currentLang === 'RU' ? 'Геология и топосъемка' : 'Soil Testing & Topography',
          text: currentLang === 'RU'
            ? 'Геодезическая топографическая съемка М 1:500 со штампом архитектуры. Бурение 2–3 инженерно-геологических скважин для определения несущей способности грунта, просадочности и уровня грунтовых вод.'
            : 'Certified topographic site survey (1:500) and geotechnical borehole test drilling to evaluate bearing capacity and ground water level.',
        },
      ],
      pitfalls: currentLang === 'RU'
        ? 'Покупка участка с назначением «сельхозназначение» (трансформация может занять годы) или скрытыми просадочными грунтами, которые удорожат фундамент в 2–3 раза.'
        : 'Purchasing land with agricultural designation or hidden collapsing soil layers that multiply foundation construction costs.',
      grandPlusHelp: currentLang === 'RU'
        ? 'Бесплатный выезд архитектора GRAND⁺ на участок перед сделкой: оценим рельеф, ориентацию по солнцу и градостроительные перспективы.'
        : 'Complimentary site visit by a GRAND⁺ senior architect before closing the purchase to audit terrain, solar exposure and constraints.',
    },
    {
      id: 2,
      num: '02',
      title: currentLang === 'RU' ? 'Получение ИРД и техусловий (АПУ и ИТУ)' : 'Permits & Utility Conditions (APU & ITU)',
      shortTitle: currentLang === 'RU' ? '2. ИРД и АПУ' : '2. Permits & APU',
      duration: currentLang === 'RU' ? '3–6 недель' : '3–6 weeks',
      authority: currentLang === 'RU' ? 'Бишкекглавархитектура («Единое окно»), НЭСК, Водоканал' : 'Bishkek Architecture, Utility Authorities',
      costNote: currentLang === 'RU' ? 'Госпошлины за выдачу ТУ' : 'Official municipal fees',
      summary: currentLang === 'RU'
        ? 'Получение Архитектурно-планировочных условий (АПУ) и Инженерно-технических условий (ИТУ) на подключение к сетям.'
        : 'Securing official Architectural Planning Directives (APU) and Engineering Technical utility permits.',
      details: [
        {
          label: currentLang === 'RU' ? 'АПУ (Архитектурно-планировочные условия)' : 'APU Directive',
          text: currentLang === 'RU'
            ? 'Главный документ для проектирования: устанавливает предельную этажность, процент застройки участка, минимальные отступы от границ (как правило, 3 м от соседей и 5 м от красной линии улицы).'
            : 'Primary zoning document specifying maximum building height, footprint ratio, and boundary setbacks (usually 3m from neighbors, 5m from street).',
        },
        {
          label: currentLang === 'RU' ? 'ИТУ (Технические условия на сети)' : 'Utility Technical Conditions',
          text: currentLang === 'RU'
            ? 'Официальные согласования с поставщиками ресурсов: электроэнергия (выделяемая мощность в кВт от Северэлектро/НЭСК), точка врезки в водопровод и канализацию (Бишкекводоканал), газификация (Газпром).'
            : 'Official utility approvals: electric power capacity (kW from NESK), water and sewage tap points (Vodokanal), natural gas feed (Gazprom).',
        },
        {
          label: currentLang === 'RU' ? 'Схема посадки' : 'Site Masterplan Overlay',
          text: currentLang === 'RU'
            ? 'Предварительное нанесение контуров дома на дежурный план района архитекторами для исключения наложения на смежные участки.'
            : 'Preliminary cadastral boundary overlay to ensure zero overlaps with neighbor lots or public road reserves.',
        },
      ],
      pitfalls: currentLang === 'RU'
        ? 'Начало проектирования без АПУ: риск спроектировать дом, который откажутся согласовывать из-за превышения этажности или нарушения санитарных отступов.'
        : 'Commencing blueprints without APU: risking complete redesign if municipal planners reject building footprint or heights.',
      grandPlusHelp: currentLang === 'RU'
        ? 'Помогаем составить грамотное техническое задание и заявку на мощности, ускоряя выдачу АПУ через «Единое окно».'
        : 'We prepare compliant technical specifications and utility load calculations, expediting approvals through municipal one-stop portals.',
    },
    {
      id: 3,
      num: '03',
      title: currentLang === 'RU' ? 'Проектирование в GRAND⁺ (ЭП, АР, КР, Инженерия)' : 'Comprehensive Engineering (EP, AR, KR & MEP)',
      shortTitle: currentLang === 'RU' ? '3. Проектирование' : '3. Architecture & BIM',
      duration: currentLang === 'RU' ? '1.5–3 месяца' : '1.5–3 months',
      authority: currentLang === 'RU' ? 'Лицензированное бюро ОсОО «ГРАНД Плюс»' : 'Licensed Studio GRAND Plus LLC',
      costNote: currentLang === 'RU' ? 'Фиксированная цена по договору' : 'Fixed contract pricing',
      summary: currentLang === 'RU'
        ? 'Создание полного комплекта проектно-сметной документации с обязательным расчетом сейсмостойкости 9 баллов.'
        : 'Full architectural and structural engineering package certified for high-magnitude 9-point seismic resistance.',
      details: [
        {
          label: currentLang === 'RU' ? 'Эскизный проект (ЭП)' : 'Concept Package (EP)',
          text: currentLang === 'RU'
            ? 'Посадка дома по сторонам света (инсоляция), поэтажные планы с расстановкой мебели, 3D-визуализация экстерьера и интеграция в ландшафт.'
            : 'Solar orientation, optimal functional floor layouts, photorealistic 3D visual renderings and masterplan integration.',
        },
        {
          label: currentLang === 'RU' ? 'Рабочий проект (АР + КР)' : 'Working Blueprints (AR + KR)',
          text: currentLang === 'RU'
            ? 'АР: Кладочные планы, разрезы, узлы, гидроизоляция и спецификации. КР: Расчет железобетонного каркаса в ЛИРА-САПР на 9 баллов сейсмичности по СНиП КР, схемы армирования фундамента, колонн и плит.'
            : 'AR: Construction detailing and assemblies. KR: Finite element structural analysis for 9-magnitude earthquakes, rebar schedules and concrete specs.',
        },
        {
          label: currentLang === 'RU' ? 'Инженерия (ОВ, ВК, ЭОМ)' : 'MEP Engineering',
          text: currentLang === 'RU'
            ? 'Проектирование котельной, водяного теплого пола, приточно-вытяжной вентиляции, систем очистки стоков (септик/ЛОС) и слаботочных сетей.'
            : 'HVAC, heat pumps/gas boilers, underfloor hydronic heating, sanitary water supply, biosystems and power distribution.',
        },
      ],
      pitfalls: currentLang === 'RU'
        ? 'Строительство без раздела КР (конструкций): в Кыргызстане 9-балльная сейсмика, ошибки в армировании колонн или фундамента смертельно опасны.'
        : 'Building without certified structural calculations: Kyrgyzstan has severe seismic activity; guesswork in rebar or concrete is life-threatening.',
      grandPlusHelp: currentLang === 'RU'
        ? 'Проект под ключ со всеми лицензиями. Точная ведомость материалов убережет вас от 20–30% перерасхода на стройплощадке.'
        : 'Complete licensed package. Detailed material bills prevent 20–30% cost overruns and material theft on-site.',
    },
    {
      id: 4,
      num: '04',
      title: currentLang === 'RU' ? 'Согласование проекта и Экспертиза' : 'Municipal Approvals & State Expertise',
      shortTitle: currentLang === 'RU' ? '4. Экспертиза' : '4. State Review',
      duration: currentLang === 'RU' ? '3–5 недель' : '3–5 weeks',
      authority: currentLang === 'RU' ? 'Бишкекглавархитектура, Госэкспертиза при Госстрое КР' : 'State Construction Expertise Authority',
      costNote: currentLang === 'RU' ? 'Госэкспертиза проектной документации' : 'Official expertise review fee',
      summary: currentLang === 'RU'
        ? 'Утверждение эскизного проекта главным архитектором и прохождение строительно-сейсмической экспертизы.'
        : 'Final architectural approval by chief municipal architect and thorough structural review by the State Building Authority.',
      details: [
        {
          label: currentLang === 'RU' ? 'Согласование в Бишкекглавархитектуре' : 'Municipal Approval',
          text: currentLang === 'RU'
            ? 'Утверждение фасадных решений, цветового паспорта объекта и соответствия генплану района главным архитектором.'
            : 'Formal sign-off on exterior elevation materials, color codes and district masterplan conformity.',
        },
        {
          label: currentLang === 'RU' ? 'Государственная экспертиза' : 'State Building Audit',
          text: currentLang === 'RU'
            ? 'Проверка расчетов прочности, пожарной безопасности, санитарных норм и сейсмостойкости экспертами Госстроя КР (или аккредитованной экспертизой).'
            : 'Comprehensive statutory check of structural strength, earthquake resistance, and fire codes by certified state inspectors.',
        },
        {
          label: currentLang === 'RU' ? 'Экспертное заключение' : 'Expertise Certificate',
          text: currentLang === 'RU'
            ? 'Выдача официального положительного заключения, дающего право на регистрацию стройки в надзорных органах.'
            : 'Issuance of positive compliance verdict authorizing registration for active construction works.',
        },
      ],
      pitfalls: currentLang === 'RU'
        ? 'Попытка «самостроя» без экспертизы грозит крупными штрафами, предписанием о сносе и невозможностью ввести дом в эксплуатацию.'
        : 'Attempting unpermitted construction risks hefty statutory fines, demolition orders, and legal inability to obtain ownership deeds.',
      grandPlusHelp: currentLang === 'RU'
        ? 'Архитекторы и инженеры GRAND⁺ лично сопровождают проект на всех стадиях экспертизы до получения штампов.'
        : 'Our licensed architects and engineers defend and guide the project throughout the review until all official approvals are sealed.',
    },
    {
      id: 5,
      num: '05',
      title: currentLang === 'RU' ? 'Разрешение на строительство (Регистрация в ГАСК)' : 'Building Permit Registration (GASK)',
      shortTitle: currentLang === 'RU' ? '5. Разрешение ГАСК' : '5. GASK Permit',
      duration: currentLang === 'RU' ? '1–2 недели' : '1–2 weeks',
      authority: currentLang === 'RU' ? 'Управление ГАСК (Госэкотехинспекция / Госстрой КР)' : 'Department of State Architectural Control (GASK)',
      costNote: currentLang === 'RU' ? 'Регистрационный талон на начало СМР' : 'Construction registration coupon',
      summary: currentLang === 'RU'
        ? 'Официальная регистрация объекта строительства в органах государственного контроля и получение талона на СМР.'
        : 'Official registration of the site with State Building Inspectors (GASK) and issuance of the valid works start certificate.',
      details: [
        {
          label: currentLang === 'RU' ? 'Пакет документов для ГАСК' : 'Permit Package',
          text: currentLang === 'RU'
            ? 'Согласованный проект, положительное заключение экспертизы, договор со строительным подрядчиком, приказы на авторский и технический надзор.'
            : 'Approved blueprints, expertise certification, contractor agreement, and official orders for architectural and engineering supervision.',
        },
        {
          label: currentLang === 'RU' ? 'Приказ на авторский надзор' : 'Architectural Supervision Order',
          text: currentLang === 'RU'
            ? 'ОсОО «ГРАНД Плюс» издает официальный приказ о назначении ответственного архитектора за ведением авторского контроля на стройке.'
            : 'GRAND Plus LLC assigns an official senior architect to oversee construction fidelity to the stamped design.',
        },
        {
          label: currentLang === 'RU' ? 'Талон на начало работ' : 'Works Commencement Ticket',
          text: currentLang === 'RU'
            ? 'Получение талона/разрешения — с этой секунды строительная техника имеет право заезжать на участок абсолютно законно.'
            : 'Issuance of the authorization ticket: all earthwork and machinery deployment is now fully lawful.',
        },
      ],
      pitfalls: currentLang === 'RU'
        ? 'Отсутствие журнала авторского и технадзора: без них инспекторы ГАСК не подпишут итоговый акт приемки.'
        : 'Failing to log official supervision journals: GASK will refuse to sign completion deeds without signed logs.',
      grandPlusHelp: currentLang === 'RU'
        ? 'Предоставляем полный юридический пакет документов проектировщика и оформляем журнал авторского надзора по установленной форме.'
        : 'We supply all certified designer credentials and setup the mandatory supervision journal per state regulations.',
    },
    {
      id: 6,
      num: '06',
      title: currentLang === 'RU' ? 'Строительство дома и Авторский надзор' : 'Construction & Architectural Field Supervision',
      shortTitle: currentLang === 'RU' ? '6. Строительство' : '6. Construction',
      duration: currentLang === 'RU' ? '6–12 месяцев' : '6–12 months',
      authority: currentLang === 'RU' ? 'Подрядчик, авторский надзор GRAND⁺, технадзор' : 'Contractor, GRAND Plus field inspection',
      costNote: currentLang === 'RU' ? 'Поэтапное финансирование по смете' : 'Milestone payments based on estimates',
      summary: currentLang === 'RU'
        ? 'Земляные работы, возведение монолитного каркаса, кладка, кровля, инженерия и подписание актов скрытых работ.'
        : 'Earthworks, reinforced concrete frame casting, masonry, roofing, MEP installations and signing off hidden works.',
      details: [
        {
          label: currentLang === 'RU' ? 'Акты скрытых работ' : 'Hidden Works Sign-off',
          text: currentLang === 'RU'
            ? 'Критически важный шаг: архитектор и технадзор обязаны проверить правильность вязки арматуры и закладных деталей ДО заливки бетона и подписать акт.'
            : 'Crucial milestone: architect and structural engineer inspect rebar layout, cover depth and anchor ties BEFORE pouring concrete.',
        },
        {
          label: currentLang === 'RU' ? 'Лабораторные испытания' : 'Concrete Lab Tests',
          text: currentLang === 'RU'
            ? 'Отбор бетонных кубиков при каждой заливке для испытания прочности в сертифицированной лаборатории (набор марочной прочности на 28-е сутки).'
            : 'Taking concrete test cubes from every batch to test compressive strength at 28 days in a licensed testing lab.',
        },
        {
          label: currentLang === 'RU' ? 'Теплый контур и инженерия' : 'Envelope & MEP Rough-in',
          text: currentLang === 'RU'
            ? 'Возведение энергоэффективных стен, монтаж премиального остекления, кровельного пирога, разводка отопления, электрики и канализации.'
            : 'Building insulated walls, energy-efficient glazing, alpine roof assembly, and complete mechanical/electrical rough-in.',
        },
      ],
      pitfalls: currentLang === 'RU'
        ? 'Экономия на авторском надзоре: строители часто упрощают узлы или «забывают» утеплить сейсмопояс, что приводит к трещинам и промерзанию стен зимой.'
        : 'Skipping designer oversight: builders often simplify rebar ties or skip thermal breaks, leading to cracks and condensation.',
      grandPlusHelp: currentLang === 'RU'
        ? 'Регулярные выезды архитектора GRAND⁺ на объект, контроль соответствия чертежам, проверка геометрии и фотоотчеты в WhatsApp.'
        : 'Regular on-site inspections by GRAND⁺ architects, laser geometry checks, and clear progress reporting directly to the client.',
    },
    {
      id: 7,
      num: '07',
      title: currentLang === 'RU' ? 'Ввод в эксплуатацию и Техпаспорт (БТИ/Кадастр)' : 'Commissioning, Final Deeds & Registration',
      shortTitle: currentLang === 'RU' ? '7. Ввод в эксплуатацию' : '7. Final Registration',
      duration: currentLang === 'RU' ? '3–6 недель' : '3–6 weeks',
      authority: currentLang === 'RU' ? 'Комиссия ГАСК, ГУ «Кадастр» (БТИ), Госрегистр' : 'GASK Commission, Cadastre (BTI), Land Registry',
      costNote: currentLang === 'RU' ? 'Оформление техпаспорта и регистрация права' : 'Issuance of Tech Passport and title deed',
      summary: currentLang === 'RU'
        ? 'Итоговая приемочная комиссия, замер площади инженером Кадастра, получение Техпаспорта и регистрация права собственности.'
        : 'Final state inspection, official survey by Cadastre engineers, issuance of Technical Passport, and official title recording.',
      details: [
        {
          label: currentLang === 'RU' ? 'Приемочная комиссия' : 'Acceptance Commission',
          text: currentLang === 'RU'
            ? 'Инспектор ГАСК проверяет соответствие готового дома согласованному проекту, наличие справок о выполнении техусловий от Водоканала, РЭС и Газовой службы.'
            : 'GASK inspector checks the built structure against approved blueprints, verifying all utility commissioning certificates.',
        },
        {
          label: currentLang === 'RU' ? 'Акт ввода в эксплуатацию' : 'Certificate of Occupancy',
          text: currentLang === 'RU'
            ? 'Подписание и регистрация итогового Акта ввода завершенного строительством объекта в государственном реестре.'
            : 'Formal signing and statutory registration of the Certificate of Commissioning.',
        },
        {
          label: currentLang === 'RU' ? 'Техпаспорт и Госрегистр' : 'Technical Passport & Title',
          text: currentLang === 'RU'
            ? 'Выезд техника ГУ «Кадастр», обмер фактических внутренних площадей, присвоение постоянного почтового адреса и выдача Технического паспорта на дом.'
            : 'Cadastral engineering survey, issuance of official Technical Passport and registering permanent title in the State Land Registry.',
        },
      ],
      pitfalls: currentLang === 'RU'
        ? 'Самовольные изменения фасадов или пристроек во время стройки, из-за которых инспекция отказывает в подписании акта ввода.'
        : 'Unauthorized floor additions or unapproved exterior changes during construction blocking final commissioning sign-off.',
      grandPlusHelp: currentLang === 'RU'
        ? 'Формируем полный сброшюрованный архив исполнительной документации для беспрепятственного прохождения приемочной комиссии.'
        : 'We assemble the complete stamped as-built documentation binder ensuring a seamless, frictionless hand-over to state authorities.',
    },
  ];

  const CHECKLIST_ITEMS = [
    {
      category: currentLang === 'RU' ? '1. До покупки участка' : '1. Pre-purchase Phase',
      items: [
        { text: currentLang === 'RU' ? 'Госакт на право частной собственности («Красная книга»)' : 'Private ownership deed (Red Book)', required: true },
        { text: currentLang === 'RU' ? 'Целевое назначение: строго ИЖС (индивидуальное жилищное строительство)' : 'Land purpose: Strictly residential housing (IZHS)', required: true },
        { text: currentLang === 'RU' ? 'Свежая выписка из ЕГРПИ (Госрегистр) об отсутствии арестов и залогов' : 'Fresh Land Registry statement confirming no liens or encumbrances', required: true },
        { text: currentLang === 'RU' ? 'Топографическая съемка участка М 1:500 со штампом архитектуры' : 'Certified 1:500 topographic site survey', required: true },
        { text: currentLang === 'RU' ? 'Отчет об инженерно-геологических изысканиях (грунты и грунтовые воды)' : 'Geotechnical soil report (groundwater and bearing capacity)', required: true },
        { text: currentLang === 'RU' ? 'Проверка отсутствия «красных линий» расширения улиц и охранных зон ЛЭП' : 'Confirmation of no conflicting road setback lines or electrical easements', required: true },
      ],
    },
    {
      category: currentLang === 'RU' ? '2. До начала строительных работ' : '2. Pre-construction Phase',
      items: [
        { text: currentLang === 'RU' ? 'АПУ (Архитектурно-планировочные условия) из Бишкекглавархитектуры' : 'Official APU zoning permit from municipal architecture', required: true },
        { text: currentLang === 'RU' ? 'ИТУ (Технические условия на подключение света, воды, канализации и газа)' : 'Technical utility conditions (Power, Water, Gas, Sewage)', required: true },
        { text: currentLang === 'RU' ? 'Согласованный Эскизный проект (ЭП) в ГлавАПУ' : 'Approved architectural concept (EP)', required: true },
        { text: currentLang === 'RU' ? 'Рабочий проект (АР + КР с расчетом 9-балльной сейсмики по СНиП)' : 'Certified construction blueprints (AR + KR 9-pt seismic)', required: true },
        { text: currentLang === 'RU' ? 'Положительное заключение Государственной строительной экспертизы' : 'Positive State Construction Expertise certificate', required: true },
        { text: currentLang === 'RU' ? 'Приказ о назначении авторского надзора проектной организации (GRAND⁺)' : 'Formal order for architectural author supervision (GRAND Plus)', required: true },
        { text: currentLang === 'RU' ? 'Регистрационный талон ГАСК (Госэкотехинспекция) на начало СМР' : 'GASK work commencement registration permit', required: true },
      ],
    },
    {
      category: currentLang === 'RU' ? '3. Для ввода дома в эксплуатацию' : '3. Commissioning Phase',
      items: [
        { text: currentLang === 'RU' ? 'Журнал производства работ и журнал авторского надзора с отметками' : 'On-site construction log & architectural inspection diary', required: true },
        { text: currentLang === 'RU' ? 'Подписанные акты освидетельствования скрытых работ (арматура, гидроизоляция)' : 'Signed hidden works inspection certificates (rebar, foundation)', required: true },
        { text: currentLang === 'RU' ? 'Лабораторные протоколы испытаний прочности бетона фундаментов и каркаса' : 'Certified laboratory concrete compressive strength reports', required: true },
        { text: currentLang === 'RU' ? 'Справки о выполнении технических условий от Водоканала, РЭС и Газовой службы' : 'Utility fulfillment sign-offs from Vodokanal, NESK, and Gazprom', required: true },
        { text: currentLang === 'RU' ? 'Акт приемочной комиссии о вводе объекта в эксплуатацию' : 'Final acceptance and commissioning deed', required: true },
        { text: currentLang === 'RU' ? 'Технический паспорт здания, изготовленный филиалом ГУ «Кадастр»' : 'Official Building Technical Passport from Cadastre (BTI)', required: true },
      ],
    },
  ];

  const MISTAKES = [
    {
      num: '01',
      title: currentLang === 'RU' ? 'Покупка земли с обременением или под снос' : 'Buying land with hidden easements or road widening',
      desc: currentLang === 'RU'
        ? 'Покупка участка без проверки «красных линий» Бишкека. Если по генплану на этом месте запланировано расширение проспекта или охранная зона ЛЭП, строить запретят.'
        : 'Buying land without checking municipal setback lines. If future road widening is zoned across the lot, building permits are permanently denied.',
      solution: currentLang === 'RU' ? 'Всегда заказывайте дежурную градостроительную справку ДО внесения задатка.' : 'Always request municipal zoning certificates before giving a deposit.',
    },
    {
      num: '02',
      title: currentLang === 'RU' ? 'Отказ от геологических изысканий грунта' : 'Skipping geotechnical soil boreholes',
      desc: currentLang === 'RU'
        ? '«У соседа нормальный грунт, зачем бурить?». В предгорьях Бишкека и Чуйской долины грунты неоднородны: плывуны, просадочные лессы или близкие грунтовые воды могут привести к растрескиванию дома через 1–2 года.'
        : 'Assuming neighbor soil is identical. Alpine soils often feature localized sinkhole pockets or high subterranean water that crack foundations.',
      solution: currentLang === 'RU' ? 'Бурение 2–3 скважин окупается в 10 раз, гарантируя точный подбор типа фундамента.' : 'Drilling 2-3 boreholes guarantees optimal, safe foundation engineering.',
    },
    {
      num: '03',
      title: currentLang === 'RU' ? 'Строительство без раздела КР (расчета сейсмики)' : 'Building without 9-point seismic calculations (KR)',
      desc: currentLang === 'RU'
        ? 'Строители говорят: «Мы всегда так армируем, ни у кого не упало». Кыргызстан находится в зоне 8–9 балльной сейсмичности. Монолитные узлы и колонны должны рассчитываться в ЛИРА-САПР строго по нормам.'
        : 'Relying on builder intuition without finite element analysis in a region prone to severe 9-magnitude earthquakes.',
      solution: currentLang === 'RU' ? 'Доверяйте расчеты только лицензированным конструкторам бюро GRAND⁺.' : 'Insist on structural engineering certified by licensed GRAND Plus engineers.',
    },
    {
      num: '04',
      title: currentLang === 'RU' ? 'Начало стройки без разрешения (Самострой)' : 'Starting works without GASK registration permit',
      desc: currentLang === 'RU'
        ? '«Построю, а потом узаконю через амнистию». Сейчас надзорные органы жестко пресекают самострой: штрафы до 200 000 сомов, отключение от коммуникаций и судебные решения о сносе.'
        : 'Illegally building hoping for future amnesty leads to massive fines, disconnection of utilities, and potential court demolition orders.',
      solution: currentLang === 'RU' ? 'Официальная регистрация занимает всего 1–2 недели при наличии нашего готового проекта.' : 'Permit registration takes just 1-2 weeks when blueprints are fully compliant.',
    },
    {
      num: '05',
      title: currentLang === 'RU' ? 'Отсутствие авторского надзора на стройке' : 'Skipping architectural author field supervision',
      desc: currentLang === 'RU'
        ? 'Прорабы часто меняют проектные марки бетона, уменьшают сечение арматуры или забывают гидроизолировать цоколь. Заметить это после заливки бетона уже невозможно.'
        : 'Contractors frequently downgrade concrete, reduce rebar diameters, or skip insulation unless strictly checked by the architect.',
      solution: currentLang === 'RU' ? 'Архитектор GRAND⁺ проверяет армирование и подписывает акты ДО каждой заливки бетона.' : 'GRAND Plus architects inspect rebar and sign compliance before every single pour.',
    },
    {
      num: '06',
      title: currentLang === 'RU' ? 'Строительство без детальной сметы' : 'Commencing construction without itemized bills of quantities',
      desc: currentLang === 'RU'
        ? 'Ориентировочная «цена на глаз» в процессе строительства вырастает на 40–70%, приводя к заморозке стройки на годы (долгострой).'
        : 'Vague estimates inevitably balloon by 40-70%, turning family dreams into stalled, half-finished concrete shells.',
      solution: currentLang === 'RU' ? 'Рабочий проект GRAND⁺ содержит точные объемы бетона, кирпича и стали до килограмма.' : 'Our construction packages specify exact quantities of steel, concrete and brick.',
    },
  ];

  // Estimated timeline calculation
  const getCalculatedTimeline = () => {
    let designMonths = calcArea <= 250 ? 2 : calcArea <= 450 ? 2.5 : 3.5;
    let permitsMonths = calcUtilities === 'ready' ? 1.5 : 2.5;
    let constructionMonths = calcArea <= 250 ? 6 : calcArea <= 450 ? 8 : 11;
    if (calcTerrain === 'slope') constructionMonths += 1.5;
    let finishingMonths = calcArea <= 250 ? 4 : calcArea <= 450 ? 6 : 8;

    const total = designMonths + permitsMonths + constructionMonths + finishingMonths;
    return {
      design: designMonths,
      permits: permitsMonths,
      construction: constructionMonths,
      finishing: finishingMonths,
      total: Math.round(total * 10) / 10,
    };
  };

  const timeline = getCalculatedTimeline();
  const currentStep = STEPS[activeStep];

  return (
    <div className="w-full flex flex-col justify-between p-4 sm:p-5 lg:p-6 bg-white border border-neutral-200/80 min-h-[500px] select-none">
      {/* Top Header */}
      <div className="border-b border-neutral-200 pb-2.5 sm:pb-3 shrink-0">
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-0.5">
          <span>06</span>
          <span>/</span>
          <span className="uppercase tracking-widest text-[11px] font-sans text-neutral-600">
            {currentLang === 'RU' ? 'ГИД ДЛЯ ЗАКАЗЧИКА' : currentLang === 'KY' ? 'ЖОЛДОМО' : currentLang === 'ZH' ? '业主全流程指南' : 'CLIENT BLUEPRINT GUIDE'}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-neutral-900 font-normal tracking-tight">
            {currentLang === 'RU'
              ? 'От покупки участка до ввода в эксплуатацию'
              : currentLang === 'KY'
              ? 'Жер тилкесин алуудан пайдаланууга берүүгө чейин'
              : currentLang === 'ZH'
              ? '从买地选址到竣工交付全流程指南'
              : 'From Land Acquisition to Commissioning'}
          </h2>
          <span className="text-[11px] font-mono text-neutral-700 bg-neutral-100 px-2 py-0.5 border border-neutral-200">
            {currentLang === 'RU' ? 'Пошаговый регламент КР' : 'Kyrgyzstan Standard Code'}
          </span>
        </div>
        <p className="font-serif text-xs sm:text-sm text-neutral-600 mt-0.5 font-light max-w-4xl leading-relaxed">
          {currentLang === 'RU'
            ? 'Понятное руководство для тех, кто строит дом или коммерческий объект в Кыргызстане впервые. Все этапы, градостроительные нормы, необходимые документы и практические советы архитекторов GRAND⁺.'
            : 'Comprehensive step-by-step master guide for building residences and commercial assets in Kyrgyzstan: statutory permits, seismic codes, and expert architectural advice.'}
        </p>

        {/* Navigation Sub-Tabs */}
        <div className="flex flex-wrap gap-1.5 mt-3 pt-2.5 border-t border-neutral-100">
          <button
            onClick={() => setActiveTab('stages')}
            className={`px-3 py-1 text-xs font-sans transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'stages'
                ? 'bg-neutral-900 text-white font-medium shadow-xs'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200/70 hover:text-neutral-900'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>{currentLang === 'RU' ? '7 ключевых этапов' : '7 Milestone Stages'}</span>
          </button>

          <button
            onClick={() => setActiveTab('checklist')}
            className={`px-3 py-1 text-xs font-sans transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'checklist'
                ? 'bg-neutral-900 text-white font-medium shadow-xs'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200/70 hover:text-neutral-900'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{currentLang === 'RU' ? 'Чек-лист документов' : 'Required Documents'}</span>
          </button>

          <button
            onClick={() => setActiveTab('mistakes')}
            className={`px-3 py-1 text-xs font-sans transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'mistakes'
                ? 'bg-neutral-900 text-white font-medium shadow-xs'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200/70 hover:text-neutral-900'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>{currentLang === 'RU' ? 'ТОП-6 ошибок новичков' : 'Top Pitfalls to Avoid'}</span>
          </button>

          <button
            onClick={() => setActiveTab('calculator')}
            className={`px-3 py-1 text-xs font-sans transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'calculator'
                ? 'bg-neutral-900 text-white font-medium shadow-xs'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200/70 hover:text-neutral-900'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>{currentLang === 'RU' ? 'Калькулятор сроков' : 'Timeline Estimator'}</span>
          </button>
        </div>
      </div>

      {/* TAB 1: 7 STAGES TIMELINE */}
      {activeTab === 'stages' && (
        <div className="my-4 flex-1">
          {/* Horizontal Step Pills for Quick Switching */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-1.5 mb-4">
            {STEPS.map((step, idx) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-2 border transition-all cursor-pointer flex flex-col justify-between min-h-[58px] ${
                  activeStep === idx
                    ? 'border-neutral-900 bg-neutral-900 text-white shadow-xs'
                    : 'border-neutral-200 bg-neutral-50/70 hover:bg-neutral-100/90 text-neutral-700'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className={activeStep === idx ? 'text-neutral-300 font-semibold' : 'text-neutral-400'}>
                    {step.num}
                  </span>
                  <span className={activeStep === idx ? 'text-neutral-300' : 'text-neutral-500'}>
                    {step.duration}
                  </span>
                </div>
                <div className="font-serif text-xs font-medium truncate mt-1">
                  {step.shortTitle}
                </div>
              </button>
            ))}
          </div>

          {/* Current Step Detailed Card */}
          <div className="border border-neutral-200 bg-white p-4 sm:p-5 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Header of Active Step */}
              <div className="border-b border-neutral-100 pb-3">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-neutral-500 mb-1">
                  <span className="flex items-center gap-1.5">
                    <span className="font-semibold text-neutral-900">ЭТАП {currentStep.num} ИЗ 07</span>
                    <span>•</span>
                    <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 border border-emerald-200">
                      Срок: {currentStep.duration}
                    </span>
                  </span>
                  <span className="text-neutral-600 bg-neutral-100 px-2 py-0.5">
                    Инстанции: {currentStep.authority}
                  </span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl lg:text-2xl text-neutral-900 font-normal mt-1">
                  {currentStep.title}
                </h3>
                <p className="font-serif text-xs sm:text-sm text-neutral-700 mt-1 font-light leading-relaxed">
                  {currentStep.summary}
                </p>
              </div>

              {/* 3 Detailed Items */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {currentStep.details.map((item, i) => (
                  <div key={i} className="p-3 bg-neutral-50/70 border border-neutral-200/80 space-y-1">
                    <div className="text-[11px] font-mono text-neutral-800 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                      <span>{item.label}</span>
                    </div>
                    <p className="font-sans text-xs text-neutral-600 leading-relaxed font-light">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Warning & GRAND+ Support */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 pt-1">
                <div className="p-3 bg-amber-50/70 border border-amber-200/80 flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-mono uppercase text-amber-900 font-medium tracking-wide">
                      {currentLang === 'RU' ? 'Главный риск этого этапа:' : 'Primary Risk:'}
                    </span>
                    <p className="text-xs font-sans text-amber-900/90 mt-0.5 font-light leading-snug">
                      {currentStep.pitfalls}
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-emerald-50/70 border border-emerald-200/80 flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-mono uppercase text-emerald-900 font-medium tracking-wide">
                      {currentLang === 'RU' ? 'Как помогает бюро GRAND⁺:' : 'How GRAND⁺ Protects You:'}
                    </span>
                    <p className="text-xs font-sans text-emerald-900/90 mt-0.5 font-light leading-snug">
                      {currentStep.grandPlusHelp}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions for Active Step */}
            <div className="pt-4 mt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
                <span>{activeStep + 1} / 7</span>
                <div className="flex gap-1">
                  {STEPS.map((_, idx) => (
                    <span
                      key={idx}
                      className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                        activeStep === idx ? 'bg-neutral-900 scale-110' : 'bg-neutral-200 hover:bg-neutral-400'
                      }`}
                      onClick={() => setActiveStep(idx)}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                {activeStep > 0 && (
                  <button
                    onClick={() => setActiveStep((prev) => prev - 1)}
                    className="px-3 py-1.5 border border-neutral-300 text-neutral-700 text-xs font-sans hover:bg-neutral-100 transition-colors cursor-pointer"
                  >
                    ← Предыдущий шаг
                  </button>
                )}
                {activeStep < STEPS.length - 1 ? (
                  <button
                    onClick={() => setActiveStep((prev) => prev + 1)}
                    className="px-4 py-1.5 bg-neutral-900 text-white text-xs font-sans hover:bg-black transition-colors flex items-center gap-1.5 cursor-pointer ml-auto sm:ml-0"
                  >
                    <span>Следующий этап</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={() => onInquire('Запрос на консультацию архитектора: планирую начать строительство дома')}
                    className="px-4 py-1.5 bg-neutral-900 text-white text-xs font-sans hover:bg-black transition-colors flex items-center gap-1.5 cursor-pointer ml-auto sm:ml-0"
                  >
                    <span>Начать проект с GRAND⁺</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: CHECKLIST OF DOCUMENTS */}
      {activeTab === 'checklist' && (
        <div className="my-4 flex-1 space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {CHECKLIST_ITEMS.map((group, idx) => (
              <div key={idx} className="p-4 border border-neutral-200 bg-white space-y-2.5">
                <div className="border-b border-neutral-200 pb-1.5">
                  <h4 className="font-serif text-base font-normal text-neutral-900">
                    {group.category}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs font-sans text-neutral-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-neutral-900 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="p-3 bg-neutral-50 border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="font-serif text-neutral-600 font-light">
              Нужна помощь в проверке документов перед покупкой участка или получением АПУ?
            </span>
            <button
              onClick={() => onInquire('Запрос на аудит пакета документов перед покупкой участка')}
              className="px-3.5 py-1.5 bg-neutral-900 text-white text-xs font-sans hover:bg-black transition-colors cursor-pointer shrink-0"
            >
              Заказать аудит документов →
            </button>
          </div>
        </div>
      )}

      {/* TAB 3: TOP 6 MISTAKES */}
      {activeTab === 'mistakes' && (
        <div className="my-4 flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {MISTAKES.map((m) => (
              <div key={m.num} className="p-3.5 border border-neutral-200 bg-white flex flex-col justify-between space-y-2">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-1">
                    <span>ОШИБКА #{m.num}</span>
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                  </div>
                  <h4 className="font-serif text-sm font-medium text-neutral-900 leading-snug">
                    {m.title}
                  </h4>
                  <p className="font-sans text-xs text-neutral-600 mt-1 font-light leading-relaxed">
                    {m.desc}
                  </p>
                </div>
                <div className="p-2 bg-emerald-50/70 border border-emerald-200/80 text-[11px] font-sans text-emerald-900 font-medium">
                  💡 Решение: {m.solution}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: INTERACTIVE TIMELINE CALCULATOR */}
      {activeTab === 'calculator' && (
        <div className="my-4 flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Parameters (5 cols) */}
            <div className="lg:col-span-5 p-4 border border-neutral-200 bg-neutral-50/50 space-y-4">
              <div>
                <h4 className="font-serif text-base font-normal text-neutral-900">
                  Параметры вашего будущего объекта
                </h4>
                <p className="text-xs text-neutral-500 font-sans mt-0.5">
                  Рассчитайте реалистичный срок от первой идеи до въезда в дом.
                </p>
              </div>

              {/* Area */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-1 text-neutral-700">
                  <span>Общая площадь здания:</span>
                  <span className="font-bold text-neutral-900">{calcArea} м²</span>
                </div>
                <div className="flex gap-1.5">
                  {[160, 250, 380, 550].map((size) => (
                    <button
                      key={size}
                      onClick={() => setCalcArea(size)}
                      className={`flex-1 py-1 text-xs font-mono border transition-all cursor-pointer ${
                        calcArea === size
                          ? 'border-neutral-900 bg-neutral-900 text-white font-medium'
                          : 'border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-100'
                      }`}
                    >
                      {size} м²
                    </button>
                  ))}
                </div>
              </div>

              {/* Terrain */}
              <div>
                <span className="text-xs font-mono text-neutral-700 block mb-1">
                  Рельеф земельного участка:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setCalcTerrain('flat')}
                    className={`p-2 text-left border text-xs font-sans transition-all cursor-pointer ${
                      calcTerrain === 'flat'
                        ? 'border-neutral-900 bg-neutral-900 text-white font-medium'
                        : 'border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-100'
                    }`}
                  >
                    <div>Ровный участок</div>
                    <div className={`text-[10px] font-mono mt-0.5 ${calcTerrain === 'flat' ? 'text-neutral-300' : 'text-neutral-500'}`}>
                      Стандартный котлован
                    </div>
                  </button>
                  <button
                    onClick={() => setCalcTerrain('slope')}
                    className={`p-2 text-left border text-xs font-sans transition-all cursor-pointer ${
                      calcTerrain === 'slope'
                        ? 'border-neutral-900 bg-neutral-900 text-white font-medium'
                        : 'border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-100'
                    }`}
                  >
                    <div>Склон / Предгорье</div>
                    <div className={`text-[10px] font-mono mt-0.5 ${calcTerrain === 'slope' ? 'text-neutral-300' : 'text-neutral-500'}`}>
                      Подпорные стены (+1.5 мес)
                    </div>
                  </button>
                </div>
              </div>

              {/* Utilities */}
              <div>
                <span className="text-xs font-mono text-neutral-700 block mb-1">
                  Коммуникации по границе:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setCalcUtilities('ready')}
                    className={`p-2 text-left border text-xs font-sans transition-all cursor-pointer ${
                      calcUtilities === 'ready'
                        ? 'border-neutral-900 bg-neutral-900 text-white font-medium'
                        : 'border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-100'
                    }`}
                  >
                    <div>Сети подведены</div>
                    <div className={`text-[10px] font-mono mt-0.5 ${calcUtilities === 'ready' ? 'text-neutral-300' : 'text-neutral-500'}`}>
                      Быстрое получение ТУ
                    </div>
                  </button>
                  <button
                    onClick={() => setCalcUtilities('none')}
                    className={`p-2 text-left border text-xs font-sans transition-all cursor-pointer ${
                      calcUtilities === 'none'
                        ? 'border-neutral-900 bg-neutral-900 text-white font-medium'
                        : 'border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-100'
                    }`}
                  >
                    <div>Требуется подводка</div>
                    <div className={`text-[10px] font-mono mt-0.5 ${calcUtilities === 'none' ? 'text-neutral-300' : 'text-neutral-500'}`}>
                      Удлиненные ИТУ (+1 мес)
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Results (7 cols) */}
            <div className="lg:col-span-7 p-4 border border-neutral-200 bg-white flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-baseline justify-between border-b border-neutral-200 pb-2">
                  <div>
                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-wide">
                      Общий прогнозируемый срок:
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-neutral-900 font-normal mt-0.5">
                      {timeline.total} месяцев
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-emerald-800 bg-emerald-50 px-2.5 py-1 border border-emerald-200">
                    Под ключ (от нуля до въезда)
                  </span>
                </div>

                {/* Timeline breakdown bars */}
                <div className="space-y-2.5">
                  <div>
                    <div className="flex justify-between text-xs font-sans mb-1">
                      <span className="text-neutral-800 font-medium">1. Проектирование (ЭП, АР, КР в GRAND⁺)</span>
                      <span className="font-mono text-neutral-600">{timeline.design} мес.</span>
                    </div>
                    <div className="h-2 bg-neutral-100 overflow-hidden">
                      <div className="h-full bg-neutral-900" style={{ width: `${(timeline.design / timeline.total) * 100}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-sans mb-1">
                      <span className="text-neutral-800 font-medium">2. Разрешения (АПУ, Экспертиза, ГАСК)</span>
                      <span className="font-mono text-neutral-600">{timeline.permits} мес.</span>
                    </div>
                    <div className="h-2 bg-neutral-100 overflow-hidden">
                      <div className="h-full bg-neutral-700" style={{ width: `${(timeline.permits / timeline.total) * 100}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-sans mb-1">
                      <span className="text-neutral-800 font-medium">3. Строительство (коробка, монолит, кровля)</span>
                      <span className="font-mono text-neutral-600">{timeline.construction} мес.</span>
                    </div>
                    <div className="h-2 bg-neutral-100 overflow-hidden">
                      <div className="h-full bg-amber-700" style={{ width: `${(timeline.construction / timeline.total) * 100}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-sans mb-1">
                      <span className="text-neutral-800 font-medium">4. Отделка, фасад и ввод в эксплуатацию</span>
                      <span className="font-mono text-neutral-600">{timeline.finishing} мес.</span>
                    </div>
                    <div className="h-2 bg-neutral-100 overflow-hidden">
                      <div className="h-full bg-emerald-700" style={{ width: `${(timeline.finishing / timeline.total) * 100}%` }} />
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-neutral-50 border border-neutral-200 text-xs font-serif text-neutral-700 font-light leading-relaxed">
                  «Главный секрет быстрого строительства — это завершить и согласовать полный рабочий проект ДО заезда первого экскаватора на участок. Изменения на бумаге бесплатны, переделки в бетоне стоят миллионы сомов.»
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-200 flex justify-end">
                <button
                  onClick={() => onInquire(`Консультация по срокам строительства дома ${calcArea} м²`)}
                  className="px-4 py-2 bg-neutral-900 text-white text-xs font-sans hover:bg-black transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Записаться на консультацию с главным инженером</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Footer Bar */}
      <div className="pt-3 border-t border-neutral-200 shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <span className="font-serif text-neutral-600 font-light">
          {currentLang === 'RU'
            ? 'ОсОО «ГРАНД Плюс» имеет государственную лицензию на все виды проектирования и оказывает полное сопровождение в Бишкекглавархитектуре и ГАСК.'
            : 'GRAND Plus LLC holds full state licensing for architectural & engineering design and provides turnkey statutory support.'}
        </span>
        <button
          onClick={() => onInquire('Бесплатная экспресс-консультация архитектора для новичков')}
          className="font-mono text-[11px] text-neutral-900 font-medium hover:underline underline-offset-2 shrink-0 cursor-pointer"
        >
          {currentLang === 'RU' ? 'Получить консультацию архитектора' : 'Request Architecture Consultation'} →
        </button>
      </div>
    </div>
  );
};
