import { useState } from "react";
import { SERVICES, WHATSAPP } from "@/lib/site";
import { Eyebrow, Section, WhatsAppIcon } from "./ui";

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
    "w-full rounded-sm border border-input bg-background/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary";

  return (
    <Section id="contato">
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
          className="mt-8 inline-flex items-center justify-center gap-3 rounded-sm bg-primary px-8 py-4 text-xs font-medium tracking-[0.16em] text-primary-foreground uppercase transition-opacity hover:opacity-90 sm:px-12 sm:py-5 sm:text-sm"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Agendar no WhatsApp
        </a>
      </div>

      <form onSubmit={handleSubmit} className="surface mx-auto mt-12 max-w-2xl rounded-sm p-6 sm:p-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="nome" className="mb-2 block text-[0.68rem] tracking-[0.2em] text-muted-foreground uppercase">
              Nome
            </label>
            <input
              id="nome"
              required
              maxLength={100}
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className={field}
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label htmlFor="telefone" className="mb-2 block text-[0.68rem] tracking-[0.2em] text-muted-foreground uppercase">
              Telefone
            </label>
            <input
              id="telefone"
              required
              maxLength={20}
              inputMode="tel"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              className={field}
              placeholder="(35) 90000-0000"
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="servico" className="mb-2 block text-[0.68rem] tracking-[0.2em] text-muted-foreground uppercase">
            Serviço de interesse
          </label>
          <select
            id="servico"
            value={servico}
            onChange={(e) => setServico(e.target.value)}
            className={field}
          >
            <option value="">Selecione um serviço</option>
            {SERVICES.map((s) => (
              <option key={s.name} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Protocolo Fonte da Juventude">Protocolo Fonte da Juventude</option>
          </select>
        </div>

        <div className="mt-4">
          <label htmlFor="mensagem" className="mb-2 block text-[0.68rem] tracking-[0.2em] text-muted-foreground uppercase">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            rows={4}
            maxLength={1000}
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            className={`${field} resize-none`}
            placeholder="Conte um pouco sobre o que você procura"
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-sm bg-primary px-6 py-4 text-xs font-medium tracking-[0.16em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
        >
          Enviar
        </button>
        <p className="mt-3 text-center text-[0.7rem] text-muted-foreground">
          Ao enviar, você será direcionada ao WhatsApp com os dados preenchidos.
        </p>
      </form>
    </Section>
  );
}
