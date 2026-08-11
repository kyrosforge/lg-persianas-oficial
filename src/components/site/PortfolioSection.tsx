import { useState } from "react";
import { Sparkles, MapPin, Eye, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-img.png";
import roloImg from "@/assets/products/rolo.png";
import doubleVisionImg from "@/assets/products/double-vision.png";
import painelJaponesImg from "@/assets/products/painel-japones.png";
import screenSolarImg from "@/assets/products/screen-solar.png";
import blackoutImg from "@/assets/products/blackout.png";
import romanaImg from "@/assets/products/romana.png";
import motorizadaImg from "@/assets/products/motorizada.png";
import { WHATSAPP_URL } from "./hero-data";

const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: "Cobertura Duplex no Noroeste",
    category: "salas",
    location: "Noroeste, Brasília/DF",
    product: "Persiana Rolô Screen Solar Motorizada",
    image: heroImg,
  },
  {
    id: 2,
    title: "Residência de Alto Padrão no Lago Sul",
    category: "salas",
    location: "Lago Sul, Brasília/DF",
    product: "Cortina Wave & Rolô Blackout",
    image: roloImg,
  },
  {
    id: 3,
    title: "Apartamento Gourmet em Águas Claras",
    category: "varandas",
    location: "Águas Claras, DF",
    product: "Tela Solar 5% com Proteção UV",
    image: screenSolarImg,
  },
  {
    id: 4,
    title: "Suíte Master no Sudoeste",
    category: "quartos",
    location: "Sudoeste, Brasília/DF",
    product: "Blackout 100% com Acionamento Silencioso",
    image: blackoutImg,
  },
  {
    id: 5,
    title: "Escritório Advocacia no SIG",
    category: "escritorios",
    location: "SIG, Brasília/DF",
    product: "Persiana Romana & Painel Japonês",
    image: painelJaponesImg,
  },
  {
    id: 6,
    title: "Casa em Condomínio no Park Way",
    category: "salas",
    location: "Park Way, DF",
    product: "Double Vision Motorizada por Controle",
    image: doubleVisionImg,
  },
];

const FILTERS = [
  { id: "all", label: "Todos os Projetos" },
  { id: "salas", label: "Salas & Coberturas" },
  { id: "quartos", label: "Quartos & Suítes" },
  { id: "varandas", label: "Varandas Gourmet" },
  { id: "escritorios", label: "Corporativo & Escritórios" },
];

export function PortfolioSection() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="relative bg-navy py-20 lg:py-28 text-cream overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-gold uppercase bg-gold/10 px-3.5 py-1.5 rounded-full border border-gold/20">
            <Sparkles className="w-3.5 h-3.5" /> NOSSO PORTFÓLIO
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.12] text-cream">
            Projetos reais entregues em <span className="text-gold italic">Brasília.</span>
          </h2>
          <p className="text-base sm:text-lg font-light text-cream/80 leading-relaxed">
            Confira algumas das nossas instalações de persianas, cortinas e vidros sob medida executadas nos bairros de maior prestígio do Distrito Federal.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-10 flex flex-wrap gap-2.5 border-b border-cream/10 pb-5">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                filter === f.id
                  ? "bg-gold text-navy font-semibold shadow-md shadow-gold/20"
                  : "bg-navy/60 text-cream/70 border border-cream/15 hover:border-gold/50 hover:text-cream"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl bg-navy/90 border border-cream/15 overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-2xl"
            >
              <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-navy/90 backdrop-blur-md px-3 py-1 rounded-full border border-gold/30 text-gold text-xs font-medium">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <span className="text-[11px] font-semibold text-gold uppercase tracking-wider">
                  {item.product}
                </span>
                <h3 className="font-serif text-xl font-semibold text-cream group-hover:text-gold transition-colors">
                  {item.title}
                </h3>

                <div className="pt-4 border-t border-cream/10 flex items-center justify-between">
                  <span className="text-xs font-light text-cream/70">Instalação Sob Medida</span>
                  <a
                    href={`${WHATSAPP_URL}&text=${encodeURIComponent(
                      `Olá! Gostaria de um projeto semelhante ao de ${item.title} em Brasília.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:text-cream transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" /> Orçar Projeto
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
