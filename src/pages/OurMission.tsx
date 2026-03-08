import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import robinLane from "@/assets/robin-lane-graphics.jpg";
import baliSurf from "@/assets/bali-surf.jpg";
import beachCommunity from "@/assets/beach-community.jpg";
import coachingOcean from "@/assets/coaching-ocean.jpg";
import skateBowl from "@/assets/skate-bowl.jpg";
import kidsSurfing from "@/assets/kids-surfing.jpg";

function StoryTab() {
  return (
    <>
      {/* Part 1 */}
      <section className="pb-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                I started surfing in 2007. My older brother handed me a board that was way too big and way too thin, a board shaped for Hawaiian waves. My little brother and I paddled out almost every day after that. What started as curiosity quickly turned into a lifestyle. My younger brother would eventually become Dutch national champion, and I became one of the few girls in our village who kept going long enough to surf competitions.
              </p>
              <p>
                Over the years, surfing took me around the world. I've taught surf lessons for many different schools since 2010 in the Netherlands, France, Spain, Portugal, and Panama. My parents took us to Bali in 2009 and after that I knew one thing for sure: I wanted to travel more places like this. I traveled to Central America and through Europe, chasing waves and learning from different surf cultures and eventually fell in love with the Algarve, Portugal.
              </p>
              <p className="font-heading font-bold text-foreground text-xl">
                In 2013, I became the Dutch vice champion in longboarding.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="overflow-hidden rounded-3xl">
              <img src={baliSurf} alt="Surfing in Bali" className="w-full h-[400px] lg:h-[500px] object-cover" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Part 2 */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-muted">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="overflow-hidden rounded-3xl">
              <img src={coachingOcean} alt="Coaching in the ocean" className="w-full h-[400px] lg:h-[500px] object-cover" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p className="font-heading font-bold text-foreground text-xl">
                But one experience changed everything about how I saw surfing.
              </p>
              <p>
                At a local surf spot where I had felt safe for years, something happened that shook me deeply. I paddled for a wave when a man suddenly dropped in at the last moment. He came straight toward me. He saw me. He didn't stop. The nose of his board punched straight through the nose of mine, and when he fell, he pushed me underwater.
              </p>
              <p>
                On the beach, instead of apologizing, he started yelling at me and refused to pay for the damage. In the weeks after, I saw him in the water several times. To him, the situation seemed forgotten. To me, it was traumatic.
              </p>
              <p className="font-heading italic text-foreground text-xl">
                But it was also transformative.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Part 3 */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                That moment forced me to look more deeply at the surf culture I had been part of for years. The competitive, aggressive, often male-dominated energy in the lineup was something I had unconsciously adapted to. After that experience, I made a conscious decision: I no longer wanted to participate in that dynamic.
              </p>
              <p className="font-heading text-foreground text-xl">
                I started asking myself a different question:
              </p>
              <blockquote className="pl-6 border-l-4 border-secondary">
                <p className="text-2xl font-heading italic text-foreground">
                  "How do I actually want to feel in the water?"
                </p>
              </blockquote>
              <p>
                The answer was clear: safe, supported, and connected. I wanted the lineup to feel like a place where people cheer each other on, where there is space to learn, where community matters more than ego.
              </p>
              <p>
                That shift changed the way I surfed, the way I coached, and the spaces I started creating.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="overflow-hidden rounded-3xl">
              <img src={robinLane} alt="Surf etiquette illustration by Robin Lane" className="w-full h-auto object-cover rounded-3xl" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Part 4 */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-muted">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="overflow-hidden rounded-3xl">
              <img src={beachCommunity} alt="LOBA surf community on the beach" className="w-full h-[400px] lg:h-[500px] object-cover" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Today, I live in Portugal where I coach a close-knit surf community of more than 50 women from all over the world. Our ages range from 8 to 80, and what connects us isn't competition, but encouragement, growth, and joy in the water.
              </p>
              <p>
                For years, women in my community kept asking me the same question:
              </p>
              <blockquote className="pl-6 border-l-4 border-secondary">
                <p className="text-xl font-heading italic text-foreground">
                  "Can you put all your knowledge somewhere we can access it anytime? Maybe an app, or online coaching?"
                </p>
              </blockquote>
              <p>
                So today, I'm finally doing both. What started as a personal transformation in the water has grown into a global community of women supporting women in the surf.
              </p>
              <p className="font-heading font-bold text-foreground text-xl">
                And this is only the beginning.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

function MissionTab() {
  return (
    <>
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-gradient-ocean text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold tracking-widest uppercase text-primary-foreground/60">
                Our Mission
              </span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
                What We Stand For
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-12">
            <ScrollReveal>
              <div className="space-y-4">
                <h3 className="font-heading text-2xl font-bold text-gradient uppercase tracking-wide">Sisterhood</h3>
                <p className="text-lg text-primary-foreground/80 leading-relaxed">
                  Our mission starts with promoting a sense of sisterhood in the surf community by advocating for more women in the line-up. We believe that increasing female participation in surfing not only promotes gender equality, but also creates a supportive and inspiring environment for women of all ages and levels. To achieve this goal, we are committed to making individual surf coaching accessible to every young girl, giving her the guidance and encouragement she needs to thrive in the sport.
                </p>
              </div>
            </ScrollReveal>


            <ScrollReveal>
              <div className="space-y-4">
                <h3 className="font-heading text-2xl font-bold text-gradient uppercase tracking-wide">Empowerment</h3>
                <p className="text-lg text-primary-foreground/80 leading-relaxed">
                  Empowerment is central to our values. We strive to create awareness about the mental health benefits of surfing, highlighting how the sport can serve as a powerful tool for personal growth and well-being. Open communication about doubts and fears that make women feel uncomfortable in the water is crucial. By addressing these concerns, we hope to build a more inclusive and understanding surfing community where every woman feels confident and supported.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="space-y-4">
                <h3 className="font-heading text-2xl font-bold text-gradient uppercase tracking-wide">Conscious Surfing</h3>
                <p className="text-lg text-primary-foreground/80 leading-relaxed">
                  Finally, our commitment to conscious surfing emphasises the importance of building deep connections with the ocean and marine life. We strive to share knowledge that encourages a positive impact on the environment by promoting sustainable practices among surfers. By cultivating a sense of responsibility and respect for nature, we want to ensure that the beauty and vitality of our oceans are preserved for future generations.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="bg-primary-foreground/5 rounded-2xl p-8 md:p-12 border border-primary-foreground/10">
                <p className="text-lg text-primary-foreground/80 leading-relaxed">
                  Together, these pillars of sisterhood, empowerment and conscious surfing form a comprehensive approach to improving women's experience of surfing. By addressing both the individual and collective aspects of the sport, we can create a more inclusive, supportive and environmentally conscious surfing community.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

export default function OurMission() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-8 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-secondary">
              Our Story
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
              How In-Water Trauma Transformed Into a Conscious Movement
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <Tabs defaultValue="story">
        <section className="pb-8 px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <TabsList className="w-full max-w-md">
              <TabsTrigger value="story" className="flex-1">Story</TabsTrigger>
              <TabsTrigger value="mission" className="flex-1">Mission</TabsTrigger>
            </TabsList>
          </div>
        </section>

        <TabsContent value="story">
          <StoryTab />
        </TabsContent>
        <TabsContent value="mission">
          <MissionTab />
        </TabsContent>
      </Tabs>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-background text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            Ready to Join the Pack?
          </h2>
          <a
            href="/#join"
            className="inline-block bg-lavender text-primary-foreground px-8 py-4 rounded-full font-bold text-base hover:bg-foreground hover:text-background transition-colors"
          >
            Join the Movement
          </a>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
}
