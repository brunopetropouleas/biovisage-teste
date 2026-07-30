import retrato from "@/assets/Screenshot_2.asset.json";
import { Eyebrow, Reveal, Section } from "./ui";

export function Sobre() {
  return (
    <Section id="sobre" tone="light" veilTo="dark">
      <div className="grid items-center gap-14 md:grid-cols-2 md:gap-16">
        <Reveal variant="bloom" className="relative">
          <div className="veil-shape absolute -inset-4 -z-10 border border-primary/40 sm:-inset-6" />
          <div className="veil-shape overflow-hidden border border-primary/30 shadow-[0_30px_70px_-40px_oklch(0.3_0.08_315/70%)] sm:-ml-6 sm:-mr-2">
            <img
              src={retrato.url}
              alt="Retrato da Dra. Suellen Paiva, especialista em estética facial"
              loading="lazy"
              width={752}
              height={940}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow>Sobre</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Na contramão da harmonização que padroniza.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              A Dra. Suellen Paiva criou protocolos que sussurram autenticidade — porque sua
              beleza não precisa gritar, precisa apenas ser você. Não é sobre te deixar igual a
              todo mundo: o Método Única nasceu para valorizar seus pontos fortes, seus ângulos e
              a sua história.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="surface mt-8 flex items-start gap-3 rounded-sm p-4">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                className="mt-0.5 h-6 w-6 shrink-0 text-primary"
                aria-hidden="true"
              >
                <circle cx="12" cy="9" r="6" />
                <path d="M9 14.5L7.5 22l4.5-2.5L16.5 22 15 14.5" />
              </svg>
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Formação e certificações em harmonização facial e estética avançada.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
