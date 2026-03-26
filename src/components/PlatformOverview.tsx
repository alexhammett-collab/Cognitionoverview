"use client";

import FadeIn from "./FadeIn";
import {
  Code2,
  Bot,
  Terminal,
  GitPullRequest,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";

const CAPABILITIES = [
  {
    icon: Code2,
    name: "Windsurf IDE",
    description:
      "High-context development environment for engineers working across large, unfamiliar or fast-changing codebases.",
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "group-hover:border-blue-500/40",
  },
  {
    icon: Bot,
    name: "Devin",
    description:
      "Autonomous software engineer for scoped execution across backlog, bugs, migrations, fixes and operational tasks.",
    color: "from-violet-500/20 to-purple-500/20",
    borderColor: "group-hover:border-violet-500/40",
  },
  {
    icon: Terminal,
    name: "Devin CLI",
    description:
      "Terminal-native automation for teams that want Devin integrated into existing engineering workflows.",
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "group-hover:border-emerald-500/40",
  },
  {
    icon: GitPullRequest,
    name: "Devin PR Review",
    description:
      "Scalable, always-on review to catch issues earlier and improve signal in pull requests.",
    color: "from-amber-500/20 to-orange-500/20",
    borderColor: "group-hover:border-amber-500/40",
  },
  {
    icon: BookOpen,
    name: "DeepWiki",
    description:
      "Live codebase understanding layer that helps teams navigate systems, dependencies and institutional knowledge.",
    color: "from-rose-500/20 to-pink-500/20",
    borderColor: "group-hover:border-rose-500/40",
  },
];

export default function PlatformOverview() {
  return (
    <section id="platform" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            Platform overview
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            One platform across the software{" "}
            <span className="gradient-text">delivery lifecycle</span>
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
            Cognition brings together assisted development, autonomous
            execution, code review and codebase intelligence so teams can move
            from idea to production with more speed, quality and control.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <FadeIn key={cap.name} delay={index * 0.1}>
                <motion.div
                  className={`group relative glass-card rounded-2xl p-8 h-full transition-all duration-300 cursor-default ${cap.borderColor}`}
                  whileHover={{ y: -4 }}
                >
                  {/* Glow background */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cap.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-surface-light border border-border flex items-center justify-center mb-5 group-hover:border-accent/30 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 tracking-tight">
                      {cap.name}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed group-hover:text-foreground/70 transition-colors duration-300">
                      {cap.description}
                    </p>
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>

        {/* Five products tagline */}
        <FadeIn delay={0.5} className="mt-16 text-center">
          <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl font-semibold tracking-tight mb-4">
              Five products. One operational model.
            </p>
            <p className="text-muted leading-relaxed">
              Windsurf IDE gives engineers deep context. Devin executes scoped
              work autonomously. Devin CLI brings automation into existing
              workflows. Devin PR Review raises review coverage and consistency.
              DeepWiki makes codebases easier to understand, navigate and
              operationalise.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
