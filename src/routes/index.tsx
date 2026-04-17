import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-solar.jpg";
import { ArrowRight } from "lucide-react";
import { StatsGrid } from "@/components/sections/StatsGrid";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { QuoteBlock } from "@/components/sections/QuoteBlock";
import { CTASection } from "@/components/sections/CTASection";
import { services } from "@/data/services";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stefan Maaß Solaranlagen SMS – Gewerbliche Photovoltaik-Großanlagen" },
      {
        name: "description",
        content:
          "Ihr Partner für gewerbliche Photovoltaik – Planung, Installation, Wartung und Optimierung von Großanlagen. Seit über 20 Jahren aus Wesel.",
      },
      {
        property: "og:title",
        content: "Stefan Maaß Solaranlagen SMS – Gewerbliche Photovoltaik",
      },
      {
        property: "og:description",
        content:
          "Spezialist für PV-Großanlagen auf Logistikhallen, Autohäusern, Gewerbeparks und Garagenanlagen.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: Index,
});

function Index() {
  const highlights = [...projects].sort((a, b) => b.kwp - a.kwp).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Drohnenaufnahme einer großflächigen Photovoltaikanlage auf einer Logistikhalle"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-4 py-24 md:px-6 md:py-32">
          <div className="max-w-2xl text-primary-foreground">
            <span className="inline-flex items-center rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
              Gewerbliche Photovoltaik · seit 2009
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Ihr Partner für gewerbliche Photovoltaikanlagen.
            </h1>
            <p className="mt-5 text-lg text-primary-foreground/90 md:text-xl">
              Planung, Installation, Wartung und Optimierung von Großanlagen –
              seit über 20 Jahren.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent/90"
              >
                Projekt anfragen <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                to="/referenzen"
                className="inline-flex items-center justify-center rounded-xl border border-primary-foreground/40 bg-primary-foreground/5 px-5 py-3 text-sm font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/15"
              >
                Referenzen ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Investition */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-eco">
              Profitable Investition
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Regenerative Energie mit kalkulierbarer Rendite.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Eigenverbrauch senkt Ihre Stromkosten dauerhaft und macht Ihren
              Betrieb unabhängiger von Marktpreisen. Wir planen, dimensionieren
              und betreiben Ihre Anlage so, dass technische Lebensdauer und
              wirtschaftliche Erträge im Einklang stehen.
            </p>
          </div>
          <StatsGrid
            stats={[
              { value: "300+", label: "realisierte Projekte" },
              { value: "50+ MWp", label: "installierte Gesamtleistung" },
              { value: "250.000+", label: "verbaute Module" },
            ]}
          />
        </div>
      </section>

      {/* Quote */}
      <QuoteBlock
        quote="Da die Energiegewinnung tagsüber erfolgt, partizipieren vor allem Unternehmen von der solaren Eigenversorgung."
        author="Stefan Maaß"
        role="Geschäftsführer"
      />

      {/* Leistungen */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 md:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Unsere Leistungen
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Von der ersten Standortanalyse bis zur Betriebsführung – wir
              decken den gesamten Lebenszyklus Ihrer PV-Anlage ab.
            </p>
          </div>
          <Link
            to="/leistungen"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            Alle Leistungen <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard
              key={s.slug}
              title={s.title}
              description={s.short}
              icon={s.icon}
              href="/leistungen"
              hash={s.slug}
              compact
            />
          ))}
        </div>
      </section>

      {/* Highlight Referenzen */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Ausgewählte Referenzen
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Eine Auswahl unserer größten Projekte – vom Logistikdach bis
                zum Gewerbepark.
              </p>
            </div>
            <Link
              to="/referenzen"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
            >
              Alle Projekte <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((p) => (
              <ProjectCard key={`${p.name}-${p.location}-${p.year}`} project={p} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
