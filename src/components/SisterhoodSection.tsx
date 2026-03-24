import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

export default function SisterhoodSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <span className="text-sm font-semibold tracking-widest uppercase text-secondary">
            Sisterhood
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-4">
            The Power of the Pack
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            LOBA is about surfing together, not alone. Women support each other
            in the line-up, in the learning process, and in the ocean. When
            women surf together, they surf stronger.
          </p>
          <blockquote className="mt-8 pl-6 border-l-4 border-secondary">
            <p className="text-xl font-heading italic text-foreground">
              "When women surf together, they surf stronger."
            </p>
          </blockquote>
          <Link
            to="/our-mission"
            className="inline-block mt-8 bg-lavender text-primary-foreground px-8 py-4 rounded-full font-bold text-base hover:bg-foreground hover:text-background transition-colors"
          >
            Story &amp; Mission
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
