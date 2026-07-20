import Link from "next/link"
import Image from "next/image"
import { notFound, redirect } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { portfolioData, collections } from "@/lib/data/portfolio"
import { designProjects } from "@/lib/data/design-projects"
import { OrnateGoldFrame } from "@/components/FrameDesigns"

export function generateStaticParams() {
  return Object.keys(portfolioData).map((slug) => ({ slug }))
}

export default function CategoryPage({
  params,
}: {
  params: { slug: string }
}) {
  const category = portfolioData[params.slug]
  
  if (!category) return notFound()

  // Redirect Fashion Illustrations to its own page
  if (params.slug === "fashion-illustrations") {
    redirect("/fashion-illustrations")
  }

  // Determine what to show based on category slug
  const isDesignProjects = params.slug === "design-projects"
  const isCollectionLookbook = params.slug === "collection-lookbook"

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#1f1f1f' }}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="container-custom">
          {/* Back Link */}
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 mb-8 transition group"
            style={{ color: '#D4AF37' }}
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-sans text-sm uppercase tracking-wider">Back to Home</span>
          </Link>

          {/* Category Header */}
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-8" style={{ color: '#D4AF37' }}>
              {category.title}
            </h1>
            
            {category.description && (
              <p className="font-sans text-xl leading-relaxed mb-6" style={{ color: '#D4AF37', opacity: 0.9 }}>
                {category.description}
              </p>
            )}

            {isDesignProjects && (
              <p className="font-sans text-lg leading-relaxed mb-8" style={{ color: '#D4AF37', opacity: 0.9 }}>
                A showcase of major design projects and graduation collections. Each project represents a unique creative vision and artistic exploration.
              </p>
            )}

            {isCollectionLookbook && (
              <p className="font-sans text-lg leading-relaxed mb-8" style={{ color: '#D4AF37', opacity: 0.9 }}>
                Each collection tells a story—of heritage, innovation, and the artistry of fashion. Explore curated pieces that transcend trends and celebrate timeless elegance.
              </p>
            )}

            {/* Item Count */}
            <div className="flex items-center justify-center gap-4 text-base mb-8" style={{ color: '#D4AF37', opacity: 0.8 }}>
              <span className="font-sans">
                <span className="font-semibold">
                  {isDesignProjects ? designProjects.length : collections.length}
                </span>{' '}
                {isDesignProjects ? (designProjects.length === 1 ? 'Project' : 'Projects') : (collections.length === 1 ? 'Collection' : 'Collections')}
              </span>
            </div>

            {/* Decorative Line */}
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#D4AF37' }} />
          </div>
        </div>
      </section>

      {/* DESIGN PROJECTS - Show project cards directly */}
      {isDesignProjects && (
        <section className="pb-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {designProjects.map((project, index) => (
                <Link
                  key={project.slug}
                  href={`/design-project/${project.slug}`}
                  className="block group"
                >
                  {/* Square Project Image with Overlay Button */}
                  <div className="relative overflow-hidden transition-all duration-500 ease-out group-hover:-translate-y-2">
                    <div className="aspect-square relative">
                      <Image
                        src={project.coverImage}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      
                      {/* VIEW Button Overlay - Bottom Center */}
                      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-6">
                        <button className="font-sans text-sm font-semibold uppercase tracking-wider animate-view-button inline-block" style={{ color: '#D4AF37' }}>
                          VIEW
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* COLLECTIONS LINEUP - Show collections grid */}
      {isCollectionLookbook && (
        <section className="pb-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {collections.map((collection, index) => (
                <Link
                  key={collection.slug}
                  href={`/category/${params.slug}/${collection.slug}`}
                  className="group block"
                >
                  {/* Collection Image with Frame */}
                  <OrnateGoldFrame className="shadow-xl transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:-translate-y-2">
                    <div className="relative overflow-hidden rounded-lg shadow-lg ring-1 ring-stone-200">
                      <div className="aspect-[4/5] relative">
                        <Image
                          src={collection.coverImage}
                          alt={collection.name}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                        
                        {/* Content overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                          <p className="font-sans text-sm font-medium tracking-wider uppercase mb-2 opacity-90">
                            {collection.season}
                          </p>
                          <h3 className="font-display text-3xl lg:text-4xl font-bold mb-3">
                            {collection.name}
                          </h3>
                          <p className="font-sans text-sm text-gray-200 mb-4 line-clamp-2">
                            {collection.description}
                          </p>
                        </div>
                      </div>

                      {/* Hover CTA */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="font-sans px-8 py-3 bg-white rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500" style={{ color: '#1f1f1f' }}>
                          Explore Collection
                        </span>
                      </div>
                    </div>
                  </OrnateGoldFrame>
                </Link>
              ))}
            </div>

            {/* Back Button at Bottom */}
            <div className="text-center mt-16">
              <a
                href="/#portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-sans text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ 
                  backgroundColor: '#D4AF37',
                  color: '#1f1f1f',
                }}
              >
                <ArrowLeft size={20} />
                Back to Portfolio
              </a>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
