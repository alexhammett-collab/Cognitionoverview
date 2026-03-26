"use client";

import { motion } from "framer-motion";

const PROOF_STRIP = [
  "Build faster",
  "Review continuously",
  "Test end-to-end",
  "Secure by default",
  "Respond in production",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 animate-grid-fade"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99,102,241,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface/60 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
          <span className="text-xs font-medium text-muted tracking-wide uppercase">
            From software acceleration to operational resilience
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          Engineering velocity for{" "}
          <span className="gradient-text">complex, high-trust</span>{" "}
          enterprises
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Unify coding, autonomous development, PR review, knowledge discovery
          and operational response in one platform built for regulated
          environments.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#platform"
            className="px-8 py-3.5 rounded-lg bg-accent hover:bg-accent-light text-white font-medium transition-all duration-200 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
          >
            Explore the platform
          </a>
          <a
            href="#use-cases"
            className="px-8 py-3.5 rounded-lg border border-border hover:border-accent/40 text-foreground font-medium transition-all duration-200 hover:bg-surface-light"
          >
            See enterprise workflows
          </a>
        </motion.div>

        {/* Proof strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3"
        >
          {PROOF_STRIP.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.0 + i * 0.1 }}
              className="flex items-center gap-2 text-sm text-muted"
            >
              <span className="w-1 h-1 rounded-full bg-accent" />
              {item}
              {i < PROOF_STRIP.length - 1 && (
                <span className="ml-2 text-border hidden sm:inline">|</span>
              )}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
