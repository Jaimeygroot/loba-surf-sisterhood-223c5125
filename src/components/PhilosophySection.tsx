import ScrollReveal from "./ScrollReveal";

export default function PhilosophySection() {
  const principles = [
    "Choose your place in the line-up",
    "Read the ocean before you paddle",
    "Progress step by step",
    "Surf with respect for nature and others",
  ];

  return (
    <section id="philosophy" className="relative section-padding overflow-hidden">
      {/* Vimeo background video */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://player.vimeo.com/video/956967522?h=758f3b5591&background=1&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto"
          style={{ aspectRatio: "16/9" }}
          allow="autoplay; fullscreen"
          frameBorder="0"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <ScrollReveal>
          <span className="text-sm font-semibold tracking-widest uppercase text-primary-foreground/70">
            Philosophy
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4">
            Sisterhood in the Water
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mt-8 text-xl md:text-2xl text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto font-light">
            Surfing is not about fighting the ocean.
            <br />
            <span className="text-primary-foreground font-medium">It is about learning to listen to it.</span>
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {principles.map((p, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 text-left hover:bg-primary-foreground/15 transition-all duration-300">
                <span className="text-3xl font-heading font-bold text-primary-foreground/30">
                  0{i + 1}
                </span>
                <p className="mt-3 text-lg font-medium text-primary-foreground">{p}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}