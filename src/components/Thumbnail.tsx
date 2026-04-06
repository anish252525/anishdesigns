
import { useMemo } from 'react';

interface ThumbnailProps {
  title: string;
  className?: string;
}

const COLORS = [
  'bg-blue-500',
  'bg-purple-500',
  'bg-indigo-500',
  'bg-teal-500',
  'bg-emerald-500',
  'bg-orange-500',
  'bg-rose-500',
  'bg-pink-500',
  'bg-cyan-500',
  'bg-violet-500',
  'bg-amber-500',
  'bg-lime-500',
  'bg-fuchsia-500',
  'bg-sky-500',
];

export default function Thumbnail({ title, className = "" }: ThumbnailProps) {
  const bgColor = useMemo(() => {
    // Simple hash to pick a consistent color for the same title
    let hash = 0;
    for (let i = 0; i < title.length; i++) {
      hash = title.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % COLORS.length;
    return COLORS[index];
  }, [title]);

  return (
    <div className={`w-full h-full flex items-center justify-center p-6 text-center ${bgColor} ${className}`}>
      <span className="text-white font-bold text-lg md:text-xl leading-tight tracking-tight drop-shadow-sm">
        {title}
      </span>
    </div>
  );
}
