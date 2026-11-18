import { Receipt } from "@/components/receipt";
import { Btn, Label, SectionHead } from "@/components/ui";
import { REGISTRATION, SITE } from "@/lib/site";

const SPECS = [
  { label: "Registry", value: REGISTRATION.gstin },
  { label: "MSME", value: REGISTRATION.udyam },
  { label: "Base", value: REGISTRATION.locality },
  { label: "Mode", value: "Studio & select client work" },
] as const;

const LEDGER = [
  { label: "Founded", value: `${SITE.established}, Bengaluru` },
  { label: "Practice", value: "Web · Tools · Automation" },
  { label: "Own product", value: "Parchi — in development" },
  { label: "Commissioned", value: "Open" },
  { label: "Handover", value: "Code, documents, walkthrough" },
] as const;

const CAPABILITIES = [
  {
    title: "Web systems",
    body: "Public sites, portals, and booking flows that survive a phone on a weak signal.",
  },
  {
    title: "Internal tools",
    body: "Dashboards and admin surfaces that replace the spreadsheet nobody trusts.",
  },
  {
    title: "Automation",
    body: "Connectors, scheduled jobs, and notifications between tools that were never meant to talk.",
  },
  {
    title: "Product engineering",
    body: "For founders: a first build that survives its first hundred users.",
  },
  {
    title: "Audit & rescue",
    body: "When a build has stalled: read the code, name the risks, ship the fix.",
  },
] as const;

const METHOD = [
  {
    step: "01",
    title: "Brief",
    body: "One page: the goal, the users, the constraint, and the price.",
  },
  {
    step: "02",
    title: "Prototype",
    body: "Structure agreed in a working prototype before any production code.",
  },
  {
    step: "03",
    title: "Build",
    body: "A weekly demo on a staging URL. You watch it happen, not hear about it.",
  },
  {
    step: "04",
    title: "Handover",
    body: "Deploy, document, walk through. The code is yours, permanently.",
  },
] as const;

const DIAGRAM = `+----------------------------------------------------+
| 01  COUNTER                                        |
|     the bill is written, the cash is taken         |
+-------------------+--------------------------------+
                    |
+----------------------------------------------------+
| 02  LEDGER                                         |
|     every line, every day, in one place            |
+-------------------+--------------------------------+
                    |
+----------------------------------------------------+
| 03  STOCK                                          |
|     what is left, what to order, what is short     |
+-------------------+--------------------------------+
                    |
+----------------------------------------------------+
| 04  OWNER                                          |
|     one page at nine in the evening                |
+----------------------------------------------------+`;

