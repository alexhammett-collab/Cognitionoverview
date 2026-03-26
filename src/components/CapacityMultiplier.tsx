"use client";

import FadeIn from "./FadeIn";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, TrendingUp, GitMerge, Clock } from "lucide-react";

const METRICS = [
  {
    icon: Users,
    value: "Virtual + Human",
    label: "Blended engineering capacity",
    description:
      "Autonomous agents execute scoped work in parallel with human engineers, multiplying throughput without multiplying headcount.",
  },
  {
    icon: TrendingUp,
    value: "PMO-Aligned",
    label: "Delivery velocity you can plan around",
    description:
      "Predictable, measurable capacity that programme offices can factor into sprint planning, release forecasts and portfolio commitments.",
  },
  {
    icon: GitMerge,
    value: "Always On",
    label: "Continuous execution across time zones",
    description:
      "Devin works asynchronously on backlog items, migrations and fixes, keeping delivery pipelines moving outside business hours.",
  },
  {
    icon: Clock,
    value: "Hours, Not Sprints",
    label: "Compress delivery timelines",
    description:
      "Work that previously waited for specialist availability can be initiated immediately, turning sprint-length delays into same-day outcomes.",
  },
];

export default function CapacityMultiplier() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/20 to-background" />
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: exec messaging */}
          <div className="lg:sticky lg:top-28">
            <FadeIn>
              <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
                Engineering leverage
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
                Multiply capacity,{" "}
                <span className="gradient-text">not headcount</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-5 text-lg text-muted leading-relaxed">
                <p>
                  The most effective engineering organisations no longer measure
                  capacity in seats alone. They blend human expertise with
                  autonomous execution to create a delivery model that scales
                  with demand, not with recruitment cycles.
                </p>
                <p>
                  Cognition&apos;s platform introduces virtual engineering resources
                  that work harmoniously alongside human teams — picking up
                  well-scoped tasks, executing in parallel, and feeding work back
                  through the same review and governance processes your
                  organisation already trusts.
                </p>
                <p>
                  For programme and portfolio leaders, this means delivery
                  forecasts that reflect real, elastic capacity. For engineering
                  leaders, it means senior engineers spend less time on
                  repeatable work and more time on architecture, design and the
                  decisions that move the programme forward.
                </p>
              </div>
            </FadeIn>

            {/* Executive pull-quote */}
            <FadeIn delay={0.3}>
              <div className="mt-8 glass-card rounded-xl p-6 border-l-2 border-accent">
                <p className="text-foreground/90 italic leading-relaxed">
                  &ldquo;The question is no longer whether AI can write code. It is
                  whether your delivery model treats AI capacity as a
                  first-class resource that programme offices can plan around,
                  measure and depend on.&rdquo;
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right: metric cards */}
          <div className="space-y-6">
            {METRICS.map((metric, i) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: 30 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + i * 0.12,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                  className="glass-card rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-sm font-semibold text-accent font-mono">
                          {metric.value}
                        </span>
                      </div>
                      <h3 className="font-semibold text-foreground mb-2 tracking-tight">
                        {metric.label}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {metric.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
