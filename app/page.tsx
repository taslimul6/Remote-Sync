import { Navbar, NavbarBrand, NavbarNav, NavbarLink, NavbarButton } from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 min-h-screen bg-background font-sans">
      <Navbar>
        <NavbarBrand>
          <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span>RemoteSync</span>
        </NavbarBrand>

        <NavbarNav className="hidden lg:flex">
          <NavbarLink href="/" active>Home</NavbarLink>
          <NavbarLink href="/features">Features</NavbarLink>
          <NavbarLink href="/pricing">Pricing</NavbarLink>
          <NavbarLink href="/docs">Docs</NavbarLink>
        </NavbarNav>

        <div className="hidden lg:flex items-center gap-2">
          <NavbarButton variant="outline">Sign in</NavbarButton>
          <NavbarButton>Get Started</NavbarButton>
        </div>
      </Navbar>

      <main className="flex flex-1 w-full max-w-7xl mx-auto flex-col items-center justify-center py-16 px-4">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="max-w-xs text-4xl font-bold leading-tight tracking-tight text-foreground">
            Welcome to{" "}
            <code className="rounded bg-muted px-2 py-1 font-mono text-sm">
              RemoteSync
            </code>
          </h1>
          <p className="max-w-md text-lg leading-8 text-muted-foreground">
            A simple navbar component built with Tailwind CSS.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-primary-foreground text-sm font-medium transition-colors hover:bg-primary/90"
          >
            View Components
          </a>
          <a
            href="#"
            className="flex h-12 items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}