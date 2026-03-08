import { Shell, Users, Compass, Droplets } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const topics = [
  { icon: Droplets, title: "Marine Awareness", desc: "Understand and respect the marine ecosystem" },
  { icon: Users, title: "Inner Awareness", desc: "Awareness of your thoughts when there is a crowd in the line-up" },
  { icon: Compass, title: "Line-Up Etiquette", desc: "Know the unwritten rules of surfing" },
  { icon: Shell, title: "Ocean Knowledge", desc: "Deepen your connection with the water" },
];

export default function ConsciousSection() {
  return (
    <section className="section-padding bg-gradient-ocean text-primary-foreground">
      <div className="max-w-6xl mx-auto text-center">
        <ScrollReveal>
          <span className="text-sm font-semibold tracking-widest uppercase text-primary-foreground/60">
            Conscious Surfing
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            Respect the Ocean
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14">
          {topics.map((t, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <div className="flex items-start gap-5 bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 text-left backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-primary/30 flex items-center justify-center flex-shrink-0">
                  <t.icon className="text-primary-foreground" size={22} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg">{t.title}</h3>
                  <p className="text-primary-foreground/70 mt-1">{t.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
