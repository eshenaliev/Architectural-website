export type ProjectType = 'residential' | 'commercial' | 'other';
export type PricingSubTab = 'packages' | 'custom';

export interface ProjectItem {
  id: string;
  category: string;
  type?: ProjectType;
  title: string;
  heroSubtitle?: string;
  architect: string;
  location: string;
  year: string;
  area: string;
  image: string;
  description: string;
  highlights: string[];
}

