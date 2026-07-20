// Portfolio data structure
import { collections } from "./collections"

export type Category = {
  title: string
  description: string
  thumbnail: string
}

export const portfolioData: Record<string, Category> = {
  "design-projects": {
    title: "Design Projects",
    description: "",
    thumbnail: "/images/home/design.webp",
  },
  "fashion-illustrations": {
    title: "Fashion Illustrations",
    description: "",
    thumbnail: "/images/home/fashion.webp",
  },
  "collection-lookbook": {
    title: "Collection Lookbook",
    description: "",
    thumbnail: "/images/home/collection.webp",
  },
}

// Export collections for use in category pages
export { collections }
