import Link from "next/link";
import { MaterialIcon } from "@/components/MaterialIcon";
import { noticiasContent } from "@/content/noticias";

export function TabelaBoletins() {
  const { boletins } = noticiasContent;
  return (
    <section className="w-full bg-surface border-b-4 border-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="bg-tertiary text-on-tertiary border-b-2 border-on-surface px-6 py-4 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <MaterialIcon name="folder_special" className="text-sm" />
            {boletins.archiveLabel}
          </div>
          <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface">
            {boletins.title}
          </h2>
          <span className="font-label-code text-label-code uppercase text-primary-fixed">
            {boletins.seriesLabel}
          </span>
        </div>
        <div className="p-6">
          <table className="w-full font-body-sm text-body-sm text-on-surface">
            <thead>
              <tr className="bg-surface-container-low border-2 border-on-surface">
                {boletins.columns.map((c: string) => (
                  <th key={c} className="px-4 py-3 border-r-2 border-on-surface last:border-r-0">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {boletins.rows.map((r: { code: string; date: string; line: string; assunto: string; ficheiro: string }, i: number) => (
                <tr
                  key={i}
                  className="bg-surface-container-lowest border-t-2 border-on-surface hover:bg-surface-container"
                >
                  <td className="px-4 py-3 font-headline-sm text-headline-sm text-primary-container border-r-2 border-on-surface">
                    {r.code}
                  </td>
                  <td className="px-4 py-3 font-headline-sm text-headline-sm uppercase border-r-2 border-on-surface">
                    {r.date}
                  </td>
                  <td className="px-4 py-3 text-on-surface-variant border-r-2 border-on-surface">
                    {r.line}
                  </td>
                  <td className="px-4 py-3 text-on-surface-variant border-r-2 border-on-surface">
                    {r.assunto}
                  </td>
                  <td className="px-4 py-3 text-center border-r-2 border-on-surface">
                    <span className="font-label-code text-label-code uppercase text-primary-fixed">
                      {r.ficheiro}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/noticias/bol/${r.code.toLowerCase()}`}
                      className="bg-surface-container-lowest text-on-surface font-label-code text-label-code uppercase px-4 py-2 border-2 border-on-surface shadow-[2px_2px_0px_0px_#0c1a3b] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#0c1a3b] transition-all inline-flex items-center gap-2"
                    >
                      <MaterialIcon name="download" className="text-sm" />
                      Descarregar
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}