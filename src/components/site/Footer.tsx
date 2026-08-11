import { MessageCircle, Phone, MapPin, ShieldCheck, Heart } from "lucide-react";
import logoImg from "@/assets/logo-lg-light.png";
import { WHATSAPP_URL, PHONE_DISPLAY, PHONE_HREF, NAV_LINKS } from "./hero-data";

export function Footer() {
  return (
    <footer id="contato" className="bg-[#070D16] text-cream border-t border-gold/20 pt-16 pb-12">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10 space-y-12">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" className="inline-block">
              <img src={logoImg} alt="LG Persianas Logo" className="h-12 w-auto" />
            </a>
            <p className="text-xs sm:text-sm font-light text-cream/70 leading-relaxed max-w-sm">
              Mais de 22 anos de tradição em cortinas, persianas sob medida, fechamentos em vidro e boxes no Distrito Federal. Elegância e durabilidade para seu espaço.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/30">
                Atendimento 100% no DF
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-semibold text-gold">Navegação Rápida</h4>
            <ul className="space-y-2 text-xs sm:text-sm font-light text-cream/80">
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
            <h4 className="font-serif text-base font-semibold text-gold">Modelos Populares</h4>
            <ul className="space-y-2 text-xs font-light text-cream/70">
              <li>Persiana Rolô & Screen</li>
              <li>Double Vision</li>
              <li>Cortina Blackout 100%</li>
              <li>Romana & Plissada</li>
              <li>Motorização Smart</li>
              <li>Box & Manutenção</li>
            </ul>
          </div>

          {/* Direct Contacts */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-semibold text-gold">Fale Conosco</h4>
            <div className="space-y-3 text-xs sm:text-sm font-light text-cream/80">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                <span>Atendimento presencial em todo o DF</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href={PHONE_HREF} className="hover:text-gold transition-colors">{PHONE_DISPLAY}</a>
              </p>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-whatsapp px-6 py-3 text-xs font-medium text-cream shadow-lg hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-4 h-4" />
              Solicitar Orçamento Grátis
            </a>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-cream/60">
          <p>© {new Date().getFullYear()} LG Persianas — Todos os direitos reservados. Brasília/DF.</p>
          <p className="flex items-center gap-1">
            <span>Desenvolvido com excelência e sofisticação</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
