import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Download, FileText, Image, Video, File } from "lucide-react";

const mediaCategories = [
  {
    icon: Image,
    title: "Party Logo & Branding",
    description: "Official CCU logos, colors, and branding guidelines",
    items: [
      { name: "CCU Logo (PNG)", size: "2.4 MB", type: "image" },
      { name: "CCU Logo (SVG)", size: "124 KB", type: "image" },
      { name: "Brand Guidelines", size: "5.2 MB", type: "pdf" },
      { name: "Party Colors", size: "1.1 MB", type: "pdf" },
    ],
  },
  {
    icon: FileText,
    title: "Party Documents",
    description: "Constitution, manifesto, and policy documents",
    items: [
      { name: "Party Constitution 2024", size: "3.8 MB", type: "pdf" },
      { name: "Election Manifesto", size: "12.4 MB", type: "pdf" },
      { name: "Policy Framework", size: "2.1 MB", type: "pdf" },
      { name: "Membership Form", size: "245 KB", type: "pdf" },
    ],
  },
  {
    icon: Image,
    title: "Photos & Graphics",
    description: "Official photos, banners, and campaign materials",
    items: [
      { name: "Leadership Photos", size: "45 MB", type: "zip" },
      { name: "Campaign Posters", size: "28 MB", type: "zip" },
      { name: "Social Media Kit", size: "15 MB", type: "zip" },
      { name: "Event Banners", size: "32 MB", type: "zip" },
    ],
  },
  {
    icon: Video,
    title: "Videos & Audio",
    description: "Campaign videos, speeches, and audio files",
    items: [
      { name: "Party Anthem", size: "8.5 MB", type: "audio" },
      { name: "2024 Campaign Video", size: "125 MB", type: "video" },
      { name: "Leadership Speeches", size: "340 MB", type: "zip" },
    ],
  },
];

export default function Media() {
  return (
    <>
      <Helmet>
        <title>Media Downloads | Chama Cha Uzalendo Kenya</title>
        <meta name="description" content="Download CCU media resources - logos, branding materials, party documents, photos, and campaign materials." />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="bg-primary pattern-overlay py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Media Downloads
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Official CCU branding, documents, and media resources for members and the press.
            </p>
          </div>
        </section>

        {/* Media Categories */}
        <section className="container-section">
          <div className="space-y-12">
            {mediaCategories.map((category) => (
              <div key={category.title}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold">{category.title}</h2>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="bg-card border border-border rounded-xl p-4 flex items-center justify-between hover:border-primary/30 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                          <File className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">{item.size}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Download className="w-5 h-5" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Usage Guidelines */}
          <div className="mt-16 bg-muted rounded-2xl p-8">
            <h3 className="font-display text-xl font-bold mb-4">Usage Guidelines</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• All materials are property of Chama Cha Uzalendo and should be used appropriately.</li>
              <li>• Do not modify the party logo or branding without authorization.</li>
              <li>• Media organizations may use these materials for news coverage with proper attribution.</li>
              <li>• For commercial use or special requests, please contact info@ccuparty.co.ke.</li>
            </ul>
          </div>
        </section>
      </Layout>
    </>
  );
}
