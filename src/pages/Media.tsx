// src/pages/Media.tsx
"use client";

import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Download, FileText, Image, Video, File, ArrowRight, Megaphone, BookOpen, Calculator, FileArchive, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Add preview modal component
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
      {
        name: "Party Logo",
        type: "image",
        category: "branding",
        subcategory: "logos",
        fileUrl: "/uploads/CCU_Logo.png",
        previewUrl: "/uploads/CCU_Logo.png",
        fileSize: "2.4 MB"
      },
      {
        name: "Party Flag",
        type: "image",
        category: "branding",
        subcategory: "Flag",
        fileUrl: "/uploads/CCU_Flag.png",
        previewUrl: "/uploads/CCU_Flag.png",
        fileSize: "2.4 MB"
      },
      {
        name: "CCU Logo landscape",
        type: "image",
        category: "branding",
        subcategory: "landscape",
        fileUrl: "/uploads/logo_landscape.png",
        previewUrl: "/uploads/logo_landscape.png",
        fileSize: "2.4 MB"
      },
      {
        name: "Brand Guidelines",
        type: "pdf",
        category: "branding",
        subcategory: "brand-guidelines",
        fileUrl: "/uploads/CCU_Brand_Guidelines.pdf",
        previewUrl: "/uploads/CCU_Brand_Guidelines.pdf",
        fileSize: "5.6 MB"
      },
    ],
  },
  {
    id: "documents",
    icon: FileText,
    title: "Party Documents",
    description: "Constitution, manifesto, and policy documents",
    items: [
      {
        name: "Party Constitution 2024",
        type: "pdf",
        category: "documents",
        subcategory: "constitution",
        fileUrl: "/uploads/CCU CONSTITUTION SEPT. 2020.pdf",
        previewUrl: "/uploads/CCU CONSTITUTION SEPT. 2020.pdf",
        fileSize: "3.5 MB"
      },
      {
        name: "Financial Statements",
        type: "pdf",
        category: "documents",
        subcategory: "financial-reports",
        fileUrl: "/uploads/CCU_ANNUAL_FINANCIAL_REPORTS_30_JUNE_2024.pdf",
        previewUrl: "/uploads/CCU_ANNUAL_FINANCIAL_REPORTS_30_JUNE_2024.pdf",
        fileSize: "3.8 MB"
      },
      {
        name: "Policy Framework",
        type: "pdf",
        category: "documents",
        subcategory: "constitution",
        fileUrl: "/uploads/CCU STRATEGIC PLAN.pdf",
        previewUrl: "/uploads/CCU STRATEGIC PLAN.pdf",
        fileSize: "3.5 MB"
      },
      {
        name: "Notices",
        type: "pdf",
        category: "documents",
        subcategory: "notices",
        fileUrl: "/uploads/NOTICE-OF-A-NEC-MEETING-10-11-2023.pdf",
        previewUrl: "/uploads/NOTICE-OF-A-NEC-MEETING-10-11-2023.pdf",
        fileSize: "1.5 MB"
      },
      {
        name: "Election Manifesto",
        type: "pdf",
        category: "documents",
        subcategory: "constitution",
        fileUrl: "/uploads/CCU MANIFESTO.pdf",
        previewUrl: "/uploads/CCU MANIFESTO.pdf",
        fileSize: "3.5 MB"
      },
      {
        name: "Membership Form",
        type: "pdf",
        category: "documents",
        subcategory: "forms",
        fileUrl: "/uploads/CCU_Membership_Form.pdf",
        previewUrl: "/uploads/CCU_Membership_Form.pdf",
        fileSize: "1.8 MB"
      },
      {
        name: "Strategic Plan",
        type: "pdf",
        category: "documents",
        subcategory: "constitution",
        fileUrl: "/uploads/CCU STRATEGIC PLAN.pdf",
        previewUrl: "/uploads/CCU STRATEGIC PLAN.pdf",
        fileSize: "3.5 MB"
      },
      {
        name: "Code of Conduct",
        type: "pdf",
        category: "documents",
        subcategory: "constitution",
        fileUrl: "/uploads/Electoral Code of Conduct.pdf",
        previewUrl: "/uploads/Electoral Code of Conduct.pdf",
        fileSize: "3.5 MB"
      },
      {
        name: "Disciplinary Procedure",
        type: "pdf",
        category: "documents",
        subcategory: "constitution",
        fileUrl: "/uploads/GUIDELINES FOR THE DISCIPLINARY PROCESS OF CHAMA CHA UZALENDO (CCU) PARTY DISCIPLINARY COMMITTEE.pdf",
        previewUrl: "/uploads/GUIDELINES FOR THE DISCIPLINARY PROCESS OF CHAMA CHA UZALENDO (CCU) PARTY DISCIPLINARY COMMITTEE.pdf",
        fileSize: "3.5 MB"
      },
      {
        name: "Pledge of Commitment",
        type: "pdf",
        category: "documents",
        subcategory: "constitution",
        fileUrl: "/uploads/CCU Pledge of Commitment.pdf",
        previewUrl: "/uploads/CCU Pledge of Commitment.pdf",
        fileSize: "3.5 MB"
      },
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
      {
        name: "Leadership Photos",
        type: "zip",
        category: "photos",
        subcategory: "photos",
        fileUrl: "/uploads/leadership_photos.zip",
        previewUrl: "/uploads/leadership_preview.jpg",
        fileSize: "25.4 MB"
      },
      {
        name: "Campaign Posters",
        type: "zip",
        category: "photos",
        subcategory: "graphics",
        fileUrl: "/uploads/campaign_posters.zip",
        previewUrl: "/uploads/campaign_preview.jpg",
        fileSize: "18.2 MB"
      },
      {
        name: "Social Media Kit",
        type: "zip",
        category: "photos",
        subcategory: "graphics",
        fileUrl: "/uploads/social_media_kit.zip",
        previewUrl: "/uploads/social_media_preview.jpg",
        fileSize: "15.7 MB"
      },
      {
        name: "Event Banners",
        type: "zip",
        category: "photos",
        subcategory: "graphics",
        fileUrl: "/uploads/event_banners.zip",
        previewUrl: "/uploads/banner_preview.jpg",
        fileSize: "22.1 MB"
      },
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
      {
        name: "Party Anthem",
        type: "audio",
        category: "videos",
        subcategory: "audio",
        fileUrl: "/uploads/party_anthem.mp3",
        previewUrl: "/uploads/party_anthem.mp3",
        fileSize: "5.2 MB"
      },
      {
        name: "2024 Campaign Video",
        type: "video",
        category: "videos",
        subcategory: "videos",
        fileUrl: "/uploads/campaign_video_2024.mp4",
        previewUrl: "/uploads/campaign_video_2024.mp4",
        fileSize: "125.8 MB"
      },
      {
        name: "Leadership Speeches",
        type: "zip",
        category: "videos",
        subcategory: "audio",
        fileUrl: "/uploads/leadership_speeches.zip",
        previewUrl: "/uploads/speeches_preview.jpg",
        fileSize: "45.3 MB"
      },
    ],
  },
];

