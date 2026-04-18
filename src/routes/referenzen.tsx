import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { CTASection } from "@/components/sections/CTASection";
import { projects, projectStats, sizeClass, sizeClassLabel } from "@/data/projects";
import { cn } from "@/lib/utils";

const fmt = new Intl.NumberFormat("de-DE");

export const Route = createFileRoute("/referenzen")({
  head: () => ({
    meta: [
      { title: "Referenzen – Stefan Maaß Solaranlagen SMS" },
      {
        name: "description",
        content:
          "Über 50 realisierte gewerbliche PV-Großanlagen mit rund 8 MWp Gesamtleistung – filterbar nach Jahr und Größenklasse.",
      },
      { property: "og:title", content: "Referenzen – Gewerbliche PV-Projekte" },
      {
        property: "og:description",
        content:
          "Ausgewählte Photovoltaik-Großprojekte auf Logistikhallen, Garagenanlagen, Autohäusern und Gewerbeparks.",
      },
    ],
  }),
  component: ReferenzenPage,
});

type SizeKey = "alle" | "klein" | "mittel" | "gross";

function ReferenzenPage() {
  const years = useMemo(
    () => ["alle", ...Array.from(new Set(projects.map((p) => p.year))).sort().reverse()],
    [],
  );
  const [year, setYear] = useState<string>("alle");
  const [size, setSize] = useState<SizeKey>("alle");

  const filtered = useMemo(
    () =>
      projects.filter((p) => {
        const okYear = year === "alle" || p.year === year;
        const okSize = size === "alle" || sizeClass(p.kwp) === size;
        return okYear && okSize;
      }),
    [year, size],
  );

  const totalMwp = (projectStats.totalKwp / 1000).toFixed(2).replace(".", ",");
  const totalMwh = Math.round(projectStats.totalYieldKwh / 1000);

  return (
    <>
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <span className="text-sm font-semibold uppercase tracking-wider text-eco">
            Referenzen
          </span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Realisierte Projekte.
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Eine Auswahl unserer gewerblichen PV-Anlagen – von Logistikdach
            über Autohaus bis Gewerbepark.
          </p>

          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                realisierte Projekte
              </dt>
              <dd className="mt-1 text-2xl font-bold text-primary">300+</dd>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                installierte Gesamtleistung
              </dt>
              <dd className="mt-1 text-2xl font-bold text-primary">50+ MWp</dd>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                verbaute Module
              </dt>
              <dd className="mt-1 text-2xl font-bold text-primary">250.000+</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6">
        <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-5 shadow-sm md:flex-row md:items-center md:justify-between">
          <div>
            <label htmlFor="year-filter" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Jahr
            </label>
            <select
              id="year-filter"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="mt-1 rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {years.map((y) => (
                <option key={y} value={y}>
                  {y === "alle" ? "Alle Jahre" : y}
                </option>
              ))}
            </select>
          </div>

          <div>
            <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Größenklasse
            </span>
            <div className="mt-1 flex flex-wrap gap-2">
              {(
                [
                  ["alle", "Alle"],
                  ["klein", sizeClassLabel.klein],
                  ["mittel", sizeClassLabel.mittel],
                  ["gross", sizeClassLabel.gross],
                ] as const
              ).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSize(key)}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-sm transition-colors",
                    size === key
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-foreground/80 hover:bg-muted",
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
            von {projects.length} Projekten
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="mt-12 text-center text-muted-foreground">
            Keine Projekte für die aktuelle Filterauswahl.
          </p>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProjectCard key={`${p.name}-${p.location}-${p.year}`} project={p} />
            ))}
          </div>
        )}
      </section>

      <CTASection />
    </>
  );
}
