"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/page-hero";
import { SectionWrapper } from "@/components/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LeadForm } from "@/components/lead-form";
import { Check, Clock } from "lucide-react";
import { useSearchParams } from "next/navigation";

const benefits = [
  "Understand your specific business needs and challenges",
  "Learn about our VA matching process and timeline",
  "Get a customized service recommendation",
  "Discuss pricing and package options",
  "Ask any questions about our services",
];

function BookACallContent() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || undefined;

  return (
    <div className="bg-white">
      <PageHero
        title="Book a Free Discovery Call"
        description="Let's discuss how we can help your business grow with the right virtual assistant support."
      />

      <SectionWrapper>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left: Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              What to Expect
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              During your free discovery call, we'll take the time to
              understand your business, discuss your goals, and explore how
              our virtual assistant services can help you achieve them. This
              is a no-pressure conversation designed to see if we're a good
              fit for each other.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              What You'll Get:
            </h3>
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start">
                  <Check className="h-5 w-5 text-achilles-blue mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="p-6 rounded-xl bg-gradient-achilles-soft border border-achilles-blue-lighter/30">
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-achilles-blue mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Call Duration
                  </h3>
                  <p className="text-gray-700">
                    Most discovery calls last 30-45 minutes. We'll make sure to
                    cover everything you need to know and answer all your
                    questions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-lg border-gray-200">
              <CardHeader>
                <CardTitle>Schedule Your Call</CardTitle>
                <p className="text-sm text-gray-600 mt-2">
                  Fill out the form below and we'll get back to you within 24
                  hours to schedule your discovery call.
                </p>
              </CardHeader>
              <CardContent>
                <LeadForm
                  variant="full"
                  preselectedService={preselectedService}
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
}

export default function BookACallPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <BookACallContent />
    </Suspense>
  );
}

