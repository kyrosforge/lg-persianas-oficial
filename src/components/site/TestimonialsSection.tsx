import { Star, Quote, Sparkles, CheckCircle2 } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Dr. Marcelo Fonseca",
    location: "Lago Sul, Brasília/DF",
    rating: 5,
    text: "Atendimento impecável do início ao fim. A medição no meu apartamento no Lago Sul foi pontual e a instalação das persianas motorizadas ficou perfeita. Recomendo muito!",
    date: "Avaliado no Google",
  },
  {
    id: 2,
    name: "Mariana Alencar",
    location: "Sudoeste, Brasília/DF",
    rating: 5,
    text: "Fiz o fechamento de varanda e coloquei persianas Double Vision. A equipe da LG Persianas é super caprichosa, limparam tudo após a instalação. Nota 10!",
    date: "Avaliado no Google",
  },
  {
    id: 3,
    name: "Eduardo & Camila",
    location: "Noroeste, Brasília/DF",
    rating: 5,
    text: "Precisávamos de blackout total para os quartos do nosso bebê. O atendimento foi rápido, o preço justo e a qualidade do tecido surpreendeu.",
    date: "Avaliado no Google",
  },
  {
    id: 4,
    name: "Patricia Guimarães",
    location: "Águas Claras, DF",
    rating: 5,
    text: "Fiz a lavagem e manutenção de 5 persianas antigas do meu escritório. Voltaram funcionando igualzinhas a novas! Economizei muito.",
    date: "Avaliado no Google",
  },
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="relative bg-[#FAF7F2] py-20 lg:py-28 text-slate-800 overflow-hidden">
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-gold uppercase bg-gold/10 px-3.5 py-1.5 rounded-full border border-gold/20">
            <Sparkles className="w-3.5 h-3.5" /> DEPOIMENTOS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.12] text-navy">
            O que dizem nossos <span className="text-gold italic">clientes no DF.</span>
          </h2>
          <p className="text-base sm:text-lg font-light text-slate-600 leading-relaxed">
            Mais de 3.000 clientes atendidos com nota 5.0 estrelas no Google. A satisfação do nosso cliente é nossa maior garantia.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white border border-amber-900/10 p-6 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-xl hover:border-gold/40 transition-all duration-300"
            >
              <div className="space-y-3">
                {/* Rating */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <Quote className="w-6 h-6 text-gold/40" />

                <p className="text-xs sm:text-sm font-light text-slate-700 leading-relaxed italic">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-semibold text-navy">{item.name}</h4>
                  <p className="text-[11px] text-slate-500 font-light">{item.location}</p>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3" /> Verificado
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
