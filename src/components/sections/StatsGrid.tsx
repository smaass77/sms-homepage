type Stat = { value: string; label: string };

export function StatsGrid({ stats }: { stats: Stat[] }) {
  return (
    <dl className="grid gap-4 sm:grid-cols-3">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-2xl border border-border bg-card p-6 shadow-sm"
        >
          <dt className="text-sm text-muted-foreground">{s.label}</dt>
          <dd className="mt-2 text-3xl font-semibold tracking-tight text-primary md:text-4xl">
            {s.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
