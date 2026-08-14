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
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="relative bg-[#FAF7F2] py-16 lg:py-24 text-slate-800 overflow-hidden">
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.2em] text-navy uppercase bg-gold/20 px-4 py-1.5 rounded-full border border-gold/40">
            <Sparkles className="w-4 h-4 text-gold-deep" /> DEPOIMENTOS DE CLIENTES NO DF
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.14] text-navy">
            O que dizem nossos <span className="text-gold italic font-serif">clientes no DF.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal text-slate-700 leading-relaxed">
            Mais de 3.000 clientes atendidos com avaliação 5.0 estrelas no Google.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white border border-amber-900/15 p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-5 hover:shadow-xl hover:border-gold/50 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1.5 text-amber-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-slate-600">5.0 / 5.0</span>
                </div>

                <Quote className="w-8 h-8 text-gold/40" />

                <p className="text-sm sm:text-base font-normal text-slate-800 leading-relaxed italic">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-bold text-navy">{item.name}</h4>
                  <p className="text-xs text-slate-600 font-medium">{item.location}</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Google
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
