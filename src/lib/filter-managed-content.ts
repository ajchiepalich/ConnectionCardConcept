import type {
  CampusId,
  ManagedContentCardData,
} from "@/types/connection-card";

/**
 * Filters managed content by campus and guest status.
 * CMS integration: apply same rules server-side when fetching content.
 */
export function filterManagedContent(
  items: ManagedContentCardData[],
  campus: CampusId | "",
  isFirstTimeGuest: boolean
): ManagedContentCardData[] {
  return items.filter((item) => {
    if (item.campusVisibility?.length) {
      if (!campus || !item.campusVisibility.includes(campus)) {
        return false;
      }
    }

    if (item.audience?.length && !item.audience.includes("all")) {
      const isGuest = isFirstTimeGuest;
      const wantsGuest = item.audience.includes("guest");
      const wantsMember = item.audience.includes("member");
      if (wantsGuest && !wantsMember && !isGuest) return false;
      if (wantsMember && !wantsGuest && isGuest) return false;
    }

    return true;
  });
}
