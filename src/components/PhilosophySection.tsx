import ScrollReveal from "./ScrollReveal";
import heroBg from "@/assets/hero-bg.png";

export default function PhilosophySection() {
  const principles = [
    "Choose your place in the line-up",
    "Read the ocean before you paddle",
    "Progress step by step",
    "Surf with respect for nature and others",
  ];

  return (
    <section id="philosophy" className="relative section-padding overflow-hidden">
      {/* Background image */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-[30%_10%]"
      />
      <div className="absolute inset-0 bg-foreground/60" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <ScrollReveal>
          <span className="text-sm font-semibold tracking-widest uppercase text-primary-foreground/70">
            Philosophy
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4">
            Sisterhood in the Water
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mt-8 text-xl md:text-2xl text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto font-light">
            Surfing is not about fighting the ocean.
            <br />
            <span className="text-primary-foreground font-medium">It is about learning to listen to it.</span>
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {principles.map((p, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 text-left hover:bg-primary-foreground/15 transition-all duration-300">
                <span className="text-3xl font-heading font-bold text-primary-foreground/30">
                  0{i + 1}
                </span>
                <p className="mt-3 text-lg font-medium text-primary-foreground">{p}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
