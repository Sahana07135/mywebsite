import React from 'react';

interface ToastProps {
  message: string | null;
  onClose?: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div
      id="toast-notify"
      role="alert"
      className="fixed top-20 right-4 left-4 max-w-md mx-auto z-50 transform transition-all duration-300 flex items-center justify-between p-3.5 rounded-xl bg-[#262a35]/95 backdrop-blur-md text-[#dfe2f1] border border-[#38bdf8]/30 shadow-[0_10px_30px_rgba(0,0,0,0.6)] animate-in fade-in slide-in-from-top-4"
    >
      <div className="flex items-center gap-2.5">
        <span className="material-symbols-outlined text-[#38bdf8] text-[20px]">
          check_circle
        </span>
        <span className="font-body-sm text-[#dfe2f1] text-[13px] font-medium leading-tight">
          {message}
        </span>
      </div>
      <span className="font-label-code text-[#8ed5ff] uppercase text-[10px] bg-[#38bdf8]/15 px-2 py-0.5 rounded-full border border-[#38bdf8]/20">
        Active
      </span>
    </div>
  );
};
