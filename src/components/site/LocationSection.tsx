import { useState } from "react";
import { MapPin, Phone, MessageCircle, Clock, ChevronDown, Sparkles, CheckCircle2 } from "lucide-react";
import { WHATSAPP_URL, PHONE_DISPLAY, PHONE_HREF } from "./hero-data";

const REGIONS = [
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
    a: "Não! A visita técnica e a medição no seu endereço em Brasília/DF são 100% gratuitas e sem compromisso. Nossos técnicos levem todo o catálogo de tecidos e opções no local.",
  },
  {
    q: "Quanto tempo demora entre o pedido e a instalação?",
    a: "O prazo médio de fabricação sob medida é de 7 a 12 dias úteis. A instalação é agendada no horário de sua preferência com nossa equipe própria.",
  },
  {
    q: "Qual a garantia dos produtos e da instalação?",
    a: "Oferecemos até 2 anos de garantia contratual cobrindo componentes, mecanismos de acionamento, tecido e mão de obra de instalação.",
  },
  {
    q: "Vocês realizam lavagem e conserto de persianas antigas?",
    a: "Sim! Trabalhamos com manutenção completa, troca de comandos travados, cordagens e higienização profunda antiácaro com retirada e reinstalação no local.",
  },
];

export function LocationSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="onde-estamos" className="relative bg-navy py-20 lg:py-28 text-cream overflow-hidden">
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: DF Coverage Map / Information */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-gold uppercase bg-gold/10 px-3.5 py-1.5 rounded-full border border-gold/20">
                <Sparkles className="w-3.5 h-3.5" /> ONDE ESTAMOS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium leading-[1.12] text-cream">
                Atendimento em todo o <span className="text-gold italic">Distrito Federal.</span>
              </h2>
              <p className="text-sm sm:text-base font-light text-cream/80 leading-relaxed">
                Nossos consultores e equipe técnica própria atendem todas as regiões administrativas de Brasília com veículo equipado e mostradores de tecidos.
              </p>
            </div>

            {/* Regions List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {REGIONS.map((reg) => (
                <div key={reg} className="flex items-center gap-2.5 p-3 rounded-xl bg-navy/80 border border-cream/15 text-xs text-cream/90 font-medium">
                  <MapPin className="w-4 h-4 text-gold shrink-0" />
                  <span>{reg}</span>
                </div>
              ))}
            </div>

            {/* Direct Contacts Card */}
            <div className="p-6 rounded-2xl bg-navy/90 border border-gold/30 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/15 text-gold flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-cream">Horário de Atendimento</h4>
                  <p className="text-xs text-cream/70 font-light">Segunda a Sexta: 08h às 18h | Sábado: 08h às 13h</p>
                </div>
              </div>

              <div className="pt-3 border-t border-cream/10 flex flex-wrap gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-5 py-2.5 text-xs font-medium text-cream hover:scale-105 transition-transform"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Direct
                </a>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 rounded-lg border border-gold/40 px-5 py-2.5 text-xs font-medium text-cream hover:bg-gold/10 transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold" /> {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-widest text-gold uppercase">TIRA-DÚVIDAS</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-cream">Perguntas Frequentes</h3>
            </div>

            <div className="space-y-4 pt-2">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.q}
                    className="rounded-2xl bg-navy/80 border border-cream/15 overflow-hidden transition-all duration-300"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif text-base font-semibold text-cream hover:text-gold transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm font-light text-cream/80 leading-relaxed border-t border-cream/10 animate-fade-in">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
