import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const baseClassName = cn(
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      {
        "bg-primary text-primary-foreground hover:bg-primary/90": variant === "default",
        "bg-secondary text-secondary-foreground hover:bg-secondary/80": variant === "secondary",
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground": variant === "outline",
        "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
        "text-primary underline-offset-4 hover:underline": variant === "link",
      },
      {
        "h-10 px-4 py-2": size === "default",
        "h-9 rounded-md px-3": size === "sm",
        "h-12 rounded-lg px-8 text-base": size === "lg",
        "h-10 w-10 shrink-0": size === "icon",
      },
      className
    );

    if (asChild && React.isValidElement(props.children)) {
      return React.cloneElement(
        props.children as React.ReactElement<Record<string, unknown>>,
        { ...props, className: baseClassName }
      );
    }

    const compProps = { ...props, ref, className: baseClassName };
    return <button {...compProps} />;
  }
);
Button.displayName = "Button";

export { Button };
