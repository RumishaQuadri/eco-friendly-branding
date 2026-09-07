import { BrandStamp, Reveal } from "@/components/site/Reveal";

export function PageBanner({
  image,
  eyebrow,
  title,
  text,
}: {
  image: string;
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="relative flex h-[30vh] min-h-[220px] items-end overflow-hidden sm:h-[60vh] sm:min-h-[420px]">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <BrandStamp />
      <div className="absolute inset-0 bg-gradient-to-t from-scrim/75 via-scrim/35 to-transparent" />
      <div className="container-x relative pb-6 sm:pb-16">
        <Reveal>
          <p className="eyebrow text-secondary">{eyebrow}</p>
          <h1 className="mt-2 max-w-3xl font-display text-2xl text-background sm:mt-4 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-2 line-clamp-2 max-w-xl text-xs leading-relaxed text-background/80 sm:mt-5 sm:line-clamp-none sm:text-base">
            {text}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-display text-3xl text-primary sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {text && <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">{text}</p>}
    </Reveal>
  );
}
