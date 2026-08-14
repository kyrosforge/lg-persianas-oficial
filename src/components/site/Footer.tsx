import { MessageCircle, Phone, MapPin } from "lucide-react";
import logoImg from "@/assets/logo-lg-light.png";
import { WHATSAPP_URL, PHONE_DISPLAY, PHONE_HREF, NAV_LINKS } from "./hero-data";

export function Footer() {
  return (
    <footer id="contato" className="bg-[#050A12] text-cream border-t border-gold/30 pt-16 pb-12">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10 space-y-12">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" className="inline-block" aria-label="Voltar ao início">
              <img src={logoImg} alt="LG Persianas Logo" className="h-12 w-auto" />
            </a>
            <p className="text-sm font-normal text-cream/90 leading-relaxed max-w-sm">
              Mais de 22 anos de tradição em persianas, cortinas sob medida, fechamentos de sacada, box e vidros no Distrito Federal.
            </p>
            <div className="pt-1">
              <span className="text-xs font-bold uppercase tracking-wider text-gold bg-gold/15 px-3.5 py-1.5 rounded-full border border-gold/30">
                Atendimento presencial em todo o DF
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-lg font-bold text-gold">Navegação Rápida</h4>
            <ul className="space-y-2.5 text-sm sm:text-base font-normal text-cream/90">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products List */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-lg font-bold text-gold">Modelos Populares</h4>
            <ul className="space-y-2 text-sm font-normal text-cream/80">
              <li>Persiana Rolô & Screen</li>
              <li>Double Vision</li>
              <li>Cortina Blackout 100%</li>
              <li>Romana & Plissada</li>
              <li>Motorização Smart</li>
              <li>Manutenção & Lavagem</li>
            </ul>
          </div>

          {/* Direct Contacts */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-bold text-gold">Fale Conosco</h4>
            <div className="space-y-3 text-sm sm:text-base font-normal text-cream/90">
              <p className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-gold shrink-0" />
                <span>Atendimento presencial no DF</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <a href={PHONE_HREF} className="hover:text-gold transition-colors font-medium">{PHONE_DISPLAY}</a>
              </p>
            </div>

            <div className="pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center gap-2.5 rounded-xl bg-whatsapp px-6 py-3.5 text-sm sm:text-base font-bold text-cream shadow-lg hover:scale-105 transition-transform"
              >
                <MessageCircle className="w-5 h-5" />
                Orçamento no WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-cream/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-normal text-cream/70">
          <p>© {new Date().getFullYear()} LG Persianas — Todos os direitos reservados. Brasília/DF.</p>
          <p className="flex items-center gap-1 font-medium text-cream/80">
            <span>Mais de 22 anos transformando ambientes no DF</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
