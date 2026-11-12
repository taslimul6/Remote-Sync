"use client"

import { useState } from "react"
import { ArrowRight, Crown, Plus, TrendingUp, Zap, type LucideIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

type Plan = {
  name: string
  icon: LucideIcon
  monthly: number
  features: string[]
  featured?: boolean
}

const YEARLY_DISCOUNT = 0.25

const plans: Plan[] = [
  {
    name: "Starter",
    icon: Crown,
    monthly: 0,
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
  },
  {
    name: "Growth",
    icon: TrendingUp,
    monthly: 17,
    featured: true,
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
  },
  {
    name: "Premium",
    icon: Zap,
    monthly: 99,
    features: [
      "Everything in Pro",
      "Multi-profile career portfolios",
      "Shared talent rooms",
      "Recruiter view (read-only)",
    ],
  },
]

function formatPrice(value: number) {
  return Number.isInteger(value) ? String(value) : value.toFixed(2)
}

export default function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly")

  return (
    <section className="bg-black px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1100px]">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-xl text-center">
          <p className="mb-2 flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-widest text-white/80">
            <span className="size-1.5 bg-violet-500" aria-hidden />
            Pricing
            <span className="size-1.5 bg-violet-500" aria-hidden />
          </p>
          <h2 className="text-balance text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl">
            Pay for the leverage, not the listings
          </h2>
        </div>

        {/* Billing toggle */}
        <div className="mb-8 flex justify-center">
          <Tabs
            value={billing}
            onValueChange={(v) => setBilling(v as "monthly" | "yearly")}
          >
            <TabsList className="h-auto rounded-full border border-white/5 bg-neutral-900 p-1.5">
              <TabsTrigger
                value="monthly"
                className="rounded-full px-4 py-1.5 text-sm text-white/80 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-none"
              >
                Monthly
              </TabsTrigger>
              <TabsTrigger
                value="yearly"
                className="gap-2 rounded-full px-4 py-1.5 text-sm text-white/80 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-none"
              >
                Yearly
                <Badge className="rounded-full border-0 bg-fuchsia-600 px-2 py-0 text-[10px] font-medium text-white hover:bg-fuchsia-600">
                  {YEARLY_DISCOUNT * 100}%
                </Badge>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Plans */}
        <div className="grid items-stretch gap-4 md:grid-cols-3">
          {plans.map((plan) => {
            const price =
              billing === "yearly"
                ? plan.monthly * (1 - YEARLY_DISCOUNT)
                : plan.monthly
            const Icon = plan.icon

            return (
              <Card
                key={plan.name}
                className={cn(
                  "flex flex-col rounded-2xl bg-neutral-950 text-white shadow-2xl shadow-black/50 ring-1 ring-white/10 transition-all hover:ring-white/20 hover:shadow-fuchsia-500/10",
                  plan.featured &&
                    "bg-gradient-to-b from-neutral-900 to-neutral-950 ring-fuchsia-500/30 shadow-fuchsia-500/20 scale-[1.02] z-10"
                )}
              >
                <CardHeader className="flex-row items-center justify-between space-y-0 p-6 pb-0">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                      <Icon className="size-5 text-fuchsia-400" aria-hidden />
                    </div>
                    <h3 className="text-lg font-medium">{plan.name}</h3>
                  </div>
                  <p className="flex items-baseline gap-1">
                    <span className="text-4xl font-semibold tracking-tight">
                      ${formatPrice(price)}
                    </span>
                    <span className="text-[11px] text-white/50">/month</span>
                  </p>
                </CardHeader>

                <CardContent className="flex-1 p-6">
                  <p className="mb-5 text-sm text-white/60">Start building your insights hub:</p>
                  <ul className="space-y-3.5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-white/80"
                      >
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-md bg-fuchsia-500/20">
                          <Plus className="size-3.5 text-fuchsia-400" aria-hidden />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="p-6 pt-4">
                  <Button
                    className={cn(
                      "w-full justify-between rounded-xl px-5 py-3 text-sm font-medium transition-all",
                      plan.featured
                        ? "bg-white text-black hover:bg-white/90 hover:shadow-lg hover:shadow-white/20"
                        : "bg-white/10 text-white ring-1 ring-white/10 hover:bg-white/15 hover:ring-white/20"
                    )}
                  >
                    Choose This Plan
                    <ArrowRight className="size-4" aria-hidden />
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}