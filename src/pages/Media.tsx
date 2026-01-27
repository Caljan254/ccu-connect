// src/pages/Media.tsx
"use client";

import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Download, FileText, Image, Video, File, ArrowRight, Megaphone, BookOpen, Calculator, FileArchive } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Add a helper function for file paths
const getFilePath = (fileName: string): string => {
  // Always use relative paths for better compatibility
  return `uploads/${fileName}`;
};

const mediaCategories = [
  {
    id: "branding",
    icon: Image,
    title: "Party Logo & Branding",
    description: "Official CCU logos, colors, and branding guidelines",
    subcategories: [
      {
        id: "logos",
        icon: Image,
        title: "Logos",
        description: "Official party logos in various formats"
      },
      {
        id: "brand-guidelines",
        icon: FileText,
        title: "Brand Guidelines",
        description: "Brand usage and color guidelines"
      }
    ],
    items: [
      { name: "Party Logo ", type: "image", category: "branding", subcategory: "logos", fileName: "CCU_Logo.png" },
      { name: "Party Flag ", type: "image", category: "branding", subcategory: "Flag", fileName: "CCU_Flag.png" },
      { name: "CCU Logo landscape", type: "pdf", category: "branding", subcategory: "landscape", fileName: "logo_landscape.png" },
      { name: "Brand Guidelines", type: "pdf", category: "branding", subcategory: "brand-guidelines", fileName: "CCU_Brand_Guidelines.pdf" },
    ],
  },
  {
    id: "documents",
    icon: FileText,
    title: "Party Documents",
    description: "Constitution, manifesto, and policy documents",
    // Added subcategories for documents to match Downloads.tsx
    subcategories: [
      {
        id: "financial-reports",
        icon: Calculator,
        title: "Financial Reports",
        description: "Annual financial statements and reports"
      },
      {
        id: "notices",
        icon: Megaphone,
        title: "Meeting Notices",
        description: "NEC and PMC meeting notices"
      },
      {
        id: "constitution",
        icon: BookOpen,
        title: "Constitution & Manifesto",
        description: "Party constitution and election manifesto"
      },
      {
        id: "forms",
        icon: FileArchive,
        title: "Forms & Applications",
        description: "Membership forms and nomination applications"
      }
    ],
    items: [
      { name: "Party Constitution 2024", type: "pdf", category: "documents", subcategory: "constitution", fileName: "CCU CONSTITUTION SEPT. 2020.pdf" },
      { name: "Financial Statements", type: "pdf", category: "documents", subcategory: "financial-reports", fileName: "CCU_ANNUAL_FINANCIAL_REPORTS_30_JUNE_2024.pdf" },
      { name: "Policy Framework", type: "pdf", category: "documents", subcategory: "constitution", fileName: "CCU STRATEGIC PLAN.pdf" },
      { name: "Notices", type: "pdf", category: "documents", subcategory: "notices", fileName: "NOTICE-OF-A-NEC-MEETING-12-03-2024-3.pdf" },
      { name: "Election Manifesto", type: "pdf", category: "documents", subcategory: "constitution", fileName: "CCU MANIFESTO.pdf" },
      { name: "Membership Form", type: "pdf", category: "documents", subcategory: "forms", fileName: "CCU Member Registration Form.pdf" },
      { name: "Strategic Plan", type: "pdf", category: "documents", subcategory: "constitution", fileName: "CCU STRATEGIC PLAN.pdf" },
      { name: "Code of Conduct", type: "pdf", category: "documents", subcategory: "constitution", fileName: "Electoral Code of Conduct.pdf" },
      { name: "Disciplinary Procedure", type: "pdf", category: "documents", subcategory: "constitution", fileName: "GUIDELINES FOR THE DISCIPLINARY PROCESS OF CHAMA CHA UZALENDO (CCU) PARTY DISCIPLINARY COMMITTEE.pdf" },
      { name: "Pledge of Commitment", type: "pdf", category: "documents", subcategory: "constitution", fileName: "CCU Pledge of Commitment.pdf" },
    ],
  },
  {
    id: "photos",
    icon: Image,
    title: "Photos & Graphics",
    description: "Official photos, banners, and campaign materials",
    subcategories: [
      {
        id: "photos",
        icon: Image,
        title: "Photos",
        description: "Official leadership and event photos"
      },
      {
        id: "graphics",
        icon: Image,
        title: "Graphics",
        description: "Campaign materials and banners"
      }
    ],
    items: [
      { name: "Leadership Photos", type: "zip", category: "photos", subcategory: "photos", fileName: "leadership_photos.zip" },
      { name: "Campaign Posters", type: "zip", category: "photos", subcategory: "graphics", fileName: "campaign_posters.zip" },
      { name: "Social Media Kit", type: "zip", category: "photos", subcategory: "graphics", fileName: "social_media_kit.zip" },
      { name: "Event Banners", type: "zip", category: "photos", subcategory: "graphics", fileName: "event_banners.zip" },
    ],
  },
  {
    id: "videos",
    icon: Video,
    title: "Videos & Audio",
    description: "Campaign videos, speeches, and audio files",
    subcategories: [
      {
        id: "videos",
        icon: Video,
        title: "Videos",
        description: "Campaign and promotional videos"
      },
      {
        id: "audio",
        icon: Video,
        title: "Audio",
        description: "Speeches and party anthem"
      }
    ],
    items: [
      { name: "Party Anthem", type: "audio", category: "videos", subcategory: "audio", fileName: "party_anthem.mp3" },
      { name: "2024 Campaign Video", type: "video", category: "videos", subcategory: "videos", fileName: "CCU Website Banners.mp4" },
      { name: "Leadership Speeches", type: "zip", category: "videos", subcategory: "audio", fileName: "leadership_speeches.zip" },
    ],
  },
];

