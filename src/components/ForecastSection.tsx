import { Waves, Wind, Clock, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const items = [
  { icon: Waves, title: "Swell Direction", desc: "Understand how swell affects your local breaks" },
  { icon: Wind, title: "Wind Forecast", desc: "Learn when conditions are clean and surfable" },
  { icon: Clock, title: "Tide Timing", desc: "Know when to paddle out for the best waves" },
  { icon: MapPin, title: "Spot Selection", desc: "Pick the right break for your skill level" },
];

export default function ForecastSection() {
  return (
    <section id="forecast" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <ScrollReveal>
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">
            Forecast Reading
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
            Learn to Read the Ocean
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <div className="flex items-start gap-5 bg-card border border-border rounded-2xl p-8 text-left hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-lg">{item.title}</h3>
                  <p className="text-muted-foreground mt-1">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
