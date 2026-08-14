import { useEffect, useState } from "react";
import { MessageCircle, Phone, MapPin, Star, Award, Shield, Users } from "lucide-react";
import heroImg from "@/assets/hero-img.png";
import heroVideo from "@/assets/hero-video.mp4";
import {
  WHATSAPP_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  TRUST_ITEMS,
} from "./hero-data";

const ICONS = {
  star: Star,
  award: Award,
  pin: MapPin,
  shield: Shield,
  users: Users,
} as const;

function TrustBar() {
  return (
    <div
      className="animate-fade-up rounded-2xl border border-cream/20 bg-navy/80 px-3 py-3 backdrop-blur-md sm:px-6"
      style={{ animationDelay: "700ms", animationFillMode: "both" }}
    >
      <ul className="grid grid-cols-2 divide-cream/15 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x">
        {TRUST_ITEMS.map((item) => {
          const Icon = ICONS[item.icon];
          return (
            <li key={item.label} className="flex items-center gap-3.5 px-3 py-3">
              <Icon className="h-7 w-7 shrink-0 text-gold" strokeWidth={1.5} aria-hidden="true" />
              <div className="min-w-0">
                <p className="font-serif text-xl sm:text-2xl font-semibold leading-tight text-cream">{item.value}</p>
                {item.icon === "star" && (
                  <p className="text-xs tracking-[0.2em] text-gold font-bold" aria-hidden="true">
                    ★★★★★
                  </p>
                )}
                <p className="text-xs sm:text-sm font-medium leading-snug text-cream/90">{item.label}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Hero() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <section id="hero" className="relative min-h-[100svh] w-full overflow-hidden bg-navy">
      {/* CAMADA 1: Video Background / Fallback Poster Image */}
      {prefersReducedMotion ? (
        <img
          src={heroImg}
          alt="Sala de estar contemporânea com persianas rolô sob medida e vista panorâmica de Brasília"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[60%_center] pointer-events-none"
        />
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroImg}
          className="absolute inset-0 h-full w-full object-cover object-[60%_center] pointer-events-none select-none"
          aria-hidden="true"
        >
          <source src={heroVideo} type="video/mp4" />
          {/* Fallback Image inside video tag */}
          <img
            src={heroImg}
            alt="Sala de estar contemporânea com persianas sob medida"
            className="h-full w-full object-cover object-[60%_center]"
          />
        </video>
      )}

      {/* CAMADA 2: Overlay Gradients (Alta legibilidade no lado esquerdo, transparência no direito) */}
      <div className="absolute inset-0 bg-hero-veil pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-hero-base pointer-events-none" aria-hidden="true" />

      {/* CAMADA 3: Conteúdo Interativo & Textos da Hero */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-5 pb-8 pt-32 sm:px-8 lg:px-10 lg:pb-10 lg:pt-36">
        <div className="flex flex-1 items-center">
          <div className="max-w-2xl">
            <p
              className="animate-fade-up text-xs sm:text-sm font-semibold tracking-[0.25em] text-gold uppercase bg-navy/70 border border-gold/40 px-3.5 py-1.5 rounded-full inline-block"
              style={{ animationDelay: "150ms", animationFillMode: "both" }}
            >
              LG PERSIANAS • BRASÍLIA / DF
            </p>

            <h1
              className="animate-fade-up mt-5 font-serif text-[2.4rem] leading-[1.08] tracking-tight text-cream sm:text-6xl lg:text-[4.25rem] font-medium"
              style={{ animationDelay: "260ms", animationFillMode: "both" }}
            >
              Persianas, Cortinas,
              <br className="hidden sm:block" /> Box e Vidros
              <span className="mt-1.5 block text-gold font-serif">Sob Medida em Brasília</span>
            </h1>

            <div
              className="animate-fade-up mt-6 space-y-2 text-lg font-normal leading-relaxed text-cream sm:text-xl"
              style={{ animationDelay: "380ms", animationFillMode: "both" }}
            >
              <p>Instalação, manutenção e lavagem com mais de 22 anos de experiência.</p>
              <p className="font-semibold text-gold-soft">Orçamento gratuito pelo WhatsApp no seu endereço.</p>
            </div>

            <p
              className="animate-fade-up mt-5 flex items-center gap-2 text-base font-medium text-cream"
              style={{ animationDelay: "460ms", animationFillMode: "both" }}
            >
              <MapPin className="h-5 w-5 shrink-0 text-gold" strokeWidth={2} aria-hidden="true" />
              Atendemos todo o Distrito Federal sem custo de deslocamento
            </p>

            <div
              className="animate-fade-up mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
              style={{ animationDelay: "560ms", animationFillMode: "both" }}
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl bg-whatsapp px-7 py-4 text-base sm:text-lg font-semibold text-cream shadow-lg transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <MessageCircle className="h-6 w-6" aria-hidden="true" />
                Solicitar orçamento pelo WhatsApp
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl border-2 border-gold/80 bg-navy/80 px-7 py-4 text-base sm:text-lg font-medium text-cream backdrop-blur-md transition-colors duration-300 hover:border-gold hover:bg-gold/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <Phone className="h-5 w-5 text-gold" aria-hidden="true" />
                Ligar agora: {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <TrustBar />
        </div>
      </div>
    </section>
  );
}
