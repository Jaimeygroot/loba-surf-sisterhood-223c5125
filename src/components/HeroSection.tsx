import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.png";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-[30%_20%]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-ocean/10 via-transparent to-deep-ocean/20" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {["Local Community", "Surf Guiding", "Online Coaching", "Women Only"].map((tag) => (
              <span key={tag} className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-secondary/20 text-primary-foreground border border-secondary/30">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[0.95] tracking-tight"
        >
          Loba Girls
          <br />
          <span className="text-primary-foreground">Surf Club</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 text-sm md:text-base text-primary-foreground/60 uppercase tracking-widest font-medium"
        >
          Since 2024
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed"
        >
          Join the movement of conscious surfing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <a
            href="#join"
            className="bg-lavender text-primary-foreground px-8 py-4 rounded-full font-bold text-base hover:bg-foreground hover:text-background transition-colors"
          >
            Join the Movement
          </a>
          <a
            href="#coaching"
            className="bg-foreground text-background px-8 py-4 rounded-full font-bold text-base hover:bg-lavender hover:text-primary-foreground transition-colors"
          >
            Online Coaching
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary-foreground/50"
          />
        </div>
      </motion.div>
    </section>
  );
}
