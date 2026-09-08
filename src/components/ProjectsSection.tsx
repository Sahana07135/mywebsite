import React from 'react';

interface ProjectsSectionProps {
  onOpenModal: (projectId: 'modal-p1' | 'modal-p2') => void;
  onTriggerToast: (msg: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenModal, onTriggerToast }) => {
  return (
    <section id="projects" className="py-8 flex flex-col">
      <div className="flex items-center gap-2 mb-1.5">
        <span className="font-label-code text-[#8ed5ff] uppercase text-[11px] tracking-wider font-semibold">
          04 // FEATURED WORK
        </span>
      </div>

      <h2 className="font-headline-xl-mobile text-[#dfe2f1] mb-2 font-semibold">
        My Projects
      </h2>

      <p className="font-body-sm text-[#bdc8d1] mb-6 leading-relaxed">
        Applied engineering solutions spanning micro-controller robotics and algorithmic systems analysis.
      </p>

      {/* Project 1 Card */}
      <div className="p-4 rounded-xl bg-[#171b26] border border-[#313540]/60 shadow-[0_8px_24px_rgba(0,0,0,0.35)] mb-6 relative flex flex-col hover:border-[#38bdf8]/40 transition-colors">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#38bdf8]/20 border border-[#38bdf8]/30 flex items-center justify-center text-[#38bdf8]">
              <span className="material-symbols-outlined text-[18px]">precision_manufacturing</span>
            </div>
            <span className="font-label-code text-[#38bdf8] text-[12px] font-semibold">
              Hardware &amp; Embedded Systems
            </span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-[#1c1f2a] text-[#87929a] font-label-badge text-[10px] border border-[#313540]/40">
            Academic v1.0
          </span>
        </div>

        <h3 className="font-headline-md text-[#dfe2f1] mb-2 font-semibold text-[19px]">
          IoT Food Serving Robot Using Arduino Uno
        </h3>

        <p className="font-body-sm text-[#bdc8d1] mb-4 leading-relaxed">
          An IoT-based food serving robot developed using Arduino Uno, designed to explore automated path routing, autonomous obstacle handling, and intelligent contactless hospitality operations.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {['Arduino Uno', 'IoT', 'Robotics', 'Automation'].map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-[#1c1f2a] text-[#7bd0ff] font-label-code text-[11px] border border-[#313540]/50"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2">
          <button
            onClick={() => onOpenModal('modal-p1')}
            className="w-full h-11 rounded-lg bg-[#38bdf8] hover:bg-[#38bdf8]/90 text-[#00354a] font-headline-sm text-[14px] font-semibold flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-[0_0_15px_rgba(56,189,248,0.25)]"
          >
            <span>View Details</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>

          <button
            onClick={() => onTriggerToast('Repository is being prepared with full schematics.')}
            className="w-full h-11 rounded-lg bg-[#262a35] hover:bg-[#313540] text-[#87929a] hover:text-[#dfe2f1] font-label-code text-[12px] flex items-center justify-center gap-2 border border-[#313540]/50 transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">folder_code</span>
            <span>GitHub: Code Available Soon</span>
          </button>
        </div>
      </div>

      {/* Project 2 Card */}
      <div className="p-4 rounded-xl bg-[#171b26] border border-[#313540]/60 shadow-[0_8px_24px_rgba(0,0,0,0.35)] relative flex flex-col hover:border-[#bdc2ff]/40 transition-colors">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#2f3aa3]/30 border border-[#bdc2ff]/30 flex items-center justify-center text-[#bdc2ff]">
              <span className="material-symbols-outlined text-[18px]">account_tree</span>
            </div>
            <span className="font-label-code text-[#bdc2ff] text-[12px] font-semibold">
              Systems Research
            </span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-[#1c1f2a] text-[#87929a] font-label-badge text-[10px] border border-[#313540]/40">
            Methodology
          </span>
        </div>

        <h3 className="font-headline-md text-[#dfe2f1] mb-1 font-semibold text-[19px]">
          Reverse Engineering Applied to a Local Community Problem
        </h3>

        <p className="font-label-code text-[#bdc2ff] mb-2 text-[12px] font-medium">
          An Academic Exploration
        </p>

        <p className="font-body-sm text-[#bdc8d1] mb-4 leading-relaxed">
          An academic exploration applying systematic reverse engineering methodologies to diagnose, decompose, and formulate technology-driven structural solutions for localized community infrastructure challenges.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {['Reverse Engineering', 'Systems Analysis', 'Community Impact'].map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-[#1c1f2a] text-[#bdc2ff] font-label-code text-[11px] border border-[#313540]/50"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <button
          onClick={() => onOpenModal('modal-p2')}
          className="w-full h-11 rounded-lg bg-[#262a35] hover:bg-[#313540] text-[#dfe2f1] font-headline-sm text-[14px] font-semibold flex items-center justify-center gap-2 border border-[#313540]/60 active:scale-[0.98] transition-all"
        >
          <span className="material-symbols-outlined text-[#bdc2ff] text-[18px]">manage_search</span>
          <span>View Details</span>
        </button>
      </div>
    </section>
  );
};
