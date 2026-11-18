import { REGISTRATION, SITE } from "@/lib/site";
import { Label } from "./ui";

/**
 * The studio as one printed slip. This is the hero's only artefact:
 * everything on it is a fact we can stand behind — no counts, no claims.
 */
const ITEMS = [
  { name: "Web systems", status: "open" },
  { name: "Internal tools", status: "open" },
  { name: "Automation", status: "open" },
  { name: "Parchi · own product", status: "in dev" },
] as const;

export function Receipt() {
  return (
    <div className="relative w-full max-w-[352px] border border-line bg-paper">
      <div className="perf" aria-hidden="true" />

      <div className="px-5 pb-5 pt-5">
        <div className="flex items-baseline justify-between gap-4">
          <Label className="text-ink">Counter slip</Label>
          <Label className="text-ink-3">No. 001</Label>
        </div>

        <p className="mt-1.5 text-[10.5px] uppercase tracking-[0.12em] text-ink-3">
          {REGISTRATION.locality} · Est. {SITE.established}
        </p>

        <div
          aria-hidden="true"
          className="my-4 border-t border-dashed border-line"
        />

        <dl className="space-y-2.5">
          {ITEMS.map((item) => (
            <div key={item.name} className="leader text-[11.5px]">
              <dt className="uppercase tracking-[0.06em]">{item.name}</dt>
              <span className="fill" aria-hidden="true" />
              <dd
                className={
                  item.status === "open"
                    ? "uppercase tracking-[0.1em] text-ink-3"
                    : "uppercase tracking-[0.1em] text-accent"
                }
              >
                {item.status}
              </dd>
            </div>
          ))}
        </dl>

        <div
          aria-hidden="true"
          className="my-4 border-t border-dashed border-line"
        />

        <div className="leader text-[11.5px]">
          <span className="uppercase tracking-[0.1em] text-ink-3">
            Ledger
          </span>
          <span className="fill" aria-hidden="true" />
          <span className="uppercase tracking-[0.1em]">
            Balanced at close
          </span>
        </div>

        <div className="mt-6 flex items-end justify-between gap-4">
          <span className="label text-accent">Counter open</span>
          <span className="font-dot text-[30px] font-semibold leading-none tracking-[0.02em]">
            DM
          </span>
        </div>

        {/* Printed barcode — bars, not an image. */}
        <div
          aria-hidden="true"
          className="mt-4 h-7 w-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, var(--color-ink) 0 1px, transparent 1px 4px, var(--color-ink) 4px 6px, transparent 6px 9px, var(--color-ink) 9px 10px, transparent 10px 14px)",
          }}
        />
        <p className="mt-2 text-[9.5px] uppercase tracking-[0.28em] text-ink-3">
          {REGISTRATION.gstin}
        </p>
      </div>
    </div>
  );
}
