import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import lobaLogo from "@/assets/loba-logo.png";
import BookingDialog from "./BookingDialog";

const navItems = [
  { label: "Home", href: "/#top" },
  { label: "Online Coaching", href: "/academy" },
  { label: "Book a Session", href: "booking" },
  { label: "Mission", href: "/our-mission" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href === "booking") {
      setBookingOpen(true);
      return;
    }
    if (!href.startsWith("/#")) {
      navigate(href);
      return;
    }
    if (location.pathname !== "/") {
      window.location.href = href;
      return;
    }
    const id = href.replace("/#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img src={lobaLogo} alt="LOBA Girls Surf Club" className="h-12 w-12 md:h-14 md:w-14 rounded-full" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-medium transition-colors hover:text-lavender ${scrolled ? 'text-lavender' : 'text-primary-foreground'}`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://chat.whatsapp.com/GcTY9DCWCBeGSVwcnEhRE8?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Get in Contact
            </a>
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
                <a
                  href="https://chat.whatsapp.com/GcTY9DCWCBeGSVwcnEhRE8?mode=gi_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary text-secondary-foreground px-5 py-3 rounded-full text-sm font-semibold mt-2 text-center"
                >
                  Get in Contact
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  );
}
