import { Link } from "@tanstack/react-router";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Lassen Sie uns über Ihr Dach sprechen.",
  description = "Wir prüfen Tragfähigkeit, Wirtschaftlichkeit und Eigenverbrauchsquote – unverbindlich und auf Augenhöhe.",
}: CTASectionProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
      <div className="overflow-hidden rounded-2xl bg-primary px-6 py-12 text-primary-foreground shadow-sm md:px-12 md:py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
            <p className="mt-3 text-primary-foreground/85">{description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent/90"
            >
              Projekt anfragen
            </Link>
            <Link
              to="/referenzen"
              className="inline-flex items-center justify-center rounded-xl border border-primary-foreground/30 bg-transparent px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Referenzen ansehen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
