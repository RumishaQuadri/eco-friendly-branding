import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/site/Button";
import { images } from "@/data/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Product Gallery" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background py-3"
          : "border-b border-transparent py-5"
      }`}
    >
      <div className="container-x grid grid-cols-[auto_1fr_auto] items-center gap-3 lg:flex lg:justify-between lg:gap-6">
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border transition-colors lg:hidden ${
            scrolled ? "border-border text-primary" : "border-background/40 text-background"
          }`}
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link
          to="/"
          className="flex min-w-0 items-center justify-center lg:justify-start"
          onClick={() => setOpen(false)}
        >
          <img
            src={images.brandLogo}
            alt="Eco-Friendly Nutraceuticals"
            className="h-10 w-auto max-w-[12rem] object-contain sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className={`relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100 ${
                scrolled
                  ? "text-foreground hover:text-gold"
                  : "text-background/90 hover:text-secondary"
              }`}
              activeProps={{ className: "text-gold after:scale-x-100" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex w-11 items-center justify-end gap-3 lg:w-auto">
          <Link to="/contact" className="hidden lg:block">
            <Button variant={scrolled ? "primary" : "outlineLight"}>Get Quote</Button>
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 10% 6%)" }}
            animate={{ opacity: 1, clipPath: "circle(140% at 10% 6%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 10% 6%)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="bg-gradient-dark fixed inset-0 z-50 flex flex-col px-6 py-6 lg:hidden"
          >
            <div className="flex justify-start">
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-full border border-background/30 text-background"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-10 flex flex-1 flex-col justify-center gap-6">
              {nav.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.5 }}
                >
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl text-background"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <Link to="/contact" onClick={() => setOpen(false)}>
              <Button variant="gold" className="w-full">
                Get Quote
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
