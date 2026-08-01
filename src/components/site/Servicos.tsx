import {
  Sparkles,
  HandHeart,
  Syringe,
  Scan,
  Zap,
  ShieldCheck,
  Waves,
} from "lucide-react";
import fonte from "@/assets/Screenshot_6.jpg";
import { SERVICES, WHATSAPP } from "@/lib/site";
import { Eyebrow, Reveal, Section } from "./ui";

const ICONS = {
  sparkles: Sparkles,
  hands: HandHeart,
  syringe: Syringe,
  face: Scan,
  laser: Zap,
  shield: ShieldCheck,
  wave: Waves,
} as const;

export function Servicos() {
  return (
    <Section id="servicos" tone="light" veilTo="dark">
      <Reveal>
        <Eyebrow>Serviços</Eyebrow>
        <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
          Cuidado personalizado, do início ao fim.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => {
          const Icon = ICONS[s.icon];
          return (
            <Reveal key={s.name} delay={i * 80} as="article">
              <article className="surface group h-full rounded-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_18px_40px_-24px_oklch(0.6_0.107_80/70%)]">
                <Icon
                  className="h-6 w-6 fill-transparent text-primary transition-colors duration-300 group-hover:fill-primary/30"
                  strokeWidth={1.2}
                  aria-hidden="true"
                />
                <h3 className="mt-5 font-serif text-2xl text-foreground">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={120}>
        <div className="relative mt-14 md:mt-20">
          <div className="veil-shape-alt overflow-hidden border border-primary/30 md:w-[62%]">
            <img
              src={fonte}
              alt="Protocolo Fonte da Juventude com a Dra. Suellen Paiva"
              loading="lazy"
              width={744}
              height={930}
              className="h-[320px] w-full object-cover sm:h-[440px] md:h-[520px]"
            />
          </div>

          <div className="marble relative z-10 -mt-14 ml-4 max-w-md rounded-sm border border-primary/35 p-7 shadow-[0_30px_60px_-35px_oklch(0.3_0.08_315/60%)] sm:p-9 md:absolute md:right-0 md:bottom-10 md:mt-0 md:ml-0">
            <span className="eyebrow">Protocolo em destaque</span>
            <h3 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
              Protocolo <span className="script block text-4xl sm:text-5xl">Fonte da Juventude</span>
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Construído de acordo com a sua idade, sua pele e sua necessidade.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-lift mt-7 inline-flex rounded-sm border border-primary/50 px-6 py-3 text-xs font-medium tracking-[0.16em] text-primary uppercase hover:bg-primary/10"
            >
              Saber mais
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
