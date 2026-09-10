import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import brandLogo from "@/assets/eco-friendly-resources-logo-transparent.png";
type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  blur?: boolean;
  className?: string;
};

export function Reveal({ children, delay = 0, y = 28, blur = false, className }: Props) {
  const variants: Variants = {
    hidden: { opacity: 0, y, ...(blur ? { filter: "blur(8px)" } : {}) },
    show: {
      opacity: 1,
      y: 0,
      ...(blur ? { filter: "blur(0px)" } : {}),
      transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
    >
      {children}
    </motion.div>
  );
}

export function BrandStamp() {
  return (
    <div className="absolute right-3 top-3 z-10 w-32 sm:right-4 sm:top-4 sm:w-40">
      <img
        src={brandLogo}
        alt="Eco-Friendly Resources Private Limited"
        className="w-full object-contain drop-shadow-lg"
      />
    </div>
  );
}

export function ProductBrandMark() {
  return (
    <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2 rounded-md bg-scrim/70 px-2.5 py-1.5 backdrop-blur-sm sm:bottom-4 sm:left-4">
      <img
        src={brandLogo}
        alt="Eco-Friendly Resources Private Limited"
        className="h-7 w-14 object-contain sm:h-8 sm:w-16"
      />
      <span className="max-w-24 text-[9px] font-semibold leading-tight tracking-[0.14em] text-background uppercase">
        Eco-Friendly Resources
      </span>
    </div>
  );
}

export function RevealImage({
  src,
  alt,
  className,
  imgClassName,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className ?? ""}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.05 }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-full w-full object-cover ${imgClassName ?? ""}`}
        initial={{ scale: 1.06 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.05 }}
      />
      <BrandStamp />
      <ProductBrandMark />
    </motion.div>
  );
}
