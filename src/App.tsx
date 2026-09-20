import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LeftNavigationPanel, NavSection } from './components/LeftNavigationPanel';
import { IntroSection } from './components/IntroSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { PricingSection } from './components/PricingSection';
import { PromotionsSection } from './components/PromotionsSection';
import { ReadyProjectsSection } from './components/ReadyProjectsSection';
import { BeginnersGuideSection } from './components/BeginnersGuideSection';
import { CareersSection } from './components/CareersSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ArchitectsSection } from './components/ArchitectsSection';
import { MaterialsSection } from './components/MaterialsSection';
import { GlobalSection } from './components/GlobalSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MenuOverlay } from './components/MenuOverlay';
import { ProjectModal } from './components/ProjectModal';
import { ContactModal } from './components/ContactModal';
import { WorksDrawer } from './components/WorksDrawer';
import { FEATURED_PROJECTS } from './data/projects';
import { ProjectItem, ProjectType, PricingSubTab } from './types';
import { Language } from './data/translations';

export default function App() {
  const [activeSection, setActiveSection] = useState<NavSection>('home');
  const [projectFilter, setProjectFilter] = useState<'all' | ProjectType>('all');
  const [pricingSubTab, setPricingSubTab] = useState<PricingSubTab>('packages');
  const [currentLang, setCurrentLang] = useState<Language>('RU');
  const [menuOpen, setMenuOpen] = useState(false);
  const [worksOpen, setWorksOpen] = useState(false);
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<ProjectItem | null>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [inquiryTargetProject, setInquiryTargetProject] = useState<ProjectItem | null>(null);
  const [inquiryCustomMessage, setInquiryCustomMessage] = useState<string>('');
  const [inquiryProjectType, setInquiryProjectType] = useState<string>('');

  const heroProject = FEATURED_PROJECTS[0];

  const handleOpenDetails = (project: ProjectItem) => {
    setSelectedProjectForModal(project);
  };

  const handleInquireFromProject = (project: ProjectItem) => {
    setInquiryTargetProject(project);
    setInquiryCustomMessage('');
    setInquiryProjectType(project.category);
    setContactOpen(true);
  };

  const handleInquireFromPricing = (customMessage?: string, packageTitle?: string) => {
    setInquiryTargetProject(null);
    setInquiryCustomMessage(customMessage || '');
    setInquiryProjectType(packageTitle ? `Тариф: ${packageTitle}` : 'Проектирование');
    setContactOpen(true);
  };

  const handleOpenGeneralContact = () => {
    setActiveSection('contact');
  };

  const handleSelectSection = (section: NavSection, filter?: 'all' | ProjectType, pricingTab?: PricingSubTab) => {
    setActiveSection(section);
    if (filter) {
      setProjectFilter(filter);
    }
    if (pricingTab) {
      setPricingSubTab(pricingTab);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white text-neutral-900 flex flex-col justify-between selection:bg-neutral-900 selection:text-white">
      {/* 1. Header (GRAND⁺ Text, Kyrgyz International Architectural design Center, Language selector) */}
      <Header
        onOpenMenu={() => setMenuOpen(true)}
        currentLang={currentLang}
        onChangeLang={setCurrentLang}
      />

      {/* 2. Full-Width Architectural Hero Banner across the top (Active & Interactive) */}
      <Hero
        projects={FEATURED_PROJECTS}
        activeProject={heroProject}
        onOpenDetails={handleOpenDetails}
        currentLang={currentLang}
      />

      {/* 3. Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-4 sm:pt-6 pb-2 sm:pb-3 w-full flex-1 flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-12 items-start">
        {/* Left Navigation Menu (Framed container matching right side) */}
        <LeftNavigationPanel
          activeSection={activeSection}
          projectFilter={projectFilter}
          pricingSubTab={pricingSubTab}
          onSelectSection={handleSelectSection}
          currentLang={currentLang}
        />

        {/* Right Content Area */}
        <main className="flex-1 min-w-0 w-full">
          {/* Главная */}
          {(activeSection === 'home' || activeSection === 'works') && (
            <IntroSection
              onSelectProject={handleOpenDetails}
              onContactClick={() => setActiveSection('contact')}
              onViewAllWorks={() => {
                setActiveSection('projects');
                setProjectFilter('all');
              }}
              currentLang={currentLang}
            />
          )}

          {/* Услуги (После главной) */}
          {activeSection === 'services' && (
            <ServicesSection
              onInquire={() => setContactOpen(true)}
              onNavigateToProjects={() => {
                setActiveSection('projects');
                setProjectFilter('all');
              }}
              currentLang={currentLang}
            />
          )}

          {/* Проекты (Жилые, Коммерческие, Другие) */}
          {activeSection === 'projects' && (
            <ProjectsSection
              activeFilter={projectFilter}
              onFilterChange={setProjectFilter}
              onSelectProject={handleOpenDetails}
              onViewAllWorks={() => setWorksOpen(true)}
              onContactClick={() => setActiveSection('contact')}
              currentLang={currentLang}
            />
          )}

          {/* Стоимость */}
          {activeSection === 'pricing' && (
            <PricingSection
              onInquire={handleInquireFromPricing}
              currentLang={currentLang}
              activeTab={pricingSubTab}
              onTabChange={setPricingSubTab}
            />
          )}

          {/* Готовые проекты */}
          {activeSection === 'readyProjects' && (
            <ReadyProjectsSection
              onInquire={() => {
                setInquiryTargetProject(null);
                setInquiryCustomMessage('Запрос на приобретение готового архитектурного проекта из каталога.');
                setInquiryProjectType('Готовый проект');
                setContactOpen(true);
              }}
              currentLang={currentLang}
            />
          )}

          {/* Новичкам: пошаговый гид от покупки участка до ввода в эксплуатацию */}
          {activeSection === 'guide' && (
            <BeginnersGuideSection
              onInquire={(customMsg) => {
                setInquiryTargetProject(null);
                setInquiryCustomMessage(customMsg || 'Консультация для застройщика: пошаговый план строительства объекта');
                setInquiryProjectType('Консультация новичкам');
                setContactOpen(true);
              }}
              currentLang={currentLang}
            />
          )}

          {/* Контакты */}
          {activeSection === 'contact' && (
            <ContactSection
              onNavigateToWorks={() => {
                setActiveSection('projects');
                setProjectFilter('all');
              }}
              currentLang={currentLang}
            />
          )}

          {/* Карьера */}
          {activeSection === 'careers' && (
            <CareersSection
              onInquire={() => setContactOpen(true)}
              currentLang={currentLang}
            />
          )}

          {/* Дополнительные разделы (при переходе из меню/футера) */}
          {activeSection === 'philosophy' && (
            <PhilosophySection
              onNavigateToWorks={() => {
                setActiveSection('projects');
                setProjectFilter('all');
              }}
              onNavigateToContact={() => setActiveSection('contact')}
              currentLang={currentLang}
            />
          )}

          {activeSection === 'architects' && (
            <ArchitectsSection
              onNavigateToWorks={() => {
                setActiveSection('projects');
                setProjectFilter('all');
              }}
              onNavigateToContact={() => setActiveSection('contact')}
              currentLang={currentLang}
            />
          )}

          {activeSection === 'materials' && (
            <MaterialsSection
              onNavigateToWorks={() => {
                setActiveSection('projects');
                setProjectFilter('all');
              }}
              onNavigateToContact={() => setActiveSection('contact')}
              currentLang={currentLang}
            />
          )}

          {activeSection === 'global' && (
            <GlobalSection
              onNavigateToWorks={() => {
                setActiveSection('projects');
                setProjectFilter('all');
              }}
              onNavigateToContact={() => setActiveSection('contact')}
              currentLang={currentLang}
            />
          )}
        </main>
      </div>

      {/* 4. Minimalist Footer */}
      <Footer
        onOpenMenu={() => setMenuOpen(true)}
        onOpenContact={handleOpenGeneralContact}
        onOpenMore={() => setWorksOpen(true)}
        currentLang={currentLang}
      />

      {/* Slide-out Menu Overlay */}
      <MenuOverlay
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onSelectSection={(section) => {
          setMenuOpen(false);
          handleSelectSection(section as NavSection);
        }}
        currentLang={currentLang}
        onChangeLang={setCurrentLang}
        onOpenContact={handleOpenGeneralContact}
      />

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProjectForModal}
        onClose={() => setSelectedProjectForModal(null)}
        onInquire={handleInquireFromProject}
        currentLang={currentLang}
      />

      {/* Project Works Archive Drawer */}
      <WorksDrawer
        isOpen={worksOpen}
        onClose={() => setWorksOpen(false)}
        onSelectProject={(proj) => {
          setSelectedProjectForModal(proj);
        }}
        currentLang={currentLang}
      />

      {/* Inquiries Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        selectedProject={inquiryTargetProject}
        initialMessage={inquiryCustomMessage}
        initialProjectType={inquiryProjectType}
        currentLang={currentLang}
      />
    </div>
  );
}
