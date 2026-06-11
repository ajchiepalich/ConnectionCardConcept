import type { KnownUser } from "@/types/connection-card";

/**
 * Mock recognized user — replace with session / auth profile lookup later.
 */
export const MOCK_KNOWN_USER: KnownUser = {
  id: "user-emily-001",
  firstName: "Emily",
  lastName: "Bennett",
  email: "emily.bennett@email.com",
  phone: "(205) 555-0142",
  campus: "grant",
  isFirstTimeGuest: false,
};
