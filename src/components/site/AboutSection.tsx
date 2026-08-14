import { Award, Shield, Wrench, Sparkles, Users, MapPin, CheckCircle2, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-img.png";
import { WHATSAPP_URL } from "./hero-data";

const MAIN_HIGHLIGHTS = [
  { value: "+22 anos", label: "De tradição no DF", icon: Award },
  { value: "+3.000", label: "Projetos entregues", icon: Sparkles },
  { value: "Equipe própria", label: "Sem terceirização", icon: Users },
  { value: "Todo o DF", label: "Sem taxa de deslocamento", icon: MapPin },
];

const COMPLEMENTARY_DIFFERENTIALS = [
  {
    icon: Sparkles,
    title: "Soluções 100% Sob Medida",
    desc: "Cada peça é desenhada para a medida exata da sua janela com acabamento perfeito.",
  },
  {
    icon: Award,
    title: "Materiais de Alta Qualidade",
    desc: "Tecidos, lâminas e motores das marcas líderes de mercado para durar muitos anos.",
  },
  {
    icon: Wrench,
    title: "Instalação Especializada",
    desc: "Técnicos próprios com vasta experiência em residências e ambientes corporativos.",
  },
  {
    icon: Shield,
    title: "Garantia de até 2 Anos",
    desc: "Tranquilidade total em produtos e serviços com suporte rápido pós-venda.",
  },
];

export function AboutSection() {
  return (
    <section id="quem-somos" className="relative bg-[#FAF7F2] py-16 lg:py-24 text-slate-800 overflow-hidden">
      {/* Background accents with subtle float */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none animate-float-subtle" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        
        {/* Top Header & Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Story & Main Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3 animate-fade-up">
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.2em] text-navy uppercase bg-gold/20 px-4 py-1.5 rounded-full border border-gold/40 shadow-sm">
                <Sparkles className="w-4 h-4 text-gold-deep animate-pulse" /> QUEM SOMOS E DIFERENCIAIS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.14] text-navy">
                Mais de 22 anos transformando ambientes com{" "}
                <span className="text-gold italic font-serif">sofisticação e qualidade.</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg font-normal leading-relaxed text-slate-700 animate-fade-up" style={{ animationDelay: "150ms" }}>
              A <strong className="font-semibold text-navy">LG Persianas</strong> oferece soluções completas em persianas, cortinas, boxes e vidros sob medida. Unimos materiais nobres, medição a laser gratuita e instalação técnica própria para transformar casas e escritórios em todo o Distrito Federal.
            </p>

            {/* 4 Main Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {MAIN_HIGHLIGHTS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="p-3.5 rounded-xl border border-amber-900/15 bg-white shadow-sm flex flex-col justify-between space-y-1.5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-gold/50 group"
                    style={{ animationDelay: `${200 + idx * 100}ms` }}
                  >
                    <Icon className="w-5 h-5 text-gold group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
                    <p className="font-serif text-lg sm:text-xl font-bold text-navy leading-tight">{item.value}</p>
                    <p className="text-xs font-medium text-slate-600 leading-snug">{item.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Complementary Differentials Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              {COMPLEMENTARY_DIFFERENTIALS.map((diff) => {
                const Icon = diff.icon;
                return (
                  <div
                    key={diff.title}
                    className="p-4 rounded-xl border border-amber-900/10 bg-white/90 shadow-sm flex items-start gap-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gold/60 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-navy text-gold flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h3 className="font-serif text-base font-bold text-navy group-hover:text-gold transition-colors">{diff.title}</h3>
                      <p className="text-xs sm:text-sm font-normal text-slate-600 mt-0.5 leading-relaxed">{diff.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Reassurance items & CTA */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-800 font-semibold">
                <span className="flex items-center gap-1.5 transition-transform hover:scale-105">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Visita Técnica Grátis
                </span>
                <span className="flex items-center gap-1.5 transition-transform hover:scale-105">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Orçamento Sem Compromisso
                </span>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center gap-2.5 rounded-xl bg-whatsapp px-6 py-3 text-sm sm:text-base font-semibold text-cream shadow-md hover:scale-105 hover:shadow-emerald-500/20 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 animate-pulse" />
                Falar com Especialista
              </a>
            </div>

          </div>

          {/* Right Column: Showcase Image with Floating Overlay */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-gold/30 via-navy/10 to-gold/20 blur-md opacity-75 animate-pulse" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gold/40 group">
                <img
                  src={heroImg}
                  alt="Projeto de Persianas e Cortinas LG Persianas em Brasília"
                  className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-navy/95 backdrop-blur-md border border-gold/40 text-cream shadow-2xl transition-transform duration-300 group-hover:translate-y-[-4px]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold font-serif text-2xl font-bold shrink-0 border border-gold/40 animate-float-subtle">
                      22+
                    </div>
                    <div>
                      <p className="font-serif text-base font-semibold text-gold">Mais de 22 Anos no DF</p>
                      <p className="text-xs sm:text-sm text-cream/90 font-normal">Garantia, pontualidade e atendimento personalizado em Brasília.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
