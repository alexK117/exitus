import { type CompanyData, type ServiceItem, type AdvantageItem } from '../types';

export const companyData: CompanyData = {
  name: "SIA EXITUS",
  slogan: "Atkritumu utilizācija un transporta pakalpojumi",
  description: "Profesionāla būvgružu, liela izmēra atkritumu izvešana un konteineru noma Jelgavā, Rīgā un visā Zemgalē.",
  phone: "+371 20445883",
  email: "info.exitus@gmail.com",
  workingHours: {
    workdays: "8:00 – 20:00",
    weekends: "10:00 – 14:00"
  }
};

export const advantagesData: AdvantageItem[] = [
  { icon: "01", title: "Ātra piegāde", desc: "Konteiners jūsu objektā saskaņotajā laikā." },
  { icon: "02", title: "Ietilpīgs autoparks", desc: "Konteineri no 6m³ līdz 20m³ jebkuram apjomam." },
  { icon: "03", title: "Krāvēju komanda", desc: "Paši iekrausim un atbrīvosim telpas no lūžņiem." }
];

export const servicesData: ServiceItem[] = [
  {
    id: "containers",
    title: "Būvgružu konteineri",
    subtitle: "Noma un Izvešana",
    description: "Konteineru noma būvgružiem, remontu atkritumiem un smagajiem materiāliem.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
    options: ["6 m³", "8 m³", "10 m³", "20 m³"]
  },
  {
    id: "transport",
    title: "Kravas Pārvadājumi",
    subtitle: "Transports & Loģistika",
    description: "Ietilpīgi furgoni un kravas auto liela izmēra mantu un iekārtu transportēšanai.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
    options: ["Furgons 15 m³", "Smagais transports"]
  },
  {
    id: "labor",
    title: "Krāvēju Pakalpojumi",
    subtitle: "Iekraušana & Tīrīšana",
    description: "Pieredzējušu darbinieku komanda atbrīvos telpas un būvlaukumus no atkritumiem.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    prices: [
      { label: "1 Krāvējs", price: "no 20 €/h" },
      { label: "2 Krāvēji", price: "no 35 €/h" },
      { label: "Pilns serviss", price: "Pēc vienošanās" }
    ]
  }
];