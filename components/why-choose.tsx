"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { FeatureCard } from "@/components/feature-card";
import { Shield, Package, Globe2, UserCircle } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Pre-vetted VAs",
    description:
      "All our virtual assistants undergo rigorous screening and skill assessments to ensure quality.",
    gradient: "blue" as const,
  },
  {
    icon: Package,
    title: "Flexible Packages",
    description:
      "Choose from customizable packages that scale with your business needs and budget.",
    gradient: "light" as const,
  },
  {
    icon: Globe2,
    title: "Global Talent",
    description:
      "Access a diverse pool of talented VAs from around the world, available in multiple time zones.",
    gradient: "dark" as const,
  },
  {
    icon: UserCircle,
    title: "Dedicated Account Manager",
    description:
      "Get personalized support from a dedicated account manager who understands your business.",
    gradient: "blue" as const,
  },
];

export function WhyChoose() {
  return (
    <SectionWrapper className="bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #0F4C75 1px, transparent 1px),
                              linear-gradient(to bottom, #0F4C75 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-gray-900 mb-3 sm:mb-4">
            Why Choose Achilles
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            What sets us apart in the virtual assistant industry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