export default function Home() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="halftone pointer-events-none absolute inset-0 opacity-[0.055] [mask-image:radial-gradient(ellipse_at_68%_34%,black,transparent_70%)]"
        />

        <div className="relative mx-auto grid max-w-[1180px] gap-14 px-5 pb-14 pt-10 sm:px-8 sm:pt-16 md:grid-cols-2 md:gap-10 lg:grid-cols-12 lg:pb-24 lg:pt-20">
          <div className="md:col-span-1 lg:col-span-7">
            <div className="feed flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-6 bg-ink" />
              <Label className="text-ink-3">
                Independent software studio · Bengaluru
              </Label>
            </div>

            <h1 className="feed feed-1 font-dot mt-7 max-w-[19ch] text-[clamp(2.5rem,7vw,4.6rem)] font-semibold uppercase leading-[0.92] tracking-[-0.005em] [text-wrap:balance]">
              Software for the part of the business{" "}
              <span className="text-accent">nobody photographs.</span>
            </h1>

            <p className="feed feed-2 mt-7 max-w-[52ch] text-[13px] leading-[1.8] text-ink-2">
              We design and build web systems, internal tools, and automation
              for the back of the shop — the stockroom, the ledger, the
              counter. The work that decides whether a business closes on
              time.
            </p>

            <div className="feed feed-3 mt-8 flex flex-wrap items-center gap-3">
              <Btn href="#contact">Start a project</Btn>
              <Btn href="#ledger" variant="outline">
                Read the ledger
              </Btn>
            </div>
          </div>

          <div className="feed feed-4 md:col-span-1 lg:col-span-5">
            <div className="flex justify-start lg:justify-end">
              <Receipt />
            </div>
            <p className="label mt-4 max-w-[352px] text-ink-3 lg:ml-auto">
              Fig. 00 — The studio, on one slip
            </p>
          </div>
        </div>
      </section>

      {/* ── Spec strip ────────────────────────────────────────── */}
      <section
        aria-label="Registration and operating details"
        className="border-y border-line bg-paper/70"
      >
        <dl className="mx-auto grid max-w-[1180px] grid-cols-1 gap-x-10 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {SPECS.map((spec) => (
            <div
              key={spec.label}
              className="flex items-baseline justify-between gap-4 border-b border-line-soft py-3.5 lg:border-b-0 lg:border-r lg:pr-5 lg:last:border-r-0 lg:last:pr-0"
            >
              <dt className="label text-ink-3">{spec.label}</dt>
              <dd className="text-[11.5px] tracking-[0.01em] text-ink tabular-nums">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── 01 · The ledger ───────────────────────────────────── */}
      <section className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20">
        <SectionHead
          index="01"
          id="ledger"
          title="The ledger"
          note="An opening entry, not a slogan."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="space-y-5 lg:col-span-7">
            <p className="max-w-[58ch] text-[14.5px] leading-[1.78]">
              Most software is built for the shopfront — the photograph, the
              landing page, the demo. We work one layer back.
            </p>
            <p className="max-w-[58ch] text-[13px] leading-[1.8] text-ink-2">
              The stockroom that knows what is running out. The ledger that
              closes without a fight. The counter that keeps working when the
              signal drops. None of it is photogenic. All of it decides
              whether the month ends properly.
            </p>
            <p className="max-w-[58ch] text-[13px] leading-[1.8] text-ink-2">
              That is the whole studio. Small by choice, and built for work
              that has to be right.
            </p>
          </div>

          <dl className="lg:col-span-5">
            {LEDGER.map((row) => (
              <div
                key={row.label}
                className="leader border-b border-line-soft py-3 text-[12px] first:border-t"
              >
                <dt className="label text-ink-3">{row.label}</dt>
                <span className="fill" aria-hidden="true" />
                <dd className="text-right">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── 02 · Capabilities ─────────────────────────────────── */}
      <section className="mx-auto max-w-[1180px] px-5 pb-16 sm:px-8 sm:pb-20">
        <SectionHead
          index="02"
          id="capabilities"
          title="Capabilities"
          note="Five things we do properly, rather than twenty we list."
        />

        <ol className="mt-8 border-t border-line">
          {CAPABILITIES.map((cap, i) => (
            <li key={cap.title} className="border-b border-line">
              <a
                href="#contact"
                className="group block px-1 py-5 transition-colors hover:bg-paper/80 sm:px-3"
              >
                <div className="leader">
                  <span className="label shrink-0 text-ink-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mx-3 shrink-0 text-[15px] font-medium tracking-[-0.01em] transition-transform duration-200 group-hover:translate-x-0.5">
                    {cap.title}
                  </span>
                  <span className="fill" aria-hidden="true" />
                  <span className="label shrink-0 text-ink-3 transition-colors group-hover:text-ink">
                    open
                  </span>
                </div>
                <p className="mt-1.5 max-w-[62ch] pl-0 text-[12px] leading-[1.7] text-ink-2 sm:pl-[4.4rem]">
                  {cap.body}
                </p>
              </a>
            </li>
          ))}
        </ol>
      </section>

      {/* ── 03 · Method ───────────────────────────────────────── */}
      <section className="mx-auto max-w-[1180px] px-5 pb-16 sm:px-8 sm:pb-20">
        <SectionHead
          index="03"
          id="method"
          title="Method"
          note="Four steps. No phase ends without something you can look at."
        />

        <ol className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {METHOD.map((step) => (
            <li key={step.step} className="bg-field p-5 sm:p-6">
              <span className="label text-ink-3">{step.step}</span>
              <h3 className="mt-3 text-[15px] font-medium tracking-[-0.01em]">
                {step.title}
              </h3>
              <p className="mt-2 text-[12px] leading-[1.7] text-ink-2">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── 04 · The lab ──────────────────────────────────────── */}
      <section className="mx-auto max-w-[1180px] px-5 pb-16 sm:px-8 sm:pb-20">
        <SectionHead
          index="04"
          id="lab"
          title="The lab"
          note="Working notes on the boring infrastructure of small commerce."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <figure className="min-w-0 lg:col-span-7">
            <div className="min-w-0 overflow-x-auto border-y border-line py-5 sm:py-6">
              <pre
                aria-hidden="true"
                className="ascii text-[9.5px] text-ink sm:text-[12px] lg:text-[15.5px]"
              >
                {DIAGRAM}
              </pre>
            </div>
            <figcaption className="label mt-3 text-ink-3">
              Fig. 01 — The daily close. Four steps, one loop.
            </figcaption>
          </figure>

          <div className="lg:col-span-5">
            <p className="max-w-[52ch] text-[13px] leading-[1.8] text-ink-2">
              The lab is where we write down what we are still working out:
              the shortest path a sale can take, how a shop closes its day,
              what a stockroom actually needs to know. No roadmap and no
              newsletter — a note appears when it is worth reading.
            </p>

            <ol className="mt-7 border-t border-line">
              {[
                "How a shop closes a day of cash, card, and credit without a spreadsheet.",
                "Where a bill stops being a record and starts being a guess.",
                "What a stockroom needs to know before it needs software.",
              ].map((note, i) => (
                <li
                  key={note}
                  className="flex items-baseline gap-3 border-b border-line-soft py-3 text-[12px] leading-[1.6] text-ink-2"
                >
                  <span className="label shrink-0 text-ink-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {note}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── 05 · Counter open ─────────────────────────────────── */}
      <section id="contact" className="mx-auto max-w-[1180px] px-5 pb-16 sm:px-8">
        <div className="border-y-2 border-double border-ink bg-paper px-5 py-10 sm:px-10 sm:py-14">
          <div className="flex items-baseline gap-2">
            <Label className="text-ink-3">05</Label>
            <span aria-hidden="true" className="text-ink-3">
              /
            </span>
            <Label>Counter open</Label>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <h2 className="font-dot max-w-[16ch] text-[clamp(2rem,5vw,3.4rem)] font-semibold uppercase leading-[0.94]">
                Tell us what has to hold.
              </h2>

              <p className="mt-6 max-w-[52ch] text-[13px] leading-[1.8] text-ink-2">
                Send the constraint, the deadline, and what you have already
                tried. You will get a straight answer on whether we are the
                right studio for it — usually within two working days.
              </p>

              <a
                href={`mailto:${SITE.contactEmail}`}
                className="mt-7 inline-block border-b-2 border-ink pb-1 text-[14px] tracking-[-0.01em] transition-colors hover:border-accent hover:text-accent sm:text-[16px]"
              >
                {SITE.contactEmail}
              </a>
            </div>

            <div className="lg:col-span-5">
              <Label className="text-ink-3">What to send</Label>
              <ol className="mt-3 border-t border-line">
                {[
                  "A paragraph on the problem",
                  "A link to anything that already exists",
                  "A budget range, however rough",
                ].map((item, i) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-3 border-b border-line-soft py-3 text-[12px]"
                  >
                    <span className="label shrink-0 text-ink-3">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>

              <p className="label mt-5 text-ink-3">
                {REGISTRATION.enterpriseType} · GSTIN {REGISTRATION.gstin}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
