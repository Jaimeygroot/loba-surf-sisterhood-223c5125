import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import lobaLogo from "@/assets/loba-logo.png";

const navItems = [
  { label: "Online Coaching", href: "/#coaching" },
  { label: "Forecast", href: "/#forecast" },
  { label: "Book a Session", href: "/#sessions" },
  { label: "Meet-Up App", href: "/#meetup" },
  { label: "About", href: "/#about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (location.pathname !== "/" && href.startsWith("/#")) {
      window.location.href = href;
      return;
    }
    const id = href.replace("/#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={lobaLogo} alt="LOBA Girls Surf Club" className="h-16 w-16 md:h-20 md:w-20 rounded-full" />
          <span className="font-heading font-bold text-lg tracking-tight text-foreground">
            LOBA
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("/#join")}
            className="bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Join the Movement
          </button>
        </nav>

        {/* Mobile trigger */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border"
          >
            <nav className="flex flex-col px-6 py-6 gap-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left text-base font-medium text-foreground py-2"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("/#join")}
                className="bg-secondary text-secondary-foreground px-5 py-3 rounded-full text-sm font-semibold mt-2"
              >
                Join the Movement
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
