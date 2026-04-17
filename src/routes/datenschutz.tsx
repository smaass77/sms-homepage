import { createFileRoute } from "@tanstack/react-router";
import { company } from "@/data/company";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz – Stefan Maaß Solaranlagen SMS" },
      { name: "description", content: "Datenschutzerklärung gemäß DSGVO." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-16 md:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Datenschutzerklärung
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Platzhalter – bitte vor Veröffentlichung durch eine vollständige
        Datenschutzerklärung ersetzen.
      </p>

      <div className="prose prose-sm mt-8 max-w-none text-foreground">
        <h2 className="mt-8 text-lg font-semibold">1. Verantwortlicher</h2>
        <p className="text-muted-foreground">
          {company.legalName}, {company.street}, {company.zip} {company.city}.
          E-Mail: {company.email}, Telefon: {company.phone}.
        </p>

        <h2 className="mt-8 text-lg font-semibold">2. Allgemeines</h2>
        <p className="text-muted-foreground">
          Wir verarbeiten personenbezogene Daten nur im Rahmen der gesetzlichen
          Bestimmungen (DSGVO, BDSG, TTDSG). Diese Website verwendet keine
          Tracking-Cookies und bindet keine externen Analyse-Dienste ein.
        </p>

        <h2 className="mt-8 text-lg font-semibold">3. Server-Logfiles</h2>
        <p className="text-muted-foreground">
          Beim Aufruf der Website werden technisch notwendige Daten (IP-Adresse,
          Datum/Uhrzeit, User-Agent) verarbeitet. Rechtsgrundlage:
          Art. 6 Abs. 1 lit. f DSGVO.
        </p>

        <h2 className="mt-8 text-lg font-semibold">4. Kontaktformular</h2>
        <p className="text-muted-foreground">
          Bei Nutzung des Kontaktformulars werden die übermittelten Angaben
          ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Eine
          Weitergabe an Dritte erfolgt nicht. Rechtsgrundlage:
          Art. 6 Abs. 1 lit. a und b DSGVO.
        </p>

        <h2 className="mt-8 text-lg font-semibold">5. Karten (OpenStreetMap)</h2>
        <p className="text-muted-foreground">
          Auf der Kontaktseite wird eine Karte von OpenStreetMap eingebettet.
          Hierbei wird Ihre IP-Adresse an die OpenStreetMap Foundation übertragen.
        </p>

        <h2 className="mt-8 text-lg font-semibold">6. Ihre Rechte</h2>
        <p className="text-muted-foreground">
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
          Einschränkung der Verarbeitung, Datenübertragbarkeit sowie
          Widerspruch und Beschwerde bei einer Aufsichtsbehörde.
        </p>
      </div>
    </section>
  );
}
