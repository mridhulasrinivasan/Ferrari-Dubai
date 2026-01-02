import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { ChevronDown, MapPin, Phone, Clock, Mail, ArrowRight, Gauge, Zap, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema, type ContactFormData, type FerrariModel } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

import ferrariImage1 from "@assets/stock_images/ferrari_sports_car_r_c8f139ca.jpg";
import ferrariImage2 from "@assets/stock_images/ferrari_sports_car_r_1bc5a312.jpg";
import ferrariImage3 from "@assets/stock_images/ferrari_sports_car_r_2664ea5d.jpg";
import ferrariImage4 from "@assets/stock_images/ferrari_sports_car_r_6ed37a2c.jpg";
import ferrariImage5 from "@assets/stock_images/ferrari_sports_car_r_6be13489.jpg";
import ferrariImage6 from "@assets/stock_images/ferrari_sports_car_r_cd8b0653.jpg";
import showroomImage from "@assets/stock_images/luxury_car_showroom__e722b374.jpg";

const ferrariModels: FerrariModel[] = [
  {
    id: "sf90-stradale",
    name: "SF90 Stradale",
    tagline: "The Ultimate Hybrid Supercar",
    horsepower: "986 HP",
    acceleration: "2.5s 0-100",
    topSpeed: "340 km/h",
    price: "From AED 1,890,000",
    image: ferrariImage1,
  },
  {
    id: "296-gtb",
    name: "296 GTB",
    tagline: "Redefining Fun to Drive",
    horsepower: "830 HP",
    acceleration: "2.9s 0-100",
    topSpeed: "330 km/h",
    price: "From AED 1,250,000",
    image: ferrariImage2,
  },
  {
    id: "roma",
    name: "Ferrari Roma",
    tagline: "La Nuova Dolce Vita",
    horsepower: "620 HP",
    acceleration: "3.4s 0-100",
    topSpeed: "320 km/h",
    price: "From AED 890,000",
    image: ferrariImage3,
  },
  {
    id: "812-superfast",
    name: "812 Superfast",
    tagline: "The Essence of a Front-Engine V12",
    horsepower: "800 HP",
    acceleration: "2.9s 0-100",
    topSpeed: "340 km/h",
    price: "From AED 1,450,000",
    image: ferrariImage4,
  },
  {
    id: "portofino-m",
    name: "Portofino M",
    tagline: "The Evolution of the GT Spider",
    horsepower: "620 HP",
    acceleration: "3.45s 0-100",
    topSpeed: "320 km/h",
    price: "From AED 850,000",
    image: ferrariImage5,
  },
  {
    id: "f8-tributo",
    name: "F8 Tributo",
    tagline: "A Tribute to the Most Powerful V8",
    horsepower: "720 HP",
    acceleration: "2.9s 0-100",
    topSpeed: "340 km/h",
    price: "From AED 1,100,000",
    image: ferrariImage6,
  },
];

