import {
  Award,
  MapPin,
  Users,
  Wrench,
  Ruler,
  ShieldCheck,
  Shield,
  Building2,
  Headphones,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const DIFFERENTIALS = [
  {
    num: "01",
    icon: Award,
    title: "Mais de 22 anos de mercado",
    desc: "Duas décadas resolvendo projetos residenciais e corporativos — experiência que aparece em cada detalhe.",
  },
  {
    num: "02",
    icon: MapPin,
    title: "Atendimento em todo o DF",
    desc: "Visitamos, medimos e instalamos em todas as regiões administrativas, sem custo de deslocamento.",
  },
  {
    num: "03",
    icon: Users,
    title: "Equipe própria especializada",
    desc: "Nada de terceirizados: os mesmos profissionais treinados acompanham seu projeto do início ao fim.",
  },
  {
    num: "04",
    icon: Wrench,
    title: "Instalação profissional",
    desc: "Fixação correta, nivelamento perfeito e proteção integral do ambiente durante todo o trabalho.",
  },
  {
    num: "05",
    icon: Ruler,
    title: "Produtos sob medida",
    desc: "Cada peça é fabricada nas medidas exatas da sua janela — sem folgas, sem improvisos.",
  },
  {
    num: "06",
    icon: ShieldCheck,
    title: "Materiais premium",
    desc: "Tecidos, trilhos e mecanismos de fornecedores reconhecidos com durabilidade comprovada.",
  },
  {
    num: "07",
    icon: Shield,
    title: "Garantia de até 2 anos",
    desc: "Cobertura em produto e instalação, com assistência técnica rápida sempre que você precisar.",
  },
  {
    num: "08",
    icon: Building2,
    title: "Mais de 3.000 projetos",
    desc: "Apartamentos, casas, escritórios e clínicas: repertório para indicar a melhor solução para seu espaço.",
  },
  {
    num: "09",
    icon: Headphones,
    title: "Atendimento personalizado",
    desc: "Consultoria real: entendemos a rotina, a iluminação solar e o uso do espaço antes da recomendação.",
  },
  {
    num: "10",
    icon: CheckCircle2,
    title: "Acabamento impecável",
    desc: "Conferência peça por peça e revisão final no local: entregamos seu ambiente 100% pronto para uso.",
  },
];

export function DifferentialsSection() {
  return (
    <section id="diferenciais" className="relative bg-[#FAF7F2] py-20 lg:py-28 text-slate-800 overflow-hidden">
      {/* Delicate background blur accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-gold uppercase bg-gold/10 px-3.5 py-1.5 rounded-full border border-gold/20">
              <Sparkles className="w-3.5 h-3.5" /> DIFERENCIAIS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.12] text-navy">
              Por que escolher a <span className="text-gold italic">LG Persianas.</span>
            </h2>
            <p className="text-base sm:text-lg font-light text-slate-600 leading-relaxed max-w-2xl">
              Somos uma empresa de equipe própria, especializada em ambientes de alto padrão. Cada projeto é medido, fabricado e instalado com o mesmo rigor de acabamento em todo o DF.
            </p>
          </div>

          {/* Hero Counter Card */}
          <div className="lg:col-span-4 rounded-2xl bg-navy p-6 border border-gold/30 text-cream shadow-xl flex items-center gap-5">
            <div className="font-serif text-5xl font-bold text-gold shrink-0">
              22
            </div>
            <div className="space-y-0.5">
              <p className="text-sm font-semibold text-cream">anos de mercado</p>
              <p className="text-xs text-cream/70 font-light leading-snug">
                e mais de <strong className="text-gold font-medium">3.000 projetos entregues</strong> no Distrito Federal.
              </p>
            </div>
          </div>
        </div>

        {/* 10 Differentials Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {DIFFERENTIALS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="group relative rounded-2xl bg-white border border-amber-900/10 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-gold/50 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-6 h-6 rounded-full bg-gold/15 text-gold text-[11px] font-bold flex items-center justify-center border border-gold/30">
                      {item.num}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-navy text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-base font-semibold text-navy group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs font-light text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 rounded-2xl bg-navy p-6 sm:p-8 border border-gold/30 text-cream shadow-xl text-center">
          <p className="font-serif text-xl sm:text-2xl font-normal text-cream italic">
            &ldquo;Experiência, qualidade e cuidado em cada detalhe para entregar o <span className="text-gold">melhor resultado</span>.&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
}
