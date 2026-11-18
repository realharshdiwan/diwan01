import { NAV, REGISTRATION, SITE } from "@/lib/site";
import { Label } from "./ui";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-[1180px] px-5 py-10 sm:px-8">
        <div className="perf" aria-hidden="true" />

        <div className="mt-8 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-dot text-[26px] font-semibold leading-none tracking-[0.02em]">
              DM
            </p>
            <p className="mt-3 max-w-[34ch] text-[12px] leading-relaxed text-ink-3">
              An independent software studio in {SITE.basedIn}. Web systems,
              internal tools, and automation for the working half of a business.
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <Label className="text-ink-3">Index</Label>
            <ul className="mt-3 flex flex-col gap-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[12px] text-ink-2 transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <Label className="text-ink-3">Registered</Label>
            <dl className="mt-3 space-y-1.5 text-[11.5px]">
              <div className="flex justify-between gap-4">
                <dt className="text-ink-3">GSTIN</dt>
                <dd className="tabular-nums">{REGISTRATION.gstin}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink-3">Udyam</dt>
                <dd className="tabular-nums">{REGISTRATION.udyam}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink-3">Type</dt>
                <dd>{REGISTRATION.enterpriseType}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-4 sm:flex-row sm:items-center sm:justify-between">
          <Label className="text-ink-3">
            © {new Date().getFullYear()} {SITE.name}
          </Label>
          <Label className="text-ink-3">
            Printed in mono · {REGISTRATION.locality}
          </Label>
        </div>
      </div>
    </footer>
  );
}
