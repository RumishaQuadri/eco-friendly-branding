import { createFileRoute } from "@tanstack/react-router";
import { Compass, HeartHandshake, Sparkles, Target } from "lucide-react";
import { CTASection } from "@/components/site/CTASection";
import { PageBanner, SectionHeading } from "@/components/site/PageBanner";
import { Reveal, RevealImage } from "@/components/site/Reveal";
import { coreValues, images } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Eco-Friendly | Indian Nutraceutical Manufacturer" },
      {
        name: "description",
        content:
          "Our story, mission, values and WHO-GMP certified manufacturing campus in Himachal Pradesh, serving 500+ supplement brands worldwide.",
      },
      { property: "og:title", content: "About Eco-Friendly Nutraceuticals" },
      {
        property: "og:description",
        content:
          "Fifteen years of certified nutraceutical manufacturing, research and export services from India.",
      },
    ],
  }),
  component: About,
});

const valueIcons = [Sparkles, Compass, Target, HeartHandshake];

function About() {
  return (
    <>
      <PageBanner
        image={images.aboutFacility}
        eyebrow="About Us"
        title="Manufacturing wellness, responsibly"
        text="A certified Indian nutraceutical partner for brands that refuse to compromise on quality."
      />

      <section className="py-14 lg:py-20">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="From one blending unit to a global supply partner"
              text="Eco-Friendly began in 2010 with a simple conviction — Indian supplements deserved pharmaceutical-grade discipline. Today our Baddi campus runs dedicated lines for powders, capsules, tablets, gummies, softgels and liquids."
            />
            <Reveal delay={0.12}>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                We do not sell our own consumer label. Our entire capacity, R&D bandwidth and
                packaging expertise exists to make our client brands succeed — which is why
                partners stay with us for a decade or more.
              </p>
            </Reveal>
          </div>
          <RevealImage
            src={images.manufacturingLine}
            alt="Eco-Friendly production line"
            className="aspect-4/3 rounded-3xl shadow-lift"
          />
        </div>
      </section>

      <section className="bg-muted py-14 lg:py-20">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          {[
            {
              t: "Our Mission",
              d: "To make world-class nutraceutical manufacturing accessible to every Indian brand — with transparent sourcing, honest labels and uncompromising process control.",
            },
            {
              t: "Our Vision",
              d: "To be Asia's most trusted contract manufacturer for science-backed nutrition, exporting Indian quality to fifty countries by 2030.",
            },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.1}>
              <article className="card-lift h-full rounded-3xl border border-border bg-card p-10 shadow-soft">
                <p className="eyebrow">{i === 0 ? "Purpose" : "Future"}</p>
                <h3 className="mt-4 font-display text-3xl text-primary">{c.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Core Values"
            title="The principles behind every batch"
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((v, i) => {
              const Icon = valueIcons[i % valueIcons.length]!;
              return (
                <Reveal key={v.title} delay={i * 0.07}>
                  <article className="card-lift h-full rounded-3xl border border-border bg-card p-8 text-center shadow-soft">
                    <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-secondary/40 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-6 font-display text-xl text-primary">{v.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-14 lg:pb-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Facility"
            title="Inside the Eco-Friendly campus"
            text="Cleanroom manufacturing, in-house testing and climate-controlled warehousing across 60,000 sq. ft."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <RevealImage
              src={images.heroFactory}
              alt="Coating and encapsulation area"
              className="aspect-4/3 rounded-3xl md:col-span-2 md:aspect-auto md:h-full"
            />
            <div className="grid gap-5">
              <RevealImage
                src={images.heroLab}
                alt="Quality control laboratory"
                className="aspect-4/3 rounded-3xl"
              />
              <RevealImage
                src={images.ctaBg}
                alt="Finished goods warehouse"
                className="aspect-4/3 rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-14 lg:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Trust" title="Why clients stay with us" />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "No house brand", d: "We never compete with the brands we manufacture for." },
              { t: "Batch traceability", d: "Every unit traceable to raw material lot and analyst." },
              { t: "Regulatory support", d: "FSSAI, COA, MSDS and export dossiers handled in-house." },
              { t: "Reserved capacity", d: "Dedicated production slots for recurring partners." },
              { t: "Transparent costing", d: "Line-item quotations with no hidden tooling charges." },
              { t: "On-time dispatch", d: "97.4% on-time delivery record over the last three years." },
            ].map((f, i) => (
              <Reveal key={f.t} delay={(i % 3) * 0.08}>
                <article className="card-lift h-full rounded-3xl border border-border bg-card p-8 shadow-soft">
                  <h3 className="font-display text-xl text-primary">{f.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
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
