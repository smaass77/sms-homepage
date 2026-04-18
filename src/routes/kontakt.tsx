import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Printer, CheckCircle2, AlertCircle } from "lucide-react";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt – Stefan Maaß Solaranlagen SMS" },
      {
        name: "description",
        content:
          "Sprechen Sie uns zu Ihrer gewerblichen PV-Anlage an. Stefan Maaß Solaranlagen, Am Schornacker 121, 46485 Wesel.",
      },
      { property: "og:title", content: "Kontakt – Stefan Maaß Solaranlagen" },
      {
        property: "og:description",
        content: "Stammdaten, Kontaktformular und Standort in Wesel.",
      },
    ],
  }),
  component: KontaktPage,
});

const contactSchema = z.object({
  name: z.string().trim().min(2, "Bitte geben Sie Ihren Namen an.").max(100),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email("Bitte geben Sie eine gültige E-Mail-Adresse an.").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Bitte beschreiben Sie kurz Ihr Vorhaben.")
    .max(2000, "Maximal 2000 Zeichen."),
  consent: z.literal(true, { message: "Bitte stimmen Sie der Datenschutzerklärung zu." }),
  // honeypot
  website: z.string().max(0).optional(),
});

type FormErrors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

function KontaktPage() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = {
      name: String(fd.get("name") ?? ""),
      company: String(fd.get("company") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      message: String(fd.get("message") ?? ""),
      consent: fd.get("consent") === "on",
      website: String(fd.get("website") ?? ""),
    };

    const parsed = contactSchema.safeParse(raw);
    if (!parsed.success) {
      const next: FormErrors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof FormErrors;
        if (!next[k]) next[k] = issue.message;
      }
      setErrors(next);
      setStatus("error");
      return;
    }
    setErrors({});

    // Honeypot triggered → silently succeed
    if (raw.website) {
      setStatus("success");
      return;
    }

    // mailto fallback. Production ready: replace with API endpoint POST.
    const subject = encodeURIComponent(`Projektanfrage von ${parsed.data.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${parsed.data.name}`,
        `Firma: ${parsed.data.company || "-"}`,
        `E-Mail: ${parsed.data.email}`,
        `Telefon: ${parsed.data.phone || "-"}`,
        "",
        "Nachricht:",
        parsed.data.message,
      ].join("\n"),
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setStatus("success");
  };

  return (
    <>
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <span className="text-sm font-semibold uppercase tracking-wider text-eco">
            Kontakt
          </span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Wir melden uns schnellstmöglich bei Ihnen.
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Beschreiben Sie kurz Ihr Vorhaben – Standort, Dachfläche oder
            geplante Leistung. Wir prüfen die Eckdaten und melden uns persönlich.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" required error={errors.name} autoComplete="name" />
              <Field label="Firma" name="company" error={errors.company} autoComplete="organization" />
              <Field label="E-Mail" name="email" type="email" required error={errors.email} autoComplete="email" />
              <Field label="Telefon" name="phone" type="tel" error={errors.phone} autoComplete="tel" />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="block text-sm font-medium text-foreground">
                Nachricht <span className="text-destructive">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                aria-invalid={!!errors.message}
                className={cn(
                  "mt-1 w-full rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring",
                  errors.message ? "border-destructive" : "border-border",
                )}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-destructive">{errors.message}</p>
              )}
            </div>

            {/* Honeypot — hidden from users */}
            <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
              <label>
                Website
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <div className="mt-5 flex items-start gap-3">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-ring"
              />
              <label htmlFor="consent" className="text-sm text-muted-foreground">
                Ich willige in die Verarbeitung meiner Daten gemäß{" "}
                <a href="/datenschutz" className="text-primary underline-offset-2 hover:underline">
                  Datenschutzerklärung
                </a>{" "}
                zur Beantwortung meiner Anfrage ein. <span className="text-destructive">*</span>
              </label>
            </div>
            {errors.consent && (
              <p className="mt-1 text-xs text-destructive">{errors.consent}</p>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                Anfrage senden
              </button>
              {status === "success" && (
                <span className="inline-flex items-center gap-2 text-sm text-eco">
                  <CheckCircle2 className="h-4 w-4" aria-hidden /> Vielen Dank – Ihr E-Mail-Programm wurde geöffnet.
                </span>
              )}
              {status === "error" && (
                <span className="inline-flex items-center gap-2 text-sm text-destructive">
                  <AlertCircle className="h-4 w-4" aria-hidden /> Bitte prüfen Sie Ihre Eingaben.
                </span>
              )}
            </div>
          </form>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground">Stammdaten</h2>
              <address className="mt-4 space-y-3 text-sm not-italic text-muted-foreground">
                <div className="font-medium text-foreground">
                  Stefan Maaß Solaranlagen
                  <br />
                  SMS – GmbH & Co. KG
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                  <span>
                    {company.street}
                    <br />
                    {company.zip} {company.city}, {company.country}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                  <span>
                    <a href={`tel:${company.phone.replace(/[^+\d]/g, "")}`} className="hover:text-foreground">
                      {company.phone}
                    </a>
                    <br />
                    <span className="text-xs">Alt: {company.phoneAlt}</span>
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Printer className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                  <span>{company.fax}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                  <a href={`mailto:${company.email}`} className="hover:text-foreground">
                    {company.email}
                  </a>
                </div>
              </address>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <iframe
                title={`Standort ${company.city} auf OpenStreetMap`}
                src="https://www.openstreetmap.org/export/embed.html?bbox=6.605%2C51.660%2C6.665%2C51.690&layer=mapnik&marker=51.6748%2C6.6362"
                className="h-72 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="px-4 py-2 text-xs text-muted-foreground">
                Karte:{" "}
                <a
                  href="https://www.openstreetmap.org/?mlat=51.6748&mlon=6.6362#map=15/51.6748/6.6362"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Auf OpenStreetMap öffnen
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  error,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-foreground">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        className={cn(
          "mt-1 w-full rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring",
          error ? "border-destructive" : "border-border",
        )}
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
