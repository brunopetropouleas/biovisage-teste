import fachada from "@/assets/unnamed_4.asset.json";
import banheira from "@/assets/unnamed_1.asset.json";
import espera from "@/assets/sala-espera.jpg";
import tratamento from "@/assets/sala-tratamento.jpg";
import { Eyebrow, Section } from "./ui";

const PHOTOS = [
  { src: fachada.url, alt: "Fachada da Biovisage com porta roxa e logo em relevo", span: "sm:col-span-2 sm:row-span-2" },
  { src: espera, alt: "Sala de espera com sofá de veludo roxo e iluminação dourada", span: "" },
  { src: tratamento, alt: "Sala de tratamento com parede de certificados", span: "" },
  { src: banheira.url, alt: "Banheira de hidromassagem com ambientação de cristais e aromas", span: "sm:col-span-2" },
];

export function Ambiente() {
  return (
    <Section id="ambiente">
      <Eyebrow>O ambiente</Eyebrow>
      <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
        Um espaço pensado para o seu bem-estar.
      </h2>

      <div className="mt-12 grid auto-rows-[180px] grid-cols-1 gap-3 sm:grid-cols-4 sm:auto-rows-[200px]">
        {PHOTOS.map((p) => (
          <figure
            key={p.alt}
            className={`overflow-hidden rounded-sm border border-border/70 ${p.span}`}
          >
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </figure>
        ))}
      </div>
    </Section>
  );
}
