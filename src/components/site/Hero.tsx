import { MessageCircle, Phone, MapPin, Star, Award, Shield, Users } from "lucide-react";
import heroAsset from "@/assets/hero-img.png.asset.json";
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
      className="animate-fade-up rounded-2xl border border-cream/12 bg-navy/25 px-2 py-2 backdrop-blur-md sm:px-4"
      style={{ animationDelay: "700ms", animationFillMode: "both" }}
    >
      <ul className="grid grid-cols-2 divide-cream/10 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x">
        {TRUST_ITEMS.map((item) => {
          const Icon = ICONS[item.icon];
          return (
            <li key={item.label} className="flex items-center gap-3 px-3 py-3.5">
              <Icon className="h-6 w-6 shrink-0 text-gold" strokeWidth={1.25} aria-hidden="true" />
              <div className="min-w-0">
                <p className="font-serif text-lg leading-tight text-cream">{item.value}</p>
                {item.icon === "star" && (
                  <p className="text-[11px] tracking-[0.25em] text-gold" aria-hidden="true">
                    ★★★★★
                  </p>
                )}
                <p className="truncate text-xs font-light text-cream/70">{item.label}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[100svh] w-full overflow-hidden bg-navy">
      <img
        src={heroAsset.url}
        alt="Sala de estar contemporânea com persianas rolô sob medida e vista panorâmica de Brasília"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full animate-hero-zoom object-cover object-[60%_center]"
      />
      <div className="absolute inset-0 bg-hero-veil" aria-hidden="true" />
      <div className="absolute inset-0 bg-hero-base" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-5 pb-8 pt-32 sm:px-8 lg:px-10 lg:pb-10 lg:pt-36">
        <div className="flex flex-1 items-center">
          <div className="max-w-2xl">
            <p
              className="animate-fade-up text-xs font-medium tracking-[0.32em] text-gold sm:text-sm"
              style={{ animationDelay: "150ms", animationFillMode: "both" }}
            >
              LG PERSIANAS • BRASÍLIA / DF
            </p>

            <h1
              className="animate-fade-up mt-6 font-serif text-[2.4rem] leading-[1.06] tracking-tight text-cream sm:text-6xl lg:text-[4.25rem]"
              style={{ animationDelay: "260ms", animationFillMode: "both" }}
            >
              Persianas, Cortinas,
              <br className="hidden sm:block" /> Box e Vidros
              <span className="mt-1 block text-gold">Sob Medida em Brasília</span>
            </h1>

            <div
              className="animate-fade-up mt-7 space-y-2 text-base font-light leading-relaxed text-cream/85 sm:text-lg"
              style={{ animationDelay: "380ms", animationFillMode: "both" }}
            >
              <p>Instalação, manutenção e lavagem com mais de 22 anos de experiência.</p>
              <p>Orçamento gratuito pelo WhatsApp.</p>
            </div>

            <p
              className="animate-fade-up mt-6 flex items-center gap-2 text-sm text-cream/80"
              style={{ animationDelay: "460ms", animationFillMode: "both" }}
            >
              <MapPin className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} aria-hidden="true" />
              Atendemos todo o Distrito Federal
            </p>

            <div
              className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "560ms", animationFillMode: "both" }}
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-whatsapp px-7 py-4 text-base font-medium text-cream shadow-soft transition-transform duration-300 hover:scale-[1.015] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Solicitar orçamento pelo WhatsApp
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-3 rounded-lg border border-gold/55 px-7 py-4 text-base font-light text-cream transition-colors duration-300 hover:border-gold hover:bg-gold/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                Ligar agora: {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <TrustBar />
        </div>
      </div>
    </section>
  );
}
