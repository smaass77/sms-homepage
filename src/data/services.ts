import { Search, FileCheck, Wrench, Settings, Sun, type LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "beratung-planung",
    title: "Beratung, Planung und Projektbegleitung",
    short: "Vor-Ort-Analyse, Wirtschaftlichkeit, optimale Komponenten.",
    description:
      "Vor Ort ermitteln wir die Traglast Ihres Dachs und/oder die freie Fläche sowie Ihr Stromnutzungsprofil. Wir erstellen Wirtschaftlichkeitsberechnungen, ermitteln die optimalen Komponenten und begleiten die Montage mit bewährten Partnerunternehmen.",
    icon: Search,
  },
  {
    slug: "technische-abnahme",
    title: "Technische Abnahme",
    short: "Funktionsprüfung, Dokumentation, Betreiber-Schulung.",
    description:
      "Nach der Installation führen wir eine vollständige Funktionsprüfung des Solarsystems durch und dokumentieren alle Ergebnisse, Pläne und Produktdaten. Abschließend schulen wir den Betreiber.",
    icon: FileCheck,
  },
  {
    slug: "gutachten",
    title: "Gutachten",
    short: "Thermografie, Elektrolumineszenz, Reklamationsgrundlage.",
    description:
      "Bei Leistungsproblemen führen wir technische Überprüfungen durch und erstellen Gutachten als Reklamationsgrundlage – u. a. mit Luft-, Thermografie- und Elektrolumineszenzaufnahmen.",
    icon: Sun,
  },
  {
    slug: "service-wartung",
    title: "Service, Wartung und Betriebsführung",
    short: "BGV A3, Drohnen-, Wärmebild- und EL-Analysen.",
    description:
      "Jährliche Wartung ist durch BGV A3 vorgeschrieben. Wir übernehmen Wartung und Betriebsführung inkl. Drohnenaufnahmen, Wärmebild- und Elektrolumineszenzanalysen.",
    icon: Wrench,
  },
  {
    slug: "dokumentation",
    title: "Dokumentation",
    short: "Nachträgliche DIN EN 62446-konforme Unterlagen.",
    description:
      "Nachträgliche Erstellung fehlender Dokumentation nach DIN EN 62446, einschließlich Verschaltungsplänen und Produktdaten.",
    icon: Settings,
  },
];
