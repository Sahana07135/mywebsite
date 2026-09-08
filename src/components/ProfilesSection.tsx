import React from 'react';

interface ProfilesSectionProps {
  onCopyText: (text: string, label: string) => void;
}

export const ProfilesSection: React.FC<ProfilesSectionProps> = ({ onCopyText }) => {
  const profiles = [
    {
      id: 'github',
      name: 'GitHub',
      handle: 'github.com/sahana-n',
      url: 'https://github.com/sahana-n',
      displaySub: '[Add GitHub link] • github.com/sahana-n',
      icon: 'code_blocks',
      iconColor: 'text-[#38bdf8]',
      copyNotice: 'GitHub handle copied!',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      handle: 'linkedin.com/in/sahana-n',
      url: 'https://linkedin.com/in/sahana-n',
      displaySub: '[Add LinkedIn link] • linkedin.com/in/sahana-n',
      icon: 'link',
      iconColor: 'text-[#bdc2ff]',
      copyNotice: 'LinkedIn link copied!',
    },
    {
      id: 'hackerrank',
      name: 'HackerRank',
      handle: 'hackerrank.com/sahana-n',
      url: 'https://www.hackerrank.com/sahana-n',
      displaySub: 'Problem Solving Badge • Profile In Progress',
      icon: 'terminal',
      iconColor: 'text-[#7bd0ff]',
      copyNotice: 'HackerRank handle copied!',
    },
  ];

  return (
    <section className="py-8 flex flex-col bg-[#0a0e18]/40 -mx-4 px-4 border-y border-[#1c1f2a]">
      <div className="flex items-center gap-2 mb-1.5">
        <span className="font-label-code text-[#bdc2ff] uppercase text-[11px] tracking-wider font-semibold">
          07 // PROFILES
        </span>
      </div>

      <h2 className="font-headline-xl-mobile text-[#dfe2f1] mb-2 font-semibold">
        Let's Connect
      </h2>

      <p className="font-body-sm text-[#bdc8d1] mb-6 leading-relaxed">
        Professional handles and development repositories for code reviews, certifications, and collaboration.
      </p>

      <div className="space-y-2.5">
        {profiles.map((item) => (
          <div
            key={item.id}
            className="p-3.5 rounded-xl bg-[#171b26] border border-[#313540]/60 shadow-[0_4px_16px_rgba(0,0,0,0.3)] flex items-center justify-between hover:border-[#38bdf8]/30 transition-colors"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-[#1c1f2a] border border-[#313540]/50 flex items-center justify-center shrink-0">
                <span className={`material-symbols-outlined text-[20px] ${item.iconColor}`}>
                  {item.icon}
                </span>
              </div>
              <div className="min-w-0">
                <h3 className="font-headline-sm text-[15px] text-[#dfe2f1] font-medium">
                  {item.name}
                </h3>
                <p className="font-caption text-[#87929a] truncate text-[11px]">
                  {item.displaySub}
                </p>
              </div>
            </div>

            <button
              aria-label={`Copy ${item.name} handle`}
              onClick={() => onCopyText(item.handle, item.copyNotice)}
              className="p-2 rounded-lg bg-[#262a35] text-[#dfe2f1] hover:text-[#38bdf8] border border-[#313540]/60 active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">content_copy</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
