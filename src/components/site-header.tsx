import Link from "next/link";
import { NAV, SITE } from "@/lib/site";
import { Button } from "./ui";

function Mark() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="shrink-0 text-ink"
      fill="none"
      stroke="currentColor"
    >
      <rect x="0.6" y="0.6" width="18.8" height="18.8" strokeWidth="1.1" />
      <path d="M10 4.2v11.6M4.2 10h11.6" strokeWidth="0.7" opacity="0.55" />
      <circle cx="10" cy="10" r="2.6" strokeWidth="1.1" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-field/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between gap-6 px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label={`${SITE.name} — home`}
        >
          <Mark />
          <span className="mono-label text-[11px] text-ink">{SITE.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="mono-label text-ink-2 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            href="#contact"
            className="hidden h-9 px-4 text-[12px] sm:inline-flex"
          >
            Start a project
          </Button>

          <details className="relative md:hidden">
            <summary className="mono-label cursor-pointer list-none rounded-[3px] border border-line-strong px-3 py-2 text-ink [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <div className="absolute right-0 top-[calc(100%+0.5rem)] w-52 rounded-[4px] border border-line bg-paper p-4 shadow-[0_16px_40px_-24px_rgba(11,61,46,0.45)]">
              <nav aria-label="Mobile" className="flex flex-col gap-3">
                {NAV.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="mono-label text-ink-2 transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
