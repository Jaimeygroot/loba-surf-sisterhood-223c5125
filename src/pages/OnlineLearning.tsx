import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CloudSun, Flame, TrendingUp, Dumbbell } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadDialog from "@/components/LeadDialog";
import oceanTexture from "@/assets/ocean-texture.jpg";

const features = [
  {
    icon: CloudSun,
    title: "Forecast Reading",
    desc: "Learn to read swell charts, understand wind patterns, tides, and pick the perfect session. Know when and where to surf before you even leave the house.",
    items: ["Swell direction & period", "Wind patterns & offshore timing", "Tide charts & spot selection", "Real-time forecast breakdowns"],
  },
  {
    icon: Flame,
    title: "Weekly Surf Challenges",
    desc: "Stay motivated with fun, focused challenges every week — designed to push your comfort zone and keep you progressing in and out of the water.",
    items: ["Technique-focused tasks", "Ocean awareness drills", "Community accountability", "Progress check-ins"],
  },
  {
    icon: TrendingUp,
    title: "Step-by-Step Guiding & Progress Tracking",
    desc: "Follow a clear progression path from beginner to advanced. Track your skills, log your sessions, and see exactly how far you've come.",
    items: ["Personalised skill roadmap", "Session logging", "Milestone tracking", "Coaching feedback loops"],
  },
  {
    icon: Dumbbell,
    title: "Surf Practices To Do On Your Own",
    desc: "Land-based exercises and drills you can do anywhere — designed to build surf-specific strength, balance, and muscle memory.",
    items: ["Pop-up & balance drills", "Paddle strength routines", "Flexibility & mobility flows", "Breath work for hold-downs"],
  },
];

export default function OnlineLearning() {
  const [leadOpen, setLeadOpen] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div id="top-online" className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <img src={oceanTexture} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-sage-lavender opacity-90" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors mb-8">
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground">
              Online Learning
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Your digital surf training platform. Learn, practice, and progress — from anywhere, at your own pace.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center">
              <span className="text-sm font-semibold tracking-widest uppercase text-primary">What's Inside</span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-4">
                Train As You Like
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to improve your surfing, whether you're at home or at the beach.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {features.map((f, i) => (
              <ScrollReveal key={i} delay={0.1 * i}>
                <div className="bg-card border border-border rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <f.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">{f.title}</h3>
                  <p className="text-muted-foreground mt-3 leading-relaxed">{f.desc}</p>
                  <ul className="mt-5 space-y-2">
                    {f.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-muted-foreground text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
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

      {/* CTA */}
      <section className="section-padding bg-gradient-ocean text-primary-foreground text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">Ready to Start Training?</h2>
          <p className="mt-6 text-lg text-primary-foreground/70 max-w-xl mx-auto">
            Join the LOBA community and get access to all coaching tools.
          </p>
          <button
            onClick={() => setLeadOpen(true)}
            className="inline-block mt-10 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Join the Pack
          </button>
        </ScrollReveal>
      </section>

      {/* Home button */}
      <div className="bg-background px-6 py-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          ↑ Back to top
        </button>
      </div>

      <Footer />
      <LeadDialog open={leadOpen} onOpenChange={setLeadOpen} />
    </div>
  );
}
