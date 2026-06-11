"use client";

import { useCallback } from "react";
import { useAccordionSubmit } from "@/hooks/useAccordionSubmit";
import type { DecisionKey, DecisionsState, SubmitSection } from "@/types/connection-card";
import { AccordionSection } from "./AccordionSection";
import { SectionSubmitButton } from "./SectionSubmitButton";
import { CheckboxField } from "../ui/CheckboxField";

const DECISION_OPTIONS: {
  key: DecisionKey;
  label: string;
}[] = [
  { key: "committingToJesus", label: "I am committing my life to Jesus" },
  { key: "recommittingToJesus", label: "I am recommitting my life to Jesus" },
  { key: "waterBaptism", label: "I want to be water baptized" },
  {
    key: "ministryTeamReachOut",
    label: "I would like someone from the Ministry Team to reach out to me",
  },
];

interface MyDecisionSectionProps {
  value: DecisionsState;
  onChange: (patch: Partial<DecisionsState>) => void;
  hasAnyDecision: boolean;
  onSubmit: () => Promise<boolean>;
  isSubmitting?: boolean;
  submittingSection?: SubmitSection | null;
  error?: string | null;
}

export function MyDecisionSection({
  value,
  onChange,
  hasAnyDecision,
  onSubmit,
  isSubmitting,
  submittingSection,
  error,
}: MyDecisionSectionProps) {
  const { isOpen, setIsOpen, handleSubmit } = useAccordionSubmit(onSubmit);

  const isThisSectionSubmitting =
    isSubmitting && submittingSection === "decisions";

  const onSubmitClick = useCallback(() => {
    void handleSubmit();
  }, [handleSubmit]);

  return (
    <AccordionSection
      title="My Decision Today"
      subtitle="Share what God is doing in your life — every step matters"
      isComplete={hasAnyDecision}
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <div className="flex flex-col gap-5">
        <fieldset>
          <legend className="mb-3 text-sm font-medium text-slate-700">
            Today I…
          </legend>
          <div className="flex flex-col gap-4 rounded-xl bg-slate-50/80 p-4">
            {DECISION_OPTIONS.map((opt) => (
              <CheckboxField
                key={opt.key}
                id={`decision-${opt.key}`}
                label={opt.label}
                checked={value[opt.key]}
                onChange={(checked) => onChange({ [opt.key]: checked })}
              />
            ))}
          </div>
        </fieldset>

        {error && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        <div className="flex justify-end border-t border-slate-100 pt-4">
          <SectionSubmitButton
            label="Submit My Decision"
            onClick={onSubmitClick}
            isSubmitting={isThisSectionSubmitting}
            disabled={isSubmitting && !isThisSectionSubmitting}
          />
        </div>
      </div>
    </AccordionSection>
  );
}
