"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { Phone, Loader2, CalendarCheck, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";

const formSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  date: z.string().min(1, "Preferred date is required").refine((val) => {
    if (!val) return false;
    const selectedDate = new Date(val);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today;
  }, { message: "Date cannot be in the past" }),
  time: z.string().min(1, "Preferred time is required"),
  treatment: z.string().optional(),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function BookingModal({ children }: { children: React.ReactElement }) {
  const [open, setOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isPending, startTransition] = useTransition();

  const today = new Date();
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    startTransition(async () => {
      try {
        setIsError(false);
        // Placeholders for environment variables
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

        const templateParams = {
          patient_name: data.fullName,
          patient_phone: data.phone,
          patient_email: data.email || "N/A",
          preferred_date: data.date,
          preferred_time: data.time,
          treatment: data.treatment || "General Consultation",
          notes: data.notes || "No additional notes",
          submission_time: new Date().toLocaleString(),
          to_email: "anshneha26@gmail.com",
        };

        if (serviceId !== "YOUR_SERVICE_ID") {
          await emailjs.send(serviceId, templateId, templateParams, publicKey);
        } else {
          // Mock successful submission for dev if vars are not set
          await new Promise((resolve) => setTimeout(resolve, 1500));
        }

        setIsSuccess(true);
      } catch (err) {
        console.error("EmailJS Error:", err);
        setIsError(true);
      }
    });
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      // Reset form after a slight delay to allow closing animation
      setTimeout(() => {
        reset();
        setIsSuccess(false);
        setIsError(false);
      }, 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger
        className="[&>button]:w-full [&>button]:flex [&>button]:justify-center [&>a]:w-full [&>a]:flex [&>a]:justify-center"
        render={children}
      />
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-md md:max-w-lg p-0 border-border/70 rounded-2xl">
        {isSuccess ? (
          <div className="p-8 flex flex-col items-center text-center space-y-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
              <CalendarCheck className="w-8 h-8 text-green-600" />
            </div>
            <div className="space-y-2">
              <DialogTitle className="text-2xl font-bold text-foreground">
                Appointment Request Sent!
              </DialogTitle>
              <DialogDescription className="text-base text-muted-foreground leading-relaxed max-w-[320px] mx-auto">
                Thank you for choosing Kavita Dental Clinic. We have successfully received your appointment request. Our team will contact you shortly to confirm your appointment.
              </DialogDescription>
            </div>
            <p className="text-sm font-medium text-foreground/80 bg-muted/50 py-3 px-4 rounded-xl border border-border/50">
              If your concern is urgent, please call or WhatsApp us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full pt-2">
              <a
                href="tel:+919868387331"
                className="flex-1 flex items-center justify-center gap-2 h-11 px-4 rounded-xl border border-border hover:bg-muted font-medium transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Clinic
              </a>
              <a
                href="https://wa.me/919868387331"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 h-11 px-4 rounded-xl bg-[#25D366] text-white hover:bg-[#20b958] font-medium transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
            <Button
              variant="ghost"
              className="w-full text-muted-foreground hover:text-foreground"
              onClick={() => handleOpenChange(false)}
            >
              Close
            </Button>
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="p-6 pb-4 border-b border-border/50 bg-muted/20">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold">Book an Appointment</DialogTitle>
                <DialogDescription>
                  Fill out the form below and we'll get back to you to confirm your slot.
                </DialogDescription>
              </DialogHeader>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="font-semibold text-foreground">Full Name *</Label>
                  <Input
                    id="fullName"
                    placeholder="John Doe"
                    {...register("fullName")}
                    className={errors.fullName ? "border-destructive focus-visible:ring-destructive/20" : ""}
                  />
                  {errors.fullName && <p className="text-[11px] text-destructive font-medium">{errors.fullName.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-semibold text-foreground">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    {...register("phone")}
                    className={errors.phone ? "border-destructive focus-visible:ring-destructive/20" : ""}
                  />
                  {errors.phone && <p className="text-[11px] text-destructive font-medium">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="font-semibold text-foreground">Email Address <span className="text-muted-foreground font-normal">(Optional)</span></Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  {...register("email")}
                  className={errors.email ? "border-destructive focus-visible:ring-destructive/20" : ""}
                />
                {errors.email && <p className="text-[11px] text-destructive font-medium">{errors.email.message}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="date" className="font-semibold text-foreground">Preferred Date *</Label>
                  <Input
                    id="date"
                    type="date"
                    min={todayStr}
                    {...register("date")}
                    className={errors.date ? "border-destructive focus-visible:ring-destructive/20" : ""}
                  />
                  {errors.date && <p className="text-[11px] text-destructive font-medium">{errors.date.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time" className="font-semibold text-foreground">Preferred Time *</Label>
                  <Input
                    id="time"
                    type="time"
                    {...register("time")}
                    className={errors.time ? "border-destructive focus-visible:ring-destructive/20" : ""}
                  />
                  {errors.time && <p className="text-[11px] text-destructive font-medium">{errors.time.message}</p>}
                </div>
              </div>

              {/* Displaying clinic hours as a helpful hint */}
              <div className="bg-primary/5 rounded-lg p-3 text-xs border border-primary/10 space-y-1.5">
                <p className="font-semibold text-primary">Available Timings:</p>
                <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-muted-foreground">
                  <div>
                    <span className="font-medium text-foreground/80 block">Mon – Sat</span>
                    <span className="block">9:30 AM – 2:00 PM</span>
                    <span className="block">5:00 PM – 8:30 PM</span>
                  </div>
                  <div>
                    <span className="font-medium text-foreground/80 block">Sunday</span>
                    <span className="block">Morning by appt</span>
                    <span className="block">Evening closed</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="treatment" className="font-semibold text-foreground">Treatment Needed <span className="text-muted-foreground font-normal">(Optional)</span></Label>
                <select
                  id="treatment"
                  aria-label="Select treatment needed"
                  className="flex h-10 w-full rounded-[min(var(--radius-md),10px)] border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring/50 focus-visible:border-ring disabled:cursor-not-allowed disabled:opacity-50"
                  {...register("treatment")}
                >
                  <option value="">Select Treatment...</option>
                  <option value="General Consultation">General Consultation</option>
                  <option value="Root Canal Treatment">Root Canal Treatment</option>
                  <option value="Teeth Cleaning & Scaling">Teeth Cleaning & Scaling</option>
                  <option value="Dental Implants">Dental Implants</option>
                  <option value="Tooth Extraction">Tooth Extraction</option>
                  <option value="Tooth-Coloured Fillings">Tooth-Coloured Fillings</option>
                  <option value="Crowns & Bridges">Crowns & Bridges</option>
                  <option value="Dentures">Dentures</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes" className="font-semibold text-foreground">Additional Notes <span className="text-muted-foreground font-normal">(Optional)</span></Label>
                <Textarea
                  id="notes"
                  placeholder="Describe your concern or any specific requirements..."
                  className="resize-none h-20"
                  {...register("notes")}
                />
              </div>

              {isError && (
                <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium text-center">
                  Something went wrong while sending your appointment request. Please try again or contact us on WhatsApp.
                </div>
              )}

              <div className="pt-2">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-[15px] h-12 rounded-xl shadow-md"
                  disabled={isPending}
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending Request...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </Button>
              </div>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
