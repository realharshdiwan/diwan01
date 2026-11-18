import Link from "next/link";
import { Label } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="gutter py-16 sm:py-24" aria-labelledby="not-found-title">
      <div className="shell">
        <Label as="p">404</Label>

        <div>
          <h1
            id="not-found-title"
            className="max-w-[20ch] text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.12]"
          >
            This page does not exist.
          </h1>

          <p className="mt-6 max-w-[46ch] text-[15px] leading-[1.7] text-ink-2">
            Check the address, or start again from the studio.
          </p>

          <Link
            href="/"
            className="mt-8 inline-block border-b border-ink pb-1 text-[15px] leading-tight transition-colors hover:border-accent hover:text-accent"
          >
            Diwan Mercantile
          </Link>
        </div>
      </div>
    </section>
  );
}
