/**
 * Engraved dial indicator — the studio's own instrument, not a product mock.
 * Line art only: geometry carries it, so there is nothing to photograph.
 */
export function Instrument({ className }: { className?: string }) {
  const ticks = Array.from({ length: 72 }, (_, i) => {
    const major = i % 6 === 0;
    const angle = (i * 5 * Math.PI) / 180;
    const inner = major ? 146 : 152;
    const outer = 166;
    return {
      key: i,
      x1: Math.sin(angle) * inner,
      y1: -Math.cos(angle) * inner,
      x2: Math.sin(angle) * outer,
      y2: -Math.cos(angle) * outer,
      width: major ? 1.1 : 0.6,
      opacity: major ? 0.85 : 0.4,
    };
  });

  const marks = [
    { label: "0", angle: 0 },
    { label: "90", angle: 90 },
    { label: "180", angle: 180 },
    { label: "270", angle: 270 },
  ];

  return (
    <svg
      viewBox="0 0 520 520"
      role="img"
      aria-label="Engraved dial indicator with datum frame and graduation marks"
      className={className}
      fill="none"
      stroke="currentColor"
    >
      <defs>
        <pattern
          id="engrave-hatch"
          width="5"
          height="5"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="5"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.28"
          />
        </pattern>
      </defs>

      {/* Datum frame — the field everything is measured inside. */}
      <rect
        x="26"
        y="26"
        width="468"
        height="468"
        strokeWidth="0.8"
        opacity="0.4"
      />

      {/* Corner registration crosses. */}
      {[
        [26, 26],
        [494, 26],
        [26, 494],
        [494, 494],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`} opacity="0.55">
          <line x1={x - 7} y1={y} x2={x + 7} y2={y} strokeWidth="0.8" />
          <line x1={x} y1={y - 7} x2={x} y2={y + 7} strokeWidth="0.8" />
        </g>
      ))}

      {/* Axes. */}
      <line
        x1="26"
        y1="260"
        x2="494"
        y2="260"
        strokeWidth="0.5"
        strokeDasharray="2 7"
        opacity="0.28"
      />
      <line
        x1="260"
        y1="26"
        x2="260"
        y2="494"
        strokeWidth="0.5"
        strokeDasharray="2 7"
        opacity="0.28"
      />

      <g transform="translate(260 260)">
        <circle r="170" strokeWidth="0.9" opacity="0.55" />
        <circle r="138" strokeWidth="0.6" opacity="0.35" />
        <circle r="104" strokeWidth="0.9" opacity="0.7" />
        <circle r="72" strokeWidth="0.6" opacity="0.4" />
        <circle r="72" fill="url(#engrave-hatch)" stroke="none" />

        {/* Graduations. */}
        {ticks.map((t) => (
          <line
            key={t.key}
            x1={t.x1}
            y1={t.y1}
            x2={t.x2}
            y2={t.y2}
            strokeWidth={t.width}
            opacity={t.opacity}
          />
        ))}

        {/* Numerals on the four cardinal points. */}
        {marks.map((m) => {
          const rad = (m.angle * Math.PI) / 180;
          return (
            <text
              key={m.label}
              x={Math.sin(rad) * 124}
              y={-Math.cos(rad) * 124 + 3}
              textAnchor="middle"
              fontSize="8.5"
              letterSpacing="0.16em"
              fill="currentColor"
              stroke="none"
              opacity="0.62"
              fontFamily="var(--font-mono)"
            >
              {m.label}
            </text>
          );
        })}

        {/* Needle at 42°, counterweighted — a reading, not an arrow. */}
        <g transform="rotate(42)">
          <line
            x1="0"
            y1="16"
            x2="0"
            y2="-120"
            strokeWidth="1.3"
            opacity="0.9"
          />
          <line
            x1="-5"
            y1="16"
            x2="5"
            y2="16"
            strokeWidth="1.3"
            opacity="0.9"
          />
        </g>
        <circle r="6.5" strokeWidth="1.2" opacity="0.9" />
        <circle r="2.2" fill="currentColor" stroke="none" opacity="0.9" />
      </g>

      {/* Vertical scale on the left, inside the frame. */}
      <g opacity="0.5">
        {Array.from({ length: 11 }, (_, i) => (
          <line
            key={i}
            x1="26"
            y1={130 + i * 26}
            x2={i % 5 === 0 ? 44 : 36}
            y2={130 + i * 26}
            strokeWidth="0.7"
          />
        ))}
      </g>
    </svg>
  );
}
