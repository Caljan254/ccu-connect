// src/pages/Downloads.tsx
"use client";

import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import {
  Download,
  FileText,
  Image as ImageIcon,
  Video,
  File,
  Filter,
  Calendar,
  FileType,
  ArrowLeft,
  Star,
  Search,
  Calculator,
  Megaphone,
  BookOpen,
  FileArchive,
  RefreshCw,
  Eye,
  X,
  Maximize2,
  Minimize2,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// Media Categories with subcategories
const mediaCategories = [
  {
    id: "branding",
    icon: ImageIcon,
    title: "Party Logo & Branding",
    description: "Official CCU logos, colors, and branding guidelines",
  },
  {
    id: "documents",
    icon: FileText,
    title: "Party Documents",
    description: "Constitution, manifesto, and policy documents",
  },
  {
    id: "photos",
    icon: ImageIcon,
    title: "Photos & Graphics",
    description: "Official photos, banners, and campaign materials",
  },
  {
    id: "videos",
    icon: Video,
    title: "Videos & Audio",
    description: "Campaign videos, speeches, and audio files",
  },
];

// Subcategories for documents
const documentSubcategories = [
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
];

// Photos & Graphics subcategories
const photosSubcategories = [
  {
    id: "leadership-photos",
    icon: ImageIcon,
    title: "Leadership Photos",
    description: "Official photos of CCU leadership"
  },
  {
    id: "campaign-materials",
    icon: ImageIcon,
    title: "Campaign Materials",
    description: "Posters, banners, and campaign graphics"
  },
  {
    id: "social-media",
    icon: ImageIcon,
    title: "Social Media Graphics",
    description: "Ready-to-use graphics for social media"
  },
  {
    id: "event-photos",
    icon: ImageIcon,
    title: "Event Photos",
    description: "Photos from party events and rallies"
  }
];

// Documents data with actual file paths and subcategories
const mediaDocuments = [
  // Branding Documents
  {
    id: "brand-1",
    title: "Party Logo (PNG)",
    description: "Official party logo in PNG format",
    date: "2024-01-15",
    fileUrl: "/uploads/ccu-logo.png",
    fileName: "ccu-logo.png",
    fileSize: "2.4 MB",
    category: "branding",
    subcategory: "logos"
  },
  {
    id: "brand-2",
    title: "Logo Landscape",
    description: "Official party logo in landscape orientation",
    date: "2024-01-15",
    fileUrl: "/uploads/logo-landscape.png",
    fileName: "logo-landscape.png",
    fileSize: "2.4 MB",
    category: "branding",
    subcategory: "landscape"
  },
  {
    id: "brand-3",
    title: "Brand Guidelines",
    description: "Complete brand style guide and usage rules",
    date: "2024-01-15",
    fileUrl: "/uploads/brand-guide.png",
    fileName: "brand-guide.png",
    fileSize: "5.6 MB",
    category: "branding",
    subcategory: "Brand guidelines"
  },
  {
    id: "brand-4",
    title: "Party Flag (PNG)",
    description: "Official party flag in PNG format",
    date: "2024-01-15",
    fileUrl: "/uploads/ccu-flag.png",
    fileName: "ccu-flag.png",
    fileSize: "2.4 MB",
    category: "branding",
    subcategory: "Flag"
  },

  // Photos & Graphics - Leadership Photos
  {
    id: "photo-1",
    title: "Leadership Portrait - Chairman",
    description: "Official portrait of the Party Chairman",
    date: "2024-03-15",
    fileUrl: "/uploads/leadership/chairman_portrait.jpg",
    fileName: "chairman_portrait.jpg",
    fileSize: "3.2 MB",
    category: "photos",
    subcategory: "leadership-photos"
  },
  {
    id: "photo-2",
    title: "Leadership Team Photo",
    description: "Group photo of the National Executive Committee",
    date: "2024-02-20",
    fileUrl: "/uploads/leadership/nec_group_photo.jpg",
    fileName: "nec_group_photo.jpg",
    fileSize: "4.1 MB",
    category: "photos",
    subcategory: "leadership-photos"
  },
  {
    id: "photo-3",
    title: "Secretary General Official Photo",
    description: "Official photo of the Secretary General",
    date: "2024-03-10",
    fileUrl: "/uploads/leadership/secretary_general.jpg",
    fileName: "secretary_general.jpg",
    fileSize: "2.8 MB",
    category: "photos",
    subcategory: "leadership-photos"
  },
  {
    id: "photo-4",
    title: "Treasurer Official Portrait",
    description: "Official portrait of the National Treasurer",
    date: "2024-03-12",
    fileUrl: "/uploads/leadership/treasurer_portrait.jpg",
    fileName: "treasurer_portrait.jpg",
    fileSize: "3.1 MB",
    category: "photos",
    subcategory: "leadership-photos"
  },

  // Photos & Graphics
  {
    id: "graphic-1",
    title: "Campaign Poster 2024",
    description: "Official campaign poster design for 2024 elections",
    date: "2024-01-20",
    fileUrl: "/uploads/campaign/campaign_poster_2024.jpg",
    fileName: "campaign_poster_2024.jpg",
    fileSize: "5.2 MB",
    category: "photos",
    subcategory: "campaign-materials"
  },
  {
    id: "graphic-2",
    title: "Election Banner Design",
    description: "Banner design for election campaigns",
    date: "2024-01-25",
    fileUrl: "/uploads/ccu-website-banner.png",
    fileName: "ccu-website-banner.png",
    fileSize: "4.8 MB",
    category: "photos",
    subcategory: "campaign-materials"
  },
  {
    id: "graphic-3",
    title: "Campaign Flyer Template",
    description: "Printable campaign flyer template",
    date: "2024-02-10",
    fileUrl: "/uploads/campaign/campaign_flyer_template.jpg",
    fileName: "campaign_flyer_template.jpg",
    fileSize: "3.5 MB",
    category: "photos",
    subcategory: "campaign-materials"
  },
  {
    id: "graphic-4",
    title: "Car Sticker Design",
    description: "Design for vehicle campaign stickers",
    date: "2024-02-15",
    fileUrl: "/uploads/campaign/car_sticker_design.jpg",
    fileName: "car_sticker_design.jpg",
    fileSize: "2.9 MB",
    category: "photos",
    subcategory: "campaign-materials"
  },

  // Photos & Graphics - Social Media
  {
    id: "social-1",
    title: "Facebook Cover Photo",
    description: "Official CCU cover photo for Facebook",
    date: "2024-01-30",
    fileUrl: "/uploads/facebook-cover-2025.png",
    fileName: "facebook-cover-2025.png",
    fileSize: "2.7 MB",
    category: "photos",
    subcategory: "social-media"
  },
  {
    id: "social-2",
    title: "Twitter Header Image",
    description: "Header image for Twitter/X profile",
    date: "2024-01-30",
    fileUrl: "/uploads/social/twitter_header.jpg",
    fileName: "twitter_header.jpg",
    fileSize: "2.5 MB",
    category: "photos",
    subcategory: "social-media"
  },
  {
    id: "social-3",
    title: "Instagram Story Template",
    description: "Template for Instagram stories",
    date: "2024-02-05",
    fileUrl: "/uploads/social/instagram_story_template.jpg",
    fileName: "instagram_story_template.jpg",
    fileSize: "3.3 MB",
    category: "photos",
    subcategory: "social-media"
  },
  {
    id: "social-4",
    title: "WhatsApp Status Graphics",
    description: "Graphics for WhatsApp status updates",
    date: "2024-02-08",
    fileUrl: "/uploads/social/whatsapp_status_graphics.jpg",
    fileName: "whatsapp_status_graphics.jpg",
    fileSize: "2.4 MB",
    category: "photos",
    subcategory: "social-media"
  },

  // Photos & Graphics - Event Photos
  {
    id: "event-1",
    title: "Launch Event Gallery",
    description: "Photos from the party launch event",
    date: "2024-01-10",
    fileUrl: "/uploads/events/launch_event_1.jpg",
    fileName: "launch_event_1.jpg",
    fileSize: "4.5 MB",
    category: "photos",
    subcategory: "event-photos"
  },
  {
    id: "event-2",
    title: "Rally Photos - Nairobi",
    description: "Photos from the Nairobi campaign rally",
    date: "2024-02-28",
    fileUrl: "/uploads/events/nairobi_rally_1.jpg",
    fileName: "nairobi_rally_1.jpg",
    fileSize: "4.2 MB",
    category: "photos",
    subcategory: "event-photos"
  },
  {
    id: "event-3",
    title: "Meeting with Supporters",
    description: "Photos from meeting with party supporters",
    date: "2024-03-05",
    fileUrl: "/uploads/events/supporters_meeting.jpg",
    fileName: "supporters_meeting.jpg",
    fileSize: "3.8 MB",
    category: "photos",
    subcategory: "event-photos"
  },
  {
    id: "event-4",
    title: "Youth Wing Event",
    description: "Photos from youth wing engagement event",
    date: "2024-03-18",
    fileUrl: "/uploads/events/youth_event.jpg",
    fileName: "youth_event.jpg",
    fileSize: "4.0 MB",
    category: "photos",
    subcategory: "event-photos"
  },

  // FINANCIAL REPORTS 
  {
    id: "financial-1",
    title: "CCU Annual Financial Reports 30 June 2024",
    description: "Annual Financial Reports for the Year Ended June 30, 2024",
    date: "2024-06-30",
    fileUrl: "/uploads/financial-report-2024.pdf",
    fileName: "financial-report-2024.pdf",
    fileSize: "3.8 MB",
    category: "documents",
    subcategory: "financial-reports"
  },
  {
    id: "financial-2",
    title: "CCU Statement of Financial Position 30 June 2024",
    description: "Statement of Financial Position for the Year Ended June 30, 2024",
    date: "2024-06-30",
    fileUrl: "/uploads/financial-stmt-position-2024.pdf",
    fileName: "financial-stmt-position-2024.pdf",
    fileSize: "4.8 MB",
    category: "documents",
    subcategory: "financial-reports"
  },
  {
    id: "financial-3",
    title: "CCU Statement of Financial Performance 30 June 2024",
    description: "Statement of Financial Performance for the Year Ended June 30, 2024",
    date: "2024-06-30",
    fileUrl: "/uploads/financial-stmt-performance-2024.pdf",
    fileName: "financial-stmt-performance-2024.pdf",
    fileSize: "3.2 MB",
    category: "documents",
    subcategory: "financial-reports"
  },

  // CONSTITUTION & MANIFESTO
  {
    id: "constitution-1",
    title: "CCU Party Constitution 2020",
    description: "Official party constitution document",
    date: "2024-01-01",
    fileUrl: "/uploads/ccu-constitution-sept-2020.pdf",
    fileName: "ccu-constitution-sept-2020.pdf",
    fileSize: "3.5 MB",
    category: "documents",
    subcategory: "constitution"
  },
  {
    id: "constitution-2",
    title: "CCU Manifesto",
    description: "Official party manifesto document",
    date: "2024-01-01",
    fileUrl: "/uploads/ccu-manifesto.pdf",
    fileName: "ccu-manifesto.pdf",
    fileSize: "3.5 MB",
    category: "documents",
    subcategory: "constitution"
  },

  // MEETING NOTICES
  {
    id: "notice-1",
    title: "NEC Meeting Notice - 10 November 2023",
    description: "Notice of National Executive Committee Meeting on 10th November 2023",
    date: "2023-10-23",
    fileUrl: "/uploads/notice-nec-meeting-2023-10-11.pdf",
    fileName: "notice-nec-meeting-2023-10-11.pdf",
    fileSize: "1.5 MB",
    category: "documents",
    subcategory: "notices"
  },

  // FORMS & APPLICATIONS
  {
    id: "form-1",
    title: "CU Member Registration Form",
    description: "CU Member Registration Form",
    date: "2024-01-01",
    fileUrl: "/uploads/membership-form.pdf",
    fileName: "membership-form.pdf",
    fileSize: "2.1 MB",
    category: "documents",
    subcategory: "forms"
  },
  {
    id: "form-2",
    title: "CCU Membership Application Form",
    description: "Official membership application form",
    date: "2024-01-01",
    fileUrl: "/uploads/membership-form.pdf",
    fileName: "membership-form.pdf",
    fileSize: "1.8 MB",
    category: "documents",
    subcategory: "forms"
  },
];

// Helper function to get file icon based on type
const getFileIcon = (fileUrl: string) => {
  const extension = fileUrl.split('.').pop()?.toLowerCase();
  switch (extension) {
    case 'pdf':
      return <FileText className="w-5 h-5 text-red-500" />;
    case 'png':
    case 'jpg':
    case 'jpeg':
    case 'svg':
    case 'gif':
    case 'webp':
      return <ImageIcon className="w-5 h-5 text-blue-500" />;
    case 'mp4':
    case 'avi':
    case 'mov':
      return <Video className="w-5 h-5 text-purple-500" />;
    case 'mp3':
    case 'wav':
      return <Video className="w-5 h-5 text-green-500" />;
    default:
      return <File className="w-5 h-5 text-gray-500" />;
  }
};

// Helper function to check if file is previewable (images or PDFs)
const isPreviewable = (fileUrl: string) => {
  const extension = fileUrl.split('.').pop()?.toLowerCase();
  return ['png', 'jpg', 'jpeg', 'svg', 'pdf', 'gif', 'webp'].includes(extension || '');
};

// Helper function to check if file is an image
const isImage = (fileUrl: string) => {
  const extension = fileUrl.split('.').pop()?.toLowerCase();
  return ['png', 'jpg', 'jpeg', 'svg', 'gif', 'webp'].includes(extension || '');
};

// Helper function to get file extension
const getFileExtension = (url: string) => {
  const extension = url.split('.').pop()?.toLowerCase();
  return extension || 'file';
};

// Function to download file with page refresh after download
const downloadFile = async (fileUrl: string, fileName: string) => {
  try {
    console.log(`Attempting to download: ${fileUrl}`);

    // Check if file exists
    const response = await fetch(fileUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);

    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = fileName || fileUrl.split('/').pop() || 'download';
    link.style.display = 'none';

    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up the URL object
    window.URL.revokeObjectURL(downloadUrl);

    console.log(`File downloaded successfully: ${fileName}`);

    // Refresh the page after a short delay
    setTimeout(() => {
      window.location.reload();
    }, 1000);

    return true;

  } catch (error) {
    console.error('Download error:', error);

    // Fallback: Try to open in new tab for PDFs and images
    if (fileUrl.endsWith('.pdf') || isImage(fileUrl)) {
      window.open(fileUrl, '_blank');
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      return true;
    } else {
      alert(`Unable to download file: ${fileName}\n\nPlease try opening the link directly:\n${fileUrl}`);
      return false;
    }
  }
};

// Function to handle download with user feedback
const handleDownloadWithFeedback = async (fileUrl: string, fileName: string, title: string) => {
  // Show downloading indicator
  const downloadBtn = document.activeElement as HTMLElement;

  if (downloadBtn) {
    const originalContent = downloadBtn.innerHTML;
    downloadBtn.innerHTML = '<span class="animate-spin mr-2"><RefreshCw className="w-4 h-4" /></span>Downloading...';
    downloadBtn.classList.add('opacity-50', 'cursor-not-allowed');
    downloadBtn.setAttribute('disabled', 'true');
  }

  try {
    const success = await downloadFile(fileUrl, fileName);
    if (success) {
      // Success feedback handled by page refresh
      return;
    }
  } catch (error) {
    console.error('Download failed:', error);
    alert(`Failed to download ${title}. Please try again or contact support.`);
  } finally {
    // Only restore if download failed (success triggers refresh)
    const downloadBtn = document.querySelector('[data-downloading="true"]') as HTMLElement;
    if (downloadBtn) {
      downloadBtn.innerHTML = '<svg class="mr-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>Download';
      downloadBtn.classList.remove('opacity-50', 'cursor-not-allowed');
      downloadBtn.removeAttribute('disabled');
      downloadBtn.removeAttribute('data-downloading');
    }
  }
};

// Preview Modal Component
const PreviewModal = ({
  open,
  onOpenChange,
  fileUrl,
  title,
  fileName
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  fileUrl: string;
  title: string;
  fileName: string;
}) => {
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [rotation, setRotation] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const isImageFile = isImage(fileUrl);
  const isPDF = fileUrl.toLowerCase().endsWith('.pdf');

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.5));
  const handleZoomReset = () => setZoom(1);
  const handleRotate = () => setRotation(prev => (prev + 90) % 360);
  const handleFullscreen = () => setIsFullscreen(!isFullscreen);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`${isFullscreen ? 'w-screen h-screen max-w-none max-h-none rounded-none' : 'max-w-6xl max-h-[90vh]'} overflow-hidden flex flex-col p-0`}>
        <DialogHeader className="px-6 py-4 border-b bg-background">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg truncate">{title}</DialogTitle>
            <div className="flex items-center gap-2">
              {isImageFile && (
                <>
                  <div className="flex items-center gap-1 mr-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleZoomOut}
                      disabled={zoom <= 0.5}
                      className="h-8 w-8"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleZoomReset}
                      className="h-8 px-3 text-xs"
                    >
                      {Math.round(zoom * 100)}%
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleZoomIn}
                      disabled={zoom >= 3}
                      className="h-8 w-8"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleRotate}
                      className="h-8 w-8"
                    >
                      <RefreshCw className="w-4 h-4" />
                    </Button>
                  </div>
                </>
              )}

              <Button
                variant="outline"
                size="icon"
                onClick={handleFullscreen}
                className="h-8 w-8"
                title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={handleDownload}
                className="h-8 w-8"
                title="Download"
              >
                <Download className="w-4 h-4" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => onOpenChange(false)}
                className="h-8 w-8"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div
          ref={containerRef}
          className="flex-1 overflow-auto p-4 bg-gray-50 flex items-center justify-center"
        >
          {isImageFile ? (
            <div className="relative">
              <img
                src={fileUrl}
                alt={title}
                className="max-w-full max-h-[70vh] object-contain transition-transform duration-200"
                style={{
                  transform: `scale(${zoom}) rotate(${rotation}deg)`,
                  transformOrigin: 'center'
                }}
              />
            </div>
          ) : isPDF ? (
            <div className="w-full h-full">
              <iframe
                src={`${fileUrl}#view=fitH`}
                className="w-full h-full min-h-[500px] border-0 rounded-lg shadow-lg"
                title={title}
              />
            </div>
          ) : (
            <div className="text-center p-8">
              <File className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Preview not available for this file type</p>
              <Button onClick={handleDownload} className="mt-4">
                <Download className="mr-2 w-4 h-4" />
                Download to view
              </Button>
            </div>
          )}
        </div>

        <div className="px-6 py-3 border-t bg-muted/20 flex items-center justify-between">
          <div className="text-sm text-muted-foreground flex items-center gap-4">
            <span>Preview Mode</span>
            <button
              onClick={handleDownload}
              className="text-primary hover:underline flex items-center gap-1 text-sm"
            >
              <Download className="w-3 h-3" />
              Download
            </button>
          </div>
          <div className="text-xs text-muted-foreground">
            {isImageFile ? 'Scroll to zoom • Click and drag to pan' : 'Scroll to navigate • Press ESC to close'}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default function Downloads() {
  const navigate = useNavigate();
  const location = useLocation();

  // Parse query parameters from URL
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get('category');
  const subcategoryParam = searchParams.get('subcategory');
  const highlightParam = searchParams.get('highlight');

  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(subcategoryParam);
  const [highlightedItem, setHighlightedItem] = useState<string | null>(highlightParam);
  const [filteredDocuments, setFilteredDocuments] = useState(mediaDocuments);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDownloading, setIsDownloading] = useState<string | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [previewItem, setPreviewItem] = useState<typeof mediaDocuments[0] | null>(null);

  const highlightedRef = useRef<HTMLDivElement>(null);

  // Filter documents based on selected category, subcategory, and search
  useEffect(() => {
    let filtered = mediaDocuments;

    if (selectedCategory) {
      filtered = filtered.filter(doc => doc.category === selectedCategory);
    }

    if (selectedSubcategory) {
      filtered = filtered.filter(doc => doc.subcategory === selectedSubcategory);
      setActiveSubcategory(selectedSubcategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(doc =>
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredDocuments(filtered);

    // Set highlighted item from URL parameter
    if (highlightParam) {
      setHighlightedItem(decodeURIComponent(highlightParam));
    }
  }, [selectedCategory, selectedSubcategory, searchQuery, highlightParam]);

  // Scroll to highlighted item when component mounts
  useEffect(() => {
    if (highlightedRef.current && highlightedItem) {
      setTimeout(() => {
        highlightedRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }, 300);
    }
  }, [highlightedItem]);

  const handleDownload = async (fileUrl: string, fileName: string, title: string) => {
    setIsDownloading(fileName);
    await handleDownloadWithFeedback(fileUrl, fileName, title);
    setIsDownloading(null);
  };

  const handlePreview = (document: typeof mediaDocuments[0]) => {
    setPreviewItem(document);
  };

  const handleClearFilters = () => {
    setSelectedCategory(null);
    setSelectedSubcategory(null);
    setSearchQuery("");
    setHighlightedItem(null);
    setActiveSubcategory(null);
    // Update URL without filters
    navigate('/downloads');
  };

  const getCategoryTitle = () => {
    if (!selectedCategory) return "All Documents";

    const category = mediaCategories.find(cat => cat.id === selectedCategory);
    if (selectedSubcategory) {
      if (selectedCategory === "documents") {
        const subcategory = documentSubcategories.find(sub => sub.id === selectedSubcategory);
        return `${category?.title} - ${subcategory?.title}`;
      } else if (selectedCategory === "photos") {
        const subcategory = photosSubcategories.find(sub => sub.id === selectedSubcategory);
        return `${category?.title} - ${subcategory?.title}`;
      }
      return `${category?.title} - ${selectedSubcategory}`;
    }

    return category?.title || "Documents";
  };

  const handleRemoveHighlight = () => {
    setHighlightedItem(null);
    // Update URL without highlight parameter
    if (selectedCategory && selectedSubcategory) {
      navigate(`/downloads?category=${selectedCategory}&subcategory=${selectedSubcategory}`);
    } else if (selectedCategory) {
      navigate(`/downloads?category=${selectedCategory}`);
    } else {
      navigate('/downloads');
    }
  };

  // Check if a document matches the highlighted item
  const isHighlighted = (documentTitle: string) => {
    return highlightedItem && documentTitle.toLowerCase().includes(highlightedItem.toLowerCase());
  };

  const updateUrlWithCategory = (categoryId: string | null, subcategoryId: string | null = null) => {
    if (categoryId && subcategoryId) {
      navigate(`/downloads?category=${categoryId}&subcategory=${subcategoryId}`);
    } else if (categoryId) {
      navigate(`/downloads?category=${categoryId}`);
    } else {
      navigate('/downloads');
    }
  };

  const handleSubcategoryClick = (subcategoryId: string) => {
    setSelectedSubcategory(subcategoryId);
    setActiveSubcategory(subcategoryId);
    updateUrlWithCategory(selectedCategory, subcategoryId);
  };

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(null);
    setActiveSubcategory(null);
    updateUrlWithCategory(categoryId);
  };

  // Group documents by subcategory
  const groupDocumentsBySubcategory = () => {
    const grouped: { [key: string]: typeof mediaDocuments } = {};

    filteredDocuments.forEach(doc => {
      const subcategory = doc.subcategory || 'other';
      if (!grouped[subcategory]) {
        grouped[subcategory] = [];
      }
      grouped[subcategory].push(doc);
    });

    return grouped;
  };

  const groupedDocuments = groupDocumentsBySubcategory();

  return (
    <>
      <Helmet>
        <title>Downloads | Chama Cha Uzalendo Kenya</title>
        <meta name="description" content="Download all CCU documents, media resources, and party materials." />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="bg-primary pattern-overlay py-16">
          <div className="container mx-auto px-4">
            <Button
              variant="ghost"
              className="text-primary-foreground mb-6 hover:bg-white/10"
              onClick={() => navigate('/media')}
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Media
            </Button>
            <div className="text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                {getCategoryTitle()}
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                Download official CCU documents, media files, and resources
              </p>
            </div>
          </div>
        </section>

        <section className="container-section">
          {/* Filters */}
          <div className="mb-8 p-6 bg-muted rounded-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-muted-foreground" />
                <h3 className="font-display text-lg font-bold">Filter Documents</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button
                  variant={!selectedCategory ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedSubcategory(null);
                    updateUrlWithCategory(null);
                  }}
                >
                  All
                </Button>
                {mediaCategories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    <category.icon className="mr-2 w-4 h-4" />
                    {category.title}
                  </Button>
                ))}
                {(selectedCategory || selectedSubcategory || highlightedItem) && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleClearFilters}
                  >
                    Clear Filters
                  </Button>
                )}
              </div>
            </div>

            {/* Subcategory filters */}
            {selectedCategory === "documents" && (
              <div className="mb-6">
                <h4 className="font-medium mb-3 text-muted-foreground">Document Types:</h4>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={!selectedSubcategory ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      setSelectedSubcategory(null);
                      setActiveSubcategory(null);
                      updateUrlWithCategory(selectedCategory, null);
                    }}
                  >
                    All Documents
                  </Button>
                  {documentSubcategories.map((subcategory) => (
                    <Button
                      key={subcategory.id}
                      variant={activeSubcategory === subcategory.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleSubcategoryClick(subcategory.id)}
                      className="flex items-center gap-2"
                    >
                      <subcategory.icon className="w-4 h-4" />
                      {subcategory.title}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {selectedCategory === "photos" && (
              <div className="mb-6">
                <h4 className="font-medium mb-3 text-muted-foreground">Photos & Graphics Types:</h4>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={!selectedSubcategory ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      setSelectedSubcategory(null);
                      setActiveSubcategory(null);
                      updateUrlWithCategory(selectedCategory, null);
                    }}
                  >
                    All Photos & Graphics
                  </Button>
                  {photosSubcategories.map((subcategory) => (
                    <Button
                      key={subcategory.id}
                      variant={activeSubcategory === subcategory.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleSubcategoryClick(subcategory.id)}
                      className="flex items-center gap-2"
                    >
                      <subcategory.icon className="w-4 h-4" />
                      {subcategory.title}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div>

            {/* Highlighted item notice */}
            {highlightedItem && (
              <div className="mt-4 p-3 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <span className="text-sm font-medium">
                    Showing highlighted item: <span className="text-primary">{highlightedItem}</span>
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleRemoveHighlight}
                  className="h-7 text-xs"
                >
                  Remove highlight
                </Button>
              </div>
            )}
          </div>

          {/* Documents List */}
          <div className="space-y-8">
            <div className="flex items-center justify-between mb-4">
              <p className="text-muted-foreground">
                Showing {filteredDocuments.length} of {mediaDocuments.length} documents
                {selectedCategory && (
                  <span className="ml-2 px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                    {mediaCategories.find(cat => cat.id === selectedCategory)?.title}
                  </span>
                )}
                {selectedSubcategory && (
                  <span className="ml-2 px-2 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs">
                    {selectedCategory === "documents"
                      ? documentSubcategories.find(sub => sub.id === selectedSubcategory)?.title
                      : photosSubcategories.find(sub => sub.id === selectedSubcategory)?.title
                    }
                  </span>
                )}
              </p>
            </div>

            {filteredDocuments.length === 0 ? (
              <div className="text-center py-12">
                <File className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-display text-xl font-bold mb-2">No documents found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your filters or search terms
                </p>
                <Button onClick={handleClearFilters}>Clear All Filters</Button>
              </div>
            ) : (
              // Show grouped documents for categories with subcategories
              (selectedCategory === "documents" || selectedCategory === "photos") && !selectedSubcategory ? (
                Object.entries(groupedDocuments).map(([subcategoryId, docs]) => {
                  let subcategory;
                  if (selectedCategory === "documents") {
                    subcategory = documentSubcategories.find(sub => sub.id === subcategoryId);
                  } else if (selectedCategory === "photos") {
                    subcategory = photosSubcategories.find(sub => sub.id === subcategoryId);
                  }

                  return (
                    <div key={subcategoryId} className="mb-8">
                      {/* Subcategory Header */}
                      {subcategory && (
                        <div className="flex items-center gap-3 mb-4 p-4 bg-muted/50 rounded-lg">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <subcategory.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-display text-lg font-bold">{subcategory.title}</h3>
                            <p className="text-sm text-muted-foreground">{subcategory.description} • {docs.length} files</p>
                          </div>
                        </div>
                      )}

                      {/* Documents in this subcategory */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {docs.map((document) => {
                          const highlighted = isHighlighted(document.title);
                          const isDownloadingThis = isDownloading === document.fileName;
                          const canPreview = isPreviewable(document.fileUrl);

                          return (
                            <div
                              key={document.id}
                              ref={highlighted ? highlightedRef : null}
                              className={`bg-card border rounded-xl p-4 transition-all duration-200 hover:shadow-md ${highlighted
                                ? 'border-primary shadow-lg ring-2 ring-primary/20 bg-primary/5'
                                : 'border-border hover:border-primary/50'
                                }`}
                            >
                              <div className="flex flex-col h-full">
                                <div className="flex items-start gap-3 mb-3">
                                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${highlighted ? 'bg-primary/20' : 'bg-muted'
                                    }`}>
                                    {getFileIcon(document.fileUrl)}
                                    {highlighted && (
                                      <div className="absolute -top-1 -right-1">
                                        <Star className="w-4 h-4 text-primary fill-primary" />
                                      </div>
                                    )}
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                      <h3 className="font-display font-bold text-sm line-clamp-2">
                                        {document.title}
                                      </h3>
                                    </div>
                                    <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                                      {document.description}
                                    </p>
                                  </div>
                                </div>

                                {/* Thumbnail for images */}
                                {isImage(document.fileUrl) && (
                                  <div className="mb-3 rounded-lg overflow-hidden bg-muted">
                                    <img
                                      src={document.fileUrl}
                                      alt={document.title}
                                      className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                                      onClick={() => handlePreview(document)}
                                    />
                                  </div>
                                )}

                                <div className="mt-auto">
                                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                                    <span className="flex items-center gap-1">
                                      <Calendar className="w-3 h-3" />
                                      {new Date(document.date).toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric'
                                      })}
                                    </span>
                                    <span>{document.fileSize}</span>
                                  </div>

                                  <div className="flex items-center gap-2">
                                    {canPreview && (
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handlePreview(document)}
                                        className="flex-1 flex items-center justify-center gap-1 text-xs"
                                      >
                                        <Eye className="w-3 h-3" />
                                        Preview
                                      </Button>
                                    )}
                                    <Button
                                      size="sm"
                                      onClick={() => handleDownload(document.fileUrl, document.fileName, document.title)}
                                      disabled={isDownloadingThis}
                                      data-downloading={isDownloadingThis ? "true" : undefined}
                                      className={`flex-1 ${highlighted ? 'bg-primary hover:bg-primary/90' : ''} ${isDownloadingThis ? 'opacity-50 cursor-not-allowed' : ''
                                        }`}
                                    >
                                      {isDownloadingThis ? (
                                        <>
                                          <RefreshCw className="mr-1 w-3 h-3 animate-spin" />
                                          Downloading...
                                        </>
                                      ) : (
                                        <>
                                          <Download className="mr-1 w-3 h-3" />
                                          Download
                                        </>
                                      )}
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })
              ) : (
                // Flat list for other categories or when subcategory is selected
                <div className="space-y-4">
                  {filteredDocuments.map((document) => {
                    const highlighted = isHighlighted(document.title);
                    const isDownloadingThis = isDownloading === document.fileName;
                    const canPreview = isPreviewable(document.fileUrl);

                    return (
                      <div
                        key={document.id}
                        ref={highlighted ? highlightedRef : null}
                        className={`bg-card border rounded-xl p-6 transition-all duration-200 ${highlighted
                          ? 'border-primary shadow-lg ring-2 ring-primary/20 bg-primary/5'
                          : 'border-border hover:border-primary/50'
                          }`}
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${highlighted ? 'bg-primary/20' : 'bg-muted'
                              }`}>
                              {getFileIcon(document.fileUrl)}
                              {highlighted && (
                                <div className="absolute -top-1 -right-1">
                                  <Star className="w-4 h-4 text-primary fill-primary" />
                                </div>
                              )}
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-display text-lg font-bold">
                                  {document.title}
                                </h3>
                                {highlighted && (
                                  <span className="px-2 py-0.5 bg-primary text-primary-foreground rounded-full text-xs font-medium">
                                    Highlighted
                                  </span>
                                )}
                                {document.subcategory && (
                                  <span className="px-2 py-0.5 bg-blue-500/10 text-blue-500 rounded-full text-xs">
                                    {selectedCategory === "documents"
                                      ? documentSubcategories.find(sub => sub.id === document.subcategory)?.title
                                      : photosSubcategories.find(sub => sub.id === document.subcategory)?.title
                                    }
                                  </span>
                                )}
                              </div>
                              <p className="text-muted-foreground mb-2">
                                {document.description}
                              </p>
                              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {new Date(document.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                  })}
                                </span>
                                <span className="flex items-center gap-1">
                                  <FileType className="w-4 h-4" />
                                  {getFileExtension(document.fileUrl).toUpperCase()}
                                </span>
                                <span>{document.fileSize}</span>
                                {canPreview && (
                                  <span className="text-blue-500 flex items-center gap-1">
                                    <Eye className="w-3 h-3" />
                                    Preview available
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            {canPreview && (
                              <Button
                                variant="outline"
                                onClick={() => handlePreview(document)}
                                className="flex items-center gap-2"
                              >
                                <Eye className="w-4 h-4" />
                                Preview
                              </Button>
                            )}
                            <Button
                              onClick={() => handleDownload(document.fileUrl, document.fileName, document.title)}
                              disabled={isDownloadingThis}
                              data-downloading={isDownloadingThis ? "true" : undefined}
                              className={`flex-shrink-0 ${highlighted ? 'bg-primary hover:bg-primary/90' : ''} ${isDownloadingThis ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                            >
                              {isDownloadingThis ? (
                                <>
                                  <RefreshCw className="mr-2 w-4 h-4 animate-spin" />
                                  Downloading...
                                </>
                              ) : (
                                <>
                                  <Download className="mr-2 w-4 h-4" />
                                  Download
                                </>
                              )}
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )
            )}
          </div>

          {/* Back to Categories */}
          <div className="mt-8 text-center">
            <Button
              variant="outline"
              onClick={() => navigate('/media')}
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Media Categories
            </Button>
          </div>
        </section>

        {/* Preview Modal */}
        {previewItem && (
          <PreviewModal
            open={!!previewItem}
            onOpenChange={() => setPreviewItem(null)}
            fileUrl={previewItem.fileUrl}
            title={previewItem.title}
            fileName={previewItem.fileName}
          />
        )}
      </Layout>
    </>
  );
}