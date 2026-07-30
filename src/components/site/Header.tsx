import { useState } from "react";
import { NAV, WHATSAPP } from "@/lib/site";
import { Monogram, WhatsAppIcon } from "./ui";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-sm marble border border-border">
            <Monogram className="text-lg" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-serif text-lg tracking-[0.22em] text-foreground">
              BIOVISAGE
            </span>
            <span className="hidden text-[0.6rem] tracking-[0.3em] text-muted-foreground sm:block">
              ESTÉTICA E BELEZA FACIAL
            </span>
          </span>
        </a>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-6 xl:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs tracking-[0.14em] text-muted-foreground uppercase transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-sm bg-primary px-4 py-2.5 text-xs font-medium tracking-[0.12em] text-primary-foreground uppercase transition-opacity hover:opacity-90 sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Agendar
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={open}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-sm border border-border text-primary xl:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background px-5 pb-5 xl:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border/40 py-3 text-sm tracking-[0.14em] text-muted-foreground uppercase"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 rounded-sm bg-primary px-4 py-3 text-xs font-medium tracking-[0.12em] text-primary-foreground uppercase"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Agendar no WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
