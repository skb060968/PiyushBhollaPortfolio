// Recommendations/Testimonials data
export interface Recommendation {
  name: string
  role: string
  company?: string
  location?: string
  content: string
  rating?: number
}

export const recommendations: Recommendation[] = [
  {
    name: "Helen Castillo",
    role: "Fashion Art Professor",
    company: "Fashion Institute of Technology",
    location: "New York",
    content: "Piyush's innovative approach to design, particularly his ability to blend modern trends with historic elements, reflect in his outstanding portfolio. His creativity, academic dedication, and excellent interpersonal skills make him an outstanding addition to any design position.",
    rating: 5,
  },
  {
    name: "Yashaswi Anand",
    role: "Professor Department of Fashion Design",
    company: "National Institute of Fashion Technology",
    location: "Bengaluru",
    content: "Piyush was one of the most creative and dedicated students in his class, consistently demonstrating strong design sensibilities, originality, and a keen eye for detail. His academic journey at NIFT and FIT, reflects his commitment to excellence. I am confident that Piyush will continue to make a meaningful contribution to the fashion industry, and I highly recommend him as a talented and promising fashion designer.",
    rating: 5,
  },
  {
    name: "Troy Richards",
    role: "Dean, School of Art and Design",
    company: "Fashion Institute of Technology",
    location: "New York",
    content: "Piyush has been placed on the Dean's List for the Fall 2024 and Spring 2025 semesters. His achievement confirms his mastery of course work in both the area of his major and in the broader liberal arts, and indicates that he is a well-rounded student who maintains a disciplined approach to academic work. We wish him the best for his continued success.",
    rating: 5,
  },
  {
    name: "Guneet Arora",
    role: "Assistant Manager Design",
    company: "Arvind Fashions | U.S. Polo Assn. | NIFT'24",
    location: "Bengaluru",
    content: "I had the pleasure of mentoring Piyush during his time at NIFT, and he has always stood out for his creativity, curiosity, and exceptional eye for detail. He approaches every project with a thoughtful design mindset and is constantly exploring new ideas, materials, and perspectives to push his work further. His dedication, willingness to learn, and attention to every detail made him a valuable contributor throughout the project. I'm excited to see where his creativity takes him next, and I have no doubt that he'll continue creating impactful work in the future.",
    rating: 5,
  },
  {
    name: "Jubinav Chadha",
    role: "Head Designer and CEO",
    company: "Jubinav Chadha Design Studio LLP",
    location: "Delhi",
    content: "During the internship, Piyush showed creativity, dedication, and a strong willingness to learn. He contributed to design research, embroidery and print development, mood boards, sketches, fabric selection and sample coordination with professionalism and attention to detail. He is a quick learner, a dependable team player, and I confidently recommend him for future opportunities in the fashion industry.",
    rating: 5,
  },
  
]
