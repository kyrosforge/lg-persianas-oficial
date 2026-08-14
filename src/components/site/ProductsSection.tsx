import { useState } from "react";
import { Sparkles, Eye, MessageCircle, Ruler, ShieldCheck, Wrench, ChevronDown, ChevronUp } from "lucide-react";
import roloImg from "@/assets/products/rolo.png";
import doubleVisionImg from "@/assets/products/double-vision.png";
import painelJaponesImg from "@/assets/products/painel-japones.png";
import screenSolarImg from "@/assets/products/screen-solar.png";
import blackoutImg from "@/assets/products/blackout.png";
import romanaImg from "@/assets/products/romana.png";
import plissadaImg from "@/assets/products/plissada.png";
import verticalImg from "@/assets/products/vertical.png";
import horizontalImg from "@/assets/products/horizontal.png";
import motorizadaImg from "@/assets/products/motorizada.png";
import { WHATSAPP_URL } from "./hero-data";

export interface ProductItem {
  id: string;
  name: string;
  category: "rolo" | "blackout" | "especial" | "motorizada";
  tagline: string;
  description: string;
  image: string;
  idealFor: string[];
  features: string[];
  isPrimary?: boolean;
}

export const PRODUCTS: ProductItem[] = [
  {
    id: "rolo",
    name: "Rolô",
    category: "rolo",
    tagline: "Design clean e moderno",
    description:
      "Tecido único que enrola sobre si mesmo em um tubo superior de alumínio. Design clean e discreto, perfeito para quem deseja controlar a luminosidade com alta praticidade.",
    image: roloImg,
    idealFor: ["Sala de Estar", "Quarto", "Escritório", "Varanda"],
    features: ["Acionamento suave", "Fácil higienização", "Diversidade de tecidos e tramas"],
    isPrimary: true,
  },
  {
    id: "double-vision",
    name: "Double Vision",
    category: "rolo",
    tagline: "Controle gradual de luz",
    description:
      "Faixas translúcidas e opacas que se alternam com facilidade, permitindo regular a visibilidade e a claridade sem perder a linda vista externa.",
    image: doubleVisionImg,
    idealFor: ["Sala", "Home Office", "Sacada", "Suíte"],
    features: ["Efeito estético contemporâneo", "Controle de visibilidade em 2 níveis", "Proteção UV"],
    isPrimary: true,
  },
  {
    id: "painel-japones",
    name: "Painel Japonês",
    category: "especial",
    tagline: "Elegância para grandes vãos",
    description:
      "Painéis largos de tecido que deslizam suavemente sobre trilhos múltiplos. Solução perfeita para portas de varanda, divisórias e grandes vãos de vidro.",
    image: painelJaponesImg,
    idealFor: ["Grandes vãos", "Salas amplas", "Portas de correr", "Escritórios"],
    features: ["Recolhimento lateral suave", "Excelente caimento", "Modular e elegante"],
    isPrimary: true,
  },
  {
    id: "screen-solar",
    name: "Screen / Tela Solar",
    category: "blackout",
    tagline: "Proteção térmica com visão externa",
    description:
      "Tela técnica microperfurada que bloqueia de 95% a 99% dos raios UV e reduz o calor no ambiente mantendo a transparência e visão para fora.",
    image: screenSolarImg,
    idealFor: ["Varandas Gourmet", "Ambientes ensolarados", "Escritórios", "Salas com TV"],
    features: ["Redução da carga térmica", "Proteção de móveis e pisos", "Retenção UV extrema"],
    isPrimary: true,
  },
  {
    id: "blackout",
    name: "Blackout Total",
    category: "blackout",
    tagline: "Escuridão absoluta e privacidade",
    description:
      "Bloqueio total da luz solar (100%). Indicada para quem busca escuridão completa, privacidade absoluta e melhoria acústica no ambiente.",
    image: blackoutImg,
    idealFor: ["Quartos de casal", "Quartos infantis", "Home Theater", "Salas de Reunião"],
    features: ["Bloqueio 100% de luminosidade", "Isolamento térmico extra", "Conforto para o sono"],
    isPrimary: true,
  },
  {
    id: "romana",
    name: "Romana",
    category: "especial",
    tagline: "Aconchego com dobras suaves",
    description:
      "Estruturada em dobras horizontais suaves que se recolhem em gomos elegantes quando acionada. Traz textura calorosa e toque sofisticado.",
    image: romanaImg,
    idealFor: ["Sala de Jantar", "Quarto", "Cozinha gourmet", "Salas de estar"],
    features: ["Gomos dobráveis simétricos", "Ampla variedade de tecidos nobres", "Acabamento artesanal"],
    isPrimary: true,
  },
  {
    id: "plissada",
    name: "Plissada (Plissê)",
    category: "especial",
    tagline: "Versatilidade para janelas difíceis",
    description:
      "Compacta e altamente versátil. Adapta-se perfeitamente a formatos especiais, janelas recortadas, clarabóias e estruturas inclinadas.",
    image: plissadaImg,
    idealFor: ["Janelas pequenas", "Clarabóias", "Tetos de vidro", "Banheiros"],
    features: ["Mínimo espaço de recolhimento", "Instalação em vãos estruturados", "Leve e delicada"],
    isPrimary: false,
  },
  {
    id: "vertical",
    name: "Vertical",
    category: "especial",
    tagline: "Direcionamento preciso de luz",
    description:
      "Lâminas verticais orientáveis em 180° que giram para direcionar a luz natural com precisão. Ideal para janelas altas e ambientes corporativos.",
    image: verticalImg,
    idealFor: ["Escritórios", "Ambientes corporativos", "Salas de conferência"],
    features: ["Giro de 180 graus", "Diversidade de cores e texturas", "Manutenção simplificada"],
    isPrimary: false,
  },
  {
    id: "horizontal",
    name: "Horizontal (Madeira / Alumínio)",
    category: "especial",
    tagline: "Clássica e ajustável",
    description:
      "Lâminas horizontais em madeira nobre ou alumínio reforçado. Permite regulação precisa da entrada de luz e fluxo de ar com visual atemporal.",
    image: horizontalImg,
    idealFor: ["Escritórios", "Cozinhas", "Consultórios", "Salas executivas"],
    features: ["Lâminas basculantes", "Opção em madeira ecológica", "Resistente e durável"],
    isPrimary: false,
  },
  {
    id: "motorizada",
    name: "Motorizada & Automatizada",
    category: "motorizada",
    tagline: "Conforto com tecnologia",
    description:
      "Acionamento via controle remoto multifuncional, aplicativo para smartphone ou integração completa com assistentes virtuais (Alexa / Google Home).",
    image: motorizadaImg,
    idealFor: ["Smart Homes", "Janelas altas e vãos duplos", "Penthouses", "Corporativo"],
    features: ["Motor ultra silencioso", "Agendamento por horários", "Integração via Wi-Fi/Zigbee"],
    isPrimary: false,
  },
];

