"use client";

import FadeIn from "./FadeIn";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Radio,
  Brain,
  Play,
  GitPullRequest,
  CheckCircle2,
  Shield,
} from "lucide-react";

const STEPS = [
  {
    icon: Radio,
    label: "Signal",
    description: "Monitoring, tickets, vuln findings, backlog items",
    products: [],
    color: "from-rose-500 to-orange-500",
    glowColor: "shadow-rose-500/20",
  },
  {
    icon: Brain,
    label: "Context",
    description: "Understand systems, dependencies and impact",
    products: ["DeepWiki", "Windsurf"],
    color: "from-blue-500 to-indigo-500",
    glowColor: "shadow-blue-500/20",
  },
  {
    icon: Play,
    label: "Action",
    description: "Execute scoped work autonomously",
    products: ["Devin", "Devin CLI"],
    color: "from-violet-500 to-purple-500",
    glowColor: "shadow-violet-500/20",
  },
  {
    icon: GitPullRequest,
    label: "Review",
    description: "Catch issues before they merge",
    products: ["Devin PR Review"],
    color: "from-amber-500 to-yellow-500",
    glowColor: "shadow-amber-500/20",
  },
  {
    icon: CheckCircle2,
    label: "Validation",
    description: "End-to-end testing workflows",
    products: [],
    color: "from-emerald-500 to-teal-500",
    glowColor: "shadow-emerald-500/20",
  },
  {
    icon: Shield,
    label: "Resilience",
    description: "Event-triggered incident and remediation loops",
    products: [],
    color: "from-cyan-500 to-blue-500",
    glowColor: "shadow-cyan-500/20",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background" />
      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-20">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            How it works
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            From signal to{" "}
            <span className="gradient-text">resilience</span>
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
            A continuous flow from detection through context, action, review,
            validation and operational resilience.
          </p>
        </FadeIn>

        {/* Flow visualization */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-border hidden lg:block" />
          <motion.div
            className="absolute top-1/2 left-0 h-px bg-gradient-to-r from-accent via-accent-light to-accent hidden lg:block"
            initial={{ width: "0%" }}
            animate={isInView ? { width: "100%" } : { width: "0%" }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 30 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + i * 0.15,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                  className="relative group"
                >
                  <div className={`glass-card rounded-2xl p-6 text-center hover:shadow-lg ${step.glowColor} transition-all duration-500 h-full`}>
                    {/* Step node */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-sm mb-2 tracking-tight">
                      {step.label}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed mb-3">
                      {step.description}
                    </p>
                    {step.products.length > 0 && (
                      <div className="flex flex-wrap justify-center gap-1">
                        {step.products.map((p) => (
                          <span
                            key={p}
                            className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20 font-medium"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    )}
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
