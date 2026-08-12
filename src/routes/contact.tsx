import { createFileRoute } from "@tanstack/react-router";
import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/site/Button";
import { CTASection } from "@/components/site/CTASection";
import { PageBanner, SectionHeading } from "@/components/site/PageBanner";
import { Reveal } from "@/components/site/Reveal";
import { company, images } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Eco-Friendly | Request a Manufacturing Quote" },
      {
        name: "description",
        content:
          "Talk to our nutraceutical manufacturing team in Baddi, Himachal Pradesh. Request a private label or third party manufacturing quote.",
      },
      { property: "og:title", content: "Contact Eco-Friendly Nutraceuticals" },
      {
        property: "og:description",
        content: "Request a costed manufacturing proposal within 48 working hours.",
      },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  company: z.string().trim().max(120).optional(),
  email: z.string().trim().email("Enter a valid email address").max(160),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  requirement: z.string().trim().min(2, "Tell us the product requirement").max(160),
  message: z.string().trim().min(10, "Please add a few more details").max(1200),
});

const fields = [
  { name: "name", label: "Name", type: "text", placeholder: "Your full name" },
  { name: "company", label: "Company", type: "text", placeholder: "Company name" },
  { name: "email", label: "Email", type: "email", placeholder: "you@company.com" },
  { name: "phone", label: "Phone", type: "tel", placeholder: "+91 00000 00000" },
] as const;

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      toast.error("Please check the highlighted fields");
      return;
    }

    setErrors({});
    setSending(true);
    setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Enquiry sent", {
        description: "Our business team will respond within 48 working hours.",
      });
    }, 700);
  };

  return (
    <>
      <PageBanner
        image={images.heroLab}
        eyebrow="Contact Us"
        title="Let's talk about your product"
        text="Tell us what you want to build and we'll respond with formulation options and costing."
      />

      <section className="py-14 lg:py-20">
        <div className="container-x grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Reach Us"
              title="Manufacturing enquiries"
              text="Our business development team handles private label, third party and export enquiries."
            />
            <Reveal delay={0.1}>
              <ul className="mt-10 space-y-7">
                {[
                  { Icon: MapPin, label: "Address", value: company.address },
                  { Icon: Phone, label: "Phone", value: company.phone, href: `tel:${company.phone}` },
                  { Icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
                  { Icon: Clock, label: "Business Hours", value: company.hours },
                ].map(({ Icon, label, value, href }) => (
                  <li key={label} className="flex gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-secondary/40 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.65rem] tracking-[0.22em] text-gold uppercase">
                        {label}
                      </span>
                      {href ? (
                        <a href={href} className="mt-1 block text-sm text-foreground hover:text-gold">
                          {value}
                        </a>
                      ) : (
                        <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                          {value}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex gap-3">
                {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social link"
                    className="grid h-11 w-11 place-items-center rounded-full border border-border text-primary transition-colors hover:border-gold hover:text-gold"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-3xl border border-border bg-card p-8 shadow-lift sm:p-10"
            >
              <h2 className="font-display text-2xl text-primary">Send an enquiry</h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {fields.map((f) => (
                  <div key={f.name}>
                    <label
                      htmlFor={f.name}
                      className="text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase"
                    >
                      {f.label}
                    </label>
                    <input
                      id={f.name}
                      name={f.name}
                      type={f.type}
                      placeholder={f.placeholder}
                      className="mt-2 w-full rounded-2xl border border-border bg-background px-5 py-3.5 text-sm transition-colors focus:border-gold focus:outline-none"
                    />
                    {errors[f.name] && (
                      <p className="mt-1.5 text-xs text-destructive">{errors[f.name]}</p>
                    )}
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="requirement"
                    className="text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase"
                  >
                    Product Requirement
                  </label>
                  <input
                    id="requirement"
                    name="requirement"
                    placeholder="e.g. Whey protein, 1kg jar, 5000 units"
                    className="mt-2 w-full rounded-2xl border border-border bg-background px-5 py-3.5 text-sm transition-colors focus:border-gold focus:outline-none"
                  />
                  {errors["requirement"] && (
                    <p className="mt-1.5 text-xs text-destructive">{errors["requirement"]}</p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your brand, timelines and volumes."
                    className="mt-2 w-full resize-none rounded-2xl border border-border bg-background px-5 py-3.5 text-sm transition-colors focus:border-gold focus:outline-none"
                  />
                  {errors["message"] && (
                    <p className="mt-1.5 text-xs text-destructive">{errors["message"]}</p>
                  )}
                </div>
              </div>
              <Button type="submit" variant="gold" size="lg" className="mt-8 w-full sm:w-auto" disabled={sending}>
                {sending ? "Sending…" : "Submit Enquiry"}
              </Button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="pb-14 lg:pb-20">
        <div className="container-x">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
              <iframe
                title="Eco-Friendly facility location"
                src="https://www.google.com/maps?q=Baddi%20Industrial%20Area%20Solan%20Himachal%20Pradesh&output=embed"
                width="100%"
                height="440"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
