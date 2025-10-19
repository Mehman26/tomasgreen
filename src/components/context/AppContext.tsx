import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { devicePerformance, DeviceInfo, getAnimationConfig } from '../utils/DevicePerformance';

type Language = 'ru' | 'en';
type Page = 'home' | 'about' | 'business' | 'private-label' | 'catalog' | 'contacts';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  t: (key: string) => string;
  deviceInfo: DeviceInfo | null;
  animationConfig: any;
  isLowEndDevice: boolean;
  scrollToTop: () => void;
}

const translations = {
  ru: {
    // Navigation
    about: 'О компании',
    catalog: 'Каталог',
    business: 'Для бизнеса',
    privateLabel: 'СТМ под ключ',
    contacts: 'Контакты',
    
    // Hero section
    heroTitle: 'Высококачественные орехи и сухофрукты для оптовых закупок и розницы',
    heroSubtitle: 'Собственные производства, контроль качества на каждом этапе и проверенные поставки по всей России',
    learnMore: 'Узнать больше',
    
    // Business growth section
    growthTitle: 'Растите свой бизнес вместе с Tomas Green',
    growthSubtitle: 'Мы создаем решения, которые помогают вашему бизнесу развиваться. Полный контроль, прозрачные условия и индивидуальный подход',
    startCooperation: 'Начать сотрудничество',
    
    // About section
    aboutTitleShort: 'Премиальные орехи и сухофрукты с заботой о каждом клиенте',
    aboutSubtitleShort: '20+ лет доверия, современные технологии и поставки по всей России и за её пределами',
    
    // About page
    aboutTitle: 'Надежная компания с современным производством и опытом 20+ лет',
    aboutSubtitle: 'Мы заботимся о качестве на каждом этапе: от сырья до вашего стола',
    
    // Values
    qualityControl: 'Контроль качества',
    reliability: 'Надежность и опыт',
    exceptionalProducts: 'Исключительные продукты',
    flexibility: 'Гибкость и сотрудничество',
    innovation: 'Инновации и устойчивость',
    
    // Business page
    businessTitle: 'Решения Tomas Green для вашего успеха',
    businessSubtitle: 'Мы поставляем ингредиенты для производителей, дистрибьюторов и ритейлеров',
    
    // Private label
    privateLabelTitle: 'Собственная торговая марка под ключ – от идеи до полки',
    privateLabelSubtitle: 'Мы превращаем вашу концепцию в продукт, который выделяется на рынке',
    privateLabelHeroTitle: 'СТМ под ключ — от идеи до полки',
    privateLabelHeroSubtitle: 'Полный цикл создания вашей собственной торговой марки с нашими экспертами',
    discussBrand: 'Обсудить свой бренд',
    mainDirections: 'Основные направления',
    mainDirectionsDesc: 'Создаем продукцию премиум-класса для вашего бренда',
    deepProcessingFull: 'Глубокая переработка и производство',
    deepProcessingFullDesc: 'Производство готовых продуктов под вашим брендом',
    nutChocolatePastes: 'Ореховые и шоколадные пасты',
    nutChocolatePastesDesc: 'Премиальные пасты с уникальными рецептурами',
    packagingServices: 'Упаковка и дизайн',
    packagingServicesDesc: 'Полный цикл разработки упаковки и брендинга',
    processCreationTitle: 'Процесс создания вашего бренда',
    processCreationDesc: 'От концепции до запуска на полки магазинов',
    stage: 'Этап',
    individualDevelopment: 'Индивидуальная разработка',
    individualDevelopmentDesc: 'Создание уникальной рецептуры и концепции продукта',
    premiumIngredients: 'Премиальные ингредиенты',
    uniqueRecipe: 'Уникальная рецептура',
    packagingDesignCreation: 'Создание дизайна упаковки',
    technicalPrototyping: 'Техническое прототипирование',
    productionQualityControl: 'Производство и контроль качества',
    productionQualityControlDesc: 'Полный производственный цикл с контролем качества',
    qualityControlStages: 'Контроль качества на всех этапах',
    standardsCompliance: 'Соответствие стандартам',
    flexibleVolumes: 'Гибкие объемы производства',
    logisticsDelivery: 'Логистика и доставка',
    logisticsDeliveryDesc: 'Комплексные решения по доставке и размещению',
    ownWarehouse: 'Собственный склад',
    russiaDelivery: 'Доставка по России',
    marketplacePlacement: 'Размещение на маркетплейсах',
    supplySupport: 'Поддержка поставок',
    marketingSupport: 'Маркетинговая поддержка',
    marketingSupportDesc: 'Профессиональный контент и продвижение бренда',
    professionalPhotography: 'Профессиональная фотосъемка',
    videoContent: 'Видеоконтент',
    promoMaterials: 'Промо-материалы',
    promotionConsulting: 'Консультации по продвижению',
    advantagesTitle: 'Наши преимущества',
    advantagesDesc: 'Почему стоит выбрать Tomas Green для создания СТМ',
    fullProductionCycle: 'Полный производственный цикл',
    flexibleProductionVolumes: 'Гибкие объемы производства',
    certifiedProduction: 'Сертифицированное производство',
    ownLaboratory: 'Собственная лаборатория',
    retailerExperience: 'Опыт работы с ритейлерами',
    fullStageSupport: 'Поддержка на всех этапах',
    readyCreateBrand: 'Готовы создать свой бренд?',
    readyCreateBrandDesc: 'Обсудим ваши идеи и создадим продукт мечты',
    
    // Categories
    nuts: 'Орехи',
    driedFruits: 'Сухофрукты',
    seeds: 'Семена',
    pastes: 'Пасты',
    dragees: 'Дражированные продукты',
    
    // Footer
    quickNavigation: 'Быстрая навигация',
    home: 'Главная',
    phone: 'Телефон',
    email: 'Email',
    address: 'Адрес',
    socialNetworks: 'Социальные сети',
    
    // Common
    more: 'Подробнее',
    back: 'Назад',
    
    // Additional content
    ourTeam: 'Наша команда',
    teamDescription: 'Эксперты производства, логистики и маркетинга',
    qualityRaw: 'Отборное сырьё и инновации',
    qualityDescription: 'Свежесть, качество, современные технологии',
    partnership: 'Партнёрство и доверие',
    partnershipDescription: '1000+ партнёров по всей России',
    values: 'Ценности и забота',
    valuesDescription: 'Премиум качество, оригинальность, надёжность',
    
    // Contacts page
    contactsTitle: 'Контакты',
    contactsSubtitle: 'Свяжитесь с нами удобным способом',
    contactInfo: 'Контактная информация',
    workingHours: 'Часы работы',
    salesPoints: 'Точки продажи',
    salesPointsSubtitle: 'Найдите наши продукты в магазинах вашего города',
    headOffice: 'Головной офис',
    getInTouch: 'Связаться с нами',
    sendMessage: 'Отправить сообщение',
    yourName: 'Ваше имя',
    yourEmail: 'Ваш email',
    yourMessage: 'Ваше сообщение',
    weekdays: 'Пн-Пт: 9:00 - 18:00',
    saturday: 'Сб: 10:00 - 16:00',
    sunday: 'Вс: выходной',
    findOnMap: 'Найти на карте',
    
    // Home page specific
    homeBusinessButton: 'Для бизнеса',
    products: 'продуктов',
    countries: 'стран',
    quality: 'качество',
    ourProducts: 'Наша продукция',
    ourProductsSubtitle: 'Премиальные орехи, сухофрукты и семена высшего качества для здорового образа жизни',
    premiumNuts: 'Орехи премиум',
    premiumNutsDesc: 'Миндаль, грецкие орехи, кешью высшего качества',
    driedFruitsTitle: 'Сухофрукты',
    driedFruitsDesc: 'Финики, инжир, курага без консервантов',
    seedsAndGrains: 'Семена и злаки',
    seedsAndGrainsDesc: 'Семена подсолнечника, тыквы, льна для здорового питания',
    from: 'от',
    perKg: '/кг',
    viewCatalog: 'Смотреть каталог',
    topBadge: 'ТОП',
    ecoBadge: 'ЭКО',
    newBadge: 'NEW',
    
    // Filters and catalog
    filtersAndSearch: 'Фильтры и поиск',
    activeFilters: 'активных',
    reset: 'Сбросить',
    searchProducts: 'Поиск товаров...',
    category: 'Категория',
    price: 'Цена',
    sorting: 'Сортировка',
    allCategories: 'Все категории',
    drageeProducts: 'Дражированные',
    anyPrice: 'Любая цена',
    upTo500: 'До 500 ₽',
    from500to1000: '500-1000 ₽',
    from1000to2000: '1000-2000 ₽',
    from2000: 'От 2000 ₽',
    byPopularity: 'По популярности',
    priceAsc: 'Цена: по возрастанию',
    priceDesc: 'Цена: по убыванию',
    byRating: 'По рейтингу',
    newestFirst: 'Сначала новые',
    inStockOnly: 'Только в наличии',
    newProducts: 'Новинки',
    
    // Product card
    temporarilyUnavailable: 'Товар временно отсутствует',
    
    // Footer
    companyDescription: 'Ведущий поставщик высококачественных орехов, сухофруктов и семян. Более 20 лет на рынке, собственное производство, доставка по всей России.',
    allRightsReserved: '© 2025 Tomas Green. Все права защищены.',
    scrollToTop: 'Наверх',
    companyAddress: 'г. Москва, ул. Примерная, д. 123',
    
    // Catalog page
    catalogTitle: 'Каталог продукции',
    catalogSubtitle: 'Широкий ассортимент высококачественных орехов, сухофруктов, семян и готовых продуктов',
    productsFound: 'товаров найдено',
    noProductsFound: 'Товары не найдены',
    noProductsMessage: 'Попробуйте изменить фильтры или поисковый запрос',
    viewMode: 'Режим просмотра',
    gridView: 'Сетка',
    listView: 'Список',
    inStock: 'В наличии',
    outOfStock: 'Нет в наличии',
    
    // Business page content
    deepProcessing: 'Глубокая переработка орехов и сухофруктов',
    deepProcessingDesc: 'Дробление на фракции различных размеров для производственных нужд',
    nutPasteProduction: 'Производство ореховых паст',
    nutPasteProductionDesc: 'Натуральные пасты без добавок из отборных орехов',
    drageeProduction: 'Дражирование',
    drageeProductionDesc: 'Покрытие орехов, семян и ягод различными видами глазури',
    modernEquipment: 'Наше современное оборудование позволяет проводить дробление орехов на фракции различных размеров в соответствии с требованиями производства.',
    naturalPastes: 'Изготавливаем натуральные ореховые пасты без добавления консервантов, красителей и искусственных добавок. Только отборные орехи и современные технологии.',
    qualityChocolate: 'Специализируемся на производстве дражированных продуктов с различными видами покрытий. Используем качественный шоколад и натуральные глазури.',
    reliabilityTitle: 'Надежность и сертификация',
    reliabilitySubtitle: 'Гарантируем качество и соответствие всем требованиям',
    legalityLicenses: 'Законность и лицензии',
    legalityDesc: 'Все необходимые разрешения и сертификаты качества',
    transparentSupply: 'Прозрачность поставок',
    transparentDesc: 'Полная отчетность и контроль на каждом этапе',
    clientTrust: 'Доверие клиентов',
    clientTrustDesc: 'Более 1000 довольных партнеров по всей России',

    // Business page processing products
    peanutFractions: 'Арахис (различные фракции)',
    cashewHalves: 'Кешью (половинки, четвертинки, крошка)',
    hazelnutWhole: 'Фундук (целый, половинки, крошка)',
    walnutQuarters: 'Грецкий орех (четвертинки, восьмушки)',
    pistachioCrumb: 'Фисташка (половинки, крошка)',
    sunflowerKernels: 'Семечки подсолнечника (очищенные)',
    almondFlakes: 'Миндаль (лепестки, крошка, мука)',

    // Paste types
    peanutPasteClassic: 'Арахисовая паста (классическая, с солью)',
    hazelnutPaste100: 'Фундучная паста (100% фундук)',
    cashewPasteDelicate: 'Паста из кешью (деликатесная)',
    almondPastePremium: 'Миндальная паста (premium)',
    pistachioPasteExclusive: 'Фисташковая паста (эксклюзив)',
    walnutPaste: 'Паста из грецкого ореха',

    // Dragee products
    nutsInChocolate: 'Орехи в шоколаде',
    seedsInGlaze: 'Семена в глазури',
    grainsInCoating: 'Злаки в покрытии',
    berriesInChocolate: 'Ягоды в шоколаде',
    candiedFruitsInGlaze: 'Цукаты в глазури',

    // Contact info
    phoneTitle: 'Телефон',
    emailTitle: 'Email',
    addressTitle: 'Адрес',
    phoneDesc: 'Звоните в рабочие часы',
    emailDesc: 'Ответим в течение 24 часов',
    addressDesc: 'Производственный комплекс',
    addressValue: 'г. Москва, ул. Складочная, 1с1',
    phoneValue: '+7 (495) 123-45-67',
    emailValue: 'info@tomasgreen.ru',
    productionFacility: 'Производственный комплекс и головной офис',
    
    // Form placeholders
    namePlaceholder: 'Введите ваше имя',
    emailPlaceholder: 'your@email.com',
    messagePlaceholder: 'Расскажите, чем мы можем помочь...',
    
    // Statistics
    satisfiedClients: 'довольных клиентов',
    support247: 'поддержка',
    regionsRussia: 'регионов России',
    yearsExperience: 'лет опыта',
    whyChooseUs: 'Почему выбирают нас'
  },
  en: {
    // Navigation
    about: 'About Us',
    catalog: 'Catalog',
    business: 'For Business',
    privateLabel: 'Private Label',
    contacts: 'Contacts',
    
    // Hero section
    heroTitle: 'High-quality nuts and dried fruits for wholesale and retail',
    heroSubtitle: 'Own production facilities, quality control at every stage and reliable deliveries throughout Russia',
    learnMore: 'Learn More',
    
    // Business growth section
    growthTitle: 'Grow your business with Tomas Green',
    growthSubtitle: 'We create solutions that help your business grow. Full control, transparent conditions and individual approach',
    startCooperation: 'Start Cooperation',
    
    // About section
    aboutTitleShort: 'Premium nuts and dried fruits with care for every customer',
    aboutSubtitleShort: '20+ years of trust, modern technologies and deliveries throughout Russia and beyond',
    
    // About page
    aboutTitle: 'Reliable company with modern production and 20+ years of experience',
    aboutSubtitle: 'We care about quality at every stage: from raw materials to your table',
    
    // Values
    qualityControl: 'Quality Control',
    reliability: 'Reliability and Experience',
    exceptionalProducts: 'Exceptional Products',
    flexibility: 'Flexibility and Cooperation',
    innovation: 'Innovation and Sustainability',
    
    // Business page
    businessTitle: 'Tomas Green solutions for your success',
    businessSubtitle: 'We supply ingredients for manufacturers, distributors and retailers',
    
    // Private label
    privateLabelTitle: 'Turnkey private label – from idea to shelf',
    privateLabelSubtitle: 'We turn your concept into a product that stands out in the market',
    privateLabelHeroTitle: 'Turnkey Private Label — from idea to shelf',
    privateLabelHeroSubtitle: 'Full cycle of creating your own brand with our experts',
    discussBrand: 'Discuss Your Brand',
    mainDirections: 'Main Directions',
    mainDirectionsDesc: 'Creating premium products for your brand',
    deepProcessingFull: 'Deep processing and production',
    deepProcessingFullDesc: 'Production of finished products under your brand',
    nutChocolatePastes: 'Nut and chocolate pastes',
    nutChocolatePastesDesc: 'Premium pastes with unique recipes',
    packagingServices: 'Packaging and design',
    packagingServicesDesc: 'Full cycle of packaging development and branding',
    processCreationTitle: 'Your brand creation process',
    processCreationDesc: 'From concept to launch on store shelves',
    stage: 'Stage',
    individualDevelopment: 'Individual development',
    individualDevelopmentDesc: 'Creating unique recipe and product concept',
    premiumIngredients: 'Premium ingredients',
    uniqueRecipe: 'Unique recipe',
    packagingDesignCreation: 'Packaging design creation',
    technicalPrototyping: 'Technical prototyping',
    productionQualityControl: 'Production and quality control',
    productionQualityControlDesc: 'Full production cycle with quality control',
    qualityControlStages: 'Quality control at all stages',
    standardsCompliance: 'Standards compliance',
    flexibleVolumes: 'Flexible production volumes',
    logisticsDelivery: 'Logistics and delivery',
    logisticsDeliveryDesc: 'Comprehensive delivery and placement solutions',
    ownWarehouse: 'Own warehouse',
    russiaDelivery: 'Delivery throughout Russia',
    marketplacePlacement: 'Marketplace placement',
    supplySupport: 'Supply support',
    marketingSupport: 'Marketing support',
    marketingSupportDesc: 'Professional content and brand promotion',
    professionalPhotography: 'Professional photography',
    videoContent: 'Video content',
    promoMaterials: 'Promotional materials',
    promotionConsulting: 'Promotion consulting',
    advantagesTitle: 'Our advantages',
    advantagesDesc: 'Why choose Tomas Green for private label creation',
    fullProductionCycle: 'Full production cycle',
    flexibleProductionVolumes: 'Flexible production volumes',
    certifiedProduction: 'Certified production',
    ownLaboratory: 'Own laboratory',
    retailerExperience: 'Experience with retailers',
    fullStageSupport: 'Support at all stages',
    readyCreateBrand: 'Ready to create your brand?',
    readyCreateBrandDesc: 'Let\'s discuss your ideas and create the product of your dreams',
    
    // Categories
    nuts: 'Nuts',
    driedFruits: 'Dried Fruits',
    seeds: 'Seeds',
    pastes: 'Pastes',
    dragees: 'Dragee Products',
    
    // Footer
    quickNavigation: 'Quick Navigation',
    home: 'Home',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    socialNetworks: 'Social Networks',
    
    // Common
    more: 'Learn More',
    back: 'Back',
    
    // Additional content
    ourTeam: 'Our Team',
    teamDescription: 'Production, logistics and marketing experts',
    qualityRaw: 'Selected raw materials and innovations',
    qualityDescription: 'Freshness, quality, modern technologies',
    partnership: 'Partnership and trust',
    partnershipDescription: '1000+ partners throughout Russia',
    values: 'Values and care',
    valuesDescription: 'Premium quality, originality, reliability',
    
    // Contacts page
    contactsTitle: 'Contacts',
    contactsSubtitle: 'Get in touch with us in a convenient way',
    contactInfo: 'Contact Information',
    workingHours: 'Working Hours',
    salesPoints: 'Sales Points',
    salesPointsSubtitle: 'Find our products in stores in your city',
    headOffice: 'Head Office',
    getInTouch: 'Get In Touch',
    sendMessage: 'Send Message',
    yourName: 'Your Name',
    yourEmail: 'Your Email',
    yourMessage: 'Your Message',
    weekdays: 'Mon-Fri: 9:00 AM - 6:00 PM',
    saturday: 'Sat: 10:00 AM - 4:00 PM',
    sunday: 'Sun: Closed',
    findOnMap: 'Find on Map',
    
    // Home page specific
    homeBusinessButton: 'For Business',
    products: 'products',
    countries: 'countries',
    quality: 'quality',
    ourProducts: 'Our Products',
    ourProductsSubtitle: 'Premium nuts, dried fruits and seeds of the highest quality for a healthy lifestyle',
    premiumNuts: 'Premium Nuts',
    premiumNutsDesc: 'Almonds, walnuts, cashews of the highest quality',
    driedFruitsTitle: 'Dried Fruits',
    driedFruitsDesc: 'Dates, figs, apricots without preservatives',
    seedsAndGrains: 'Seeds and Grains',
    seedsAndGrainsDesc: 'Sunflower, pumpkin, flax seeds for healthy nutrition',
    from: 'from',
    perKg: '/kg',
    viewCatalog: 'View Catalog',
    topBadge: 'TOP',
    ecoBadge: 'ECO',
    newBadge: 'NEW',
    
    // Filters and catalog
    filtersAndSearch: 'Filters and Search',
    activeFilters: 'active',
    reset: 'Reset',
    searchProducts: 'Search products...',
    category: 'Category',
    price: 'Price',
    sorting: 'Sorting',
    allCategories: 'All Categories',
    drageeProducts: 'Dragee Products',
    anyPrice: 'Any Price',
    upTo500: 'Up to $8',
    from500to1000: '$8-16',
    from1000to2000: '$16-32',
    from2000: 'From $32',
    byPopularity: 'By Popularity',
    priceAsc: 'Price: Low to High',
    priceDesc: 'Price: High to Low',
    byRating: 'By Rating',
    newestFirst: 'Newest First',
    inStockOnly: 'In Stock Only',
    newProducts: 'New Products',
    
    // Product card
    temporarilyUnavailable: 'Product temporarily unavailable',
    
    // Footer
    companyDescription: 'Leading supplier of high-quality nuts, dried fruits and seeds. Over 20 years in the market, own production, delivery throughout Russia.',
    allRightsReserved: '© 2025 Tomas Green. All rights reserved.',
    scrollToTop: 'To Top',
    companyAddress: 'Moscow, Primernaya St., 123',
    
    // Catalog page
    catalogTitle: 'Product Catalog',
    catalogSubtitle: 'Wide range of high-quality nuts, dried fruits, seeds and ready products',
    productsFound: 'products found',
    noProductsFound: 'No products found',
    noProductsMessage: 'Try changing filters or search query',
    viewMode: 'View mode',
    gridView: 'Grid',
    listView: 'List',
    inStock: 'In Stock',
    outOfStock: 'Out of Stock',
    
    // Business page content
    deepProcessing: 'Deep processing of nuts and dried fruits',
    deepProcessingDesc: 'Crushing into fractions of various sizes for production needs',
    nutPasteProduction: 'Nut paste production',
    nutPasteProductionDesc: 'Natural pastes without additives from selected nuts',
    drageeProduction: 'Dragee production',
    drageeProductionDesc: 'Coating nuts, seeds and berries with various types of glaze',
    modernEquipment: 'Our modern equipment allows crushing nuts into fractions of various sizes in accordance with production requirements.',
    naturalPastes: 'We manufacture natural nut pastes without preservatives, dyes and artificial additives. Only selected nuts and modern technologies.',
    qualityChocolate: 'We specialize in the production of dragee products with various types of coatings. We use quality chocolate and natural glazes.',
    reliabilityTitle: 'Reliability and certification',
    reliabilitySubtitle: 'We guarantee quality and compliance with all requirements',
    legalityLicenses: 'Legality and licenses',
    legalityDesc: 'All necessary permits and quality certificates',
    transparentSupply: 'Supply transparency',
    transparentDesc: 'Full reporting and control at every stage',
    clientTrust: 'Client trust',
    clientTrustDesc: 'More than 1000 satisfied partners throughout Russia',

    // Business page processing products
    peanutFractions: 'Peanuts (various fractions)',
    cashewHalves: 'Cashew (halves, quarters, crumbs)',
    hazelnutWhole: 'Hazelnuts (whole, halves, crumbs)',
    walnutQuarters: 'Walnuts (quarters, eighths)',
    pistachioCrumb: 'Pistachios (halves, crumbs)',
    sunflowerKernels: 'Sunflower seeds (shelled)',
    almondFlakes: 'Almonds (flakes, crumbs, flour)',

    // Paste types
    peanutPasteClassic: 'Peanut paste (classic, salted)',
    hazelnutPaste100: 'Hazelnut paste (100% hazelnuts)',
    cashewPasteDelicate: 'Cashew paste (delicate)',
    almondPastePremium: 'Almond paste (premium)',
    pistachioPasteExclusive: 'Pistachio paste (exclusive)',
    walnutPaste: 'Walnut paste',

    // Dragee products
    nutsInChocolate: 'Nuts in chocolate',
    seedsInGlaze: 'Seeds in glaze',
    grainsInCoating: 'Grains in coating',
    berriesInChocolate: 'Berries in chocolate',
    candiedFruitsInGlaze: 'Candied fruits in glaze',

    // Contact info
    phoneTitle: 'Phone',
    emailTitle: 'Email',
    addressTitle: 'Address',
    phoneDesc: 'Call during business hours',
    emailDesc: 'We will respond within 24 hours',
    addressDesc: 'Production complex',
    addressValue: 'Moscow, Skladochnaya St., 1s1',
    phoneValue: '+7 (495) 123-45-67',
    emailValue: 'info@tomasgreen.ru',
    productionFacility: 'Production complex and head office',
    
    // Form placeholders
    namePlaceholder: 'Enter your name',
    emailPlaceholder: 'your@email.com',
    messagePlaceholder: 'Tell us how we can help...',
    
    // Statistics
    satisfiedClients: 'satisfied clients',
    support247: '24/7 support',
    regionsRussia: 'Russian regions',
    yearsExperience: 'years of experience',
    whyChooseUs: 'Why Choose Us'
  }
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ru');
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null);
  const [animationConfig, setAnimationConfig] = useState({});
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);

  useEffect(() => {
    try {
      const info = devicePerformance.getDeviceInfo();
      const config = getAnimationConfig(info.isLowEndDevice);
      
      setDeviceInfo(info);
      setAnimationConfig(config);
      setIsLowEndDevice(info.isLowEndDevice);
    } catch (error) {
      console.warn('Device performance detection failed:', error);
      // Fallback to safe defaults
      const fallbackConfig = getAnimationConfig(true);
      setAnimationConfig(fallbackConfig);
      setIsLowEndDevice(true);
    }
  }, []);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[Language]] || key;
  };

  // Comprehensive scroll to top function
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      // Multiple methods to ensure scroll to top works on all devices
      const performScroll = () => {
        try {
          // Method 1: Standard scrollTo with instant behavior
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
          });
          
          // Method 2: Fallback for older browsers
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
          
          // Method 3: Force scroll on main element if exists
          const mainElement = document.querySelector('main');
          if (mainElement) {
            mainElement.scrollTop = 0;
          }
          
          // Method 4: Reset scroll on any scrollable containers
          const scrollableElements = document.querySelectorAll('[data-scroll-container]');
          scrollableElements.forEach(element => {
            (element as HTMLElement).scrollTop = 0;
          });
          
          // Method 5: Force page scroll for mobile Safari
          if (deviceInfo?.isMobile) {
            document.body.scrollIntoView({ behavior: 'instant', block: 'start' });
          }
          
          // Method 6: Reset any viewport scroll
          const viewportElement = document.querySelector('meta[name="viewport"]');
          if (viewportElement && deviceInfo?.isMobile) {
            // Force a layout reflow on mobile to ensure scroll reset
            const currentContent = viewportElement.getAttribute('content');
            viewportElement.setAttribute('content', currentContent || '');
          }
        } catch (error) {
          console.warn('Scroll to top failed:', error);
          // Ultimate fallback
          try {
            window.location.hash = '';
            window.scrollTo(0, 0);
          } catch (fallbackError) {
            console.warn('Fallback scroll to top failed:', fallbackError);
          }
        }
      };

      // Immediate scroll
      performScroll();
      
      // Delayed scroll for mobile devices and complex layouts
      const timeout1 = setTimeout(performScroll, 10);
      const timeout2 = setTimeout(performScroll, 50);
      const timeout3 = setTimeout(performScroll, 100);

      // Cleanup timeouts if component unmounts quickly
      return () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        clearTimeout(timeout3);
      };
    }
  };

  const value: AppContextType = {
    language,
    setLanguage,
    currentPage,
    setCurrentPage,
    t,
    deviceInfo,
    animationConfig,
    isLowEndDevice,
    scrollToTop,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};