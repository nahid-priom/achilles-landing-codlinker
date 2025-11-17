import { HeroSection } from "@/components/hero-section";
import { StatsStrip } from "@/components/stats-strip";
import { ServicesGrid } from "@/components/services-grid";
import { HowItWorks } from "@/components/how-it-works";
import { WhyChoose } from "@/components/why-choose";
import { TestimonialSection } from "@/components/testimonial-section";
import { CTASection } from "@/components/cta-section";
import { NewsletterSection } from "@/components/newsletter-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <ServicesGrid />
      <HowItWorks />
      <WhyChoose />
      <TestimonialSection />
      <NewsletterSection />
      <CTASection />
    </>
  );
}

