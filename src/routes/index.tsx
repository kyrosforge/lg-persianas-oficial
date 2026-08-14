import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { AboutSection } from "@/components/site/AboutSection";
import { ProductsSection, type ProductItem } from "@/components/site/ProductsSection";
import { ServicesSection } from "@/components/site/ServicesSection";
import { ProcessSection } from "@/components/site/ProcessSection";
import { PortfolioSection } from "@/components/site/PortfolioSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { LocationSection } from "@/components/site/LocationSection";
import { FinalCtaSection } from "@/components/site/FinalCtaSection";
import { Footer } from "@/components/site/Footer";
import { ProductModal } from "@/components/site/ProductModal";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

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

      {/* 2. Quem Somos + Diferenciais Section */}
      <AboutSection />

      {/* 3. Nossos Produtos Section */}
      <ProductsSection onSelectProduct={(prod) => setSelectedProduct(prod)} />

      {/* 4. Nossos Serviços Section */}
      <ServicesSection />

      {/* 5. Como Funciona Section */}
      <ProcessSection />

      {/* 6. Portfólio de Projetos no DF */}
      <PortfolioSection />

      {/* 7. Depoimentos dos Clientes */}
      <TestimonialsSection />

      {/* 8. Cobertura no DF & FAQ */}
      <LocationSection />

      {/* 9. Seção de CTA Final Premium */}
      <FinalCtaSection />

      {/* 10. Rodapé Completo */}
      <Footer />

      {/* Persistent Floating WhatsApp Button */}
      <WhatsAppFloat />

      {/* Interactive Product Details Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </main>
  );
}
