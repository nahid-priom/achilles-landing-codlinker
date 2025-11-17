"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  descriptionMobile?: string;
  href?: string;
  ctaText?: string;
  gradient?: "blue" | "light" | "dark";
  className?: string;
  delay?: number;
}

const gradientClasses = {
  blue: "bg-gradient-to-br from-achilles-blue to-achilles-blue-light",
  light: "bg-gradient-to-br from-achilles-blue-light to-achilles-blue-lighter",
  dark: "bg-gradient-to-br from-achilles-blue-dark to-achilles-blue",
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
  descriptionMobile,
  href,
  ctaText = "Learn more",
  gradient = "blue",
  className = "",
  delay = 0,
}: FeatureCardProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn("h-full", className)}
    >
      <Card className="h-full transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 border-gray-200 rounded-xl flex flex-col">
        <CardHeader className="p-3 sm:p-4 md:p-6 flex flex-col gap-1 sm:gap-2 md:gap-0">
          <div
            className={cn(
              "h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4",
              gradientClasses[gradient]
            )}
          >
            <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
          </div>
          <CardTitle className="text-xs sm:text-sm md:text-base lg:text-lg font-bold leading-tight break-words">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 pt-0 sm:p-4 sm:pt-0 md:p-6 md:pt-0 flex flex-col gap-1 flex-grow">
          <CardDescription className="text-[13px] sm:text-sm md:text-base mb-2 sm:mb-3 md:mb-4 text-gray-600 break-words leading-snug">
            <span className="md:hidden">{descriptionMobile || description}</span>
            <span className="hidden md:inline">{description}</span>
          </CardDescription>
          {href && (
            <Button variant="ghost" asChild className="p-0 group mt-auto">
              <Link href={href} className="flex items-center gap-2 text-xs sm:text-sm">
                {ctaText}
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );

  return content;
}

