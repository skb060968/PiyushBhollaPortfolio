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
    thumbnail: "/images/design.webp",
  },
  "fashion-illustrations": {
    title: "Fashion Illustrations",
    description: "",
    thumbnail: "/images/fashion.webp",
  },
  "collections-lineup": {
    title: "Collections Lineup",
    description: "",
    thumbnail: "/images/collection.webp",
  },
}

// Export collections for use in category pages
export { collections }