const CATEGORIES = [
  { id: "all", label: "Todos os Modelos" },
  { id: "rolo", label: "Rolôs & Double Vision" },
  { id: "blackout", label: "Blackout & Tela Solar" },
  { id: "especial", label: "Romana & Especiais" },
  { id: "motorizada", label: "Motorizadas / Automação" },
];

interface ProductsSectionProps {
  onSelectProduct?: (product: ProductItem) => void;
}

export function ProductsSection({ onSelectProduct }: ProductsSectionProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAllModels, setShowAllModels] = useState(false);

  const categoryProducts =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  const displayedProducts =
    showAllModels || activeCategory !== "all"
      ? categoryProducts
      : categoryProducts.filter((p) => p.isPrimary);

  return (
    <section id="produtos" className="relative bg-navy py-16 lg:py-24 text-cream overflow-hidden">
      {/* Background accents with floating animation */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none animate-float-subtle" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-whatsapp/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 animate-fade-up">
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.2em] text-gold uppercase bg-gold/15 px-4 py-1.5 rounded-full border border-gold/30 shadow-sm">
            <Sparkles className="w-4 h-4 text-gold animate-pulse" /> NOSSOS PRODUTOS SOB MEDIDA
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.14] text-cream">
            Persianas e cortinas para cada <span className="text-gold italic font-serif">estilo de ambiente.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal text-cream/90 leading-relaxed">
            Soluções completas com controle térmico, proteção solar e design contemporâneo. Orçamento e medição gratuita em Brasília/DF.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-8 flex flex-wrap gap-2.5 border-b border-cream/15 pb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                if (cat.id !== "all") setShowAllModels(true);
              }}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-gold text-navy font-bold shadow-lg shadow-gold/25 scale-105"
                  : "bg-navy/80 text-cream/80 border border-cream/20 hover:border-gold/60 hover:text-cream hover:scale-102"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid with Scale & Hover Motion */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-2xl bg-navy/95 border border-cream/20 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:-translate-y-2.5 hover:border-gold/70 hover:shadow-[0_20px_40px_-15px_rgba(234,179,8,0.25)] animate-scale-in"
            >
              {/* Image & Badge */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                
                <div className="absolute top-3 left-3">
                  <span className="text-xs font-semibold tracking-wider text-gold uppercase bg-navy/90 backdrop-blur-md px-3 py-1 rounded-md border border-gold/40 shadow-sm">
                    {product.tagline}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <h3 className="font-serif text-2xl font-bold text-cream group-hover:text-gold transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-sm font-normal text-cream/90 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Ideal for Badges */}
                <div className="space-y-2 pt-2 border-t border-cream/10">
                  <p className="text-xs font-bold uppercase tracking-wider text-gold">Ideal para:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {product.idealFor.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-medium bg-cream/15 text-cream px-2.5 py-1 rounded-md border border-cream/15 transition-transform hover:scale-105"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Clear CTAs */}
                <div className="pt-4 border-t border-cream/15 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => onSelectProduct?.(product)}
                    className="flex-1 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border-2 border-gold/60 bg-navy/60 px-4 py-2.5 text-sm font-semibold text-cream hover:bg-gold hover:text-navy transition-all duration-300 hover:scale-[1.02]"
                  >
                    <Eye className="w-4 h-4" /> Detalhes
                  </button>
                  <a
                    href={`${WHATSAPP_URL}&text=${encodeURIComponent(
                      `Olá! Gostaria de um orçamento para a persiana modelo ${product.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-whatsapp px-4 py-2.5 text-sm font-semibold text-cream shadow-md hover:scale-[1.03] transition-transform duration-300"
                  >
                    <MessageCircle className="w-4 h-4" /> Orçar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expand / Collapse Button */}
        {activeCategory === "all" && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAllModels((prev) => !prev)}
              className="inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full bg-navy/90 border-2 border-gold px-8 py-3.5 text-base font-bold text-cream hover:bg-gold hover:text-navy shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span>{showAllModels ? "Mostrar menos modelos" : "Ver todos os modelos de persianas"}</span>
              {showAllModels ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5 text-gold group-hover:text-navy" />}
            </button>
          </div>
        )}

        {/* Bottom Feature Badges */}
        <div className="mt-14 rounded-2xl bg-navy/90 border border-gold/40 p-6 sm:p-8 backdrop-blur-md shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-cream/15">
            <div className="flex items-start gap-4 pt-4 md:pt-0 md:pr-4 group">
              <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center text-gold shrink-0 border border-gold/40 group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                <Ruler className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-cream group-hover:text-gold transition-colors">Medição Gratuita no Local</h4>
                <p className="text-xs sm:text-sm font-normal text-cream/90 mt-1 leading-relaxed">
                  Técnicos levam o catálogo de tecidos e medem cada janela sem compromisso em todo o DF.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 pt-6 md:pt-0 md:px-6 group">
              <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center text-gold shrink-0 border border-gold/40 group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                <ShieldCheck className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-cream group-hover:text-gold transition-colors">Garantia de até 2 Anos</h4>
                <p className="text-xs sm:text-sm font-normal text-cream/90 mt-1 leading-relaxed">
                  Cobertura completa para mecanismos, tecidos e instalação com suporte rápido pós-venda.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 pt-6 md:pt-0 md:pl-6 group">
              <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center text-gold shrink-0 border border-gold/40 group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                <Wrench className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-cream group-hover:text-gold transition-colors">Instalação com Equipe Própria</h4>
                <p className="text-xs sm:text-sm font-normal text-cream/90 mt-1 leading-relaxed">
                  Profissionais próprios com mais de 22 anos de experiência e acabamento limpo e perfeito.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
