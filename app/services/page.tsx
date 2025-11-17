"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/page-hero";
import { SectionWrapper } from "@/components/section-wrapper";
import { BookCallButton } from "@/components/book-call-button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Share2,
  PenTool,
  FolderKanban,
  Calculator,
  ArrowRight,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Comprehensive social media management to grow your online presence and engage with your audience effectively.",
    tasks: [
      "Content planning and scheduling across all platforms",
      "Community engagement and customer service",
      "Performance analytics and reporting",
      "Social media strategy development",
    ],
    gradient: "from-achilles-blue to-achilles-blue-light",
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description:
      "High-quality written and visual content that resonates with your audience and drives engagement.",
    tasks: [
      "Blog posts, articles, and website content",
      "Social media graphics and visuals",
      "Email newsletters and campaigns",
      "Video scripts and content planning",
    ],
    gradient: "from-achilles-blue-light to-achilles-blue-lighter",
  },
  {
    icon: FolderKanban,
    title: "Project Management",
    description:
      "Streamline workflows, coordinate teams, and keep projects on track with expert project management.",
    tasks: [
      "Project planning and timeline management",
      "Team coordination and communication",
      "Task tracking and progress monitoring",
      "Resource allocation and scheduling",
    ],
    gradient: "from-achilles-blue-dark to-achilles-blue",
  },
  {
    icon: Calculator,
    title: "Bookkeeping",
    description:
      "Accurate financial records, invoicing, expense tracking, and reporting to keep your finances organized.",
    tasks: [
      "Accounts payable and receivable",
      "Expense tracking and categorization",
      "Financial reporting and reconciliation",
      "Invoice creation and management",
    ],
    gradient: "from-achilles-blue to-achilles-blue-dark",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="What We Can Handle For You"
        description="Comprehensive virtual assistant services designed to help your business operate more efficiently and scale effectively."
      />

      <SectionWrapper>
        <div className="space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
                  <div>
                    <div
                      className={`h-16 w-16 rounded-xl bg-gradient-to-br ${service.gradient} mb-6 flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.tasks.map((task) => (
                        <li key={task} className="flex items-start">
                          <Check className="h-5 w-5 text-achilles-blue mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{task}</span>
                        </li>
                      ))}
                    </ul>
                    <BookCallButton
                      variant="achillesPrimary"
                      showArrow
                      className="group"
                    >
                      Start with this service
                    </BookCallButton>
                  </div>
                  <div className="relative">
                    <Card className="rounded-2xl bg-gradient-achilles-soft p-12 h-full flex items-center justify-center border-0 shadow-xl">
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-10`}></div>
                      <Icon className="h-32 w-32 text-achilles-blue/20 relative z-10" />
                    </Card>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>
    </div>
  );
}

