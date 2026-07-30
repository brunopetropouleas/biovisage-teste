import { ADDRESS, MAPS_URL } from "@/lib/site";
import { Eyebrow, Section } from "./ui";

export function Localizacao() {
  return (
    <Section id="localizacao">
      <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center md:gap-14">
        <div>
          <Eyebrow>Localização</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
            Visite a Biovisage.
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {ADDRESS}
          </p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-sm border border-primary/50 px-6 py-3.5 text-xs font-medium tracking-[0.16em] text-primary uppercase transition-colors hover:bg-primary/10"
          >
            Ver no Google Maps
          </a>
        </div>

        <div className="overflow-hidden rounded-sm border border-border">
          <iframe
            title="Mapa da localização da Biovisage em Guaxupé, MG"
            src="https://www.google.com/maps?q=Av.+Dr.+Jo%C3%A3o+Carlos,+251B+-+Centro,+Guaxup%C3%A9+-+MG,+37800-000&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[320px] w-full sm:h-[400px]"
          />
        </div>
      </div>
    </Section>
  );
}
