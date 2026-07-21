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
    name: "Helen Castillo",
    role: "Fashion Art Professor",
    company: "Fashion Institute of Technology",
    content: "Piyush's innovative approach to design, particularly his ability to blend modern trends with historic elements, reflect in his outstanding portfolio. His creativity, academic dedication, and excellent interpersonal skills make him an outstanding addition to any design position.",
    rating: 5,
  },
  
]
