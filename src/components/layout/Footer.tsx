import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Youtube, Instagram } from "lucide-react";
import ccuLogo from "@/assets/ccu-logo3.png";

const footerLinks = {
  party: [
    { name: "About CCU", href: "/about" },
    { name: "Vision & Mission", href: "/about#vision" },
    { name: "Leadership", href: "/leadership" },
    { name: "Party Structure", href: "/structure" },
  ],
  getInvolved: [
    { name: "Join CCU", href: "/membership" },
    { name: "Volunteer", href: "/membership#volunteer" },
    { name: "Donate", href: "/donate" },
    { name: "Events", href: "/events" },
  ],
  resources: [
    { name: "News & Updates", href: "/news" },
    { name: "Media Downloads", href: "/media" },
    { name: "Youth & SIGs", href: "/youth" },
    { name: "Contact Us", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* CTA Banner */}
      <div className="bg-secondary py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Join the Movement for Change
          </h2>
          <p className="text-secondary-foreground/90 text-lg mb-6 max-w-2xl mx-auto">
            Be part of building a better Kenya. Your voice matters. Your participation counts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/membership"
              className="inline-flex items-center justify-center px-8 py-3 bg-background text-foreground font-bold rounded-md hover:bg-background/90 transition-colors"
            >
              Register as Member
            </Link>
            <Link
              to="/donate"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-secondary-foreground text-secondary-foreground font-bold rounded-md hover:bg-secondary-foreground/10 transition-colors"
            >
              Support Our Cause
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 items-start">
          {/* Brand - Now properly aligned */}
          <div className="lg:col-span-2">
            <div className="flex flex-col h-full">
              {/* Logo with proper vertical alignment */}
              <div className="mb-0">
                <Link to="/" className="inline-block">
                  <img
                    src={ccuLogo}
                    alt="Chama Cha Uzalendo Logo"
                    className="h-24 w-auto"
                  />
                </Link>
              </div>

              <p className="text-background/80 mb-6 max-w-sm">
                Chama Cha Uzalendo is committed to building a just, equitable, and prosperous Kenya
                through patriotic leadership and inclusive governance.
              </p>
              <div className="flex gap-4 mt-auto">
                <a href="https://www.facebook.com/share/18AW25NKYE/" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/ccuparty?igsh=MTQxaGl1amQwc2xiZw==" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/ccuparty?igsh=MTQxaGl1amQwc2xiZw==" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Links - All columns now aligned */}
          <div className="pt-2">
            <h3 className="font-display font-bold text-lg mb-4">The Party</h3>
            <ul className="space-y-3">
              {footerLinks.party.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2">
            <h3 className="font-display font-bold text-lg mb-4">Get Involved</h3>
            <ul className="space-y-3">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2">
            <h3 className="font-display font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-background/70">
                  Party Headquarters,<br />Machakos, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@ccuparty.co.ke" className="text-background/70 hover:text-primary">
                  info@ccuparty.co.ke
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+254721280573" className="text-background/70 hover:text-primary">
                  +254 721 280 573
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Chama Cha Uzalendo. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-background/60 hover:text-primary">Privacy Policy</Link>
            <Link to="/terms" className="text-background/60 hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}