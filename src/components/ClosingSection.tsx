"use client";

import FadeIn from "./FadeIn";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const OUTCOMES = [
  "Faster delivery",
  "Stronger review",
  "Better testing",
  "A more resilient operating model",
];

export default function ClosingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-6">
            The result
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-10">
            Faster delivery, stronger review, better testing and{" "}
            <span className="gradient-text">
              a more resilient operating model
            </span>
          </h2>
        </FadeIn>

        {/* Animated outcome pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {OUTCOMES.map((outcome, i) => (
            <motion.span
              key={outcome}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
              className="px-5 py-2.5 rounded-full glass-card text-sm font-medium text-foreground/80"
            >
              {outcome}
            </motion.span>
          ))}
        </div>

        <FadeIn delay={0.6}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
          </div>
        </FadeIn>

        {/* Divider */}
        <div className="mt-24 mb-8 glow-line opacity-30" />

        <FadeIn delay={0.3}>
          <div className="flex items-center justify-center mb-3">
            <Image
              src="/cognition-logo.png"
              alt="Cognition"
              width={220}
              height={50}
              className="h-12 w-auto"
            />
          </div>
          <p className="text-xs text-muted">
            One platform for building, reviewing, testing, securing and
            responding faster.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
