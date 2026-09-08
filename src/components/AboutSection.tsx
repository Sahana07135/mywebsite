import React, { useState } from 'react';

interface AboutSectionProps {
  onTriggerToast: (msg: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onTriggerToast }) => {
  const [isPlayingSound, setIsPlayingSound] = useState(false);

  const playGuitarStrum = () => {
    try {
      const AudioContext = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Play a beautiful harmonic acoustic major 7th chord (E - B - E - G# - B)
      const frequencies = [164.81, 246.94, 329.63, 415.30, 493.88];
      setIsPlayingSound(true);

      frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.04);

        gain.gain.setValueAtTime(0.001, ctx.currentTime + idx * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + idx * 0.04 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.04 + 1.6);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.04);
        osc.stop(ctx.currentTime + idx * 0.04 + 1.8);
      });

      setTimeout(() => setIsPlayingSound(false), 1800);
      onTriggerToast('Acoustic chord preview: Emaj7 guitar tone.');
    } catch {
      onTriggerToast('Creative Passion: Playing Guitar & Singing');
    }
  };

  return (
    <section id="about" className="py-8 flex flex-col border-t border-[#1c1f2a]">
      <div className="flex items-center gap-2 mb-1.5">
        <span className="font-label-code text-[#8ed5ff] uppercase text-[11px] tracking-wider font-semibold">
          01 // ABOUT ME
        </span>
      </div>

      <h2 className="font-headline-xl-mobile text-[#dfe2f1] mb-2 font-semibold">
        Building Intelligent Futures
      </h2>

      <p className="font-body-md text-[#bdc8d1] mb-6 leading-relaxed">
        My name is Sahana.N, and I am an Artificial Intelligence and Data Science undergraduate at REVA University (2025 to 2029). I investigate algorithmic efficiency, computational intelligence, and technological mechanisms engineered to unpack human-scale challenges.
      </p>

      {/* Bento Detail Cards */}
      <div className="grid grid-cols-2 gap-2.5 mb-2.5">
        {/* DOB */}
        <div className="p-3.5 rounded-xl bg-[#171b26] border border-[#313540]/60 shadow-[0_4px_16px_rgba(0,0,0,0.3)] flex flex-col justify-between">
          <div className="w-8 h-8 rounded-lg bg-[#38bdf8]/20 flex items-center justify-center text-[#38bdf8] mb-3">
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
          </div>
          <div>
            <p className="font-caption text-[#87929a] uppercase text-[10px] tracking-wider">Date of Birth</p>
            <p className="font-headline-sm text-[16px] text-[#dfe2f1] font-semibold">07 Oct 2006</p>
          </div>
        </div>

        {/* Institution */}
        <div className="p-3.5 rounded-xl bg-[#171b26] border border-[#313540]/60 shadow-[0_4px_16px_rgba(0,0,0,0.3)] flex flex-col justify-between">
          <div className="w-8 h-8 rounded-lg bg-[#2f3aa3]/40 flex items-center justify-center text-[#bdc2ff] mb-3">
            <span className="material-symbols-outlined text-[18px]">domain</span>
          </div>
          <div>
            <p className="font-caption text-[#87929a] uppercase text-[10px] tracking-wider">Institution</p>
            <p className="font-headline-sm text-[16px] text-[#dfe2f1] font-semibold">REVA University</p>
          </div>
        </div>
      </div>

      {/* Course card */}
      <div className="p-3.5 rounded-xl bg-[#171b26] border border-[#313540]/60 shadow-[0_4px_16px_rgba(0,0,0,0.3)] mb-2.5 flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-[#a7a9ff]/20 flex items-center justify-center text-[#c7c8ff] shrink-0 border border-[#a7a9ff]/30">
          <span className="material-symbols-outlined text-[20px]">school</span>
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-caption text-[#87929a] uppercase text-[10px] tracking-wider">Course &amp; Domain</p>
          <p className="font-headline-sm text-[15px] text-[#dfe2f1] truncate font-semibold">
            B.Tech in Artificial Intelligence &amp; Data Science
          </p>
          <span className="font-label-code text-[#8ed5ff] text-[11px]">
            Cohort: 2025 — 2029
          </span>
        </div>
      </div>

      {/* Musical Creative Card */}
      <div
        role="button"
        tabIndex={0}
        onClick={playGuitarStrum}
        onKeyDown={(e) => e.key === 'Enter' && playGuitarStrum()}
        aria-label="Play acoustic guitar preview"
        className="p-3.5 rounded-xl bg-gradient-to-r from-[#171b26] via-[#1c1f2a] to-[#171b26] border border-[#313540]/60 shadow-[0_4px_16px_rgba(0,0,0,0.3)] flex items-center justify-between cursor-pointer hover:border-[#38bdf8]/40 active:scale-[0.99] transition-all"
      >
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg bg-[#38bdf8]/20 border border-[#38bdf8]/30 flex items-center justify-center text-[#38bdf8] transition-transform ${isPlayingSound ? 'scale-110 text-[#7bd0ff]' : ''}`}>
            <span className="material-symbols-outlined text-[20px]">
              {isPlayingSound ? 'graphic_eq' : 'music_note'}
            </span>
          </div>
          <div>
            <p className="font-caption text-[#87929a] uppercase text-[10px] tracking-wider">Creative Passion</p>
            <p className="font-headline-sm text-[15px] text-[#dfe2f1] font-semibold">
              Playing Guitar &amp; Singing
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="px-2.5 py-1 rounded-full bg-[#313540] text-[#bdc2ff] font-label-badge text-[10px] uppercase font-medium">
            {isPlayingSound ? 'Strumming...' : 'Acoustic'}
          </span>
        </div>
      </div>
    </section>
  );
};
