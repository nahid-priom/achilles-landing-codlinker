"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { Phone, UserCheck, Rocket, Headphones } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Discovery Call",
    description:
      "We start with a free consultation to understand your business needs, goals, and challenges.",
  },
  {
    icon: UserCheck,
    title: "VA Matching",
    description:
      "Our team matches you with a pre-vetted virtual assistant who has the right skills and experience.",
  },
  {
    icon: Rocket,
    title: "Onboarding",
    description:
      "Smooth onboarding process with clear communication channels, tools setup, and workflow alignment.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description:
      "Continuous support and regular check-ins to ensure everything runs smoothly and meets your expectations.",
  },
];

export function HowItWorks() {
  return (
    <SectionWrapper className="bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-gray-900 mb-3 sm:mb-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            A simple, streamlined process to get you started
          </p>
        </motion.div>

      <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4 sm:mb-6">
                  <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-br from-achilles-blue to-achilles-blue-light flex items-center justify-center shadow-lg">
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-achilles-blue-lighter transform -translate-y-1/2" />
                  )}
                </div>
                <div className="text-xl sm:text-2xl font-bold text-achilles-blue mb-2">
                  {index + 1}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

