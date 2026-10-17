export type Activity = {
  id: number;
  title: string;
  description: string;
  time: string;
  status: 'Completed' | 'In progress' | 'Review';
};

export const activities: Activity[] = [
  { id: 1, title: 'Design system setup', description: 'Reusable UI components', time: '10 min ago', status: 'Completed' },
  { id: 2, title: 'Dashboard page', description: 'Responsive layout and cards', time: '42 min ago', status: 'In progress' },
  { id: 3, title: 'Routing configuration', description: 'Nested routes and fallback page', time: '2 hours ago', status: 'Review' },
  { id: 4, title: 'Tailwind integration', description: 'Vite plugin and global styles', time: 'Yesterday', status: 'Completed' },
];
