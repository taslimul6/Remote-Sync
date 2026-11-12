import { Navbar, NavbarBrand, NavbarNav, NavbarLink, NavbarButton } from "@/components/shared/navbar";
import {
  HeroSection,
  HeroBadge,
  HeroTitle,
  HeroDescription,
  HeroSearch,
  HeroTrending,
} from "@/components/homePage/hero";
import { JobsSection } from "@/components/homePage/jobs";
import PricingSection from "@/components/homePage/Pricing";
import CtaSection from "@/components/homePage/cta";
import Footer from "@/components/shared/footer";

export default function Home() {
  const trending = [
    "Product Designer",
    "AI Engineering",
    "Dev-ops Engineer",
  ];

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

      <HeroSection>
        <HeroBadge>
          <span className="text-sm">💼</span>
          <span className="text-[11px] font-bold tracking-wider text-white">50,000+</span>
          <span className="text-[10px] tracking-wider text-white/50">NEW JOBS THIS MONTH</span>
        </HeroBadge>

        <HeroTitle>Find Your Dream Job Today</HeroTitle>

        <HeroDescription>
          HireLoop connects top talent with world-class companies. Browse thousands of curated
          opportunities and land your next role — faster.
        </HeroDescription>

        <HeroSearch />

        <HeroTrending items={trending} />
      </HeroSection>

      <JobsSection />
      <PricingSection />
      <CtaSection />
      <Footer />
    </div>
  );
}