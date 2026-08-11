import { Award, Shield, Wrench, Sparkles, Users, MapPin, CheckCircle2, Quote } from "lucide-react";
import heroImg from "@/assets/hero-img.png";
import { WHATSAPP_URL } from "./hero-data";

const PILLARS = [
  {
    icon: Sparkles,
    title: "Soluções sob medida",
    desc: "Cada projeto é desenhado sob medida para o tamanho exato da sua janela.",
  },
  {
    icon: Award,
    title: "Materiais premium",
    desc: "Tecidos, lâminas e trilhos das melhores marcas e fornecedores do mercado.",
  },
  {
    icon: Wrench,
    title: "Instalação especializada",
    desc: "Técnicos próprios com vasta experiência em imóveis de alto padrão.",
  },
  {
    icon: Shield,
    title: "Garantia de qualidade",
    desc: "Até 2 anos de garantia em produtos e mão de obra com assistência técnica.",
  },
  {
    icon: Users,
    title: "Equipe própria",
    desc: "Sem terceirização: acompanhamos seu projeto do orçamento ao pós-venda.",
  },
  {
    icon: MapPin,
    title: "Atendimento em todo o DF",
    desc: "Atendemos Plano Piloto, Lago Sul/Norte, Noroeste, Águas Claras e regiões.",
  },
];

export function AboutSection() {
  return (
    <section id="quem-somos" className="relative bg-[#FAF7F2] py-20 lg:py-28 text-slate-800 overflow-hidden">
      {/* Delicate background blur accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-gold uppercase bg-gold/10 px-3.5 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5" /> QUEM SOMOS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.15] text-navy">
                Há mais de 22 anos transformando ambientes com{" "}
                <span className="text-gold italic font-normal">elegância e qualidade.</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg font-light leading-relaxed text-slate-600">
              A <strong className="font-semibold text-navy">LG Persianas</strong> oferece soluções completas em persianas, cortinas, boxes e vidros sob medida, unindo materiais de alta qualidade, instalação especializada e atendimento personalizado para transformar ambientes residenciais e comerciais em todo o Distrito Federal.
            </p>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
              {PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="group p-4 rounded-xl border border-amber-900/10 bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-gold/40"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold mb-3 group-hover:bg-navy group-hover:text-gold transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-base font-semibold text-navy mb-1">{pillar.title}</h3>
                    <p className="text-xs font-light text-slate-600 leading-relaxed">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Bullet List Reassurance */}
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-700 font-medium">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Orçamento Gratuito no Local
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Sem Custo de Deslocamento
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Pagamento Facilitado
              </span>
            </div>
          </div>

          {/* Right Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative ring */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-gold/30 via-navy/10 to-gold/20 blur-md opacity-70" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gold/30 group">
                <img
                  src={heroImg}
                  alt="Projeto de Persianas e Cortinas LG Persianas em Brasília"
                  className="w-full h-[450px] lg:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                
                {/* Badge Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-navy/90 backdrop-blur-md border border-gold/30 text-cream">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold font-serif text-xl font-bold shrink-0">
                      22+
                    </div>
                    <div>
                      <p className="font-serif text-sm font-semibold text-gold">Anos de Tradição no DF</p>
                      <p className="text-xs text-cream/80 font-light">Especialistas em projetos de alto padrão</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-16 rounded-2xl bg-navy p-6 sm:p-8 border border-gold/25 shadow-xl text-cream">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 flex items-center gap-5 border-b lg:border-b-0 lg:border-r border-cream/15 pb-6 lg:pb-0 lg:pr-8">
              <div className="w-14 h-14 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center text-gold font-bold text-xl shrink-0">
                3k+
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-gold">Mais de</p>
                <p className="font-serif text-2xl sm:text-3xl font-semibold text-cream">3.000 Projetos Entregues</p>
                <p className="text-xs text-cream/70 font-light">Casas, apartamentos e corporativos no DF</p>
              </div>
            </div>

            <div className="lg:col-span-7 flex items-center gap-4 pl-0 lg:pl-4">
              <Quote className="w-8 h-8 text-gold/60 shrink-0 hidden sm:block" />
              <div>
                <p className="font-serif text-xl sm:text-2xl italic font-normal text-cream">
                  &ldquo;Excelência que você vê. Qualidade que você sente.&rdquo;
                </p>
                <p className="text-xs font-light text-cream/70 mt-1">
                  Compromisso com o acabamento perfeito em cada janela de Brasília.
                </p>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto hidden sm:inline-flex items-center gap-2 rounded-lg bg-whatsapp px-5 py-3 text-sm font-medium text-cream shadow-md hover:scale-105 transition-transform"
              >
                Falar com Especialista
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
