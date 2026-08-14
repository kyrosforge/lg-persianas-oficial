import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./hero-data";

export function WhatsAppFloat() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex items-center sm:bottom-6 sm:right-6">
      {/* Desktop Tooltip Helper */}
      <div className="hidden lg:flex items-center gap-2 mr-3 px-3.5 py-2 rounded-full bg-navy/90 border border-gold/30 text-cream text-xs font-medium shadow-xl backdrop-blur-md animate-fade-in">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Dúvidas? Fale conosco no WhatsApp</span>
      </div>

      {/* Main Floating Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com especialista da LG Persianas"
        className="group relative inline-flex items-center gap-2.5 rounded-full bg-whatsapp px-4 py-3.5 sm:px-5 sm:py-4 text-cream font-medium text-sm sm:text-base shadow-[0_10px_25px_-5px_rgba(34,197,94,0.4)] transition-all duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        {/* Subtle Pulse Ripple Ring */}
        <span className="absolute -inset-1 rounded-full bg-whatsapp/40 animate-ping opacity-75 pointer-events-none" style={{ animationDuration: '3.5s' }} />

        {/* WhatsApp Icon */}
        <MessageCircle className="relative h-6 w-6 shrink-0 text-cream group-hover:rotate-12 transition-transform duration-300" aria-hidden="true" />
        
        {/* Responsive Text Label */}
        <span className="relative font-medium tracking-wide">
          <span className="inline sm:hidden">WhatsApp</span>
          <span className="hidden sm:inline">Orçamento no WhatsApp</span>
        </span>
      </a>
    </div>
  );
}
