import inktoberData from '@/data/inktober2026.json';
import { InktoberEntry } from '@/types/inktober';
import { InktoberCard } from '@/components/InktoberCard';
import { Sparkles, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function InktoberGalleryPage() {
  const entries = inktoberData as InktoberEntry[];
  const totalDays = 31;
  const completedCount = entries.filter((item) => item.completed).length;
  const progressPercent = Math.round((completedCount / totalDays) * 100);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-amber-500 selection:text-zinc-950">
      {/* Sticky Header */}
      <header className="border-b border-zinc-800/80 bg-zinc-900/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="size-4" />
            <span>Back to Main Site</span>
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        {/* Title Section */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400">
            <Sparkles className="size-4" />
            <span>October Artwork Challenge</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Inktober 2026 Collection
          </h1>
        </div>

        {/* Dynamic Progress Bar Bar Widget */}
        <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 space-y-3 shadow-inner">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-zinc-300 font-semibold">
              Progress: {completedCount} / {totalDays} Days Completed
            </span>
            <span className="text-amber-400 font-bold">{progressPercent}%</span>
          </div>

          <div className="w-full bg-zinc-800 h-3 rounded-full overflow-hidden p-0.5 border border-zinc-700/50">
            <div
              className="bg-gradient-to-r from-amber-500 to-amber-400 h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Wall Gallery (Masonry CSS Column Layout) */}
        <section className="bg-zinc-900/30 p-6 rounded-3xl border border-zinc-800/50 min-h-[600px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {entries.map((entry) => (
              <InktoberCard key={entry.day} entry={entry} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/80 bg-zinc-950 py-8 text-center text-xs text-zinc-500 font-mono">
        <p>© {new Date().getFullYear()} • Inktober Gallery</p>
      </footer>
    </div>
  );
}