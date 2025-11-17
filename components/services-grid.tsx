"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { FeatureCard } from "@/components/feature-card";
import {
  Share2,
  PenTool,
  FolderKanban,
  Calculator,
} from "lucide-react";

const services = [
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Grow your online presence with strategic content planning, community engagement, and performance analytics.",
    descriptionMobile: "Strategic content planning and community engagement.",
    gradient: "blue" as const,
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description:
      "High-quality written and visual content that resonates with your audience and drives engagement.",
    descriptionMobile: "High-quality content that drives engagement.",
    gradient: "light" as const,
  },
  {
    icon: FolderKanban,
    title: "Project Management",
    description:
      "Streamline workflows, coordinate teams, and keep projects on track with expert project management.",
    descriptionMobile: "Streamline workflows and keep projects on track.",
    gradient: "dark" as const,
  },
  {
    icon: Calculator,
    title: "Bookkeeping",
    description:
      "Accurate financial records, invoicing, expense tracking, and reporting to keep your finances organized.",
    descriptionMobile: "Accurate financial records and expense tracking.",
    gradient: "blue" as const,
  },
];

export function ServicesGrid() {
  return (
    <SectionWrapper className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-gray-900 mb-3 sm:mb-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive virtual assistant solutions tailored to your business
            needs
          </p>
        </motion.div>

      <div className="w-full max-w-7xl mx-auto rounded-3xl bg-slate-50/60 shadow-[0_15px_40px_rgba(15,23,42,0.08)] p-3 sm:p-4 md:p-6">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <FeatureCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              descriptionMobile={service.descriptionMobile}
              href="/services"
              gradient={service.gradient}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

