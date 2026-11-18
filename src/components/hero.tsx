import { REGISTRATION, SITE } from "@/lib/site";
import { Label } from "./ui";

const INDEX = [
  { n: "01", label: "Web systems" },
  { n: "02", label: "Internal tools" },
  { n: "03", label: "Automation" },
] as const;

export function Hero() {
  return (
    <section className="hero gutter" aria-labelledby="hero-title">
      <div className="hero-util">
        <Label className="hidden sm:inline">
          Independent software studio · Bengaluru
        </Label>

        <div className="hero-toggle ml-auto">
          <span className="label mr-1">Layout</span>
          <input
            id="hero-layout-1"
            name="hero-layout"
            type="radio"
            defaultChecked
            className="sr-only"
          />
          <label htmlFor="hero-layout-1">1</label>
          <input
            id="hero-layout-2"
            name="hero-layout"
            type="radio"
            className="sr-only"
          />
          <label htmlFor="hero-layout-2">2</label>
        </div>
      </div>

      <div className="hero-grid">
        <div className="hero-mark">
          <h1 id="hero-title" className="wordmark">
            <span>Diwan</span> <span>Mercantile</span>
          </h1>
        </div>

        <nav className="hero-rail" aria-label="Index">
          <Label as="p">Index</Label>
          <ol className="mt-4">
            {INDEX.map((item) => (
              <li key={item.n}>
                <a href="#capabilities" className="rail-link">
                  <span aria-hidden="true" className="plate">
                    {item.n}
                  </span>
                  <span className="rail-label">{item.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <p className="statement hero-statement">
          Diwan Mercantile is an independent software studio in Bengaluru. We
          build web systems, internal tools, and automation for the part of the
          business nobody photographs.
        </p>
      </div>

      <div className="hero-foot">
        <Label>{REGISTRATION.locality}</Label>
        <a
          href={`mailto:${SITE.contactEmail}`}
          className="label underline decoration-line underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
        >
          {SITE.contactEmail}
        </a>
        <Label>GSTIN {REGISTRATION.gstin}</Label>
      </div>
    </section>
  );
}
