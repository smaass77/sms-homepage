import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/data/services";
import { CTASection } from "@/components/sections/CTASection";

export const Route = createFileRoute("/leistungen")({
  head: () => ({
    meta: [
      { title: "Leistungen – Stefan Maaß Solaranlagen SMS" },
      {
        name: "description",
        content:
          "Beratung, Planung, technische Abnahme, Gutachten, Wartung und Dokumentation für gewerbliche Photovoltaik-Großanlagen.",
      },
      { property: "og:title", content: "Leistungen – Stefan Maaß Solaranlagen" },
      {
        property: "og:description",
        content:
          "Vollständiger Leistungsumfang rund um gewerbliche PV-Anlagen: Planung, Abnahme, Gutachten, Wartung und Dokumentation.",
      },
    ],
  }),
  component: LeistungenPage,
});

function LeistungenPage() {
  return (
    <>
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <span className="text-sm font-semibold uppercase tracking-wider text-eco">
            Leistungen
          </span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Vollständiger Leistungsumfang aus einer Hand.
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Wir begleiten gewerbliche PV-Großanlagen über den gesamten
            Lebenszyklus – planerisch, technisch und betriebswirtschaftlich.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map(({ slug, title, description, icon: Icon }) => (
            <article
              key={slug}
              id={slug}
              className="scroll-mt-24 rounded-2xl border border-border bg-card p-8 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h2 className="mt-2 text-xl font-semibold text-foreground">{title}</h2>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        title="Welche Leistung passt zu Ihrem Vorhaben?"
        description="Sprechen Sie uns an – wir empfehlen den passenden Einstieg, vom Erstcheck bis zur Komplettbetreuung."
      />
    </>
  );
}
