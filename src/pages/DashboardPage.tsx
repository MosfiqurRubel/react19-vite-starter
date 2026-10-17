import { useState } from 'react';
import Button from '@/components/ui/Button';
import StatCard from '@/components/ui/StatCard';
import ActivityList from '@/features/dashboard/ActivityList';

export default function DashboardPage() {
  const [notice, setNotice] = useState('');

  return (
    <div className="space-y-8">
      <section className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-medium text-cyan-300">SATURDAY, OCTOBER 17</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Good afternoon, developer <span aria-hidden="true">✦</span></h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">Your React 19 starter is ready. Use this dashboard as a starting point for your next product.</p>
        </div>
        <Button onClick={() => setNotice('Demo action completed — replace this with your real workflow.')}>＋ Create demo task</Button>
      </section>

      {notice && <div role="status" className="flex items-center justify-between rounded-xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-sm text-cyan-100"><span>{notice}</span><button onClick={() => setNotice('')} aria-label="Dismiss notice">✕</button></div>}

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total projects" value="12" change="↑ 8.2%" icon="▦" />
        <StatCard label="Tasks completed" value="84" change="↑ 12.5%" icon="✓" />
        <StatCard label="In progress" value="07" change="3 due this week" icon="◷" positive={false} />
        <StatCard label="Productivity" value="92.4%" change="↑ 4.6%" icon="↗" />
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.5fr_1fr]">
        <div className="rounded-2xl border border-white/8 bg-white/[0.035] p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <div><h2 className="font-semibold">Recent activity</h2><p className="mt-1 text-xs text-slate-500">A sample feature module</p></div>
            <span className="rounded-lg border border-white/10 px-2.5 py-1.5 text-xs text-slate-400">Latest</span>
          </div>
          <div className="mt-3"><ActivityList /></div>
        </div>

        <div className="rounded-2xl border border-white/8 bg-linear-to-br from-cyan-300/10 via-blue-500/5 to-transparent p-6">
          <div className="flex size-11 items-center justify-center rounded-xl bg-cyan-300/10 text-xl text-cyan-300">⌘</div>
          <h2 className="mt-5 text-xl font-semibold">A solid foundation</h2>
          <p className="mt-2 text-sm leading-6 text-slate-400">Organize code by responsibility, keep components focused, and add complexity only when the product needs it.</p>
          <ul className="mt-6 space-y-3 text-sm text-slate-300">
            {['Strict TypeScript enabled', 'Reusable UI components', 'Responsive application shell', 'Nested client-side routes'].map((item) => (
              <li key={item} className="flex items-center gap-3"><span className="text-emerald-300">✓</span>{item}</li>
            ))}
          </ul>
          <div className="mt-7 rounded-xl border border-white/8 bg-slate-950/50 p-4">
            <p className="text-xs text-slate-500">NEXT STEP</p>
            <p className="mt-1 text-sm font-medium">Connect your API or state layer</p>
            <p className="mt-1 text-xs leading-5 text-slate-500">For example: RTK Query, authentication, or feature-specific state.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
