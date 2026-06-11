"use client";

import { useId, useState, type ReactNode } from "react";

interface AccordionSectionProps {
  title: string;
  subtitle?: string;
  /** Shown in header when section has meaningful progress */
  statusLabel?: string;
  isComplete?: boolean;
  defaultOpen?: boolean;
  /** Controlled open state */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
  /** Optional badge, e.g. "Optional" */
  badge?: string;
  /** Extra classes on the outer section wrapper */
  className?: string;
}

export function AccordionSection({
  title,
  subtitle,
  statusLabel,
  isComplete = false,
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
  children,
  badge,
  className = "",
}: AccordionSectionProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;
  const panelId = useId();
  const buttonId = useId();

  const setOpen = (next: boolean) => {
    if (!isControlled) {
      setInternalOpen(next);
    }
    onOpenChange?.(next);
  };

  return (
    <section
      className={`overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm ${className}`}
    >
      <h2 className="sr-only">{title}</h2>
      <button
        id={buttonId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setOpen(!isOpen)}
        className="flex w-full items-start gap-3 px-4 py-4 text-left transition-colors hover:bg-slate-50/80 sm:px-5 sm:py-5"
      >
        <span
          className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
            isComplete
              ? "bg-highlands-100 text-highlands-700"
              : "bg-slate-100 text-slate-500"
          }`}
          aria-hidden="true"
        >
          {isComplete ? (
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <span className="h-2 w-2 rounded-full bg-current opacity-60" />
          )}
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-2">
            <span className="text-lg font-semibold text-slate-900">{title}</span>
            {badge && (
              <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                {badge}
              </span>
            )}
          </span>
          {subtitle && (
            <span className="mt-0.5 block text-sm text-slate-500">{subtitle}</span>
          )}
          {statusLabel && (
            <span
              className={`mt-1 inline-block text-sm font-medium ${
                isComplete ? "text-highlands-600" : "text-slate-400"
              }`}
            >
              {statusLabel}
            </span>
          )}
        </span>
        <svg
          className={`mt-1 h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className={isOpen ? "block" : "hidden"}
      >
        <div className="border-t border-slate-100 px-4 pb-5 pt-4 sm:px-5 sm:pb-6">
          {children}
        </div>
      </div>
    </section>
  );
}
