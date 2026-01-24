// data/mediaData.ts
import { FileText, Image, Video, File } from "lucide-react";

export const mediaCategories = [
  {
    id: "branding",
    icon: Image,
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
    icon: Image,
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

// Simulated database of documents from uploads
export const mediaDocuments = [
  // Branding Documents
  {
    id: "brand-1",
    title: "CCU Logo (PNG)",
    description: "Official party logo in PNG format",
    date: "2024-01-15",
    fileUrl: "/uploads/branding/ccu-logo.png",
    fileSize: "2.4 MB",
    category: "branding"
  },
  {
    id: "brand-2",
    title: "CCU Logo (SVG)",
    description: "Official party logo in vector format",
    date: "2024-01-15",
    fileUrl: "/uploads/branding/ccu-logo.svg",
    fileSize: "124 KB",
    category: "branding"
  },
  {
    id: "brand-3",
    title: "Brand Guidelines",
    description: "Complete brand usage guidelines",
    date: "2024-01-10",
    fileUrl: "/uploads/branding/brand-guidelines.pdf",
    fileSize: "5.2 MB",
    category: "branding"
  },
  
  // Party Documents
  {
    id: "doc-1",
    title: "Party Constitution 2024",
    description: "Official party constitution document",
    date: "2024-02-01",
    fileUrl: "https://ccuparty.co.ke/wp-content/uploads/2015/10/Chama-Cha-Uzalendo-2025_.pdf",
    fileSize: "3.8 MB",
    category: "documents"
  },
  {
    id: "doc-2",
    title: "Financial Statements 2024",
    description: "Statement of Financial Performance for the Year Ended June 30, 2024",
    date: "2024-07-15",
    fileUrl: "https://ccuparty.co.ke/wp-content/uploads/2025/12/CCU-Financial-2024.pdf",
    fileSize: "4.8 MB",
    category: "documents"
  },
  {
    id: "doc-3",
    title: "Financial Report 2023",
    description: "CCU STATEMENT OF FINANCIAL PERFORMANCE FOR THE YEAR ENDED 30 JUNE 2023",
    date: "2023-07-15",
    fileUrl: "https://ccuparty.co.ke/wp-content/uploads/2023/12/CCU-Financial-2023.pdf",
    fileSize: "3.2 MB",
    category: "documents"
  },
  {
    id: "doc-4",
    title: "Election Manifesto",
    description: "Party election manifesto and promises",
    date: "2024-01-20",
    fileUrl: "/uploads/documents/election-manifesto.pdf",
    fileSize: "12.4 MB",
    category: "documents"
  },
  {
    id: "doc-5",
    title: "Notice of NEC Meeting - March 2024",
    description: "NOTICE OF A NEC MEETING TO BE HELD ON 12 MARCH 2024",
    date: "2024-02-28",
    fileUrl: "https://ccuparty.co.ke/wp-content/uploads/2024/02/NEC-Meeting-March-2024.pdf",
    fileSize: "1.5 MB",
    category: "documents"
  },
  {
    id: "doc-6",
    title: "CCU Pledge of Commitment",
    description: "Official party pledge document",
    date: "2022-05-21",
    fileUrl: "https://ccuparty.co.ke/wp-content/uploads/2022/05/CCU-Pledge.pdf",
    fileSize: "890 KB",
    category: "documents"
  },
  
  // Photos & Graphics
  {
    id: "photo-1",
    title: "Leadership Photos",
    description: "Official photos of party leadership",
    date: "2024-01-15",
    fileUrl: "/uploads/photos/leadership-photos.zip",
    fileSize: "45 MB",
    category: "photos"
  },
  {
    id: "photo-2",
    title: "Campaign Posters",
    description: "Campaign posters and materials",
    date: "2024-01-10",
    fileUrl: "/uploads/photos/campaign-posters.zip",
    fileSize: "28 MB",
    category: "photos"
  },
  
  // Videos & Audio
  {
    id: "video-1",
    title: "Party Anthem",
    description: "Official party anthem audio",
    date: "2024-01-05",
    fileUrl: "/uploads/videos/party-anthem.mp3",
    fileSize: "8.5 MB",
    category: "videos"
  },
  {
    id: "video-2",
    title: "2024 Campaign Video",
    description: "Official campaign video for 2024 elections",
    date: "2024-01-20",
    fileUrl: "/uploads/videos/campaign-2024.mp4",
    fileSize: "125 MB",
    category: "videos"
  },
];