import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logoImg from "@/assets/logo-lg-light.png";
import { WHATSAPP_URL, NAV_LINKS } from "./hero-data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
        scrolled
          ? "bg-navy/95 shadow-lg shadow-black/20 backdrop-blur-xl border-b border-gold/20"
          : "bg-gradient-to-b from-navy/90 via-navy/50 to-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:flex lg:justify-between lg:px-10">
        
        {/* Logo Link */}
        <a href="#hero" className="flex min-w-0 items-center" aria-label="LG Persianas — página inicial">
          <img
            src={logoImg}
            alt="LG Persianas Logo"
            className={`w-auto shrink-0 transition-all duration-500 ${scrolled ? "h-11 lg:h-12" : "h-14 lg:h-16"}`}
            width={776}
            height={545}
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Navegação principal" className="hidden lg:flex lg:items-center lg:gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium tracking-wide text-cream transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Header CTA */}
        <div className="hidden lg:block">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center gap-2.5 rounded-full bg-whatsapp px-6 py-3 text-base font-bold text-cream shadow-md transition-transform duration-300 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Orçamento no WhatsApp
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          aria-expanded={open}
          className="justify-self-end flex min-h-[48px] min-w-[48px] items-center justify-center rounded-xl border-2 border-cream/30 p-3 text-cream transition-colors hover:border-gold hover:text-gold lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {open && (
        <div className="animate-fade-in border-t border-cream/20 bg-navy/98 backdrop-blur-2xl lg:hidden shadow-2xl">
          <nav aria-label="Navegação móvel" className="flex flex-col px-6 py-5 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[52px] items-center border-b border-cream/15 text-lg font-medium text-cream hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex min-h-[52px] w-full items-center justify-center gap-3 rounded-xl bg-whatsapp px-6 py-4 text-base font-bold text-cream shadow-xl"
              >
                <MessageCircle className="h-6 w-6" aria-hidden="true" />
                Orçamento no WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
