"use client";

import { ArrowRight, Briefcase, CircleDollarSign, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

// Job type definition
export type Job = {
  id: number;
  title: string;
  description: string;
  location: string;
  type: string;
  pay: string;
};

// Sample jobs data
const jobs: Job[] = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: "Frontend Developer",
  description:
    "Showcase your commitment to diversity and inclusion by highlighting initiatives",
  location: "New York, USA",
  type: "Hybrid",
  pay: "€25–€40/hour",
}));

// Badge with icon for job metadata
function JobBadge({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <Badge
      variant="secondary"
      className="gap-1.5 rounded-full border-0 bg-white/5 px-3 py-1.5 text-[11px] font-normal text-white/90 hover:bg-white/5"
    >
      <Icon className="size-3.5 text-fuchsia-300" aria-hidden />
      {children}
    </Badge>
  );
}

// Single job card
function JobCard({ job }: { job: Job }) {
  return (
    <Card className="rounded-3xl border-0 bg-neutral-900 text-white shadow-none">
      <CardContent className="flex h-full flex-col gap-4 p-6">
        <CardTitle className="text-2xl font-medium tracking-tight">{job.title}</CardTitle>
        <CardDescription className="max-w-[28ch] text-sm leading-relaxed text-white/50">
          {job.description}
        </CardDescription>

        <div className="flex flex-wrap gap-2">
          <JobBadge icon={MapPin}>{job.location}</JobBadge>
          <JobBadge icon={Briefcase}>{job.type}</JobBadge>
          <JobBadge icon={CircleDollarSign}>{job.pay}</JobBadge>
        </div>

        <Button
          variant="ghost"
          className="mt-3 w-fit gap-2 px-3 text-sm font-normal text-white hover:bg-white/10 hover:text-white"
        >
          Apply Now
          <ArrowRight className="size-4" aria-hidden />
        </Button>
      </CardContent>
    </Card>
  );
}

// Main jobs section
export function JobsSection() {
  return (
    <section className="bg-black px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1100px]">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-xl text-center">
          <p className="mb-2 flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-widest text-white/80">
            <span className="size-1.5 bg-violet-500" aria-hidden />
            Smart job discovery
            <span className="size-1.5 bg-violet-500" aria-hidden />
          </p>
          <h2 className="text-balance text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl">
            The roles you&apos;d never find by searching
          </h2>
        </div>

        {/* Job cards grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* View all CTA */}
        <div className="mt-8 flex justify-center">
          <Button className="rounded-lg bg-white px-6 text-sm font-medium text-black hover:bg-white/90">
            View all jobs
          </Button>
        </div>
      </div>
    </section>
  );
}