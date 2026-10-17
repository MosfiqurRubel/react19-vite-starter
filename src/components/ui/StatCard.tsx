type StatCardProps = {
  label: string;
  value: string;
  change: string;
  icon: string;
  positive?: boolean;
};

export default function StatCard({ label, value, change, icon, positive = true }: StatCardProps) {
  return (
    <article className="rounded-2xl border border-white/8 bg-white/[0.035] p-5 transition hover:border-white/15">
      <div className="flex items-start justify-between">
        <p className="text-sm text-slate-400">{label}</p>
        <span className="grid size-10 place-items-center rounded-xl bg-cyan-300/10 text-lg text-cyan-300">{icon}</span>
      </div>
      <p className="mt-5 text-3xl font-semibold tracking-tight text-white">{value}</p>
      <p className={`mt-2 text-xs ${positive ? 'text-emerald-300' : 'text-amber-300'}`}>{change} <span className="text-slate-500">vs. last month</span></p>
    </article>
  );
}
