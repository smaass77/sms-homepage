type Stat = { value: string; label: string };

export function StatsGrid({ stats }: { stats: Stat[] }) {
  return (
    <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-2xl border border-border bg-card p-6 shadow-sm"
        >
          <dd className="text-3xl font-semibold tracking-tight text-primary md:text-4xl">
            {s.value}
          </dd>
          <dt className="mt-1 text-sm text-muted-foreground">{s.label}</dt>
        </div>
      ))}
    </dl>
  );
}
