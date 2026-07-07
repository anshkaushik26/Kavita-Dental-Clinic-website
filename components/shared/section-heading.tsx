import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Small uppercase label above the heading — e.g. "OUR TEAM" */
  label?: string;
  /** The main h2 heading text */
  heading: string;
  /** Optional supporting paragraph below the heading */
  subheading?: string;
  /** Text alignment. Center is used for most sections. */
  align?: "left" | "center";
  className?: string;
  /** HTML id applied to the h2, used for aria-labelledby on the parent section. */
  id?: string;
};

/**
 * SectionHeading
 *
 * Consistent typographic header used at the top of every section.
 * Establishes the visual hierarchy: label → h2 → subheading.
 *
 * The label is rendered in small uppercase with generous letter-spacing
 * to visually separate it from the main heading.
 */
export function SectionHeading({
  label,
  heading,
  subheading,
  align = "center",
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {label}
        </p>
      )}
      <h2
        id={id}
        className={cn(
          "text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-tight",
          align === "center" && "mx-auto max-w-2xl"
        )}
      >
        {heading}
      </h2>
      {subheading && (
        <p
          className={cn(
            "text-base md:text-lg text-muted-foreground leading-relaxed",
            align === "center" && "mx-auto max-w-xl"
          )}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}
