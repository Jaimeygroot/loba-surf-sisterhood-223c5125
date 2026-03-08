import ScrollReveal from "./ScrollReveal";
import aboutImg from "@/assets/about-surfer.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-muted">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <span className="text-sm font-semibold tracking-widest uppercase text-secondary">
            About LOBA
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-4">
            Women Who Run With the Wolves
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            The name LOBA is inspired by <em>Women Who Run With the Wolves</em> by Clarissa Pinkola Estés. The wolf represents intuition, freedom, instinct and community.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            The surfer is like the wolf — she listens to the environment, moves with nature, and trusts her instincts.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Online learning gives you knowledge of the ocean. Weekly sessions turn that knowledge into real skills.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="overflow-hidden rounded-3xl">
            <img
              src={aboutImg}
              alt="LOBA surfer at sunset"
              className="w-full h-[400px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
