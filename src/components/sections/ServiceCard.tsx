import type { LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: "/leistungen";
  hash?: string;
  compact?: boolean;
};

export function ServiceCard({ title, description, icon: Icon, href, hash, compact }: ServiceCardProps) {
  const content = (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
      <p className={"mt-2 text-sm text-muted-foreground " + (compact ? "line-clamp-3" : "")}>
        {description}
      </p>
      {href && (
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
          Mehr erfahren <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </span>
      )}
    </article>
  );

  if (href) {
    return (
      <Link to={href} hash={hash} className="block h-full">
        {content}
      </Link>
    );
  }
  return content;
}
