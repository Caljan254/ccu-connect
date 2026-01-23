import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const nationalLeaders = [
  { name: "Hon. Philippe O. G. Sadjah", position: "Secretary General", category: "National Executive" },
  { name: "Juliet Mwaniki", position: "Acting National Chairperson", category: "National Executive" },
  { name: "Sylvester Mutune", position: "Chief Executive Officer", category: "National Executive" },
  { name: "Dr. Mary Wanjiku", position: "Deputy Secretary General", category: "National Executive" },
  { name: "James Omondi", position: "National Treasurer", category: "National Executive" },
  { name: "Grace Akinyi", position: "National Organizing Secretary", category: "National Executive" },
];

const electedOfficials = [
  { name: "Hon. Peter Kimani", position: "MCA - Mavoko Ward", county: "Machakos", category: "Elected" },
  { name: "Hon. Sarah Mutua", position: "MCA - Mwala Ward", county: "Machakos", category: "Elected" },
  { name: "Hon. David Ochieng", position: "MCA - Kisumu Central", county: "Kisumu", category: "Elected" },
  { name: "Hon. Faith Njeri", position: "MCA - Kiambu Township", county: "Kiambu", category: "Elected" },
  { name: "Hon. John Kamau", position: "MCA - Nakuru East", county: "Nakuru", category: "Nominated" },
  { name: "Hon. Alice Wambui", position: "MCA - Nairobi", county: "Nairobi", category: "Nominated" },
];

const countyCoordinators = [
  { name: "Charles Mutiso", position: "County Coordinator", county: "Machakos" },
  { name: "Anne Wairimu", position: "County Coordinator", county: "Kiambu" },
  { name: "Hassan Mohamed", position: "County Coordinator", county: "Mombasa" },
  { name: "Lucy Adhiambo", position: "County Coordinator", county: "Kisumu" },
  { name: "Patrick Kiprop", position: "County Coordinator", county: "Uasin Gishu" },
  { name: "Fatuma Ali", position: "County Coordinator", county: "Garissa" },
];

function LeaderCard({ leader }: { leader: { name: string; position: string; county?: string; category?: string } }) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all">
      <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-primary font-display font-bold text-2xl">
          {leader.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display font-bold text-lg mb-1">{leader.name}</h3>
        <p className="text-primary font-medium text-sm">{leader.position}</p>
        {leader.county && (
          <p className="text-muted-foreground text-sm mt-1">{leader.county} County</p>
        )}
        {leader.category && (
          <span className={`inline-block mt-2 px-2 py-1 text-xs rounded-full ${
            leader.category === "Elected" ? "bg-primary/10 text-primary" :
            leader.category === "Nominated" ? "bg-secondary/10 text-secondary" :
            "bg-accent/10 text-accent-foreground"
          }`}>
            {leader.category}
          </span>
        )}
      </div>
    </div>
  );
}

export default function Leadership() {
  return (
    <>
      <Helmet>
        <title>Leadership - CCU Officials & Elected Representatives | Chama Cha Uzalendo</title>
        <meta name="description" content="Meet the leadership of Chama Cha Uzalendo - our Secretary General, National Executive, elected MCAs, and county coordinators across Kenya." />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="bg-primary pattern-overlay py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Our Leadership
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Dedicated leaders serving Kenya with integrity, passion, and commitment to our shared vision.
            </p>
          </div>
        </section>

        {/* Leadership Tabs */}
        <section className="container-section">
          <Tabs defaultValue="national" className="w-full">
            <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-3 mb-12">
              <TabsTrigger value="national">National Executive</TabsTrigger>
              <TabsTrigger value="elected">Elected/Nominated</TabsTrigger>
              <TabsTrigger value="county">County Coordinators</TabsTrigger>
            </TabsList>

            <TabsContent value="national">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {nationalLeaders.map((leader) => (
                  <LeaderCard key={leader.name} leader={leader} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="elected">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {electedOfficials.map((leader) => (
                  <LeaderCard key={leader.name} leader={leader} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="county">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {countyCoordinators.map((leader) => (
                  <LeaderCard key={leader.name} leader={leader} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </Layout>
    </>
  );
}
