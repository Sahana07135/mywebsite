import React from 'react';

export const AcademicMetricsSection: React.FC = () => {
  const metrics = [
    {
      id: 'class10',
      badge: 'High School',
      badgeColor: 'text-[#38bdf8]',
      icon: 'verified',
      value: '94',
      unit: '%',
      unitColor: 'text-[#38bdf8]',
      level: 'Class 10',
      institution: 'St. Charles High School',
    },
    {
      id: 'class12',
      badge: 'Pre-University',
      badgeColor: 'text-[#bdc2ff]',
      icon: 'verified',
      value: '81',
      unit: '%',
      unitColor: 'text-[#bdc2ff]',
      level: 'Class 12 / PUC',
      institution: 'Mount Carmel College',
    },
    {
      id: 'sem1',
      badge: 'Sem 01',
      badgeColor: 'text-[#c7c8ff]',
      icon: 'trending_up',
      value: '7.8',
      unit: ' SGPA',
      unitColor: 'text-[#c7c8ff]',
      level: '1st Semester',
      institution: 'REVA University',
    },
    {
      id: 'sem2',
      badge: 'Sem 02',
      badgeColor: 'text-[#7bd0ff]',
      icon: 'grade',
      value: '7.9',
      unit: ' SGPA',
      unitColor: 'text-[#7bd0ff]',
      level: '2nd Semester',
      institution: 'REVA University',
    },
  ];

  return (
    <section className="py-8 flex flex-col bg-[#0a0e18]/40 -mx-4 px-4 border-y border-[#1c1f2a]">
      <div className="flex items-center gap-2 mb-1.5">
        <span className="font-label-code text-[#bdc2ff] uppercase text-[11px] tracking-wider font-semibold">
          TELEMETRY // EVALUATION
        </span>
      </div>

      <h2 className="font-headline-xl-mobile text-[#dfe2f1] mb-6 font-semibold">
        Academic Excellence
      </h2>

      <div className="grid grid-cols-2 gap-2.5">
        {metrics.map((item) => (
          <div
            key={item.id}
            className="p-3.5 rounded-xl bg-[#171b26] border border-[#313540]/60 shadow-[0_4px_16px_rgba(0,0,0,0.3)] flex flex-col justify-between hover:border-[#38bdf8]/30 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <span className={`font-label-badge uppercase text-[10px] ${item.badgeColor} font-semibold`}>
                {item.badge}
              </span>
              <span className="material-symbols-outlined text-[#87929a] text-[16px]">
                {item.icon}
              </span>
            </div>

            <p className="font-display-hero-mobile text-[#dfe2f1] mb-1 leading-none">
              {item.value}
              <span className={`${item.unitColor} text-[18px] font-normal`}>
                {item.unit}
              </span>
            </p>

            <div className="mt-2">
              <p className="font-headline-sm text-[14px] text-[#dfe2f1] font-medium">
                {item.level}
              </p>
              <p className="font-caption text-[#87929a] text-[11px] truncate">
                {item.institution}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
