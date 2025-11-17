"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/page-hero";
import { SectionWrapper } from "@/components/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LeadForm } from "@/components/lead-form";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="Get in Touch"
        description="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      />

      <SectionWrapper>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-achilles-blue to-achilles-blue-light flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a
                    href="mailto:achillesvirtualagency@gmail.com"
                    className="text-gray-600 hover:text-achilles-blue transition-colors"
                  >
                    achillesvirtualagency@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-achilles-blue-light to-achilles-blue-lighter flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">
                    Available during business hours (EST)
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-achilles-blue-dark to-achilles-blue flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Location
                  </h3>
                  <p className="text-gray-600">
                    Serving clients globally with virtual assistants worldwide
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 rounded-xl bg-gradient-achilles-soft border border-achilles-blue-lighter/30">
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-achilles-blue mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p>Saturday: 10:00 AM - 2:00 PM EST</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-lg border-gray-200">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <LeadForm variant="compact" />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
}

