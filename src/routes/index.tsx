import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { AboutSection } from "@/components/site/AboutSection";
import { ProductsSection, type ProductItem } from "@/components/site/ProductsSection";
import { ServicesSection } from "@/components/site/ServicesSection";
import { ProcessSection } from "@/components/site/ProcessSection";
import { DifferentialsSection } from "@/components/site/DifferentialsSection";
import { PortfolioSection } from "@/components/site/PortfolioSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { LocationSection } from "@/components/site/LocationSection";
import { Footer } from "@/components/site/Footer";
import { ProductModal } from "@/components/site/ProductModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LG Persianas | Persianas e Cortinas Sob Medida em Brasília / DF" },
      {
        name: "description",
        content:
          "Persianas, cortinas, box e vidros sob medida em Brasília/DF. Instalação, manutenção e lavagem profissional com mais de 22 anos de experiência. Orçamento gratuito no local.",
      },
      { property: "og:title", content: "LG Persianas | Sob Medida em Brasília / DF" },
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
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  return (
    <main className="bg-navy min-h-screen text-cream font-sans selection:bg-gold selection:text-navy">
      {/* Header & Navbar */}
      <Navbar />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Quem Somos Section (Image 1 Mockup) */}
      <AboutSection />

      {/* 3. Nossos Produtos Section (Image 2 Mockup) */}
      <ProductsSection onSelectProduct={(prod) => setSelectedProduct(prod)} />

      {/* 4. Nossos Serviços Section (Image 3 Mockup) */}
      <ServicesSection />

      {/* 5. Como Funciona Section (Image 4 Mockup) */}
      <ProcessSection />

      {/* 6. Diferenciais Section (Image 5 Mockup) */}
      <DifferentialsSection />

      {/* 7. Portfólio de Projetos no DF */}
      <PortfolioSection />

      {/* 8. Depoimentos dos Clientes */}
      <TestimonialsSection />

      {/* 9. Cobertura no DF & FAQ */}
      <LocationSection />

      {/* 10. Rodapé Completo */}
      <Footer />

      {/* Interactive Product Details Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </main>
  );
}
