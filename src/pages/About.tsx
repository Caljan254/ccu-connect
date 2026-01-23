import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Target, Eye, Heart, Users, Scale, Lightbulb, Globe, Shield } from "lucide-react";

const coreValues = [
  { icon: Heart, title: "Patriotism", description: "Unwavering love for our motherland Kenya and commitment to its development and prosperity." },
  { icon: Users, title: "Unity", description: "Bringing together all Kenyans regardless of tribe, religion, or social status." },
  { icon: Scale, title: "Justice", description: "Upholding the rule of law and ensuring equal rights for every citizen." },
  { icon: Shield, title: "Integrity", description: "Honest, transparent, and accountable leadership at all levels." },
  { icon: Globe, title: "Inclusivity", description: "Embracing diversity and ensuring no Kenyan is left behind." },
  { icon: Lightbulb, title: "Innovation", description: "Progressive, forward-thinking solutions to Kenya's challenges." },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About CCU - Who We Are | Chama Cha Uzalendo Kenya</title>
        <meta name="description" content="Learn about Chama Cha Uzalendo's vision, mission, core values, and political ideology. Discover who we are and what we stand for." />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="bg-primary pattern-overlay py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              About Chama Cha Uzalendo
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              A national political party committed to patriotic, democratic, and people-centered governance.
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="container-section">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center mb-8">Who We Are</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                <strong className="text-foreground">Chama Cha Uzalendo (CCU)</strong> is a registered national political party in Kenya, 
                founded on the principles of patriotism, democracy, and national unity. The name "Chama Cha Uzalendo" 
                translates to "Party of Patriotism" in Swahili, reflecting our core commitment to putting Kenya first.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                We believe that every Kenyan deserves equal opportunities to thrive, regardless of their ethnic 
                background, religious beliefs, gender, or social status. Our party provides a platform for 
                citizens to actively participate in shaping the future of our nation through democratic processes.
              </p>
              <p className="text-lg leading-relaxed">
                CCU has grown from a grassroots movement to a nationally recognized political force, with 
                representation across all 47 counties and elected leaders serving in various capacities 
                including Members of County Assembly (MCAs) and other public offices.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section id="vision" className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="bg-card rounded-2xl p-8 shadow-lg border-l-4 border-primary">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground text-lg">
                  A prosperous, just, and united Kenya where every citizen, regardless of their background, 
                  has equal access to opportunities and can achieve their full potential. We envision a 
                  nation free from corruption, tribalism, and inequality—a beacon of democracy in Africa.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-lg border-l-4 border-secondary">
                <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground text-lg">
                  To mobilize, educate, and empower Kenyans to participate actively in governance through 
                  patriotic leadership. We are committed to fielding competent and ethical candidates, 
                  advocating for policy reforms, and building a strong party structure that represents 
                  the aspirations of all Kenyans.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="container-section">
          <div className="text-center mb-12">
            <h2 className="section-title">Core Values</h2>
            <p className="section-subtitle mx-auto">
              The principles that guide our party and define our commitment to Kenya.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Political Ideology */}
        <section id="ideology" className="bg-primary pattern-overlay py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-8">
                Our Political Ideology
              </h2>
              <div className="text-primary-foreground/90 text-lg space-y-6 text-left">
                <p>
                  <strong className="text-accent">Social Democracy:</strong> CCU believes in a mixed economy that 
                  balances free market principles with strong social safety nets. We advocate for policies that 
                  reduce inequality, provide universal access to healthcare and education, and protect workers' rights.
                </p>
                <p>
                  <strong className="text-accent">Pan-Africanism:</strong> We are committed to African unity and 
                  cooperation. We support the African Union's agenda and believe in strengthening regional 
                  integration for the benefit of all Africans.
                </p>
                <p>
                  <strong className="text-accent">Devolution:</strong> We are strong proponents of Kenya's 
                  devolved system of government. We believe that bringing services and decision-making 
                  closer to the people is key to equitable development.
                </p>
                <p>
                  <strong className="text-accent">Environmental Stewardship:</strong> We recognize the urgent 
                  need to address climate change and environmental degradation. Our policies prioritize 
                  sustainable development and the protection of Kenya's natural heritage.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
