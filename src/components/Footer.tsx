import React from 'react';

interface FooterProps {
  onTriggerToast: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onTriggerToast }) => {
  return (
    <footer className="pt-8 pb-20 -mx-4 px-4 bg-[#0a0e18] border-t border-[#1c1f2a] flex flex-col items-center text-center">
      <div className="w-10 h-10 rounded-full bg-[#1c1f2a] border border-[#313540]/60 flex items-center justify-center text-[#38bdf8] mb-3 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
        <span className="material-symbols-outlined text-[22px]">terminal</span>
      </div>

      <h3 className="font-headline-sm text-[#dfe2f1] mb-1 font-semibold text-[17px]">
        Sahana.N
      </h3>

      <p className="font-caption text-[#87929a] max-w-xs mb-5 text-[12px] leading-relaxed">
        Artificial Intelligence &amp; Data Science Student | REVA University (2025–2029)
      </p>

      {/* Social Link Quick Grid */}
      <div className="flex items-center gap-3 mb-6">
        <button
          aria-label="GitHub profile"
          onClick={() => onTriggerToast('Opening GitHub profile: github.com/sahana-n')}
          className="w-10 h-10 rounded-xl bg-[#1c1f2a] border border-[#313540]/60 text-[#bdc8d1] hover:text-[#38bdf8] hover:border-[#38bdf8]/40 flex items-center justify-center transition-all active:scale-95"
        >
          <span className="material-symbols-outlined text-[20px]">code</span>
        </button>

        <button
          aria-label="LinkedIn profile"
          onClick={() => onTriggerToast('Opening LinkedIn profile: linkedin.com/in/sahana-n')}
          className="w-10 h-10 rounded-xl bg-[#1c1f2a] border border-[#313540]/60 text-[#bdc8d1] hover:text-[#bdc2ff] hover:border-[#bdc2ff]/40 flex items-center justify-center transition-all active:scale-95"
        >
          <span className="material-symbols-outlined text-[20px]">hub</span>
        </button>

        <button
          aria-label="HackerRank profile"
          onClick={() => onTriggerToast('Opening HackerRank profile: hackerrank.com/sahana-n')}
          className="w-10 h-10 rounded-xl bg-[#1c1f2a] border border-[#313540]/60 text-[#bdc8d1] hover:text-[#c7c8ff] hover:border-[#c7c8ff]/40 flex items-center justify-center transition-all active:scale-95"
        >
          <span className="material-symbols-outlined text-[20px]">terminal</span>
        </button>

        <a
          aria-label="Email Sahana"
          href="mailto:sahananatrajan413@gmail.com"
          className="w-10 h-10 rounded-xl bg-[#1c1f2a] border border-[#313540]/60 text-[#bdc8d1] hover:text-[#8ed5ff] hover:border-[#8ed5ff]/40 flex items-center justify-center transition-all active:scale-95"
        >
          <span className="material-symbols-outlined text-[20px]">mail</span>
        </a>
      </div>

      <p className="font-label-code text-[#87929a] text-[11px]">
        © 2026 Sahana.N. All rights reserved.
      </p>
    </footer>
  );
};
