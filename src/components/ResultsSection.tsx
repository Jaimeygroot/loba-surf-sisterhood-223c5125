import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "50+", label: "Members" },
  { value: "5×", label: "Faster Progression" },
  { value: "Weekly", label: "Surf Sessions" },
  { value: "Online", label: "Coaching" },
];

export default function ResultsSection() {
  return (
    <section className="section-padding bg-gradient-ocean text-primary-foreground">
      <div className="max-w-6xl mx-auto text-center">
        <ScrollReveal>
          <span className="text-sm font-semibold tracking-widest uppercase text-primary-foreground/60">
            Community
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            A Growing Pack
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {stats.map((s, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <div>
                <p className="font-heading text-4xl md:text-5xl font-bold text-gradient">
                  {s.value}
                </p>
                <p className="text-primary-foreground/60 mt-2 text-sm uppercase tracking-wider">
                  {s.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
