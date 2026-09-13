export type ProjectCategory = 'all' | 'residential' | 'public' | 'commercial' | 'private' | 'concept';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  location: string;
  year: string;
  area: string;
  status: 'Реализован' | 'Строится' | 'Проектирование' | 'Концепт';
  coverImage: string;
  galleryImages: string[];
  blueprintImage?: string;
  shortDesc: string;
  fullDesc: string;
  client: string;
  metrics: ProjectMetric[];
  highlights: string[];
  seismicRating: string;
  architectRole: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  timeline: string;
  iconName: string;
  softwareUsed: string[];
}

export interface CalculatorState {
  buildingType: 'residential_multi' | 'villa' | 'business_center' | 'retail' | 'hotel' | 'industrial';
  area: number;
  stages: {
    sketch: boolean; // ЭП
    architecture: boolean; // АР
    constructive: boolean; // КР
    engineering: boolean; // ИОС
    interior: boolean; // Дизайн интерьеров
    supervision: boolean; // Авторский надзор
    expertise: boolean; // Сопровождение экспертизы
  };
  complexity: 'standard' | 'high' | 'exclusive';
  seismicRequired: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  credentials: string;
  image: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  role: string;
  projectTitle: string;
  comment: string;
  year: string;
  rating: number;
}
