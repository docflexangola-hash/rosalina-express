"use client";

import { useState } from "react";
import { MaterialIcon } from "@/components/MaterialIcon";
import { contatoContent } from "@/content/contato";

export function FormContacto() {
  const { form } = contatoContent;
  const [enviado, setEnviado] = useState(false);
  const [formData, setFormData] = useState({
    assunto: form.subjectOptions[0],
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error ?? "Erro ao enviar mensagem. Tente novamente.");
        return;
      }
      setEnviado(true);
    } catch {
      setError("Erro de rede. Verifique a sua ligação e tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-surface border-b-4 border-on-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {enviado ? (
          <div className="bg-surface-container-lowest border-2 border-on-surface shadow-[6px_6px_0px_0px_#0c1a3b] p-10 text-center">
            <MaterialIcon name="check_circle" className="text-primary-container text-5xl" />
            <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface mt-4">
              {form.successTitle}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-3">
              {form.successText}
            </p>
            <button
              type="button"
              onClick={() => {
                setEnviado(false);
                setFormData({
                  assunto: form.subjectOptions[0],
                  nome: "",
                  email: "",
                  telefone: "",
                  mensagem: "",
                });
              }}
              className="mt-6 bg-primary-container text-on-primary font-headline-sm text-headline-sm uppercase px-8 py-4 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0c1a3b] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all inline-flex items-center gap-3"
            >
              <span>{form.sendAnother}</span>
              <MaterialIcon name="refresh" />
            </button>
          </div>
        ) : (
          <div className="bg-surface-container-lowest border-2 border-on-surface shadow-[6px_6px_0px_0px_#0c1a3b]">
            <div className="bg-tertiary text-on-tertiary border-b-2 border-on-surface px-6 py-4 flex items-center gap-2 font-label-code text-label-code uppercase">
              <MaterialIcon name="mail" className="text-sm" />
              {form.badge}
            </div>
            <div className="p-6 md:p-8">
              <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface mb-6">
                {form.title}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="assunto" className="block font-label-code text-label-code uppercase text-on-surface-variant mb-2">
                    {form.subjectLabel}
                  </label>
                  <select
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    className="w-full bg-surface-container-lowest border-2 border-on-surface px-4 py-3 font-body-md text-body-md text-on-surface shadow-[2px_2px_0px_0px_#0c1a3b] focus:outline-none"
                  >
                    {form.subjectOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="nome" className="block font-label-code text-label-code uppercase text-on-surface-variant mb-2">
                      {form.nameLabel}
                    </label>
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full bg-surface-container-lowest border-2 border-on-surface px-4 py-3 font-body-md text-body-md text-on-surface shadow-[2px_2px_0px_0px_#0c1a3b] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-label-code text-label-code uppercase text-on-surface-variant mb-2">
                      {form.emailLabel}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-surface-container-lowest border-2 border-on-surface px-4 py-3 font-body-md text-body-md text-on-surface shadow-[2px_2px_0px_0px_#0c1a3b] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="telefone" className="block font-label-code text-label-code uppercase text-on-surface-variant mb-2">
                    {form.phoneLabel}
                  </label>
                  <input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full bg-surface-container-lowest border-2 border-on-surface px-4 py-3 font-body-md text-body-md text-on-surface shadow-[2px_2px_0px_0px_#0c1a3b] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="mensagem" className="block font-label-code text-label-code uppercase text-on-surface-variant mb-2">
                    {form.messageLabel}
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={5}
                    required
                    value={formData.mensagem}
                    onChange={handleChange}
                    className="w-full bg-surface-container-lowest border-2 border-on-surface px-4 py-3 font-body-md text-body-md text-on-surface shadow-[2px_2px_0px_0px_#0c1a3b] focus:outline-none resize-none"
                  />
                </div>

                {error && (
                  <div className="bg-error-container text-on-error-container border-2 border-on-surface p-3 font-body-sm text-body-sm flex items-center gap-2">
                    <MaterialIcon name="error" className="text-base flex-shrink-0" />
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary-container text-on-primary font-headline-sm text-headline-sm uppercase px-8 py-4 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0c1a3b] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all inline-flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{loading ? "ENVIANDO..." : form.submit}</span>
                  {loading ? (
                    <MaterialIcon name="hourglass_top" />
                  ) : (
                    <MaterialIcon name="send" />
                  )}
                </button>
                <p className="font-body-sm text-body-sm text-on-surface-variant text-center">
                  {form.privacy}
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}