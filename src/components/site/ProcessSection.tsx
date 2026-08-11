import {
  MessageSquare,
  Ruler,
  FileCheck,
  Scissors,
  Truck,
  Sparkles,
  Shield,
  Award,
  MapPin,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import heroImg from "@/assets/hero-img.png";
import instalacaoImg from "@/assets/services/instalacao.png";
import { WHATSAPP_URL } from "./hero-data";

const STEPS = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Primeiro contato",
    desc: "Você fala com a nossa equipe pelo WhatsApp ou formulário. Entendemos suas necessidades e estilo de ambiente.",
    image: heroImg,
  },
  {
    number: "02",
    icon: Ruler,
    title: "Visita técnica",
    desc: "Nossos técnicos vão até o seu endereço no DF. Medimos cada janela com laser de precisão e apresentamos o catálogo.",
    image: instalacaoImg,
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Proposta personalizada",
    desc: "Enviamos o orçamento transparente com os melhores modelos, tecidos, acionamentos e condições de pagamento.",
    image: heroImg,
  },
  {
    number: "04",
    icon: Scissors,
    title: "Fabricação sob medida",
    desc: "Seu pedido entra em produção milimétrica com materiais de alta durabilidade e rígido controle de qualidade.",
    image: instalacaoImg,
  },
  {
    number: "05",
    icon: Truck,
    title: "Entrega e instalação",
    desc: "Nossa equipe própria instala suas persianas com agilidade, limpeza total e perfeito alinhamento técnico.",
    image: instalacaoImg,
  },
  {
    number: "06",
    icon: Sparkles,
    title: "Ambiente pronto",
    desc: "Você desfruta de um ambiente mais bonito, térmico e elegante — com suporte contínuo e garantia de até 2 anos.",
    image: heroImg,
  },
];

const REASSURANCE = [
  {
    icon: MessageSquare,
    title: "Atendimento especializado",
    desc: "Consultoria do primeiro contato ao pós-venda.",
  },
  {
    icon: Award,
    title: "Materiais de alta qualidade",
    desc: "Trabalhamos apenas com fornecedores premium.",
  },
  {
    icon: Shield,
    title: "Garantia de até 2 anos",
    desc: "Segurança e tranquilidade em produtos e serviços.",
  },
  {
    icon: MapPin,
    title: "Todo o Distrito Federal",
    desc: "Atendemos Brasília e todas as regiões do DF.",
  },
];

export function ProcessSection() {
  return (
    <section id="como-funciona" className="relative bg-navy py-20 lg:py-28 text-cream overflow-hidden">
      {/* Glow shapes */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-gold uppercase bg-gold/10 px-3.5 py-1.5 rounded-full border border-gold/20">
            <Sparkles className="w-3.5 h-3.5" /> COMO FUNCIONA
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.12] text-cream">
            Do primeiro contato ao <span className="text-gold italic">ambiente perfeito.</span>
          </h2>
          <p className="text-base sm:text-lg font-light text-cream/80 leading-relaxed">
            Um processo simples, transparente e eficiente para garantir a melhor experiência em cada etapa do seu projeto de persianas sob medida.
          </p>
        </div>

        {/* Step Numbers Top Banner */}
        <div className="mt-12 hidden lg:flex items-center justify-between p-6 rounded-2xl bg-navy/80 border border-gold/20 backdrop-blur-md">
          {STEPS.map((step, idx) => (
            <div key={step.number} className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-gold text-navy font-bold text-sm flex items-center justify-center shadow-md">
                  {step.number}
                </span>
                <span className="text-xs font-medium text-cream">{step.title}</span>
              </div>
              {idx < STEPS.length - 1 && (
                <div className="w-12 h-0.5 bg-gradient-to-r from-gold/60 to-gold/10" />
              )}
            </div>
          ))}
        </div>

        {/* 6 Step Cards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group relative rounded-2xl bg-navy/90 border border-cream/15 p-6 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-gold/60 hover:shadow-xl"
              >
                {/* Header with Step badge */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-gold/15 text-gold flex items-center justify-center border border-gold/30 group-hover:bg-gold group-hover:text-navy transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-serif text-3xl font-bold text-gold/30 group-hover:text-gold/80 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-cream group-hover:text-gold transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs font-light text-cream/75 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-cream/10 flex items-center justify-between text-xs text-gold/90 font-medium">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Etapa Acompanhada
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASSURANCE.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-5 rounded-xl bg-navy/60 border border-cream/10 flex items-start gap-4 hover:border-gold/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/15 text-gold flex items-center justify-center shrink-0 border border-gold/30">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-cream">{item.title}</h4>
                  <p className="text-xs font-light text-cream/70 mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-navy via-navy/90 to-navy p-6 sm:p-10 border border-gold/40 shadow-2xl text-cream">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">Agende em menos de 1 minuto</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-cream">
                Vamos começar o projeto do seu ambiente?
              </h3>
              <p className="text-xs sm:text-sm text-cream/80 font-light">
                Solicite uma visita técnica gratuita sem compromisso em qualquer região de Brasília/DF.
              </p>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-whatsapp px-8 py-4 text-base font-medium text-cream shadow-xl hover:scale-105 transition-transform shrink-0"
            >
              <MessageCircle className="w-5 h-5" />
              Pedir orçamento no WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
