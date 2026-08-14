import {
  MessageSquare,
  Ruler,
  FileCheck,
  Scissors,
  Truck,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { WHATSAPP_URL } from "./hero-data";

const STEPS = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Primeiro contato",
    desc: "Conversamos no WhatsApp. Entendemos a necessidade do seu ambiente.",
  },
  {
    number: "02",
    icon: Ruler,
    title: "Visita técnica grátis",
    desc: "Vamos até seu endereço no DF. Medimos com laser e levamos o catálogo.",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Proposta personalizada",
    desc: "Enviamos orçamento claro com os melhores tecidos e opções.",
  },
  {
    number: "04",
    icon: Scissors,
    title: "Fabricação sob medida",
    desc: "Produção milimétrica com materiais de alta durabilidade.",
  },
  {
    number: "05",
    icon: Truck,
    title: "Entrega e instalação",
    desc: "Instalação rápida e limpa feita por nossa equipe própria.",
  },
  {
    number: "06",
    icon: Sparkles,
    title: "Ambiente pronto",
    desc: "Seu espaço renovado com elegância e garantia de até 2 anos.",
  },
];

export function ProcessSection() {
  return (
    <section id="como-funciona" className="relative bg-navy py-16 lg:py-24 text-cream overflow-hidden">
      {/* Glow ambient background */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 text-center mx-auto">
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.2em] text-gold uppercase bg-gold/15 px-4 py-1.5 rounded-full border border-gold/30">
            <Sparkles className="w-4 h-4 text-gold" /> PROCESSO SIMPLES E TRANSPARENTE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.14] text-cream">
            Como funciona seu atendimento em <span className="text-gold italic font-serif">6 passos simples.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal text-cream/90 leading-relaxed">
            Do orçamento inicial à entrega final, cuidamos de tudo com agilidade e transparência.
          </p>
        </div>

        {/* DESKTOP TIMELINE (Horizontal) */}
        <div className="hidden lg:block mt-14">
          <div className="relative grid grid-cols-6 gap-4">
            {/* Horizontal Connecting Line */}
            <div className="absolute top-7 left-12 right-12 h-1 bg-gradient-to-r from-gold/80 via-gold/40 to-gold/80 -z-0" />

            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative z-10 flex flex-col items-center text-center space-y-3 group">
                  {/* Circle Badge */}
                  <div className="w-14 h-14 rounded-full bg-navy border-2 border-gold text-gold font-serif font-bold text-lg flex items-center justify-center shadow-lg group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-bold text-gold uppercase tracking-wider">Passo {step.number}</span>

                  <h3 className="font-serif text-lg font-bold text-cream group-hover:text-gold transition-colors leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs font-normal text-cream/80 leading-relaxed max-w-[190px]">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE / TABLET TIMELINE (Vertical) */}
        <div className="lg:hidden mt-10 relative">
          {/* Vertical Connecting Line */}
          <div className="absolute top-6 bottom-6 left-6 w-1 bg-gradient-to-b from-gold via-gold/50 to-gold -z-0" />

          <div className="space-y-6">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative z-10 flex items-start gap-4 p-4 rounded-xl bg-navy/90 border border-cream/15">
                  <div className="w-12 h-12 rounded-full bg-gold text-navy font-bold text-base flex items-center justify-center shrink-0 shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-gold uppercase">Passo {step.number}</span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-cream mt-0.5">{step.title}</h3>
                    <p className="text-xs sm:text-sm font-normal text-cream/90 mt-1 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full bg-whatsapp px-8 py-3.5 text-base sm:text-lg font-semibold text-cream shadow-xl hover:scale-105 transition-transform"
          >
            <MessageCircle className="w-6 h-6" />
            Solicitar Orçamento Gratuito no WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
