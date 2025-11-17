"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { BookCallButton } from "@/components/book-call-button";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

export function CTASection() {
  return (
    <SectionWrapper className="bg-gradient-achilles relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Ready to Scale with a Dedicated Virtual Assistant Team?
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8">
            Book a free discovery call and let&apos;s discuss how we can help your
            business grow efficiently and focus on what matters most.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <BookCallButton
              size="lg"
              showArrow
              className="bg-white text-white border border-white hover:bg-white/90 font-semibold rounded-full px-8 shadow-lg hover:shadow-xl transition-all group w-full sm:w-auto"
            />
            <Button
              asChild
              variant="achillesSecondary"
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full px-8 w-full sm:w-auto"
            >
              <Link href="/contact" className="flex items-center justify-center gap-2">
                <PhoneCall className="h-5 w-5" />
                Contact Us
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

