import { createFileRoute } from "@tanstack/react-router";
import { company } from "@/data/company";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – Stefan Maaß Solaranlagen SMS" },
      { name: "description", content: "Impressum gemäß § 5 TMG." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-16 md:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Impressum
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Angaben gemäß § 5 TMG (Platzhalter – bitte vor Veröffentlichung prüfen).
      </p>

      <div className="prose prose-sm mt-8 max-w-none text-foreground">
        <h2 className="mt-8 text-lg font-semibold">Anbieter</h2>
        <address className="not-italic text-muted-foreground">
          {company.legalName}
          <br />
          {company.street}
          <br />
          {company.zip} {company.city}
          <br />
          {company.country}
        </address>

        <h2 className="mt-8 text-lg font-semibold">Kontakt</h2>
        <p className="text-muted-foreground">
          Telefon: {company.phone}
          <br />
          Fax: {company.fax}
          <br />
          E-Mail: {company.email}
        </p>

        <h2 className="mt-8 text-lg font-semibold">Vertretungsberechtigt</h2>
        <p className="text-muted-foreground">Stefan Maaß (Geschäftsführer)</p>

        <h2 className="mt-8 text-lg font-semibold">Registereintrag / USt-IdNr.</h2>
        <p className="text-muted-foreground">
          [Platzhalter – Handelsregister, Registergericht, Registernummer und Umsatzsteuer-Identifikationsnummer eintragen.]
        </p>

        <h2 className="mt-8 text-lg font-semibold">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p className="text-muted-foreground">
          Stefan Maaß, Anschrift wie oben.
        </p>

        <h2 className="mt-8 text-lg font-semibold">Haftungshinweis</h2>
        <p className="text-muted-foreground">
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
          für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
          sind ausschließlich deren Betreiber verantwortlich.
        </p>
      </div>
    </section>
  );
}
