export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: "frontend" | "uxui" | "art";
  link?: string;
  github?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}
