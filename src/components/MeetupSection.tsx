import { MapPin, Calendar, BookOpen } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  { icon: MapPin, label: "Find surfers nearby" },
  { icon: Calendar, label: "Book a session" },
  { icon: BookOpen, label: "Get online coaching" },
];

export default function MeetupSection() {
  return (
    <section id="meetup" className="section-padding bg-secondary/10">
      <div className="max-w-5xl mx-auto text-center">
        <ScrollReveal>
          <span className="text-sm font-semibold tracking-widest uppercase text-secondary">
            Meet-Up App
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
            Find Your Surf Sisters
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Members coordinate sessions using the LOBA Meet-Up App. Connect with your pack.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {features.map((f, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <div className="bg-card border border-secondary/20 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <f.icon className="mx-auto text-secondary mb-3" size={28} />
                <p className="text-sm font-semibold text-foreground">{f.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <button className="mt-12 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity">
            Open the App
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
