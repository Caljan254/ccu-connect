import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Users, Building, Flag, Globe, Home, MapPin } from "lucide-react";

const partyOrgans = [
  {
    icon: Globe,
    name: "National Delegates Congress (NDC)",
    description: "The supreme organ of the party. It meets every 5 years to elect national officials, amend the constitution, and set party direction.",
    functions: ["Elect national leadership", "Amend party constitution", "Set strategic direction", "Approve party policies"],
  },
  {
    icon: Building,
    name: "National Executive Committee (NEC)",
    description: "The highest decision-making body between NDC sessions. Comprises national officials and county representatives.",
    functions: ["Implement NDC decisions", "Coordinate party activities", "Approve candidates", "Manage party resources"],
  },
  {
    icon: Flag,
    name: "National Management Committee (NMC)",
    description: "Handles day-to-day administration of the party under the Secretary General's leadership.",
    functions: ["Daily operations", "Staff management", "Communication", "Event coordination"],
  },
  {
    icon: MapPin,
    name: "County Executive Committee",
    description: "Coordinates party activities at the county level. Each of Kenya's 47 counties has a CEC.",
    functions: ["County coordination", "Local mobilization", "Grassroots engagement", "County elections"],
  },
  {
    icon: Home,
    name: "Constituency Committee",
    description: "Manages party affairs at the constituency level, coordinating between county and ward structures.",
    functions: ["Constituency activities", "Candidate vetting", "Member registration", "Local campaigns"],
  },
  {
    icon: Users,
    name: "Ward Committee",
    description: "The grassroots level of party organization, directly engaging with members at the community level.",
    functions: ["Community outreach", "Member welfare", "Voter mobilization", "Feedback collection"],
  },
];

const specialOrgans = [
  { name: "National Disciplinary Committee", role: "Handles disciplinary matters and ensures party code of conduct" },
  { name: "Elections Board", role: "Manages internal party elections and nomination processes" },
  { name: "Appeals Tribunal", role: "Hears and determines appeals from disciplinary decisions" },
  { name: "Youth League", role: "Coordinates youth affairs and mobilization across the country" },
  { name: "Women's League", role: "Advances gender equality and women's participation in politics" },
  { name: "PWD Committee", role: "Ensures inclusion of persons with disabilities in party affairs" },
];

export default function Structure() {
  return (
    <>
      <Helmet>
        <title>Party Structure & Organs | Chama Cha Uzalendo Kenya</title>
        <meta name="description" content="Understand the organizational structure of CCU - from the National Delegates Congress to ward-level committees. Learn how our party is governed." />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="bg-primary pattern-overlay py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Party Structure & Organs
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              A democratic, transparent, and accountable party structure from grassroots to national level.
            </p>
          </div>
        </section>

        {/* Hierarchy */}
        <section className="container-section">
          <div className="text-center mb-12">
            <h2 className="section-title">Organizational Hierarchy</h2>
            <p className="section-subtitle mx-auto">
              CCU's structure ensures representation and participation at every level of governance.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {partyOrgans.map((organ, index) => (
              <div
                key={organ.name}
                className="bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                      <organ.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="hidden md:block mt-4 text-center">
                      <span className="text-4xl font-display font-bold text-muted-foreground/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl md:text-2xl font-bold mb-3">{organ.name}</h3>
                    <p className="text-muted-foreground mb-4">{organ.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {organ.functions.map((func) => (
                        <span
                          key={func}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {func}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Special Organs */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title">Special Organs & Committees</h2>
              <p className="section-subtitle mx-auto">
                Specialized bodies that ensure accountability, inclusivity, and efficient party operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {specialOrgans.map((organ) => (
                <div
                  key={organ.name}
                  className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all"
                >
                  <h3 className="font-display font-bold text-lg mb-2">{organ.name}</h3>
                  <p className="text-muted-foreground text-sm">{organ.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
