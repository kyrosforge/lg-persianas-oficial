import {
  Wrench,
  Ruler,
  Cog,
  Droplets,
  Smartphone,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  MapPin,
  MessageCircle,
} from "lucide-react";
import instalacaoImg from "@/assets/services/instalacao.png";
import heroImg from "@/assets/hero-img.png";
import { WHATSAPP_URL } from "./hero-data";

const SERVICES = [
  {
    id: "instalacao",
    icon: Wrench,
    title: "Instalação sob medida",
    subtitle: "Instalação rápida, segura e limpa.",
    checklist: ["Equipe própria capacitada", "Fixação e alinhamento perfeitos", "Acabamento impecável no local"],
    image: instalacaoImg,
  },
  {
    id: "medicao",
    icon: Ruler,
    title: "Medição e visita técnica gratuita",
    subtitle: "Visita e medição gratuitas na sua casa no DF.",
    checklist: ["Visita 100% sem custo", "Medição milimétrica com laser", "Orientação com catálogo de tecidos"],
    image: heroImg,
  },
  {
    id: "manutencao",
    icon: Cog,
    title: "Manutenção e conserto",
    subtitle: "Sua persiana voltando a funcionar como nova.",
    checklist: ["Troca de peças e comandos", "Conserto de comandos travados", "Regulagem, lubrificação e garantia"],
    image: instalacaoImg,
  },
  {
    id: "lavagem",
    icon: Droplets,
    title: "Lavagem profissional",
    subtitle: "Limpeza profunda sem danificar a fibra do tecido.",
    checklist: ["Produtos neutros específicos", "Higienização completa antiácaro", "Aumento expressivo da vida útil"],
    image: heroImg,
  },
  {
    id: "motorizacao",
    icon: Smartphone,
    title: "Motorização & Automação",
    subtitle: "Abra e feche com controle ou pelo celular.",
    checklist: ["Motorização ultra silenciosa", "Acionamento via app e controle", "Integração total com Alexa/Google"],
    image: heroImg,
  },
  {
    id: "box-vidros",
    icon: ShieldCheck,
    title: "Manutenção de cortinas, box e vidros",
    subtitle: "Esquadrias, box de banheiro e vidros temperados.",
    checklist: ["Box e esquadrias de alumínio", "Troca de trilhos e roldanas", "Regulagem de portas de vidro"],
    image: heroImg,
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="relative bg-[#FAF7F2] py-20 lg:py-28 text-slate-800 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-gold uppercase bg-gold/10 px-3.5 py-1.5 rounded-full border border-gold/20">
            <Sparkles className="w-3.5 h-3.5" /> NOSSOS SERVIÇOS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.12] text-navy">
            Soluções completas para <span className="text-gold italic">transformar seu ambiente.</span>
          </h2>
          <p className="text-base sm:text-lg font-light text-slate-600 leading-relaxed">
            Da escolha do produto ideal à instalação especializada e manutenção pós-venda, cuidamos de cada detalhe com máxima excelência técnica em Brasília.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-white border border-amber-900/10 p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-gold/50 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-navy text-gold flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-navy transition-colors duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-navy group-hover:text-gold transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm font-light text-slate-600 leading-relaxed">
                    {service.subtitle}
                  </p>

                  {/* Checklist */}
                  <ul className="space-y-2 pt-2 border-t border-slate-100">
                    {service.checklist.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service CTA */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Solicitar Serviço →
                  </span>
                  <a
                    href={`${WHATSAPP_URL}&text=${encodeURIComponent(
                      `Olá! Gostaria de agendar o serviço de ${service.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-whatsapp/10 text-whatsapp hover:bg-whatsapp hover:text-white transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 rounded-2xl bg-navy p-6 sm:p-8 border border-gold/30 text-cream shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-6 flex items-center gap-4 border-b lg:border-b-0 lg:border-r border-cream/15 pb-6 lg:pb-0 lg:pr-6">
              <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center text-gold font-serif text-xl font-bold shrink-0 border border-gold/30">
                DF
              </div>
              <div>
                <p className="text-xs font-semibold text-gold uppercase tracking-widest">Mais de 22 anos no mercado</p>
                <p className="font-serif text-xl sm:text-2xl font-medium text-cream mt-0.5">
                  Atendemos todas as regiões do Distrito Federal
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-xs text-cream/70 font-light flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-gold shrink-0" /> Asa Sul, Asa Norte, Lago Sul, Lago Norte, Noroeste, Águas Claras & Regiões.
                </p>
                <p className="text-xs text-gold/90 font-medium">Qualidade, compromisso e garantia em cada etapa.</p>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 rounded-lg bg-whatsapp px-5 py-3 text-xs font-medium text-cream shadow-md hover:scale-105 transition-transform"
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
