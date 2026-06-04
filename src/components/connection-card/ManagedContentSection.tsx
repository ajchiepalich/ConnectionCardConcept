"use client";

import { MOCK_MANAGED_CONTENT } from "@/data/mock-managed-content";
import { filterManagedContent } from "@/lib/filter-managed-content";
import type { CampusId } from "@/types/connection-card";
import { ManagedContentCard } from "./ManagedContentCard";

interface ManagedContentSectionProps {
  campus: CampusId | "";
  isFirstTimeGuest: boolean;
  /** Pass CMS data when wired; defaults to mock */
  items?: typeof MOCK_MANAGED_CONTENT;
}

export function ManagedContentSection({
  campus,
  isFirstTimeGuest,
  items = MOCK_MANAGED_CONTENT,
}: ManagedContentSectionProps) {
  const visible = filterManagedContent(items, campus, isFirstTimeGuest);

  if (visible.length === 0) return null;

  return (
    <section aria-labelledby="managed-content-heading" className="space-y-4">
      <header>
        <h2
          id="managed-content-heading"
          className="text-lg font-semibold text-slate-900 sm:text-xl"
        >
          Ways to Get Connected
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Explore opportunities happening at Highlands — no pressure, just
          helpful next steps.
        </p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2">
        {visible.map((item) => (
          <ManagedContentCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
}
