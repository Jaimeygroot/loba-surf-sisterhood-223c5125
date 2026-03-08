import { Heart, Brain, Waves } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const pillars = [
  {
    icon: Heart,
    title: "Sisterhood",
    points: [
      "More women in the line up.",
      "Making individual surf coaching available for every young girl.",
    ],
  },
  {
    icon: Brain,
    title: "Empowerment",
    points: [
      "Creating awareness about the mental health aspect of surfing.",
      "Open communication about doubts and fears that make women feel uncomfortable in the water.",
    ],
  },
  {
    icon: Waves,
    title: "Conscious Surfing",
    points: [
      "Making deep connections with the ocean, marine life and sharing knowledge to make a positive impact on it.",
    ],
  },
];

export default function MissionSection() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase text-secondary">
              Our Mission
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
              What We Stand For
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={i} delay={0.15 * i}>
              <div className="bg-muted rounded-2xl p-8 h-full border border-secondary/10">
                <div className="w-12 h-12 rounded-xl bg-lavender/20 flex items-center justify-center mb-5">
                  <pillar.icon className="text-secondary" size={24} />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-4 uppercase tracking-wide">
                  {pillar.title}
                </h3>
                <ol className="space-y-3">
                  {pillar.points.map((point, j) => (
                    <li key={j} className="flex gap-3 text-muted-foreground leading-relaxed">
                      <span className="font-heading font-bold text-secondary flex-shrink-0">
                        {i === 0 ? j + 1 : i === 1 ? j + 3 : 5}.
                      </span>
                      {point}
                    </li>
                  ))}
                </ol>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
