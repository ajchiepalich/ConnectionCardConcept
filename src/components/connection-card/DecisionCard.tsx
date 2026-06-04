import type { DecisionCardData } from "@/types/connection-card";
import { CardImage } from "../ui/CardImage";

interface DecisionCardProps {
  data: DecisionCardData;
  highlighted?: boolean;
}

export function DecisionCard({ data, highlighted = false }: DecisionCardProps) {
  return (
    <article
      className={`flex flex-col overflow-hidden rounded-2xl border bg-gradient-to-b from-white to-slate-50/50 shadow-sm transition-shadow ${
        highlighted
          ? "border-highlands-300 ring-2 ring-highlands-100"
          : "border-slate-200/80"
      }`}
    >
      <CardImage
        src={data.imageUrl}
        alt={data.imageAlt ?? data.title}
        className="from-highlands-100 to-highlands-50"
        placeholder={
          <div
            className="flex h-full items-center justify-center text-highlands-300"
            aria-hidden="true"
          >
            <svg
              className="h-16 w-16 opacity-60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        }
      />
      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <h3 className="text-lg font-semibold text-slate-900">{data.title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-slate-600">
          {data.description}
        </p>
        <a
          href={data.buttonUrl}
          className="inline-flex items-center justify-center rounded-xl bg-highlands-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-highlands-700 focus:outline-none focus:ring-2 focus:ring-highlands-400 focus:ring-offset-2"
        >
          {data.buttonLabel}
        </a>
      </div>
    </article>
  );
}
