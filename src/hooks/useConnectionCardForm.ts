"use client";

import { useCallback, useMemo, useState } from "react";
import { submitConnectionCard } from "@/lib/api/submit-connection-card";
import type {
  ConnectionCardFormState,
  ConnectionCardPayload,
  MyInformationState,
  PrayerRequestState,
  DecisionsState,
  SubmitSection,
} from "@/types/connection-card";

const initialMyInformation: MyInformationState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  campus: "",
  isFirstTimeGuest: false,
  notes: "",
};

const initialDecisions: DecisionsState = {
  committingToJesus: false,
  recommittingToJesus: false,
  waterBaptism: false,
  ministryTeamReachOut: false,
};

const initialPrayerRequest: PrayerRequestState = {
  request: "",
  keepConfidential: false,
  requestFollowUp: false,
};

interface UseConnectionCardFormOptions {
  /** Skip contact-field validation when user is already known */
  isKnownUser?: boolean;
}

export function useConnectionCardForm(
  options: UseConnectionCardFormOptions = {}
) {
  const { isKnownUser = false } = options;
  const [myInformation, setMyInformation] =
    useState<MyInformationState>(initialMyInformation);
  const [decisions, setDecisions] = useState<DecisionsState>(initialDecisions);
  const [prayerRequest, setPrayerRequest] =
    useState<PrayerRequestState>(initialPrayerRequest);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);
  const [prayerTouched, setPrayerTouched] = useState(false);
  const [submittingSection, setSubmittingSection] =
    useState<SubmitSection | null>(null);
  const [errorSection, setErrorSection] = useState<SubmitSection | null>(null);

  const formState: ConnectionCardFormState = useMemo(
    () => ({ myInformation, decisions, prayerRequest }),
    [myInformation, decisions, prayerRequest]
  );

  const myInformationComplete = useMemo(() => {
    const { firstName, lastName, email } = myInformation;
    return (
      firstName.trim().length > 0 &&
      lastName.trim().length > 0 &&
      email.trim().length > 0 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    );
  }, [myInformation]);

  const hasAnyDecision = useMemo(
    () => Object.values(decisions).some(Boolean),
    [decisions]
  );

  const hasPrayerContent = prayerRequest.request.trim().length > 0;

  const updateMyInformation = useCallback(
    (patch: Partial<MyInformationState>) => {
      setMyInformation((prev) => ({ ...prev, ...patch }));
    },
    []
  );

  const setMyInformationDirect = useCallback((value: MyInformationState) => {
    setMyInformation(value);
  }, []);

  const updateDecisions = useCallback((patch: Partial<DecisionsState>) => {
    setDecisions((prev) => ({ ...prev, ...patch }));
  }, []);

  const updatePrayerRequest = useCallback(
    (patch: Partial<PrayerRequestState>) => {
      setPrayerRequest((prev) => ({ ...prev, ...patch }));
    },
    []
  );

  const buildPayload = useCallback(
    (section: SubmitSection): ConnectionCardPayload => {
      return {
        submittedAt: new Date().toISOString(),
        submitSection: section,
        myInformation,
        decisions,
        prayerRequest,
      };
    },
    [myInformation, decisions, prayerRequest]
  );

  const validateForSection = useCallback(
    (section: SubmitSection): string | null => {
      setTouched(true);

      if (!isKnownUser && !myInformationComplete) {
        return "Please add your first name, last name, and a valid email so we can connect with you.";
      }

      if (section === "prayer" && !hasPrayerContent) {
        setPrayerTouched(true);
        return "Please share your prayer request before submitting.";
      }

      return null;
    },
    [isKnownUser, myInformationComplete, hasPrayerContent]
  );

  const handleSectionSubmit = useCallback(
    async (section: SubmitSection): Promise<boolean> => {
      setSubmitError(null);
      setErrorSection(null);
      const validationError = validateForSection(section);
      if (validationError) {
        setSubmitError(validationError);
        setErrorSection(section);
        return false;
      }

      setIsSubmitting(true);
      setSubmittingSection(section);

      void submitConnectionCard(buildPayload(section))
        .then((result) => {
          if (result.success) {
            setIsSuccess(true);
          } else {
            setSubmitError(
              result.message ?? "Something went wrong. Please try again."
            );
            setErrorSection(section);
          }
        })
        .catch(() => {
          setSubmitError(
            "Unable to submit right now. Please try again in a moment."
          );
          setErrorSection(section);
        })
        .finally(() => {
          setIsSubmitting(false);
          setSubmittingSection(null);
        });

      return true;
    },
    [buildPayload, validateForSection]
  );

  const resetForm = useCallback(() => {
    setMyInformation(initialMyInformation);
    setDecisions(initialDecisions);
    setPrayerRequest(initialPrayerRequest);
    setIsSuccess(false);
    setSubmitError(null);
    setTouched(false);
    setPrayerTouched(false);
    setErrorSection(null);
  }, []);

  return {
    formState,
    myInformation,
    decisions,
    prayerRequest,
    updateMyInformation,
    setMyInformation: setMyInformationDirect,
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
    buildPayload,
  };
}
