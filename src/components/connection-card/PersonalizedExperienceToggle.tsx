interface PersonalizedExperienceToggleProps {
  isPersonalized: boolean;
  onToggle: () => void;
}

export function PersonalizedExperienceToggle({
  isPersonalized,
  onToggle,
}: PersonalizedExperienceToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isPersonalized}
      className={`fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 sm:bottom-6 sm:right-6 ${
        isPersonalized
          ? "bg-highlands-700 text-white hover:bg-highlands-800 focus:ring-highlands-500"
          : "border border-slate-200/80 bg-white/95 text-slate-700 backdrop-blur hover:bg-white focus:ring-highlands-400"
      }`}
    >
      <span
        className={`h-2 w-2 shrink-0 rounded-full ${
          isPersonalized ? "bg-emerald-300" : "bg-slate-300"
        }`}
        aria-hidden="true"
      />
      Personalized Experience
    </button>
  );
}
