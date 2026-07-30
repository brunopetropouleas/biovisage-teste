import { useCallback, useEffect, useState } from "react";
import fachada from "@/assets/unnamed_4.asset.json";
import banheira from "@/assets/unnamed_1.asset.json";
import espera from "@/assets/sala-espera.jpg";
import tratamento from "@/assets/sala-tratamento.jpg";
import { ADDRESS, MAPS_URL } from "@/lib/site";
import { Eyebrow, Reveal, Section } from "./ui";

const PHOTOS = [
  {
    src: fachada.url,
    alt: "Fachada da Biovisage com porta roxa e logo em relevo",
    h: "h-[260px] sm:h-[420px]",
  },
  {
    src: espera,
    alt: "Sala de espera com sofá de veludo roxo e iluminação dourada",
    h: "h-[220px] sm:h-[300px]",
  },
  {
    src: tratamento,
    alt: "Sala de tratamento com parede de certificados",
    h: "h-[220px] sm:h-[340px]",
  },
  {
    src: banheira.url,
    alt: "Banheira de hidromassagem com ambientação de cristais e aromas",
    h: "h-[260px] sm:h-[380px]",
  },
];

export function Espaco() {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const move = useCallback(
    (dir: number) => setIndex((i) => (i === null ? i : (i + dir + PHOTOS.length) % PHOTOS.length)),
    [],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, close, move]);

  return (
    <Section id="ambiente" tone="dark" veilTo="light">
      <Reveal>
        <Eyebrow>O ambiente</Eyebrow>
        <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
          Um espaço pensado para o seu bem-estar.
        </h2>
      </Reveal>

      <div className="mt-12 columns-1 gap-3 sm:columns-2 lg:columns-3">
        {PHOTOS.map((p, i) => (
          <Reveal key={p.alt} delay={i * 90} className="mb-3 break-inside-avoid">
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ampliar foto: ${p.alt}`}
              className="block w-full overflow-hidden rounded-sm border border-border/70"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 hover:scale-105 ${p.h}`}
              />
            </button>
          </Reveal>
        ))}
      </div>

      <div id="localizacao" className="mt-16 grid gap-10 scroll-mt-24 md:grid-cols-[1fr_1.2fr] md:items-center md:gap-14">
        <Reveal>
          <Eyebrow>Localização</Eyebrow>
          <h3 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl">
            Visite a Biovisage.
          </h3>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {ADDRESS}
          </p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-lift mt-8 inline-flex rounded-sm border border-primary/50 px-6 py-3.5 text-xs font-medium tracking-[0.16em] text-primary uppercase hover:bg-primary/10"
          >
            Ver no Google Maps
          </a>
        </Reveal>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-sm border border-border">
            <iframe
              title="Mapa da localização da Biovisage em Guaxupé, MG"
              src="https://www.google.com/maps?q=Av.+Dr.+Jo%C3%A3o+Carlos,+251B+-+Centro,+Guaxup%C3%A9+-+MG,+37800-000&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full sm:h-[400px]"
            />
          </div>
        </Reveal>
      </div>

      {index !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Foto ampliada"
          onClick={close}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[oklch(0.12_0.04_315/92%)] p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Fechar"
            className="absolute top-4 right-4 grid h-11 w-11 place-items-center rounded-full border border-primary/40 text-primary"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              move(-1);
            }}
            aria-label="Foto anterior"
            className="absolute left-3 grid h-11 w-11 place-items-center rounded-full border border-primary/40 text-primary sm:left-8"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-h-[86vh] max-w-4xl">
            <img
              src={PHOTOS[index].src}
              alt={PHOTOS[index].alt}
              className="max-h-[76vh] w-auto rounded-sm object-contain"
            />
            <figcaption className="mt-3 text-center text-xs tracking-[0.14em] text-muted-foreground uppercase">
              {PHOTOS[index].alt}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              move(1);
            }}
            aria-label="Próxima foto"
            className="absolute right-3 grid h-11 w-11 place-items-center rounded-full border border-primary/40 text-primary sm:right-8"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </Section>
  );
}
