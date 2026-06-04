interface SectionSubmitButtonProps {
  label?: string;
  onClick: () => void;
  isSubmitting?: boolean;
  disabled?: boolean;
}

export function SectionSubmitButton({
  label = "Submit",
  onClick,
  isSubmitting = false,
  disabled = false,
}: SectionSubmitButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || isSubmitting}
      className="w-full rounded-xl bg-highlands-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-highlands-700 focus:outline-none focus:ring-2 focus:ring-highlands-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[10rem]"
    >
      {isSubmitting ? "Sending…" : label}
    </button>
  );
}
