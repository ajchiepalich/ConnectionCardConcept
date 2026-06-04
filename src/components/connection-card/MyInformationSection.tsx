"use client";

import { CAMPUSES } from "@/data/campuses";
import type { MyInformationState, SubmitSection } from "@/types/connection-card";
import { AccordionSection } from "./AccordionSection";
import { SectionSubmitButton } from "./SectionSubmitButton";
import { CheckboxField } from "../ui/CheckboxField";
import { SelectField } from "../ui/SelectField";
import { TextField } from "../ui/TextField";
import { TextAreaField } from "../ui/TextAreaField";

interface MyInformationSectionProps {
  value: MyInformationState;
  onChange: (patch: Partial<MyInformationState>) => void;
  isComplete: boolean;
  showErrors?: boolean;
  onSubmit: () => void;
  isSubmitting?: boolean;
  submittingSection?: SubmitSection | null;
  error?: string | null;
}

export function MyInformationSection({
  value,
  onChange,
  isComplete,
  showErrors,
  onSubmit,
  isSubmitting,
  submittingSection,
  error,
}: MyInformationSectionProps) {
  const emailError =
    showErrors &&
    value.email.trim().length > 0 &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.email.trim())
      ? "Please enter a valid email address"
      : showErrors && !value.email.trim()
        ? "Email is required so we can follow up"
        : undefined;

  const firstNameError =
    showErrors && !value.firstName.trim() ? "First name is required" : undefined;
  const lastNameError =
    showErrors && !value.lastName.trim() ? "Last name is required" : undefined;

  const isThisSectionSubmitting =
    isSubmitting && submittingSection === "information";

  return (
    <AccordionSection
      title="My Information"
      subtitle="Just the basics — only name and email are required"
      statusLabel={
        isComplete ? "Ready" : "First name, last name & email needed"
      }
      isComplete={isComplete}
    >
      <div className="flex flex-col gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField
            id="firstName"
            label="First Name"
            value={value.firstName}
            onChange={(v) => onChange({ firstName: v })}
            required
            autoComplete="given-name"
            error={firstNameError}
          />
          <TextField
            id="lastName"
            label="Last Name"
            value={value.lastName}
            onChange={(v) => onChange({ lastName: v })}
            required
            autoComplete="family-name"
            error={lastNameError}
          />
        </div>
        <TextField
          id="email"
          label="Email"
          type="email"
          value={value.email}
          onChange={(v) => onChange({ email: v })}
          required
          autoComplete="email"
          placeholder="you@email.com"
          error={emailError}
        />
        <TextField
          id="phone"
          label="Phone"
          type="tel"
          value={value.phone}
          onChange={(v) => onChange({ phone: v })}
          autoComplete="tel"
          placeholder="Optional"
        />
        <SelectField
          id="campus"
          label="Campus"
          value={value.campus}
          onChange={(v) =>
            onChange({ campus: v as MyInformationState["campus"] })
          }
          options={CAMPUSES.map((c) => ({ value: c.id, label: c.label }))}
          placeholder="Which campus are you visiting?"
        />
        <CheckboxField
          id="firstTimeGuest"
          label="I am a first-time guest"
          checked={value.isFirstTimeGuest}
          onChange={(checked) => onChange({ isFirstTimeGuest: checked })}
        />
        <TextAreaField
          id="notes"
          label="Anything else we should know?"
          value={value.notes}
          onChange={(v) => onChange({ notes: v })}
          placeholder="Optional — allergies for kids ministry, accessibility needs, etc."
          rows={3}
        />

        {error && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        <div className="flex justify-end border-t border-slate-100 pt-4">
          <SectionSubmitButton
            label="Submit My Information"
            onClick={onSubmit}
            isSubmitting={isThisSectionSubmitting}
            disabled={isSubmitting && !isThisSectionSubmitting}
          />
        </div>
      </div>
    </AccordionSection>
  );
}
