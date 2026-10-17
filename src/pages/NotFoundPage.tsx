import { Link } from 'react-router';
import Button from '@/components/ui/Button';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[55vh] flex-col items-center justify-center text-center">
      <p className="text-sm font-semibold tracking-[0.25em] text-cyan-300">ERROR 404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">The page you requested doesn't exist or may have moved.</p>
      <Link to="/" className="mt-6"><Button>Back to dashboard</Button></Link>
    </div>
  );
}
