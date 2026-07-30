import { ADDRESS, FACEBOOK, INSTAGRAM, PHONE, WHATSAPP } from "@/lib/site";
import { Monogram } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-5 py-14 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-sm marble border border-border">
              <Monogram className="text-xl" />
            </span>
            <span>
              <span className="block font-serif text-lg tracking-[0.22em]">BIOVISAGE</span>
              <span className="block text-[0.6rem] tracking-[0.3em] text-muted-foreground">
                ESTÉTICA E BELEZA FACIAL
              </span>
            </span>
          </div>
          <p className="script mt-6 text-2xl">Sua beleza, de forma única.</p>
        </div>

        <div className="text-sm leading-relaxed text-muted-foreground">
          <h3 className="eyebrow">Contato</h3>
          <p className="mt-4">{ADDRESS}</p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="mt-3 block text-primary">
            {PHONE}
          </a>
        </div>

        <div>
          <h3 className="eyebrow">Redes</h3>
          <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">
              Instagram · @esteticabiovisage
            </a>
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">
              Facebook · esteticabiovisage
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-border/40 pt-6 text-center text-[0.7rem] tracking-[0.14em] text-muted-foreground uppercase">
        © {new Date().getFullYear()} Biovisage · Guaxupé, MG
      </div>
    </footer>
  );
}
