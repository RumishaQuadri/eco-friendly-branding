import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Leaf,
  Factory,
  ShieldCheck,
  FlaskConical,
  Tags,
  Truck,
  ArrowRight,
  Award,
} from "lucide-react";
import { Button } from "@/components/site/Button";
import { CTASection } from "@/components/site/CTASection";
import { FAQ } from "@/components/site/FAQ";
import { Testimonials } from "@/components/site/Testimonials";
import { Counter } from "@/components/site/Counter";
import { HeroSlider } from "@/components/site/HeroSlider";
import { SectionHeading } from "@/components/site/PageBanner";
import { Reveal, RevealImage } from "@/components/site/Reveal";
import {
  categories,
  certifications,
  images,
  services,
  stats,
  whyChoose,
} from "@/data/site";

const iconMap = { Leaf, Factory, ShieldCheck, FlaskConical, Tags, Truck } as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eco-Friendly | Nutraceutical Manufacturer in India" },
      {
        name: "description",
        content:
          "WHO-GMP certified Indian nutraceutical manufacturer offering third party, private label and OEM manufacturing across 100+ supplement products.",
      },
      { property: "og:title", content: "Eco-Friendly | Nutraceutical Manufacturer in India" },
      {
        property: "og:description",
        content:
          "Third party, private label and OEM nutraceutical manufacturing from a WHO-GMP certified Indian facility.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <HeroSlider />

      {/* About preview */}
      <section className="relative overflow-hidden py-14 lg:py-20">
        <div
          className="float-slow absolute -top-20 -right-24 h-72 w-72 rounded-full opacity-25 blur-3xl"
          style={{ backgroundImage: "var(--gradient-gold)" }}
        />
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <RevealImage
            src={images.aboutFacility}
            alt="Eco-Friendly manufacturing facility in India"
            className="aspect-4/3 rounded-3xl shadow-lift"
          />
          <div>
            <SectionHeading
              align="left"
              eyebrow="About Eco-Friendly"
              title="Fifteen years of building supplement brands India trusts"
              text="From a single blending unit in Himachal Pradesh to a 60,000 sq. ft. WHO-GMP certified campus, Eco-Friendly manufactures capsules, tablets, powders, gummies, softgels and liquids for over 500 brands across 25 countries."
            />
            <Reveal delay={0.15}>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "60,000 sq. ft. certified campus",
                  "In-house R&D and QC laboratory",
                  "Low MOQ for emerging brands",
                  "Export documentation support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="mt-9 inline-block">
                <Button variant="outline">
                  Read More <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-muted py-14 lg:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="A manufacturing partner built for serious brands"
            text="Every batch we ship carries the same promise: clean sourcing, disciplined process control and documentation that stands up to audit."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item, i) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <Reveal key={item.title} delay={i * 0.06}>
                  <article className="card-lift h-full rounded-3xl border border-border bg-card p-8 shadow-soft">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-secondary/40 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-6 font-display text-xl text-primary">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-14 lg:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Product Range"
            title="Twelve categories. One certified facility."
            text="Formulations across every major nutraceutical dosage form — ready to carry your brand."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 3) * 0.08}>
                <Link to="/gallery" className="group block">
                  <article className="card-lift overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
                    <div className="aspect-16/10 overflow-hidden">
                      <img
                        src={c.image}
                        alt={c.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-7">
                      <h3 className="font-display text-xl text-primary">{c.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-gold uppercase">
                        View Products <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing + stats */}
      <section className="bg-gradient-dark py-24 text-background lg:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="eyebrow text-secondary">Our Manufacturing</p>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                Precision production at industrial scale
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-background/75 sm:text-base">
                Automated blending, encapsulation, tablet compression, gummy depositing and
                high-speed bottling lines — all under one certified roof with in-line quality
                verification at every stage.
              </p>
            </Reveal>
            <div className="mt-12 grid grid-cols-2 gap-8">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.08}>
                  <p className="font-display text-4xl text-secondary sm:text-5xl">
                    <Counter to={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-xs tracking-[0.22em] text-background/65 uppercase">
                    {s.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <RevealImage
              src={images.proposedFacility}
              alt="Eco-Friendly Nutraceuticals proposed manufacturing facility"
              className="aspect-4/3 rounded-3xl"
            />
            <p className="mt-4 text-center font-display text-lg text-secondary sm:text-xl">
              Proposed facility: built for your next big launch
            </p>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-14 lg:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Services"
            title="End-to-end manufacturing services"
            text="Whether you need a ready formulation or a ground-up product development programme, we handle every step."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <article className="card-lift group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft">
                  <span className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-secondary/25 transition-transform duration-700 group-hover:scale-150" />
                  <h3 className="relative font-display text-xl text-primary">{s.title}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                  <Link
                    to="/services"
                    className="relative mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-gold uppercase"
                  >
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="pb-14 lg:pb-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Certifications"
            title="Audited, certified and export ready"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {certifications.map((c, i) => (
              <Reveal key={c} delay={i * 0.06}>
                <div className="card-lift glass-card grid place-items-center gap-3 rounded-3xl p-9 text-center">
                  <Award className="h-8 w-8 text-gold" />
                  <p className="font-display text-lg text-primary">{c}</p>
                  <p className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                    Certified
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <FAQ />

      <CTASection />
    </>
  );
}
