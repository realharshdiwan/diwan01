import { NAV, REGISTRATION, SITE } from "@/lib/site";
import { Label } from "./ui";

export function SiteFooter() {
  return (
    <footer className="gutter border-t border-line pb-10 pt-12 sm:pt-16">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-[1.5rem] font-medium leading-none tracking-[-0.03em]">
            {SITE.name}
          </p>
          <p className="mt-3 max-w-[32ch] text-[13.5px] leading-[1.6] text-ink-3">
            Independent software studio in {SITE.basedIn}. Web systems, internal
            tools, and automation.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-2.5">
          <Label>Index</Label>
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14px] leading-none text-ink-2 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div>
          <Label>Registered</Label>
          <dl className="mt-3 space-y-1.5">
            <div className="flex gap-3">
              <dt className="label w-12">GSTIN</dt>
              <dd className="font-mono text-[11px] tracking-[0.02em]">
                {REGISTRATION.gstin}
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="label w-12">Udyam</dt>
              <dd className="font-mono text-[11px] tracking-[0.02em]">
                {REGISTRATION.udyam}
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="label w-12">Base</dt>
              <dd className="text-[12px]">{REGISTRATION.locality}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-2 border-t border-line pt-4 sm:flex-row sm:items-baseline sm:justify-between">
        <Label>
          © {new Date().getFullYear()} {SITE.name}
        </Label>
        <Label>Parchi is a separate product by the studio.</Label>
        <Label>{SITE.contactEmail}</Label>
      </div>
    </footer>
  );
}
