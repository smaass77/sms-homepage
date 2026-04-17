import { Link } from "@tanstack/react-router";
import { Sun } from "lucide-react";
import { company } from "@/data/company";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-muted/40">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2 text-primary" aria-label="Zur Startseite">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Sun className="h-5 w-5" aria-hidden />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-semibold">Stefan Maaß</span>
                <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  Solaranlagen SMS
                </span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Spezialist für gewerbliche Photovoltaik-Großanlagen seit 2009.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Leistungen</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/leistungen"
                    hash={s.slug}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Kontakt</h2>
            <address className="mt-3 space-y-1 text-sm not-italic text-muted-foreground">
              <div>{company.legalName}</div>
              <div>{company.street}</div>
              <div>
                {company.zip} {company.city}
              </div>
              <div className="pt-2">
                Tel:{" "}
                <a className="hover:text-foreground" href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}>
                  {company.phone}
                </a>
              </div>
              <div>
                E-Mail:{" "}
                <a className="hover:text-foreground" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </div>
            </address>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Mitgliedschaften & Förderung</h2>
            <div className="mt-3 space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-[10px] font-semibold uppercase text-muted-foreground"
                  aria-label="Logo Bundesverband Solarwirtschaft (Platzhalter)"
                >
                  BSW
                </div>
                <span>Mitglied im Bundesverband Solarwirtschaft</span>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-[10px] font-semibold uppercase text-muted-foreground"
                  aria-label="Logo REACT-EU / EU-Förderung (Platzhalter)"
                >
                  EU
                </div>
                <span>Gefördert durch REACT-EU / Europäische Union</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {company.legalName}. Alle Rechte vorbehalten.</div>
          <div className="flex gap-4">
            <Link to="/impressum" className="hover:text-foreground">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-foreground">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
