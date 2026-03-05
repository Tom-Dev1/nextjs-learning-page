"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SheetContextValue {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SheetContext = React.createContext<SheetContextValue | null>(null);

function useSheet() {
  const ctx = React.useContext(SheetContext);
  if (!ctx) throw new Error("Sheet components must be used within Sheet");
  return ctx;
}

interface SheetProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

export function Sheet({ open = false, onOpenChange, children }: SheetProps) {
  const [openState, setOpenState] = React.useState(open);
  const isControlled = open !== undefined && onOpenChange !== undefined;
  const isOpen = isControlled ? open : openState;
  const setIsOpen = isControlled ? onOpenChange! : setOpenState;

  React.useEffect(() => {
    if (isControlled) setIsOpen(open);
  }, [open, isControlled]);

  return (
    <SheetContext.Provider value={{ open: isOpen, onOpenChange: setIsOpen }}>
      {children}
    </SheetContext.Provider>
  );
}

export function SheetTrigger({
  children,
  asChild,
  className,
}: {
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}) {
  const { onOpenChange } = useSheet();
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<{ onClick?: () => void }>, {
      onClick: () => onOpenChange(true),
    });
  }
  return (
    <button type="button" onClick={() => onOpenChange(true)} className={className} aria-label="Mở menu">
      {children}
    </button>
  );
}

export function SheetContent({
  children,
  side = "right",
  className,
}: {
  children: React.ReactNode;
  side?: "left" | "right";
  className?: string;
}) {
  const { open, onOpenChange } = useSheet();

  React.useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/50"
        aria-hidden
        onClick={() => onOpenChange(false)}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu điều hướng"
        className={cn(
          "fixed top-0 z-50 flex h-full w-[min(320px,85vw)] flex-col gap-4 border-l border-border bg-card p-6 shadow-xl transition-transform duration-300 ease-out",
          side === "right" ? "right-0" : "left-0",
          className
        )}
        style={{ backgroundColor: "var(--card)" }}
      >
        <button
          type="button"
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 rounded-md p-1 hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Đóng menu"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="mt-8 flex flex-col gap-4">{children}</div>
      </div>
    </>
  );
}
