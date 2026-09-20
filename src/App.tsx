import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LeftNavigationPanel, NavSection } from './components/LeftNavigationPanel';
import { IntroSection } from './components/IntroSection';
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
import { ProjectItem } from './types';
import { Language } from './data/translations';

export default function App() {
  const [activeSection, setActiveSection] = useState<NavSection>('works');
  const [currentLang, setCurrentLang] = useState<Language>('RU');
  const [menuOpen, setMenuOpen] = useState(false);
  const [worksOpen, setWorksOpen] = useState(false);
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<ProjectItem | null>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [inquiryTargetProject, setInquiryTargetProject] = useState<ProjectItem | null>(null);

  const heroProject = FEATURED_PROJECTS[0];

  const handleOpenDetails = (project: ProjectItem) => {
    setSelectedProjectForModal(project);
  };

  const handleInquireFromProject = (project: ProjectItem) => {
    setInquiryTargetProject(project);
    setContactOpen(true);
  };

  const handleOpenGeneralContact = () => {
    setActiveSection('contact');
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
        {/* Left Navigation Menu (Works, Philosophy, Architects, Materials, Global Projects, Contact) */}
        <LeftNavigationPanel
          activeSection={activeSection}
          onSelectSection={(section) => setActiveSection(section)}
          currentLang={currentLang}
        />

        {/* Right Content Area */}
        <main className="flex-1 min-w-0 w-full">
          {activeSection === 'works' && (
            <IntroSection
              onSelectProject={handleOpenDetails}
              onContactClick={() => setActiveSection('contact')}
              onViewAllWorks={() => setWorksOpen(true)}
              currentLang={currentLang}
            />
          )}

          {activeSection === 'philosophy' && (
            <PhilosophySection
              onNavigateToWorks={() => setActiveSection('works')}
              onNavigateToContact={() => setActiveSection('contact')}
              currentLang={currentLang}
            />
          )}

          {activeSection === 'architects' && (
            <ArchitectsSection
              onNavigateToWorks={() => setActiveSection('works')}
              onNavigateToContact={() => setActiveSection('contact')}
              currentLang={currentLang}
            />
          )}

          {activeSection === 'materials' && (
            <MaterialsSection
              onNavigateToWorks={() => setActiveSection('works')}
              onNavigateToContact={() => setActiveSection('contact')}
              currentLang={currentLang}
            />
          )}

          {activeSection === 'global' && (
            <GlobalSection
              onNavigateToWorks={() => setActiveSection('works')}
              onNavigateToContact={() => setActiveSection('contact')}
              currentLang={currentLang}
            />
          )}

          {activeSection === 'contact' && (
            <ContactSection
              onNavigateToWorks={() => setActiveSection('works')}
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
          if (['works', 'philosophy', 'architects', 'materials', 'global', 'contact'].includes(section)) {
            setActiveSection(section as NavSection);
          } else {
            setWorksOpen(true);
          }
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
        currentLang={currentLang}
      />
    </div>
  );
}
