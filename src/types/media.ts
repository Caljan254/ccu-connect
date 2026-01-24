// types/media.ts
export interface MediaItem {
  id: string;
  name: string;
  size: string;
  type: 'pdf' | 'image' | 'zip' | 'video' | 'audio';
  downloadUrl: string;
  category: string;
  date?: string;
}

export interface MediaCategory {
  id: string;
  icon: any;
  title: string;
  description: string;
}

export interface DocumentItem {
  id: string;
  title: string;
  description?: string;
  date: string;
  fileUrl: string;
  fileSize: string;
  category: string;
}