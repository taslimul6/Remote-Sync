/* Dome grid: concentric arcs + lines radiating from a point below the section */
const CX = 600
const CY = 640
const RADII = Array.from({ length: 9 }, (_, i) => 90 + i * 70)
const ANGLES = Array.from({ length: 25 }, (_, i) => 180 + i * 7.5)
const OUTER = RADII[RADII.length - 1]

function DomeGrid() {
  return (
    <svg
      viewBox="0 0 1200 640"
      preserveAspectRatio="xMidYMin slice"
      className="absolute inset-0 size-full"
      aria-hidden
    >
      <g fill="none" stroke="currentColor" strokeWidth="1">
        {RADII.map((r) => (
          <path key={r} d={`M ${CX - r} ${CY} A ${r} ${r} 0 0 1 ${CX + r} ${CY}`} />
        ))}
        {ANGLES.map((deg) => {
          const rad = (deg * Math.PI) / 180
          return (
            <line
              key={deg}
              x1={CX}
              y1={CY}
              x2={CX + OUTER * Math.cos(rad)}
              y2={CY + OUTER * Math.sin(rad)}
            />
          )
        })}
      </g>
    </svg>
  )
}

export default function CtaSection() {
  return (
    <section className="relative isolate overflow-hidden bg-black px-4 py-28 text-white sm:py-36">
      {/* Grid, fading out toward the bottom */}
      <div
        className="absolute inset-0 -z-20 text-white/10 [mask-image:linear-gradient(to_bottom,black_30%,transparent_95%)]"
        aria-hidden
      >
        <DomeGrid />
      </div>

      {/* Indigo glow */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_60%_at_50%_0%,rgba(99,91,255,0.75),rgba(79,70,229,0.25)_45%,transparent_75%)]"
        aria-hidden
      />

      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <h2 className="text-balance text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl">
          Your next role is already looking for you
        </h2>

        <p className="mt-5 text-sm text-white/70 sm:text-base">
          Build a profile in three minutes. The matches start arriving tomorrow
          morning.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/signup"
            className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-white/90"
          >
            Create a free account
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-normal text-white transition-colors hover:bg-white/10 hover:text-white"
          >
            View pricing
          </a>
        </div>
      </div>
    </section>
  )
}