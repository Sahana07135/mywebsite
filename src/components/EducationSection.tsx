import React from 'react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-8 flex flex-col">
      <div className="flex items-center gap-2 mb-1.5">
        <span className="font-label-code text-[#8ed5ff] uppercase text-[11px] tracking-wider font-semibold">
          02 // EDUCATION
        </span>
      </div>

      <h2 className="font-headline-xl-mobile text-[#dfe2f1] mb-6 font-semibold">
        Academic Pathway
      </h2>

      {/* Vertical Timeline */}
      <div className="relative pl-6 space-y-6">
        {/* Background Spine Line */}
        <div className="absolute top-3 bottom-3 left-2.5 w-0.5 bg-[#313540]" />

        {/* Timeline Item 1: REVA */}
        <div className="relative">
          <div className="absolute -left-6 top-1.5 w-5 h-5 rounded-full bg-[#1c1f2a] border border-[#313540] flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" />
          </div>

          <div className="p-4 rounded-xl bg-[#171b26] border border-[#313540]/60 shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
            <div className="flex items-center justify-between mb-1">
              <span className="font-label-code text-[#38bdf8] text-[12px] font-semibold">
                2025 — 2029
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#38bdf8]/20 border border-[#38bdf8]/30 text-[#38bdf8] font-label-badge text-[10px] uppercase">
                Current
              </span>
            </div>

            <h3 className="font-headline-sm text-[#dfe2f1] font-semibold">
              REVA University
            </h3>
            <p className="font-body-sm text-[#bdc8d1] mb-3">
              B.Tech in Artificial Intelligence &amp; Data Science
            </p>

            <div className="p-2.5 rounded-lg bg-[#1c1f2a] border border-[#313540]/40 flex items-center justify-between">
              <span className="font-caption text-[#87929a]">SGPA Progression:</span>
              <span className="font-label-code text-[#8ed5ff] font-semibold">
                Sem 1: 7.8 | Sem 2: 7.9
              </span>
            </div>
          </div>
        </div>

        {/* Timeline Item 2: Mount Carmel */}
        <div className="relative">
          <div className="absolute -left-6 top-1.5 w-5 h-5 rounded-full bg-[#1c1f2a] border border-[#313540] flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-[#bdc2ff]" />
          </div>

          <div className="p-4 rounded-xl bg-[#171b26] border border-[#313540]/60 shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
            <div className="flex items-center justify-between mb-1">
              <span className="font-label-code text-[#bdc2ff] text-[12px] font-semibold">
                Pre-University Education
              </span>
              <span className="font-label-badge text-[#87929a] text-[11px]">
                Completed
              </span>
            </div>

            <h3 className="font-headline-sm text-[#dfe2f1] font-semibold">
              Mount Carmel College
            </h3>
            <p className="font-body-sm text-[#bdc8d1] mb-3">
              Pre-University Course (PUC) / Class 12
            </p>

            <div className="p-2.5 rounded-lg bg-[#1c1f2a] border border-[#313540]/40 flex items-center justify-between">
              <span className="font-caption text-[#87929a]">Board Performance:</span>
              <span className="font-label-code text-[#bdc2ff] font-semibold">
                81% Aggregate
              </span>
            </div>
          </div>
        </div>

        {/* Timeline Item 3: St. Charles High School */}
        <div className="relative">
          <div className="absolute -left-6 top-1.5 w-5 h-5 rounded-full bg-[#1c1f2a] border border-[#313540] flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-[#c7c8ff]" />
          </div>

          <div className="p-4 rounded-xl bg-[#171b26] border border-[#313540]/60 shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
            <div className="flex items-center justify-between mb-1">
              <span className="font-label-code text-[#c7c8ff] text-[12px] font-semibold">
                Secondary School
              </span>
              <span className="font-label-badge text-[#87929a] text-[11px]">
                Distinction
              </span>
            </div>

            <h3 className="font-headline-sm text-[#dfe2f1] font-semibold">
              St. Charles High School
            </h3>
            <p className="font-body-sm text-[#bdc8d1] mb-3">
              Secondary School Examination / Class 10
            </p>

            <div className="p-2.5 rounded-lg bg-[#1c1f2a] border border-[#313540]/40 flex items-center justify-between">
              <span className="font-caption text-[#87929a]">State / Board Examination:</span>
              <span className="font-label-code text-[#c7c8ff] font-semibold">
                94% Distinction
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
