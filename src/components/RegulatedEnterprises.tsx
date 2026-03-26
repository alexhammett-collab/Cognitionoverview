"use client";

import FadeIn from "./FadeIn";
import {
  Network,
  ShieldCheck,
  ScanSearch,
  Users,
  Zap,
} from "lucide-react";

const BULLETS = [
  {
    icon: Network,
    text: "Works across complex, distributed codebases",
  },
  {
    icon: ShieldCheck,
    text: "Supports secure review and governance workflows",
  },
  {
    icon: ScanSearch,
    text: "Helps teams operate with better traceability and context",
  },
  {
    icon: Users,
    text: "Increases output through blended human and virtual engineering capacity, giving PMOs a delivery model they can forecast against",
  },
  {
    icon: Zap,
    text: "Extends beyond coding into testing, resilience and incident response",
  },
];

export default function RegulatedEnterprises() {
  return (
    <section id="enterprise" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/20 to-background" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
                Built for regulated environments
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
                Where speed and control{" "}
                <span className="gradient-text">must coexist</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-muted leading-relaxed">
                Modern enterprises do not need another point tool. They need a
                system that reduces friction from development through
                production. Cognition&apos;s platform helps teams move faster across
                large codebases, complex workflows and high-stakes operating
                environments.
              </p>
            </FadeIn>
          </div>

          <div className="space-y-4">
            {BULLETS.map((bullet, i) => {
              const Icon = bullet.icon;
              return (
                <FadeIn key={i} delay={0.1 + i * 0.08} direction="left">
                  <div className="glass-card rounded-xl p-5 flex items-start gap-4 hover:border-accent/30 transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <p className="text-sm text-foreground/80 leading-relaxed pt-2">
                      {bullet.text}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
