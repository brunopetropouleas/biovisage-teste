import { useRef } from "react";
import { GOOGLE_REVIEWS } from "@/lib/site";
import { Eyebrow, GoogleIcon, Reveal, Section } from "./ui";

const REVIEWS = [
  {
    name: "Adriana Ruy",
    text: "A melhor profissional que já conheci! Super competente e de maneira extremamente ética. A gente sempre sai de lá com a autoestima nas alturas.",
  },
  {
    name: "Estela Silva Campos",
    text: "Atendimento excelente! Tudo feito com muito cuidado e trabalho maravilhoso!",
  },
  {
    name: "Fabiana Amorim",
    text: "Atendimento perfeito. Procedimento de alta qualidade, respeitando a sua beleza natural de forma única.",
  },
  {
    name: "Raíssa Ferraz",
    text: "A melhor clínica de Guaxupé e região, com excelente infraestrutura e biossegurança, atendimento personalizado, e é claro, com a melhor profissional da área.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-primary" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
          <path d="M12 2l2.9 6.26 6.85.78-5.1 4.63 1.4 6.73L12 17.02 5.95 20.4l1.4-6.73-5.1-4.63 6.85-.78z" />
        </svg>
      ))}
    </div>
  );
}

export function Depoimentos() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: "smooth" });
  };

  return (
    <Section id="depoimentos" tone="light" veilTo="dark" marble>
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
        <Reveal className="min-w-0">
          <Eyebrow>Depoimentos</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
            O que dizem sobre a Biovisage.
          </h2>
        </Reveal>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Depoimento anterior"
            className="grid h-11 w-11 place-items-center rounded-full border border-primary/45 text-primary transition-colors hover:bg-primary/10"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Próximo depoimento"
            className="grid h-11 w-11 place-items-center rounded-full border border-primary/45 text-primary transition-colors hover:bg-primary/10"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {REVIEWS.map((r, i) => (
          <Reveal
            key={r.name}
            delay={i * 80}
            className="w-[86%] shrink-0 snap-start sm:w-[58%] lg:w-[42%]"
          >
            <a
              href={GOOGLE_REVIEWS}
              target="_blank"
              rel="noopener noreferrer"
              className="surface relative flex h-full flex-col rounded-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_18px_40px_-24px_oklch(0.6_0.107_80/70%)] sm:p-8"
            >
              <GoogleIcon className="absolute top-5 right-5 h-4 w-4 opacity-70" />
              <Stars />
              <blockquote className="mt-5 flex-1 font-serif text-xl leading-relaxed text-foreground/90 sm:text-2xl">
                “{r.text}”
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-primary/40 text-xs text-primary">
                  {r.name.charAt(0)}
                </span>
                <span className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                  {r.name}
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <p className="text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
        Avaliações verificadas no Google · arraste para ver mais
      </p>
    </Section>
  );
}
