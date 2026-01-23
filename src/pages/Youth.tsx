import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Briefcase, GraduationCap, Heart, Globe, Accessibility } from "lucide-react";

// Import your youth image
import YouthImage from "@/assets/CCU_Youth.png";

const specialInterestGroups = [
  {
    icon: Users,
    name: "CCU Youth League",
    description: "Engaging young Kenyans (18-35) in active political participation and leadership development.",
    activities: ["Leadership training", "Youth rallies", "Campus outreach", "Sports events"],
  },
  {
    icon: Heart,
    name: "CCU Women's League",
    description: "Advancing gender equality and empowering women in political leadership.",
    activities: ["Women empowerment programs", "Political training", "Advocacy campaigns", "Mentorship"],
  },
  {
    icon: Briefcase,
    name: "Professionals Network",
    description: "Connecting professional members across various industries to contribute their expertise.",
    activities: ["Policy forums", "Networking events", "Technical advice", "Fundraising"],
  },
  {
    icon: GraduationCap,
    name: "Students Wing",
    description: "Organizing student supporters in universities and colleges across Kenya.",
    activities: ["Voter education", "Campus debates", "Leadership clubs", "Internships"],
  },
  {
    icon: Globe,
    name: "Diaspora Chapter",
    description: "Engaging Kenyans abroad in national development and party activities.",
    activities: ["Online meetings", "Fundraising", "Advocacy", "Skills transfer"],
  },
  {
    icon: Accessibility,
    name: "PWD Committee",
    description: "Ensuring full inclusion and participation of persons with disabilities.",
    activities: ["Accessibility advocacy", "Inclusive events", "Policy input", "Representation"],
  },
];

export default function Youth() {
  return (
    <>
      <Helmet>
        <title>Youth & Special Interest Groups | Chama Cha Uzalendo Kenya</title>
        <meta name="description" content="CCU's Youth League and Special Interest Groups - empowering young Kenyans, women, professionals, students, and diaspora in political participation." />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="bg-primary pattern-overlay py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Youth & Special Interest Groups
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Building an inclusive party where every voice is heard and every Kenyan can contribute.
            </p>
          </div>
        </section>

        {/* Youth Focus */}
        <section className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Youth Empowerment</span>
              <h2 className="section-title mt-2">The Future Belongs to the Youth</h2>
              <p className="text-muted-foreground text-lg mb-6">
                CCU recognizes that over 75% of Kenya's population is under 35 years old. We are committed 
                to empowering young people to take their rightful place in leadership and decision-making.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">✓</span>
                  <span>Youth quota in all party organs</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">✓</span>
                  <span>Leadership training and mentorship programs</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">✓</span>
                  <span>Support for youth candidates in elections</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">✓</span>
                  <span>Internship opportunities at party offices</span>
                </li>
              </ul>
              <Button variant="hero" asChild>
                <Link to="/membership">Join CCU Youth League</Link>
              </Button>
            </div>
            <div className="rounded-2xl aspect-square overflow-hidden shadow-lg">
              <img
                src={YouthImage}
                alt="CCU Youth Empowerment - Young Kenyans participating in leadership activities"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* Special Interest Groups */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title">Special Interest Groups</h2>
              <p className="section-subtitle mx-auto">
                CCU provides platforms for various demographics to organize and participate meaningfully.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {specialInterestGroups.map((group) => (
                <div
                  key={group.name}
                  className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <group.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2">{group.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{group.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.activities.map((activity) => (
                      <span
                        key={activity}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}