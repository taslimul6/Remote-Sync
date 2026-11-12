import Link from "next/link"
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa"

const columns = [
  {
    title: "Product",
    links: [
      { label: "Job discovery", href: "#" },
      { label: "Worker AI", href: "#" },
      { label: "Companies", href: "#" },
      { label: "Salary data", href: "#" },
    ],
  },
  {
    title: "Navigations",
    links: [
      { label: "Help center", href: "#" },
      { label: "Career library", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Brand Guideline", href: "#" },
      { label: "Newsroom", href: "#" },
    ],
  },
]

const socials = [
  { label: "Facebook", href: "#", icon: FaFacebookF },
  { label: "Pinterest", href: "#", icon: FaPinterestP },
  { label: "LinkedIn", href: "#", icon: FaLinkedinIn },
]

export default function Footer() {
  return (
    <footer className="bg-black px-4 py-10 text-white sm:px-8">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          {/* Brand */}
          <div className="max-w-[200px]">
            <Link href="/" aria-label="Hireloop home" className="text-2xl font-semibold tracking-tight">
              <span className="text-sky-500">hire</span>
              <span className="text-orange-500">loop</span>
            </Link>
            <p className="mt-5 text-xs leading-relaxed text-white/50">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>
          </div>

          {/* Link columns */}
          <nav className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 lg:gap-x-16">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm text-indigo-500">{col.title}</h3>
                <ul className="mt-5 space-y-4">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs text-white/50 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex items-center gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="flex size-8 items-center justify-center rounded-md bg-white/5 text-white/70 transition-colors hover:bg-indigo-600 hover:text-white"
                >
                  <Icon className="size-3.5" aria-hidden />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs">
            <p className="text-white/30">Copyright 2024 –Programming Hero</p>
            <p className="text-white/70">
              <Link href="/terms" className="hover:text-white">
                Terms &amp; Policy
              </Link>
              {" - "}
              <Link href="/privacy" className="hover:text-white">
                Privacy Guideline
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}