import ScrollReveal from "./ScrollReveal";

const stages = [
  { stage: "01", title: "Beginner Awareness", desc: "Understanding the basics of ocean safety, paddling, and catching your first waves." },
  { stage: "02", title: "Ocean Reading", desc: "Learning to read swell, wind, and tide to find the best conditions." },
  { stage: "03", title: "Wave Selection", desc: "Choosing the right waves and positioning yourself in the line-up." },
  { stage: "04", title: "Flow & Confidence", desc: "Surfing with fluidity, trusting your instincts, and riding with the pack." },
];

export default function ProgressionSection() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">
            Progression
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
            Step by Step
          </h2>
        </ScrollReveal>

        <div className="mt-16 space-y-0">
          {stages.map((s, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <div className="flex items-start gap-6 text-left py-8 border-b border-border last:border-0">
                <span className="font-heading text-4xl font-bold text-primary/20 flex-shrink-0">
                  {s.stage}
                </span>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground">{s.title}</h3>
                  <p className="text-muted-foreground mt-2">{s.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
