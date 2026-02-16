"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormData) {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name Field */}
      <div className="space-y-2">
        <Label
          htmlFor="name"
          className="text-sm font-medium text-foreground"
        >
          Name
        </Label>
        <Input
          id="name"
          placeholder="Your name"
          className={cn(
            "border-white-10 bg-white-5 text-foreground placeholder:text-text-body/50",
            "focus:border-cyan focus:ring-1 focus:ring-cyan/30",
            errors.name && "border-destructive"
          )}
          {...register("name")}
        />
        {errors.name && (
          <p className="text-xs text-destructive">{errors.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <Label
          htmlFor="email"
          className="text-sm font-medium text-foreground"
        >
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="your@email.com"
          className={cn(
            "border-white-10 bg-white-5 text-foreground placeholder:text-text-body/50",
            "focus:border-cyan focus:ring-1 focus:ring-cyan/30",
            errors.email && "border-destructive"
          )}
          {...register("email")}
        />
        {errors.email && (
          <p className="text-xs text-destructive">{errors.email.message}</p>
        )}
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <Label
          htmlFor="message"
          className="text-sm font-medium text-foreground"
        >
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="Tell me about your project..."
          rows={5}
          className={cn(
            "resize-none border-white-10 bg-white-5 text-foreground placeholder:text-text-body/50",
            "focus:border-cyan focus:ring-1 focus:ring-cyan/30",
            errors.message && "border-destructive"
          )}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting || isSubmitted}
        className={cn(
          "w-full rounded-lg bg-cyan py-3 font-medium text-dark transition-all duration-200",
          "hover:bg-cyan/90 disabled:opacity-60"
        )}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </span>
        ) : isSubmitted ? (
          <span className="flex items-center justify-center gap-2">
            <CheckCircle className="h-4 w-4" />
            Message Sent!
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            <Send className="h-4 w-4" />
            Send Message
          </span>
        )}
      </Button>
    </form>
  );
}
