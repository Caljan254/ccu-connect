import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { LeadershipPreview } from "@/components/home/LeadershipPreview";
import { CTASection } from "@/components/home/CTASection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Chama Cha Uzalendo (CCU) - Patriotism. Democracy. Unity. | Kenya</title>
        <meta
          name="description"
          content="Chama Cha Uzalendo (CCU) is Kenya's patriotic political party committed to democracy, unity, and inclusive governance. Join the movement for a better Kenya."
        />
        <meta name="keywords" content="CCU, Chama Cha Uzalendo, Kenya politics, political party Kenya, patriotism, democracy, unity" />
        <meta property="og:title" content="Chama Cha Uzalendo (CCU) - Patriotism. Democracy. Unity." />
        <meta property="og:description" content="Join Kenya's patriotic movement for democracy, unity, and inclusive governance." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ccuparty.co.ke" />
      </Helmet>
      <Layout>
        <HeroSection />
        <AboutPreview />
        <LeadershipPreview />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
