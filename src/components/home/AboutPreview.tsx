import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Users, Scale, Lightbulb } from "lucide-react";

const coreValues = [
  {
    icon: Heart,
    title: "Patriotism",
    description: "Love for our nation and commitment to its prosperity",
  },
  {
    icon: Users,
    title: "Unity",
    description: "Bringing Kenyans together across all divides",
  },
  {
    icon: Scale,
    title: "Justice",
    description: "Equal rights and opportunities for all citizens",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Progressive solutions for modern challenges",
  },
];

export function AboutPreview() {
  return (
    <section className="container-section">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div>
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">About CCU</span>
          <h2 className="section-title mt-2">
            A Party for the People, By the People
          </h2>
          <p className="section-subtitle mb-8">
            Chama Cha Uzalendo is a national political party committed to patriotic, 
            democratic, and inclusive governance. We believe in the power of ordinary 
            Kenyans to transform their nation through active civic participation.
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Our Vision</h3>
                <p className="text-muted-foreground">
                  A prosperous, just, and united Kenya where every citizen thrives 
                  regardless of their background or location.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Our Mission</h3>
                <p className="text-muted-foreground">
                  To mobilize, empower, and represent Kenyans in pursuit of 
                  accountable leadership and sustainable development.
                </p>
              </div>
            </div>
          </div>

          <Button variant="hero" asChild>
            <Link to="/about">Discover Our Story</Link>
          </Button>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-2 gap-6">
          {coreValues.map((value, index) => (
            <div
              key={value.title}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{value.title}</h3>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
