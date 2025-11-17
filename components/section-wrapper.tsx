import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export function SectionWrapper({
  children,
  className = "",
  containerClassName = "",
}: SectionWrapperProps) {
  return (
    <section className={cn("section-padding", className)}>
      <div className={cn("section-wrapper", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

