import fachada from "@/assets/unnamed_4.asset.json";
import { WHATSAPP } from "@/lib/site";
import { Reveal, VeilDivider, WhatsAppIcon } from "./ui";

export function Hero() {
  return (
    <div className="tone-dark">
      <section
        id="top"
        className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24 pb-24"
      >
        <img
          src={fachada.url}
          alt="Fachada da clínica Biovisage em Guaxupé, com porta roxa e logo em relevo"
          className="absolute inset-0 -z-30 h-full w-full object-cover opacity-20"
          width={680}
          height={510}
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,oklch(0.19_0.062_315/85%),oklch(0.19_0.062_315/92%)_55%,oklch(0.19_0.062_315))]" />
        <div
          aria-hidden="true"
          className="ambient-drift absolute inset-0 -z-10 bg-[radial-gradient(60%_55%_at_25%_30%,oklch(0.42_0.12_318/38%),transparent_65%),radial-gradient(50%_50%_at_80%_70%,oklch(0.5_0.09_60/16%),transparent_60%)]"
        />

        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="gold-line" />
                <span className="eyebrow">Estética e Beleza Facial · Guaxupé, MG</span>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl">
                Sua beleza,
                <br />
                de forma única.
              </h1>
            </Reveal>

            <Reveal delay={240}>
              <p className="script mt-6 text-3xl leading-tight sm:text-4xl">
                "A verdadeira beleza não se copia. Ela se revela."
              </p>
            </Reveal>

            <Reveal delay={340}>
              <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                Protocolos personalizados que respeitam sua individualidade — sem moldes prontos,
                sem padrões artificiais.
              </p>
            </Reveal>

            <Reveal delay={440}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-lift inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-7 py-4 text-xs font-medium tracking-[0.16em] text-primary-foreground uppercase"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Agendar no WhatsApp
                </a>
                <a
                  href="#servicos"
                  className="cta-lift inline-flex items-center justify-center rounded-sm border border-primary/50 px-7 py-4 text-xs font-medium tracking-[0.16em] text-primary uppercase hover:bg-primary/10"
                >
                  Conhecer os serviços
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <VeilDivider to="light" />
    </div>
  );
}
