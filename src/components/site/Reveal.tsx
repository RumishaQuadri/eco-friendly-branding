import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
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

const suppliedLogoUrl =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-10%20at%209.02.53%20AM-inOAzwH93G1Qi0495emBMEe6oHB0FT.jpeg";

export function BrandStamp() {
  return (
    <div className="absolute right-3 top-3 z-10 flex w-32 flex-col items-end gap-1 sm:right-4 sm:top-4 sm:w-40">
      <img
        src={suppliedLogoUrl}
        alt="Eco-Friendly Resources Private Limited"
        className="w-full rounded-md object-contain shadow-lg"
      />
      <span className="rounded bg-scrim/70 px-2 py-1 text-[9px] font-semibold tracking-[0.16em] text-background uppercase">
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
    </motion.div>
  );
}
