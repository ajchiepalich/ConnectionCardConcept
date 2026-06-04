"use client";

import type { PrayerRequestState, SubmitSection } from "@/types/connection-card";
import { AccordionSection } from "./AccordionSection";
import { SectionSubmitButton } from "./SectionSubmitButton";
import { CheckboxField } from "../ui/CheckboxField";
import { TextAreaField } from "../ui/TextAreaField";

interface PrayerRequestSectionProps {
  value: PrayerRequestState;
  onChange: (patch: Partial<PrayerRequestState>) => void;
  hasPrayerContent: boolean;
  showPrayerError?: boolean;
  onSubmit: () => void;
  isSubmitting?: boolean;
  submittingSection?: SubmitSection | null;
  error?: string | null;
}

export function PrayerRequestSection({
  value,
  onChange,
  hasPrayerContent,
  showPrayerError,
  onSubmit,
  isSubmitting,
  submittingSection,
  error,
}: PrayerRequestSectionProps) {
  const isThisSectionSubmitting =
    isSubmitting && submittingSection === "prayer";

  const prayerError =
    showPrayerError && !hasPrayerContent
      ? "Please share your prayer request"
      : undefined;

  return (
    <AccordionSection
      title="Submit a Prayer Request"
      subtitle="We would be honored to pray with you — what you share stays with our pastoral care team"
      isComplete={hasPrayerContent}
      badge="Optional"
      className="bg-gradient-to-b from-white to-highlands-50/40"
    >
      <div className="flex flex-col gap-5">
        <TextAreaField
          id="prayerRequest"
          label="Your prayer request"
          value={value.request}
          onChange={(v) => onChange({ request: v })}
          placeholder="Share what's on your heart…"
          rows={5}
        />
        {prayerError && (
          <p className="-mt-3 text-sm text-red-600" role="alert">
            {prayerError}
          </p>
        )}

        <div className="flex flex-col gap-4 rounded-xl border border-highlands-100/80 bg-white/80 p-4">
          <CheckboxField
            id="keepConfidential"
            label="Keep my request confidential"
            checked={value.keepConfidential}
            onChange={(checked) => onChange({ keepConfidential: checked })}
            description="Confidential requests are only shared with appropriate ministry leaders and pastoral staff — never announced publicly or in a group setting."
          />
          <CheckboxField
            id="prayerFollowUp"
            label="I would like someone to follow up with me"
            checked={value.requestFollowUp}
            onChange={(checked) => onChange({ requestFollowUp: checked })}
          />
        </div>

        {error && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        <div className="flex justify-end border-t border-slate-100 pt-4">
          <SectionSubmitButton
            label="Submit Prayer Request"
            onClick={onSubmit}
            isSubmitting={isThisSectionSubmitting}
            disabled={isSubmitting && !isThisSectionSubmitting}
          />
        </div>
      </div>
    </AccordionSection>
  );
}
