"use client";

import { useState } from "react";

// Simple hero section with sub-components
export function HeroSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative isolate min-h-[780px] overflow-hidden bg-[#030305] text-white">
      {/* Background glow */}
      <HeroBackground />
      <div className="relative z-20 mx-auto flex max-w-5xl flex-col items-center px-5 pt-24 text-center sm:pt-28">
        {children}
      </div>
      <HeroGlobe />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-[#030305] to-transparent" />
    </section>
  );
}

// Background with stars and glow effects
function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute left-1/2 top-[380px] h-[450px] w-[850px] -translate-x-1/2 rounded-full bg-[#493cff]/30 blur-[130px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.10),transparent_45%)]" />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            radial-gradient(2px 2px at 10% 48%, #766aff 99%, transparent),
            radial-gradient(2px 2px at 20% 60%, #766aff 99%, transparent),
            radial-gradient(2px 2px at 35% 43%, #766aff 99%, transparent),
            radial-gradient(2px 2px at 50% 58%, #766aff 99%, transparent),
            radial-gradient(2px 2px at 65% 42%, #766aff 99%, transparent),
            radial-gradient(2px 2px at 80% 55%, #766aff 99%, transparent),
            radial-gradient(2px 2px at 90% 46%, #766aff 99%, transparent)
          `,
        }}
      />
    </div>
  );
}

// Announcement badge
export function HeroBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 shadow-[0_0_30px_rgba(255,255,255,0.04)] backdrop-blur-md">
      {children}
    </div>
  );
}

// Main heading
export function HeroTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl md:text-[58px]">
      {children}
    </h1>
  );
}

// Subtitle/description
export function HeroDescription({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 max-w-xl text-sm leading-6 text-white/55 sm:text-base">
      {children}
    </p>
  );
}

// Search form with job title and location inputs
export function HeroSearch({ onSearch }: { onSearch?: (query: string) => void }) {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(`${title} ${location}`.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 flex w-full max-w-[670px] flex-col gap-2 rounded-2xl border border-white/15 bg-[#151518]/90 p-2 shadow-[0_10px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:flex-row sm:items-center sm:rounded-xl"
    >
      {/* Job title input */}
      <div className="flex min-w-0 flex-1 items-center gap-3 px-3 py-2">
        <svg className="h-5 w-5 shrink-0 text-white/70" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="7" />
          <path d="m16 16 4 4" />
        </svg>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Job title, skill or company"
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/45"
        />
      </div>

      <div className="hidden h-7 w-px bg-white/10 sm:block" />

      {/* Location input */}
      <div className="flex min-w-0 flex-1 items-center gap-3 px-3 py-2">
        <svg className="h-5 w-5 shrink-0 text-white/70" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location or Remote"
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/45"
        />
      </div>

      {/* Search button */}
      <button
        type="submit"
        aria-label="Search jobs"
        className="flex h-11 items-center justify-center rounded-xl bg-[#6555ff] px-5 text-white transition hover:bg-[#7668ff] hover:shadow-[0_0_25px_rgba(101,85,255,0.55)] sm:w-12 sm:px-0"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="7" />
          <path d="m16 16 4 4" />
        </svg>
        <span className="ml-2 text-sm sm:hidden">Search Jobs</span>
      </button>
    </form>
  );
}

// Trending searches section
export function HeroTrending({ items }: { items: string[] }) {
  return (
    <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
      <span className="mr-1 text-xs text-white/40">Trending Position</span>
      {items.map((item) => (
        <button
          key={item}
          type="button"
          className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[10px] text-white/75 transition hover:border-[#6555ff]/60 hover:bg-[#6555ff]/15 hover:text-white"
        >
          {item}
        </button>
      ))}
    </div>
  );
}

// Earth globe background element
function HeroGlobe() {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-[510px] z-10 h-[850px] w-[850px] -translate-x-1/2 overflow-hidden rounded-full border-t border-indigo-200/40 bg-cover bg-center shadow-[0_-25px_100px_rgba(83,68,255,0.65)] sm:top-[440px] sm:h-[1050px] sm:w-[1050px] lg:h-[1150px] lg:w-[1150px]"
      style={{
        backgroundImage: `
          linear-gradient(
            180deg,
            rgba(83, 76, 255, 0.35) 0%,
            rgba(17, 18, 70, 0.48) 45%,
            rgba(3, 3, 15, 0.95) 100%
          ),
          url("https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=85&w=2000&auto=format&fit=crop")
        `,
      }}
    >
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_50%_10%,rgba(148,138,255,0.45),transparent_55%)]" />
      <div className="relative z-10 mx-auto mt-24 max-w-xl px-6 text-center sm:mt-24">
        <h2 className="text-2xl font-medium leading-tight tracking-tight text-white/90 sm:text-3xl">
          Assisting over 15,000 job seekers
          <br />
          find their dream positions.
        </h2>
      </div>
    </div>
  );
}