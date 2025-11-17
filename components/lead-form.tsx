"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Toast } from "@/components/ui/toast";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  businessName: z.string().optional(),
  email: z.string().email("Invalid email address"),
  country: z.string().min(1, "Please select a country"),
  services: z.string().min(1, "Please select at least one service"),
  preferredTime: z.string().optional(),
  budgetRange: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface LeadFormProps {
  variant?: "full" | "compact";
  preselectedService?: string;
}

export function LeadForm({ variant = "full", preselectedService }: LeadFormProps) {
  const [showToast, setShowToast] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      services: preselectedService || "",
    },
  });

  const onSubmit = async (data: FormData) => {
    // TODO: Replace with actual API call to your backend
    // Example: await fetch('/api/leads', { method: 'POST', body: JSON.stringify(data) })
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", data);
    setShowToast(true);
    reset();
  };

  const services = [
    "Social Media Management",
    "Content Creation",
    "Project Management",
    "Bookkeeping",
    "Not sure yet",
  ];

  if (variant === "compact") {
    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="fullName-compact">Full Name *</Label>
            <Input
              id="fullName-compact"
              {...register("fullName")}
              placeholder="John Doe"
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="email-compact">Email *</Label>
            <Input
              id="email-compact"
              type="email"
              {...register("email")}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="services-compact">Service Interested In *</Label>
            <Select id="services-compact" {...register("services")}>
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </Select>
            {errors.services && (
              <p className="mt-1 text-sm text-red-600">
                {errors.services.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="message-compact">Message</Label>
            <Textarea
              id="message-compact"
              {...register("message")}
              placeholder="Tell us about your needs..."
              rows={4}
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            variant="achillesPrimary"
            className="w-full"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>

        {showToast && (
          <Toast
            message="Thanks! We'll get back to you within 24 hours."
            onClose={() => setShowToast(false)}
          />
        )}
      </>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              {...register("fullName")}
              placeholder="John Doe"
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="businessName">Business Name</Label>
            <Input
              id="businessName"
              {...register("businessName")}
              placeholder="Acme Inc."
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <Label htmlFor="country">Country / Time Zone *</Label>
            <Select id="country" {...register("country")}>
              <option value="">Select country</option>
              <option value="US-EST">United States (EST)</option>
              <option value="US-PST">United States (PST)</option>
              <option value="US-CST">United States (CST)</option>
              <option value="UK">United Kingdom (GMT)</option>
              <option value="EU-CET">Europe (CET)</option>
              <option value="AU">Australia (AEST)</option>
              <option value="Other">Other</option>
            </Select>
            {errors.country && (
              <p className="mt-1 text-sm text-red-600">
                {errors.country.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="budgetRange">Budget Range</Label>
            <Select id="budgetRange" {...register("budgetRange")}>
              <option value="">Select budget range</option>
              <option value="under-500">Under $500/month</option>
              <option value="500-1000">$500 - $1,000/month</option>
              <option value="1000-2500">$1,000 - $2,500/month</option>
              <option value="2500-5000">$2,500 - $5,000/month</option>
              <option value="5000+">$5,000+/month</option>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="services">Services Interested In *</Label>
          <Select id="services" {...register("services")}>
            <option value="">Select services</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </Select>
          {errors.services && (
            <p className="mt-1 text-sm text-red-600">
              {errors.services.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="preferredTime">Preferred Call Time</Label>
          <Input
            id="preferredTime"
            type="datetime-local"
            {...register("preferredTime")}
          />
        </div>

        <div>
          <Label htmlFor="message">Message / Notes</Label>
          <Textarea
            id="message"
            {...register("message")}
            placeholder="Tell us about your business needs..."
            rows={5}
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          variant="achillesPrimary"
          className="w-full"
        >
          {isSubmitting ? "Submitting..." : "Book a Free Discovery Call"}
        </Button>
      </form>

      {showToast && (
        <Toast
          message="Thanks! We'll get back to you within 24 hours."
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
}

