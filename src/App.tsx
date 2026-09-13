/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectsPortfolio } from './components/ProjectsPortfolio';
import { ClassicalArchitecturePhilosophy } from './components/ClassicalArchitecturePhilosophy';
import { ServicesSection } from './components/ServicesSection';
import { EstimatorCalculator } from './components/EstimatorCalculator';
import { EngineeringSection } from './components/EngineeringSection';
import { AboutCompany } from './components/AboutCompany';
import { WorkflowSection } from './components/WorkflowSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ConsultationModal } from './components/ConsultationModal';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationTopic, setConsultationTopic] = useState<string>('');
  const [contactInitialNotes, setContactInitialNotes] = useState<string>('');

  const handleOpenConsultation = (topic?: string) => {
    setConsultationTopic(topic || 'Обсуждение нового проекта');
    setIsConsultationOpen(true);
  };

  const handleOpenCalculator = () => {
    const calcEl = document.getElementById('calculator');
    if (calcEl) {
      calcEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSendEstimate = (summary: string) => {
    setContactInitialNotes(summary);
    const contactEl = document.getElementById('contacts');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#121315] text-[#d5cfc5] font-sans antialiased selection:bg-[#c5a880]/30 selection:text-[#f3ede4]">
      {/* Fixed Header */}
      <Header
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenCalculator={handleOpenCalculator}
      />

      {/* Hero with Project Carousel & Credentials */}
      <main>
        <Hero
          onSelectProject={(proj) => setSelectedProject(proj)}
          onOpenConsultation={() => handleOpenConsultation()}
          onOpenCalculator={handleOpenCalculator}
        />

        {/* Portfolio Showcase */}
        <ProjectsPortfolio
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* Classical Architecture & Vitruvian Philosophy */}
        <ClassicalArchitecturePhilosophy />

        {/* Bureau Services & Deliverables */}
        <ServicesSection
          onOpenConsultation={(serviceTitle) => handleOpenConsultation(serviceTitle ? `Услуга: ${serviceTitle}` : undefined)}
        />

        {/* Cost & Timeline Estimator */}
        <EstimatorCalculator
          onSendEstimate={handleSendEstimate}
        />

        {/* Seismic Engineering & Calculations (9 баллов) */}
        <EngineeringSection />

        {/* Workflow 6-stage roadmap */}
        <WorkflowSection />

        {/* About Company, Licenses & Team */}
        <AboutCompany />

        {/* Contact Form & Bishkek Office Info */}
        <ContactSection
          initialNotes={contactInitialNotes}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenConsultation={(title) => handleOpenConsultation(title ? `Объект: ${title}` : undefined)}
      />

      {/* Quick Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        prefilledTopic={consultationTopic}
      />
    </div>
  );
}

