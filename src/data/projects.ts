import { ProjectItem } from '../types';
import t3Img from '../assets/images/t3_house_kamakura_1789388520270.jpg';
import rokiImg from '../assets/images/roki_center_1789388545514.jpg';
import tranquilityImg from '../assets/images/tranquility_villa_1789388564627.jpg';

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 't3',
    category: 'Houses/Villas',
    title: 'TIMELESS',
    heroSubtitle: 'Houses/Villas',
    architect: 'GRAND⁺ Design Studio / Ala-Too Atelier',
    location: 'Ala-Archa, Bishkek, Kyrgyzstan',
    year: '2021',
    area: '530 m²',
    image: t3Img,
    description: 'A hillside residence in the Ala-Archa gorge crafted with cantilevered deep eaves, continuous panoramic glass, and smooth architectural concrete. Designed for an international creative family with views toward the snow-capped peaks of the Kyrgyz Ala-Too range. A sublime harmony of nomadic spatial heritage and contemporary engineering.',
    highlights: [
      'Cantilevered Mountain Roof Eaves',
      'Continuous Full-Height Glazing',
      'Architectural Concrete & Sary-Tash Stone',
      'Panoramic Ala-Archa Gorge & Peak Views',
    ],
  },
  {
    id: 'roki',
    category: 'Office buildings',
    title: 'Tien Shan Innovation Center',
    heroSubtitle: 'Office buildings',
    architect: 'GRAND⁺ Architectural Bureau',
    location: 'Bishkek, Chuy Valley, Kyrgyzstan',
    year: '2022',
    area: '8,670 m²',
    image: rokiImg,
    description: 'An internationally acclaimed architectural project in Bishkek featuring a sweeping wooden lattice roof structure that breathes with natural mountain airflow. Integrates bespoke Tien Shan timber, natural light filtration, and bio-climatic spatial design.',
    highlights: [
      'Bespoke Tien Shan Spruce Timber Lattice',
      'Passive Bioclimatic Mountain Airflow Roof',
      'Seamless Indoor-Outdoor Environmental Transitions',
      'Kyrgyz National Architectural Grand Prix',
    ],
  },
  {
    id: 'tranquility',
    category: 'Houses/Villas',
    title: 'Tranquility',
    heroSubtitle: 'Houses/Villas',
    architect: 'GRAND⁺ Design Studio / Issyk-Kul Bureau',
    location: 'Cholpon-Ata, Issyk-Kul, Kyrgyzstan',
    year: '2023',
    area: '680 m²',
    image: tranquilityImg,
    description: 'A serene lakeside mountain sanctuary in Cholpon-Ata embracing natural coastal topography, sculptural wooden staircases, and textured Arashan stone walls. Designed around spatial negative space, natural landscape integration, and sensory calmness.',
    highlights: [
      'Sculptural Solid Timber Floating Staircase',
      'Natural Basalt Stone & White Sary-Tash Finish',
      'Double-Height Lake Shoreline Glazing',
      'Thermal Efficiency with Geothermal Warming',
    ],
  },
  {
    id: 'mysterious-profundity',
    category: 'Houses/Villas',
    title: 'Mysterious Profundity',
    heroSubtitle: 'Houses/Villas',
    architect: 'GRAND⁺ Alpine Architecture Lab',
    location: 'Karakol, Issyk-Kul, Kyrgyzstan',
    year: '2024',
    area: '740 m²',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    description: 'An alpine architectural villa in Karakol near Jeti-Oguz embodying tranquil depth and spatial harmony. Featuring reflecting courtyard pools, charred mountain spruce timber, panoramic viewing pavilions, and tranquil pine courtyards.',
    highlights: [
      'Charred Mountain Spruce Façade',
      'Water Mirror Courtyard Reflections',
      'Artisanal Natural Felt & Wood Acoustic Screens',
      'Integrated Tien Shan Stone Water Garden',
    ],
  },
];
