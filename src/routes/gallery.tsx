import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Check, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/site/Button";
import { CTASection } from "@/components/site/CTASection";
import { PageBanner, SectionHeading } from "@/components/site/PageBanner";
import { BrandStamp, Reveal } from "@/components/site/Reveal";
import { categories, company, images, products } from "@/data/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Product Gallery | 100+ Nutraceutical Formulations" },
      {
        name: "description",
        content:
          "Browse 100+ private label ready nutraceutical products across protein, vitamins, ayurvedic, gummies, gut health, kids nutrition and more.",
      },
      { property: "og:title", content: "Nutraceutical Product Gallery | Eco-Friendly" },
      {
        property: "og:description",
        content:
          "Explore our full manufacturing catalogue across twelve nutraceutical categories, all available for private label.",
      },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const [open, setOpen] = useState<string | null>(categories[0]!.slug);

  return (
    <>
      <PageBanner
        image={images.heroProducts}
        eyebrow="Product Gallery"
        title="Our manufacturing catalogue"
        text="Over 100 ready formulations available for private label and third party manufacturing."
      />

      <section className="py-14 lg:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Explore"
            title="Select a category to view products"
            text="This is a corporate showcase — pricing is shared privately against your volume and packaging requirement."
          />

          <div className="mt-16 space-y-4">
            {categories.map((cat) => {
              const items = products.filter((p) => p.category === cat.slug);
              const isOpen = open === cat.slug;
              return (
                <Reveal key={cat.slug} y={16} blur={false}>
                  <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
                    <button
                      onClick={() => setOpen(isOpen ? null : cat.slug)}
                      className="flex w-full items-center gap-5 p-6 text-left sm:p-8"
                    >
                      <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl">
                        <img
                          src={cat.image}
                          alt={cat.title}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                        <BrandStamp />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-xl text-primary">{cat.title}</span>
                        <span className="mt-1 block truncate text-sm text-muted-foreground">
                          {cat.text}
                        </span>
                      </span>
                      <span className="hidden text-xs tracking-[0.2em] text-gold uppercase sm:block">
                        {items.length} products
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-primary transition-transform duration-500 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="grid gap-5 border-t border-border p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-3">
                            {items.map((p) => (
                              <article
                                key={p.id}
                                className="card-lift group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-background"
                              >
                                <div className="aspect-4/3 overflow-hidden bg-muted">
                                  <img
                                    src={p.image}
                                    alt={p.name}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                  />
                                  <BrandStamp />
                                </div>
                                <div className="flex flex-1 flex-col p-6">
                                  <h3 className="font-display text-lg leading-snug text-primary">
                                    {p.name}
                                  </h3>
                                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                                    {p.desc}
                                  </p>
                                  <p className="mt-4 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                                    Packaging · {p.pack}
                                  </p>
                                  <p className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-success">
                                    <Check className="h-3.5 w-3.5" /> Private label available
                                  </p>
                                  <div className="mt-5 flex flex-wrap gap-2">
                                    <a
                                      href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                                        `Hi, I'd like details about ${p.name}.`,
                                      )}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <Button variant="primary" size="sm">
                                        <MessageCircle className="h-4 w-4" /> WhatsApp
                                      </Button>
                                    </a>
                                    <a href={`tel:${company.phone.replace(/\s/g, "")}`}>
                                      <Button variant="outline" size="sm">
                                        <Phone className="h-4 w-4" /> Call
                                      </Button>
                                    </a>
                                  </div>
                                </div>
                              </article>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
