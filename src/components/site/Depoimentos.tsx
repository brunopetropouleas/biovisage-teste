import { Eyebrow, Section } from "./ui";

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
  return (
    <div className="marble border-y border-border/60">
      <Section id="depoimentos">
        <Eyebrow>Depoimentos</Eyebrow>
        <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
          O que dizem sobre a Biovisage.
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="surface flex flex-col rounded-sm p-6 sm:p-8">
              <Stars />
              <blockquote className="mt-5 flex-1 font-serif text-xl leading-relaxed text-foreground/90 sm:text-2xl">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-primary/40 text-xs text-primary">
                  {r.name.charAt(0)}
                </span>
                <span className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                  {r.name}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </div>
  );
}
