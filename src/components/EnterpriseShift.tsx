"use client";

import FadeIn from "./FadeIn";

export default function EnterpriseShift() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background" />
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <FadeIn>
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            The enterprise shift
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-8">
            The challenge is no longer just writing code faster
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <p>
              Large enterprises are being asked to modernise faster while
              operating under tighter scrutiny. Engineering teams are managing
              sprawling application estates, cloud complexity, security exposure,
              and mounting pressure to deliver AI-enabled productivity
              responsibly.
            </p>
            <p>
              The challenge is no longer just writing code faster. It is reducing
              friction across the full software and operations lifecycle — and
              building a delivery model where virtual engineering resources work
              alongside human teams to create capacity that programme offices can
              actually plan around.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                number: "01",
                text: "Simplifying fragmented engineering and security workflows",
              },
              {
                number: "02",
                text: "Accelerating delivery without compromising governance",
              },
              {
                number: "03",
                text: "Embedding AI safely into regulated, data-sensitive environments",
              },
              {
                number: "04",
                text: "Improving resilience, incident response and operational readiness",
              },
              {
                number: "05",
                text: "Reducing time-to-change across legacy and modern estates",
              },
              {
                number: "06",
                text: "Scaling engineering leverage despite skills constraints",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="glass-card rounded-xl p-6 hover:border-accent/30 transition-all duration-300 group"
              >
                <span className="text-accent font-mono text-sm mb-3 block group-hover:text-accent-light transition-colors">
                  {item.number}
                </span>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
