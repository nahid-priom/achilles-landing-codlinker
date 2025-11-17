"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookCallButton } from "@/components/book-call-button";
import Link from "next/link";
import { Download, Share2, PenTool, FolderKanban, Calculator, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white section-padding">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-achilles-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-achilles-blue-light/5 rounded-full blur-3xl"></div>
      </div>

      <div className="section-wrapper relative z-10">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs sm:text-sm font-semibold text-achilles-blue uppercase tracking-wider mb-3 sm:mb-4"
            >
              Your Trusted Virtual Assistant Partner
            </motion.p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4 md:mb-6 leading-tight">
              Scale Your Business with{" "}
              <span className="text-achilles-blue">Dedicated Virtual</span>{" "}
              Assistants
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg leading-7 md:leading-8 text-gray-600 mb-6 md:mb-10"
            >
              <span className="md:hidden">
                We connect growing businesses with top-tier virtual assistants so you can focus on what matters most.
              </span>
              <span className="hidden md:inline">
                We help small and medium businesses scale efficiently by connecting
                you with top-tier virtual assistants. From social media management
                to bookkeeping, we handle it all so you can focus on what matters
                most.
              </span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-3 sm:gap-4 sm:flex-row"
            >
              <BookCallButton
                variant="achillesPrimary"
                size="lg"
                showArrow
                className="group w-full sm:w-auto"
              />
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Button
                  asChild
                  variant="achillesSecondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Link href="#" className="flex items-center justify-center gap-2">
                    <Download className="h-5 w-5" />
                    Download Service Guide
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative "
          >
            <div className="relative rounded-2xl bg-gradient-achilles-soft lg:p-8 p-4 shadow-2xl border border-achilles-blue-lighter/30 backdrop-blur-sm">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-achilles-blue/10 to-achilles-blue-light/5 blur-xl"></div>
              
              <div className="relative grid grid-cols-2 gap-4">
                {[
                  { icon: Share2, title: "Social Media", desc: "Content & engagement", gradient: "from-achilles-blue to-achilles-blue-light" },
                  { icon: PenTool, title: "Content", desc: "Creation & strategy", gradient: "from-achilles-blue-light to-achilles-blue-lighter" },
                  { icon: FolderKanban, title: "Projects", desc: "Management & coordination", gradient: "from-achilles-blue-dark to-achilles-blue" },
                  { icon: Calculator, title: "Bookkeeping", desc: "Financial organization", gradient: "from-achilles-blue to-achilles-blue-dark" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="rounded-xl bg-white p-4 shadow-card border border-gray-100 hover:shadow-card-hover transition-all"
                    >
                      <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.gradient} mb-4 flex items-center justify-center`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-xl lg:text-3xl text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

