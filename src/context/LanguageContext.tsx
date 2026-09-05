import React, { createContext, useState, useContext, type ReactNode } from 'react';

export const translations = {
  lv: {
    navHome: "SĀKUMS",
    navServices: "PAKALPOJUMI UN CENAS",
    navContacts: "KONTAKTI",
    heroBadge: "PROFESIONĀLA UTILIZĀCIJA",
    heroTitle: "SMAGAIS TRANSPORTS UN KONTEINERU NOMA",
    heroSubtitle: "Gatavi jebkura apjoma būvgružu un atkritumu izvešanai Visā Latvijā.",
    heroBtnPrimary: "Apskatīt pakalpojumus",
    heroBtnSecondary: "Kontakti un adrese",
    servicesTitle: "MŪSU TEHNIKA UN KONTEINERI",
    servicesSubtitle: "Piedāvājam dažāda tilpuma konteinerus un specializēto transportu jūsu vajadzībām.",
    
    /* Исправленные логичные заголовки карточек */
    card1Title: "Konteineru noma",
    card1Desc: "Lieliski piemērots mazākiem būvgružiem, remontdarbiem un dārza atkritumiem.",
    card2Title: "Kravēju pakalpojumi",
    card2Desc: "Apjomīgākiem būvniecības un nojaukšanas darbiem, smagiem būvgružiem.",
    card3Title: "Smagā transporta pakalpojumi",
    card3Desc: "Biroju un ražotņu beramo kravu, atkritumu un būvgružu pārvadājumi.",
    
    ctaTitle: "NEPIECIEŠAMA KONSULTĀCIJA VAI APJOMA APRĒĶINS?",
    ctaSubtitle: "Sazinieties ar mums jau šodien – piemeklēsim izdevīgāko risinājumu!",
    contactsTitle: "KONTAKTI UN ADRESE",
    contactsSubtitle: "Sazinieties ar mums, lai pieteiktu konteineru vai precizētu izmaksas.",
    phoneLabel: "TĀLRUNIS:",
    workHoursLabel: "DARBA LAIKS:",
    workHoursWeekdays: "P. – Pk.: 8:00 – 20:00",
    workHoursWeekends: "S. – Sv.: 9:00 – 18:00",
    serviceAreaLabel: "APKALPOŠANAS ZONA:",
    serviceAreaValue: "Visā Latvijā!",
    quickDeliveryTag: "ĀTRA PIEGĀDE",
    orderContainerTitle: "KONTEINERA PASŪTĪŠANA",
    orderContainerDesc: "Zvaniet tieši tagad, lai saskaņotu piegādes laiku un vietu 5 minūšu laikā.",
    btnCallNow: "ZVANĪT TŪLĪT",
    footerDesc: "Atkritumu utilizācija un transporta pakalpojumi",
    footerContactsHeader: "SAZIŅAI UN PASŪTĪJUMIEM",
    footerWorkHoursHeader: "Darba laiks",
  },
  ru: {
    navHome: "ГЛАВНАЯ",
    navServices: "УСЛУГИ И ЦЕНЫ",
    navContacts: "КОНТАКТЫ",
    heroBadge: "ПРОФЕССИОНАЛЬНАЯ УТИЛИЗАЦИЯ",
    heroTitle: "ТЯЖЕЛЫЙ ТРАНСПОРТ И АРЕНДА КОНТЕЙНЕРОВ",
    heroSubtitle: "Вывоз строительного мусора и отходов любого объема по всей Латвии.",
    heroBtnPrimary: "Смотреть услуги",
    heroBtnSecondary: "Контакты и адрес",
    servicesTitle: "НАША ТЕХНИКА И КОНТЕЙНЕРЫ",
    servicesSubtitle: "Предлагаем контейнеры разного объема и специализированный транспорт под ваши задачи.",
    
    /* Исправленные логичные заголовки карточек */
    card1Title: "Аренда контейнеров",
    card1Desc: "Отлично подходит для небольшого строительного мусора, ремонта и садовых отходов.",
    card2Title: "Услуги грузчиков",
    card2Desc: "Для крупногабаритных строительных и демонтажных работ, тяжелого мусора.",
    card3Title: "Услуги тяжелого транспорта",
    card3Desc: "Перевозка сыпучих грузов, мусора и отходов для предприятий и офисов.",
    
    ctaTitle: "НУЖНА КОНСУЛЬТАЦИЯ ИЛИ РАСЧЕТ СТОИМОСТИ?",
    ctaSubtitle: "Свяжитесь с нами сегодня — подберем самое выгодное решение!",
    contactsTitle: "КОНТАКТЫ И АДРЕС",
    contactsSubtitle: "Свяжитесь с нами, чтобы заказать контейнер или уточнить стоимость.",
    phoneLabel: "ТЕЛЕФОН:",
    workHoursLabel: "ВРЕМЯ РАБОТЫ:",
    workHoursWeekdays: "Пн. – Пт.: 8:00 – 20:00",
    workHoursWeekends: "Сб. – Вс.: 9:00 – 18:00",
    serviceAreaLabel: "ЗОНА ОБСЛУЖИВАНИЯ:",
    serviceAreaValue: "По всей Латвии!",
    quickDeliveryTag: "БЫСТРАЯ ДОСТАВКА",
    orderContainerTitle: "ЗАКАЗ КОНТЕЙНЕРА",
    orderContainerDesc: "Позвоните прямо сейчас, чтобы согласовать время и место доставки за 5 минут.",
    btnCallNow: "ПОЗВОНИТЬ СЕЙЧАС",
    footerDesc: "Утилизация отходов и транспортные услуги",
    footerContactsHeader: "ДЛЯ СВЯЗИ И ЗАКАЗОВ",
    footerWorkHoursHeader: "Время работы",
  },
  en: {
    navHome: "HOME",
    navServices: "SERVICES & PRICES",
    navContacts: "CONTACTS",
    heroBadge: "PROFESSIONAL DISPOSAL",
    heroTitle: "HEAVY TRANSPORT & CONTAINER RENTAL",
    heroSubtitle: "Removal of construction debris and waste of any volume in all of Latvia.",
    heroBtnPrimary: "View services",
    heroBtnSecondary: "Contacts & Address",
    servicesTitle: "OUR MACHINERY & CONTAINERS",
    servicesSubtitle: "We offer containers of various sizes and specialized transport for your needs.",
    
    /* Исправленные логичные заголовки карточек */
    card1Title: "Container Rental",
    card1Desc: "Perfect for smaller construction waste, renovations, and garden debris.",
    card2Title: "Mover Services",
    card2Desc: "For larger construction and demolition projects, heavy waste.",
    card3Title: "Heavy Transport Services",
    card3Desc: "Transportation of bulk cargo, waste, and debris for businesses and sites.",
    
    ctaTitle: "NEED A CONSULTATION OR PRICE ESTIMATE?",
    ctaSubtitle: "Contact us today – we will find the most cost-effective solution!",
    contactsTitle: "CONTACTS AND ADDRESS",
    contactsSubtitle: "Contact us to order a container or clarify pricing details.",
    phoneLabel: "PHONE:",
    workHoursLabel: "WORKING HOURS:",
    workHoursWeekdays: "Mon. – Fri.: 8:00 – 20:00",
    workHoursWeekends: "Sat. – Sun.: 9:00 – 18:00",
    serviceAreaLabel: "SERVICE AREA:",
    serviceAreaValue: "All over Latvia!",
    quickDeliveryTag: "FAST DELIVERY",
    orderContainerTitle: "ORDER A CONTAINER",
    orderContainerDesc: "Call us right now to arrange delivery time and location within 5 minutes.",
    btnCallNow: "CALL NOW",
    footerDesc: "Waste disposal and transport services",
    footerContactsHeader: "FOR INQUIRIES & ORDERS",
    footerWorkHoursHeader: "Working hours",
  }
};

type Language = 'lv' | 'ru' | 'en';
type TranslationType = typeof translations.lv;

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('lv');

  const t = translations[lang] || translations.lv;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};