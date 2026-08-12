import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/site/PageBanner";
import { Reveal } from "@/components/site/Reveal";
import { faqs } from "@/data/site";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-14 lg:py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="FAQs"
          title="Questions brands ask before starting"
          text="Still unsure about something? Send us your requirement and we'll respond within one working day."
        />
        <div className="mx-auto mt-10 max-w-3xl space-y-3 sm:mt-14">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={(i % 3) * 0.05}>
                <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 p-5 text-left sm:p-6"
                  >
                    <span className="min-w-0 font-display text-base text-primary sm:text-lg">
                      {f.q}
                    </span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-secondary/60 text-primary">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:pb-6">
                      {f.a}
                    </p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
