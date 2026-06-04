"use client";

import { useConnectionCardForm } from "@/hooks/useConnectionCardForm";
import { ConnectionCardHeader } from "./ConnectionCardHeader";
import { ManagedContentSection } from "./ManagedContentSection";
import { MyDecisionSection } from "./MyDecisionSection";
import { MyInformationSection } from "./MyInformationSection";
import { PrayerRequestSection } from "./PrayerRequestSection";
import { SuccessState } from "./SuccessState";
import { CheckboxField } from "../ui/CheckboxField";

export function ConnectionCardPage() {
  const {
    myInformation,
    decisions,
    prayerRequest,
    updateMyInformation,
    updateDecisions,
    updatePrayerRequest,
    myInformationComplete,
    hasAnyDecision,
    hasPrayerContent,
    isSubmitting,
    isSuccess,
    submitError,
    touched,
    prayerTouched,
    submittingSection,
    errorSection,
    handleSectionSubmit,
    resetForm,
  } = useConnectionCardForm();

  const sectionError = (section: "information" | "decisions" | "prayer") =>
    submitError && errorSection === section ? submitError : null;

  if (isSuccess) {
    return (
      <main className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
        <SuccessState onReset={resetForm} />
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-12">
      <ConnectionCardHeader />

      <div className="mt-10 flex flex-col gap-6">
        <div className="rounded-2xl border border-slate-200/80 bg-white px-4 py-4 shadow-sm sm:px-5">
          <CheckboxField
            id="firstTimeGuest"
            label="I am a first-time guest"
            checked={myInformation.isFirstTimeGuest}
            onChange={(checked) =>
              updateMyInformation({ isFirstTimeGuest: checked })
            }
          />
        </div>

        <MyInformationSection
          value={myInformation}
          onChange={updateMyInformation}
          isComplete={myInformationComplete}
          showErrors={touched}
          onSubmit={() => handleSectionSubmit("information")}
          isSubmitting={isSubmitting}
          submittingSection={submittingSection}
          error={sectionError("information")}
        />

        <MyDecisionSection
          value={decisions}
          onChange={updateDecisions}
          hasAnyDecision={hasAnyDecision}
          onSubmit={() => handleSectionSubmit("decisions")}
          isSubmitting={isSubmitting}
          submittingSection={submittingSection}
          error={sectionError("decisions")}
        />

        <PrayerRequestSection
          value={prayerRequest}
          onChange={updatePrayerRequest}
          hasPrayerContent={hasPrayerContent}
          showPrayerError={prayerTouched}
          onSubmit={() => handleSectionSubmit("prayer")}
          isSubmitting={isSubmitting}
          submittingSection={submittingSection}
          error={sectionError("prayer")}
        />

        <ManagedContentSection
          campus={myInformation.campus}
          isFirstTimeGuest={myInformation.isFirstTimeGuest}
        />
      </div>
    </main>
  );
}
