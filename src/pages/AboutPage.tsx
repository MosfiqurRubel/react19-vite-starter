const principles = [
  { title: 'Feature-first organization', text: 'Group domain-specific UI, data, and types together under src/features.' },
  { title: 'Reusable UI', text: 'Keep generic controls such as Button and StatCard in src/components/ui.' },
  { title: 'Small route components', text: 'Pages compose feature modules instead of containing every implementation detail.' },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div>
        <p className="text-sm font-medium text-cyan-300">PROJECT GUIDE</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">About this starter</h1>
        <p className="mt-3 leading-7 text-slate-400">A practical baseline for a frontend application. It includes only a few examples, leaving room for you to shape the architecture around the product.</p>
      </div>
      <div className="space-y-4">
        {principles.map((principle, index) => (
          <article key={principle.title} className="flex gap-4 rounded-2xl border border-white/8 bg-white/[0.035] p-5">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-cyan-300/10 text-sm font-semibold text-cyan-300">0{index + 1}</span>
            <div><h2 className="font-semibold">{principle.title}</h2><p className="mt-1 text-sm leading-6 text-slate-400">{principle.text}</p></div>
          </article>
        ))}
      </div>
      <div className="rounded-2xl border border-white/8 p-5">
        <h2 className="font-semibold">Useful commands</h2>
        <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-4 text-sm leading-7 text-cyan-200"><code>npm install{"\n"}npm run dev{"\n"}npm run build{"\n"}npm run lint</code></pre>
      </div>
    </div>
  );
}
