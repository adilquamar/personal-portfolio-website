import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// TechTag — unified tag chip used across experience, projects, education
// ---------------------------------------------------------------------------

interface TechTagProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
  className?: string;
}

export function TechTag({
  children,
  variant = "default",
  className,
}: TechTagProps) {
  return (
    <span
      className={cn(
        "rounded-full border px-2.5 py-1 text-xs font-medium",
        variant === "default" &&
          "border-border bg-muted text-muted-foreground",
        variant === "accent" &&
          "border-slate-accent/30 bg-slate-accent/10 text-slate-dark dark:text-slate-light",
        className
      )}
    >
      {children}
    </span>
  );
}

// ---------------------------------------------------------------------------
// TechTagList — renders an array of technology strings as TechTags
// ---------------------------------------------------------------------------

interface TechTagListProps {
  items: string[];
  variant?: TechTagProps["variant"];
  className?: string;
}

export function TechTagList({
  items,
  variant = "default",
  className,
}: TechTagListProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <TechTag key={item} variant={variant}>
          {item}
        </TechTag>
      ))}
    </div>
  );
}
