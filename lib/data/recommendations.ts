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
    company: "Fashion Institute of Technology, New York",
    content: "Piyush's innovative approach to design, particularly his ability to blend modern trends with historic elements, reflect in his outstanding portfolio. His creativity, academic dedication, and excellent interpersonal skills make him an outstanding addition to any design position.",
    rating: 5,
  },
  {
    name: "Yashaswi Anand",
    role: "Professor Department of Fashion Design",
    company: " National Institute of Fashion Technology Bengaluru",
    content: "Piyush was one of the most creative and dedicated students in his class, consistently demonstrating strong design sensibilities, originality, and a keen eye for detail. His academic journey at NIFT and FIT, reflects his commitment to excellence. I am confident that Piyush will continue to make a meaningful contribution to the fashion industry, and I highly recommend him as a talented and promising fashion designer.",
    rating: 5,
  },
  
]
