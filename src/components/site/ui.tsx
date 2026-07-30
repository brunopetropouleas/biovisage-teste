import { useEffect, useRef, useState, type ReactNode } from "react";

export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px", ...options },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView };
}

export function Reveal({
  children,
  delay = 0,
  variant = "rise",
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  variant?: "rise" | "bloom";
  as?: "div" | "li" | "article" | "figure" | "section";
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      data-variant={variant}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={`reveal ${inView ? "is-in" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="gold-line" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}

/** Curva orgânica que "flui" de uma seção para a próxima. */
export function VeilDivider({ to }: { to: "light" | "dark" }) {
  const fill = to === "light" ? "var(--tone-light-bg)" : "var(--tone-dark-bg)";
  return (
    <div aria-hidden="true" className="pointer-events-none -mb-px block leading-none">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-[56px] w-full sm:h-[104px]"
      >
        <path
          d="M0,58 C210,2 396,110 690,86 C948,64 1174,6 1440,40 L1440,121 L0,121 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

export function Section({
  id,
  children,
  tone = "dark",
  veilTo,
  className = "",
  marble = false,
}: {
  id?: string;
  children: ReactNode;
  tone?: "dark" | "light";
  veilTo?: "light" | "dark";
  className?: string;
  marble?: boolean;
}) {
  return (
    <div className={tone === "light" ? "tone-light" : "tone-dark"}>
      <section
        id={id}
        className={`px-5 py-20 sm:px-8 md:py-28 ${marble ? "marble" : ""} ${className}`}
      >
        <div className="mx-auto w-full max-w-6xl">{children}</div>
      </section>
      {veilTo ? <VeilDivider to={veilTo} /> : null}
    </div>
  );
}

export function Monogram({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-serif text-primary leading-none tracking-[-0.08em] ${className}`}
      aria-hidden="true"
    >
      BV
    </span>
  );
}

export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.87 9.87 0 004.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2z" />
    </svg>
  );
}

export function GoogleIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.5 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47a5.54 5.54 0 01-2.4 3.64v3h3.88c2.27-2.09 3.55-5.17 3.55-8.88z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.08 7.95-2.91l-3.88-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.28v3.09A12 12 0 0012 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29a7.2 7.2 0 010-4.58V6.62H1.28a12 12 0 000 10.76l3.99-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.44-3.44C17.95 1.19 15.24 0 12 0A12 12 0 001.28 6.62l3.99 3.09C6.22 6.86 8.87 4.75 12 4.75z"
      />
    </svg>
  );
}
