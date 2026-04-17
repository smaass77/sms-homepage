export type NewsArticle = {
  slug: string;
  title: string;
  date: string; // ISO
  excerpt: string;
  content: string;
};

export const news: NewsArticle[] = [
  {
    slug: "elektrifizierung-firmenflotte",
    title: "Elektrifizierung der Firmen-Flotte",
    date: "2024-03-15",
    excerpt:
      "Wir elektrifizieren unsere gesamte Firmenflotte mittelfristig und laden sie mit eigenem Solarstrom.",
    content:
      "Wir elektrifizieren unsere gesamte Firmenflotte mittelfristig und laden sie mit eigenem Solarstrom. Mit Unterstützung des europäischen REACT-EU-Programms wurde das erste Elektro-Montagefahrzeug beschafft. Damit setzen wir einen weiteren Schritt in Richtung emissionsarmer Betriebsführung und konsequenter Sektorenkopplung – vom Dach bis zur Straße.",
  },
];
