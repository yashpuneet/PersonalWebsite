/**
 * Inktober Gallery Card
 */

import Image from 'next/image';
import { InktoberEntry } from '@/types/inktober';

export function InktoberCard({ entry }: { entry: InktoberEntry }) {
  const isHorizontal = entry.orientation === 'horizontal';

  return (
    <div className="break-inside-avoid mb-6 group relative bg-zinc-900/90 rounded-xl p-3 border border-zinc-800/80 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:rotate-1 shadow-lg hover:shadow-amber-500/10">
      {/* Push Pin Visual Icon */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10 text-xs select-none">
        📌
      </div>

      {/* Index Card Frame */}
      <div
        className={`relative w-full overflow-hidden rounded-md bg-zinc-100 ${
          isHorizontal ? 'aspect-[5/3]' : 'aspect-[3/5]'
        }`}
      >
        {entry.completed ? (
          <Image
            src={entry.imageSrc}
            alt={`Inktober Day ${entry.day}: ${entry.prompt}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          /* Placeholder state for upcoming unreleased days */
          <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-zinc-200/50 text-zinc-500 font-mono text-center">
            <span className="text-xs uppercase font-bold tracking-wider">Day {entry.day}</span>
            <span className="text-sm italic mt-1">&quot;{entry.prompt}&quot;</span>
            <span className="text-[10px] text-zinc-400 mt-3">Coming Soon</span>
          </div>
        )}
      </div>

      {/* Card Info Bar */}
      <div className="mt-3 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold">
            Day {entry.day < 10 ? `0${entry.day}` : entry.day}
          </span>
          <span className="text-zinc-200 font-medium">{entry.prompt}</span>
        </div>
        {entry.completed && (
          <span className="text-zinc-200 text-[10px] hidden sm:inline">
            {entry.medium || 'Ink'}
          </span>
        )}
      </div>
    </div>
  );
}