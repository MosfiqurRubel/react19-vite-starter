import { Outlet } from 'react-router';
import { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Topbar from '@/components/layout/Topbar';

export default function AppLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Sidebar open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      <div className="min-h-screen lg:pl-64">
        <Topbar onMenuClick={() => setMobileMenuOpen((open) => !open)} />
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10">
          <Outlet />
        </main>
        <footer className="px-6 pb-8 text-center text-xs text-slate-500">
          Built with React 19 · Vite · Tailwind CSS
        </footer>
      </div>
    </div>
  );
}
