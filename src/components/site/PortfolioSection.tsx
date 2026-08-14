import { useState } from "react";
import { Sparkles, MapPin, MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import heroImg from "@/assets/hero-img.png";
import roloImg from "@/assets/products/rolo.png";
import doubleVisionImg from "@/assets/products/double-vision.png";
import painelJaponesImg from "@/assets/products/painel-japones.png";
import screenSolarImg from "@/assets/products/screen-solar.png";
import blackoutImg from "@/assets/products/blackout.png";
import { WHATSAPP_URL } from "./hero-data";

const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: "Cobertura Duplex no Noroeste",
    category: "salas",
    location: "Noroeste, Brasília/DF",
    product: "Persiana Rolô Screen Solar Motorizada",
    image: heroImg,
    isPrimary: true,
  },
  {
    id: 2,
    title: "Residência de Alto Padrão no Lago Sul",
    category: "salas",
    location: "Lago Sul, Brasília/DF",
    product: "Cortina Wave & Rolô Blackout",
    image: roloImg,
    isPrimary: true,
  },
  {
    id: 3,
    title: "Apartamento Gourmet em Águas Claras",
    category: "varandas",
    location: "Águas Claras, DF",
    product: "Tela Solar 5% com Proteção UV",
    image: screenSolarImg,
    isPrimary: true,
  },
  {
    id: 4,
    title: "Suíte Master no Sudoeste",
    category: "quartos",
    location: "Sudoeste, Brasília/DF",
    product: "Blackout 100% com Acionamento Silencioso",
    image: blackoutImg,
    isPrimary: false,
  },
  {
    id: 5,
    title: "Escritório Advocacia no SIG",
    category: "escritorios",
    location: "SIG, Brasília/DF",
    product: "Persiana Romana & Painel Japonês",
    image: painelJaponesImg,
    isPrimary: false,
  },
  {
    id: 6,
    title: "Casa em Condomínio no Park Way",
    category: "salas",
    location: "Park Way, DF",
    product: "Double Vision Motorizada por Controle",
    image: doubleVisionImg,
    isPrimary: false,
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
  const [showAll, setShowAll] = useState(false);

  const filtered =
    filter === "all"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === filter);

  const displayed =
    showAll || filter !== "all"
      ? filtered
      : filtered.filter((p) => p.isPrimary);

  return (
    <section id="portfolio" className="relative bg-navy py-16 lg:py-24 text-cream overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.2em] text-gold uppercase bg-gold/15 px-4 py-1.5 rounded-full border border-gold/30">
            <Sparkles className="w-4 h-4 text-gold" /> PORTFÓLIO DE PROJETOS NO DF
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.14] text-cream">
            Projetos reais entregues em <span className="text-gold italic font-serif">Brasília.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal text-cream/90 leading-relaxed">
            Confira algumas das nossas instalações executadas nos bairros de maior prestígio do Distrito Federal.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-8 flex flex-wrap gap-2.5 border-b border-cream/15 pb-4">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => {
                setFilter(f.id);
                if (f.id !== "all") setShowAll(true);
              }}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === f.id
                  ? "bg-gold text-navy font-bold shadow-md shadow-gold/20"
                  : "bg-navy/80 text-cream/80 border border-cream/20 hover:border-gold/60 hover:text-cream"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayed.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl bg-navy/95 border border-cream/20 overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-2xl flex flex-col justify-between"
            >
              <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-navy/90 backdrop-blur-md px-3 py-1 rounded-full border border-gold/40 text-gold text-xs font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-gold uppercase tracking-wider">
                    {item.product}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-cream group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="pt-4 border-t border-cream/15 flex items-center justify-between">
                  <span className="text-xs font-medium text-cream/80">Instalação Sob Medida</span>
                  <a
                    href={`${WHATSAPP_URL}&text=${encodeURIComponent(
                      `Olá! Gostaria de um projeto semelhante ao de ${item.title} em Brasília.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[40px] items-center gap-1.5 text-xs sm:text-sm font-semibold text-gold hover:text-cream transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" /> Orçar Projeto
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expand / Collapse Button */}
        {filter === "all" && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-full bg-navy/90 border-2 border-gold px-8 py-3 text-base font-bold text-cream hover:bg-gold hover:text-navy shadow-xl transition-all"
            >
              <span>{showAll ? "Mostrar menos projetos" : "Ver todos os projetos do portfólio"}</span>
              {showAll ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5 text-gold group-hover:text-navy" />}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
