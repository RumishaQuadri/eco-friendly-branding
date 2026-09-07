import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Button } from "@/components/site/Button";
import { BrandStamp, Reveal } from "@/components/site/Reveal";
import { images } from "@/data/site";

export function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <motion.img
        src={images.ctaBg}
        alt="Eco-Friendly nutraceutical warehouse"
        loading="lazy"
        style={{ y }}
        className="absolute inset-0 h-[124%] w-full object-cover"
      />
      <BrandStamp />
      <div className="absolute inset-0 bg-scrim/55" />
      <div className="container-x relative py-8 text-center lg:py-10">
        <Reveal>
          <p className="eyebrow text-secondary">Let's Work Together</p>
          <h2 className="mx-auto mt-2 max-w-3xl font-display text-xl text-background sm:text-2xl">
            Let's Build Your Nutraceutical Brand Together
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-xs text-background/80 sm:text-sm">
            Share your product idea and our formulation team will revert with a costed proposal
            within 48 working hours.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Link to="/contact">
              <Button variant="gold" size="sm">
                Get Free Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outlineLight" size="sm">
                Contact Us
              </Button>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
