"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextValue {
  openId: string | null;
  setOpenId: (id: string | null) => void;
  type: "single" | "multiple";
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null);

function useAccordion() {
  const ctx = React.useContext(AccordionContext);
  if (!ctx) throw new Error("AccordionItem must be used within Accordion");
  return ctx;
}

export function Accordion({
  type = "single",
  defaultValue,
  children,
  className,
}: {
  type?: "single" | "multiple";
  defaultValue?: string | null;
  children: React.ReactNode;
  className?: string;
}) {
  const [openId, setOpenId] = React.useState<string | null>(defaultValue ?? null);
  return (
    <AccordionContext.Provider value={{ openId, setOpenId, type }}>
      <div className={cn("space-y-2", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  value,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-lg border border-border bg-card", className)} data-value={value}>
      {children}
    </div>
  );
}

export function AccordionTrigger({
  value,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { openId, setOpenId, type } = useAccordion();
  const isOpen = openId === value;
  const handleClick = () => {
    setOpenId(isOpen ? null : value);
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "flex w-full items-center justify-between gap-4 px-4 py-3 text-left font-medium transition-colors hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-t-lg [&[data-state=open]>svg]:rotate-180",
        className
      )}
      data-state={isOpen ? "open" : "closed"}
      aria-expanded={isOpen}
      aria-controls={`accordion-content-${value}`}
      id={`accordion-trigger-${value}`}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </button>
  );
}

export function AccordionContent({
  value,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { openId } = useAccordion();
  const isOpen = openId === value;
  return (
    <div
      id={`accordion-content-${value}`}
      role="region"
      aria-labelledby={`accordion-trigger-${value}`}
      className={cn(
        "overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        !isOpen && "hidden"
      )}
      data-state={isOpen ? "open" : "closed"}
    >
      <div className={cn("px-4 pb-3 pt-0 text-muted-foreground", className)}>{children}</div>
    </div>
  );
}
