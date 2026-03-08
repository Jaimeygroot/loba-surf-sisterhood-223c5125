import { CalendarCheck, Heart, TrendingUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function SessionsSection() {
  return (
    <section id="sessions" className="section-padding bg-secondary/10">
      <div className="max-w-5xl mx-auto text-center">
        <ScrollReveal>
          <span className="text-sm font-semibold tracking-widest uppercase text-secondary">
            Weekly Sessions
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
            Surf Together Every Week
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Every week we organize a LOBA community surf session where members train together and apply what they learned online.
          </p>
        </ScrollReveal>

        <div className="flex flex-col sm:flex-row gap-8 justify-center mt-14">
          {[
            { icon: CalendarCheck, label: "Water Coaching" },
            { icon: Heart, label: "Community Vibe" },
            { icon: TrendingUp, label: "Faster Progression" },
          ].map((f, i) => (
            <ScrollReveal key={i} delay={0.15 * i}>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                  <f.icon className="text-secondary" size={26} />
                </div>
                <p className="font-semibold text-foreground">{f.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <a
            href="#join"
            className="inline-block mt-12 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Book a Session
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
