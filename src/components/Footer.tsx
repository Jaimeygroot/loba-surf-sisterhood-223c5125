import { Instagram, Youtube } from "lucide-react";
import lobaLogo from "@/assets/loba-logo.png";

const links = [
  { label: "Home", href: "/#top" },
  { label: "Online Coaching", href: "#coaching" },
  { label: "Forecast", href: "#forecast" },
  { label: "Book a Session", href: "#sessions" },
  { label: "About", href: "#about" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="flex items-center gap-3">
            <img src={lobaLogo} alt="LOBA" className="h-10 w-10 rounded-full" />
            <span className="font-heading font-bold text-lg">LOBA Girls Surf Club</span>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-background/60 hover:text-background transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-4">
            <a href="https://instagram.com/lobasurfco" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-background transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/40">
            © {new Date().getFullYear()} LOBA Girls Surf Club. All rights reserved.
          </p>
          <a
            href="mailto:lobasurf@gmail.com"
            className="text-sm text-background/60 hover:text-background transition-colors"
          >
            lobasurf@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
