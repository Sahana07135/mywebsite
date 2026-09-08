import React from 'react';

export const ClubsSection: React.FC = () => {
  return (
    <section className="py-8 flex flex-col">
      <div className="flex items-center gap-2 mb-1.5">
        <span className="font-label-code text-[#8ed5ff] uppercase text-[11px] tracking-wider font-semibold">
          06 // COMMUNITY &amp; CO-CURRICULAR
        </span>
      </div>

      <h2 className="font-headline-xl-mobile text-[#dfe2f1] mb-6 font-semibold">
        Clubs &amp; Activities
      </h2>

      <div className="p-4 rounded-xl bg-[#171b26] border border-[#313540]/60 shadow-[0_4px_16px_rgba(0,0,0,0.3)] relative">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8] animate-ping" />
          <span className="font-label-badge text-[#38bdf8] uppercase text-[11px]">
            Active Community Intake
          </span>
        </div>

        <p className="font-headline-sm text-[#dfe2f1] mb-2 font-semibold text-[17px]">
          Engaging in Collaborative Discovery
        </p>

        <p className="font-body-sm text-[#bdc8d1] mb-4 leading-relaxed">
          Currently exploring opportunities to participate in technical clubs, engineering communities, and collaborative activities across campus and beyond.
        </p>

        <div className="p-3.5 rounded-lg bg-[#1c1f2a] border border-[#313540]/40 space-y-2.5">
          <div className="flex items-center gap-2.5 text-[#dfe2f1]">
            <span className="material-symbols-outlined text-[#38bdf8] text-[18px]">check</span>
            <span className="font-body-sm text-[13px]">Open for collegiate hackathons</span>
          </div>

          <div className="flex items-center gap-2.5 text-[#dfe2f1]">
            <span className="material-symbols-outlined text-[#bdc2ff] text-[18px]">check</span>
            <span className="font-body-sm text-[13px]">GDG campus chapter initiatives</span>
          </div>

          <div className="flex items-center gap-2.5 text-[#dfe2f1]">
            <span className="material-symbols-outlined text-[#c7c8ff] text-[18px]">check</span>
            <span className="font-body-sm text-[13px]">AI research circles &amp; workshops</span>
          </div>
        </div>
      </div>
    </section>
  );
};
