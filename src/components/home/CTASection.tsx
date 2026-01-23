import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, FileText, Calendar, MessageCircle } from "lucide-react";

const actions = [
  {
    icon: Users,
    title: "Become a Member",
    description: "Join thousands of patriotic Kenyans building our nation",
    href: "/membership",
    color: "primary",
  },
  {
    icon: FileText,
    title: "Download Resources",
    description: "Access party documents, manifestos, and media materials",
    href: "/media",
    color: "secondary",
  },
  {
    icon: Calendar,
    title: "Attend Events",
    description: "Participate in rallies, meetings, and community programs",
    href: "/events",
    color: "accent",
  },
  {
    icon: MessageCircle,
    title: "Contact Us",
    description: "Reach out to party officials and county coordinators",
    href: "/contact",
    color: "primary",
  },
];

export function CTASection() {
  return (
    <section className="container-section">
      <div className="text-center mb-12">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get Involved</span>
        <h2 className="section-title mt-2">Take Action Today</h2>
        <p className="section-subtitle mx-auto">
          There are many ways to contribute to the CCU movement. Choose how you'd like to participate.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {actions.map((action) => (
          <Link
            key={action.title}
            to={action.href}
            className="group bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
          >
            <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                action.color === "primary"
                  ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                  : action.color === "secondary"
                  ? "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground"
                  : "bg-accent/10 text-accent-foreground group-hover:bg-accent"
              }`}
            >
              <action.icon className="w-7 h-7" />
            </div>
            <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">
              {action.title}
            </h3>
            <p className="text-muted-foreground text-sm">{action.description}</p>
          </Link>
        ))}
      </div>

      {/* Quote */}
      <div className="mt-20 bg-primary rounded-2xl p-8 md:p-12 text-center relative overflow-hidden pattern-overlay">
        <blockquote className="relative z-10">
          <p className="text-2xl md:text-3xl font-display font-medium text-primary-foreground mb-6 max-w-3xl mx-auto">
            "The future of Kenya lies in the hands of its citizens. Together, 
            through unity and patriotism, we shall build the nation we deserve."
          </p>
          <footer className="text-primary-foreground/80">
            — <cite className="font-display font-semibold">Hon. Philippe O. G. Sadjah</cite>, Secretary General
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
