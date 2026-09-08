import React from 'react';

interface BottomNavProps {
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeSection, onSelectSection }) => {
  const items = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'projects', label: 'Projects', icon: 'grid_view' },
    { id: 'skills', label: 'Skills', icon: 'neurology' },
    { id: 'contact', label: 'Contact', icon: 'send' },
  ];

  return (
    <nav
      id="bottom-nav"
      className="fixed bottom-0 inset-x-0 z-40 pb-safe bg-[#0f131d]/92 backdrop-blur-xl border-t border-[#313540]/40 shadow-[0_-2px_15px_rgba(0,0,0,0.6)]"
    >
      <div className="max-w-2xl mx-auto flex justify-around items-center h-16 px-4">
        {items.map((item) => {
          const isActive =
            activeSection === item.id ||
            (item.id === 'home' && (activeSection === 'home' || activeSection === 'about' || activeSection === 'education'));

          return (
            <button
              key={item.id}
              onClick={() => onSelectSection(item.id)}
              className={`flex flex-col items-center justify-center gap-1 min-w-[56px] min-h-[44px] transition-all ${
                isActive ? 'text-[#38bdf8] scale-105' : 'text-[#87929a] hover:text-[#dfe2f1]'
              }`}
            >
              <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
              <span className="font-label-badge text-[11px] tracking-wide">{item.label}</span>
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-[#38bdf8] shadow-[0_0_6px_#38bdf8]" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
