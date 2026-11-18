import type { AnchorHTMLAttributes, ReactNode } from "react";

export function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "solid" | "ghost" | "inverse";
  children: ReactNode;
};

export function Button({
  variant = "solid",
  className,
  children,
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex h-11 items-center justify-center gap-2 rounded-[4px] px-5 text-[13px] font-medium tracking-[0.01em] transition-colors duration-150";
  const variants = {
    solid: "bg-ink text-field hover:bg-ink-2",
    ghost: "border border-line-strong text-ink hover:border-ink hover:bg-paper",
    inverse: "bg-field text-ink hover:bg-paper",
  } as const;

  return (
    <a className={cx(base, variants[variant], className)} {...rest}>
      {children}
    </a>
  );
}

export function Mono({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={cx("mono-label", className)}>{children}</span>;
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
    <div id={id} className="border-t border-line-strong pt-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
        <div className="flex items-baseline gap-4">
          <Mono className="text-ink-3">{index}</Mono>
          <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] font-medium tracking-[-0.02em]">
            {title}
          </h2>
        </div>
        {note ? (
          <p className="max-w-[34ch] text-[13px] leading-relaxed text-ink-2 md:text-right">
            {note}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export function Plate({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "rounded-[3px] border border-line bg-paper/95 px-3 py-2 backdrop-blur-[1px]",
        className,
      )}
    >
      <Mono className="block text-[9px] text-ink-3">{label}</Mono>
      <span className="tnum mt-1 block font-mono text-[11px] tracking-[0.02em] text-ink">
        {value}
      </span>
    </div>
  );
}
