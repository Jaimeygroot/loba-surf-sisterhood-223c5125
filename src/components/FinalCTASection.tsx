import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import oceanTexture from "@/assets/ocean-texture.jpg";
import BookingDialog from "./BookingDialog";

export default function FinalCTASection() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section
      id="join"
      className="relative section-padding flex items-center justify-center min-h-[500px] overflow-hidden"
    >
      <img
        src={oceanTexture}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-sage-lavender opacity-85" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-3xl mx-auto"
      >
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
          Join the Movement
        </h2>
        <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl mx-auto">
          Join the LOBA Girls Surf Club and become part of a surf sisterhood that grows together in and out of the water.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link to="/online-learning" className="bg-primary-foreground text-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity">
            Join the Movement
          </Link>
          <button
            onClick={() => setBookingOpen(true)}
            className="border border-primary-foreground/40 text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary-foreground/10 transition-colors"
          >
            Book a First Session
          </button>
        </div>
      </motion.div>

      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </section>
  );
}
