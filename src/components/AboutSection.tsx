import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-muted">
      <div className="max-w-4xl mx-auto">
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
            Online learning gives you knowledge of the ocean, techniques and home practices. Weekly sessions turn that knowledge into real skills.
          </p>
          <Link
            to="/our-mission"
            className="mt-8 inline-flex items-center gap-2 bg-lavender text-primary-foreground px-6 py-3 rounded-full font-bold text-sm hover:bg-foreground hover:text-background transition-colors"
          >
            Read More About Our Mission
            <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
