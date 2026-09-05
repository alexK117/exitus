export interface CompanyData {
  name: string;
  slogan: string;
  description: string;
  phone: string;
  email: string;
  workingHours: {
    workdays: string;
    weekends: string;
  };
}

export interface PriceItem {
  label: string;
  price: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  options?: string[];
  prices?: PriceItem[];
}

export interface AdvantageItem {
  icon: string;
  title: string;
  desc: string;
}