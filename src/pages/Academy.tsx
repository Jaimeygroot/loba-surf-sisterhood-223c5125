import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Play, Target, BarChart3, BookOpen, Users, Video, Waves, Award, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadDialog from "@/components/LeadDialog";
import lobaLogo from "@/assets/loba-logo.png";

const modules = [
  {
    icon: Video,
    title: "Video Analysis",
    desc: "Upload your surf clips and receive detailed technique feedback from experienced coaches.",
  },
  {
    icon: BookOpen,
    title: "Forecast Reading",
    desc: "Learn to read surf forecasts, understand swell, wind and tide conditions.",
  },
  {
    icon: Target,
    title: "Surf Practices & Techniques",
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

const forecastItems = [
  { icon: Waves, title: "Swell Direction", desc: "Understand how swell affects your local breaks" },
  { icon: Waves, title: "Wind Forecast", desc: "Learn when conditions are clean and surfable" },
  { icon: Waves, title: "Tide Timing", desc: "Know when to paddle out for the best waves" },
  { icon: MapPin, title: "Spot Selection", desc: "Pick the right break for your skill level" },
];

const coachingFeatures = [
  { icon: Target, label: "Surf Practices" },
  { icon: Play, label: "Video Analysis" },
  { icon: BookOpen, label: "Forecast Reading" },
  { icon: BarChart3, label: "Progress Tracking" },
  { icon: MapPin, label: "Find Surf Sisters" },
  { icon: Calendar, label: "Meet-Up Coordination" },
];

export default function Academy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [leadOpen, setLeadOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
              <ArrowLeft size={16} /> Back to Home
            </Link>

            <div className="text-center max-w-2xl mx-auto">
              <img src={lobaLogo} alt="LOBA" className="h-20 w-20 rounded-full mx-auto mb-4" />
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground italic">
                LOBA Academy
              </h1>
              <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Your online surf training platform. Learn to read forecasts and plan the best moments for your sessions, practice techniques from anywhere, get personalized feedback, meet up with other women and progress faster!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Online Coaching (same as homepage) */}
      <section className="section-padding bg-secondary">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-sm font-semibold tracking-widest uppercase text-secondary-foreground/70">
              Online Coaching
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mt-4">
              Train As You Like — Anywhere
            </h2>
            <p className="mt-6 text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
              Members get access to a digital surf training platform with coaching tools designed to accelerate your progression — and connect with your surf sisters through the built-in Meet-Up feature.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-14">
            {coachingFeatures.map((f, i) => (
              <ScrollReveal key={i} delay={0.1 * i}>
                <div className="bg-secondary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-secondary-foreground/20">
                  <f.icon className="mx-auto text-secondary-foreground mb-3" size={28} />
                  <p className="text-sm font-semibold text-secondary-foreground">{f.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
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

      {/* Forecast Reading */}
      <section className="section-padding bg-background">
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
            {forecastItems.map((item, i) => (
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

      {/* Levels - Lavender background */}
      <section className="section-padding bg-lavender/20">
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
          <button
            onClick={() => setLeadOpen(true)}
            className="mt-10 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Join the Pack
          </button>
        </ScrollReveal>
      </section>

      <Footer />
      <LeadDialog open={leadOpen} onOpenChange={setLeadOpen} />
    </div>
  );
}
