import {
  Wrench,
  Cog,
  Droplets,
  Smartphone,
  Sparkles,
  CheckCircle2,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { WHATSAPP_URL } from "./hero-data";

const SERVICE_CATEGORIES = [
  {
    id: "instalacao-medicao",
    icon: Wrench,
    title: "1. Instalação & Medição Gratuita",
    subtitle: "Visita técnica gratuita no local e instalação sob medida sem sujeira.",
    items: [
      "Visita e medição a laser 100% gratuita em todo o DF",
      "Apresentação de mostradores e catálogo no seu endereço",
      "Fixação perfeita, nivelamento e acabamento sem poeira",
      "Instalação por equipe própria especializada",
    ],
    ctaText: "Agendar Visita Grátis",
  },
  {
    id: "manutencao",
    icon: Cog,
    title: "2. Manutenção & Consertos",
    subtitle: "Conserto completo de persianas, cortinas, box, janelas e esquadrias.",
    items: [
      "Troca de comandos, cordões, correntes e mecanismo travado",
      "Manutenção preventiva e corretiva de persianas antigas",
      "Regulagem de roldanas, trilhos, box de banheiro e vidros",
      "Peças de reposição originais e com garantia",
    ],
    ctaText: "Solicitar Manutenção",
  },
  {
    id: "lavagem",
    icon: Droplets,
    title: "3. Lavagem Profissional",
    subtitle: "Higienização profunda sem danificar as fibras dos tecidos.",
    items: [
      "Lavagem técnica com produtos neutros específicos",
      "Remoção profunda de poeira, manchas e fungos/ácaros",
      "Retirada e reinstalação no local com total comodidade",
      "Restauração do aspecto de novo e aumento da durabilidade",
    ],
    ctaText: "Orçar Lavagem",
  },
  {
    id: "motorizacao",
    icon: Smartphone,
    title: "4. Motorização & Automação",
    subtitle: "Controle e praticidade ao seu alcance com tecnologia inteligente.",
    items: [
      "Motorização ultra silenciosa para persianas e cortinas",
      "Acionamento por controle remoto multifuncional",
      "Controle pelo smartphone de qualquer lugar",
      "Integração total com assistentes Alexa e Google Home",
    ],
    ctaText: "Cotar Motorização",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="relative bg-[#FAF7F2] py-16 lg:py-24 text-slate-800 overflow-hidden">
      {/* Ambient background accents */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-gold/10 rounded-full blur-3xl pointer-events-none animate-float-subtle" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 animate-fade-up">
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.2em] text-navy uppercase bg-gold/20 px-4 py-1.5 rounded-full border border-gold/40 shadow-sm">
            <Sparkles className="w-4 h-4 text-gold-deep animate-pulse" /> NOSSOS SERVIÇOS ESPECIALIZADOS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.14] text-navy">
            Soluções completas do projeto à <span className="text-gold italic font-serif">manutenção pós-venda.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal text-slate-700 leading-relaxed">
            Organizamos nossos atendimentos em 4 categorias principais para facilitar sua escolha. Atendemos todas as regiões do Distrito Federal.
          </p>
        </div>

        {/* 4 Category Cards Grid with Motion */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICE_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="group relative rounded-2xl bg-white border border-amber-900/15 p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-gold/60 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-navy text-gold flex items-center justify-center shrink-0 shadow-md group-hover:bg-gold group-hover:text-navy transition-colors duration-300 border border-gold/30">
                      <Icon className="w-7 h-7 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy group-hover:text-gold transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-normal text-slate-600 mt-1 leading-snug">
                        {cat.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Checklist */}
                  <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-800 font-medium transition-transform hover:translate-x-1">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service CTA */}
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <a
                    href={`${WHATSAPP_URL}&text=${encodeURIComponent(
                      `Olá! Gostaria de informações e orçamento sobre o serviço de ${cat.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl bg-whatsapp px-6 py-3.5 text-base font-semibold text-cream shadow-md hover:scale-[1.02] hover:shadow-emerald-500/20 transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {cat.ctaText} no WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 rounded-2xl bg-navy p-6 sm:p-8 border border-gold/40 text-cream shadow-2xl transition-all duration-300 hover:border-gold">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-6 flex items-center gap-4 border-b lg:border-b-0 lg:border-r border-cream/15 pb-6 lg:pb-0 lg:pr-6">
              <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center text-gold font-serif text-2xl font-bold shrink-0 border border-gold/40 animate-float-subtle">
                DF
              </div>
              <div>
                <p className="text-xs font-semibold text-gold uppercase tracking-widest">Mais de 22 anos de tradição</p>
                <p className="font-serif text-xl sm:text-2xl font-bold text-cream mt-0.5">
                  Atendemos todas as regiões do Distrito Federal
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-xs sm:text-sm text-cream/90 font-normal flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-gold shrink-0" /> Asa Sul, Asa Norte, Lago Sul/Norte, Noroeste, Águas Claras, Sudoeste e regiões.
                </p>
                <p className="text-xs sm:text-sm text-gold font-semibold">Orçamento e visita técnica gratuita sem taxa de deslocamento.</p>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-whatsapp px-6 py-3 text-sm sm:text-base font-semibold text-cream shadow-md hover:scale-105 transition-transform"
              >
                Agendar Visita Grátis
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
