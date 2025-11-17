"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface NewsletterSectionProps {
  variant?: "default" | "compact";
  className?: string;
}

export function NewsletterSection({
  variant = "default",
  className = "",
}: NewsletterSectionProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail("");
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const isCompact = variant === "compact";

  return (
    <section
      className={cn(
        "section-padding bg-gradient-achilles relative overflow-hidden",
        className
      )}
    >
      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="section-wrapper relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn(
            "text-center",
            isCompact ? "max-w-2xl mx-auto" : "max-w-3xl mx-auto"
          )}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6"
          >
            <Mail className="h-8 w-8 text-white" />
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            {isCompact ? "Stay Updated" : "Stay in the Loop"}
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8">
            {isCompact
              ? "Get the latest tips and insights on virtual assistance delivered to your inbox."
              : "Subscribe to our newsletter for the latest insights, tips, and updates on virtual assistance and business growth."}
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 rounded-full bg-white/95 backdrop-blur-sm border-0 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-white/50 text-sm sm:text-base"
                  disabled={isSubmitting || isSubmitted}
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="h-12 rounded-full bg-white text-achilles-blue hover:bg-white/90 font-semibold px-6 sm:px-8 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
              >
                {isSubmitted ? (
                  "Subscribed!"
                ) : isSubmitting ? (
                  "Subscribing..."
                ) : (
                  <>
                    Subscribe
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
            {isSubmitted && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-white/90 text-sm"
              >
                Thank you for subscribing! Check your inbox for confirmation.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

