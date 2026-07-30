import fachada from "@/assets/unnamed_4.asset.json";
import { WHATSAPP } from "@/lib/site";
import { WhatsAppIcon } from "./ui";

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16">
      <img
        src={fachada.url}
        alt="Fachada da clínica Biovisage em Guaxupé, com porta roxa e logo em relevo"
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20"
        width={680}
        height={510}
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,oklch(0.19_0.062_315/85%),oklch(0.19_0.062_315/92%)_55%,oklch(0.19_0.062_315))]" />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="gold-line" />
            <span className="eyebrow">Estética e Beleza Facial · Guaxupé, MG</span>
          </div>

          <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl">
            Sua beleza,
            <br />
            de forma única.
          </h1>

          <p className="script mt-6 text-3xl leading-tight sm:text-4xl">
            "A verdadeira beleza não se copia. Ela se revela."
          </p>

          <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
            Protocolos personalizados que respeitam sua individualidade — sem moldes prontos,
            sem padrões artificiais.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-7 py-4 text-xs font-medium tracking-[0.16em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Agendar no WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-sm border border-primary/50 px-7 py-4 text-xs font-medium tracking-[0.16em] text-primary uppercase transition-colors hover:bg-primary/10"
            >
              Conhecer os serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
