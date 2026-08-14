import { useState } from "react";
import { MapPin, Phone, MessageCircle, Clock, ChevronDown, Sparkles, HelpCircle } from "lucide-react";
import { WHATSAPP_URL, PHONE_DISPLAY, PHONE_HREF } from "./hero-data";

const REGIONS_LIST = [
  "Plano Piloto (Asa Sul & Asa Norte)",
  "Lago Sul & Lago Norte",
  "Noroeste & Sudoeste",
  "Águas Claras & Park Way",
  "Guará, Cruzeiro & Octogonal",
  "Taguatinga & Vicente Pires",
  "Jardim Botânico & Manacás",
  "Sobradinho, Colorado & Regiões",
];

const FAQS = [
  {
    q: "A visita técnica e medição possuem algum custo?",
    a: "Não! A visita técnica e a medição no seu endereço em Brasília/DF são 100% gratuitas e sem compromisso. Nossos técnicos levam o catálogo de tecidos e opções no local para você escolher com conforto.",
  },
  {
    q: "Quanto tempo demora entre o pedido e a instalação?",
    a: "O prazo médio de fabricação sob medida é de 7 a 12 dias úteis. A instalação é agendada no dia e horário de sua preferência com nossa equipe técnica própria.",
  },
  {
    q: "Qual a garantia dos produtos e da instalação?",
    a: "Oferecemos até 2 anos de garantia cobrindo componentes, mecanismos de acionamento, tecidos e mão de obra de instalação com suporte técnico rápido.",
  },
  {
    q: "Vocês realizam lavagem e conserto de persianas antigas?",
    a: "Sim! Trabalhamos com manutenção completa, troca de comandos travados, cordagens e higienização profunda antiácaro com retirada e reinstalação no local.",
  },
  {
    q: "Quais as formas de pagamento aceitas?",
    a: "Aceitamos cartões de crédito em até 10x, PIX e transferência bancária, com condições facilitadas direto com o consultor.",
  },
];

export function LocationSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="onde-estamos" className="relative bg-navy py-16 lg:py-24 text-cream overflow-hidden">
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10 space-y-16">
        
        {/* COMPACT STRIPE: ÁREA DE ATENDIMENTO NO DF */}
        <div className="rounded-2xl bg-navy/90 border border-gold/40 p-6 sm:p-10 shadow-xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.2em] text-gold uppercase bg-gold/15 px-3.5 py-1 rounded-full border border-gold/30">
                <MapPin className="w-4 h-4 text-gold" /> COBERTURA EM BRASÍLIA / DF
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-cream">
                Atendemos todo o Distrito Federal.
              </h2>
              <p className="text-sm sm:text-base font-normal text-cream/90 leading-relaxed max-w-3xl">
                Realizamos visitas técnicas, medições, instalações e assistência especializada em todas as regiões administrativas do Distrito Federal sem taxa de deslocamento.
              </p>

              {/* Regions Badge Grid */}
              <div className="flex flex-wrap gap-2 pt-2">
                {REGIONS_LIST.map((reg) => (
                  <span
                    key={reg}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cream/10 border border-cream/15 text-xs sm:text-sm font-medium text-cream"
                  >
                    <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                    {reg}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button Column */}
            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex min-h-[50px] items-center justify-center gap-3 rounded-xl bg-whatsapp px-7 py-3.5 text-base font-semibold text-cream shadow-lg hover:scale-105 transition-transform"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar Visita Técnica
              </a>
            </div>

          </div>
        </div>

        {/* FAQ SECTION (Accordion Initial closed) */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.2em] text-gold uppercase">
              <HelpCircle className="w-4 h-4 text-gold" /> TIRA-DÚVIDAS
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-cream">
              Perguntas Frequentes
            </h3>
            <p className="text-sm sm:text-base text-cream/80 font-normal">
              Esclareça suas dúvidas sobre prazos, visitas e garantias.
            </p>
          </div>

          <div className="space-y-4 pt-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl bg-navy/90 border border-cream/20 overflow-hidden transition-all duration-300 hover:border-gold/50"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-cream hover:text-gold transition-colors min-h-[52px]"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-6 h-6 text-gold shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 text-sm sm:text-base font-normal text-cream/90 leading-relaxed border-t border-cream/15 animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
