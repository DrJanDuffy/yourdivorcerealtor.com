'use client';

/**
 * Consistent section titles and subtitles for marketing pages (readability, rhythm, hierarchy).
 */
type SectionHeaderProps = {
  title: string;
  description?: string;
  /** When false, left-aligned (e.g. rare layouts). Default: centered. */
  centered?: boolean;
  className?: string;
};

export function SectionHeader({
  title,
  description,
  centered = true,
  className = '',
}: SectionHeaderProps) {
  const align = centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl';

  return (
    <div className={`mb-10 sm:mb-12 ${align} ${className}`}>
      <h2 className="text-3xl font-bold tracking-tight text-balance text-gray-900 sm:text-4xl">
        {title}
      </h2>
      {description
        ? (
            <p className="mt-3 text-lg leading-relaxed text-pretty text-gray-600 sm:mt-4 sm:text-xl">
              {description}
            </p>
          )
        : null}
    </div>
  );
}
