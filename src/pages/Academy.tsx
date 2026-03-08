import { Link } from "react-router-dom";
import { ArrowLeft, Play, Target, BarChart3, BookOpen, Users, Video, Waves, Award } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import oceanTexture from "@/assets/ocean-texture.jpg";

const modules = [
  {
    icon: Video,
    title: "Video Analysis",
    desc: "Upload your surf clips and receive detailed technique feedback from experienced coaches.",
  },
  {
    icon: BookOpen,
    title: "Technique Tutorials",
    desc: "Step-by-step video lessons covering pop-up, bottom turn, cutback, and more.",
  },
  {
    icon: Target,
    title: "Surf Drills",
    desc: "Land-based exercises designed to improve your balance, strength and surf-specific fitness.",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    desc: "Track your skills, log sessions, and see your improvement over time.",
  },
  {
    icon: Waves,
    title: "Forecast Mastery",
    desc: "Learn to read swell charts, understand wind patterns, and pick the best sessions.",
  },
  {
    icon: Users,
    title: "Community Access",
    desc: "Connect with fellow LOBA members, share clips, and motivate each other.",
  },
];

const levels = [
  {
    level: "Beginner",
    title: "Ocean Awareness",
    topics: ["Water safety", "Paddling technique", "Catching whitewater", "Pop-up fundamentals"],
  },
  {
    level: "Intermediate",
    title: "Wave Reading",
    topics: ["Green wave take-off", "Bottom turn basics", "Line-up positioning", "Forecast reading"],
  },
  {
    level: "Advanced",
    title: "Flow & Style",
    topics: ["Rail-to-rail surfing", "Cutbacks & re-entries", "Wave selection", "Competitive awareness"],
  },
];

export default function Academy() {
  return (
    <div className="min-h-screen">
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
              LOBA Academy
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Your online surf training platform. Learn technique, read forecasts, and progress faster — from anywhere.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modules */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center">
              <span className="text-sm font-semibold tracking-widest uppercase text-primary">What You Get</span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-4">
                Everything You Need to Surf Better
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {modules.map((m, i) => (
              <ScrollReveal key={i} delay={0.1 * i}>
                <div className="bg-card border border-border rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <m.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">{m.title}</h3>
                  <p className="text-muted-foreground mt-3 leading-relaxed">{m.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Levels */}
      <section className="section-padding bg-muted">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center">
              <span className="text-sm font-semibold tracking-widest uppercase text-secondary">Progression Path</span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-4">
                Your Surf Journey
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {levels.map((l, i) => (
              <ScrollReveal key={i} delay={0.15 * i}>
                <div className="bg-card border border-border rounded-3xl p-8 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <Award className="text-secondary" size={22} />
                    <span className="text-sm font-semibold text-secondary uppercase tracking-wider">{l.level}</span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground">{l.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {l.topics.map((t, j) => (
                      <li key={j} className="flex items-center gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {t}
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
          <h2 className="font-heading text-3xl md:text-5xl font-bold">Ready to Level Up?</h2>
          <p className="mt-6 text-lg text-primary-foreground/70 max-w-xl mx-auto">
            Join the LOBA Academy and start your surf progression journey today.
          </p>
          <button className="mt-10 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity">
            Join the Pack
          </button>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
}
