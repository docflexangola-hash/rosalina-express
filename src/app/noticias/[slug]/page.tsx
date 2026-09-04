import { Metadata } from "next";
import Link from "next/link";
import { MaterialIcon } from "@/components/MaterialIcon";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title: `${title} | Rosalina Express`,
    description: "Comunicado oficial do Grupo Rosalina Express.",
  };
}

export default async function NoticiaPage({ params }: Props) {
  const { slug } = await params;

  return (
    <section className="w-full bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <nav className="flex flex-wrap items-center gap-2 font-label-code text-label-code uppercase text-on-surface-variant mb-6">
          <Link href="/" className="flex items-center gap-2 hover:text-primary-container">
            <MaterialIcon name="home" className="text-sm" />
            Início
          </Link>
          <MaterialIcon name="chevron_right" className="text-xs" />
          <Link href="/noticias" className="flex items-center gap-2 hover:text-primary-container">
            Sala de Imprensa
          </Link>
          <MaterialIcon name="chevron_right" className="text-xs" />
          <span className="text-on-surface">{slug.replace(/-/g, " ")}</span>
        </nav>

        <div className="bg-tertiary border-2 border-on-surface shadow-[8px_8px_0px_0px_#0c1a3b] p-8 md:p-12">
          <span className="inline-flex items-center gap-2 bg-primary-container border-2 border-on-surface px-3 py-1 font-label-code text-label-code uppercase text-on-primary mb-4">
            <MaterialIcon name="campaign" className="text-xs" />
            COMUNICADO OFICIAL
          </span>
          <h1 className="font-display-hero text-display-hero uppercase text-white leading-none tracking-tight">
            {slug
              .replace(/-/g, " ")
              .replace(/\b\w/g, (c) => c.toUpperCase())}
          </h1>
          <p className="font-body-md text-body-md text-on-tertiary mt-4 leading-relaxed">
            Comunicado do Grupo Rosalina Express referente a: {slug.replace(/-/g, " ")}.
          </p>
          <div className="mt-8 pt-8 border-t-2 border-secondary">
            <p className="font-body-lg text-body-lg text-on-tertiary leading-relaxed">
              Este comunicado será publicado em breve. Para mais informações, contacte a nossa
              assessoria de imprensa em{" "}
              <a
                href="mailto:imprensa@rosalinaexpress.ao"
                className="text-primary-fixed underline"
              >
                imprensa@rosalinaexpress.ao
              </a>{" "}
              ou ligue para{" "}
              <a href="tel:+244923521224" className="text-primary-fixed underline">
                +244 923 521 224
              </a>
              .
            </p>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/noticias"
            className="inline-flex items-center gap-3 bg-surface-container-lowest text-on-surface font-headline-sm text-headline-sm uppercase px-8 py-4 border-2 border-on-surface shadow-[4px_4px_0px_0px_#0c1a3b] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0c1a3b] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
          >
            <MaterialIcon name="arrow_back" />
            <span>Voltar à Sala de Imprensa</span>
          </Link>
        </div>
      </div>
    </section>
  );
}