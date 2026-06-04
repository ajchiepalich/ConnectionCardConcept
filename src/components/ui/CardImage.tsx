import type { ReactNode } from "react";

/** Unified aspect ratio for all card imagery across the connection card */
export const CARD_IMAGE_ASPECT = "aspect-[16/9]" as const;

interface CardImageProps {
  src?: string;
  alt: string;
  placeholder?: ReactNode;
  className?: string;
}

export function CardImage({
  src,
  alt,
  placeholder,
  className = "",
}: CardImageProps) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-gradient-to-br from-slate-100 to-highlands-50 ${CARD_IMAGE_ASPECT} ${className}`}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
      ) : (
        placeholder ?? (
          <div
            className="flex h-full items-center justify-center text-highlands-200"
            aria-hidden="true"
          >
            <span className="text-4xl font-light">+</span>
          </div>
        )
      )}
    </div>
  );
}
