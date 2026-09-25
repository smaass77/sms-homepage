import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-star-piping.jpg";
import heroImageSmall from "@/assets/hero-star-piping-1024.jpg";
import { ArrowRight, MapPin } from "lucide-react";
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
      { property: "og:image", content: `https://maass-solar.de${heroImage}` },
      { name: "twitter:image", content: `https://maass-solar.de${heroImage}` },
    ],
  }),
  component: Index,
});

function Index() {
  const highlights = [...projects].sort((a, b) => b.kwp - a.kwp).slice(0, 4);

  return (
    <>
      {/* Hero – echtes Referenzfoto (STAR-Piping, Wesel), kein Stockbild */}
      <section className="relative overflow-hidden bg-neutral-900">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            srcSet={`${heroImageSmall} 1024w, ${heroImage} 1920w`}
            sizes="100vw"
            alt="Luftaufnahme der 824-kWp-Photovoltaikanlage auf den Hallen von STAR-Piping in Wesel"
            width={1920}
            height={1080}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-[60%_50%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/85 via-neutral-950/55 to-neutral-950/5" />
          <div className="absolute inset-0 bg-neutral-950/35 md:hidden" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-20 pt-24 md:px-6 md:pb-28 md:pt-32 lg:pb-36 lg:pt-40">
          <div className="max-w-2xl text-white">
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
              Gewerbliche Photovoltaik · aus Wesel
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
              Ihr Partner für gewerbliche Photovoltaikanlagen.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/90 md:text-xl">
              Planung, Abnahme, Gutachten und Betriebsführung von Großanlagen –
              seit über 20 Jahren, von Wesel aus bundesweit.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-black/20 transition-colors hover:bg-primary/90"
              >
                Projekt anfragen <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                to="/referenzen"
                className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                Referenzen ansehen
              </Link>
            </div>
          </div>
        </div>
        <p className="absolute bottom-3 right-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-black/45 px-3 py-1 text-xs font-medium text-white backdrop-blur md:bottom-5 md:right-6">
          <MapPin className="h-3.5 w-3.5" aria-hidden /> Referenz: STAR-Piping, Wesel · 824 kWp
        </p>
      </section>

      {/* Stats / Investition */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-eco">
              Profitable Investition
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Regenerative Energie mit kalkulierbarer Rendite.
            </h2>
          </div>
          <p className="text-muted-foreground md:self-end md:text-lg">
            Solarstrom wird tagsüber erzeugt – genau dann, wenn Unternehmen ihn
            verbrauchen. Eigenverbrauch senkt Ihre Stromkosten dauerhaft und macht
            Ihren Betrieb unabhängiger von Marktpreisen. Wir planen und betreuen
            Ihre Anlage so, dass technische Lebensdauer und wirtschaftlicher
            Ertrag im Einklang stehen.
          </p>
        </div>
        <div className="mt-12">
          <StatsGrid
            stats={[
              { value: "20+", label: "Jahre Erfahrung" },
              { value: "300+", label: "realisierte Projekte" },
              { value: "50+ MWp", label: "installierte Gesamtleistung" },
              { value: "250.000+", label: "verbaute Module" },
            ]}
          />
        </div>
      </section>

      {/* Quote */}
      <QuoteBlock
        quote="Mit einem optimalen Lastprofil und einem großen Dach kann ein Unternehmen gute Rendite erzielen."
        author="Stefan Maaß"
        role="Gutachter für Photovoltaikanlagen, geschäftsführender Gesellschafter"
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
          <Link
            to="/kontakt"
            className="group flex h-full flex-col justify-between rounded-2xl bg-primary p-6 text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <div>
              <h3 className="text-lg font-semibold">Ihr Projekt passt nicht in eine Schublade?</h3>
              <p className="mt-2 text-sm text-primary-foreground/85">
                Erzählen Sie uns von Ihrer Anlage oder Ihrem Dach – wir melden
                uns zeitnah mit einer ersten Einschätzung.
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold">
              Projekt anfragen <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </span>
          </Link>
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
                Eine Auswahl unserer Projekte – vom Logistikdach bis
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
