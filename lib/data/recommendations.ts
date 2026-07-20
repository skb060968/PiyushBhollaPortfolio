// Recommendations/Testimonials data
export interface Recommendation {
  name: string
  role: string
  company?: string
  content: string
  rating?: number
}

export const recommendations: Recommendation[] = [
  {
    name: "Priya Sharma",
    role: "Bollywood Actress",
    content: "Piyush Bholla has incredible understanding of Indian fashion. His designs are both contemporary and rooted in tradition.",
    rating: 5,
  },
  {
    name: "Rajesh Mehta",
    role: "Fashion Buyer",
    company: "Luxury Retail Group",
    content: "Working with Piyush has been an absolute pleasure. His attention to detail and creative vision are unmatched.",
    rating: 5,
  },
  {
    name: "Anita Desai",
    role: "Celebrity Stylist",
    content: "Piyush's collections always bring something fresh and exciting. His craftsmanship speaks for itself.",
    rating: 5,
  },
]
