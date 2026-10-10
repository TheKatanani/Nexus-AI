export function CirclesBg() {
  return (
    <svg viewBox="0 0 1084 1084" className="w-full h-full">
      <defs>
        <linearGradient
          id="btn-gold-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="var(--color-brand-gold)" />
          <stop offset="40%" stopColor="var(--color-brand-gold-light)" />
          <stop offset="90.87%" stopColor="var(--color-brand-gold)" />
        </linearGradient>
      </defs>
      <path
        d="M542 1084C243.148 1084 0 840.852 0 542C0 243.148 243.148 0 542 0C840.852 0 1084 243.148 1084 542C1084 840.852 840.852 1084 542 1084ZM542 28.2481C258.727 28.2481 28.2481 258.797 28.2481 542C28.2481 825.203 258.797 1055.75 542 1055.75C825.203 1055.75 1055.75 825.203 1055.75 542C1055.75 258.797 825.273 28.2481 542 28.2481Z"
        fill="url(#btn-gold-gradient)"
      />

      <g style={{ mixBlendMode: "screen" }} opacity="0.29">
        <path
          d="M310.688 314.04C437.133 187.548 641.562 186.9 767.235 312.596C892.908 438.293 892.215 642.769 765.815 769.261C639.346 895.754 434.94 896.402 309.267 770.706C183.593 645.009 184.242 440.532 310.688 314.04Z"
          fill="url(#btn-gold-gradient)"
          stroke="var(--color-brand-gold-light)"
        />
      </g>

      <ellipse
        opacity="0.5"
        cx="542.84"
        cy="542.24"
        rx="461.029"
        ry="460.151"
        stroke="url(#btn-gold-gradient)"
        fill="none"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
