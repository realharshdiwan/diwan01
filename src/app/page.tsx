import { Instrument } from "@/components/instrument";
import { Button, Mono, Plate, SectionHead } from "@/components/ui";
import { REGISTRATION, SITE } from "@/lib/site";

const SPECS = [
  { label: "Registry", value: REGISTRATION.gstin },
  { label: "MSME", value: REGISTRATION.udyam },
  { label: "Base", value: REGISTRATION.locality },
  { label: "Mode", value: "Studio + select client work" },
] as const;

const STANDARD = [
  {
    title: "Measure first",
    body: "No build starts without a written scope: the goal, the users, the constraint, and the price. If we cannot state it on one page, we do not understand it yet.",
  },
  {
    title: "One system",
    body: "Work lives in one place — repository, board, documents. No parallel spreadsheets, no status buried in a chat thread.",
  },
  {
    title: "Handover by default",
    body: "Repository, runbook, and a recorded walkthrough. You are never renting your own software from us.",
  },
  {
    title: "Support is a phase",
    body: "Thirty days of close support after launch, then a maintenance agreement only if you actually want one.",
  },
] as const;

const CAPABILITIES = [
  {
    title: "Web systems",
    body: "Marketing sites, portals, and booking flows that survive a phone on a weak signal.",
  },
  {
    title: "Internal tools",
    body: "Dashboards and admin surfaces that replace the spreadsheet nobody trusts.",
  },
  {
    title: "Automation & integration",
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
    body: "A conversation, then a one-page scope: goal, users, constraints, price.",
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
    body: "Deploy, document, walk through, then support. No lock-in clause.",
  },
] as const;

