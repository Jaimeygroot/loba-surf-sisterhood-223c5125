import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import heroPoster from "@/assets/hero-poster.webp.asset.json";

export default function HeroSection() {
  const [videoReady, setVideoReady] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const loadVideo = () => setShouldLoadVideo(true);
    const requestIdle = window.requestIdleCallback?.bind(window);
    const cancelIdle = window.cancelIdleCallback?.bind(window);

    if (requestIdle && cancelIdle) {
      const idleId = requestIdle(loadVideo, { timeout: 800 });
      return () => cancelIdle(idleId);
    }

    const timeoutId = window.setTimeout(loadVideo, 120);
    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!shouldLoadVideo) return;

    // Listen for Vimeo player "playing" event so we only fade in once a frame is actually showing
    const onMessage = (event: MessageEvent) => {
      if (typeof event.data !== "string" || !event.origin.includes("vimeo.com")) return;
      try {
        const data = JSON.parse(event.data);
        if (data.event === "ready" && iframeRef.current?.contentWindow) {
          iframeRef.current.contentWindow.postMessage(
            JSON.stringify({ method: "addEventListener", value: "playing" }),
            "*"
          );
        }
        if (data.event === "playing") setVideoReady(true);
      } catch {}
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [shouldLoadVideo]);

  return (
    <section id="top" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Poster image — shown immediately while the video loads */}
      <img
        src={heroPoster.url}
        alt=""
        aria-hidden="true"
        {...({ fetchpriority: "high" } as Record<string, string>)}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Vimeo background video */}
      {shouldLoadVideo ? (
        <div className={`absolute inset-0 z-[1] transition-opacity duration-700 ${videoReady ? "opacity-100" : "opacity-0"}`}>
          <iframe
            ref={iframeRef}
            src="https://player.vimeo.com/video/956967522?h=758f3b5591&background=1&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0&api=1"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto"
            style={{ aspectRatio: "16/9" }}
            allow="autoplay; fullscreen"
            frameBorder="0"
            loading="eager"
          />
        </div>
      ) : null}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-ocean/10 via-transparent to-deep-ocean/20 z-[2]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto -mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-6 md:gap-10"
        >
          {/* Left tags */}
          <div className="flex flex-col items-end gap-1">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/70">Women Only</span>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/70">Surf Guiding</span>
          </div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[0.95] tracking-tight"
          >
            Loba Girls
            <br />
            Surf Club
          </motion.h1>

          {/* Right tags */}
          <div className="flex flex-col items-start gap-1">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/70">Local Community</span>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/70">Online Coaching</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 text-sm md:text-base text-primary-foreground/60 uppercase tracking-widest font-medium bg-lavender/15 px-4 py-2 rounded-full inline-block"
        >
          Since 2024
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-3 text-lg md:text-xl text-primary-foreground/60 uppercase tracking-widest font-medium bg-lavender/15 px-6 py-3 rounded-full inline-block"
        >
          Join the movement of conscious surfing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <Link
            to="/academy"
            className="bg-lavender text-primary-foreground px-8 py-4 rounded-full font-bold text-base hover:bg-foreground hover:text-background transition-colors"
          >
            Join the Movement
          </Link>
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
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