export default function Media() {
  const navigate = useNavigate();
  const [previewItem, setPreviewItem] = useState<any>(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleCategoryClick = (categoryId: string, subcategoryId?: string) => {
    if (subcategoryId) {
      navigate(`/downloads?category=${categoryId}&subcategory=${subcategoryId}`);
    } else {
      navigate(`/downloads?category=${categoryId}`);
    }
  };

  const handleItemClick = (categoryId: string, itemName: string, subcategoryId?: string) => {
    if (subcategoryId) {
      navigate(`/downloads?category=${categoryId}&subcategory=${subcategoryId}&highlight=${encodeURIComponent(itemName)}`);
    } else {
      navigate(`/downloads?category=${categoryId}&highlight=${encodeURIComponent(itemName)}`);
    }
  };

  const handleAllDocumentsClick = () => {
    navigate('/downloads');
  };

  const handlePreview = (item: any, e: React.MouseEvent) => {
    e.stopPropagation();
    setPreviewItem(item);
    setShowPreview(true);
  };

  const handleMockDownload = (item: any, e: React.MouseEvent) => {
    e.stopPropagation();
    alert(`Downloading: ${item.name}\n\nNote: This is a demo. In a real application, this would download the actual file.`);
  };

  const handleDownloadFromPreview = () => {
    if (previewItem) {
      alert(`Downloading: ${previewItem.name}\n\nNote: This is a demo. In a real application, this would download the actual file.`);
      setShowPreview(false);
    }
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText className="w-5 h-5 text-red-500" />;
      case 'image':
        return <Image className="w-5 h-5 text-blue-500" />;
      case 'video':
        return <Video className="w-5 h-5 text-purple-500" />;
      case 'audio':
        return <Video className="w-5 h-5 text-green-500" />;
      case 'zip':
        return <FileArchive className="w-5 h-5 text-yellow-500" />;
      default:
        return <File className="w-5 h-5 text-gray-500" />;
    }
  };

  const isPreviewable = (type: string) => {
    return ['image', 'pdf', 'video', 'audio'].includes(type);
  };

  return (
    <>
      <Helmet>
        <title>Media Downloads | Chama Cha Uzalendo Kenya</title>
        <meta name="description" content="Download CCU media resources - logos, branding materials, party documents, photos, and campaign materials." />
      </Helmet>
      <Layout>
        {/* Preview Modal */}
        <Dialog open={showPreview} onOpenChange={setShowPreview}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl">{previewItem?.name}</DialogTitle>
              <DialogDescription>
                Preview before download • {previewItem?.fileSize}
              </DialogDescription>
            </DialogHeader>

            <div className="py-4">
              {previewItem?.type === 'image' && (
                <div className="flex justify-center">
                  <img
                    src={previewItem?.previewUrl}
                    alt={previewItem?.name}
                    className="max-w-full max-h-[60vh] object-contain rounded-lg"
                  />
                </div>
              )}

              {previewItem?.type === 'pdf' && (
                <div className="h-[60vh] border rounded-lg overflow-hidden">
                  <iframe
                    src={previewItem?.previewUrl}
                    title={previewItem?.name}
                    className="w-full h-full"
                  />
                  <p className="text-sm text-muted-foreground text-center p-2">
                    PDF preview. Some features may be limited. Download for full functionality.
                  </p>
                </div>
              )}

              {previewItem?.type === 'video' && (
                <div className="flex justify-center">
                  <video
                    controls
                    className="max-w-full max-h-[60vh] rounded-lg"
                  >
                    <source src={previewItem?.previewUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}

              {previewItem?.type === 'audio' && (
                <div className="flex justify-center p-8">
                  <div className="w-full max-w-md">
                    <div className="text-center mb-4">
                      <FileText className="w-12 h-12 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Audio File Preview</p>
                    </div>
                    <audio controls className="w-full">
                      <source src={previewItem?.previewUrl} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
              )}

              {previewItem?.type === 'zip' && (
                <div className="text-center p-8">
                  <FileArchive className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Archive File</h3>
                  <p className="text-muted-foreground mb-4">
                    This is a compressed archive containing multiple files.
                    Download to extract and view contents.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    File size: {previewItem?.fileSize}
                  </p>
                </div>
              )}
            </div>

            <DialogFooter className="flex flex-col sm:flex-row gap-2">
              <Button
                variant="outline"
                onClick={() => setShowPreview(false)}
              >
                Cancel
              </Button>
              <Button
                onClick={handleDownloadFromPreview}
                className="flex-1"
              >
                <Download className="mr-2 w-4 h-4" />
                Download Now
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

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

                {/* Category Items */}
                <div className="grid md:grid-cols-2 gap-4">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="bg-card border border-border rounded-xl p-4 flex items-center justify-between hover:border-primary/50 hover:shadow-md transition-all duration-200 cursor-pointer group/item"
                      onClick={() => handleItemClick(category.id, item.name, item.subcategory)}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover/item:bg-primary/10 transition-colors">
                          {getFileIcon(item.type)}
                        </div>
                        <div>
                          <p className="font-medium group-hover/item:text-primary transition-colors">
                            {item.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {item.fileSize} • {item.type.toUpperCase()}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {isPreviewable(item.type) && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="opacity-0 group-hover/item:opacity-100 transition-opacity hover:bg-blue-500/10 hover:text-blue-500"
                            onClick={(e) => handlePreview(item, e)}
                            title={`Preview ${item.name}`}
                          >
                            <Eye className="w-5 h-5" />
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="opacity-0 group-hover/item:opacity-100 transition-opacity"
                          onClick={(e) => handleMockDownload(item, e)}
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
                            handleItemClick(category.id, item.name, item.subcategory);
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

          {/* Usage Guidelines */}
          <div className="mt-16 bg-muted rounded-2xl p-8">
            <h3 className="font-display text-xl font-bold mb-4">Usage Guidelines</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• All materials are property of Chama Cha Uzalendo and should be used appropriately.</li>
              <li>• Do not modify the party logo or branding without authorization.</li>
              <li>• Media organizations may use these materials for news coverage with proper attribution.</li>
              <li>• For commercial use or special requests, please contact info@ccuparty.co.ke.</li>
            </ul>
            <div className="mt-4 p-4 bg-primary/5 rounded-lg">
              <p className="text-sm font-medium text-primary">Preview Feature Available!</p>
              <p className="text-sm text-muted-foreground">
                You can now preview images and documents before downloading. Look for the <Eye className="w-4 h-4 inline" /> icon.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}