import ScrollReveal from "./ScrollReveal";

export default function PhilosophySection() {
  const principles = [
    "Choose your place in the line-up",
    "Read the ocean before you paddle",
    "Progress step by step",
    "Surf with respect for nature and others",
  ];

  return (
    <section id="philosophy" className="section-padding bg-background">
      <div className="max-w-5xl mx-auto text-center">
        <ScrollReveal>
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">
            Philosophy
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
            Surf With Awareness
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mt-8 text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
            Surfing is not about fighting the ocean.
            <br />
            <span className="text-foreground font-medium">It is about learning to listen to it.</span>
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {principles.map((p, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <div className="bg-card border border-border rounded-2xl p-8 text-left hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl font-heading font-bold text-primary/30">
                  0{i + 1}
                </span>
                <p className="mt-3 text-lg font-medium text-foreground">{p}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
