interface SuccessStateProps {
  onReset: () => void;
}

export function SuccessState({ onReset }: SuccessStateProps) {
  return (
    <div
      className="flex flex-col items-center rounded-2xl border border-highlands-200 bg-white px-6 py-12 text-center shadow-sm"
      role="status"
    >
      <span
        className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-highlands-100 text-highlands-600"
        aria-hidden="true"
      >
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </span>
      <h2 className="text-2xl font-bold text-slate-900">Thank you!</h2>
      <p className="mt-2 max-w-sm text-slate-600">
        Your connection card has been received. Someone from our team may reach
        out soon if you asked us to.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-8 rounded-xl border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-highlands-400 focus:ring-offset-2"
      >
        Submit another response
      </button>
    </div>
  );
}
