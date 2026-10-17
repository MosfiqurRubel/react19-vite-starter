import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
};

export default function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const styles = variant === 'primary'
    ? 'bg-cyan-300 text-slate-950 hover:bg-cyan-200'
    : 'border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10';

  return (
    <button className={`inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 disabled:cursor-not-allowed disabled:opacity-50 ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}
