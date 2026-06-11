"use client";

import { useCallback, useState } from "react";

/** Manages accordion open state and collapses after a successful section submit */
export function useAccordionSubmit(onSubmit: () => Promise<boolean>) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = useCallback(async () => {
    const started = await onSubmit();
    if (started) {
      setIsOpen(false);
    }
  }, [onSubmit]);

  return { isOpen, setIsOpen, handleSubmit };
}
