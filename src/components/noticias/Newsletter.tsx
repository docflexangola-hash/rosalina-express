"use client";

import { useState } from "react";
import { MaterialIcon } from "@/components/MaterialIcon";
import { noticiasContent } from "@/content/noticias";

export function Newsletter() {
  const { newsletter } = noticiasContent;
  const [email, setEmail] = useState("");
  const [segments, setSegments] = useState([
    { label: newsletter.segments[0].label, checked: true },
    { label: newsletter.segments[1].label, checked: true },
    { label: newsletter.segments[2].label, checked: false },
  ]);
  const [enviado, setEnviado] = useState(false);

  const toggleSegment = (i: number) => {
    setSegments((prev) =>
      prev.map((s, idx) => (idx === i ? { ...s, checked: !s.checked } : s)),
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setEnviado(true);
    }
  };

  return (
    <section className="w-full bg-surface-container-low border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {enviado ? (
          <div className="bg-tertiary border-2 border-on-surface shadow-[6px_6px_0px_0px_#0c1a3b] p-10 text-center">
            <MaterialIcon name="check_circle" className="text-primary-fixed text-5xl" />
            <h2 className="font-headline-lg text-headline-lg uppercase text-white mt-4">
              {newsletter.successTitle}
            </h2>
            <p className="font-body-md text-body-md text-on-tertiary mt-3">
              {newsletter.successText}
            </p>
            <button
              type="button"
              onClick={() => {
                setEnviado(false);
                setEmail("");
                setSegments([
                  { label: newsletter.segments[0].label, checked: true },
                  { label: newsletter.segments[1].label, checked: true },
                  { label: newsletter.segments[2].label, checked: false },
                ]);
              }}
              className="mt-6 bg-primary-container text-on-primary font-headline-sm text-headline-sm uppercase px-8 py-4 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0c1a3b] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all inline-flex items-center gap-3"
            >
              <span>Subscrever outro</span>
              <MaterialIcon name="refresh" />
            </button>
          </div>
        ) : (
          <div className="bg-tertiary border-2 border-on-surface shadow-[6px_6px_0px_0px_#0c1a3b]">
            <div className="bg-on-background text-white px-6 py-4 border-b-2 border-on-surface flex items-center gap-2">
              <MaterialIcon name="mark_email_unread" className="text-sm" />
              <span className="font-label-code text-label-code uppercase">
                {newsletter.badge}
              </span>
            </div>
            <div className="p-8 flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="font-headline-lg text-headline-lg uppercase text-white">
                  {newsletter.title}
                </h2>
                <p className="font-body-md text-body-md text-on-tertiary leading-relaxed mt-3">
                  {newsletter.paragraph}
                </p>
              </div>
              <div className="flex-1 w-full">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={newsletter.placeholder}
                      required
                      className="flex-1 bg-surface-container-lowest border-2 border-on-surface px-4 py-3 font-body-md text-body-md text-on-surface shadow-[2px_2px_0px_0px_#0c1a3b] focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="bg-primary-container text-on-primary font-headline-sm text-headline-sm uppercase px-8 py-4 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0c1a3b] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all inline-flex items-center justify-center gap-2"
                    >
                      <MaterialIcon name="send" className="text-sm" />
                      <span>{newsletter.btn}</span>
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {segments.map((s, i) => (
                      <label key={s.label} className="flex items-center gap-2 text-on-tertiary font-body-sm text-body-sm">
                        <input
                          type="checkbox"
                          checked={s.checked}
                          onChange={() => toggleSegment(i)}
                          className="w-4 h-4"
                        />
                        {s.label}
                      </label>
                    ))}
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}