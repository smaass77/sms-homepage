import { Sun, MapPin } from "lucide-react";
import type { Project } from "@/data/projects";

const fmt = new Intl.NumberFormat("de-DE");

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/10 via-muted to-accent/10">
        {project.image ? (
          <img
            src={project.image}
            alt={`Luftaufnahme der PV-Anlage ${project.name} in ${project.location}`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
            role="img"
            aria-label={`Bild-Platzhalter für PV-Anlage ${project.name} in ${project.location}`}
          >
            <Sun className="h-10 w-10 text-primary/40" aria-hidden />
          </div>
        )}
        <span className="absolute right-3 top-3 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground shadow">
          {project.year}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-foreground">{project.name}</h3>
        <p className="mt-1 inline-flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" aria-hidden /> {project.location}
        </p>
        <dl className="mt-4 grid grid-cols-3 gap-2 border-t border-border pt-4 text-center text-xs">
          <div>
            <dt className="text-muted-foreground">Leistung</dt>
            <dd className="mt-1 font-semibold text-primary">{fmt.format(project.kwp)} kWp</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Module</dt>
            <dd className="mt-1 font-semibold text-foreground">{fmt.format(project.modules)}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Ertrag/a</dt>
            <dd className="mt-1 font-semibold text-foreground">{fmt.format(project.yieldKwh)} kWh</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
