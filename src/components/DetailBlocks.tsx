"use client";

import FadeIn from "./FadeIn";
import { FlaskConical, ShieldAlert, Siren } from "lucide-react";

const BLOCKS = [
  {
    icon: FlaskConical,
    label: "Testing",
    title: "True end-to-end testing, not just isolated checks",
    description:
      "Software quality breaks down at the seams between services, workflows and environments. Cognition helps teams build and maintain end-to-end testing that reflects real business journeys, validates integrations and catches regressions before they become incidents.",
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
    borderColor: "border-emerald-500/20",
  },
  {
    icon: ShieldAlert,
    label: "Vulnerability",
    title: "Vulnerability management that leads to remediation",
    description:
      "Security findings only matter when they translate into action. With Cognition, teams can move from detection to investigation to fix creation with more speed and less manual coordination, while improving review quality before changes land.",
    color: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400",
    borderColor: "border-amber-500/20",
  },
  {
    icon: Siren,
    label: "SRE",
    title: "Event-triggered execution for operational resilience",
    description:
      "Production incidents create a race against time. Event-triggered Devin can be invoked from alerts or incidents to gather context, inspect recent changes, investigate likely causes and prepare safe next steps. Teams stay in control while response becomes faster, more consistent and more scalable.",
    color: "from-rose-500/20 to-pink-500/20",
    iconColor: "text-rose-400",
    borderColor: "border-rose-500/20",
  },
];

export default function DetailBlocks() {
  return (
    <section className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/20 to-background" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 space-y-12">
        {BLOCKS.map((block, i) => {
          const Icon = block.icon;
          const isEven = i % 2 === 1;
          return (
            <FadeIn key={block.label} delay={i * 0.1}>
              <div
                className={`glass-card rounded-2xl p-8 md:p-12 flex flex-col ${
                  isEven ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-8 md:gap-12 hover:border-accent/20 transition-all duration-500`}
              >
                {/* Icon block */}
                <div className="shrink-0">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${block.color} border ${block.borderColor} flex items-center justify-center`}
                  >
                    <Icon className={`w-8 h-8 ${block.iconColor}`} />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <span
                    className={`text-xs font-medium tracking-widest uppercase ${block.iconColor} mb-2 block`}
                  >
                    {block.label}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                    {block.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {block.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
