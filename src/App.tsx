import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { MenuDrawer } from './components/MenuDrawer';
import { BottomNav } from './components/BottomNav';
import { Toast } from './components/Toast';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { AcademicMetricsSection } from './components/AcademicMetricsSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ClubsSection } from './components/ClubsSection';
import { ProfilesSection } from './components/ProfilesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModals } from './components/ProjectModals';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeModal, setActiveModal] = useState<'modal-p1' | 'modal-p2' | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Trigger toast with auto-dismiss
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    const timer = setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3000);
    return () => clearTimeout(timer);
  };

  // Copy to clipboard with fallback and toast
  const copyToClipboard = (text: string, notificationMsg?: string) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).catch(() => {});
    } else {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
      } catch {}
      document.body.removeChild(textArea);
    }
    triggerToast(notificationMsg || `Copied: ${text}`);
  };

  // Smooth scroll navigation to section
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Scroll listener to update active section indicator dynamically
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['contact', 'achievements', 'projects', 'skills', 'education', 'about', 'home'];
      const scrollPos = window.scrollY + 140;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sec);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0f131d] min-h-screen text-[#dfe2f1] font-sans relative selection:bg-[#38bdf8]/20 selection:text-[#8ed5ff]">
      {/* Toast Notification Alert */}
      <Toast message={toastMessage} />

      {/* Top Header */}
      <Header
        onOpenMenu={() => setIsMenuOpen(true)}
        activeSection={activeSection}
      />

      {/* Slide-out Menu Drawer */}
      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        activeSection={activeSection}
        onSelectSection={handleNavigate}
        onTriggerToast={triggerToast}
      />

      {/* Main Content Viewport */}
      <main className="flex flex-col relative w-full pt-16 pb-20 max-w-lg mx-auto px-4">
        <HeroSection
          onNavigate={handleNavigate}
          onTriggerToast={triggerToast}
        />

        <AboutSection
          onTriggerToast={triggerToast}
        />

        <AcademicMetricsSection />

        <EducationSection />

        <SkillsSection
          onTriggerToast={triggerToast}
        />

        <ProjectsSection
          onOpenModal={(m) => setActiveModal(m)}
          onTriggerToast={triggerToast}
        />

        <AchievementsSection
          onTriggerToast={triggerToast}
        />

        <ClubsSection />

        <ProfilesSection
          onCopyText={copyToClipboard}
        />

        <ContactSection
          onCopyText={copyToClipboard}
          onTriggerToast={triggerToast}
        />

        <Footer
          onTriggerToast={triggerToast}
        />
      </main>

      {/* Modal Dialogs for Project Breakdowns */}
      <ProjectModals
        activeModal={activeModal}
        onClose={() => setActiveModal(null)}
        onTriggerToast={triggerToast}
      />

      {/* Fixed Bottom Navigation Bar */}
      <BottomNav
        activeSection={activeSection}
        onSelectSection={handleNavigate}
      />
    </div>
  );
}
