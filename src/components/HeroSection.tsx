import React, { useState } from 'react';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  onTriggerToast: (msg: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onTriggerToast }) => {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [tensorMode, setTensorMode] = useState<'inference' | 'eval' | 'live'>('live');

  const handleNodeClick = (nodeIndex: number, label: string) => {
    setActiveNode(nodeIndex);
    onTriggerToast(`Inspected Synapse Layer ${nodeIndex + 1}: ${label}`);
  };

  return (
    <section id="home" className="pt-2 pb-8 relative overflow-hidden flex flex-col items-start">
      {/* Ambient Radial Lighting Glow */}
      <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-[#38bdf8]/15 blur-3xl pointer-events-none" />
      <div className="absolute top-48 -right-20 w-80 h-80 rounded-full bg-[#2f3aa3]/25 blur-3xl pointer-events-none" />

      {/* Status Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#262a35]/80 border border-[#313540]/60 shadow-[0_4px_16px_rgba(0,0,0,0.3)] backdrop-blur-md mb-4">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38bdf8] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#8ed5ff]"></span>
        </span>
        <span className="font-label-badge text-[#c4e7ff] tracking-wide uppercase text-[11px]">
          AI &amp; DS Undergraduate • REVA University
        </span>
      </div>

      {/* Hero Title */}
      <h1 className="font-display-hero-mobile text-[#dfe2f1] tracking-tight mb-2">
        Hi, I'm <span className="text-[#38bdf8]">Sahana.N</span>
      </h1>

      <p className="font-headline-sm text-[#8ed5ff] mb-2 font-medium">
        Artificial Intelligence &amp; Data Science Student
      </p>

      <p className="font-body-md text-[#bdc8d1] mb-6 leading-relaxed max-w-lg">
        Passionate about artificial intelligence, system architecture, programming, and engineering high-impact computational solutions to real-world complexities.
      </p>

      {/* CTAs */}
      <div className="flex flex-col w-full gap-2.5 mb-8">
        <button
          onClick={() => onNavigate('projects')}
          className="w-full h-12 rounded-xl bg-[#38bdf8] hover:bg-[#38bdf8]/90 text-[#00354a] font-headline-sm text-[15px] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.35)] active:scale-[0.98] transition-all font-semibold"
        >
          <span>View My Projects</span>
          <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
        </button>

        <button
          onClick={() => onNavigate('contact')}
          className="w-full h-12 rounded-xl bg-[#262a35] hover:bg-[#313540] text-[#dfe2f1] font-headline-sm text-[15px] flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(0,0,0,0.2)] border border-[#313540]/60 active:scale-[0.98] transition-all"
        >
          <span className="material-symbols-outlined text-[#38bdf8] text-[18px]">mail</span>
          <span>Contact Me</span>
        </button>
      </div>

      {/* Neural Constellation Visual Card */}
      <div className="w-full p-4 rounded-xl bg-[#171b26] border border-[#313540]/60 shadow-[0_12px_32px_rgba(0,0,0,0.4)] relative overflow-hidden">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#38bdf8] text-[18px]">hub</span>
            <span className="font-label-code text-[#8ed5ff] uppercase text-[11px] font-semibold">
              Neural Flow Telemetry
            </span>
          </div>
          <button
            onClick={() => {
              const nextMode = tensorMode === 'live' ? 'inference' : tensorMode === 'inference' ? 'eval' : 'live';
              setTensorMode(nextMode);
              onTriggerToast(`Mode toggled to: TENSOR.SYS // ${nextMode.toUpperCase()}`);
            }}
            className="font-label-badge text-[#87929a] hover:text-[#38bdf8] transition-colors uppercase text-[10px] bg-[#1c1f2a] px-2 py-0.5 rounded border border-[#313540]/60"
          >
            TENSOR.SYS // {tensorMode.toUpperCase()}
          </button>
        </div>

        {/* Constellation SVG Map */}
        <div className="relative w-full h-36 flex items-center justify-center bg-[#0a0e18]/40 rounded-lg p-1">
          <svg className="w-full h-full" fill="none" viewBox="0 0 340 140" xmlns="http://www.w3.org/2000/svg">
            {/* Connection Lines */}
            <path
              className="text-[#313540]"
              d="M40 70 L110 30 L180 80 L260 40 L300 70"
              stroke="currentColor"
              strokeDasharray="4 4"
              strokeWidth="2"
            />
            <path
              className="text-[#313540]"
              d="M40 70 L110 110 L180 80 L260 110 L300 70"
              stroke="currentColor"
              strokeDasharray="4 4"
              strokeWidth="2"
            />
            <path className="text-[#313540]" d="M110 30 L110 110" stroke="currentColor" strokeWidth="1.5" />
            <path className="text-[#313540]" d="M260 40 L260 110" stroke="currentColor" strokeWidth="1.5" />
            <path className="text-[#38bdf8]/40" d="M110 30 L260 110" stroke="currentColor" strokeWidth="2" />
            <path className="text-[#a7a9ff]/40" d="M110 110 L260 40" stroke="currentColor" strokeWidth="2" />

            {/* Pulsing Nodes */}
            <g
              className="cursor-pointer group"
              onClick={() => handleNodeClick(0, 'Input Feature Vector')}
            >
              <circle className="fill-[#262a35] group-hover:fill-[#38bdf8]/40" cx="40" cy="70" r="8" />
              <circle className="fill-[#38bdf8] animate-pulse" cx="40" cy="70" r="4" />
            </g>

            <g
              className="cursor-pointer group"
              onClick={() => handleNodeClick(1, 'Hidden Encoder A')}
            >
              <circle className="fill-[#262a35] group-hover:fill-[#bdc2ff]/40" cx="110" cy="30" r="9" />
              <circle className="fill-[#bdc2ff]" cx="110" cy="30" r="4.5" />
            </g>

            <g
              className="cursor-pointer group"
              onClick={() => handleNodeClick(2, 'Hidden Encoder B')}
            >
              <circle className="fill-[#262a35] group-hover:fill-[#8ed5ff]/40" cx="110" cy="110" r="9" />
              <circle className="fill-[#8ed5ff]" cx="110" cy="110" r="4.5" />
            </g>

            {/* Center Synapse Attention Node */}
            <g
              className="cursor-pointer group"
              onClick={() => handleNodeClick(3, 'Multi-Head Attention Synapse')}
            >
              <circle className="fill-[#38bdf8]/25 animate-ping" cx="180" cy="80" r="14" />
              <circle className="fill-[#313540]" cx="180" cy="80" r="9" />
              <circle className="fill-[#38bdf8]" cx="180" cy="80" r="5" />
            </g>

            <g
              className="cursor-pointer group"
              onClick={() => handleNodeClick(4, 'Decoder Feedforward A')}
            >
              <circle className="fill-[#262a35] group-hover:fill-[#c7c8ff]/40" cx="260" cy="40" r="9" />
              <circle className="fill-[#c7c8ff]" cx="260" cy="40" r="4.5" />
            </g>

            <g
              className="cursor-pointer group"
              onClick={() => handleNodeClick(5, 'Decoder Feedforward B')}
            >
              <circle className="fill-[#262a35] group-hover:fill-[#bdc2ff]/40" cx="260" cy="110" r="9" />
              <circle className="fill-[#bdc2ff]" cx="260" cy="110" r="4.5" />
            </g>

            <g
              className="cursor-pointer group"
              onClick={() => handleNodeClick(6, 'Output Probability Head')}
            >
              <circle className="fill-[#262a35]" cx="300" cy="70" r="8" />
              <circle className="fill-[#38bdf8] animate-pulse" cx="300" cy="70" r="4" />
            </g>
          </svg>
        </div>

        {/* Telemetry Metrics */}
        <div className="grid grid-cols-3 gap-2 pt-3 text-center">
          <div className="p-2 rounded-lg bg-[#1c1f2a] border border-[#313540]/40">
            <p className="font-label-code text-[#38bdf8] font-bold">64 Nodes</p>
            <p className="font-caption text-[#87929a] text-[10px]">Architecture</p>
          </div>
          <div className="p-2 rounded-lg bg-[#1c1f2a] border border-[#313540]/40">
            <p className="font-label-code text-[#bdc2ff] font-bold">0.04ms</p>
            <p className="font-caption text-[#87929a] text-[10px]">Latency</p>
          </div>
          <div className="p-2 rounded-lg bg-[#1c1f2a] border border-[#313540]/40">
            <p className="font-label-code text-[#c7c8ff] font-bold">99.4%</p>
            <p className="font-caption text-[#87929a] text-[10px]">Precision</p>
          </div>
        </div>
      </div>
    </section>
  );
};
