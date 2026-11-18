import type { AnchorHTMLAttributes, ReactNode } from "react";

export function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function Label({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={cx("label", className)}>{children}</span>;
}

type BtnProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "solid" | "outline";
  children: ReactNode;
};

/** Bracketed control — the only button shape on the site. */
export function Btn({
  variant = "solid",
  className,
  children,
  ...rest
}: BtnProps) {
  const base =
    "inline-flex items-center gap-2 px-4 py-2.5 text-[12px] uppercase tracking-[0.1em] transition-colors duration-150";
  const variants = {
    solid: "bg-ink text-field hover:bg-ink-2",
    outline:
      "border border-ink text-ink hover:bg-ink hover:text-field",
  } as const;

  return (
    <a className={cx(base, variants[variant], className)} {...rest}>
      <span aria-hidden="true" className="opacity-60">
        [
      </span>
      {children}
      <span aria-hidden="true" className="opacity-60">
        ]
      </span>
    </a>
  );
}

export function SectionHead({
  index,
  title,
  note,
  id,
}: {
  index: string;
  title: string;
  note?: string;
  id?: string;
}) {
  return (
    <div id={id} className="rule pt-4">
      <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
        <h2 className="label text-[12px] tracking-[0.14em] text-ink">
          <span className="text-ink-3">{index}</span>
          <span className="mx-2 text-ink-3">/</span>
          {title}
        </h2>
        {note ? (
          <p className="max-w-[46ch] text-[12px] leading-relaxed text-ink-3 md:text-right">
            {note}
          </p>
        ) : null}
      </div>
    </div>
  );
}
