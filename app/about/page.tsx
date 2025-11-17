"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/page-hero";
import { SectionWrapper } from "@/components/section-wrapper";
import { FeatureCard } from "@/components/feature-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Zap, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, ensuring our clients receive the highest quality service.",
    gradient: "blue" as const,
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We believe in building long-term partnerships with our clients, understanding their unique needs and goals.",
    gradient: "light" as const,
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We continuously innovate and adapt to new technologies and best practices to deliver cutting-edge solutions.",
    gradient: "dark" as const,
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "We operate with honesty, transparency, and integrity in all our business relationships.",
    gradient: "blue" as const,
  },
];

const team = [
  {
    name: "Alexandra Mitchell",
    role: "Founder & CEO",
    bio: "With over 15 years of experience in business operations and virtual assistance, Alexandra founded Achilles to bridge the gap between businesses and top-tier VA talent.",
    avatar: "AM",
  },
  {
    name: "David Chen",
    role: "Lead VA Manager",
    bio: "David oversees our VA recruitment and training programs, ensuring every virtual assistant meets our rigorous quality standards.",
    avatar: "DC",
  },
  {
    name: "Maria Rodriguez",
    role: "Operations Director",
    bio: "Maria manages day-to-day operations and client relationships, ensuring smooth onboarding and ongoing support for all our clients.",
    avatar: "MR",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="About Achilles Virtual Agency"
        description="Connecting businesses with exceptional virtual assistant talent since 2020"
      />

      {/* Story */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              Achilles Virtual Agency was founded with a simple mission: to
              make world-class virtual assistance accessible to businesses of
              all sizes. We recognized that many small and medium businesses
              struggle with operational tasks that prevent them from focusing
              on growth and innovation.
            </p>
            <p>
              Our team has carefully curated a network of pre-vetted virtual
              assistants from around the globe, each with specialized skills
              and proven track records. We don&apos;t just match you with a VA—we
              ensure they understand your business, align with your culture,
              and are equipped with the tools and knowledge to make an
              immediate impact.
            </p>
            <p>
              Today, we&apos;ve helped over 50 businesses streamline their
              operations, reduce costs, and scale more efficiently. Our
              commitment to excellence and personalized service has made us a
              trusted partner for businesses looking to leverage the power of
              virtual assistance.
            </p>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 mb-4">
            Our Values
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <FeatureCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
              gradient={value.gradient}
              delay={index * 0.1}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 mb-4">
            Meet the Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The people behind Achilles Virtual Agency
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full text-center transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
                <CardHeader>
                  <div className="h-24 w-24 rounded-full bg-gradient-to-br from-achilles-blue to-achilles-blue-light mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">
                      {member.avatar}
                    </span>
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <p className="text-achilles-blue font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}

