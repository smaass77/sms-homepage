import { createFileRoute } from "@tanstack/react-router";
import { Calendar } from "lucide-react";
import { news } from "@/data/news";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News – Stefan Maaß Solaranlagen SMS" },
      {
        name: "description",
        content:
          "Aktuelle Meldungen aus dem Unternehmen: Projekte, Technologie, Förderprogramme und Nachhaltigkeit.",
      },
      { property: "og:title", content: "News – Stefan Maaß Solaranlagen" },
      {
        property: "og:description",
        content: "Neuigkeiten zu Projekten, Technik und Nachhaltigkeit.",
      },
    ],
  }),
  component: NewsPage,
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function NewsPage() {
  return (
    <>
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <span className="text-sm font-semibold uppercase tracking-wider text-eco">
            News
          </span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Aktuelles aus dem Unternehmen.
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Projekte, Technik, Förderprogramme – und unser Weg zur
            elektrifizierten Firmenflotte.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {news.map((article) => (
            <article
              key={article.slug}
              className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm"
            >
              <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" aria-hidden />
                <time dateTime={article.date}>{formatDate(article.date)}</time>
              </div>
              <h2 className="mt-3 text-xl font-semibold text-foreground">
                {article.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {article.content}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
