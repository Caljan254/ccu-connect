import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const leaders = [
  {
    name: "Hon. Philippe O. G. Sadjah",
    position: "Secretary General",
    image: null,
  },
  {
    name: "Juliet Mwaniki",
    position: "Acting National Chairperson",
    image: null,
  },
  {
    name: "Sylvester Mutune",
    position: "Chief Executive Officer",
    image: null,
  },
];

export function LeadershipPreview() {
  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Leadership</span>
          <h2 className="section-title mt-2">Meet the Team Leading CCU</h2>
          <p className="section-subtitle mx-auto">
            Dedicated leaders committed to serving Kenya with integrity and passion.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center text-primary font-display font-bold text-3xl">
                  {leader.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display font-bold text-xl mb-1">{leader.name}</h3>
                <p className="text-primary font-medium">{leader.position}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/leadership">
              View All Leadership
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
