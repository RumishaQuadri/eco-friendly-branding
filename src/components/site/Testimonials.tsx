import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Button } from "@/components/site/Button";
import { SectionHeading } from "@/components/site/PageBanner";
import { testimonials } from "@/data/site";
import { useIsMobile } from "@/hooks/use-mobile";

export function Testimonials() {
  const isMobile = useIsMobile();
  const perView = isMobile ? 1 : 3;
  const maxIndex = Math.max(0, testimonials.length - perView);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [perView]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, 5000);

    return () => window.clearInterval(timer);
  }, [maxIndex]);

  const goTo = (nextIndex: number) => {
    setActiveIndex(Math.min(maxIndex, Math.max(0, nextIndex)));
  };

  return (
    <section className="overflow-hidden bg-secondary/35 py-14 lg:py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our client brands say"
          text="Long-term partners across sports nutrition, Ayurveda, gummies and exports."
        />

        <div className="relative mt-10 overflow-hidden sm:mt-14">
          <motion.div
            className="flex w-[1300%]"
            animate={{ x: `${-(activeIndex * 100) / testimonials.length}%` }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
          >
            {testimonials.map((t) => (
              <div key={t.name} className="w-[7.692307%] shrink-0 px-2 sm:px-3">
                <article className="flex h-full min-h-[18rem] flex-col rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-8">
                  <Quote className="h-7 w-7 shrink-0 text-gold" />
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    “{t.quote}”
                  </p>
                  <div className="mt-6 flex gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-3.5 w-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                  <div className="mt-4 min-w-0">
                    <p className="font-display text-lg text-primary">{t.name}</p>
                    <p className="mt-1 text-xs tracking-wide text-muted-foreground">{t.role}</p>
                  </div>
                </article>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-9 flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="sm"
            aria-label="Previous testimonials"
            onClick={() => goTo(activeIndex <= 0 ? maxIndex : activeIndex - 1)}
            className="h-11 w-11 rounded-full p-0"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <span className="min-w-16 text-center font-display text-sm text-primary" aria-live="polite">
            {String(activeIndex + 1).padStart(2, "0")} / {String(maxIndex + 1).padStart(2, "0")}
          </span>
          <Button
            variant="outline"
            size="sm"
            aria-label="Next testimonials"
            onClick={() => goTo(activeIndex >= maxIndex ? 0 : activeIndex + 1)}
            className="h-11 w-11 rounded-full p-0"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}