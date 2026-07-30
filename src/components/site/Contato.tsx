import { useState } from "react";
import { SERVICES, WHATSAPP } from "@/lib/site";
import { Eyebrow, Reveal, Section, WhatsAppIcon } from "./ui";

function maskPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

function FloatField({
  id,
  label,
  value,
  children,
}: {
  id: string;
  label: string;
  value: string;
  children: React.ReactNode;
}) {
  const floated = value.length > 0;
  return (
    <div className="float-field relative">
      <label
        htmlFor={id}
        className={`float-label pointer-events-none absolute left-0 origin-left tracking-[0.2em] uppercase ${
          floated
            ? "top-0 text-[0.6rem] text-primary"
            : "top-6 text-[0.7rem] text-muted-foreground"
        }`}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export function Contato() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [servico, setServico] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const texto = [
      "Olá! Gostaria de agendar um horário na Biovisage.",
      `Nome: ${nome.trim()}`,
      `Telefone: ${telefone.trim()}`,
      servico ? `Serviço de interesse: ${servico}` : null,
      mensagem.trim() ? `Mensagem: ${mensagem.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`${WHATSAPP}?text=${encodeURIComponent(texto)}`, "_blank", "noopener");
  }

  const field =
    "w-full border-0 border-b border-input bg-transparent px-0 pt-6 pb-2 text-sm text-foreground outline-none transition-[border-color,box-shadow] duration-300 focus:border-primary focus:shadow-[0_1px_0_0_var(--primary)]";

  return (
    <Section id="contato" tone="dark">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Eyebrow>Agendamento</Eyebrow>
          </div>
          <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
            Vamos cuidar da sua beleza, do seu jeito.
          </h2>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-lift mt-8 inline-flex items-center justify-center gap-3 rounded-sm bg-primary px-8 py-4 text-xs font-medium tracking-[0.16em] text-primary-foreground uppercase sm:px-12 sm:py-5 sm:text-sm"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Agendar no WhatsApp
          </a>
        </div>
      </Reveal>

      <Reveal delay={140}>
        <form
          onSubmit={handleSubmit}
          className="surface mx-auto mt-12 max-w-2xl rounded-sm p-6 sm:p-8"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <FloatField id="nome" label="Nome" value={nome}>
              <input
                id="nome"
                required
                maxLength={100}
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className={field}
              />
            </FloatField>
            <FloatField id="telefone" label="Telefone" value={telefone}>
              <input
                id="telefone"
                required
                maxLength={16}
                inputMode="tel"
                value={telefone}
                onChange={(e) => setTelefone(maskPhone(e.target.value))}
                className={field}
              />
            </FloatField>
          </div>

          <div className="mt-6">
            <FloatField id="servico" label="Serviço de interesse" value={servico || " "}>
              <select
                id="servico"
                value={servico}
                onChange={(e) => setServico(e.target.value)}
                className={`${field} text-muted-foreground`}
              >
                <option value="">Selecione um serviço</option>
                {SERVICES.map((s) => (
                  <option key={s.name} value={s.name}>
                    {s.name}
                  </option>
                ))}
                <option value="Protocolo Fonte da Juventude">Protocolo Fonte da Juventude</option>
              </select>
            </FloatField>
          </div>

          <div className="mt-6">
            <FloatField id="mensagem" label="Mensagem" value={mensagem}>
              <textarea
                id="mensagem"
                rows={4}
                maxLength={1000}
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                className={`${field} resize-none`}
              />
            </FloatField>
          </div>

          <button
            type="submit"
            className="cta-lift mt-8 w-full rounded-sm bg-primary px-6 py-4 text-xs font-medium tracking-[0.16em] text-primary-foreground uppercase"
          >
            Enviar
          </button>
          <p className="mt-3 text-center text-[0.7rem] text-muted-foreground">
            Ao enviar, você será direcionada ao WhatsApp com os dados preenchidos.
          </p>
        </form>
      </Reveal>
    </Section>
  );
}
