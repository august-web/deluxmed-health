import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/primary-care-baltimore", label: "Primary Care" },
  { to: "/behavioral-health-baltimore", label: "Behavioral Health" },
  { to: "/telehealth-maryland", label: "Telehealth" },
  { to: "/doreen-ackom-owusu-nurse-practitioner", label: "Our Provider" },
  { to: "/blog", label: "Blog" },
  { to: "/insurance-payment", label: "Insurance" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      {/* Top bar */}
      <div className="bg-primary">
        <div className="container flex items-center justify-between py-1.5 text-sm text-primary-foreground">
          <span className="hidden sm:inline">Serving Baltimore &amp; all of Maryland via Telehealth</span>
          <a href="tel:+12407808930" className="flex items-center gap-1.5 font-medium hover:underline">
            <Phone className="h-3.5 w-3.5" />
            (240) 780-8930
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="text-lg font-bold font-display text-foreground tracking-tight">DeluxMed</span>
          <span className="text-[11px] text-muted-foreground leading-none">Primary &amp; Behavioral Health</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 text-sm rounded-md transition-colors ${
                location.pathname === link.to
                  ? "text-primary font-semibold bg-primary/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button asChild size="sm">
            <Link to="/contact">
              <Calendar className="h-4 w-4 mr-1.5" />
              Schedule Appointment
            </Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-border bg-card pb-4">
          <div className="container flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2.5 rounded-md text-sm ${
                  location.pathname === link.to
                    ? "text-primary font-semibold bg-primary/5"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="sm" className="mt-2">
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                Schedule Appointment
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
