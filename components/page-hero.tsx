"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string | ReactNode;
  subtitle?: string;
  description?: string;
  className?: string;
  children?: ReactNode;
}

export function PageHero({
  title,
  subtitle,
  description,
  className = "",
  children,
}: PageHeroProps) {
  return (
    <section className={cn("section-padding page-hero-gradient relative overflow-hidden", className)}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-achilles-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-achilles-blue-light/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-wrapper relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm font-semibold text-achilles-blue uppercase tracking-wider mb-4"
            >
              {subtitle}
            </motion.p>
          )}
          <h1 className="text-gray-900 mb-6">
            {typeof title === "string" ? (
              <>
                {title.split(" ").map((word, i, arr) => {
                  const cleanWord = word.replace(/[.,!?;:]/g, "").toLowerCase();
                  const isHighlight = cleanWord.includes("achilles") || 
                                     cleanWord.includes("virtual") ||
                                     cleanWord.includes("assistant");
                  return (
                    <span key={i}>
                      {isHighlight ? (
                        <span className="text-achilles-blue">{word}</span>
                      ) : (
                        word
                      )}
                      {i < arr.length - 1 && " "}
                    </span>
                  );
                })}
              </>
            ) : (
              title
            )}
          </h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg leading-8 text-gray-700"
            >
              {description}
            </motion.p>
          )}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

