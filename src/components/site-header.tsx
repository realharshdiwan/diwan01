import Link from "next/link";
import { NAV, SITE } from "@/lib/site";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <header className="gutter relative z-40 flex h-[var(--header-h)] items-center justify-between gap-6">
      <Link
        href="/"
        className="label text-[11px] tracking-[0.12em] text-ink no-underline transition-colors hover:text-ink-2"
      >
        {SITE.name}
      </Link>

      <nav
        aria-label="Primary"
        className="hidden items-center gap-7 md:flex lg:gap-10"
      >
        {NAV.map((item) => (
          <Link key={item.href} href={item.href} className="nav-link">
            {item.label}
          </Link>
        ))}
      </nav>

      <MobileNav />
    </header>
  );
}
