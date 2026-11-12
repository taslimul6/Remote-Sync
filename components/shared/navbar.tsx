"use client";

import { useState } from "react";
import Link from "next/link";

// Simple navbar with just a few sub-components
export function Navbar({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {children}

          {/* Mobile toggle button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-accent"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col gap-2">{children}</div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Logo / brand link
export function NavbarBrand({ href = "/", children }: { href?: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="flex items-center gap-2 font-semibold text-xl hover:opacity-80">
      {children}
    </Link>
  );
}

// Navigation links container
export function NavbarNav({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`flex items-center gap-1 ${className}`}>{children}</div>;
}

// Single nav link
export function NavbarLink({
  href,
  active = false,
  children,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
        active ? "text-foreground bg-accent" : "text-muted-foreground hover:text-foreground hover:bg-accent"
      }`}
    >
      {children}
    </Link>
  );
}

// Button for CTA or actions
export function NavbarButton({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "outline";
}) {
  const styles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent",
  };

  return (
    <button className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${styles[variant]}`}>
      {children}
    </button>
  );
}