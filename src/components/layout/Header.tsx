import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import smsLogo from "@/assets/sms-logo.png";

const navItems = [
  { to: "/", label: "Start" },
  { to: "/leistungen", label: "Leistungen" },
  { to: "/referenzen", label: "Referenzen" },
  { to: "/news", label: "News" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-6">
        <Link
          to="/"
          className="flex items-center"
          onClick={() => setOpen(false)}
          aria-label="Stefan Maaß Solaranlagen — Startseite"
        >
          <img
            src={smsLogo}
            alt="Stefan Maaß Solaranlagen"
            className="h-9 w-auto md:h-10"
            loading="eager"
            decoding="async"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
              activeProps={{ className: "bg-muted text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/kontakt"
            className="ml-2 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            Projekt anfragen
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "border-t border-border md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-3" aria-label="Mobile Navigation">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-foreground"
              activeProps={{ className: "bg-muted text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
