import { Link } from "react-router-dom";
import { Play, Target, BarChart3, BookOpen } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  { icon: Play, label: "Video Analysis" },
  { icon: BookOpen, label: "Technique Tutorials" },
  { icon: Target, label: "Surf Drills" },
  { icon: BarChart3, label: "Progress Tracking" },
];

export default function CoachingSection() {
  return (
    <section id="coaching" className="section-padding bg-gradient-sage-lavender">
      <div className="max-w-6xl mx-auto text-center">
        <ScrollReveal>
          <span className="text-sm font-semibold tracking-widest uppercase text-primary-foreground/70">
            Online Coaching
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4">
            Train Like a Surfer — Anywhere
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Members get access to a digital surf training platform with coaching tools designed to accelerate your progression.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
          {features.map((f, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-primary-foreground/20">
                <f.icon className="mx-auto text-primary-foreground mb-3" size={28} />
                <p className="text-sm font-semibold text-primary-foreground">{f.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <Link
            to="/academy"
            className="inline-block mt-12 bg-primary-foreground text-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Explore the Academy →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
