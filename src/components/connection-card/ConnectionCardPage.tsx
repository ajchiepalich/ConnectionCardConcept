"use client";

import { useCallback, useState } from "react";
import { MOCK_KNOWN_USER } from "@/data/mock-known-user";
import { useConnectionCardForm } from "@/hooks/useConnectionCardForm";
import type { MyInformationState } from "@/types/connection-card";
import { ConnectionCardHeader } from "./ConnectionCardHeader";
import { ManagedContentSection } from "./ManagedContentSection";
import { MyDecisionSection } from "./MyDecisionSection";
import { MyInformationSection } from "./MyInformationSection";
import { PersonalizedExperienceToggle } from "./PersonalizedExperienceToggle";
import { PrayerRequestSection } from "./PrayerRequestSection";
import { SuccessState } from "./SuccessState";
import { CheckboxField } from "../ui/CheckboxField";

const emptyMyInformation: MyInformationState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  campus: "",
  isFirstTimeGuest: false,
  notes: "",
};

function knownUserToMyInformation(user: typeof MOCK_KNOWN_USER): MyInformationState {
  return {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone ?? "",
    campus: user.campus ?? "",
    isFirstTimeGuest: user.isFirstTimeGuest ?? false,
    notes: "",
  };
}

export function ConnectionCardPage() {
  const [isPersonalized, setIsPersonalized] = useState(false);

  const {
    myInformation,
    decisions,
    prayerRequest,
    updateMyInformation,
    setMyInformation,
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
  } = useConnectionCardForm({
    isKnownUser: isPersonalized,
  });

  const togglePersonalized = useCallback(() => {
    setIsPersonalized((prev) => {
      const next = !prev;
      if (next) {
        setMyInformation(knownUserToMyInformation(MOCK_KNOWN_USER));
      } else {
        setMyInformation(emptyMyInformation);
      }
      return next;
    });
  }, [setMyInformation]);

  const sectionError = (section: "information" | "decisions" | "prayer") =>
    submitError && errorSection === section ? submitError : null;

  if (isSuccess) {
    return (
      <>
        <main className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
          <SuccessState onReset={resetForm} />
        </main>
        <PersonalizedExperienceToggle
          isPersonalized={isPersonalized}
          onToggle={togglePersonalized}
        />
      </>
    );
  }

  return (
    <>
      <main className="mx-auto w-full max-w-2xl flex-1 px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-12">
        <ConnectionCardHeader
          isPersonalized={isPersonalized}
          firstName={MOCK_KNOWN_USER.firstName}
        />

        <div className="mt-10 flex flex-col gap-6">
          {!isPersonalized && (
            <>
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
            </>
          )}

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

      <PersonalizedExperienceToggle
        isPersonalized={isPersonalized}
        onToggle={togglePersonalized}
      />
    </>
  );
}
