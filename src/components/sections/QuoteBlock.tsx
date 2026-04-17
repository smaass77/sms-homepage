import { Quote } from "lucide-react";

export function QuoteBlock({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role?: string;
}) {
  const initials = author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <section className="mx-auto w-full max-w-6xl px-4 md:px-6">
      <figure className="rounded-2xl border border-border bg-card p-8 shadow-sm md:p-12">
        <Quote className="h-8 w-8 text-accent" aria-hidden />
        <blockquote className="mt-4 text-xl font-medium leading-relaxed text-foreground md:text-2xl">
          „{quote}"
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-4">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground"
            aria-label={`Portrait-Platzhalter ${author}`}
          >
            {initials}
          </div>
          <div>
            <div className="text-sm font-semibold text-foreground">{author}</div>
            {role && <div className="text-xs text-muted-foreground">{role}</div>}
          </div>
        </figcaption>
      </figure>
    </section>
  );
}
