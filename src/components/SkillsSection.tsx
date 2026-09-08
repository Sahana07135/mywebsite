import React, { useState } from 'react';

interface SkillsSectionProps {
  onTriggerToast: (msg: string) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onTriggerToast }) => {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

  const skills = [
    {
      name: 'C Language',
      icon: 'terminal',
      iconColor: 'text-[#8ed5ff]',
      subtitle: 'Fundamentals & Memory',
      percentage: 85,
      barClass: 'bg-[#38bdf8]',
    },
    {
      name: 'C++',
      icon: 'data_object',
      iconColor: 'text-[#bdc2ff]',
      subtitle: 'OOP & Algorithms',
      percentage: 80,
      barClass: 'bg-[#bdc2ff]',
    },
    {
      name: 'Python',
      icon: 'psychology',
      iconColor: 'text-[#38bdf8]',
      subtitle: 'Data Analysis & ML Foundations',
      percentage: 88,
      barClass: 'bg-[#38bdf8]',
    },
    {
      name: 'SQL',
      icon: 'database',
      iconColor: 'text-[#c7c8ff]',
      subtitle: 'Relational Queries & Schema',
      percentage: 78,
      barClass: 'bg-[#c7c8ff]',
    },
    {
      name: 'HTML',
      icon: 'code',
      iconColor: 'text-[#7bd0ff]',
      subtitle: 'Semantic Web Architecture',
      percentage: 90,
      barClass: 'bg-[#7bd0ff]',
    },
  ];

  const domains = [
    { name: 'Artificial Intelligence', icon: 'smart_toy', color: 'text-[#38bdf8]' },
    { name: 'Data Science', icon: 'analytics', color: 'text-[#bdc2ff]' },
    { name: 'Internet of Things (IoT)', icon: 'memory', color: 'text-[#c7c8ff]' },
    { name: 'Problem Solving', icon: 'troubleshoot', color: 'text-[#8ed5ff]' },
    { name: 'Software Development', icon: 'developer_mode', color: 'text-[#c4e7ff]' },
  ];

  const handleDomainClick = (domainName: string) => {
    setSelectedDomain(domainName === selectedDomain ? null : domainName);
    onTriggerToast(`Domain focus: ${domainName}`);
  };

  return (
    <section id="skills" className="py-8 flex flex-col bg-[#0a0e18]/40 -mx-4 px-4 border-y border-[#1c1f2a]">
      <div className="flex items-center gap-2 mb-1.5">
        <span className="font-label-code text-[#8ed5ff] uppercase text-[11px] tracking-wider font-semibold">
          03 // SKILLS &amp; INTERESTS
        </span>
      </div>

      <h2 className="font-headline-xl-mobile text-[#dfe2f1] mb-2 font-semibold">
        Technical Toolkit
      </h2>

      <p className="font-body-sm text-[#bdc8d1] mb-6 leading-relaxed">
        Foundational and applied competencies developed across computational coursework, algorithmic problem-solving, and web standards.
      </p>

      {/* Programming Skill Progressions */}
      <div className="space-y-3 mb-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="p-3.5 rounded-xl bg-[#171b26] border border-[#313540]/60 shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:border-[#38bdf8]/30 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className={`material-symbols-outlined text-[18px] ${skill.iconColor}`}>
                  {skill.icon}
                </span>
                <span className="font-headline-sm text-[15px] text-[#dfe2f1] font-medium">
                  {skill.name}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-label-code text-[#87929a] text-[11px]">
                  {skill.subtitle}
                </span>
                <span className="font-label-code text-[#8ed5ff] font-semibold text-[12px]">
                  {skill.percentage}%
                </span>
              </div>
            </div>

            <div className="w-full bg-[#1c1f2a] h-2 rounded-full overflow-hidden border border-[#313540]/40">
              <div
                className={`h-full rounded-full transition-all duration-700 ease-out ${skill.barClass}`}
                style={{ width: `${skill.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Areas of Interest Chips */}
      <h3 className="font-headline-sm text-[#dfe2f1] mb-3 font-semibold text-[17px]">
        Core Exploration Domains
      </h3>

      <div className="flex flex-wrap gap-2">
        {domains.map((dom) => {
          const isSelected = selectedDomain === dom.name;
          return (
            <button
              key={dom.name}
              onClick={() => handleDomainClick(dom.name)}
              className={`px-3.5 py-2 rounded-full font-label-badge text-[12px] flex items-center gap-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.2)] border transition-all ${
                isSelected
                  ? 'bg-[#38bdf8]/20 border-[#38bdf8] text-[#38bdf8] scale-105'
                  : 'bg-[#262a35] border-[#313540]/60 text-[#dfe2f1] hover:border-[#38bdf8]/40 hover:bg-[#313540]'
              }`}
            >
              <span className={`material-symbols-outlined text-[16px] ${dom.color}`}>
                {dom.icon}
              </span>
              <span>{dom.name}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
};
