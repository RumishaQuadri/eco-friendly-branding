import { AnimatePresence, motion } from "motion/react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { company } from "@/data/site";

export function FloatingButtons() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-5 bottom-6 z-40 flex flex-col items-center gap-3">
      <a
        href={`https://wa.me/${company.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid h-13 w-13 place-items-center rounded-full bg-success p-3.5 text-background shadow-lift transition-transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="grid place-items-center rounded-full bg-primary p-3.5 text-primary-foreground shadow-lift transition-transform hover:scale-110"
          >
            <ArrowUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
