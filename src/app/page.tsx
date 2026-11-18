import { Hero } from "@/components/hero";
import { Label } from "@/components/ui";
import { REGISTRATION, SITE } from "@/lib/site";

const CAPABILITIES = [
  {
    title: "Web systems",
    body: "Public sites, enquiry and booking flows, and customer portals. Built to load on a weak connection and to be changed after launch.",
  },
  {
    title: "Internal tools",
    body: "Admin surfaces, dashboards, and records for the work between the counter and the bank. Replaces the spreadsheet nobody trusts.",
  },
  {
    title: "Automation",
    body: "Connectors, scheduled jobs, and notifications between tools that were never designed to talk to each other.",
  },
  {
    title: "Audit & rescue",
    body: "For a build that has stalled: read the code, name what is risky, decide what to keep, and finish what matters.",
  },
] as const;

const FACTS = [
  { label: "Practice", value: "Web systems, internal tools, automation" },
  { label: "Base", value: REGISTRATION.locality },
  { label: "Entity", value: REGISTRATION.enterpriseType },
  { label: "Handover", value: "Source code, documents, walkthrough" },
] as const;

export default function Home() {
  return (
    <>
      <Hero />

      {/* ── Studio ─────────────────────────────────────────────── */}
      <section
        id="studio"
        aria-labelledby="studio-label"
        className="gutter border-t border-line py-16 sm:py-24"
      >
        <div className="shell">
          <Label as="p" id="studio-label">
            Studio
          </Label>

          <div>
            <p className="max-w-[34ch] text-[clamp(1.375rem,2.4vw,1.9rem)] leading-[1.35] tracking-[-0.025em]">
              Most software is built for the front of the business. The website,
              the launch, the photograph. We work one layer back.
            </p>

            <div className="mt-10 grid max-w-[62rem] gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-10">
              <p className="text-[15px] leading-[1.7] text-ink-2">
                The stockroom that knows what is running out. The ledger that
                closes without a fight. The counter that keeps working when the
                signal drops.
              </p>
              <p className="text-[15px] leading-[1.7] text-ink-2">
                None of it is photogenic. All of it decides whether the month
                ends properly. That is the work this studio is built around.
              </p>
            </div>

            <dl className="mt-12 grid max-w-[62rem] gap-x-10 gap-y-4 border-t border-line pt-6 sm:grid-cols-2 lg:grid-cols-4">
              {FACTS.map((fact) => (
                <div key={fact.label}>
                  <dt className="label">{fact.label}</dt>
                  <dd className="mt-1.5 text-[13.5px] leading-[1.45] text-ink">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── Capabilities ───────────────────────────────────────── */}
      <section
        id="capabilities"
        aria-labelledby="capabilities-label"
        className="gutter border-t border-line py-16 sm:py-24"
      >
        <div className="shell">
          <Label as="p" id="capabilities-label">
            Capabilities
          </Label>

          <div>
            <ol className="border-t border-line">
              {CAPABILITIES.map((cap, i) => (
                <li key={cap.title} className="border-b border-line">
                  <div className="grid gap-2 py-6 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-6 sm:py-7 lg:grid-cols-[3.5rem_14rem_minmax(0,1fr)]">
                    <span className="label pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-[1.25rem] leading-[1.25] tracking-[-0.02em]">
                      {cap.title}
                    </h2>
                    <p className="max-w-[46ch] text-[15px] leading-[1.65] text-ink-2 sm:col-start-2 lg:col-start-3">
                      {cap.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-8 max-w-[52ch] text-[14px] leading-[1.65] text-ink-3">
              One studio, four kinds of work. Projects usually begin with a
              single system and grow from there.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact ────────────────────────────────────────────── */}
      <section
        id="contact"
        aria-labelledby="contact-label"
        className="gutter border-t border-line py-16 sm:py-24"
      >
        <div className="shell">
          <Label as="p" id="contact-label">
            Contact
          </Label>

          <div>
            <h2 className="max-w-[20ch] text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.12]">
              Tell us what has to hold.
            </h2>

            <p className="mt-6 max-w-[48ch] text-[15px] leading-[1.7] text-ink-2">
              Send the problem, the constraint, and the deadline. If it falls
              outside what this studio does, we will say so.
            </p>

            <a
              href={`mailto:${SITE.contactEmail}`}
              className="mt-8 inline-block border-b border-ink pb-1 text-[clamp(1rem,2vw,1.375rem)] leading-tight tracking-[-0.02em] transition-colors hover:border-accent hover:text-accent"
            >
              {SITE.contactEmail}
            </a>

            <dl className="mt-12 flex flex-col gap-2 border-t border-line pt-5 sm:flex-row sm:gap-10">
              <div className="flex items-baseline gap-2">
                <dt className="label">GSTIN</dt>
                <dd className="font-mono text-[11px] tracking-[0.02em]">
                  {REGISTRATION.gstin}
                </dd>
              </div>
              <div className="flex items-baseline gap-2">
                <dt className="label">Udyam</dt>
                <dd className="font-mono text-[11px] tracking-[0.02em]">
                  {REGISTRATION.udyam}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
