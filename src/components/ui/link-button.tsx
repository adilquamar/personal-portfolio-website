import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

const linkButtonVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-border bg-muted text-foreground hover:bg-accent hover:text-accent-foreground",
        outline:
          "border-border bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "px-4 py-2",
        sm: "px-3 py-1.5 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkButtonVariants> {
  showArrow?: boolean;
}

function LinkButton({
  className,
  variant,
  size,
  showArrow = true,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <a
      className={cn(linkButtonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
      {showArrow && <ArrowUpRight className="h-4 w-4" />}
    </a>
  );
}

export { LinkButton, linkButtonVariants };
