import { Link } from "react-router-dom";
import { Play, BarChart3, BookOpen, Target } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  { icon: Target, label: "Surf Practices" },
  { icon: Play, label: "Video Analysis" },
  { icon: BookOpen, label: "Forecast Reading" },
  { icon: BarChart3, label: "Progress Tracking" },
];

export default function CoachingSection() {
  return (
    <section id="coaching" className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto text-center">
        <ScrollReveal>
          <span className="text-sm font-semibold tracking-widest uppercase text-secondary-foreground/70">
            Online Coaching
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mt-4">
            Train As You Like — Anywhere
          </h2>
          <p className="mt-6 text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
            Members get access to a digital surf training platform with coaching tools designed to accelerate your progression.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
          {features.map((f, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <div className="bg-secondary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-secondary-foreground/20">
                <f.icon className="mx-auto text-secondary-foreground mb-3" size={28} />
                <p className="text-sm font-semibold text-secondary-foreground">{f.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <Link
            to="/academy"
            className="inline-block mt-12 bg-secondary-foreground text-secondary px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Explore the Academy →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
