import React from 'react';

interface ProjectModalsProps {
  activeModal: 'modal-p1' | 'modal-p2' | null;
  onClose: () => void;
  onTriggerToast: (msg: string) => void;
}

export const ProjectModals: React.FC<ProjectModalsProps> = ({
  activeModal,
  onClose,
  onTriggerToast,
}) => {
  if (!activeModal) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex flex-col justify-end p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg mx-auto max-h-[85vh] overflow-y-auto rounded-2xl bg-[#262a35] border border-[#313540] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
        onClick={(e) => e.stopPropagation()}
      >
        {activeModal === 'modal-p1' ? (
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-label-code text-[#38bdf8] uppercase text-[11px] font-semibold">
                Robotics &amp; Microcontrollers
              </span>
              <button
                aria-label="Close Project Modal"
                onClick={onClose}
                className="w-9 h-9 rounded-lg bg-[#1c1f2a] border border-[#313540]/60 flex items-center justify-center text-[#87929a] hover:text-[#dfe2f1] active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <h3 className="font-headline-md text-[#dfe2f1] mb-2 font-semibold text-[20px]">
              IoT Food Serving Robot Using Arduino Uno
            </h3>

            <p className="font-body-sm text-[#bdc8d1] mb-4 leading-relaxed">
              Developed with the objective of eliminating physical contact in institutional food distribution. Utilizes ultrasonic distance calculation arrays alongside motor drivers interfaced with an Arduino Uno core.
            </p>

            <div className="space-y-2.5 mb-4">
              <div className="p-3 rounded-lg bg-[#1c1f2a] border border-[#313540]/40">
                <p className="font-label-badge text-[#38bdf8] mb-1 font-semibold text-[11px]">
                  Core Features
                </p>
                <p className="font-caption text-[#dfe2f1] text-[12px] leading-relaxed">
                  Autonomous route navigation, dynamic edge avoidance, load-bearing balanced chassis platform, and remote command trigger.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#1c1f2a] border border-[#313540]/40">
                <p className="font-label-badge text-[#bdc2ff] mb-1 font-semibold text-[11px]">
                  Components Used
                </p>
                <p className="font-caption text-[#dfe2f1] text-[12px] leading-relaxed">
                  Arduino Uno R3 microcontroller, HC-SR04 ultrasonic sonar sensors, L298N H-Bridge dual motor driver module, and high-torque dual DC geared motors.
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  onTriggerToast('Schematic blueprints downloaded for offline review.');
                }}
                className="flex-1 h-11 rounded-lg bg-[#38bdf8] text-[#00354a] font-headline-sm text-[13px] font-semibold flex items-center justify-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[17px]">download</span>
                <span>Schematics</span>
              </button>
              <button
                className="flex-1 h-11 rounded-lg bg-[#1c1f2a] border border-[#313540]/60 text-[#dfe2f1] font-headline-sm text-[13px] hover:bg-[#313540] transition-colors"
                onClick={onClose}
              >
                Close Breakdown
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-label-code text-[#bdc2ff] uppercase text-[11px] font-semibold">
                Systems Methodology
              </span>
              <button
                aria-label="Close Project Modal"
                onClick={onClose}
                className="w-9 h-9 rounded-lg bg-[#1c1f2a] border border-[#313540]/60 flex items-center justify-center text-[#87929a] hover:text-[#dfe2f1] active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <h3 className="font-headline-md text-[#dfe2f1] mb-2 font-semibold text-[20px]">
              Reverse Engineering Applied to a Local Community Problem
            </h3>

            <p className="font-body-sm text-[#bdc8d1] mb-4 leading-relaxed">
              A structured investigation into community utility bottlenecks. By disassembling legacy physical delivery systems into modular logic components, alternative optimization frameworks were derived.
            </p>

            <div className="space-y-2.5 mb-4">
              <div className="p-3 rounded-lg bg-[#1c1f2a] border border-[#313540]/40">
                <p className="font-label-badge text-[#bdc2ff] mb-1 font-semibold text-[11px]">
                  Analytical Approach
                </p>
                <p className="font-caption text-[#dfe2f1] text-[12px] leading-relaxed">
                  Root-cause decomposition, physical process mapping, bottleneck telemetry, and computational workflow modernization.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#1c1f2a] border border-[#313540]/40">
                <p className="font-label-badge text-[#c7c8ff] mb-1 font-semibold text-[11px]">
                  Academic Outcome
                </p>
                <p className="font-caption text-[#dfe2f1] text-[12px] leading-relaxed">
                  Comprehensive architectural report presented on algorithmic mitigation and data-driven infrastructure restructuring for municipal challenges.
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  onTriggerToast('Academic research paper draft requested.');
                }}
                className="flex-1 h-11 rounded-lg bg-[#bdc2ff] text-[#131e8c] font-headline-sm text-[13px] font-semibold flex items-center justify-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[17px]">description</span>
                <span>Read Abstract</span>
              </button>
              <button
                className="flex-1 h-11 rounded-lg bg-[#1c1f2a] border border-[#313540]/60 text-[#dfe2f1] font-headline-sm text-[13px] hover:bg-[#313540] transition-colors"
                onClick={onClose}
              >
                Close Breakdown
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
