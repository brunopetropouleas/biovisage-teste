import { Eyebrow, Reveal, Section, useInView } from "./ui";

export function Metodo() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.35 });

  return (
    <Section id="metodo" tone="dark" veilTo="light" marble className="border-y border-border/50">
      <div ref={ref} className={`mx-auto max-w-3xl text-center ${inView ? "is-in" : ""}`}>
        <div className="flex justify-center">
          <Eyebrow>Nossa filosofia</Eyebrow>
        </div>

        <Reveal delay={80}>
          <p className="mt-8 text-sm tracking-[0.06em] text-muted-foreground sm:text-base">
            Aqui, harmonização não é sinônimo de padrão.
          </p>
        </Reveal>

        <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-6xl">
          <span className="relative inline-block text-muted-foreground/70">
            Harmonização
            <span
              aria-hidden="true"
              className="strike-line absolute inset-x-0 top-1/2 block h-px bg-primary/80"
            />
          </span>
          <span
            className={`mt-2 block text-primary transition-all duration-700 ${
              inView ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
            style={{ transitionDelay: "900ms" }}
          >
            Método Única
          </span>
        </h2>

        <Reveal delay={200}>
          <p className="mt-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Envelhecer é natural, mas o cuidado precisa ser individual. Cada protocolo é
            construído de acordo com a sua idade, a sua pele e a sua necessidade — nada de
            fórmulas iguais para rostos diferentes. Cada detalhe é pensado para realçar o melhor
            de você, em cada fase da vida.
          </p>

          <p className="script mt-8 text-3xl sm:text-4xl">Método Única</p>
        </Reveal>
      </div>
    </Section>
  );
}
