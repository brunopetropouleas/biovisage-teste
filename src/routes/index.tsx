import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Sobre } from "@/components/site/Sobre";
import { Metodo } from "@/components/site/Metodo";
import { Servicos } from "@/components/site/Servicos";
import { Espaco } from "@/components/site/Espaco";
import { Depoimentos } from "@/components/site/Depoimentos";
import { Contato } from "@/components/site/Contato";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

const title = "BIOVISAGE — Estética e Beleza Facial em Guaxupé, MG";
const description =
  "Clínica de estética facial em Guaxupé (MG) com a Dra. Suellen Paiva. Método Única: protocolos personalizados de harmonização, botox e rejuvenescimento.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Metodo />
        <Servicos />
        <Ambiente />
        <Depoimentos />
        <Localizacao />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
