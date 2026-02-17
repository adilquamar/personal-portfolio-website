"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Send, Loader2, CheckCircle } from "lucide-react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
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
    form.reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  }

  const { isSubmitting } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-foreground">
                Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Your name"
                  className={cn(
                    "border-border bg-muted text-foreground placeholder:text-muted-foreground/50",
                    "focus:border-slate-accent focus:ring-1 focus:ring-slate-accent/30",
                    fieldState.error && "border-destructive"
                  )}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-foreground">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className={cn(
                    "border-border bg-muted text-foreground placeholder:text-muted-foreground/50",
                    "focus:border-slate-accent focus:ring-1 focus:ring-slate-accent/30",
                    fieldState.error && "border-destructive"
                  )}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message Field */}
        <FormField
          control={form.control}
          name="message"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-foreground">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  className={cn(
                    "resize-none border-border bg-muted text-foreground placeholder:text-muted-foreground/50",
                    "focus:border-slate-accent focus:ring-1 focus:ring-slate-accent/30",
                    fieldState.error && "border-destructive"
                  )}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting || isSubmitted}
          className={cn(
            "w-full rounded-lg bg-slate-accent py-3 font-medium text-white transition-all duration-200",
            "hover:bg-slate-dark disabled:opacity-60"
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
    </Form>
  );
}
