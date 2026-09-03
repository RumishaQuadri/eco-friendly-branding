import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/site/Button";
import { categories, company, images, services } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-gradient-dark text-background/75">
      <div className="container-x grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <img
            src={images.brandLogo}
            alt="Eco-Friendly Nutraceuticals"
            className="h-auto w-56 max-w-full rounded-md bg-background px-3 py-2 object-contain"
          />
          <p className="mt-6 max-w-sm text-sm leading-relaxed">
            A WHO-GMP certified Indian nutraceutical manufacturer building trusted supplement
            brands through science, sustainability and precision production.
          </p>
          <div className="mt-8">
            <p className="text-xs tracking-[0.22em] text-secondary uppercase">Newsletter</p>
            <form
              className="mt-3 flex max-w-sm gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="w-full min-w-0 rounded-full border border-background/20 bg-background/5 px-5 py-3 text-sm text-background placeholder:text-background/50 focus:border-secondary focus:outline-none"
              />
              <Button variant="gold" size="sm" className="shrink-0 px-6">
                Join
              </Button>
            </form>
          </div>
          <div className="mt-8 flex gap-3">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid h-10 w-10 place-items-center rounded-full border border-background/20 transition-colors hover:border-secondary hover:text-secondary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm tracking-[0.22em] text-secondary uppercase">Quick Links</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/gallery", label: "Product Gallery" },
              { to: "/contact", label: "Contact Us" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-secondary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm tracking-[0.22em] text-secondary uppercase">Services</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.title}>
                <Link to="/services" className="transition-colors hover:text-secondary">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm tracking-[0.22em] text-secondary uppercase">Categories</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {categories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link to="/gallery" className="transition-colors hover:text-secondary">
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
          <h4 className="mt-8 text-sm tracking-[0.22em] text-secondary uppercase">Contact</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
              <span>{company.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-secondary" />
              <a href={`tel:${company.phone}`}>{company.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 shrink-0 text-secondary" />
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Eco-Friendly Nutraceuticals Pvt. Ltd. All rights reserved.</p>
          <p>WHO-GMP · ISO 9001 · FSSAI · HACCP Certified</p>
        </div>
      </div>
    </footer>
  );
}
