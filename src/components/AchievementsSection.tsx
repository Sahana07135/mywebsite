import React from 'react';

interface AchievementsSectionProps {
  onTriggerToast: (msg: string) => void;
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({ onTriggerToast }) => {
  return (
    <section id="achievements" className="py-8 flex flex-col bg-[#0a0e18]/40 -mx-4 px-4 border-y border-[#1c1f2a]">
      <div className="flex items-center gap-2 mb-1.5">
        <span className="font-label-code text-[#c7c8ff] uppercase text-[11px] tracking-wider font-semibold">
          05 // CERTIFICATIONS
        </span>
      </div>

      <h2 className="font-headline-xl-mobile text-[#dfe2f1] mb-6 font-semibold">
        Verified Credentials
      </h2>

      {/* Featured Certificate Card */}
      <div className="p-4 rounded-xl bg-[#171b26] border border-[#313540]/60 shadow-[0_8px_24px_rgba(0,0,0,0.35)] relative overflow-hidden">
        {/* Ambient watermark badge */}
        <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-[#a7a9ff]/10 flex items-center justify-center pointer-events-none">
          <span className="material-symbols-outlined text-[#c7c8ff]/20 text-[72px]">
            workspace_premium
          </span>
        </div>

        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#a7a9ff]/20 border border-[#a7a9ff]/30 flex items-center justify-center text-[#c7c8ff]">
              <span className="material-symbols-outlined text-[28px]">verified_user</span>
            </div>
            <div>
              <span className="font-label-badge text-[#c7c8ff] uppercase text-[11px] font-semibold">
                Authorized Provider
              </span>
              <h3 className="font-headline-md text-[#dfe2f1] font-semibold text-[20px]">
                IBM Certification
              </h3>
            </div>
          </div>
        </div>

        <p className="font-body-sm text-[#bdc8d1] mb-4 leading-relaxed">
          Technical curriculum certification validating professional foundational competencies in computer science, enterprise workflows, and computational principles.
        </p>

        <div className="p-2.5 rounded-lg bg-[#1c1f2a] border border-[#313540]/50 mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-[#c7c8ff] text-[18px]">encrypted</span>
          <span className="font-label-code text-[#87929a] text-[11px]">
            Security Hash Verified • Issuer: IBM Enterprise
          </span>
        </div>

        <button
          onClick={() => onTriggerToast('Verification code & transcripts available upon recruitment request.')}
          className="w-full h-11 rounded-lg bg-[#262a35] hover:bg-[#313540] text-[#c7c8ff] font-headline-sm text-[14px] font-semibold flex items-center justify-center gap-2 active:scale-[0.98] transition-all border border-[#313540]/60 shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
        >
          <span className="material-symbols-outlined text-[18px]">open_in_new</span>
          <span>View Certificate Details</span>
        </button>
      </div>
    </section>
  );
};
