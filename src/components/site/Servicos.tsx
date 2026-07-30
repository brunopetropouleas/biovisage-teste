import {
  Sparkles,
  HandHeart,
  Syringe,
  Scan,
  Zap,
  ShieldCheck,
  Waves,
} from "lucide-react";
import fonte from "@/assets/Screenshot_6.asset.json";
import { SERVICES, WHATSAPP } from "@/lib/site";
import { Eyebrow, Section } from "./ui";

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
    <Section id="servicos">
      <Eyebrow>Serviços</Eyebrow>
      <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
        Cuidado personalizado, do início ao fim.
      </h2>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => {
          const Icon = ICONS[s.icon];
          return (
            <article
              key={s.name}
              className="surface group rounded-sm p-6 transition-colors hover:border-primary/45"
            >
              <Icon className="h-6 w-6 text-primary" strokeWidth={1.2} aria-hidden="true" />
              <h3 className="mt-5 font-serif text-2xl text-foreground">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </article>
          );
        })}
      </div>

      <div className="marble mt-4 grid overflow-hidden rounded-sm border border-primary/30 md:grid-cols-[1.15fr_1fr]">
        <div className="p-8 sm:p-10">
          <span className="eyebrow">Destaque</span>
          <h3 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
            Protocolo <span className="script block text-5xl sm:text-6xl">Fonte da Juventude</span>
          </h3>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Construído de acordo com a sua idade, sua pele e sua necessidade.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-sm border border-primary/50 px-6 py-3 text-xs font-medium tracking-[0.16em] text-primary uppercase transition-colors hover:bg-primary/10"
          >
            Saber mais
          </a>
        </div>
        <img
          src={fonte.url}
          alt="Protocolo Fonte da Juventude com a Dra. Suellen Paiva"
          loading="lazy"
          width={744}
          height={930}
          className="h-full w-full object-cover"
        />
      </div>
    </Section>
  );
}
