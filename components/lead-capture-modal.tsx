"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useLeadModal } from "@/components/lead-modal-context";
import {
  Mail,
  Globe,
  Clock,
  CheckCircle2,
  Loader2,
  User,
  Building2,
  DollarSign,
} from "lucide-react";

// Form validation schema
const leadFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  country: z.string().min(1, "Please select a country/time zone"),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  budget: z.string().min(1, "Please select a budget range"),
  preferredCallTime: z.string().optional(),
  message: z.string().optional(),
});

type LeadFormData = z.infer<typeof leadFormSchema>;

const countries = [
  "United States (EST)",
  "United States (PST)",
  "United States (CST)",
  "United Kingdom (GMT)",
  "Canada (EST)",
  "Canada (PST)",
  "Australia (AEST)",
  "Europe (CET)",
  "Other",
];

const services = [
  "Social Media",
  "Content",
  "Projects",
  "Bookkeeping",
  "Not sure yet",
];

const budgetRanges = [
  "$500 - $1,000/month",
  "$1,000 - $2,500/month",
  "$2,500 - $5,000/month",
  "$5,000+/month",
  "Not sure yet",
];

export function LeadCaptureModal() {
  const { isOpen, closeModal } = useLeadModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      services: [],
    },
  });

  // Register services field for validation
  register("services");

  const selectedServices = watch("services") || [];

  const toggleService = (service: string) => {
    const current = selectedServices;
    if (current.includes(service)) {
      setValue(
        "services",
        current.filter((s) => s !== service),
        { shouldValidate: true }
      );
    } else {
      setValue("services", [...current, service], { shouldValidate: true });
    }
  };

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    setSubmittedEmail(data.email);

    // Simulate API call
    // TODO: Replace this with actual API integration
    // Example: await fetch('/api/leads', { method: 'POST', body: JSON.stringify(data) })
    // Or integrate with Supabase, third-party email service, etc.
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Lead form submission:", data);

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleClose = (open: boolean) => {
    if (!open && !isSubmitting) {
      setIsSuccess(false);
      reset();
      closeModal();
    }
  };

  const handleCloseClick = () => {
    if (!isSubmitting) {
      setIsSuccess(false);
      reset();
      closeModal();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col bg-white border-0 shadow-2xl p-0 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-achilles-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-achilles-blue-light/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 flex flex-col flex-1 min-h-0">
          {/* Badge */}
          <div className="absolute top-4 left-6 z-20">
            <span className="inline-flex items-center px-3 py-1  mb-3 rounded-full text-xs font-semibold bg-achilles-blue-lighter/30 text-achilles-blue border border-achilles-blue/20">
              Free • No obligation
            </span>
          </div>

          {!isSuccess ? (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col flex-1 min-h-0">
              <div className="flex-1 overflow-y-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <DialogHeader className="px-8 pt-12 pb-6">
                    <DialogTitle className="text-2xl font-bold text-gray-900 text-left">
                      Book a Free Discovery Call
                    </DialogTitle>
                    <DialogDescription className="text-base text-gray-600 text-left mt-2">
                      Share a few details and we'll get back to you within 24 hours
                      with a tailored VA plan.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="px-8 pb-8">
                <div className="space-y-6">
                  {/* Full Name */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Label htmlFor="fullName" className="text-sm font-medium">
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative mt-1.5">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="fullName"
                        {...register("fullName")}
                        className="pl-10"
                        placeholder="John Doe"
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.fullName.message}
                      </p>
                    )}
                  </motion.div>

                  {/* Company */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <Label htmlFor="company" className="text-sm font-medium">
                      Company / Business Name
                    </Label>
                    <div className="relative mt-1.5">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="company"
                        {...register("company")}
                        className="pl-10"
                        placeholder="Acme Inc."
                      />
                    </div>
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative mt-1.5">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        className="pl-10"
                        placeholder="john@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </motion.div>

                  {/* Country / Time Zone */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    <Label htmlFor="country" className="text-sm font-medium">
                      Country / Time Zone <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative mt-1.5">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 z-10 pointer-events-none" />
                      <Select
                        id="country"
                        {...register("country")}
                        className="pl-10"
                      >
                        <option value="">Select your time zone</option>
                        {countries.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </Select>
                    </div>
                    {errors.country && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.country.message}
                      </p>
                    )}
                  </motion.div>

                  {/* Services Interested In */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Label className="text-sm font-medium">
                      Services Interested In{" "}
                      <span className="text-red-500">*</span>
                    </Label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-1.5">
                      {services.map((service) => (
                        <motion.button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all border-2 ${
                            selectedServices.includes(service)
                              ? "bg-achilles-blue text-white border-achilles-blue shadow-md"
                              : "bg-white text-gray-700 border-gray-200 hover:border-achilles-blue/50"
                          }`}
                        >
                          {service}
                        </motion.button>
                      ))}
                    </div>
                    {errors.services && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.services.message}
                      </p>
                    )}
                  </motion.div>

                  {/* Budget Range */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    <Label htmlFor="budget" className="text-sm font-medium">
                      Budget Range <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative mt-1.5">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 z-10 pointer-events-none" />
                      <Select
                        id="budget"
                        {...register("budget")}
                        className="pl-10"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </Select>
                    </div>
                    {errors.budget && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.budget.message}
                      </p>
                    )}
                  </motion.div>

                  {/* Preferred Call Time */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Label
                      htmlFor="preferredCallTime"
                      className="text-sm font-medium"
                    >
                      Preferred Call Time
                    </Label>
                    <div className="relative mt-1.5">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="preferredCallTime"
                        {...register("preferredCallTime")}
                        className="pl-10"
                        placeholder="e.g., Weekday mornings, Afternoons"
                      />
                    </div>
                  </motion.div>

                  {/* Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                  >
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message / Notes
                    </Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      className="mt-1.5 min-h-[100px]"
                      placeholder="Tell us more about your needs..."
                    />
                  </motion.div>
                </div>
                  </div>
                </motion.div>
              </div>

              {/* Sticky Footer with Buttons */}
              <div className="sticky bottom-0 bg-white border-t border-gray-200 px-8 py-4 z-30 mt-auto shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex gap-3"
                >
                  <Button
                    type="submit"
                    variant="achillesPrimary"
                    className="flex-1"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Request"
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleCloseClick}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                </motion.div>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="px-8 py-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="mb-6 flex justify-center"
              >
                <div className="h-20 w-20 rounded-full bg-achilles-blue-lighter/30 flex items-center justify-center">
                  <CheckCircle2 className="h-12 w-12 text-achilles-blue" />
                </div>
              </motion.div>
              <DialogTitle className="text-2xl font-bold text-gray-900 mb-3">
                Thanks, your discovery call request is in!
              </DialogTitle>
              <DialogDescription className="text-base text-gray-600 mb-8">
                We'll contact you within 24 hours at{" "}
                <span className="font-semibold text-achilles-blue">
                  {submittedEmail}
                </span>
                .
              </DialogDescription>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="achillesPrimary"
                  onClick={handleCloseClick}
                  className="min-w-[120px]"
                >
                  Close
                </Button>
                <Button
                  variant="achillesSecondary"
                  onClick={() => {
                    handleCloseClick();
                    // Navigate to services page if needed
                    window.location.href = "/services";
                  }}
                  className="min-w-[120px]"
                >
                  View Services
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

