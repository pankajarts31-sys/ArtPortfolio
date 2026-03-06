import clsx from "clsx";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "mb-16 md:mb-24 relative flex flex-col",
        centered ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif uppercase tracking-wider" style={{ color: "var(--theme-text)" }}>
        {title}
      </h2>

      {/* Glow effect stroke */}
      <h2
        className="absolute top-0 text-4xl md:text-5xl lg:text-7xl font-serif uppercase tracking-wider select-none text-transparent stroke-text blur-sm opacity-50"
        style={{ WebkitTextStroke: "2px #857861", color: "transparent" }}
        aria-hidden="true"
      >
        {title}
      </h2>

      {subtitle && (
        <p className="mt-6 text-lg md:text-xl max-w-2xl font-sans font-light tracking-wide" style={{ color: "var(--theme-text-muted)" }}>
          {subtitle}
        </p>
      )}

      {/* Underline decorative element */}
      <div className={clsx(
        "h-[1px] bg-gradient-to-r from-transparent via-brass to-transparent mt-8",
        centered ? "w-48" : "w-32",
      )} />

      {/* Subtle glow under the line */}
      <div className={clsx(
        "h-4 bg-brass/30 blur-xl -mt-2",
        centered ? "w-32" : "w-24",
      )} />
    </div>
  );
}
