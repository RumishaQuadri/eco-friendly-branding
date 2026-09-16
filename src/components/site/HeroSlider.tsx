import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/site/Button";
import { images, heroSlides } from "@/data/site";

export function HeroSlider() {
  const [[index, dir], setState] = useState<[number, number]>([0, 1]);
  const go = useCallback((next: number, direction: number) => {
    setState([(next + heroSlides.length) % heroSlides.length, direction]);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setState(([i]) => [(i + 1) % heroSlides.length, 1]);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const slide = heroSlides[index]!;

  return (
    <section
      className="relative h-screen min-h-[560px] overflow-hidden bg-background sm:min-h-[640px]"
    >
      {/* Full-bleed slide */}
      <AnimatePresence initial={false} custom={dir}>
        <motion.div
          key={index}
          custom={dir}
          initial={{ x: dir > 0 ? "100%" : "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: dir > 0 ? "-100%" : "100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover object-center"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-scrim/75 via-scrim/35 to-transparent" />
          <img
            src={images.brandLogo}
            alt="Eco-Friendly Resources Private Limited"
            className="absolute left-1/2 top-16 z-10 w-28 -translate-x-1/2 object-contain drop-shadow-md sm:top-20 sm:w-40"
          />
        </motion.div>
      </AnimatePresence>

      <div className="container-x relative flex h-full items-center">
        <div className="max-w-2xl py-10 sm:py-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="eyebrow text-secondary">{slide.eyebrow}</p>
              <h1 className="mt-4 font-display text-3xl leading-[1.1] text-background sm:mt-5 sm:text-6xl lg:text-7xl">
                {slide.title}
              </h1>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-background/85 sm:mt-6 sm:text-lg">
                {slide.text}
              </p>
              <div className="mt-7 flex flex-wrap gap-3 sm:mt-9 sm:gap-4">
                <Link to="/gallery">
                  <Button variant="gold" size="lg">
                    Explore Products
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outlineLight" size="lg">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

    </section>
  );
}

