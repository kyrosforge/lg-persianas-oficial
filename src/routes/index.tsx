import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LG Persianas | Persianas e Cortinas Sob Medida em Brasília" },
      {
        name: "description",
        content:
          "Persianas, cortinas, box e vidros sob medida em Brasília/DF. Instalação, manutenção e lavagem com mais de 22 anos de experiência. Orçamento gratuito.",
      },
      { property: "og:title", content: "LG Persianas | Sob Medida em Brasília" },
      {
        property: "og:description",
        content:
          "Persianas, cortinas, box e vidros sob medida no Distrito Federal. Mais de 22 anos de experiência e orçamento gratuito pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-navy">
      <Navbar />
      <Hero />
    </main>
  );
}
