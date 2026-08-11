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
      className={`fixed inset-x-0 top-0 z-50 animate-fade-in transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
        scrolled
          ? "bg-navy/85 shadow-[0_1px_0_0_color-mix(in_oklab,var(--gold)_18%,transparent)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:flex lg:justify-between lg:px-10">
        <a href="#hero" className="flex min-w-0 items-center" aria-label="LG Persianas — início">
          <img
            src={logoImg}
            alt="LG Persianas"
            className={`w-auto shrink-0 transition-all duration-500 ${scrolled ? "h-11 lg:h-12" : "h-14 lg:h-16"}`}
            width={776}
            height={545}
          />
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:flex lg:items-center lg:gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="story-link text-sm font-light tracking-wide text-cream/85 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-medium text-cream shadow-soft transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Orçamento no WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="justify-self-end rounded-full border border-cream/25 p-2.5 text-cream transition-colors hover:border-gold hover:text-gold lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="animate-fade-in border-t border-cream/10 bg-navy/95 backdrop-blur-xl lg:hidden">
          <nav aria-label="Navegação móvel" className="flex flex-col px-6 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-cream/8 py-3 text-sm tracking-wide text-cream/85 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3.5 text-sm font-medium text-cream"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Orçamento no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
