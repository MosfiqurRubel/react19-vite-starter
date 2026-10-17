type TopbarProps = { onMenuClick: () => void };

export default function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <header className="sticky top-0 z-20 flex h-18 items-center justify-between border-b border-white/8 bg-slate-950/80 px-4 backdrop-blur-xl sm:px-6 lg:px-10">
      <div className="flex items-center gap-3">
        <button onClick={onMenuClick} aria-label="Toggle navigation" className="rounded-lg border border-white/10 px-3 py-2 text-slate-300 lg:hidden">☰</button>
        <div>
          <p className="text-sm font-medium">Developer workspace</p>
          <p className="hidden text-xs text-slate-500 sm:block">Your project at a glance</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="hidden rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-300 sm:inline-flex">● All systems ready</span>
        <div className="grid size-9 place-items-center rounded-full bg-linear-to-br from-cyan-300 to-blue-500 text-sm font-bold text-slate-950">D</div>
      </div>
    </header>
  );
}
