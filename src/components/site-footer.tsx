import Link from "next/link";
import { NAV, REGISTRATION, SITE } from "@/lib/site";
import { Mono } from "./ui";

export function SiteFooter() {
  return (
    <footer className="border-t border-line-strong">
      <div className="mx-auto max-w-[1180px] px-5 py-12 sm:px-8 sm:py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="mono-label text-ink">{SITE.name}</p>
            <p className="mt-3 max-w-[30ch] text-[13.5px] leading-relaxed text-ink-2">
              An independent software studio in {SITE.basedIn}. Web systems,
              internal tools, and automation.
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <Mono className="block text-ink-3">Index</Mono>
            <ul className="mt-3 flex flex-col gap-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[13.5px] text-ink-2 transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <Mono className="block text-ink-3">Registered</Mono>
            <dl className="mt-3 space-y-2 text-[12px]">
              <div className="flex justify-between gap-4 border-b border-line pb-2">
                <dt className="text-ink-3">GSTIN</dt>
                <dd className="tnum font-mono text-ink">{REGISTRATION.gstin}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-line pb-2">
                <dt className="text-ink-3">Udyam</dt>
                <dd className="tnum font-mono text-ink">{REGISTRATION.udyam}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink-3">Type</dt>
                <dd className="text-ink">{REGISTRATION.enterpriseType}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
          <Mono className="text-ink-3">
            © {new Date().getFullYear()} {SITE.name}
          </Mono>
          <Mono className="text-ink-3">
            Set in Geist · Built in {REGISTRATION.locality}
          </Mono>
        </div>
      </div>
    </footer>
  );
}
