import Link from "next/link";
import { NAV, SITE } from "@/lib/site";
import { MobileNav } from "./mobile-nav";
import { Btn, Label } from "./ui";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-field/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-[1180px] items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-baseline gap-2.5"
          aria-label={`${SITE.name} — home`}
        >
          <span className="font-dot text-[20px] font-semibold leading-none tracking-[0.02em]">
            DM
          </span>
          <Label className="hidden whitespace-nowrap text-ink-3 sm:inline">
            {SITE.name}
          </Label>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="label whitespace-nowrap text-ink-3 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2.5">
          <div className="hidden sm:block">
            <Btn href="#contact" className="h-9 px-3">
              Start a project
            </Btn>
          </div>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}
