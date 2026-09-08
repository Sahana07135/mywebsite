import React, { useState } from 'react';

interface ContactSectionProps {
  onCopyText: (text: string, label: string) => void;
  onTriggerToast: (msg: string) => void;
}

interface SentMessage {
  name: string;
  email: string;
  message: string;
  time: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onCopyText, onTriggerToast }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sentMessages, setSentMessages] = useState<SentMessage[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      onTriggerToast('Please complete all form fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const newMsg: SentMessage = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setSentMessages((prev) => [newMsg, ...prev]);
      onTriggerToast(`Thank you ${formData.name}! Your message was dispatched.`);
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <section id="contact" className="py-8 flex flex-col">
      <div className="flex items-center gap-2 mb-1.5">
        <span className="font-label-code text-[#8ed5ff] uppercase text-[11px] tracking-wider font-semibold">
          08 // CONTACT
        </span>
      </div>

      <h2 className="font-headline-xl-mobile text-[#dfe2f1] mb-2 font-semibold">
        Let's Build Together
      </h2>

      <p className="font-body-sm text-[#bdc8d1] mb-6 leading-relaxed">
        Reach out directly for internships, collaborative research queries, or student hackathon teams.
      </p>

      {/* Fast Contact Action Links */}
      <div className="grid grid-cols-1 gap-2.5 mb-6">
        {/* Direct Email */}
        <div className="p-3.5 rounded-xl bg-[#171b26] border border-[#313540]/60 shadow-[0_4px_16px_rgba(0,0,0,0.3)] flex items-center justify-between">
          <a
            className="flex items-center gap-3 min-w-0 flex-1 hover:opacity-90 transition-opacity"
            href="mailto:sahananatrajan413@gmail.com"
          >
            <div className="w-10 h-10 rounded-lg bg-[#38bdf8]/20 border border-[#38bdf8]/30 flex items-center justify-center text-[#38bdf8] shrink-0">
              <span className="material-symbols-outlined text-[20px]">alternate_email</span>
            </div>
            <div className="min-w-0">
              <p className="font-caption text-[#87929a] uppercase text-[10px] tracking-wider">Email Address</p>
              <p className="font-headline-sm text-[14px] text-[#dfe2f1] truncate font-medium">
                sahananatrajan413@gmail.com
              </p>
            </div>
          </a>
          <button
            aria-label="Copy email"
            onClick={() => onCopyText('sahananatrajan413@gmail.com', 'Copied: sahananatrajan413@gmail.com')}
            className="p-2 rounded-lg bg-[#262a35] text-[#dfe2f1] hover:text-[#38bdf8] border border-[#313540]/60 active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">content_copy</span>
          </button>
        </div>

        {/* Direct Phone */}
        <div className="p-3.5 rounded-xl bg-[#171b26] border border-[#313540]/60 shadow-[0_4px_16px_rgba(0,0,0,0.3)] flex items-center justify-between">
          <a
            className="flex items-center gap-3 min-w-0 flex-1 hover:opacity-90 transition-opacity"
            href="tel:+919535495090"
          >
            <div className="w-10 h-10 rounded-lg bg-[#2f3aa3]/30 border border-[#bdc2ff]/30 flex items-center justify-center text-[#bdc2ff] shrink-0">
              <span className="material-symbols-outlined text-[20px]">call</span>
            </div>
            <div className="min-w-0">
              <p className="font-caption text-[#87929a] uppercase text-[10px] tracking-wider">Direct Phone</p>
              <p className="font-headline-sm text-[14px] text-[#dfe2f1] font-medium">
                +91 9535495090
              </p>
            </div>
          </a>
          <button
            aria-label="Copy phone number"
            onClick={() => onCopyText('+919535495090', 'Copied: +919535495090')}
            className="p-2 rounded-lg bg-[#262a35] text-[#dfe2f1] hover:text-[#bdc2ff] border border-[#313540]/60 active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">content_copy</span>
          </button>
        </div>
      </div>

      {/* Contact Form */}
      <div className="p-4 rounded-xl bg-[#171b26] border border-[#313540]/60 shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
        <h3 className="font-headline-sm text-[#dfe2f1] mb-1 font-semibold text-[17px]">
          Send a Message
        </h3>
        <p className="font-body-sm text-[#bdc8d1] mb-4 text-[13px]">
          Leave your note below and I will respond promptly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block font-label-code text-[#87929a] uppercase text-[11px] mb-1 font-medium" htmlFor="form-name">
              Your Full Name
            </label>
            <input
              id="form-name"
              type="text"
              required
              placeholder="e.g. Elena Vance"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full h-11 px-3.5 rounded-xl bg-[#1c1f2a] border border-[#313540]/60 text-[#dfe2f1] placeholder:text-[#87929a] focus:outline-none focus:border-[#38bdf8] focus:bg-[#262a35] transition-colors font-body-sm text-[14px]"
            />
          </div>

          <div>
            <label className="block font-label-code text-[#87929a] uppercase text-[11px] mb-1 font-medium" htmlFor="form-email">
              Email Address
            </label>
            <input
              id="form-email"
              type="email"
              required
              placeholder="elena@institution.org"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full h-11 px-3.5 rounded-xl bg-[#1c1f2a] border border-[#313540]/60 text-[#dfe2f1] placeholder:text-[#87929a] focus:outline-none focus:border-[#38bdf8] focus:bg-[#262a35] transition-colors font-body-sm text-[14px]"
            />
          </div>

          <div>
            <label className="block font-label-code text-[#87929a] uppercase text-[11px] mb-1 font-medium" htmlFor="form-message">
              Message Content
            </label>
            <textarea
              id="form-message"
              required
              rows={4}
              placeholder="Discussing an internship opening or project collaboration..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-3.5 rounded-xl bg-[#1c1f2a] border border-[#313540]/60 text-[#dfe2f1] placeholder:text-[#87929a] focus:outline-none focus:border-[#38bdf8] focus:bg-[#262a35] transition-colors font-body-sm text-[14px] resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 rounded-xl bg-[#38bdf8] hover:bg-[#38bdf8]/90 text-[#00354a] font-headline-sm text-[15px] font-semibold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.35)] active:scale-[0.98] transition-transform disabled:opacity-60"
          >
            <span>{isSubmitting ? 'Dispatching...' : 'Send Message'}</span>
            <span className="material-symbols-outlined text-[18px]">
              {isSubmitting ? 'hourglass_top' : 'send'}
            </span>
          </button>
        </form>

        {/* Live dispatched messages preview */}
        {sentMessages.length > 0 && (
          <div className="mt-4 pt-3 border-t border-[#313540]/50">
            <p className="font-label-code text-[#8ed5ff] text-[11px] uppercase mb-2">
              Recent Dispatches ({sentMessages.length})
            </p>
            <div className="space-y-2">
              {sentMessages.map((msg, index) => (
                <div key={index} className="p-2.5 rounded-lg bg-[#1c1f2a] border border-[#313540]/40 text-[12px]">
                  <div className="flex justify-between items-center text-[#87929a] mb-1">
                    <span className="font-semibold text-[#dfe2f1]">{msg.name}</span>
                    <span>{msg.time}</span>
                  </div>
                  <p className="text-[#bdc8d1] line-clamp-2">{msg.message}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