export default function Media() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string, subcategoryId?: string) => {
    if (subcategoryId) {
      navigate(`/downloads?category=${categoryId}&subcategory=${subcategoryId}`);
    } else {
      navigate(`/downloads?category=${categoryId}`);
    }
  };

  const handleItemClick = (categoryId: string, itemName: string, subcategoryId?: string, fileName?: string) => {
    const params = new URLSearchParams();
    params.append('category', categoryId);
    if (subcategoryId) params.append('subcategory', subcategoryId);
    if (itemName) params.append('highlight', encodeURIComponent(itemName));
    if (fileName) params.append('filename', encodeURIComponent(fileName));

    navigate(`/downloads?${params.toString()}`);
  };

  const handleAllDocumentsClick = () => {
    navigate('/downloads');
  };

  const handleMockDownload = (itemName: string, fileName?: string) => {
    if (fileName) {
      const filePath = getFilePath(fileName);
      console.log(`Mock download triggered for: ${itemName} at path: ${filePath}`);
    }
    alert(`Downloading: ${itemName}\n\nNote: This is a demo. In a real application, this would download the actual file.`);
  };

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
            <div className="mt-8">
              <Button
                size="lg"
                variant="secondary"
                onClick={handleAllDocumentsClick}
              >
                <FileText className="mr-2 w-5 h-5" />
                View All Documents
              </Button>
            </div>
          </div>
        </section>

        {/* Media Categories */}
        <section className="container-section">
          <div className="space-y-12">
            {mediaCategories.map((category) => (
              <div key={category.id} className="group">
                {/* Category Header - Clickable */}
                <div
                  className="flex items-center gap-4 mb-6 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => handleCategoryClick(category.id)}
                  title={`View all ${category.title}`}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h2 className="font-display text-2xl font-bold group-hover:text-primary transition-colors">
                        {category.title}
                      </h2>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                {/* Subcategories */}
                {category.subcategories && category.subcategories.length > 0 && (
                  <div className="mb-8">
                    <h3 className="font-display text-lg font-semibold mb-4 text-muted-foreground">
                      Browse by Type:
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      {category.subcategories.map((subcategory) => (
                        <div
                          key={subcategory.id}
                          className="bg-muted/50 border border-border rounded-xl p-4 hover:border-primary hover:bg-muted transition-all duration-200 cursor-pointer"
                          onClick={() => handleCategoryClick(category.id, subcategory.id)}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                              <subcategory.icon className="w-4 h-4 text-primary" />
                            </div>
                            <h4 className="font-medium">{subcategory.title}</h4>
                          </div>
                          <p className="text-sm text-muted-foreground">{subcategory.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Category Items */}
                <div className="grid md:grid-cols-2 gap-4">
                  {category.items.map((item) => (
                    <div
                      key={`${item.name}-${item.subcategory}`}
                      className="bg-card border border-border rounded-xl p-4 flex items-center justify-between hover:border-primary/50 hover:shadow-md transition-all duration-200 cursor-pointer group/item"
                      onClick={() => handleItemClick(category.id, item.name, item.subcategory, item.fileName)}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover/item:bg-primary/10 transition-colors">
                          <File className="w-5 h-5 text-muted-foreground group-hover/item:text-primary transition-colors" />
                        </div>
                        <div>
                          <p className="font-medium group-hover/item:text-primary transition-colors">
                            {item.name}
                          </p>
                          {item.fileName && (
                            <p className="text-xs text-muted-foreground mt-1">
                              File: {item.fileName}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="opacity-0 group-hover/item:opacity-100 transition-opacity"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleMockDownload(item.name, item.fileName);
                          }}
                          title={`Download ${item.name}`}
                        >
                          <Download className="w-5 h-5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="opacity-0 group-hover/item:opacity-100 transition-opacity"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleItemClick(category.id, item.name, item.subcategory, item.fileName);
                          }}
                          title={`View details for ${item.name}`}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* View All Button for this category */}
                <div className="mt-4 text-right">
                  <Button
                    variant="link"
                    onClick={() => handleCategoryClick(category.id)}
                    className="text-primary hover:text-primary/80"
                  >
                    View all {category.title} →
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Access Section */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaCategories.map((category) => (
              <div
                key={`quick-${category.id}`}
                className="bg-muted border border-border rounded-xl p-6 text-center hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer group/quick"
                onClick={() => handleCategoryClick(category.id)}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover/quick:bg-primary/20 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold mb-2 group-hover/quick:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {category.items.length} files available
                </p>
                <span className="inline-flex items-center text-sm text-primary font-medium">
                  Quick access
                  <ArrowRight className="ml-1 w-4 h-4 group-hover/quick:translate-x-1 transition-transform" />
                </span>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}