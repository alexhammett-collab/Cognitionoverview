"use client";

import FadeIn from "./FadeIn";
import {
  RefreshCcw,
  FileEdit,
  AlertTriangle,
  Timer,
  BookMarked,
} from "lucide-react";

const SCENARIOS = [
  {
    icon: RefreshCcw,
    title: "Legacy service refactor",
    description: "Full regression coverage across a critical service rewrite",
  },
  {
    icon: FileEdit,
    title: "Workflow update at scale",
    description:
      "Policy or claims workflow update propagated across multiple systems",
  },
  {
    icon: AlertTriangle,
    title: "Dependency disclosure response",
    description:
      "Security finding burst after a dependency disclosure, triaged and remediated",
  },
  {
    icon: Timer,
    title: "Sev-2 incident investigation",
    description:
      "Proposed remediation in minutes with automated log and config analysis",
  },
  {
    icon: BookMarked,
    title: "Knowledge transfer",
    description:
      "Business-critical but poorly documented system made navigable for new engineers",
  },
];

export default function EnterpriseScenarios() {
  return (
    <section className="relative py-16">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            Enterprise scenarios
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Proven across high-stakes{" "}
            <span className="gradient-text">operating environments</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {SCENARIOS.map((scenario, i) => {
            const Icon = scenario.icon;
            return (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="glass-card rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 group h-full">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <h3 className="font-semibold text-sm mb-2 tracking-tight">
                    {scenario.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {scenario.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
