export type ArtworkCategory = "Pencil" | "Charcoal" | "Realistic Sketch";

export interface Artwork {
  id: string;
  title: string;
  category: ArtworkCategory;
  images: string[]; // Array of image URLs for the artwork (supports multiple angles/zoom)
  featured: boolean;
}

export const galleryData: Artwork[] = [
  {
    id: "art-1",
    title: "Detailed Hyper-realistic Eye",
    category: "Realistic Sketch",
    images: ["/gallery/0a906ba9-e173-472e-9fff-ea25fe571516.jpg"],
    featured: true,
  },
  {
    id: "art-2",
    title: "Male Portrait Study",
    category: "Pencil",
    images: ["/gallery/0d96d489-b970-4264-876a-186d52054abb.jpg"],
    featured: true,
  },
  {
    id: "art-3",
    title: "Graphite Realistic Portrait",
    category: "Realistic Sketch",
    images: ["/gallery/92e0078e-71f3-4441-a664-6341d0c8fa3c.jpg"],
    featured: false,
  },
  {
    id: "art-4",
    title: "Charcoal Sketch Setup",
    category: "Charcoal",
    images: ["/gallery/Screenshot_20230902_090846_Instagram.jpg"],
    featured: false,
  },
  // Add more entries by copying the structure above
  // Ensure the image paths exist in the /public/gallery folder
];

export const categories: ArtworkCategory[] = [
  "Pencil",
  "Charcoal",
  "Realistic Sketch",
];
