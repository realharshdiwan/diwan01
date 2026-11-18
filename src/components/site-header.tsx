import { NAV } from "@/lib/site";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <header className="gutter relative z-40 flex h-[var(--header-h)] items-center justify-end">
      <nav aria-label="Primary" className="hidden items-center gap-7 md:flex lg:gap-10">
        {NAV.map((item) => (
          <a key={item.href} href={item.href} className="nav-link">
            {item.label}
          </a>
        ))}
      </nav>

      <MobileNav />
    </header>
  );
}
