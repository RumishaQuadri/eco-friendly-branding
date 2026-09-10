import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { images } from "@/data/site";
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
    <img
      src={images.brandLogo}
      alt=""
      aria-hidden="true"
      className="absolute right-3 top-3 z-10 w-28 object-contain sm:right-4 sm:top-4 sm:w-36"
    />
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
    </motion.div>
  );
}