function HeroSection() {
  const scrollToModels = () => {
    document.getElementById("models")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-60"
          poster={showroomImage}
        >
          <source
            src="https://player.vimeo.com/external/517090081.sd.mp4?s=44d42dd4b32d9e3e0c5a9d7ec8fb1d32a27a1cf5&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <div className="animate-fade-in space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/80" data-testid="text-hero-location">
              Dubai, United Arab Emirates
            </p>
            <h1
              className="text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl"
              style={{ letterSpacing: "0.02em" }}
              data-testid="text-hero-title"
            >
              Ferrari Dubai
            </h1>
            <p
              className="mx-auto max-w-xl text-lg font-light text-white/90 md:text-xl"
              style={{ letterSpacing: "0.02em" }}
              data-testid="text-hero-tagline"
            >
              Experience the pinnacle of Italian automotive excellence
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              onClick={scrollToModels}
              className="font-semibold tracking-wide"
              data-testid="button-explore-models"
            >
              Explore Models
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-white/30 bg-white/10 font-semibold tracking-wide text-white backdrop-blur-sm"
              data-testid="button-book-experience"
            >
              Book Experience
            </Button>
          </div>
        </div>

        <button
          onClick={scrollToModels}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/60 transition-colors hover:text-white"
          aria-label="Scroll to models"
          data-testid="button-scroll-down"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
}

function ModelCard({ model }: { model: FerrariModel }) {
  return (
    <Card
      className="group overflow-visible border border-border bg-card transition-transform duration-300 hover:-translate-y-1"
      data-testid={`card-model-${model.id}`}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={model.image}
          alt={model.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="space-y-4 p-8">
        <div>
          <h3
            className="text-2xl font-semibold tracking-tight"
            data-testid={`text-model-name-${model.id}`}
          >
            {model.name}
          </h3>
          <p className="text-sm text-muted-foreground" data-testid={`text-model-tagline-${model.id}`}>
            {model.tagline}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 border-t border-border pt-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-primary">
              <Gauge className="h-4 w-4" />
            </div>
            <p className="mt-1 text-sm font-semibold" data-testid={`text-spec-hp-${model.id}`}>
              {model.horsepower}
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-primary">
              <Zap className="h-4 w-4" />
            </div>
            <p className="mt-1 text-sm font-semibold" data-testid={`text-spec-accel-${model.id}`}>
              {model.acceleration}
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-primary">
              <Trophy className="h-4 w-4" />
            </div>
            <p className="mt-1 text-sm font-semibold" data-testid={`text-spec-speed-${model.id}`}>
              {model.topSpeed}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-border pt-4">
          <p className="font-medium text-muted-foreground" data-testid={`text-price-${model.id}`}>
            {model.price}
          </p>
          <Button variant="ghost" className="gap-2 text-primary" data-testid={`button-explore-${model.id}`}>
            Explore
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function FeaturedModels() {
  return (
    <section id="models" className="bg-background py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary" data-testid="text-models-subtitle">
            Our Collection
          </p>
          <h2
            className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl"
            data-testid="text-models-title"
          >
            Featured Models
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground" data-testid="text-models-description">
            Discover the extraordinary range of Ferrari vehicles available at our Dubai showroom.
            Each model represents the perfect fusion of performance, luxury, and Italian craftsmanship.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ferrariModels.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VirtualTourCTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0">
        <img
          src={showroomImage}
          alt="Ferrari Showroom Interior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="md:max-w-xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary" data-testid="text-tour-subtitle">
            Immersive Experience
          </p>
          <h2
            className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl"
            data-testid="text-tour-title"
          >
            Virtual Showroom Tour
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/80" data-testid="text-tour-description">
            Experience our world-class showroom from anywhere in the world.
            Explore every detail of our exclusive collection through our immersive virtual tour.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3 text-white/90">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                1
              </div>
              <span>360-degree views of every model</span>
            </li>
            <li className="flex items-center gap-3 text-white/90">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                2
              </div>
              <span>Interactive interior exploration</span>
            </li>
            <li className="flex items-center gap-3 text-white/90">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                3
              </div>
              <span>Personalized configuration options</span>
            </li>
          </ul>

          <Button
            size="lg"
            className="mt-10 gap-3 font-semibold tracking-wide"
            data-testid="button-start-tour"
          >
            Start Virtual Tour
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const { toast } = useToast();
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      modelInterest: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for your interest. Our team will contact you shortly.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  return (
    <section id="contact" className="bg-card py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary" data-testid="text-contact-subtitle">
            Get In Touch
          </p>
          <h2
            className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl"
            data-testid="text-contact-title"
          >
            Contact Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground" data-testid="text-contact-description">
            Schedule a private viewing, request a test drive, or speak with our expert team
            about your dream Ferrari.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <Card className="border border-border bg-background p-8 md:p-12">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold">Full Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your name"
                          className="border"
                          data-testid="input-name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            className="border"
                            data-testid="input-email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">Phone</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="+971 XX XXX XXXX"
                            className="border"
                            data-testid="input-phone"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="modelInterest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold">Model of Interest</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="border" data-testid="select-model">
                            <SelectValue placeholder="Select a model" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {ferrariModels.map((model) => (
                            <SelectItem key={model.id} value={model.id}>
                              {model.name}
                            </SelectItem>
                          ))}
                          <SelectItem value="other">Other / General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold">Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your requirements..."
                          className="min-h-[120px] border"
                          data-testid="textarea-message"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full font-semibold tracking-wide"
                  disabled={mutation.isPending}
                  data-testid="button-submit-contact"
                >
                  {mutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </Card>

          <div className="space-y-8">
            <Card className="border border-border bg-background p-8">
              <h3 className="text-xl font-semibold" data-testid="text-showroom-title">Our Showroom</h3>
              <div className="mt-6 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium" data-testid="text-address">Address</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Sheikh Zayed Road, Exit 41<br />
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium" data-testid="text-phone-label">Phone</p>
                    <p className="mt-1 text-sm text-muted-foreground">+971 4 XXX XXXX</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium" data-testid="text-email-label">Email</p>
                    <p className="mt-1 text-sm text-muted-foreground">info@ferraridubai.ae</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium" data-testid="text-hours-label">Opening Hours</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Saturday - Thursday: 10:00 AM - 9:00 PM<br />
                      Friday: 2:00 PM - 9:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="aspect-video overflow-hidden rounded-md border border-border bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.9584963339483!2d55.2707!3d25.1972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDExJzQ5LjkiTiA1NcKwMTYnMTQuNSJF!5e0!3m2!1sen!2sae!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ferrari Dubai Location"
                data-testid="map-showroom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-bold tracking-tight" data-testid="text-footer-brand">
              Ferrari Dubai
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              The official Ferrari dealership in Dubai, offering an unparalleled luxury automotive experience.
            </p>
          </div>

          <div>
            <h4 className="font-semibold" data-testid="text-quick-links">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#models" className="transition-colors hover:text-foreground" data-testid="link-models">
                  Our Models
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground" data-testid="link-services">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground" data-testid="link-about">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-foreground" data-testid="link-contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold" data-testid="text-newsletter">Newsletter</h4>
            <p className="mt-4 text-sm text-muted-foreground">
              Stay updated with the latest Ferrari news and exclusive offers.
            </p>
            <div className="mt-4 flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border"
                data-testid="input-newsletter-email"
              />
              <Button data-testid="button-newsletter-subscribe">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            2024 Ferrari Dubai. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground" data-testid="link-privacy">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-foreground" data-testid="link-terms">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturedModels />
      <VirtualTourCTA />
      <ContactForm />
      <Footer />
    </div>
  );
}
