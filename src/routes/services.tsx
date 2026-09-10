import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/site/Button";
import { CTASection } from "@/components/site/CTASection";
import { PageBanner, SectionHeading } from "@/components/site/PageBanner";
import { Reveal } from "@/components/site/Reveal";
import { images, services } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Third Party & Private Label Manufacturing" },
      {
        name: "description",
        content:
          "Third party manufacturing, private label, OEM, packaging, product development, quality testing and export services for nutraceutical brands.",
      },
      { property: "og:title", content: "Nutraceutical Manufacturing Services | Eco-Friendly" },
      {
        property: "og:description",
        content:
          "Eight end-to-end manufacturing services covering formulation, production, packaging and export.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageBanner
        image={images.heroFactory}
        eyebrow="Our Services"
        title="Everything between your idea and the shelf"
        text="Formulation, production, packaging, compliance and export — delivered by one accountable team."
      />

      <section className="py-14 lg:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="What We Offer"
            title="Manufacturing services built around your brand"
            text="Choose a ready-to-launch formulation or co-develop something entirely new with our R&D team."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <article className="card-lift group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
                  <div className="aspect-16/10 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <h3 className="font-display text-xl text-primary">{s.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {s.text}
                    </p>
                    <Link to="/contact" className="mt-7">
                      <Button variant="outline" size="sm">
                        Request Quote <ArrowRight className="h-3.5 w-3.5" />
                      </Button>
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted pb-14 lg:pb-20">
        <div className="container-x pt-14 lg:pt-20">
          <SectionHeading eyebrow="Process" title="How a project runs with us" />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Brief & Costing", d: "Share requirement, receive a costed proposal in 48 hours." },
              { n: "02", t: "Sampling", d: "Pilot batch, taste profiling and stability confirmation." },
              { n: "03", t: "Approval", d: "Artwork, label compliance and final specification sign-off." },
              { n: "04", t: "Production", d: "Bulk manufacturing, QC release and dispatch." },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 0.08}>
                <article className="card-lift h-full rounded-3xl border border-border bg-card p-8 shadow-soft">
                  <p className="font-display text-4xl text-gradient-gold">{step.n}</p>
                  <h3 className="mt-4 font-display text-xl text-primary">{step.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      <CTASection />
    </>
  );
}
