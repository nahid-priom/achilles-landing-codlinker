"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { useLeadModal } from "@/components/lead-modal-context";
import { PhoneCall, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface BookCallButtonProps extends Omit<ButtonProps, "onClick"> {
  showIcon?: boolean;
  showArrow?: boolean;
  children?: React.ReactNode;
  variant?: "achillesPrimary" | "achillesSecondary" | "default" | "outline" | "secondary" | "ghost" | "link";
  onButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function BookCallButton({
  showIcon = false,
  showArrow = false,
  children = "Book a Free Discovery Call",
  variant = "achillesPrimary",
  className,
  onButtonClick,
  ...props
}: BookCallButtonProps) {
  const { openModal } = useLeadModal();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    openModal();
    // Call any additional onClick handler if provided
    if (onButtonClick) {
      onButtonClick(e);
    }
  };

  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
      <Button
        variant={variant}
        onClick={handleClick}
        className={className}
        {...props}
      >
        <span className="flex items-center gap-2">
          {showIcon && <PhoneCall className="h-4 w-4" />}
          {children}
          {showArrow && (
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          )}
        </span>
      </Button>
    </motion.div>
  );
}

