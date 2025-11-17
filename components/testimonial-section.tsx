"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content:
      "Achilles Virtual Agency transformed how we operate. Our VA handles all our social media and content creation, freeing us to focus on product development. Highly recommended!",
    rating: 5,
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Founder, Growth Co.",
    content:
      "The project management support we received was exceptional. Our VA keeps everything organized and on track. It's like having a full-time operations manager at a fraction of the cost.",
    rating: 5,
    avatar: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Owner, Creative Studio",
    content:
      "As a small business owner, bookkeeping was overwhelming. Our VA from Achilles handles all our financial records with precision. The peace of mind is invaluable.",
    rating: 5,
    avatar: "ER",
  },
];

export function TestimonialSection() {
  return (
    <SectionWrapper className="bg-gradient-achilles-soft relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-achilles-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-achilles-blue-light/10 rounded-full blur-3xl"></div>
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
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from businesses we&apos;ve helped grow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 border-gray-200 bg-white">
                <CardContent className="p-4 sm:p-6 pt-4 sm:pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-achilles-blue/30 mb-4" />
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {testimonial.content}
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-achilles-blue to-achilles-blue-light flex items-center justify-center text-white font-semibold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

