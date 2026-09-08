import React from 'react';
import { MonogramLogo } from './MonogramLogo';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
  onTriggerToast: (msg: string) => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  activeSection,
  onSelectSection,
  onTriggerToast,
}) => {
  const navLinks = [
    { id: 'home', label: 'Home', icon: 'terminal', iconColor: 'text-[#8ed5ff]' },
    { id: 'about', label: 'About', icon: 'psychology', iconColor: 'text-[#bdc2ff]' },
    { id: 'education', label: 'Education', icon: 'school', iconColor: 'text-[#c7c8ff]' },
    { id: 'skills', label: 'Skills', icon: 'memory', iconColor: 'text-[#7bd0ff]' },
    { id: 'projects', label: 'Projects', icon: 'code_blocks', iconColor: 'text-[#38bdf8]' },
    { id: 'achievements', label: 'Achievements', icon: 'emoji_events', iconColor: 'text-[#bdc2ff]' },
    { id: 'contact', label: 'Contact', icon: 'alternate_email', iconColor: 'text-[#c7c8ff]' },
  ];

  return (
    <>
      {/* Backdrop overlay */}
      <div
        id="menu-drawer-backdrop"
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer content */}
      <div
        id="menu-drawer"
        className={`fixed inset-y-0 left-0 z-50 w-full max-w-sm bg-[#0f131d]/98 backdrop-blur-2xl border-r border-[#313540]/60 transition-transform duration-300 ease-out flex flex-col pt-safe pb-safe shadow-[10px_0_30px_rgba(0,0,0,0.7)] ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Top Header */}
        <div className="h-16 px-4 flex items-center justify-between border-b border-[#1c1f2a]">
          <div className="flex items-center gap-2">
            <MonogramLogo className="h-8 w-auto" />
            <div className="flex flex-col ml-1">
              <span className="font-headline-sm text-[#dfe2f1] text-[17px] leading-tight">
                Sahana.N
              </span>
              <span className="font-caption text-[#38bdf8] font-medium text-[11px]">
                REVA University AI &amp; DS
              </span>
            </div>
          </div>
          <button
            id="close-drawer-btn"
            aria-label="Close Menu"
            onClick={onClose}
            className="w-11 h-11 flex items-center justify-center text-[#bdc8d1] hover:text-[#dfe2f1] transition-colors focus:outline-none rounded-lg active:bg-[#1c1f2a]"
          >
            <span className="material-symbols-outlined text-[26px]">close</span>
          </button>
        </div>

        {/* Status card */}
        <div className="px-4 py-3">
          <div className="p-3 rounded-xl bg-[#262a35]/60 border border-[#313540]/60 backdrop-blur-md flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38bdf8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#38bdf8] shadow-[0_0_10px_#38bdf8]"></span>
              </span>
              <span className="font-label-badge text-[#dfe2f1] text-[12px]">
                Status: Open to Work
              </span>
            </div>
            <span className="font-label-code text-[#7bd0ff] uppercase text-[11px]">
              Fall 2025
            </span>
          </div>
        </div>

        {/* Navigation list */}
        <nav className="flex-1 overflow-y-auto px-4 py-2 space-y-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  onSelectSection(link.id);
                  onClose();
                }}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all min-h-[44px] text-left ${
                  isActive
                    ? 'bg-[#262a35] text-[#38bdf8] font-semibold shadow-inner'
                    : 'text-[#bdc8d1] hover:text-[#dfe2f1] hover:bg-[#1c1f2a]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`material-symbols-outlined text-[22px] ${link.iconColor}`}>
                    {link.icon}
                  </span>
                  <span className="font-headline-sm text-[16px]">{link.label}</span>
                </div>
                <span className="material-symbols-outlined text-[#87929a] text-[18px]">
                  chevron_right
                </span>
              </button>
            );
          })}
        </nav>

        {/* Drawer Footer Actions */}
        <div className="p-4 space-y-3 border-t border-[#1c1f2a]">
          <button
            onClick={() => {
              onSelectSection('projects');
              onClose();
            }}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#38bdf8] via-[#2f3aa3] to-[#2f3aa3] text-white font-headline-sm text-[15px] text-center flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.35)] active:scale-[0.98] transition-transform min-h-[48px]"
          >
            <span>Explore My Work</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>

          <div className="flex items-center justify-center gap-6 py-1 text-[#87929a]">
            <button
              onClick={() => onTriggerToast('Connecting to LinkedIn: linkedin.com/in/sahana-n')}
              aria-label="LinkedIn profile"
              className="p-1 hover:text-[#38bdf8] transition-colors"
            >
              <span className="material-symbols-outlined text-[22px]">hub</span>
            </button>
            <button
              onClick={() => onTriggerToast('Connecting to GitHub: github.com/sahana-n')}
              aria-label="GitHub profile"
              className="p-1 hover:text-[#38bdf8] transition-colors"
            >
              <span className="material-symbols-outlined text-[22px]">data_object</span>
            </button>
            <a
              href="mailto:sahananatrajan413@gmail.com"
              aria-label="Email Sahana"
              className="p-1 hover:text-[#38bdf8] transition-colors"
            >
              <span className="material-symbols-outlined text-[22px]">mail</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
