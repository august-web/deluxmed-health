import { Link } from "react-router-dom";
import { Phone, MapPin, Shield, Award } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container py-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand + NAP */}
        <div className="lg:col-span-2">
          <h3 className="text-xl font-display font-bold mb-4">
            DeluxMed Primary &amp; Behavioral Health Services
          </h3>
          <address className="not-italic text-sm leading-relaxed opacity-80 space-y-1">
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>1503 E North Ave<br />Baltimore, MD 21213</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <a href="tel:+12407808930" className="hover:underline">Phone: (240) 780-8930</a>
            </div>
          </address>
          <div className="flex items-center gap-4 mt-4 text-xs opacity-70">
            <span className="flex items-center gap-1"><Shield className="h-3.5 w-3.5" /> HIPAA-Compliant</span>
            <span className="flex items-center gap-1"><Award className="h-3.5 w-3.5" /> Board-Certified</span>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold font-sans text-sm uppercase tracking-wider mb-3 opacity-70">Services</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/primary-care-baltimore" className="hover:underline">Primary Care</Link></li>
            <li><Link to="/behavioral-health-baltimore" className="hover:underline">Behavioral Health</Link></li>
            <li><Link to="/telehealth-maryland" className="hover:underline">Telehealth</Link></li>
            <li><Link to="/insurance-payment" className="hover:underline">Insurance &amp; Payment</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold font-sans text-sm uppercase tracking-wider mb-3 opacity-70">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/doreen-ackom-owusu-nurse-practitioner" className="hover:underline">Our Provider</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog &amp; Resources</Link></li>
            <li><Link to="/contact" className="hover:underline">Schedule Appointment</Link></li>
            <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy &amp; HIPAA</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-xs opacity-60 text-center">
        <p>DeluxMed Primary &amp; Behavioral Health Services is operated by DeluxMed Health Group, LLC.</p>
        <p className="mt-1">© {new Date().getFullYear()} DeluxMed Health Group, LLC. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
