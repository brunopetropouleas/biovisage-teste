import { Eyebrow, Section } from "./ui";

export function Metodo() {
  return (
    <div className="marble border-y border-border/60">
      <Section id="metodo">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <Eyebrow>Nossa filosofia</Eyebrow>
          </div>

          <h2 className="mt-8 font-serif text-4xl leading-tight sm:text-6xl">
            <span className="block text-muted-foreground/70 line-through decoration-primary/70 decoration-1">
              Harmonização
            </span>
            <span className="mt-2 block text-primary">Método Única</span>
          </h2>

          <p className="mt-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Envelhecer é natural, mas o cuidado precisa ser individual. Cada protocolo é
            construído de acordo com a sua idade, a sua pele e a sua necessidade — nada de
            fórmulas iguais para rostos diferentes. Cada detalhe é pensado para realçar o melhor
            de você, em cada fase da vida.
          </p>

          <p className="script mt-8 text-3xl sm:text-4xl">Método Única</p>
        </div>
      </Section>
    </div>
  );
}
