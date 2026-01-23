import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import PhilippeImage from "@/assets/Phillipe _Sadjah _SG.png";
import JulietImage from "@/assets/Juliet _Mwaniki,_Chair.png";
import SylvesterImage from "@/assets/Executive_C.E.O.png";

import MwendeImage from "@/assets/Mwende_Mutune.png";
import WanjiruImage from "@/assets/Wanjiru_Kamau.png";
import MunyokiImage from "@/assets/Munyoki_Kasinga.png";
import BonifaceImage from "@/assets/Boniface_Maeke.png";

const nationalLeaders = [
  { name: "Hon. Philippe O. G. Sadjah", position: "Secretary General", category: "National Executive", image: PhilippeImage },
  { name: "Juliet Mwaniki", position: "Acting National Chairperson", category: "National Executive",  image: JulietImage },
  { name: "Sylvester Mutune", position: "Executive Director/C.E.O", category: "National Executive",    image: SylvesterImage },
];

const nationalLeadersTable = [
  { name: "Davies Musau", position: "National Organizing Secretary", category: "National Executive" },
  { name: "Franciscah Mutisya", position: "Secretary for PLWD Affairs", category: "National Executive" },
  { name: "Mercy K. Mutwiri", position: "Secretary for Information", category: "National Executive" },
  { name: "Bernard Kyalo", position: "Secretary for Youth Affairs", category: "National Executive" },
  { name: "Richard Onsongo", position: "Secretary for Elders Affairs", category: "National Executive" },
  { name: "Kenneth Kipkemboi Lel", position: "Deputy Organizing Secretary", category: "National Executive" },
  { name: "Janet Muema", position: "Secretary for Legal Affairs I", category: "National Executive" },
  { name: "Titus Makhanu", position: "Secretary for Legal Affairs II", category: "National Executive" },
];

const electedOfficials = [
  { name: "Hon. Boniface Maeke", position: "MCA - Kalama Ward", county: "Machakos", category: "Elected", image: BonifaceImage },
  { name: "Hon. Titus M. Kasinga", position: "MCA - Mumoni Ward", county: "Kitui", category: "Elected", image: MunyokiImage },
  { name: "Hon. Mary Mwende Mutune", position: "MCA", county: "Kitui", category: "Nominated", image: MwendeImage },
  { name: "Hon. Ruth Wanjiru Kamau", position: "MCA", county: "Machakos", category: "Nominated", image: WanjiruImage },
 
];



function LeaderCard({ leader }: { leader: { name: string; position: string; county?: string; category?: string; image?: string } }) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
      <div className="aspect-[4/5] overflow-hidden">
        {leader.image ? (
          <img
            src={leader.image}
            alt={`${leader.name} - ${leader.position}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center text-primary font-display font-bold text-3xl">
              {leader.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
            </div>
          </div>
        )}
      </div>
      <div className="p-6 text-center">
        <h3 className="font-display font-bold text-xl mb-1">{leader.name}</h3>
        <p className="text-primary font-medium">{leader.position}</p>
        {leader.county && (
          <p className="text-muted-foreground text-sm mt-2">{leader.county} County</p>
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

function LeadershipTable({ leaders, columns }: { leaders: any[], columns: string[] }) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden mt-8">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-muted/50 border-b border-border">
              {columns.map((column) => (
                <th key={column} className="text-left p-4 font-display font-semibold">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {leaders.map((leader, index) => (
              <tr key={leader.name} className={`border-b border-border ${index % 2 === 0 ? 'bg-muted/20' : ''}`}>
                <td className="p-4 font-medium">{leader.name}</td>
                <td className="p-4 text-primary">{leader.position}</td>
                {leader.county && <td className="p-4 text-muted-foreground">{leader.county} County</td>}
                {leader.category && <td className="p-4">
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                    leader.category === "Elected" ? "bg-primary/10 text-primary" :
                    leader.category === "Nominated" ? "bg-secondary/10 text-secondary" :
                    "bg-accent/10 text-accent-foreground"
                  }`}>
                    {leader.category}
                  </span>
                </td>}
              </tr>
            ))}
          </tbody>
        </table>
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
              <div className="max-w-6xl mx-auto"> {/* Increased max-width for better fit */}
                {/* Image Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {nationalLeaders.map((leader) => (
                    <LeaderCard key={leader.name} leader={leader} />
                  ))}
                </div>
                
                {/* Table for additional members */}
                {nationalLeadersTable.length > 0 && (
                  <>
                    <div className="mt-12 mb-6">
                      <h3 className="font-display text-2xl font-bold text-center mb-2">Additional National Executive Members</h3>
                    </div>
                    <LeadershipTable 
                      leaders={nationalLeadersTable} 
                      columns={["Official", "Designation", "Category"]}
                    />
                  </>
                )}
              </div>
            </TabsContent>

            <TabsContent value="elected">
              <div className="max-w-7xl mx-auto"> {/* Increased max-width to accommodate 4 columns */}
                {/* Image Cards - 4 columns layout */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Changed to grid-cols-4 */}
                  {electedOfficials.map((leader) => (
                    <LeaderCard key={`${leader.name}-${leader.position}`} leader={leader} />
                  ))}
                </div>
                
              </div>
            </TabsContent>

            <TabsContent value="county">
              <div className="max-w-6xl mx-auto"> {/* Increased max-width for better fit */}
                {/* Image Cards */}
              
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </Layout>
    </>
  );
}