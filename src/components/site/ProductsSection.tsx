import { useState } from "react";
import { Sparkles, Eye, MessageCircle, ArrowRight, ShieldCheck, Ruler, Wrench } from "lucide-react";
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

  const filteredProducts =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="produtos" className="relative bg-navy py-20 lg:py-28 text-cream overflow-hidden">
      {/* Glow overlays */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-whatsapp/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-gold uppercase bg-gold/10 px-3.5 py-1.5 rounded-full border border-gold/20">
            <Sparkles className="w-3.5 h-3.5" /> NOSSOS PRODUTOS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.12] text-cream">
            Persianas sob medida para cada <span className="text-gold italic">estilo de vida.</span>
          </h2>
          <p className="text-base sm:text-lg font-light text-cream/80 leading-relaxed">
            Soluções que unem beleza, funcionalidade e tecnologia para transformar ambientes com conforto térmico, controle de luminosidade e sofisticação em Brasília.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-10 flex flex-wrap gap-2 sm:gap-3 border-b border-cream/10 pb-5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-gold text-navy font-semibold shadow-lg shadow-gold/20 scale-105"
                  : "bg-navy/60 text-cream/70 border border-cream/15 hover:border-gold/50 hover:text-cream"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-2xl bg-navy/90 border border-cream/15 overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-2xl hover:shadow-gold/10"
            >
              {/* Product Image */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-80" />
                
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-semibold tracking-wider text-gold uppercase bg-navy/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-gold/30">
                    {product.tagline}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-semibold text-cream group-hover:text-gold transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs font-light text-cream/75 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                </div>

                {/* Ideal For Badges */}
                <div className="space-y-2 pt-2">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-gold/80">Ideal para:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {product.idealFor.map((item) => (
                      <span
                        key={item}
                        className="text-[11px] font-light bg-cream/10 text-cream/90 px-2 py-0.5 rounded-md border border-cream/10"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="pt-4 border-t border-cream/10 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectProduct?.(product)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-gold/40 px-3 py-2.5 text-xs font-medium text-cream hover:bg-gold hover:text-navy transition-all duration-300"
                  >
                    <Eye className="w-3.5 h-3.5" /> Ver Detalhes
                  </button>
                  <a
                    href={`${WHATSAPP_URL}&text=${encodeURIComponent(
                      `Olá! Gostaria de um orçamento para a persiana modelo ${product.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-2.5 rounded-lg bg-whatsapp text-cream hover:scale-105 transition-transform"
                    title={`Orçar ${product.name} no WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Feature Badges Bar */}
        <div className="mt-16 rounded-2xl bg-navy/80 border border-gold/30 p-6 sm:p-8 backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-cream/10">
            <div className="flex items-start gap-4 pt-4 md:pt-0 md:pr-4">
              <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center text-gold shrink-0 border border-gold/30">
                <Ruler className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-cream">Soluções sob medida</h4>
                <p className="text-xs font-light text-cream/70 mt-1 leading-relaxed">
                  Cada peça é produzida na medida exata da sua janela, sem folgas ou adaptações.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 pt-6 md:pt-0 md:px-6">
              <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center text-gold shrink-0 border border-gold/30">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-cream">Materiais premium</h4>
                <p className="text-xs font-light text-cream/70 mt-1 leading-relaxed">
                  Tecidos, lâminas e mecanismos selecionados de alta resistência para durar muitos anos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 pt-6 md:pt-0 md:pl-6">
              <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center text-gold shrink-0 border border-gold/30">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-cream">Atendimento especializado</h4>
                <p className="text-xs font-light text-cream/70 mt-1 leading-relaxed">
                  Do projeto à instalação, você conta com o suporte e consultoria dedicada da nossa equipe.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
