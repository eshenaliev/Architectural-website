export type Language = 'EN' | 'RU' | 'KY' | 'ZH';

export interface TranslationDictionary {
  header: {
    title: string;
    subline1: string;
    subline2: string;
  };
  nav: {
    home: { title: string; subtitle: string };
    services: { title: string; subtitle: string };
    projects: {
      title: string;
      subtitle: string;
      residential: string;
      commercial: string;
      other: string;
    };
    pricing: {
      title: string;
      subtitle: string;
      packages: string;
      custom: string;
    };
    promotions: { title: string; subtitle: string };
    readyProjects: { title: string; subtitle: string };
    guide: { title: string; subtitle: string };
    contact: { title: string; subtitle: string };
    careers: { title: string; subtitle: string };
    works: { title: string; subtitle: string };
    philosophy: { title: string; subtitle: string };
    architects: { title: string; subtitle: string };
    materials: { title: string; subtitle: string };
    global: { title: string; subtitle: string };
  };
  hero: {
    details: string;
    clickToExplore: string;
  };
  intro: {
    number: string;
    category: string;
    title: string;
    description: string;
    exploreArchive: string;
    scheduleConsultation: string;
  };
  philosophy: {
    number: string;
    category: string;
    title: string;
    description: string;
    quote: string;
    exploreWorks: string;
    pillar1Title: string;
    pillar1Sub: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Sub: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Sub: string;
    pillar3Desc: string;
  };
  architects: {
    number: string;
    category: string;
    title: string;
    description: string;
    card1Badge: string;
    card1Title: string;
    card1Desc: string;
    card1Foot: string;
    card2Badge: string;
    card2Title: string;
    card2Desc: string;
    card2Foot: string;
    card3Badge: string;
    card3Title: string;
    card3Desc: string;
    card3Foot: string;
    actionLeft: string;
    actionRight: string;
  };
  materials: {
    number: string;
    category: string;
    title: string;
    description: string;
    mat1Name: string;
    mat1Desc: string;
    mat2Name: string;
    mat2Desc: string;
    mat3Name: string;
    mat3Desc: string;
    assurance: string;
    originVerified: string;
    seeProjects: string;
    requestSamples: string;
  };
  global: {
    number: string;
    category: string;
    title: string;
    description: string;
    hub1Region: string;
    hub1Type: string;
    hub1Desc: string;
    hub2Region: string;
    hub2Type: string;
    hub2Desc: string;
    hub3Region: string;
    hub3Type: string;
    hub3Desc: string;
    seeMap: string;
    internationalInquiry: string;
  };
  contact: {
    number: string;
    category: string;
    title: string;
    description: string;
    inquiryReceived: string;
    thankYou: string;
    sendAnother: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    typeLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    hqLabel: string;
    hqTitle: string;
    addressMain: string;
    addressSub: string;
    phoneTitle: string;
    hours: string;
  };
  footer: {
    about: string;
    privacy: string;
    terms: string;
    copyright: string;
  };
  drawer: {
    archiveTitle: string;
    close: string;
    all: string;
  };
  modal: {
    architect: string;
    location: string;
    year: string;
    area: string;
    keyHighlights: string;
    inquireProject: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  RU: {
    header: {
      title: 'GRAND⁺',
      subline1: 'ОсОО "ГРАНД Плюс"',
      subline2: 'Архитектурное бюро в Кыргызской Республике   |   г. Бишкек',
    },
    nav: {
      home: { title: 'Главная', subtitle: 'О бюро и ключевые проекты' },
      services: { title: 'Услуги', subtitle: 'Архитектурный комплекс работ' },
      projects: {
        title: 'Проекты',
        subtitle: 'Архитектурный каталог',
        residential: 'Жилые',
        commercial: 'Коммерческие',
        other: 'Другие',
      },
      pricing: {
        title: 'Стоимость',
        subtitle: 'Тарифы на проектирование',
        packages: 'Готовые пакеты',
        custom: 'Соберите свой пакет',
      },
      promotions: { title: 'Акции', subtitle: 'Специальные предложения' },
      readyProjects: { title: 'Готовые проекты', subtitle: 'Авторские типовые решения' },
      guide: { title: 'Новичкам', subtitle: 'От покупки участка до ввода в эксплуатацию' },
      contact: { title: 'Контакты', subtitle: 'г. Бишкек, пр. Шабдан Баатыра, 43а' },
      careers: { title: 'Карьера', subtitle: 'Вакансии и практика в бюро' },
      works: { title: 'Проекты', subtitle: 'Архитектура и реализованные объекты' },
      philosophy: { title: 'Философия', subtitle: 'Традиционная эстетика в современных формах' },
      architects: { title: 'Архитекторы', subtitle: 'Ведущие кыргызские мастера и бюро' },
      materials: { title: 'Материалы', subtitle: 'Тянь-шаньская ель, Сары-Таш и лиственница' },
      global: { title: 'География', subtitle: 'Проекты и поставки в более чем 60 странах' },
    },
    hero: {
      details: 'Подробнее',
      clickToExplore: 'Нажмите для просмотра проекта',
    },
    intro: {
      number: '01',
      category: 'О компании • ОсОО «ГРАНД Плюс»',
      title: 'ОсОО «ГРАНД Плюс» — Архитектурно-проектное бюро',
      description: 'ОсОО «ГРАНД Плюс» (г. Бишкек) — лицензированное архитектурно-инженерное бюро полного цикла: от градостроительного аудита участка и получения АПУ/ИТУ до сейсмических расчетов на 9 баллов, согласований в Госэкспертизе, авторского надзора и сдачи в эксплуатацию.',
      exploreArchive: 'Архитектурное портфолио',
      scheduleConsultation: 'Консультация с главным архитектором',
    },
    philosophy: {
      number: '02',
      category: 'Пространственная философия',
      title: 'Философия гармонии кочевого пространства',
      description: 'Синтез мудрости кочевого наследия Кыргызстана, горных ландшафтов Тянь-Шаня и современной чистой архитектуры.',
      quote: '«Пространство — это не пустота, которую нужно заполнить, а священный баланс горного горизонта, чистого воздуха и света.»',
      exploreWorks: 'Смотреть работы',
      pillar1Title: 'Свобода горизонта',
      pillar1Sub: 'Естественный свет и воздух',
      pillar1Desc: 'Панорамные горные линии обзора, глубокие выносы кровель, защищающие от полуденного солнца, и непрерывные световые оси.',
      pillar2Title: 'Материалы гор',
      pillar2Sub: 'Природные текстуры',
      pillar2Desc: 'Тянь-шаньская ель, благородный травертин Сары-Таш, обожженная горная лиственница и архитектурный бетон.',
      pillar3Title: 'Чистота формы',
      pillar3Sub: 'Архитектурный покой',
      pillar3Desc: 'Отказ от визуального шума. Архитектура как органичное продолжение первозданной природы Кыргызстана.',
    },
    architects: {
      number: '03',
      category: 'Архитекторы и студии',
      title: 'Ведущие мастера и проектные бюро Кыргызстана',
      description: 'Объединение многовековых традиций национального зодчества и передовых международных стандартов проектирования.',
      card1Badge: 'Бишкек и Чуй',
      card1Title: 'Мастера высшей категории',
      card1Desc: 'Аттестованные архитекторы, специализирующиеся на деревянных конструкциях, консольных кровлях и премиальных виллах.',
      card1Foot: 'Проектное бюро Бишкек',
      card2Badge: 'Ош и Фергана',
      card2Title: 'Наследие и биоклиматика',
      card2Desc: 'Глубокая экспертиза в традиционной каменной кладке Сары-Таш, пассивном охлаждении и сейсмостойком зодчестве.',
      card2Foot: 'Региональное отделение',
      card3Badge: 'Иссык-Куль и Тянь-Шань',
      card3Title: 'Горная и эко-архитектура',
      card3Desc: 'Проектирование курортных резиденций, эко-отелей и горных шале, гармонично вписанных в альпийский пейзаж.',
      card3Foot: 'Альпийская лаборатория',
      actionLeft: 'Смотреть проекты этих мастеров',
      actionRight: 'Связаться с бюро',
    },
    materials: {
      number: '04',
      category: 'Аутентичные материалы',
      title: 'Карагай, Сары-Таш и обожжённая лиственница',
      description: 'Прямые устойчивые цепочки поставок из горных карьеров и лесничеств Кыргызстана на объекты по всему миру.',
      mat1Name: 'Тянь-шаньская альпийская ель',
      mat1Desc: 'Плотная высокогорная древесина с теплым медовым оттенком, хвойным ароматом и высокой несущей способностью для балок и ламелей.',
      mat2Name: 'Травертин Сары-Таш',
      mat2Desc: 'Престижный природный травертин теплых оттенков слоновой кости и охры с великолепной теплоизоляцией и бархатистой фактурой.',
      mat3Name: 'Обожженная горная лиственница',
      mat3Desc: 'Традиционная поверхностная огневая обработка, создающая обсидианово-темное, долговечное и стойкое дерево без химии.',
      assurance: 'Сертифицированный натуральный камень и горная древесина, поставляемые напрямую из Кыргызстана на объекты по всему миру.',
      originVerified: 'Гарантия горного происхождения',
      seeProjects: 'Проекты с этими материалами',
      requestSamples: 'Заказать образцы материалов',
    },
    global: {
      number: '05',
      category: 'Международная деятельность',
      title: 'Реализация в более чем 60 странах',
      description: 'Полный комплекс проектных услуг, авторский надзор, поставка материалов и соответствие международным стандартам.',
      hub1Region: 'Центральный хаб Кыргызстана',
      hub1Type: 'Штаб-квартира и проектные студии',
      hub1Desc: 'Национальный центр, координирующий частные резиденции, общественные пространства и туристические кластеры.',
      hub2Region: 'Центральная Азия и Шелковый путь',
      hub2Type: 'Региональные проектные бюро',
      hub2Desc: 'Координация масштабных резиденций, градостроительных концепций и биоклиматических комплексов.',
      hub3Region: 'Международные представительства',
      hub3Type: 'Партнерские офисы',
      hub3Desc: 'Индивидуальное сопровождение премиум-проектов, частных горных резиденций и эко-курортов по всему миру.',
      seeMap: 'Посмотреть географию проектов',
      internationalInquiry: 'Международная заявка',
    },
    contact: {
      number: '06',
      category: 'Прямой контакт',
      title: 'Центральный офис в Бишкеке',
      description: 'Прямые консультации с ведущими архитекторами в нашем центральном офисе в Бишкеке.',
      inquiryReceived: 'Заявка принята',
      thankYou: 'Благодарим за обращение в GRAND⁺. Наш ведущий архитектор свяжется с вами в течение 24 часов.',
      sendAnother: 'Отправить еще одно сообщение',
      nameLabel: 'Ваше имя',
      namePlaceholder: 'Имя и фамилия',
      emailLabel: 'Email или телефон',
      emailPlaceholder: 'example@domain.com или +996...',
      typeLabel: 'Тип объекта',
      messageLabel: 'Описание проекта или вопрос',
      messagePlaceholder: 'Расскажите о локации, площади и ваших пожеланиях...',
      submitButton: 'Отправить заявку',
      hqLabel: 'Центральный офис',
      hqTitle: 'г. Бишкек / Bishkek Office',
      addressMain: 'г. Бишкек, Проспект Шабдан Баатыра, 43а',
      addressSub: 'Кыргызстан, г. Бишкек',
      phoneTitle: 'Телефон и WhatsApp / Direct Lines',
      hours: 'Пн — Пт: 09:00 – 18:00 • Приём по предварительной записи',
    },
    footer: {
      about: 'О компании',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия обслуживания',
      copyright: 'Copyright © 2026- Все права защищены.',
    },
    drawer: {
      archiveTitle: 'Архив проектов и разработок',
      close: 'Закрыть',
      all: 'Все',
    },
    modal: {
      architect: 'Архитектор',
      location: 'Локация',
      year: 'Год',
      area: 'Площадь',
      keyHighlights: 'Ключевые особенности проекта',
      inquireProject: 'Обсудить этот проект',
    },
  },
  EN: {
    header: {
      title: 'GRAND⁺',
      subline1: '"GRAND Plus" LLC',
      subline2: 'Architectural Bureau in the Kyrgyz Republic   |   Bishkek',
    },
    nav: {
      home: { title: 'Home', subtitle: 'Studio & Selected Works' },
      services: { title: 'Services', subtitle: 'Full Architectural Scope' },
      projects: {
        title: 'Projects',
        subtitle: 'Architectural Portfolio',
        residential: 'Residential',
        commercial: 'Commercial',
        other: 'Other',
      },
      pricing: {
        title: 'Pricing',
        subtitle: 'Architectural Fee Packages',
        packages: 'Ready Packages',
        custom: 'Build Your Own Package',
      },
      promotions: { title: 'Offers', subtitle: 'Seasonal Packages' },
      readyProjects: { title: 'Ready Projects', subtitle: 'Turnkey Pre-Designed Blueprints' },
      guide: { title: 'Beginners Guide', subtitle: 'From Land Purchase to Commissioning' },
      contact: { title: 'Contact', subtitle: 'Bishkek HQ, Shabdan Baatyr 43a' },
      careers: { title: 'Careers', subtitle: 'Open Roles & Internships' },
      works: { title: 'Works', subtitle: 'Selected Architecture & Projects' },
      philosophy: { title: 'Philosophy', subtitle: 'Traditional Kyrgyz Aesthetics in Modern Form' },
      architects: { title: 'Architects', subtitle: 'Leading Kyrgyz Masters & Design Studios' },
      materials: { title: 'Materials', subtitle: 'Spruce, Sary-Tash & Charred Larch' },
      global: { title: 'Global Projects', subtitle: 'Operations in Over 60 Countries' },
    },
    hero: {
      details: 'Details',
      clickToExplore: 'Click banner to explore',
    },
    intro: {
      number: '01',
      category: 'About Us • GRAND Plus LLC',
      title: 'GRAND Plus LLC — Architectural & Engineering Bureau',
      description: 'GRAND Plus LLC (Bishkek, Kyrgyz Republic) is a certified full-cycle architectural bureau specializing in seismic-resistant luxury residences, commercial complexes, and mountain eco-resorts certified for up to 9-point seismic loads.',
      exploreArchive: 'Architectural Portfolio',
      scheduleConsultation: 'Schedule Chief Architect Consultation',
    },
    philosophy: {
      number: '02',
      category: 'Spatial Philosophy',
      title: 'Philosophy of Nomadic Spatial Harmony',
      description: 'Harmonizing the wisdom of Kyrgyz nomadic heritage and mountain topography with contemporary structural innovation.',
      quote: '“Space is not an emptiness to be filled, but a sacred balance of mountain horizon, air, and light.”',
      exploreWorks: 'Explore Works',
      pillar1Title: 'Nomadic Horizon',
      pillar1Sub: 'Natural Light & Sky',
      pillar1Desc: 'Sweeping sightlines, expansive cantilevered eaves shielding from intense sun, and central skylight openings honoring traditional yurt apertures.',
      pillar2Title: 'Mountain Honesty',
      pillar2Sub: 'Authentic Local Materials',
      pillar2Desc: 'Direct integration of indigenous Tien Shan spruce, warm Sary-Tash travertine, and carbonized larch timber without superficial synthetic finishes.',
      pillar3Title: 'Sensory Balance',
      pillar3Sub: 'Acoustic & Thermal Harmony',
      pillar3Desc: 'Embracing intentional negative space and calm textures to create profound sensory rest against dramatic natural backdrops.',
    },
    architects: {
      number: '03',
      category: 'Architects & Studios',
      title: 'Leading Kyrgyz Masters & Design Studios',
      description: 'Bridging century-old architectural lineage with contemporary international design execution.',
      card1Badge: 'Bishkek & Chuy',
      card1Title: '1st Class Master Architects',
      card1Desc: 'Certified Kyrgyz architects specializing in structural timber, cantilevered roofs, and luxury modern mountain villas.',
      card1Foot: 'Bishkek Design Bureau',
      card2Badge: 'Osh & Fergana',
      card2Title: 'Heritage & Bioclimatic Architecture',
      card2Desc: 'Masters of traditional stonemasonry, Sary-Tash carving, and passive climate cooling adapted to continental terrain.',
      card2Foot: 'Regional Department',
      card3Badge: 'Issyk-Kul & Alpine',
      card3Title: 'Alpine & Eco-Resort Specialists',
      card3Desc: 'High-altitude eco-resorts, geothermal heating integration, and modern lakeside residential architecture.',
      card3Foot: 'Alpine Architecture Lab',
      actionLeft: 'See Projects Built by These Architects',
      actionRight: 'Direct Bureau Inquiries',
    },
    materials: {
      number: '04',
      category: 'Architectural Sourcing',
      title: 'Spruce, Sary-Tash & Charred Larch',
      description: 'Direct sustainable supply chains connecting Kyrgyz mountain quarries and alpine forests with global architecture.',
      mat1Name: 'Tien Shan Alpine Spruce',
      mat1Desc: 'Dense, straight alpine timber with warm honey grain, natural aroma, and high load-bearing capacity for ceilings, louvers, and structural beams.',
      mat2Name: 'Sary-Tash Travertine',
      mat2Desc: 'Prestigious natural travertine with warm ivory-ochre tones, excellent thermal insulation, and velvet honed finishes for luxury facades.',
      mat3Name: 'Charred Mountain Larch',
      mat3Desc: 'Traditional surface flame-carbonization yielding an obsidian-dark, insect- and weather-proof timber without toxic chemical treatments.',
      assurance: 'Certified natural stone and alpine timber sourced directly from Chuy, Issyk-Kul, Naryn, and Osh to project sites worldwide.',
      originVerified: 'Sustainable Origin Verified',
      seeProjects: 'See Projects Built With These Materials',
      requestSamples: 'Request Material Samples',
    },
    global: {
      number: '05',
      category: 'Worldwide Operations',
      title: 'Operations in Over 60 Countries',
      description: 'Complete turnkey architectural services, timber logistics, and local engineering compliance across the globe.',
      hub1Region: 'Kyrgyzstan National Hubs',
      hub1Type: 'Headquarters & Design Studios',
      hub1Desc: 'National architectural centers directing private alpine residences, public masterplans, and eco-resorts.',
      hub2Region: 'Central Asia & Silk Road',
      hub2Type: 'Regional Architecture Bureaus',
      hub2Desc: 'Coordinating cross-border continental architecture, bio-climatic villas, and urban centers.',
      hub3Region: 'International Client Desks',
      hub3Type: 'Global Representative Desks',
      hub3Desc: 'Delivering private architectural commissions, mountain retreats, and bespoke sustainable hospitality.',
      seeMap: 'View Global Delivery Map',
      internationalInquiry: 'Initiate Cross-Border Project',
    },
    contact: {
      number: '06',
      category: 'Direct Inquiries',
      title: 'Bishkek Central Headquarters',
      description: 'Direct consultations with our architectural directors at our central office in Bishkek.',
      inquiryReceived: 'Inquiry Received',
      thankYou: 'Thank you for contacting GRAND + Kyrgyz International Architectural Design Center. Our lead architects will respond within 24 hours.',
      sendAnother: 'Send another message',
      nameLabel: 'Your Name',
      namePlaceholder: 'Full name',
      emailLabel: 'Email or Phone',
      emailPlaceholder: 'example@domain.com or +996...',
      typeLabel: 'Project Typology',
      messageLabel: 'Project Outline & Requirements',
      messagePlaceholder: 'Tell us about the site location, approximate area, and specific requirements...',
      submitButton: 'Transmit Inquiry',
      hqLabel: 'Central Headquarters',
      hqTitle: 'г. Бишкек / Bishkek Office',
      addressMain: 'г. Бишкек, Проспект Шабдан Баатыра, 43а',
      addressSub: '43a Shabdan Baatyr Ave, Bishkek, Kyrgyzstan',
      phoneTitle: 'Телефон и WhatsApp / Direct Lines',
      hours: 'Пн — Пт: 09:00 – 18:00 • Consultation by appointment',
    },
    footer: {
      about: 'About',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      copyright: 'Copyright © 2026- All rights reserved.',
    },
    drawer: {
      archiveTitle: 'Works & Projects Archive',
      close: 'Close',
      all: 'All',
    },
    modal: {
      architect: 'Architect',
      location: 'Location',
      year: 'Year',
      area: 'Area',
      keyHighlights: 'Key Architectural Highlights',
      inquireProject: 'Inquire About This Project',
    },
  },
  KY: {
    header: {
      title: 'GRAND⁺',
      subline1: '"ГРАНД Плюс" ЖЧК',
      subline2: 'Кыргыз Республикасындагы архитектуралык бюросу   |   Бишкек ш.',
    },
    nav: {
      home: { title: 'Башкы бет', subtitle: 'Бюро жана тандалган иштер' },
      services: { title: 'Кызматтар', subtitle: 'Архитектуралык иштердин комплекси' },
      projects: {
        title: 'Долбоорлор',
        subtitle: 'Архитектуралык каталог',
        residential: 'Турак жай',
        commercial: 'Коммерциялык',
        other: 'Башкалар',
      },
      pricing: {
        title: 'Баасы',
        subtitle: 'Долбоорлоо тарифтери',
        packages: 'Даяр пакеттер',
        custom: 'Өз пакетиңизди түзүңүз',
      },
      promotions: { title: 'Акциялар', subtitle: 'Атайын сунуштар' },
      readyProjects: { title: 'Даяр долбоорлор', subtitle: 'Автордук даяр чечимдер' },
      guide: { title: 'Новичкам', subtitle: 'Жер тилкесин алуудан пайдаланууга чейин' },
      contact: { title: 'Байланыш', subtitle: 'Бишкек ш., Шабдан Баатыр пр., 43а' },
      careers: { title: 'Карьера', subtitle: 'Бош орундар жана практика' },
      works: { title: 'Долбоорлор', subtitle: 'Архитектура жана ишке ашкан иштер' },
      philosophy: { title: 'Философия', subtitle: 'Салттуу эстетика заманбап формада' },
      architects: { title: 'Архитекторлор', subtitle: 'Кыргызстандын алдыңкы чеберлери' },
      materials: { title: 'Материалдар', subtitle: 'Карагай, Сары-Таш жана күйгүзүлгөн кара карагай' },
      global: { title: 'География', subtitle: '60тан ашуун өлкөдө долбоорлор' },
    },
    hero: {
      details: 'Толугураак',
      clickToExplore: 'Долбоорду көрүү үчүн басыңыз',
    },
    intro: {
      number: '01',
      category: 'Тандалган архитектура',
      title: 'Дүйнөлүк долбоорлор үчүн кыргыз архитекторлору',
      description: 'Кыргыз эл аралык архитектуралык долбоорлоо борбору (GRAND⁺) — көчмөн мейкиндик салты менен дүйнөлүк заманбап инженериянын гармониясы.',
      exploreArchive: 'Толук архивди көрүү',
      scheduleConsultation: 'Архитектор менен байланышуу',
    },
    philosophy: {
      number: '02',
      category: 'Мейкиндик философиясы',
      title: 'Көчмөн мейкиндик гармониясынын философиясы',
      description: 'Кыргыз мурасы менен Ала-Тоо ландшафтынын заманбап архитектурадагы айкалышы.',
      quote: '«Мейкиндик — бул толтурула турган боштук эмес, тоо горизонтунун, таза абанын жана жарыктын ыйык тең салмагы.»',
      exploreWorks: 'Иштерди көрүү',
      pillar1Title: 'Ачык горизонт',
      pillar1Sub: 'Табигый жарык жана аба',
      pillar1Desc: 'Кең тоо пейзаждары, күндөн коргогон чатыр этектери жана боз үйдүн түндүгү сымал жарык октору.',
      pillar2Title: 'Тоо материалдары',
      pillar2Sub: 'Табигый текстуралар',
      pillar2Desc: 'Тянь-Шань карагайы, Сары-Таш травертини жана күйгүзүлгөн кара карагай жыгачы.',
      pillar3Title: 'Форма тазалыгы',
      pillar3Sub: 'Архитектуралык тынчтык',
      pillar3Desc: 'Ашыкча жасалгасыз, табияттын өзүндөй табигый жана бейпил мейкиндиктер.',
    },
    architects: {
      number: '03',
      category: 'Архитекторлор жана студиялар',
      title: 'Кыргызстандын алдыңкы чеберлери жана бюролору',
      description: 'Көп кылымдык улуттук курулуш өнөрүн дүйнөлүк деңгээлдеги долбоорлоо менен айкалыштыруу.',
      card1Badge: 'Бишкек жана Чүй',
      card1Title: 'Жогорку категориядагы архитекторлор',
      card1Desc: 'Жыгач конструкциялары, консоль чатырлар жана премиум виллалар боюнча адистер.',
      card1Foot: 'Бишкек долбоорлоо бюросу',
      card2Badge: 'Ош жана Фергана',
      card2Title: 'Мурас жана биоклиматикалык архитектура',
      card2Desc: 'Сары-Таш таш кагуу өнөрү жана сейсмикалык туруктуу имараттарды куруу чеберчилиги.',
      card2Foot: 'Аймактык бөлүм',
      card3Badge: 'Ысык-Көл жана Тянь-Шань',
      card3Title: 'Тоо жана эко-архитектура',
      card3Desc: 'Ысык-Көл жээгиндеги жана бийик тоолуу аймактардагы эко-мейманканалар жана резиденциялар.',
      card3Foot: 'Альп лабораториясы',
      actionLeft: 'Бул чеберлердин долбоорлорун көрүү',
      actionRight: 'Бюрого кайрылуу',
    },
    materials: {
      number: '04',
      category: 'Табигый материалдар',
      title: 'Карагай, Сары-Таш жана күйгүзүлгөн карагай',
      description: 'Кыргызстандын карьерлеринен жана тоо токойлорунан дүйнөлүк долбоорлорго жеткирүү.',
      mat1Name: 'Тянь-Шань карагайы',
      mat1Desc: 'Жылуу бал түстүү, жагымдуу жыттуу жана жогорку бекемдикке ээ альп жыгачы.',
      mat2Name: 'Сары-Таш травертини',
      mat2Desc: 'Жылуу пил сөөгү жана сары түстөгү, сонун жылуулук сактоочу касиетке ээ табигый таш.',
      mat3Name: 'Күйгүзүлгөн кара карагай',
      mat3Desc: 'От менен иштетилген, нымга жана курт-кумурскага туруктуу экологиялык таза жыгач.',
      assurance: 'Кыргызстандан дүйнөнүн бардык бурчтарына табигый тоо таштарын жана жыгачын түз жеткирүү.',
      originVerified: 'Тоо тектеринин аныктыгы кепилденген',
      seeProjects: 'Бул материалдардан курулган долбоорлор',
      requestSamples: 'Материал үлгүлөрүн суроо',
    },
    global: {
      number: '05',
      category: 'Эл аралык ишмердүүлүк',
      title: '60тан ашуун өлкөдө иштөө',
      description: 'Долбоорлоо, автордук көзөмөл, материалдарды жеткирүү жана эл аралык стандарттар.',
      hub1Region: 'Кыргызстандын башкы борбору',
      hub1Type: 'Башкы кеңсе жана долбоорлоо студиялары',
      hub1Desc: 'Жеке резиденцияларды, коомдук имараттарды жана эс алуу комплекстерин координациялоо.',
      hub2Region: 'Борбордук Азия жана Жибек Жолу',
      hub2Type: 'Аймактык архитектуралык бюролор',
      hub2Desc: 'Чоң масштабдагы комплекстерди жана шаар куруу концепцияларын ишке ашыруу.',
      hub3Region: 'Эл аралык өкүлчүлүктөр',
      hub3Type: 'Өнөктөш кеңселер',
      hub3Desc: 'Дүйнө жүзү боюнча жеке тоо резиденцияларын жана курорттук долбоорлорду ишке ашыруу.',
      seeMap: 'Долбоорлор картасын көрүү',
      internationalInquiry: 'Эл аралык суроо-талап',
    },
    contact: {
      number: '06',
      category: 'Түз байланыш',
      title: 'Бишкектеги башкы кеңсе',
      description: 'Бишкектеги башкы кеңсебизде архитекторлор менен түздөн-түз кеңешүү.',
      inquiryReceived: 'Кат кабыл алынды',
      thankYou: 'GRAND⁺ борборуна кайрылганыңыз үчүн рахмат. Биздин архитектор 24 сааттын ичинде жооп берет.',
      sendAnother: 'Дагы бир кат жөнөтүү',
      nameLabel: 'Сиздин атыңыз',
      namePlaceholder: 'Аты-жөнүңүз',
      emailLabel: 'Email же телефон',
      emailPlaceholder: 'example@domain.com же +996...',
      typeLabel: 'Долбоордун түрү',
      messageLabel: 'Долбоор боюнча маалымат же суроо',
      messagePlaceholder: 'Жайгашкан жери, аянты жана каалоолоруңуз тууралуу жазыңыз...',
      submitButton: 'Суроо-талапты жөнөтүү',
      hqLabel: 'Башкы кеңсе',
      hqTitle: 'Бишкек шаары / Bishkek Office',
      addressMain: 'Бишкек ш., Шабдан Баатыр проспекти, 43а',
      addressSub: 'Кыргызстан, Бишкек шаары',
      phoneTitle: 'Телефон жана WhatsApp / Direct Lines',
      hours: 'Дүйш — Жума: 09:00 – 18:00 • Алдын ала жазылуу менен',
    },
    footer: {
      about: 'Биз жөнүндө',
      privacy: 'Купуялык саясаты',
      terms: 'Колдонуу шарттары',
      copyright: 'Copyright © 2026- Бардык укуктар корголгон.',
    },
    drawer: {
      archiveTitle: 'Долбоорлор архиви',
      close: 'Жабуу',
      all: 'Баары',
    },
    modal: {
      architect: 'Архитектор',
      location: 'Жайгашкан жери',
      year: 'Жылы',
      area: 'Аянты',
      keyHighlights: 'Долбоордун негизги өзгөчөлүктөрү',
      inquireProject: 'Долбоорду талкуулоо',
    },
  },
  ZH: {
    header: {
      title: 'GRAND⁺',
      subline1: '“GRAND Plus” 有限责任公司',
      subline2: '吉尔吉斯共和国建筑设计事务所   |   比什凯克',
    },
    nav: {
      home: { title: '首页', subtitle: '事务所概览与精选' },
      services: { title: '服务范围', subtitle: '全专业综合建筑设计' },
      projects: {
        title: '项目',
        subtitle: '建筑作品名录',
        residential: '住宅',
        commercial: '商业',
        other: '其他',
      },
      pricing: {
        title: '费用',
        subtitle: '建筑设计取费标准',
        packages: '固定成熟套餐',
        custom: '自由定制方案包',
      },
      promotions: { title: '特惠', subtitle: '当季专属礼遇' },
      readyProjects: { title: '成熟方案', subtitle: '高标准可落地精选图纸' },
      guide: { title: '新手指南', subtitle: '从买地选址到竣工验收全流程' },
      contact: { title: '联系', subtitle: '比什凯克市沙卜丹·巴特尔大街43a' },
      careers: { title: '招贤', subtitle: '职位招聘与实习通道' },
      works: { title: '作品案例', subtitle: '精选建筑与设计作品' },
      philosophy: { title: '空间哲学', subtitle: '传统游牧美学与现代建筑' },
      architects: { title: '建筑大师', subtitle: '吉尔吉斯斯坦顶尖建筑设计事务所' },
      materials: { title: '建筑材料', subtitle: '天山云杉、萨雷塔什石灰华与碳化落叶松' },
      global: { title: '全球业务', subtitle: '业务覆盖全球60多个国家' },
    },
    hero: {
      details: '查看详情',
      clickToExplore: '点击探索项目',
    },
    intro: {
      number: '01',
      category: '精选建筑',
      title: '服务全球顶级项目的吉尔吉斯建筑师',
      description: '吉尔吉斯国际建筑设计中心 (GRAND⁺) — 完美融合传统游牧空间美学与前沿现代工程科技。',
      exploreArchive: '浏览完整项目档案',
      scheduleConsultation: '预约建筑师咨询',
    },
    philosophy: {
      number: '02',
      category: '空间哲学',
      title: '游牧空间与自然和谐的哲学',
      description: '吉尔吉斯游牧文化底蕴与天山地形地貌在现代建筑结构中的完美升华。',
      quote: '“空间不是等待填满的虚无，而是高山地平线、纯净空气与自然光线的神圣平衡。”',
      exploreWorks: '探索作品',
      pillar1Title: '游牧地平线',
      pillar1Sub: '自然光与天际',
      pillar1Desc: '开阔高山视野，深挑屋檐有效遮阳，借鉴传统毡房天窗的采光轴线。',
      pillar2Title: '高山之真',
      pillar2Sub: '原生态天然用材',
      pillar2Desc: '甄选天山高山云杉、温润的萨雷塔什石灰华与碳化落叶松木。',
      pillar3Title: '纯粹宁静',
      pillar3Sub: '声学与热工平衡',
      pillar3Desc: '运用留白艺术与沉静材质，在雄伟山景中打造静谧安心之所。',
    },
    architects: {
      number: '03',
      category: '建筑大师与事务所',
      title: '吉尔吉斯斯坦大师级建筑师与设计局',
      description: '深厚建筑文脉传承与国际化顶尖建筑设计建造落地水准。',
      card1Badge: '比什凯克与楚河',
      card1Title: '国家级一级注册建筑师',
      card1Desc: '专注于重型木结构、大悬挑屋顶及高端现代山地度假别墅。',
      card1Foot: '比什凯克设计局',
      card2Badge: '奥什与费尔干纳',
      card2Title: '历史文脉与生物气候建筑',
      card2Desc: '精通传统石砌工艺、萨雷塔什天然石材雕刻与高抗震建筑设计。',
      card2Foot: '区域设计分局',
      card3Badge: '伊塞克湖与高山区',
      card3Title: '高山与生态度假建筑专家',
      card3Desc: '高海拔生态度假酒店、地热节能建筑与湖畔现代住宅设计。',
      card3Foot: '高山建筑实验室',
      actionLeft: '查看大师作品',
      actionRight: '直接业务咨询',
    },
    materials: {
      number: '04',
      category: '天然材料直供',
      title: '天山云杉、萨雷塔什石灰华与碳化木',
      description: '从吉尔吉斯斯坦矿山与高山林区直采，可持续供应链直通全球项目。',
      mat1Name: '天山高山云杉木',
      mat1Desc: '质地致密、色泽温润呈蜂蜜色，具天然清香与极高承重力的高等级高山木材。',
      mat2Name: '萨雷塔什天然石灰华',
      mat2Desc: '高贵天然象牙黄至赭石色调，质感温润细腻，具卓越保温隔热性能。',
      mat3Name: '碳化高山落叶松',
      mat3Desc: '传统表面火焰碳化工艺，形成黑曜石般质感，无化学药剂持久防虫耐腐。',
      assurance: '严格认证的天然石材与高山木材，直接配送至全球各建筑工地。',
      originVerified: '高山原产地直供认证',
      seeProjects: '查看应用该材料的项目',
      requestSamples: '申请材料样板',
    },
    global: {
      number: '05',
      category: '全球业务布局',
      title: '业务覆盖全球60多个国家',
      description: '全流程建筑设计咨询、施工配合、天然材料跨境直供及国际工程合规。',
      hub1Region: '吉尔吉斯斯坦国家总枢纽',
      hub1Type: '总部与核心设计院',
      hub1Desc: '统领高端私宅、公共综合体与生态度假园区整体规划设计。',
      hub2Region: '中亚与丝绸之路枢纽',
      hub2Type: '区域建筑设计事务所',
      hub2Desc: '协同大型跨区域建筑、生态别墅与现代城市综合体开发。',
      hub3Region: '国际客户联络处',
      hub3Type: '海外代表处与服务网点',
      hub3Desc: '面向全球高净值客户与业主，提供高山私宅与度假酒店定制服务。',
      seeMap: '查看全球交付地图',
      internationalInquiry: '发起跨国项目咨询',
    },
    contact: {
      number: '06',
      category: '直接联系',
      title: '比什凯克中央总部',
      description: '欢迎在比什凯克中央办公室与我们的主创建筑师直接沟通洽谈。',
      inquiryReceived: '已收到您的咨询',
      thankYou: '感谢联系GRAND⁺吉尔吉斯国际建筑设计中心。主创建筑师将在24小时内与您联系。',
      sendAnother: '发送其他信息',
      nameLabel: '您的姓名',
      namePlaceholder: '姓名',
      emailLabel: '电子邮箱或电话',
      emailPlaceholder: 'example@domain.com 或 +996...',
      typeLabel: '项目类型',
      messageLabel: '项目概述与需求',
      messagePlaceholder: '请简要说明项目地点、面积和具体设计构想...',
      submitButton: '提交设计咨询',
      hqLabel: '中央总部',
      hqTitle: '比什凯克办事处 / Bishkek Office',
      addressMain: '比什凯克市沙卜丹·巴特尔大街43a',
      addressSub: '43a Shabdan Baatyr Ave, Bishkek, Kyrgyzstan',
      phoneTitle: '直拨电话与WhatsApp / Direct Lines',
      hours: '周一至周五: 09:00 – 18:00 • 需提前预约',
    },
    footer: {
      about: '关于我们',
      privacy: '隐私政策',
      terms: '服务条款',
      copyright: 'Copyright © 2026- 保留所有权利。',
    },
    drawer: {
      archiveTitle: '作品与项目档案',
      close: '关闭',
      all: '全部',
    },
    modal: {
      architect: '主创建筑师',
      location: '项目地点',
      year: '设计年份',
      area: '建筑面积',
      keyHighlights: '核心建筑亮点',
      inquireProject: '咨询该项目',
    },
  },
};
