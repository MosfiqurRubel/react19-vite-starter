import { activities } from './data';

const statusStyles = {
  Completed: 'bg-emerald-400/10 text-emerald-300',
  'In progress': 'bg-cyan-400/10 text-cyan-300',
  Review: 'bg-amber-400/10 text-amber-300',
};

export default function ActivityList() {
  return (
    <div className="divide-y divide-white/6">
      {activities.map((activity) => (
        <div key={activity.id} className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <span className="mt-1 grid size-8 shrink-0 place-items-center rounded-lg bg-white/5 text-xs text-slate-400">0{activity.id}</span>
            <div>
              <p className="text-sm font-medium text-slate-100">{activity.title}</p>
              <p className="mt-1 text-xs text-slate-500">{activity.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 pl-11 sm:pl-0">
            <span className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${statusStyles[activity.status]}`}>{activity.status}</span>
            <span className="w-20 text-right text-xs text-slate-500">{activity.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
