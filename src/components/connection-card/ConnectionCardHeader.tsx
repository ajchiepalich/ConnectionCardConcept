import { getTimeGreeting } from "@/lib/get-time-greeting";

interface ConnectionCardHeaderProps {
  isPersonalized?: boolean;
  firstName?: string;
}

export function ConnectionCardHeader({
  isPersonalized = false,
  firstName,
}: ConnectionCardHeaderProps) {
  if (isPersonalized && firstName) {
    return (
      <header className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {getTimeGreeting()}, {firstName}
        </h1>
        <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg">
          We&apos;re glad you&apos;re here. Share anything on your heart today —
          we&apos;re already connected with you.
        </p>
      </header>
    );
  }

  return (
    <header className="text-center">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Let&apos;s Connect
      </h1>
      <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg">
        We&apos;re so glad you&apos;re here. Take a moment to let us know how we
        can connect with you.
      </p>
    </header>
  );
}
