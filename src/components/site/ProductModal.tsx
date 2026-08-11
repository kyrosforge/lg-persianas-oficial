import { X, CheckCircle2, MessageCircle, ShieldCheck, Sparkles, Ruler } from "lucide-react";
import type { ProductItem } from "./ProductsSection";
import { WHATSAPP_URL } from "./hero-data";

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-3xl rounded-3xl bg-navy border border-gold/40 shadow-2xl overflow-hidden text-cream"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-navy/80 border border-cream/20 text-cream hover:text-gold hover:border-gold transition-colors flex items-center justify-center"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative h-64 md:h-full min-h-[300px]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-gold bg-navy/90 px-3 py-1 rounded-md border border-gold/30">
                {product.tagline}
              </span>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
            <div className="space-y-4">
              <div>
                <span className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">
                  ESPECIFICAÇÕES DO MODELO
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream mt-1">
                  {product.name}
                </h3>
              </div>

              <p className="text-xs sm:text-sm font-light text-cream/80 leading-relaxed">
                {product.description}
              </p>

              {/* Key Features */}
              <div className="space-y-2 pt-2 border-t border-cream/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">Destaques Técnicos:</p>
                <ul className="space-y-1.5">
                  {product.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-xs text-cream/90 font-light">
                      <Sparkles className="w-3.5 h-3.5 text-gold shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal For */}
              <div className="space-y-2 pt-2 border-t border-cream/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">Ambientes Recomendados:</p>
                <div className="flex flex-wrap gap-1.5">
                  {product.idealFor.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-light bg-gold/15 text-gold border border-gold/30 px-2.5 py-1 rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Reassurance & CTA */}
            <div className="pt-4 border-t border-cream/15 space-y-3">
              <div className="flex items-center justify-between text-[11px] text-cream/70">
                <span className="flex items-center gap-1">
                  <Ruler className="w-3.5 h-3.5 text-gold" /> Medição sem custo no DF
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold" /> Até 2 anos de garantia
                </span>
              </div>

              <a
                href={`${WHATSAPP_URL}&text=${encodeURIComponent(
                  `Olá! Vi a persiana modelo ${product.name} no site e gostaria de solicitar um orçamento para o meu endereço em Brasília.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-6 py-3.5 text-sm font-medium text-cream shadow-xl hover:scale-[1.02] transition-transform"
              >
                <MessageCircle className="w-4 h-4" />
                Orçar {product.name} no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
