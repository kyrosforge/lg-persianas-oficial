import { MessageCircle, Zap, ShieldCheck, Award, Clock } from "lucide-react";
import { WHATSAPP_URL } from "./hero-data";

export function FinalCtaSection() {
  return (
    <section className="relative bg-[#0A1424] py-16 lg:py-24 text-cream border-t border-gold/30 overflow-hidden">
      {/* Background radial glow with float animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl pointer-events-none animate-float-subtle" />

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10 text-center space-y-8">
        
        {/* Badge */}
        <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.2em] text-gold uppercase bg-gold/15 px-4 py-1.5 rounded-full border border-gold/40 shadow-md animate-fade-up">
          <Clock className="w-4 h-4 text-gold animate-spin-slow" /> ATENDIMENTO RÁPIDO NO DF
        </span>

        {/* Title */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.14] text-cream max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "150ms" }}>
          Fale agora com um especialista e receba um <span className="text-gold italic font-serif">orçamento gratuito.</span>
        </h2>

        <p className="text-base sm:text-lg font-normal text-cream/90 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "300ms" }}>
          Sem taxas ocultas ou compromisso. Nossos técnicos agendam a visita no seu endereço com catálogo completo de modelos e tecidos.
        </p>

        {/* 4 Highlights Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-2">
          <div className="p-3.5 rounded-xl bg-navy/80 border border-gold/30 flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold text-cream transition-all duration-300 hover:border-gold hover:-translate-y-1 hover:shadow-lg">
            <Zap className="w-4 h-4 text-gold shrink-0" />
            <span>Atendimento Rápido</span>
          </div>

          <div className="p-3.5 rounded-xl bg-navy/80 border border-gold/30 flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold text-cream transition-all duration-300 hover:border-gold hover:-translate-y-1 hover:shadow-lg">
            <Award className="w-4 h-4 text-gold shrink-0" />
            <span>Visita 100% Gratuita</span>
          </div>

          <div className="p-3.5 rounded-xl bg-navy/80 border border-gold/30 flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold text-cream transition-all duration-300 hover:border-gold hover:-translate-y-1 hover:shadow-lg">
            <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
            <span>Garantia de até 2 Anos</span>
          </div>

          <div className="p-3.5 rounded-xl bg-navy/80 border border-gold/30 flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold text-cream transition-all duration-300 hover:border-gold hover:-translate-y-1 hover:shadow-lg">
            <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Resposta via WhatsApp</span>
          </div>
        </div>

        {/* Large WhatsApp CTA Button */}
        <div className="pt-4 animate-fade-up" style={{ animationDelay: "450ms" }}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[56px] items-center justify-center gap-3.5 rounded-full bg-whatsapp px-9 py-4 text-lg sm:text-xl font-bold text-cream shadow-[0_10px_30px_-5px_rgba(34,197,94,0.5)] hover:scale-105 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            <MessageCircle className="w-7 h-7 animate-pulse" />
            Falar no WhatsApp Agora
          </a>
        </div>

      </div>
    </section>
  );
}
