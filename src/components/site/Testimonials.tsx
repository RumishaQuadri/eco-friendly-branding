import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { SectionHeading } from "@/components/site/PageBanner";
import { Reveal } from "@/components/site/Reveal";
import { testimonials } from "@/data/site";
import { useIsMobile } from "@/hooks/use-mobile";

export function Testimonials() {
  const isMobile = useIsMobile();
  const perView = isMobile ? 1 : 3;
  const pages = Math.max(1, Math.ceil(testimonials.length / perView));
  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage(0);
  }, [perView]);

  const visible = testimonials.slice(page * perView, page * perView + perView);

  return (
    <section className="bg-secondary/35 py-14 lg:py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our client brands say"
          text="Long-term partners across sports nutrition, Ayurveda, gummies and exports."
        />

        <div className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-3">
          {visible.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-8">
                <Quote className="h-7 w-7 shrink-0 text-gold" />
                <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  “{t.quote}”
                </p>
                <div className="mt-6 flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <div className="mt-4 min-w-0">
                  <p className="font-display text-lg text-primary">{t.name}</p>
                  <p className="mt-1 text-xs tracking-wide text-muted-foreground">{t.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-9 flex items-center justify-center gap-4">
          <button
            aria-label="Previous testimonials"
            onClick={() => setPage((p) => (p - 1 + pages) % pages)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border bg-card text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial page ${i + 1}`}
                onClick={() => setPage(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === page ? "w-9 bg-primary" : "w-4 bg-primary/25 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
          <button
            aria-label="Next testimonials"
            onClick={() => setPage((p) => (p + 1) % pages)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border bg-card text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
