# How to Add Recommendations

This guide explains how to add client testimonials and recommendations to the portfolio website.

---

## Why Recommendations?

According to industry best practices, testimonials sections are **standard in professional fashion portfolios** because they:
- Build credibility with potential clients
- Provide social proof of your work quality
- Show real-world impact of your designs
- Are recommended by major portfolio platforms (Pixpa, Format, etc.)

---

## Best Practices

### ✅ DO:
- Use **text quotes** from real clients (industry standard)
- Include client name, role, and company
- Convert email appreciations to clean text quotes
- Keep testimonials concise and impactful
- Show 3-6 strong recommendations (quality over quantity)
- Include press mentions or features if available

### ❌ DON'T:
- Show certificate images or email screenshots (not typical for fashion portfolios)
- Use fake or generic testimonials
- Include too many testimonials (makes it look cluttered)
- Show testimonials without attribution

---

## How to Add a Recommendation

### Step 1: Edit the Data File

Open `lib/data/recommendations.ts` and add your recommendation to the array:

```typescript
{
  name: "Client Name",
  role: "Their Title/Role",
  company: "Company Name", // Optional - omit if not applicable
  content: "The testimonial text goes here. Keep it concise and impactful.",
  rating: 5, // Optional - 1 to 5 stars, or omit to hide rating
}
```

### Step 2: Example with Real Email Appreciation

If someone sends you an appreciation email, extract the key quote:

**Email received:**
```
Hi Piyush,

I wanted to thank you for the amazing work on the Valley of Flowers collection. 
Your attention to detail and creative vision exceeded our expectations. The pieces 
were not only beautiful but also perfectly captured our brand aesthetic. I highly 
recommend your work to anyone looking for exceptional design.

Best regards,
Sarah Johnson
Creative Director, Fashion House Ltd.
```

**Convert to recommendation:**
```typescript
{
  name: "Sarah Johnson",
  role: "Creative Director",
  company: "Fashion House Ltd.",
  content: "Your attention to detail and creative vision exceeded our expectations. The pieces were not only beautiful but also perfectly captured our brand aesthetic.",
  rating: 5,
}
```

---

## Full Example

Here's how your `lib/data/recommendations.ts` should look with real testimonials:

```typescript
export const recommendations: Recommendation[] = [
  {
    name: "Priya Sharma",
    role: "Bollywood Actress",
    content: "Piyush's understanding of Indian fashion is incredible. His designs are both contemporary and rooted in tradition.",
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
    name: "Featured in Vogue India",
    role: "Press Feature",
    content: "Piyush Bholla's innovative approach to traditional craftsmanship sets him apart in the contemporary fashion landscape.",
  },
]
```

---

## When to Show the Section

### Currently: HIDDEN
The recommendations section is **commented out** in `app/page.tsx` to keep it hidden until you have real testimonials.

### To Show: Uncomment in app/page.tsx

When you have 3-5 real testimonials ready, edit `app/page.tsx`:

**Change from:**
```typescript
// import RecommendationsSection from "@/components/RecommendationsSection"

// <RecommendationsSection />
```

**To:**
```typescript
import RecommendationsSection from "@/components/RecommendationsSection"

<RecommendationsSection />
```

Then commit and push to make it live.

---

## Design Features

The recommendations section includes:
- ✅ Clean, elegant card design matching your portfolio aesthetic
- ✅ Gold color scheme (#D4AF37) consistent with the rest of the site
- ✅ Decorative quote marks
- ✅ Optional 5-star rating display
- ✅ Responsive grid (1 column mobile, 2 tablet, 3 desktop)
- ✅ Hover animations for engagement
- ✅ Professional typography

---

## Tips for Getting Testimonials

1. **Ask previous clients** you've worked with
2. **Request feedback** after completing projects
3. **LinkedIn recommendations** can be adapted to text quotes
4. **Press mentions** from articles or features
5. **Award citations** or competition feedback
6. **Collaboration partners** (stylists, photographers, brands)

---

## Summary

- Replace the **3 sample testimonials** in `recommendations.ts` with real ones
- Keep quotes **short and impactful** (2-3 sentences max)
- Include **name, role, and company** for credibility
- Uncomment the section in `app/page.tsx` when ready
- **Only push to production** when you have real testimonials

This follows fashion industry standards and builds professional credibility! 🎯
