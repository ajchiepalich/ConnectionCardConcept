/** Campus options — replace with API-driven list later */
export type CampusId =
  | "grant"
  | "huntsville"
  | "montgomery"
  | "shoals"
  | "tuscaloosa"
  | "virtual"
  | "other";

export interface CampusOption {
  id: CampusId;
  label: string;
}

/** Spiritual decision checkboxes */
export type DecisionKey =
  | "committingToJesus"
  | "recommittingToJesus"
  | "waterBaptism"
  | "ministryTeamReachOut";

export interface DecisionsState {
  committingToJesus: boolean;
  recommittingToJesus: boolean;
  waterBaptism: boolean;
  ministryTeamReachOut: boolean;
}

export interface MyInformationState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  campus: CampusId | "";
  isFirstTimeGuest: boolean;
  notes: string;
}

/** Recognized user profile from session / CRM — used for personalized experience */
export interface KnownUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  campus?: CampusId;
  isFirstTimeGuest?: boolean;
}

export interface PrayerRequestState {
  request: string;
  keepConfidential: boolean;
  requestFollowUp: boolean;
}

export interface ConnectionCardFormState {
  myInformation: MyInformationState;
  decisions: DecisionsState;
  prayerRequest: PrayerRequestState;
}

/** Managed content from CMS / config */
export interface ManagedContentCardData {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  ctaLabel: string;
  ctaUrl: string;
  tag?: string;
  dateTime?: string;
  /** If set, card only shows when user's campus matches */
  campusVisibility?: CampusId[];
  /** Optional audience targeting labels */
  audience?: ("guest" | "member" | "all")[];
}

/** Reusable decision CTA blocks */
export interface DecisionCardData {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  buttonLabel: string;
  buttonUrl: string;
  /** Maps to a decision checkbox for contextual highlighting */
  relatedDecision?: DecisionKey;
}

/** Which section triggered the submit (for analytics / partial processing) */
export type SubmitSection = "information" | "decisions" | "prayer" | "all";

export interface ConnectionCardPayload {
  submittedAt: string;
  submitSection: SubmitSection;
  myInformation: MyInformationState;
  decisions: DecisionsState;
  prayerRequest: PrayerRequestState;
}

export interface SubmitResult {
  success: boolean;
  message?: string;
}
