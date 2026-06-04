import type { ManagedContentCardData } from "@/types/connection-card";
import { CardImage } from "../ui/CardImage";

interface ManagedContentCardProps {
  data: ManagedContentCardData;
}

export function ManagedContentCard({ data }: ManagedContentCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative">
        <CardImage src={data.imageUrl} alt={data.imageAlt ?? data.title} />
        {data.tag && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-highlands-700 shadow-sm backdrop-blur">
            {data.tag}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        {data.dateTime && (
          <time className="text-xs font-medium uppercase tracking-wide text-highlands-600">
            {data.dateTime}
          </time>
        )}
        <h3 className="text-base font-semibold text-slate-900">{data.title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-slate-600">
          {data.description}
        </p>
        <a
          href={data.ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-highlands-600 hover:text-highlands-700 focus:outline-none focus:underline"
        >
          {data.ctaLabel}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}
