import type { Metadata } from "next";
import { Label } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Work at Diwan Mercantile, an independent software studio in Bengaluru. What the studio looks for, and what to send.",
  openGraph: {
    title: "Careers · Diwan Mercantile",
    description:
      "Work at Diwan Mercantile, an independent software studio in Bengaluru.",
    url: `${SITE.url}/careers`,
  },
};

const LOOK_FOR = [
  {
    title: "Shipped software",
    body: "You have built something people use, and you can say plainly what you would do differently.",
  },
  {
    title: "The boring half",
    body: "You will spend time on permissions, exports, and error states — not only the parts that demo well.",
  },
  {
    title: "Writing",
    body: "You can explain a trade-off in a paragraph, to a client and to a colleague.",
  },
  {
    title: "Judgement",
    body: "You can tell when a feature should be cut, and you say so early.",
  },
] as const;

const SEND = [
  "A link to something you built, and what was yours in it.",
  "A short note on the part of the work you want more of.",
  "Anything you have written about software — a README counts.",
] as const;

export default function CareersPage() {
  return (
    <>
      <section
        aria-labelledby="careers-label"
        className="gutter pb-16 pt-8 sm:pb-24 sm:pt-10"
      >
        <div className="shell">
          <Label as="p" id="careers-label" className="rise rise-1">
            Careers
          </Label>

          <div>
            <h1 className="rise rise-2 max-w-[22ch] text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.12]">
              Work on the part of the business nobody photographs.
            </h1>

            <p className="rise rise-3 mt-6 max-w-[46ch] text-[15px] leading-[1.7] text-ink-2">
              The studio is small, and hires when the work needs another pair of
              hands rather than on a calendar. If you want to build systems
              people depend on, write — whether or not a role is listed.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="look-for-label"
        className="gutter border-t border-line py-16 sm:py-24"
      >
        <div className="shell">
          <Label as="p" id="look-for-label">
            What we look for
          </Label>

          <ol className="border-t border-line">
            {LOOK_FOR.map((item, i) => (
              <li key={item.title} className="border-b border-line">
                <div className="grid gap-2 py-6 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-6 sm:py-7 lg:grid-cols-[3.5rem_14rem_minmax(0,1fr)]">
                  <span className="label pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-[1.25rem] leading-[1.25] tracking-[-0.02em]">
                    {item.title}
                  </h2>
                  <p className="max-w-[46ch] text-[15px] leading-[1.65] text-ink-2 sm:col-start-2 lg:col-start-3">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        aria-labelledby="send-label"
        className="gutter border-t border-line py-16 sm:py-24"
      >
        <div className="shell">
          <Label as="p" id="send-label">
            What to send
          </Label>

          <div>
            <ol className="border-t border-line">
              {SEND.map((item, i) => (
                <li
                  key={item}
                  className="flex items-baseline gap-4 border-b border-line py-4 sm:gap-6"
                >
                  <span className="label w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] leading-[1.6] text-ink-2">
                    {item}
                  </span>
                </li>
              ))}
            </ol>

            <p className="mt-10 max-w-[44ch] text-[15px] leading-[1.7] text-ink-2">
              Write to the studio directly.
            </p>

            <a
              href={`mailto:${SITE.contactEmail}`}
              className="mt-4 inline-block border-b border-ink pb-1 text-[clamp(1rem,2vw,1.375rem)] leading-tight tracking-[-0.02em] transition-colors hover:border-accent hover:text-accent"
            >
              {SITE.contactEmail}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
