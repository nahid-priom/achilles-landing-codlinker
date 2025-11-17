"use client";

import { motion } from "framer-motion";
import { Users, Globe, Clock, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "+50",
    label: "Businesses Supported",
    description: "Growing every month",
  },
  {
    icon: Globe,
    value: "Global",
    label: "VA Talent Network",
    description: "Worldwide coverage",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Support Available",
    description: "Always here for you",
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Client Satisfaction",
    description: "Happy customers",
  },
];

export function StatsStrip() {
  return (
    <section className="relative border-y bg-gradient-achilles-soft py-12 sm:py-16 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-64 h-64 bg-achilles-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-achilles-blue-light/10 rounded-full blur-3xl"></div>
      </div>

      <div className="section-wrapper relative z-10">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-achilles-blue to-achilles-blue-light flex items-center justify-center mb-3 sm:mb-4 shadow-lg">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-600">{stat.description}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

