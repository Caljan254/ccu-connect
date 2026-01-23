import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Heart, Shield, Map, Calendar, Award, UserCheck } from "lucide-react";
import heroRally from "@/assets/hero-rally.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroRally})` }}
      />
      
      {/* Green Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70" />
      
      {/* Kenya flag stripe accent */}
      <div className="absolute top-0 left-0 right-0 h-1 kenya-stripe z-20" />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-up">
            <Shield className="w-4 h-4" />
            <span>Building a Better Kenya Together</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Chama Cha Uzalendo
          </h1>
          
          <p className="text-2xl md:text-3xl font-display text-accent font-semibold mb-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Patriotism. Democracy. Unity.
          </p>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Join the movement for inclusive governance, economic empowerment, and 
            a Kenya where every citizen's voice is heard and valued.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="accent" size="xl" asChild>
              <Link to="/membership">
                Join CCU
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="heroSecondary" size="xl" asChild>
              <Link to="/membership#register">
                Register as Member
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
            <Button variant="donate" size="xl" asChild>
              <Link to="/donate">
                <Heart className="w-5 h-5 mr-2" />
                Donate
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats with improved icons */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          {[
            { 
              label: "Counties", 
              value: "47", 
              icon: Map,
              description: "Nationwide Coverage"
            },
            { 
              label: "Members", 
              value: "50K+", 
              icon: Users,
              description: "Active Patriots"
            },
            { 
              label: "MCAs", 
              value: "4+", 
              icon: Award,
              description: "Elected Officials"
            },
            { 
              label: "Years", 
              value: "15+", 
              icon: Calendar,
              description: "Of Service"
            },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.label} 
                className="group bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center border border-primary-foreground/10 hover:border-primary-foreground/20 transition-all duration-300 hover:bg-primary-foreground/15"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4 group-hover:bg-primary-foreground/15 transition-colors">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <p className="text-3xl font-display font-bold text-primary-foreground mb-1">{stat.value}</p>
                  <p className="text-lg font-medium text-primary-foreground mb-1">{stat.label}</p>
                  <p className="text-sm text-primary-foreground/60">{stat.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}