function Arrow() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      aria-hidden="true"
      className="mt-px"
      fill="none"
      stroke="currentColor"
    >
      <path d="M1 6h9M6.5 1.5 11 6l-4.5 4.5" strokeWidth="1.2" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="datum pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_72%_38%,black,transparent_70%)]"
        />

        <div className="relative mx-auto grid max-w-[1180px] gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pt-20 md:grid-cols-2 md:items-start md:gap-10 lg:grid-cols-12 lg:gap-6 lg:pb-24 lg:pt-24">
          <div className="md:col-span-1 lg:col-span-7">
            <Mono className="reveal block text-ink-3">
              Independent software studio · {REGISTRATION.locality} · Est.{" "}
              {SITE.established}
            </Mono>

            <h1 className="reveal reveal-1 mt-6 max-w-[15ch] text-[clamp(2.7rem,6.2vw,4.5rem)] font-medium leading-[0.97] tracking-[-0.035em]">
              Software built to a{" "}
              <span className="border-b border-ink/35">tolerance.</span>
            </h1>

            <p className="reveal reveal-2 mt-7 max-w-[50ch] text-[15px] leading-[1.72] text-ink-2">
              Diwan Mercantile designs and builds web systems, internal tools,
              and automation for businesses that need the thing to actually
              hold. We work to a written standard — scope, handover, support —
              and we measure ourselves against it.
            </p>

            <div className="reveal reveal-3 mt-9 flex flex-wrap items-center gap-3">
              <Button href="#contact">
                Start a project <Arrow />
              </Button>
              <Button href="#standard" variant="ghost">
                Read the standard
              </Button>
            </div>
          </div>

          <div className="relative md:col-span-1 lg:col-span-5">
            <Instrument className="mx-auto w-full max-w-[400px] text-ink/90 md:max-w-[330px] lg:ml-auto lg:mr-0 lg:max-w-[400px]" />

            <div className="mt-6 grid gap-2 sm:grid-cols-2 md:grid-cols-1 lg:mt-0 lg:block">
              <Plate
                label="Base"
                value={REGISTRATION.locality}
                className="lg:absolute lg:-left-6 lg:top-10"
              />
              <Plate
                label="Scope"
                value="Web · Tools · Automation"
                className="lg:absolute lg:-right-4 lg:top-6"
              />
              <Plate
                label="Registry"
                value={REGISTRATION.gstin}
                className="lg:absolute lg:-left-6 lg:bottom-24"
              />
            </div>

            <div className="mt-5 flex items-center gap-3 lg:mt-4">
              <span aria-hidden="true" className="h-px flex-1 bg-line" />
              <Mono className="text-ink-3">
                Fig. 01 — Dial indicator · 0.01 mm
              </Mono>
            </div>
          </div>
        </div>
      </section>

      {/* ── Spec strip ─────────────────────────────────────────── */}
      <section
        aria-label="Registration and operating details"
        className="border-y border-line-strong bg-paper/60"
      >
        <dl className="mx-auto grid max-w-[1180px] grid-cols-1 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {SPECS.map((spec) => (
            <div
              key={spec.label}
              className="flex items-baseline justify-between gap-4 border-b border-line py-4 last:border-b-0 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0 lg:py-5"
            >
              <dt className="mono-label text-ink-3">{spec.label}</dt>
              <dd className="tnum font-mono text-[11.5px] tracking-[0.01em] text-ink">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── 01 · The standard ──────────────────────────────────── */}
      <section className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20">
        <SectionHead
          index="01"
          id="standard"
          title="The standard"
          note="Four commitments, written down. Unwritten ones are just moods."
        />

        <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2">
          {STANDARD.map((item, i) => (
            <article
              key={item.title}
              className="bg-field p-6 transition-colors hover:bg-paper sm:p-8"
            >
              <Mono className="text-ink-3">
                {String(i + 1).padStart(2, "0")}
              </Mono>
              <h3 className="mt-4 text-[17px] font-medium tracking-[-0.01em]">
                {item.title}
              </h3>
              <p className="mt-2.5 max-w-[42ch] text-[13.5px] leading-[1.72] text-ink-2">
                {item.body}
              </p>
            </article>
          ))}
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

        <div className="mt-10 border-t border-line">
          {CAPABILITIES.map((cap, i) => (
            <a
              key={cap.title}
              href="#contact"
              className="group flex flex-col gap-2 border-b border-line py-6 transition-colors hover:bg-paper/70 sm:grid sm:grid-cols-[2.5rem_12.5rem_1fr_1.5rem] sm:items-baseline sm:gap-6 sm:px-2"
            >
              <Mono className="text-ink-3">
                {String(i + 1).padStart(2, "0")}
              </Mono>
              <h3 className="text-[17px] font-medium tracking-[-0.01em] transition-transform duration-200 group-hover:translate-x-0.5">
                {cap.title}
              </h3>
              <p className="max-w-[52ch] text-[13.5px] leading-[1.72] text-ink-2">
                {cap.body}
              </p>
              <span
                aria-hidden="true"
                className="hidden justify-self-end text-ink-3 transition-all duration-200 group-hover:translate-x-1 group-hover:text-ink sm:block"
              >
                <Arrow />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ── 03 · Method ───────────────────────────────────────── */}
      <section className="mx-auto max-w-[1180px] px-5 pb-16 sm:px-8 sm:pb-20">
        <SectionHead
          index="03"
          id="method"
          title="Method"
          note="Four steps. No phase ends without something you can look at."
        />

        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {METHOD.map((step) => (
            <li key={step.step} className="border-t border-ink/25 pt-4">
              <Mono className="text-ink-3">{step.step}</Mono>
              <h3 className="mt-3 text-[15px] font-medium">{step.title}</h3>
              <p className="mt-2 max-w-[34ch] text-[13.5px] leading-[1.7] text-ink-2">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        {/* Our own work stays on the periphery: the studio is the subject. */}
        <div className="mt-16 flex flex-col gap-2 border-t border-line-strong pt-5 sm:flex-row sm:items-baseline sm:justify-between">
          <p className="text-[13.5px] leading-relaxed text-ink-2">
            <span className="font-medium text-ink">Parchi</span> — billing and
            inventory for small shops. Our own product, held to the same
            standard.
          </p>
          <Mono className="shrink-0 text-ink-3">In development</Mono>
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────────── */}
      <section id="contact" className="mx-auto max-w-[1180px] px-5 pb-20 sm:px-8">
        <div className="rounded-[10px] bg-ink px-6 py-14 text-field sm:px-12 sm:py-16">
          <Mono className="text-field/65">Start a project</Mono>

          <h2 className="mt-5 max-w-[18ch] text-[clamp(1.9rem,4.2vw,3rem)] font-medium leading-[1.02] tracking-[-0.03em]">
            Tell us what has to be true.
          </h2>

          <p className="mt-5 max-w-[54ch] text-[14.5px] leading-[1.75] text-field/75">
            Send the constraint, the deadline, and what you have already tried.
            You will get a straight answer on whether we are the right studio
            for it — usually within two working days.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${SITE.contactEmail}`}
              className="inline-flex h-11 items-center rounded-[4px] bg-field px-5 text-[13px] font-medium text-ink transition-colors hover:bg-paper"
            >
              {SITE.contactEmail}
            </a>
            <Mono className="text-field/65">Two working days, at most</Mono>
          </div>

          <ul className="mt-10 grid gap-3 border-t border-field/20 pt-6 sm:grid-cols-3">
            {[
              "A paragraph on the problem",
              "A link to anything existing",
              "A budget range",
            ].map((item, i) => (
              <li
                key={item}
                className="flex items-baseline gap-3 text-[13px] text-field/75"
              >
                <Mono className="text-field/65">
                  {String(i + 1).padStart(2, "0")}
                </Mono>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
