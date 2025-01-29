export interface Movie {
  id: string;
  title: string;
  description: string;
  posterUrl: string;
  year: number;
  cast: string[];
  rating: number;
  duration: string;
  quality: string[];
  audio: string[];
  downloads: number;
  likes: number;
  views: number;
  channelName: string;
  channelLink: string;
  downloadLinks: {
    quality: string;
    size: string;
    url: string;
  }[];
}
