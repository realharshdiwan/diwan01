"use client";

import { NAV } from "@/lib/site";

/**
 * Native <details> disclosure — no state, no focus trap. The only script on
 * the site: it closes the slip when a destination is chosen.
 */
export function MobileNav() {
  return (
    <details className="relative md:hidden">
      <summary className="label cursor-pointer list-none border border-ink px-2.5 py-2 text-ink [&::-webkit-details-marker]:hidden">
        Menu
      </summary>
      <div className="absolute right-0 top-[calc(100%+0.5rem)] w-56 border border-ink bg-paper p-4">
        <nav aria-label="Mobile" className="flex flex-col gap-3">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => {
                const details = event.currentTarget.closest("details");
                if (details) details.open = false;
              }}
              className="label text-ink-3 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </details>
  );
}
