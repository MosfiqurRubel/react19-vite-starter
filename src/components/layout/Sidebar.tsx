import { NavLink } from 'react-router';

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

const links = [
  { to: '/', label: 'Dashboard', icon: '◫', end: true },
  { to: '/about', label: 'About starter', icon: '✳', end: false },
];

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {open && <button aria-label="Close navigation" onClick={onClose} className="fixed inset-0 z-30 bg-black/60 lg:hidden" />}
      <aside className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-white/8 bg-slate-950 px-5 py-6 transition-transform lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <a href="/" className="flex items-center gap-3 px-2" onClick={onClose}>
          <span className="grid size-10 place-items-center rounded-xl bg-cyan-400 font-black text-slate-950">R19</span>
          <span>
            <span className="block font-semibold tracking-tight">StarterKit</span>
            <span className="block text-xs text-slate-500">Frontend scaffold</span>
          </span>
        </a>
        <p className="mb-3 mt-10 px-3 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600">Workspace</p>
        <nav className="space-y-1">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} onClick={onClose}
              className={({ isActive }) => `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${isActive ? 'bg-cyan-400/10 font-medium text-cyan-300' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}>
              <span className="w-5 text-center">{link.icon}</span>{link.label}
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto rounded-2xl border border-white/8 bg-white/3 p-4">
          <p className="text-sm font-medium">Ready to build?</p>
          <p className="mt-1 text-xs leading-5 text-slate-500">Add features as your product grows. Keep shared code reusable.</p>
        </div>
      </aside>
    </>
  );
}
