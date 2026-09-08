import React from 'react';
import { MonogramLogo } from './MonogramLogo';

interface HeaderProps {
  onOpenMenu: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMenu, activeSection }) => {
  const getSectionName = (sec: string) => {
    switch (sec) {
      case 'about': return 'About';
      case 'education': return 'Education';
      case 'skills': return 'Skills';
      case 'projects': return 'Projects';
      case 'achievements': return 'Certifications';
      case 'contact': return 'Contact';
      default: return 'Home';
    }
  };

  return (
    <header
      id="main-header"
      className="fixed top-0 inset-x-0 z-40 bg-[#0f131d]/85 backdrop-blur-xl border-b border-[#313540]/50 shadow-[0_1px_8px_rgba(0,0,0,0.4)] pt-safe"
    >
      <div className="max-w-2xl mx-auto h-16 px-4 flex items-center justify-between">
        {/* Left identity group */}
        <div className="flex items-center gap-2">
          <button
            id="menu-btn"
            aria-label="Open Navigation Menu"
            onClick={onOpenMenu}
            className="w-11 h-11 flex items-center justify-center text-[#dfe2f1] hover:text-[#38bdf8] transition-colors focus:outline-none rounded-lg active:bg-[#1c1f2a]"
          >
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>

          <MonogramLogo className="h-8 w-auto" />

          <div className="flex flex-col ml-1">
            <div className="flex items-center gap-1.5">
              <span className="font-headline-sm text-[#dfe2f1] tracking-tight leading-none text-[17px]">
                Sahana.N
              </span>
              <span className="w-2 h-2 rounded-full bg-[#8ed5ff] animate-pulse shadow-[0_0_8px_#38bdf8]" />
            </div>
            <span className="font-caption text-[#38bdf8] tracking-wider text-[10px] uppercase font-semibold mt-0.5">
              Available for Internships
            </span>
          </div>
        </div>

        {/* Right context tag & avatar */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end text-right">
            <span className="font-label-code text-[#bdc8d1] text-[11px] font-medium leading-none">
              {getSectionName(activeSection)}
            </span>
            <span className="font-caption text-[#87929a] text-[10px] mt-0.5">
              AI &amp; DS @ REVA
            </span>
          </div>
          <button
            aria-label="Student Profile"
            onClick={() => {
              const el = document.getElementById('about');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-8 h-8 rounded-full bg-[#8ed5ff] flex items-center justify-center text-[#00354a] shadow-[0_0_10px_rgba(56,189,248,0.3)] hover:scale-105 transition-transform"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </button>
        </div>
      </div>
    </header>
  );
};
