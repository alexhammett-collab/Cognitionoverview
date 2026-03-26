"use client";

import FadeIn from "./FadeIn";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  FlaskConical,
  ShieldAlert,
  Siren,
} from "lucide-react";

const USE_CASES = [
  {
    id: "modernisation",
    icon: Layers,
    tab: "Modernisation & Delivery",
    title: "From backlog to merged code with less manual orchestration",
    points: [
      "Engineers use Windsurf IDE to understand systems quickly",
      "Devin picks up well-bounded implementation work",
      "Devin PR Review catches defects, risky patterns and missing checks",
      "DeepWiki reduces dependency on tribal knowledge",
    ],
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    id: "testing",
    icon: FlaskConical,
    tab: "End-to-End Testing",
    title: "AI agents that help verify what actually works, not just what compiles",
    points: [
      "Generate and maintain realistic end-to-end test flows",
      "Cover critical customer and colleague journeys across systems",
      "Validate regressions after code changes, refactors or platform upgrades",
      "Combine code understanding with UI, API and integration-level verification",
    ],
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    id: "vulnerability",
    icon: ShieldAlert,
    tab: "Vulnerability Management",
    title: "Close the loop from finding risk to fixing it",
    points: [
      "Triage findings from scanners and internal security signals",
      "Prioritise fixes based on code context and blast radius",
      "Use Devin to prepare remediation work at scale",
      "Use PR Review to enforce secure coding patterns before merge",
      "Turn recurring classes of issues into repeatable playbooks",
    ],
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    id: "sre",
    icon: Siren,
    tab: "SRE & Incident Response",
    title: "From alert to action with AI operating in the flow of incident response",
    points: [
      "Trigger Devin from monitoring, ticketing or incident events",
      "Investigate logs, configs, recent changes and runbooks automatically",
      "Prepare mitigations, roll-forward fixes or rollback changes",
      "Draft incident updates and recovery steps with human approval gates",
      "Convert post-incident learnings into tests, guardrails and code improvements",
    ],
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
  },
];

export default function UseCases() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = USE_CASES[activeIndex];

  return (
    <section id="use-cases" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            End-to-end use cases
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Real workflows, not feature lists
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
            See how the platform connects across the software delivery and
            operations lifecycle.
          </p>
        </FadeIn>

        {/* Sticky tab navigation */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-12 sticky top-20 z-30 py-4 bg-background/80 backdrop-blur-xl rounded-2xl">
            {USE_CASES.map((uc, i) => {
              const Icon = uc.icon;
              return (
                <button
                  key={uc.id}
                  onClick={() => setActiveIndex(i)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    i === activeIndex
                      ? `${uc.bg} ${uc.border} border ${uc.color}`
                      : "text-muted hover:text-foreground border border-transparent hover:border-border"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{uc.tab}</span>
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Active use case content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="glass-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
          >
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${active.bg} ${active.border} border mb-6`}>
              <active.icon className={`w-4 h-4 ${active.color}`} />
              <span className={`text-xs font-medium ${active.color}`}>
                {active.tab}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
              {active.title}
            </h3>

            <div className="space-y-4">
              {active.points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                  className="flex items-start gap-4"
                >
                  <div className={`w-6 h-6 rounded-full ${active.bg} ${active.border} border flex items-center justify-center shrink-0 mt-0.5`}>
                    <span className={`text-xs font-mono ${active.color}`}>
                      {i + 1}
                    </span>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
