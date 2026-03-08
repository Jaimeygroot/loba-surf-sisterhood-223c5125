import { Video, CloudSun, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    icon: Video,
    title: "Online Coaching",
    items: ["Technique breakdowns", "Surf practices", "Video feedback"],
  },
  {
    icon: CloudSun,
    title: "Forecast Training",
    items: ["Swell & wind reading", "Tide timing", "Spot selection"],
  },
  {
    icon: Users,
    title: "Weekly Surf Sessions",
    items: ["Water coaching", "Community vibe", "Faster progression"],
  },
];

export default function HowItWorksSection() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <ScrollReveal>
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">
            The Method
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
            Train. Learn. Surf.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={0.15 * i}>
              <div className="group bg-card border border-border rounded-3xl p-10 text-left hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-sage-lavender flex items-center justify-center mb-6">
                  <step.icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {step.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {step.items.map((item, j) => (
                    <li key={j} className="text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
