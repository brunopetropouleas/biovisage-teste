import { ADDRESS, FACEBOOK, INSTAGRAM, PHONE, WHATSAPP } from "@/lib/site";
import { Monogram } from "./ui";

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary/45 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        {children}
      </span>
      <span className="min-w-0 truncate">{label}</span>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="tone-dark border-t border-border/60 px-5 py-14 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <h3 className="eyebrow">Biovisage</h3>
          <div className="mt-5 flex items-center gap-3">
            <span className="marble grid h-11 w-11 shrink-0 place-items-center rounded-sm border border-border">
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

        <div>
          <h3 className="eyebrow">Contato</h3>
          <ul className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <li className="flex items-start gap-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true">
                <path d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <span>{ADDRESS}</span>
            </li>
            <li className="flex items-start gap-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true">
                <path d="M4 5c0-.6.4-1 1-1h2.5c.5 0 .9.3 1 .8l.8 3c.1.4 0 .8-.4 1l-1.6 1.2a13 13 0 005.7 5.7l1.2-1.6c.2-.3.6-.5 1-.4l3 .8c.5.1.8.5.8 1V19c0 .6-.4 1-1 1h-1C9.8 20 4 14.2 4 6.9V5z" />
              </svg>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-primary">
                {PHONE}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">Redes</h3>
          <div className="mt-5 flex flex-col gap-3">
            <SocialLink href={INSTAGRAM} label="@esteticabiovisage">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="h-5 w-5" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
              </svg>
            </SocialLink>
            <SocialLink href={FACEBOOK} label="esteticabiovisage">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5H16.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3z" />
              </svg>
            </SocialLink>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-border/40 pt-6 text-center text-[0.7rem] tracking-[0.14em] text-muted-foreground uppercase">
        © {new Date().getFullYear()} Biovisage · Guaxupé, MG
      </div>

      <div className="mx-auto mt-3 max-w-6xl text-center text-[0.6rem] tracking-[0.1em] text-muted-foreground opacity-60">
        Site produzido por{" "}
        <a
          href="https://instagram.com/opetropouleas"
          target="_blank"
          rel="noopener noreferrer"
          className="inline transition-opacity duration-200 hover:opacity-100 hover:underline underline-offset-2"
        >
          Capital Digital Solutions
        </a>
      </div>
    </footer>
  );
}
