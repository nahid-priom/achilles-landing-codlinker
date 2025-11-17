"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/page-hero";
import { SectionWrapper } from "@/components/section-wrapper";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookCallButton } from "@/components/book-call-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$499",
    period: "/month",
    description: "Perfect for small businesses getting started",
    features: [
      "10 hours/month of VA support",
      "1 dedicated virtual assistant",
      "Social media management",
      "Email support",
      "Monthly progress reports",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "$1,299",
    period: "/month",
    description: "Ideal for growing businesses with expanding needs",
    features: [
      "30 hours/month of VA support",
      "1-2 dedicated virtual assistants",
      "All core services included",
      "Priority support",
      "Weekly progress reports",
      "Dedicated account manager",
    ],
    popular: true,
  },
  {
    name: "Scale",
    price: "$2,499",
    period: "/month",
    description: "For established businesses requiring comprehensive support",
    features: [
      "60+ hours/month of VA support",
      "2-3 dedicated virtual assistants",
      "All services + custom solutions",
      "24/7 priority support",
      "Daily progress updates",
      "Dedicated account manager",
      "Custom integrations",
    ],
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="Simple, Transparent Pricing"
        description="Choose the plan that fits your business needs. All plans include our quality guarantee and can be customized to your requirements."
      />

      <SectionWrapper>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={plan.popular ? "lg:-mt-4 lg:mb-4" : ""}
            >
              <Card
                className={`h-full flex flex-col transition-all duration-300 hover:shadow-card-hover ${
                  plan.popular
                    ? "border-2 border-achilles-blue shadow-xl scale-105"
                    : "border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-achilles-blue to-achilles-blue-light text-white text-center py-2 text-sm font-semibold rounded-t-lg">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-achilles-blue mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <BookCallButton
                    variant={plan.popular ? "achillesPrimary" : "default"}
                    className="w-full"
                  >
                    Get Started
                  </BookCallButton>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            Need a custom solution? We're happy to create a tailored plan for
            your business.
          </p>
          <Button asChild variant="achillesSecondary">
            <Link href="/contact">Contact Us for Custom Pricing</Link>
          </Button>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}

